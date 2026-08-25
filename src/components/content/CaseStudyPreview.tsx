import Image from "next/image";
import { CaseStudy } from "@/types/content";
import { TextLink } from "@/components/ui/TextLink";
import { SystemDiagram } from "@/components/content/SystemDiagram";

export function CaseStudyPreview({
  study,
  headingLevel = "h3",
}: {
  study: CaseStudy;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;

  return (
    <article className={`case-preview ${study.visual ? "" : "case-preview--nomedia"}`}>
      {study.visual ? (
      <div className="case-preview-media">
        {study.visual.type === "image" && study.visual.src ? (
          <Image
            src={study.visual.src}
            alt={study.visual.alt ?? ""}
            width={1500}
            height={844}
            sizes="(max-width: 767px) 100vw, 45vw"
          />
        ) : study.visual.type === "diagram" && study.visual.diagram ? (
          <SystemDiagram variant={study.visual.diagram} />
        ) : (
          <div className="case-preview-media--text" aria-label={`${study.title} visual overview`}>
            <p className="eyebrow">Selected work</p>
            <strong>{study.title}</strong>
            <span>Visual overview</span>
          </div>
        )}
      </div>
      ) : null}
      <div className="case-preview-copy">
        {/* Banner replaces the removed imagery: gives each card a visual
            anchor without needing photography that does not exist. */}
        <div className="case-banner">
          <p className="case-banner-label">{study.label}</p>
          <p className="case-banner-number" aria-hidden="true">{study.number}</p>
        </div>
        <Heading>{study.title}</Heading>
        <div className="case-preview-story">
          <div>
            <p className="case-preview-label">Challenge / achievement</p>
            <p>{study.summary}</p>
          </div>
          <div>
            <p className="case-preview-label">Role</p>
            <p>{study.role}</p>
          </div>
          <div>
            <p className="case-preview-label">Key business &amp; technical impact</p>
            <ul className="impact-list">
              {study.impact.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}:</strong> {item.detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <TextLink href={`/work/${study.slug}`}>View more about this experience</TextLink>
      </div>
    </article>
  );
}
