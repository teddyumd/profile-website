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
            <ContactForm />
          </div>
          <aside className="contact-side">
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
              <strong>Email:</strong>{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
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
