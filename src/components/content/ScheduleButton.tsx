"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Opens the booking calendar in a modal over the page.
 *
 * Calendly's own widget.js is deliberately not used. It is a third-party
 * script that privacy extensions and some networks block, and when it fails
 * there is nothing to fall back to but a new tab. Embedding the scheduler
 * directly in an iframe inside a native <dialog> keeps the modal under our
 * control: no external script, no Calendly cookies until the visitor opens
 * it, and the site's own styling around the frame.
 *
 * <dialog>.showModal() gives focus trapping, Escape-to-close, and inert
 * background content for free, so none of that is reimplemented here.
 */
export function ScheduleButton({
  url,
  label = "Schedule a Call",
}: {
  url: string;
  label?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  // Left null until first open so the iframe is never requested for
  // visitors who do not book.
  const [src, setSrc] = useState<string | null>(null);

  const openModal = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      // Let modified clicks (new tab, new window) behave like a normal link.
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) {
        return;
      }
      event.preventDefault();

      setSrc((current) => {
        if (current) return current;
        const embed = new URL(url);
        embed.searchParams.set("embed_domain", window.location.host);
        embed.searchParams.set("embed_type", "Inline");
        embed.searchParams.set("hide_gdpr_banner", "1");
        return embed.toString();
      });

      setOpen(true);
    },
    [url],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const sync = () => setOpen(false);
    dialog.addEventListener("close", sync);
    dialog.addEventListener("cancel", sync);
    return () => {
      dialog.removeEventListener("close", sync);
      dialog.removeEventListener("cancel", sync);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      {/* Stays a real link: works with JavaScript off, and Cmd-click still
          opens Calendly in a new tab the way a link should. */}
      <a className="button" href={url} onClick={openModal} rel="noreferrer">
        <span>{label}</span>
        <span className="arrow" aria-hidden="true">
          →
        </span>
      </a>

      <dialog
        className="schedule-modal"
        ref={dialogRef}
        aria-label="Schedule a call"
        onClick={(event) => {
          // Clicking the backdrop closes; clicking the panel does not.
          if (event.target === dialogRef.current) setOpen(false);
        }}
      >
        <div className="schedule-modal-panel">
          <div className="schedule-modal-head">
            <p className="schedule-modal-title">Schedule a Call</p>
            <button
              type="button"
              className="schedule-modal-close"
              onClick={() => setOpen(false)}
              aria-label="Close scheduling window"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          {src ? (
            <iframe
              className="schedule-modal-frame"
              src={src}
              title="Booking calendar"
              loading="lazy"
            />
          ) : null}
          <p className="schedule-modal-fallback">
            Not loading?{" "}
            <a href={url} target="_blank" rel="noreferrer">
              Open the calendar in a new tab
            </a>
            .
          </p>
        </div>
      </dialog>
    </>
  );
}
