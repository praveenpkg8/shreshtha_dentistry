import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import Reveal from "@/components/Reveal";
import BookCTA from "@/components/BookCTA";
import { formatBlogDate } from "@/lib/data";
import { getBlogPosts } from "@/lib/content";

export default async function BlogPage() {
  const posts = await getBlogPosts();
  if (posts.length === 0) {
    return (
      <div className="page-enter">
        <section className="section">
          <div className="container">
            <p className="muted">No journal entries yet.</p>
          </div>
        </section>
      </div>
    );
  }
  const [featured, ...rest] = posts;
  return (
    <div className="page-enter">
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <span className="eyebrow">Journal</span>
          <h1 className="display" style={{ fontSize: "clamp(48px, 7vw, 88px)", margin: "16px 0 24px", lineHeight: 1.05 }}>
            Honest writing
            <br />
            about teeth.
          </h1>
          <p className="lede" style={{ maxWidth: 600 }}>
            Practical guides, myth-debunking, and timely advice from our doctors. No clickbait. No upselling.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <Link
              href={`/blog/${featured.id}`}
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr",
                gap: 48,
                alignItems: "center",
                marginBottom: 80,
                padding: 32,
                background: "var(--c-bg-alt)",
                borderRadius: 32,
                cursor: "pointer",
              }}
              className="grid-2-1"
            >
              <Placeholder
                label={`Header image — ${featured.title}`}
                aspect="4/3"
                style={{ borderRadius: 24 }}
                src={featured.image || undefined}
              />
              <div>
                <span className="chip chip-soft" style={{ marginBottom: 16 }}>
                  Featured · {featured.category}
                </span>
                <h2 className="display" style={{ fontSize: 36, lineHeight: 1.15, marginBottom: 16 }}>
                  {featured.title}
                </h2>
                <p style={{ color: "var(--c-ink-soft)", fontSize: 16, marginBottom: 20, lineHeight: 1.6 }}>
                  {featured.excerpt}
                </p>
                <div style={{ fontSize: 13, color: "var(--c-ink-mute)" }}>
                  {formatBlogDate(featured.date)} · {featured.readTime}
                </div>
              </div>
            </Link>
          </Reveal>

          {rest.length > 0 && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
              {rest.map((p, i) => (
                <Reveal key={p.id} delay={i * 50}>
                  <Link href={`/blog/${p.id}`} style={{ display: "block", cursor: "pointer" }}>
                    <Placeholder
                      label={`Image — ${p.category}`}
                      aspect="4/3"
                      style={{ borderRadius: 20, marginBottom: 20 }}
                      src={p.image || undefined}
                    />
                    <span className="chip" style={{ fontSize: 11 }}>{p.category}</span>
                    <h3 className="display" style={{ fontSize: 22, lineHeight: 1.25, margin: "12px 0 10px" }}>
                      {p.title}
                    </h3>
                    <p style={{ fontSize: 14.5, color: "var(--c-ink-soft)", lineHeight: 1.55, marginBottom: 12 }}>
                      {p.excerpt}
                    </p>
                    <div style={{ fontSize: 12, color: "var(--c-ink-mute)" }}>
                      {formatBlogDate(p.date)} · {p.readTime}
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
      <BookCTA />
    </div>
  );
}
