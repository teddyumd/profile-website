import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextLink } from "@/components/ui/TextLink";
import { career } from "@/content/career";
import { education } from "@/content/education";
import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/siteUrl";

export const metadata: Metadata = {
  title: "Resume",
  alternates: { canonical: absoluteUrl("/resume") },
  description:
    "A concise overview of Tewodros Hailegeberel's experience across public-sector transformation, digital systems, government, infrastructure, digital health, geospatial intelligence, and technology leadership.",
};

const resumeHref = "/resume/Tewodros%20Hailegeberel%20Resume.pdf";
const resumeMeta = "PDF · 2 pages · updated August 2026";

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function ResumePage() {
  return (
    <>
      <section className="page-hero page-hero--tight">
        <div className="container page-hero-inner">
          <Eyebrow>Career</Eyebrow>
          <h1>I Started Out Making Maps.</h1>
          <div className="hero-story">
            <p>
              That grew into a career helping governments, utilities, and
              health programs build systems they can actually run — in
              Maryland, Washington DC, Ethiopia, and Burundi. Along the way I
              founded a company in Addis Ababa to give my city something it
              didn&rsquo;t have: street addresses.
            </p>
            <p>
              The technology is rarely the hard part. What I care about is
              whether the people left holding the system can keep it running
              once everyone else has gone home.
            </p>
          </div>
          <div className="hero-actions">
            <Button href="/contact">{site.cta}</Button>
            <TextLink href="/work">View Portfolio</TextLink>
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container resume-grid">
          <div className="career-list">
            {career.map((entry) => {
              const id = slugify(`${entry.organization}-${entry.period}`);
              return (
                <article className="career-entry" key={id} id={id}>
                  <div className="career-meta">
                    <p className="career-period">{entry.period}</p>
                    {entry.concurrent && (
                      <p className="career-badge">Concurrent role</p>
                    )}
                  </div>

                  <div className="career-body">
                    <h2>{entry.organization}</h2>
                    <p className="career-role">
                      {entry.title}
                      {entry.scope && (
                        <span className="career-scope"> · {entry.scope}</span>
                      )}
                      {entry.location && (
                        <span className="career-location"> · {entry.location}</span>
                      )}
                    </p>

                    <p className="career-summary">{entry.description}</p>

                    {entry.highlights && entry.highlights.length > 0 && (
                      <ul className="career-highlights">
                        {entry.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="resume-panel" aria-label="Resume download and contents">
            <div className="resume-panel-inner">
              <div className="resume-download">
                <p className="resume-download-label">Full resume</p>
                <a className="button" href={resumeHref} download>
                  <span>Download PDF</span>
                  <span className="arrow" aria-hidden="true">→</span>
                </a>
                <p className="note">{resumeMeta}</p>
              </div>

              <nav className="resume-jump" aria-label="Jump to role">
                <p className="resume-jump-label">Roles</p>
                <ol>
                  {career.map((entry) => (
                    <li key={entry.organization + entry.period}>
                      <a href={`#${slugify(`${entry.organization}-${entry.period}`)}`}>
                        <span className="resume-jump-org">{entry.organization}</span>
                        <span className="resume-jump-period">{entry.period}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" id="education" aria-labelledby="education-heading">
        <div className="container">
          <div className="section-heading">
            <Eyebrow>Education</Eyebrow>
            <h2 id="education-heading" className="visually-hidden">Education</h2>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <article className="education-entry" key={item.degree}>
                <p className="education-period">{item.period}</p>
                <div>
                  <h3>{item.degree}</h3>
                  <p className="education-institution">
                    {item.institution}
                    {item.note ? <span className="education-note"> · {item.note}</span> : null}
                  </p>
                  <p className="education-focus">{item.focus}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
