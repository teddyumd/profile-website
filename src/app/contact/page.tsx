import type { Metadata } from "next";
import { ContactForm } from "@/components/content/ContactForm";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/siteUrl";

export const metadata: Metadata = {
  title: "Discuss an Opportunity",
  alternates: { canonical: absoluteUrl("/contact") },
  description:
    "Contact Tewodros Hailegeberel to discuss leadership, advisory, public-sector transformation, digital systems, infrastructure, data, or technology opportunities across Africa and internationally.",
};

const opportunities = [
  {
    title: "Executive & Regional Leadership",
    body: "Senior roles requiring strategy, institutional engagement, technology judgment, and cross-functional leadership.",
  },
  {
    title: "Strategic Advisory",
    body: "Short- or medium-term advisory work on digital transformation, data, institutional strategy, investment roadmaps, or implementation.",
  },
  {
    title: "Public-Sector & Infrastructure Modernization",
    body: "Programs involving government systems, utilities, enterprise GIS, infrastructure data, governance, or operational modernization.",
  },
  {
    title: "Technology Partnerships in Africa",
    body: "Partnerships where technology companies, investors, or institutions need local institutional understanding, market context, or implementation strategy.",
  },
  {
    title: "Board / Advisory Roles",
    body: "Selective advisory roles where public-sector, technology, Africa, data, or institutional transformation experience is relevant.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <Eyebrow>Contact</Eyebrow>
          <h1>Working on a difficult systems problem?</h1>
          <p>
            I am interested in conversations around leadership, advisory, and
            partnership opportunities involving public-sector transformation,
            digital systems, data, infrastructure, geospatial intelligence, and
            technology across Africa and internationally.
          </p>
        </div>
      </section>
      <section className="section surface">
        <div className="container contact-grid">
          <div>
            <div className="form-heading">
              <h2>Send me a message</h2>
              <p>I read everything myself and reply personally.</p>
            </div>
            <ContactForm />
          </div>
          <aside className="contact-side">
            <h2>Reach me directly</h2>
            <div className="channel-grid">
              <a className="channel-card" href={`mailto:${site.email}`}>
                <p className="channel-name">Email</p>
                <p className="channel-value">{site.email}</p>
              </a>
              <a
                className="channel-card"
                href={site.linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                <p className="channel-name">LinkedIn</p>
                <p className="channel-value">Connect professionally</p>
              </a>
              <a
                className="channel-card"
                href={site.github}
                target="_blank"
                rel="noreferrer"
              >
                <p className="channel-name">GitHub</p>
                <p className="channel-value">See what I build</p>
              </a>
              <a
                className="channel-card channel-card--whatsapp"
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                <span className="channel-wa-mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.09 3.2 5.07 4.48.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" />
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01c-1.52 0-3.02-.41-4.32-1.18l-.31-.18-3.21.84.86-3.13-.2-.32a8.19 8.19 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24z" />
                  </svg>
                </span>
                <span>
                  <p className="channel-name">WhatsApp</p>
                  <p className="channel-value">Message me on WhatsApp</p>
                </span>
              </a>
            </div>
            <div className="rule" />
            <h2>Opportunity areas</h2>
            <div className="opportunity-list">
              {opportunities.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
            <div className="rule" />
            <p>
              <strong>Location:</strong> {site.location}
            </p>
            <p>Available for regional and international engagements.</p>
          </aside>
        </div>
      </section>
    </>
  );
}
