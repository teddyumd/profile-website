import type { Metadata } from "next";
import { CaseStudyPreview } from "@/components/content/CaseStudyPreview";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { caseStudies } from "@/content/work/caseStudies";
import { absoluteUrl } from "@/lib/siteUrl";

export const metadata: Metadata = {
  title: "Portfolio",
  alternates: { canonical: absoluteUrl("/work") },
  description:
    "Selected work by Tewodros Hailegeberel across digital health, infrastructure modernization, location intelligence, and public-sector systems.",
};

export default function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner page-hero-inner--wide">
          <Eyebrow>Portfolio</Eyebrow>
          <h1>Featuring Selected Work</h1>
          <div className="hero-story">
            <p>
              Below is a selection of the work I was proud of, and I hope it will
              give you the clearest picture I can give of the problems I take
              on, the scale I work at, and what I bring to them.
            </p>
            <p>
              They span four very different settings: a national health
              network, an electric utility, a mapping company I built from
              scratch, and a county inspection unit. On the surface, they look
              completely unrelated. In
              practice, they faced the exact same challenge: data trapped in
              systems that couldn&rsquo;t communicate, organizations pulling in
              opposite directions, and technology that was useless until those
              human problems were sorted out first.
            </p>
            <p>
              In each story, I break down what the problem actually was on the
              ground, how I stepped in to fix it, and whether the system survived
              after I walked away.
            </p>
          </div>
        </div>
      </section>
      <section className="section surface">
        <div className="container case-list">
          {caseStudies.map((study) => (
            <CaseStudyPreview key={study.slug} study={study} headingLevel="h2" />
          ))}
        </div>
      </section>
    </>
  );
}
