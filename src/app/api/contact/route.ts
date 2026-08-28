import { Resend } from "resend";
import { site } from "@/content/site";

export const runtime = "nodejs";

type Payload = {
  name?: unknown;
  email?: unknown;
  organization?: unknown;
  message?: unknown;
  website?: unknown; // honeypot — real people never fill this
};

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Malformed request." }, { status: 400 });
  }

  // Bots fill hidden fields. Return 200 so they learn nothing.
  if (str(body.website)) return Response.json({ ok: true });

  const name = str(body.name);
  const email = str(body.email);
  const organization = str(body.organization);
  const message = str(body.message);

  const fieldErrors: Record<string, string> = {};
  if (!name) fieldErrors.name = "Please enter your name.";
  if (!email) fieldErrors.email = "Please enter your email address.";
  else if (!EMAIL.test(email)) fieldErrors.email = "Please enter a valid email address.";
  if (!message) fieldErrors.message = "Please share what you would like to discuss.";
  if (name.length > 200 || email.length > 200 || organization.length > 200) {
    fieldErrors.name = "That is longer than expected.";
  }
  if (message.length > 5000) fieldErrors.message = "Please keep the message under 5000 characters.";

  if (Object.keys(fieldErrors).length > 0) {
    return Response.json({ fieldErrors }, { status: 422 });
  }

  // Truthiness, not `??`: a variable set to an empty string in a hosting
  // dashboard exists but is useless, and must fall back like an unset one.
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim() || site.email;
  const from = process.env.CONTACT_FROM_EMAIL?.trim() || "onboarding@resend.dev";

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set, contact form cannot send.");
    return Response.json(
      { error: "Message could not be sent right now. Please use the email address below." },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `${site.name} website <${from}>`,
      to: [to],
      replyTo: email,
      subject: `Website enquiry from ${name}${organization ? ` (${organization})` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        organization ? `Organization: ${organization}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("Resend rejected the message:", error);
      return Response.json(
        {
          error: "Message could not be sent right now. Please use the email address below.",
          // Surfaced in development only, so the real reason is visible while wiring things up.
          ...(process.env.NODE_ENV === "production" ? {} : { detail: error }),
        },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (cause) {
    console.error("Contact form failed:", cause);
    return Response.json(
      {
        error: "Message could not be sent right now. Please use the email address below.",
        ...(process.env.NODE_ENV === "production"
          ? {}
          : { detail: cause instanceof Error ? cause.message : String(cause) }),
      },
      { status: 500 },
    );
  }
}
