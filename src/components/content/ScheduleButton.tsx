"use client";

import { useCallback, useRef, useState } from "react";

const WIDGET_CSS = "https://assets.calendly.com/assets/external/widget.css";
const WIDGET_JS = "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

/**
 * Opens Calendly in an overlay without leaving the page.
 *
 * The widget script is fetched on the first click rather than on page load:
 * a visitor who never books never pays for the script and never receives
 * Calendly's cookies. The element stays a real anchor pointing at the
 * booking URL, so it still works with JavaScript disabled and search
 * engines see an ordinary link.
 */
export function ScheduleButton({
  url,
  label = "Schedule a Call",
}: {
  url: string;
  label?: string;
}) {
  const [loading, setLoading] = useState(false);
  const loader = useRef<Promise<void> | null>(null);

  const loadWidget = useCallback(() => {
    if (loader.current) return loader.current;

    loader.current = new Promise<void>((resolve, reject) => {
      if (!document.querySelector(`link[href="${WIDGET_CSS}"]`)) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = WIDGET_CSS;
        document.head.appendChild(link);
      }

      const existing = document.querySelector<HTMLScriptElement>(
        `script[src="${WIDGET_JS}"]`,
      );
      if (existing && window.Calendly) {
        resolve();
        return;
      }

      const script = existing ?? document.createElement("script");
      script.addEventListener("load", () => resolve());
      script.addEventListener("error", () =>
        reject(new Error("Calendly widget failed to load")),
      );
      if (!existing) {
        script.src = WIDGET_JS;
        script.async = true;
        document.body.appendChild(script);
      }
    });

    return loader.current;
  }, []);

  const onClick = useCallback(
    async (event: React.MouseEvent<HTMLAnchorElement>) => {
      // Let modified clicks (new tab, new window) behave normally.
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) {
        return;
      }
      event.preventDefault();
      setLoading(true);
      try {
        await loadWidget();
        window.Calendly?.initPopupWidget({ url });
      } catch {
        // If the widget cannot load, fall back to Calendly's own page.
        window.open(url, "_blank", "noopener,noreferrer");
        loader.current = null;
      } finally {
        setLoading(false);
      }
    },
    [loadWidget, url],
  );

  return (
    <a
      className="button"
      href={url}
      onClick={onClick}
      target="_blank"
      rel="noreferrer"
      aria-busy={loading || undefined}
    >
      <span>{loading ? "Opening…" : label}</span>
      <span className="arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
}
