import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CaseStudyPreview } from "@/components/content/CaseStudyPreview";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextLink } from "@/components/ui/TextLink";
import { site } from "@/content/site";
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
    title: "Connecting maps and data to daily operations",
    body: "I help utilities and public agencies link geographic information directly to field crews, power grids, customer records, and billing\u2014so spatial data becomes a practical daily tool, not just a static map on a wall.",
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
    body: "A new system rarely fails because the software breaks, it fails because nobody was trained or supported to run it. I help set up clear roles, daily routines, and local training so the system belongs to the institution, not outside consultants.",
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

const engagementAreas = [
  "Advisory & consulting",
  "Strategic partnerships",
  "Leadership opportunities",
  "Speaking & collaboration",
];

export default function Homepage() {
  return (
    <>
      <section className="hero hero--profile">
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
          </div>
        </div>
      </section>

      <section className="section intro-letter">
        <div className="container">
          <div className="prose">
            <p>
              For over 15 years, I have worked alongside governments, global
              donors, tech entrepreneurs, and local communities across Africa
              and the United States. I am a digital transformation, digital
              health, and geospatial technology leader. At my core, my focus is
              simple: I help turn complex technology investments into reliable,
              scalable systems that people can actually use, govern, and sustain
              long after the funding stops.
            </p>
            <p>
              My approach was shaped by building systems from the ground up. In
              Addis Ababa, I co-founded eAdrasha; a location-based start-up
              built to map the unmapped. Leading a team of more than 40
              professionals to reach 25,000 users in our first six months taught
              me that technology only succeeds when it respects the daily
              realities of the people using it.
            </p>
            <p>
              I brought that same human-centered discipline to USAID/Ethiopia as
              Senior Digital Health Advisor, serving as the principal technical
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
              technology, I work alongside your team to make sure your
              organization can actually use it.
            </p>
          </div>
        </div>
      </section>

      <section className="section surface" aria-labelledby="impact-heading">
        <div className="container">
          <div className="section-heading experience-intro">
            <Eyebrow>Experience</Eyebrow>
            <h2 id="impact-heading">A career connecting institutions, technology, and implementation.</h2>
          </div>
          <div className="experience-story">
            <div className="prose">
              <p>
                My career began in environmental science and geospatial
                technology, working with GIS, spatial data, mapping, and the
                systems that help public institutions understand places,
                assets, and communities. Over time, that technical foundation
                expanded into broader work on
                institutional strategy, digital transformation, infrastructure,
                data governance, and implementation.
              </p>
              <p>
                I have worked inside U.S. local government and public utilities,
                supported USAID programs across multiple countries, advised
                national health systems, and helped technology teams translate
                complex requirements into operating solutions. In Ethiopia, I
                served as a principal technical oversight lead for an
                approximately $63 million digital health activity, working with
                government leaders, donors, implementers, vendors, and local
                innovators to strengthen sustainability, interoperability, and
                institutional ownership.
              </p>
              <p>
                My current work with public-sector and utility leaders focuses
                on enterprise modernization: connecting infrastructure data,
                GIS, ERP, SCADA, customer systems, procurement, governance, and
                organizational readiness into practical implementation pathways.
              </p>
            </div>
            <aside className="experience-sidebar">
              <p className="eyebrow">Across the work</p>
              <ul className="plain-list">
                <li>Government and public utilities</li>
                <li>Digital health and national systems</li>
                <li>Enterprise technology and data governance</li>
                <li>Geospatial and infrastructure intelligence</li>
                <li>Technology entrepreneurship and team leadership</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container experience-band">
          <div className="section-heading">
            <Eyebrow>Institutional experience</Eyebrow>
            <h2>Turning technical knowledge into public-sector solutions.</h2>
            <p>
              My experience spans government agencies, development programs,
              public utilities, and technology companies. I help people use
              data, maps, digital systems, and practical strategies to make
              better decisions and deliver services.
            </p>
          </div>
          <div className="experience-references" aria-label="Selected institutional experience">
            {experienceReferences.map((reference) => (
              <article key={reference.organization}>
                <strong>{reference.organization}</strong>
                <p>{reference.work}</p>
              </article>
            ))}
          </div>
          <p className="experience-note">
            I have also supported 15+ youth-led digital service enterprises and
            more than 100 technology professionals. As Founder and CEO of
            eAdrasha, I led a 40+ person location-intelligence company and
            helped grow its platform to more than 25,000 users within six
            months.
          </p>
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
          <TextLink href="/work">View full portfolio</TextLink>
        </div>
      </section>

      <section className="section ink-surface">
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

      <section className="section cta-section">
        <div className="container section-heading">
          <Eyebrow>Let&apos;s work together</Eyebrow>
          <h2>Working on a difficult systems problem?</h2>
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
