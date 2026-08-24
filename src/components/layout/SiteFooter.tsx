import Link from "next/link";
import { footerNavigation } from "@/content/navigation";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h2>{site.name}</h2>
          <p>{site.title}</p>
          <p>{site.location}</p>
        </div>
        <nav aria-label="Footer navigation">
          {footerNavigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a href={site.linkedIn} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <a href={site.github} rel="noreferrer" target="_blank">
            GitHub
          </a>
        </nav>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Tewodros Hailegeberel</p>
      </div>
    </footer>
  );
}
