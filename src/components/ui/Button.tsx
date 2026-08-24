import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function Button({ href, children, className }: ButtonProps) {
  return (
    <Link className={`button ${className ?? ""}`} href={href}>
      <span>{children}</span>
      <span className="arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
