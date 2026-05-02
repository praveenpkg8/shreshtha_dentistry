import Stars from "@/components/Stars";
import Reveal from "@/components/Reveal";
import BookCTA from "@/components/BookCTA";
import { testimonials, site } from "@/lib/data";

export default function ReviewsPage() {
  return (
    <div className="page-enter">
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <span className="eyebrow">Reviews</span>
          <h1 className="display" style={{ fontSize: "clamp(48px, 7vw, 88px)", margin: "16px 0 24px", lineHeight: 1.05 }}>
            What our patients
            <br />
            actually say.
          </h1>
          <div style={{ display: "flex", gap: 32, alignItems: "center", marginTop: 32, flexWrap: "wrap" }}>
            <div>
              <div className="display" style={{ fontSize: 56, color: "var(--c-primary)" }}>{site.stats.googleRating}</div>
              <Stars n={5} />
            </div>
            <div style={{ width: 1, height: 60, background: "var(--c-line)" }}></div>
            <div>
              <div style={{ fontSize: 24, fontFamily: "var(--font-display)" }}>{site.stats.reviewCount} reviews</div>
              <div style={{ fontSize: 13, color: "var(--c-ink-mute)" }}>Across Google & JustDial</div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="card" style={{ height: "100%" }}>
                  <Stars n={t.rating} />
                  <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--c-ink-soft)", margin: "20px 0 24px" }}>
                    "{t.quote}"
                  </p>
                  <div style={{ paddingTop: 20, borderTop: "1px solid var(--c-line)" }}>
                    <div style={{ fontWeight: 500 }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: "var(--c-ink-mute)" }}>
                      {t.location} · {t.treatment}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <BookCTA />
    </div>
  );
}
