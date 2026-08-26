import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <p className="eyebrow">Not found</p>
        <h1>This Page Is Not Available.</h1>
        <p>The page may have moved, or the link may need to be updated.</p>
        <Link className="button" href="/">
          <span>Return home</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
