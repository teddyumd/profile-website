import Link from "next/link";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  direction?: "right" | "down";
  className?: string;
};

export function TextLink({
  href,
  children,
  direction = "right",
  className,
}: TextLinkProps) {
  return (
    <Link className={`text-link ${className ?? ""}`} href={href}>
      <span>{children}</span>
      <span className="arrow" aria-hidden="true">
        {direction === "down" ? "↓" : "→"}
      </span>
    </Link>
  );
}
