import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { DigitalHealthNarrative } from "@/components/content/DigitalHealthNarrative";
import { SystemDiagram } from "@/components/content/SystemDiagram";
import { TextLink } from "@/components/ui/TextLink";
import { caseStudies, getCaseStudy } from "@/content/work/caseStudies";
import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/siteUrl";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  // Search listings truncate around 60 chars of title and 160 of description,
  // so these are written separately from the on-page headline and summary.
  const metaTitle = study.metaTitle ?? study.title;
  const metaDescription = study.metaDescription ?? study.summary;

  return {
    // `absolute` bypasses the root layout's "%s | Tewodros Hailegeberel"
    // template. That suffix costs 23 of the ~60 characters a search result
    // shows, which is better spent on the subject of the case study.
    title: { absolute: metaTitle },
    description: metaDescription,
    alternates: {
      canonical: absoluteUrl(`/work/${study.slug}`),
    },
    openGraph: {
      title: `${metaTitle} | ${site.name}`,
      description: metaDescription,
      images: ["/opengraph-image"],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <section className="case-hero surface">
        <div className="container case-hero-grid">
          <div className="page-hero-inner">
            <p className="eyebrow">{study.label}</p>
            <h1>{study.title}</h1>
            <p>{study.deck}</p>
            <div>
              <TextLink href="/work">Back to portfolio</TextLink>
            </div>
          </div>
          <dl className="case-fact-list">
            {study.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container case-body">
          {study.visual ? (
          <div className="case-preview-media">
            {study.visual.type === "image" && study.visual.src ? (
              <Image
                src={study.visual.src}
                alt={study.visual.alt ?? ""}
                width={1500}
                height={844}
                sizes="(max-width: 767px) 100vw, 1180px"
              />
            ) : study.visual.type === "diagram" && study.visual.diagram ? (
              <SystemDiagram variant={study.visual.diagram} />
            ) : (
              <div className="case-visual-panel" aria-label={`${study.title} visual overview`}>
                <p className="eyebrow">{study.label}</p>
                <h2>{study.title}</h2>
                <p>Visual overview.</p>
              </div>
            )}
          </div>
          ) : null}
          {study.visual ? <p className="note">{study.visual.caption}</p> : null}

          {study.slug === "digital-health-transformation" ? (
            <>
              <DigitalHealthNarrative />
              <article className="case-section">
                <h2>Key business &amp; technical impact</h2>
                <ul className="impact-list impact-list--detail">
                  {study.impact.map((item) => (
                    <li key={item.label}>
                      <strong>{item.label}:</strong> {item.detail}
                    </li>
                  ))}
                </ul>
              </article>
            </>
          ) : (
            <>
          {study.context ? (
            <article className="case-section">
              <h2>Context</h2>
              <p>{study.context}</p>
            </article>
          ) : null}

          <article className="case-section">
            <h2>{study.challengeHeading}</h2>
            <p>{study.challenge}</p>
          </article>

          <article className="case-section">
            <h2>{study.roleHeading}</h2>
            <p>{study.roleDescription}</p>
          </article>

          <article className="case-section">
            <h2>What I did</h2>
            <ul className="plain-list">
              {study.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          {study.supportingDomains ? (
            <article className="case-section">
              <h2>Systems represented</h2>
              <ul className="plain-list">
                {study.supportingDomains.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ) : null}

          {study.approach ? (
            <article className="case-section">
              <h2>How I approached it</h2>
              <p>{study.approach}</p>
            </article>
          ) : null}

          <article className="case-section">
            <h2>Key business &amp; technical impact</h2>
            <ul className="impact-list impact-list--detail">
              {study.impact.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}:</strong> {item.detail}
                </li>
              ))}
            </ul>
          </article>

          {study.enabled ? (
            <article className="case-section case-section--enabled">
              <h2>What this enabled</h2>
              <p>{study.enabled}</p>
            </article>
          ) : null}

          <article className="case-lesson">
            <p className="eyebrow">Key lesson</p>
            <blockquote>{study.lesson}</blockquote>
          </article>

            </>
          )}
        </div>
      </section>

      <section className="section surface">
        <div className="container section-heading">
          <p className="eyebrow">Discuss an opportunity</p>
          <h2>Working on a difficult systems problem?</h2>
          <p>
            I am interested in leadership, advisory, and partnership
            opportunities involving public-sector transformation, digital
            systems, data, infrastructure, and technology across Africa and
            internationally.
          </p>
          <Button href="/contact">{site.cta}</Button>
        </div>
      </section>
    </>
  );
}
