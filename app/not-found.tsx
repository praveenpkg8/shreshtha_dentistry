import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-enter">
      <section className="section">
        <div className="container" style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
          <span className="eyebrow">404</span>
          <h1 className="display" style={{ fontSize: "clamp(40px, 6vw, 72px)", margin: "16px 0 16px" }}>
            We couldn't find that page.
          </h1>
          <p className="lede" style={{ marginBottom: 28 }}>
            The link may be broken, or the page may have moved. Let's get you back on track.
          </p>
          <Link href="/" className="btn btn-primary btn-lg">
            Back to home
          </Link>
        </div>
      </section>
    </div>
  );
}
