"use client";

import Script from "next/script";
import { useCallback, useRef } from "react";

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding?: boolean;
      }) => void;
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

/**
 * Calendly's floating badge, shown on every page.
 *
 * Calendly's own snippet initialises the badge from `window.onload`. That
 * assignment overwrites any other load handler, and it fires once per full
 * page load — so on an App Router site the badge would vanish the moment a
 * visitor navigated between pages client-side. next/script keeps the tag out
 * of the critical path and gives a callback that survives navigation, and the
 * ref guard stops a second badge being created if the callback runs again.
 */
export function CalendlyBadge({ url }: { url: string }) {
  const started = useRef(false);

  const init = useCallback(() => {
    if (started.current || !window.Calendly) return;
    started.current = true;
    window.Calendly.initBadgeWidget({
      url,
      text: "Schedule time with me",
      color: "#236662",
      textColor: "#ffffff",
      branding: true,
    });
  }, [url]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onReady={init}
      />
    </>
  );
}
