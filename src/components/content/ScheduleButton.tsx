/**
 * Booking link.
 *
 * Deliberately a plain anchor with no JavaScript behind it. An overlay or a
 * popup widget only works once the page has hydrated and the third-party
 * script has loaded, and every one of those steps is a way for the button to
 * do nothing. A link opening a new tab has no failure mode: it works before
 * hydration, with JavaScript disabled, and behind blockers.
 */
export function ScheduleButton({
  url,
  label = "Schedule a Call",
}: {
  url: string;
  label?: string;
}) {
  return (
    <a className="button" href={url} target="_blank" rel="noopener noreferrer">
      <span>{label}</span>
      <span className="arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
}
