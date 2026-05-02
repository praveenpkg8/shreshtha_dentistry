import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import Placeholder from "@/components/Placeholder";
import BookCTA from "@/components/BookCTA";
import BookButton from "@/components/BookButton";
import { services, getServiceById } from "@/lib/data";
import { getServiceContent } from "@/lib/content";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export default async function ServiceDetail({ params }: { params: { slug: string } }) {
  const s = getServiceById(params.slug);
  if (!s) notFound();
  const html = await getServiceContent(s.id);
  const related = services.filter((x) => x.category === s.category && x.id !== s.id).slice(0, 3);

  return (
    <div className="page-enter">
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="container">
          <Link href="/services" className="btn btn-ghost" style={{ marginBottom: 32 }}>
            ← All services
          </Link>
          <div className="grid-2-1" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <span className="chip chip-soft" style={{ marginBottom: 24, textTransform: "capitalize" }}>
                <Icon name={s.icon} size={14} /> {s.category}
              </span>
              <h1 className="display" style={{ fontSize: "clamp(40px, 6vw, 72px)", margin: "8px 0 24px", lineHeight: 1.05 }}>
                {s.name}
              </h1>
              <p className="lede" style={{ marginBottom: 36 }}>{s.tagline}</p>
              <div
                style={{
                  display: "flex",
                  gap: 32,
                  padding: "20px 0",
                  borderTop: "1px solid var(--c-line)",
                  borderBottom: "1px solid var(--c-line)",
                  marginBottom: 36,
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div style={{ fontSize: 12, color: "var(--c-ink-mute)", letterSpacing: ".08em", textTransform: "uppercase" }}>
                    Duration
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 22, marginTop: 4 }}>{s.duration}</div>
                </div>
                <div>
                  <div style={{ fontSize: 12, color: "var(--c-ink-mute)", letterSpacing: ".08em", textTransform: "uppercase" }}>
                    Starting price
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 22, marginTop: 4, color: "var(--c-primary)" }}>
                    {s.price}
                  </div>
                </div>
              </div>
              <BookButton className="btn btn-primary btn-lg">
                Book this treatment <Icon name="arrow" size={18} />
              </BookButton>
            </div>
            <Placeholder
              label={`Photo — ${s.name} treatment in progress`}
              aspect="4/5"
              style={{ borderRadius: 24 }}
              src={s.image || undefined}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 880 }}>
          <h2 className="display" style={{ fontSize: 36, marginBottom: 20 }}>Overview</h2>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--c-ink-soft)", marginBottom: 56 }}>
            {s.summary}
          </p>

          <div className="grid-2-1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <div>
              <h3 className="display" style={{ fontSize: 26, marginBottom: 24 }}>Benefits</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                {s.benefits.map((b, i) => (
                  <li
                    key={i}
                    style={{ display: "flex", gap: 12, alignItems: "start", fontSize: 16, color: "var(--c-ink-soft)" }}
                  >
                    <span
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        background: "var(--c-primary-soft)",
                        color: "var(--c-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      <Icon name="check" size={14} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="display" style={{ fontSize: 26, marginBottom: 24 }}>The procedure</h3>
              <ol style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
                {s.process.map((p, i) => (
                  <li key={i} style={{ display: "flex", gap: 16, alignItems: "start" }}>
                    <span
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: "var(--c-ink)",
                        color: "var(--c-bg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 12,
                        flexShrink: 0,
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {i + 1}
                    </span>
                    <span style={{ fontSize: 16, color: "var(--c-ink-soft)", lineHeight: 1.5 }}>{p}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {html && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <h2 className="display" style={{ fontSize: 32, marginBottom: 24 }}>In detail</h2>
            <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section" style={{ background: "var(--c-bg-alt)" }}>
          <div className="container">
            <h2 className="display" style={{ fontSize: 36, marginBottom: 32 }}>Related treatments</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/services/${r.id}`}
                  className="card"
                  style={{ display: "block", cursor: "pointer" }}
                >
                  <Icon name={r.icon} size={28} />
                  <h3 className="display" style={{ fontSize: 22, margin: "16px 0 10px" }}>{r.name}</h3>
                  <p style={{ fontSize: 14, color: "var(--c-ink-soft)" }}>{r.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <BookCTA />
    </div>
  );
}
