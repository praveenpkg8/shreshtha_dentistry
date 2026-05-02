import Link from "next/link";
import Icon from "@/components/Icon";
import Placeholder from "@/components/Placeholder";
import Reveal from "@/components/Reveal";
import BookCTA from "@/components/BookCTA";
import BookButton from "@/components/BookButton";
import { services } from "@/lib/data";

export default function KidsPage() {
  const kidsServices = services.filter((s) => s.category === "kids");
  return (
    <div className="page-enter">
      <section
        className="section"
        style={{
          paddingBottom: 40,
          background: "linear-gradient(180deg, var(--c-accent-soft) 0%, transparent 100%)",
        }}
      >
        <div className="container">
          <div
            className="grid-2-1"
            style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "center" }}
          >
            <div>
              <span className="chip" style={{ background: "var(--c-surface)", marginBottom: 24 }}>
                <Icon name="heart" size={14} /> Shreshtha Kids Dentistry
              </span>
              <h1 className="display" style={{ fontSize: "clamp(48px, 8vw, 104px)", marginBottom: 24, lineHeight: 1 }}>
                A clinic
                <br />
                kids actually
                <br />
                <em style={{ fontStyle: "italic", color: "var(--c-primary)" }}>look forward to.</em>
              </h1>
              <p className="lede" style={{ maxWidth: 520, marginBottom: 36 }}>
                Paediatric specialists, behaviour-led protocols, and a play corner that makes the
                waiting room the favourite room. We believe kids' first dental memories should be
                good ones.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <BookButton className="btn btn-primary btn-lg">Book a kids' visit</BookButton>
                <Link href="/contact" className="btn btn-secondary btn-lg">
                  Talk to us first
                </Link>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <Placeholder label="Photo — child at the kids' play corner" aspect="4/5" style={{ borderRadius: 36 }} />
              <div
                style={{
                  position: "absolute",
                  bottom: -24,
                  right: -24,
                  background: "var(--c-surface)",
                  padding: 20,
                  borderRadius: 20,
                  boxShadow: "var(--shadow-lg)",
                  maxWidth: 220,
                }}
              >
                <div className="display" style={{ fontSize: 32, color: "var(--c-primary)" }}>
                  0 tears
                </div>
                <div style={{ fontSize: 13, color: "var(--c-ink-mute)", marginTop: 4 }}>Goal at every visit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 56, maxWidth: 720 }}>
            <span className="eyebrow">What we do differently</span>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 60px)", marginTop: 12 }}>
              Built around how
              <br />
              <em style={{ fontStyle: "italic", color: "var(--c-primary)" }}>children actually feel.</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {[
              ["Tell-show-do", "Every step is explained and demonstrated before it happens — no surprises, no fear."],
              ["Paced visits", "First visits are short and gentle. We build trust before we treat."],
              ["Pain-free protocols", "Topical anaesthesia before injections. Distraction techniques. Modern, gentle equipment."],
              ["Parent in the room", "You stay close. Behaviour management works best when caregivers are part of it."],
              ["Reward systems", "Stickers, certificates, and a treasure box. Small things, big difference."],
              ["Specialist-led", "All paediatric care is overseen by Dr. Swetha — author of Paediatric Sports Dentistry."],
            ].map(([t, d], i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="card" style={{ height: "100%" }}>
                  <h3 className="display" style={{ fontSize: 22, marginBottom: 12 }}>{t}</h3>
                  <p style={{ fontSize: 15, color: "var(--c-ink-soft)", lineHeight: 1.55 }}>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--c-bg-alt)" }}>
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <span className="eyebrow">Kids' treatments</span>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 56px)", marginTop: 12 }}>
              Everything your child might need.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {kidsServices.map((s, i) => (
              <Reveal key={s.id} delay={(i % 4) * 50}>
                <Link
                  href={`/services/${s.id}`}
                  className="card"
                  style={{ display: "block", cursor: "pointer", height: "100%" }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "var(--c-accent-soft)",
                      color: "var(--c-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <Icon name={s.icon} size={20} />
                  </div>
                  <h3 className="display" style={{ fontSize: 22, marginBottom: 10 }}>{s.name}</h3>
                  <p style={{ fontSize: 14, color: "var(--c-ink-soft)", lineHeight: 1.55, marginBottom: 16 }}>
                    {s.tagline}
                  </p>
                  <span style={{ fontSize: 13, color: "var(--c-primary)", fontWeight: 500 }}>Learn more →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 56px" }}>
            <span className="eyebrow">When to bring your child</span>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 56px)", marginTop: 12 }}>
              A timeline parents trust.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32 }}>
            {[
              ["6 months", "First tooth", "First dental visit ideally within 6 months of the first tooth, or by age 1."],
              ["3–6 years", "Cavity prevention", "Sealants, fluoride varnish, and gentle cleanings as habits form."],
              ["6–12 years", "Mixed dentition", "Space maintainers, early orthodontic checks, sports mouthguards."],
              ["12+ years", "Teen care", "Aligners or braces, wisdom-tooth monitoring, whitening guidance."],
            ].map(([age, t, d], i) => (
              <Reveal key={i} delay={i * 80}>
                <div style={{ paddingTop: 24, borderTop: "2px solid var(--c-primary)" }}>
                  <div className="display" style={{ fontSize: 32, color: "var(--c-primary)", marginBottom: 12 }}>
                    {age}
                  </div>
                  <h3 className="display" style={{ fontSize: 20, marginBottom: 8 }}>{t}</h3>
                  <p style={{ fontSize: 14, color: "var(--c-ink-soft)", lineHeight: 1.55 }}>{d}</p>
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
