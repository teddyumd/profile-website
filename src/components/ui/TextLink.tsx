import Link from "next/link";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  direction?: "right" | "down";
  className?: string;
  /** Leaves the site: renders a plain anchor opening in a new tab. */
  external?: boolean;
};

export function TextLink({
  href,
  children,
  direction = "right",
  className,
  external = false,
}: TextLinkProps) {
  const content = (
    <>
      <span>{children}</span>
      <span className="arrow" aria-hidden="true">
        {direction === "down" ? "↓" : "→"}
      </span>
    </>
  );

  // next/link is for routes within the site. An outward link is an anchor, but
  // it keeps the same class so there is one place that styles a text link.
  if (external) {
    return (
      <a
        className={`text-link ${className ?? ""}`}
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={`text-link ${className ?? ""}`} href={href}>
      {content}
    </Link>
  );
}
