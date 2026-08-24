"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sentName, setSentName] = useState("");
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (statusMessage) statusRef.current?.focus();
  }, [statusMessage]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const form = new FormData(formEl);
    const nextErrors: Errors = {};
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const organization = String(form.get("organization") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!message) nextErrors.message = "Please share what you would like to discuss.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSent(false);
      setFailed("");
      setStatusMessage("Please correct the highlighted fields before continuing.");
      return;
    }

    setSending(true);
    setFailed("");
    setStatusMessage("Sending your message\u2026");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          organization,
          message,
          website: String(form.get("website") ?? ""),
        }),
      });

      if (response.ok) {
        setSent(true);
        setSentName(name);
        setStatusMessage(`Thank you ${name}, your message has been sent. I will get back to you as soon as possible.`);
        formEl.reset();
        return;
      }

      const data = await response.json().catch(() => ({}));
      if (response.status === 422 && data.fieldErrors) {
        setErrors(data.fieldErrors as Errors);
        setStatusMessage("Please correct the highlighted fields before continuing.");
        return;
      }

      const problem =
        typeof data.error === "string"
          ? data.error
          : "Message could not be sent right now. Please use the email address below.";
      setFailed(problem);
      setStatusMessage(problem);
    } catch {
      const problem =
        "Message could not be sent \u2014 please check your connection, or use the email address below.";
      setFailed(problem);
      setStatusMessage(problem);
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div ref={statusRef} className="visually-hidden" aria-live="polite" tabIndex={-1}>
        {statusMessage}
      </div>
      {sent ? (
        <div className="form-success" role="status">
          <h2>Message sent.</h2>
          <p>
            Thank you {sentName}, I will get back to you as soon as possible. I am
            also available at <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      ) : null}
      {failed ? (
        <div className="form-failure" role="alert">
          <h2>That did not go through.</h2>
          <p>
            {failed} You can reach me directly at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      ) : null}
      <p className="visually-hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </p>
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" autoComplete="name" required aria-describedby={errors.name ? "name-error" : undefined} />
        {errors.name ? <p id="name-error" className="form-error">{errors.name}</p> : null}
      </div>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" inputMode="email" required aria-describedby={errors.email ? "email-error" : undefined} />
        {errors.email ? <p id="email-error" className="form-error">{errors.email}</p> : null}
      </div>
      <div className="form-field">
        <label htmlFor="organization">Organization</label>
        <input id="organization" name="organization" autoComplete="organization" />
      </div>
      <div className="form-field">
        <label htmlFor="message">What would you like to discuss?</label>
        <textarea id="message" name="message" rows={6} required aria-describedby={errors.message ? "message-error" : undefined} />
        {errors.message ? <p id="message-error" className="form-error">{errors.message}</p> : null}
      </div>
      <button className="button" type="submit" disabled={sending}>
        <span>{sending ? "Sending\u2026" : site.cta}</span>
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
