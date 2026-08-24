"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/navigation";
import { site } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  function isActive(href: string) {
    const hrefPath = href.split("#")[0] || "/";
    if (href === "/#expertise") return false;
    if (hrefPath === "/") return pathname === "/";
    return pathname === hrefPath || pathname.startsWith(`${hrefPath}/`);
  }

  function closeMenu() {
    setOpen(false);
    toggleRef.current?.focus();
  }

  useEffect(() => {
    const main = document.getElementById("main-content");
    if (!open) {
      document.body.style.overflow = "";
      if (main) {
        main.inert = false;
        main.removeAttribute("aria-hidden");
      }
      return;
    }

    document.body.style.overflow = "hidden";
    if (main) {
      main.inert = true;
      main.setAttribute("aria-hidden", "true");
    }

    const focusable = mobileNavRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    first?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }
      if (event.key !== "Tab" || !first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      if (main) {
        main.inert = false;
        main.removeAttribute("aria-hidden");
      }
    };
  }, [open]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="brand-name">{site.name}</span>
          <span className="brand-title">{site.title}</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
          <Link className="nav-cta" href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>
            {site.cta}
          </Link>
        </nav>
        <button
          ref={toggleRef}
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-lines" aria-hidden="true" />
          <span className="visually-hidden">Menu</span>
        </button>
      </div>
      <div
        ref={mobileNavRef}
        className={`mobile-nav ${open ? "is-open" : ""}`}
        id="mobile-navigation"
        aria-hidden={!open}
      >
        <nav className="container mobile-nav-inner" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
          <Link className="button" href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} onClick={closeMenu}>
            <span>{site.cta}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
