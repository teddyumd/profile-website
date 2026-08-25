"use client";

import { useEffect, useRef, useState } from "react";

export type RailSection = { id: string; label: string };

/**
 * Fixed left-hand rail showing where the reader is on the page.
 *
 * Uses IntersectionObserver rather than scroll maths: the section whose
 * heading area is highest in the viewport wins, which matches what a reader
 * perceives as "the section I am in" better than a raw offset comparison.
 */
export function SectionRail({ sections }: { sections: RailSection[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const [progress, setProgress] = useState(0);
  const visible = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const nodes = sections
      .map((s) => document.getElementById(s.id))
      .filter((n): n is HTMLElement => Boolean(n));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.current.set(entry.target.id, entry.intersectionRatio);
          else visible.current.delete(entry.target.id);
        }
        // Whichever tracked section sits highest on screen is the current one.
        const onScreen = nodes.filter((n) => visible.current.has(n.id));
        if (onScreen.length > 0) {
          const top = onScreen.reduce((a, b) =>
            a.getBoundingClientRect().top <= b.getBoundingClientRect().top ? a : b,
          );
          setActiveId(top.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    function onScroll() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeIndex = Math.max(0, sections.findIndex((s) => s.id === activeId));

  return (
    <nav className="section-rail" aria-label="Sections on this page">
      <p className="section-rail-title">On this page</p>
      <div className="section-rail-track" aria-hidden="true">
        <span className="section-rail-fill" style={{ transform: `scaleY(${progress})` }} />
      </div>
      <ol className="section-rail-list">
        {sections.map((section, index) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={index <= activeIndex ? "is-reached" : undefined}
              aria-current={section.id === activeId ? "true" : undefined}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ol>
      <p className="section-rail-count">
        {activeIndex + 1} / {sections.length}
      </p>
    </nav>
  );
}
