import Image from "next/image";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";
import { projects, githubProfile } from "@/content/projects";
import { absoluteUrl } from "@/lib/siteUrl";

export const metadata: Metadata = {
  title: "About",
  alternates: { canonical: absoluteUrl("/about") },
  description:
    "Learn about Tewodros Hailegeberel's career across public-sector transformation, digital systems, geospatial intelligence, digital health, infrastructure, government, and technology in Africa and the United States.",
};

const effectiveQuestions = [
  "Will this technology work reliably where connectivity, power, or technical capacity may be limited?",
  "Are we solving the underlying problem, or simply digitizing an inefficient process?",
  "Can the organization operate and maintain the system with its existing people and resources?",
  "Who will own, manage, and improve the data and technology after the project ends?",
];

const credentials = [
  "MA Geospatial Information Sciences, University of Maryland (2010)",
  "BSc Environmental Science, University of Maryland (2007)",
  "Certified GIS Professional (GISP)",
  "Languages: English and Amharic",
  "Based in Addis Ababa, Ethiopia",
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero--bare">
        <div className="container page-hero-inner">
          <Eyebrow>About Me</Eyebrow>
          <h1 className="visually-hidden">About Tewodros Hailegeberel</h1>
        </div>
      </section>
      <section className="section surface">
        <div className="container about-grid">
          <div className="prose">
            <p>
              To me, technology isn&rsquo;t just about code or data; it&rsquo;s a
              tool for connection. It&rsquo;s about building systems that solve
              real problems for the people who actually have to use them.
            </p>
            <p>
              I learned this early on in environmental science and
              GIS, the art of mapping where a city&rsquo;s pipes, clinics,
              and communities really are. While working for a county government
              in Maryland, I&rsquo;d take trips home to Addis Ababa and hit a
              constant roadblock: getting anywhere meant relying on word of
              mouth. Minibus taxis were the pulse of the city, yet there was no
              map, no official route guide, and no way to know the fair fare.
            </p>
            <p>So, I set out to connect the dots. I started riding them.</p>
            <p>
              Sululta, Burayu, Sebeta, Akaki, Summit: hub to hub, out to
              every edge of the city, logging routes on my phone.
            </p>
            <p>
              That effort started as a simple digital map, but it opened up a
              much bigger question: If people are disconnected from basic route
              information, what else are they cut off from? Friends in Addis
              joined in, walking the streets with phones and GPS units.
              Together, we tagged over 50,000 locations by hand and mapped 800
              buildings by name, while friends in the U.S. helped build the
              backend.
            </p>
            <p>
              We called it eAdrasha, a way to use technology to bring a
              city closer together.
            </p>
            <p>
              When people asked why we didn&rsquo;t wait for global tech giants
              to map the area, the reason was clear: technology only works when
              it&rsquo;s grounded in reality. They bought data from afar; we were
              standing in the street. When a local business moved or a road
              changed, we updated it that week.
            </p>
            <p>
              Growing eAdrasha to 40 people and 25,000 users taught me what true
              problem-solving takes:
            </p>
            <ul>
              <li>Data quality requires constant, hands-on care.</li>
              <li>
                Technology must adapt to human behavior, not the other way
                around.
              </li>
              <li>
                A beautifully designed tool is useless if it doesn&rsquo;t leave
                people better off and empowered to run it themselves.
              </li>
            </ul>
            <p>
              I&rsquo;ve carried that philosophy into every system I&rsquo;ve
              built since.
            </p>
            <p>
              Whether working with water utilities, U.S. local governments,
              USAID programs across eight international missions, or serving as
              Senior Digital Health Advisor for USAID/Ethiopia (guiding a
              $63 million national health portfolio), my focus has remained
              the same. Beyond the budget lines and technical specs, the real
              work is sitting at the table with ministry officials, developers,
              donors, and health workers across 8,000 rural clinics, using
              technology to link them together so the solution outlasts the
              project.
            </p>
            <p>
              At the end of the day, I build systems, but I design for people. I
              use technology to fill in the missing pieces so communities,
              institutions, and the data between them can finally connect.
            </p>
            <h2>In Practice</h2>
            <p>
              My perspective was shaped by building systems from the ground up.
              Founding eAdrasha in Addis Ababa, a location-based start-up
              focused on mapping places that were often missing from
              conventional maps, reinforced an important lesson for me:
              technology works best when it reflects the realities of the
              people and institutions expected to use it.
            </p>
            <p>
              I carried that same approach into my work at USAID/Ethiopia,
              where I served as Senior Digital Health Advisor and supported a
              $63 million national digital health portfolio. My role required
              working across government, health facilities, implementing
              partners, and development partners to strengthen the systems,
              governance, and coordination behind digital health investments.
            </p>
            <p>
              More recently, I have advised public utilities and major
              infrastructure programs on enterprise GIS, systems integration,
              and digital transformation strategy.
            </p>
            <p>
              If you are working on systems that need to move from concept to
              sustainable implementation, I would be glad to connect.
            </p>
            <h2>How I Work</h2>
            <div className="why-effective">
              <p className="why-effective-lead">
                I enjoy working at the intersection of strategy, technology, and
                implementation.
              </p>
              <p>
                Having managed donor-funded programs, advised public institutions
                and utilities, and built my own geospatial business, I have seen
                a consistent pattern: technology projects rarely struggle because
                of technology alone. They struggle when the solution does not fit
                the institution, the operating environment, or the people
                expected to use and sustain it.
              </p>
              <p>
                That experience has taught me to ask practical questions early:
              </p>
              <ul className="why-effective-questions">
                {effectiveQuestions.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
              <p>
                These questions may seem simple, but answering them well can save
                organizations significant time, money, and frustration.
              </p>
              <p>
                My role is not simply to recommend or build technology. I work
                with teams to connect strategy, people, processes, data, and
                technology so that what gets implemented can actually be used,
                managed, and sustained.
              </p>
              <p>
                That is the part of the work I find most rewarding: helping
                organizations move from having technology to having technology
                that genuinely works for them.
              </p>
            </div>
          </div>
          <aside className="contact-side">
            <Image
              className="about-photo"
              src="/images/profile/tewodros-hailegeberel.jpeg"
              alt="Portrait of Tewodros Hailegeberel"
              width={200}
              height={200}
            />
            <h2>Credentials</h2>
            <ul className="credential-list plain-list">
              {credentials.map((credential) => (
                <li key={credential}>{credential}</li>
              ))}
            </ul>
            <Button href="/contact">{site.cta}</Button>
          </aside>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <div className="section-heading">
            <Eyebrow>Things I Build</Eyebrow>
            <h2>I Still Write Code.</h2>
            <p>
              When something bothers me enough, I still write code for it. Same
              instinct as riding the taxis, smaller scale. These are public.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <h3>
                  <a href={`${githubProfile}/${project.name}`} rel="noreferrer" target="_blank">
                    {project.title}
                  </a>
                </h3>
                <p className="project-problem">{project.problem}</p>
                <p className="project-built">{project.built}</p>
                <p className="project-repo">
                  <code>{project.name}</code>
                </p>
              </article>
            ))}
          </div>

          <p className="project-footer">
            <a href={githubProfile} rel="noreferrer" target="_blank">
              All repositories on GitHub
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
