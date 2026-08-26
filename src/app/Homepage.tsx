import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CaseStudyPreview } from "@/components/content/CaseStudyPreview";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextLink } from "@/components/ui/TextLink";
import { site } from "@/content/site";
import { SectionRail } from "@/components/layout/SectionRail";
import { gisCapabilities, techStack } from "@/content/gis";
import { products } from "@/content/products";
import { caseStudies } from "@/content/work/caseStudies";

const capabilityLead = [
  "I get brought in when a digital project gets stuck between big strategic goals and the practical realities of making it work.",
  "Usually, the hard part isn\u2019t picking the software. It\u2019s connecting the human pieces: helping leaders figure out what actually needs to be built, how it will work on the ground, what it will take to roll out, and how the local team will keep it running after the experts leave.",
];

const capabilities = [
  {
    title: "Turning big ideas into realistic plans",
    body: "I help teams cut through the noise and figure out what to digitize now, what can wait, and what changes staff need to make so the tech doesn\u2019t collect dust.",
  },
  {
    title: "Connecting systems that don\u2019t talk to each other",
    body: "Utilities and agencies usually have the data already; it is just trapped in separate systems. I help connect asset records, customer information, ERP, SCADA, and field tools so the left hand knows what the right hand is doing.",
  },
  {
    title: "Making messy data clear and useful",
    body: "Most leaders don\u2019t need more reports. They need quick answers to key management questions. I help clean up fragmented data and build simple dashboards that help people make practical decisions.",
  },
  {
    title: "Keeping high-stakes projects on track",
    body: "I step in to support teams managing big tech investments and vendor contracts. I review budgets, sharpen requirements, catch risks early, and translate complex technical headaches into clear choices for leadership.",
  },
  {
    title: "Building systems that survive long-term",
    body: "A new system rarely fails because the software breaks; it fails because nobody was trained or supported to run it. I help set up clear roles, daily routines, and local training so the system belongs to the institution, not outside consultants.",
  },
  {
    title: "Getting different groups talking",
    body: "When a project involves government officials, donors, tech vendors, and field workers, everyone speaks a different language. I help bridge those gaps so everyone can agree on what to do next.",
  },
];

const effectiveQuestions = [
  "Does this software actually work in places with spotty internet or limited power?",
  "Are we fixing a real problem, or just making a broken process digital?",
  "Can local staff run this without hiring expensive outside help every month?",
  "Who owns this data a year from now?",
];

const experienceReferences = [
  { organization: "USAID", work: "Advising on digital health, data, GIS, and national technology programs." },
  { organization: "Adam Smith International", work: "Helping modernize enterprise GIS and utility information systems." },
  { organization: "Palladium / Data.FI", work: "Supporting digital-health data, interoperability, and spatial analytics." },
  { organization: "U.S. Census Bureau", work: "Developing geospatial analysis and decision-support products for public-sector work." },
  { organization: "DC Water", work: "Supporting infrastructure data, field workflows, and utility operations." },
  { organization: "Prince George's County Government", work: "Working on countywide GIS, data governance, emergency response, and public applications." },
];

const credentials = [
  "USAID",
  "Digital Health Systems",
  "Enterprise GIS",
  "Public-Sector Advisory",
  "Ethiopia & East Africa",
];

const engagementAreas = [
  "Advisory & consulting",
  "Strategic partnerships",
  "Leadership opportunities",
  "Speaking & collaboration",
];

const railSections = [
  { id: "welcome", label: "Welcome" },
  { id: "introduction", label: "Introduction" },
  { id: "expertise", label: "What I do" },
  { id: "geospatial", label: "Geospatial practice" },
  { id: "institutions", label: "Institutional experience" },
  { id: "selected-work", label: "Selected work" },
  { id: "point-of-view", label: "Point of view" },
  { id: "work-together", label: "Work together" },
];

export default function Homepage() {
  return (
    <>
      <SectionRail sections={railSections} />
      <section className="hero hero--profile" id="welcome">
        <div className="container hero-profile-grid">
          <div className="hero-profile-media">
            <Image
              src="/images/profile/tewodros-hailegeberel.jpeg"
              alt="Portrait of Tewodros Hailegeberel"
              width={200}
              height={200}
              priority
            />
            <div className="hero-identity">
              <p className="hero-name">{site.name}</p>
              <a
                className="linkedin-mark"
                href={site.linkedIn}
                target="_blank"
                rel="noreferrer"
                aria-label="Connect with Tewodros Hailegeberel on LinkedIn"
                title="LinkedIn"
              >
                <span aria-hidden="true">in</span>
              </a>
            </div>
            <p className="hero-location">Addis Ababa, Ethiopia / Africa</p>
          </div>
          <div className="hero-copy">
            <h1>Welcome to my website.</h1>
            <p className="intro">
              I created this space to give you a better idea of who I am, my
              experiences, my skills, and a few key pieces of work I want to
              highlight for your reference. A r&eacute;sum&eacute; can only list
              job descriptions, but I hope this site gives you a clear picture
              of how I think and operate on the ground.
            </p>
            <div className="hero-actions">
              <Button href="/work">Explore my work</Button>
              <TextLink href="/contact">Connect with me</TextLink>
            </div>
            {/* Domains rather than tools: this page is read by people hiring
                for judgment, not for software proficiency. */}
            <ul className="cred-pills">
              {credentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section intro-letter" id="introduction">
        <div className="container">
          <div className="prose">
            <p>
              I am a digital transformation, digital health, and geospatial
              technology leader with over 20 years of experience working alongside
              governments, global donors, tech entrepreneurs, and local
              communities across Africa and the United States. At my core, my focus is
              simple: I help turn complex technology investments into reliable,
              scalable systems that people can actually use, govern, and sustain
              long after the funding stops.
            </p>
            <p>
              My approach was shaped by building systems from the ground up.
              Founding eAdrasha in Addis Ababa &mdash; a location start-up built
              to map the unmapped &mdash; taught me that technology only
              succeeds when it respects the daily realities of the people using
              it.
            </p>
            <p>
              I brought that same human-centered discipline to USAID/Ethiopia as
              Senior Digital Health Advisor, serving as the senior digital health
              lead for a $63 million national health portfolio. Across rural
              health posts, ministry offices, and international donor tables, my
              job was to build alignment, connecting health data, electronic
              medical records, and supply chains into a national system the
              government could truly own. Today, I continue advising public
              utilities and major infrastructure programs on enterprise GIS,
              systems integration, and digital transformation strategy.
            </p>
            <p>
              Based in Addis Ababa with U.S. citizenship, I am drawn to senior
              Africa-focused leadership roles where strategy, technology, and
              genuine human impact come together. Take a look around, and if you
              are building systems that matter, I would love to connect.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="expertise">
        <div className="container">
          <div className="section-heading">
            <Eyebrow>What I do</Eyebrow>
            <h2>The kinds of challenges I help tackle.</h2>
            {capabilityLead.map((para) => (
              <p className="capability-lead" key={para.slice(0, 24)}>
                {para}
              </p>
            ))}
          </div>

          <p className="capability-intro">
            Where I usually lend a hand:
          </p>

          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability-card" key={capability.title}>
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
              </article>
            ))}
          </div>

          <div className="why-effective">
            <h3>Why I Enjoy This Work</h3>
            <p className="why-effective-lead">
              My approach comes from being able to talk to leadership about
              strategy and budgets in the morning, and then sit down with
              software developers or GIS specialists in the afternoon to figure
              out why a system isn&rsquo;t working on the ground.
            </p>
            <p>
              Having managed donor-funded projects, advised public utilities,
              and started my own mapping company, I&rsquo;ve seen where these
              projects tend to get stuck.
            </p>
            <p>
              It helps me ask the simple, practical questions that save teams
              time and resources:
            </p>
            <ul className="why-effective-questions">
              {effectiveQuestions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
            <p>
              At the end of the day, I don&rsquo;t just help you pick or build
              technology; I work alongside your team to make sure your
              organization can actually use it.
            </p>
          </div>
        </div>
      </section>

      <section className="section ink-surface" id="geospatial" aria-labelledby="gis-heading">
        <div className="container">
          <div className="section-heading">
            <Eyebrow>Geospatial practice</Eyebrow>
            <h2 id="gis-heading">What I build with spatial data.</h2>
            <p>
              Two decades of geospatial work, from writing the automation
              scripts myself to advising utilities and ministries on the
              platforms their operations run on.
            </p>
          </div>

          <div className="gis-grid">
            {gisCapabilities.map((capability) => (
              <article className="gis-card" key={capability.title}>
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
                <p className="gis-evidence">{capability.evidence}</p>
              </article>
            ))}
          </div>

          <div className="stack-block">
            <h3>Tools I work in</h3>
            <div className="stack-groups">
              {techStack.map((group) => (
                <div className="stack-group" key={group.label}>
                  <p className="stack-label">{group.label}</p>
                  <ul className="stack-items">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="institutions">
        <div className="container experience-band">
          <div className="section-heading">
            <Eyebrow>Institutional experience</Eyebrow>
            <h2>Turning technical knowledge into public-sector solutions.</h2>
          </div>
          <div className="experience-references" aria-label="Selected institutional experience">
            {experienceReferences.map((reference) => (
              <article key={reference.organization}>
                <strong>{reference.organization}</strong>
                <p>{reference.work}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface" id="selected-work">
        <div className="container">
          <div className="section-heading">
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="visually-hidden">Selected work</h2>
            <p>
              The work below shows the range of my practice: national digital
              transformation, utility modernization, and building a technology
              company around a practical urban problem.
            </p>
          </div>
          <div className="case-list">
            {caseStudies
              .filter((study) => study.featured)
              .map((study) => (
                <CaseStudyPreview key={study.slug} study={study} />
              ))}
          </div>
          {/* The case studies above are advisory work. This points at the
              two systems built hands-on, which live on the portfolio page. */}
          <div className="built-strip">
            <p className="built-strip-lead">
              Alongside the advisory work, I build systems myself:
            </p>
            <ul className="built-strip-list">
              {products.map((product) => (
                <li key={product.slug}>
                  <a href="/work#products">{product.name}</a>
                  <span>{product.tagline}</span>
                </li>
              ))}
            </ul>
          </div>

          <TextLink href="/work">View full portfolio</TextLink>
        </div>
      </section>

      <section className="section ink-surface" id="point-of-view">
        <div className="container point-of-view-grid">
          <div className="section-heading">
            <Eyebrow>Point of view</Eyebrow>
            <h2>Technology is only useful when institutions can own and operate it.</h2>
          </div>
          <div className="prose prose--light">
            <p>
              My perspective comes from working on both sides of the problem. I
              can sit with senior leaders discussing policy, governance,
              financing, ownership, and implementation risk, then work with
              technical teams on architecture, APIs, GIS, interoperability,
              databases, and analytical workflows.
            </p>
            <p>
              That combination helps turn ambitious transformation agendas into
              systems that people can use, govern, and sustain.
            </p>
            <TextLink href="/about" className="text-link--light">More about Tewodros</TextLink>
          </div>
        </div>
      </section>

      <section className="section cta-section" id="work-together">
        <div className="container section-heading">
          <Eyebrow>Let&apos;s work together</Eyebrow>
          <h2>Tell me what you&rsquo;re trying to build.</h2>
          <p>
            I work with governments, development organizations, technology
            companies, investors, and institutions tackling complex digital,
            data, geospatial, and public-sector modernization challenges.
          </p>
          <div className="engagement-list" aria-label="Ways to work together">
            {engagementAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
          <Button href="/contact">Start a conversation</Button>
        </div>
      </section>
    </>
  );
}
