import Icon from "@/components/Icon";
import Placeholder from "@/components/Placeholder";
import Reveal from "@/components/Reveal";
import BookCTA from "@/components/BookCTA";
import { doctors } from "@/lib/data";
import { getAboutContent } from "@/lib/content";

export default async function AboutPage() {
  const about = await getAboutContent();
  return (
    <div className="page-enter">
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <span className="eyebrow">{about.heroEyebrow}</span>
          <h1
            className="display"
            style={{ fontSize: "clamp(48px, 7vw, 96px)", margin: "16px 0 32px", lineHeight: 1.05 }}
          >
            {about.heroTitle}
          </h1>
          <p className="lede" style={{ fontSize: 22, maxWidth: 720 }}>
            {about.heroLede}
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <Placeholder
            label="Wide photograph — clinic interior, natural light"
            aspect="21/9"
            style={{ borderRadius: 36 }}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2-1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
            <div>
              <span className="eyebrow">Our mission</span>
              <h2 className="display" style={{ fontSize: 36, marginTop: 16, marginBottom: 20 }}>
                {about.missionTitle}
              </h2>
              <p style={{ color: "var(--c-ink-soft)", fontSize: 17, lineHeight: 1.65 }}>
                {about.missionBody}
              </p>
            </div>
            <div>
              <span className="eyebrow">Our vision</span>
              <h2 className="display" style={{ fontSize: 36, marginTop: 16, marginBottom: 20 }}>
                {about.visionTitle}
              </h2>
              <p style={{ color: "var(--c-ink-soft)", fontSize: 17, lineHeight: 1.65 }}>
                {about.visionBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--c-bg-alt)" }}>
        <div className="container">
          <div style={{ marginBottom: 56, maxWidth: 640 }}>
            <span className="eyebrow">Why choose us</span>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 56px)", marginTop: 12 }}>
              Six commitments
              <br />
              we don't compromise on.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {about.commitments.map((c, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="card" style={{ height: "100%" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      background: "var(--c-primary)",
                      color: "var(--c-bg)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 24,
                      fontSize: 14,
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="display" style={{ fontSize: 22, marginBottom: 12 }}>
                    {c.title}
                  </h3>
                  <p style={{ fontSize: 15, color: "var(--c-ink-soft)", lineHeight: 1.6 }}>{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <span className="eyebrow">Our doctors</span>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 56px)", marginTop: 12 }}>
              Meet the team.
            </h2>
          </div>
          {doctors.map((d, i) => (
            <Reveal key={d.id}>
              <div
                className="grid-2-1"
                style={{
                  display: "grid",
                  gridTemplateColumns: i % 2 === 0 ? "1fr 1.4fr" : "1.4fr 1fr",
                  gap: 56,
                  alignItems: "center",
                  padding: "48px 0",
                  borderBottom: i < doctors.length - 1 ? "1px solid var(--c-line)" : "none",
                }}
              >
                <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                  <Placeholder
                    label={`Portrait — ${d.name}`}
                    aspect="3/4"
                    style={{ borderRadius: 24 }}
                    src={d.image || undefined}
                  />
                </div>
                <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                  <span className="eyebrow">{d.role}</span>
                  <h3 className="display" style={{ fontSize: 44, margin: "12px 0 8px" }}>
                    {d.name}
                  </h3>
                  <p style={{ fontSize: 15, color: "var(--c-primary)", marginBottom: 24, fontWeight: 500 }}>
                    {d.credentials} · {d.specialty}
                  </p>
                  <p style={{ color: "var(--c-ink-soft)", fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
                    {d.bio}
                  </p>
                  <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    {d.highlights.map((h, k) => (
                      <li
                        key={k}
                        style={{
                          fontSize: 14,
                          color: "var(--c-ink-soft)",
                          display: "flex",
                          gap: 8,
                          alignItems: "start",
                        }}
                      >
                        <span style={{ color: "var(--c-primary)", marginTop: 2 }}>
                          <Icon name="check" size={14} />
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <BookCTA />
    </div>
  );
}
