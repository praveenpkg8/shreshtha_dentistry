import Link from "next/link";
import Icon from "@/components/Icon";
import Placeholder from "@/components/Placeholder";
import Reveal from "@/components/Reveal";
import Stars from "@/components/Stars";
import BookButton from "@/components/BookButton";
import BookCTA from "@/components/BookCTA";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { services, doctors, site } from "@/lib/data";

export default function HomePage() {
  const variant = site.theme?.heroVariant || "editorial";
  return (
    <div className="page-enter">
      {variant === "split" ? (
        <HeroSplit />
      ) : variant === "centered" ? (
        <HeroCentered />
      ) : (
        <HeroEditorial />
      )}
      <TrustStrip />
      <ServicesPreview />
      <DoctorsPreview />
      <ProcessSection />
      <KidsCallout />
      <TestimonialsCarousel />
      <BookCTA />
    </div>
  );
}

function HeroEditorial() {
  return (
    <section className="section" style={{ paddingTop: 60, paddingBottom: 80 }}>
      <div className="container">
        <div
          className="grid-2-1"
          style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 72, alignItems: "center" }}
        >
          <div>
            <span className="chip chip-soft" style={{ marginBottom: 28 }}>
              <span className="dot" style={{ background: "var(--c-primary)" }}></span>
              Now accepting new patients · {site.brand.location}
            </span>
            <h1 className="display" style={{ fontSize: "clamp(48px, 7vw, 96px)", marginBottom: 24 }}>
              Dentistry,
              <br />
              <em style={{ fontStyle: "italic", color: "var(--c-primary)" }}>made gentle.</em>
            </h1>
            <p className="lede" style={{ maxWidth: 480, marginBottom: 36 }}>
              A modern multispeciality practice in central Chennai, designed around how care should
              feel — calm, considered, and built for the whole family.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <BookButton className="btn btn-primary btn-lg">
                Book a visit <Icon name="arrow" size={18} />
              </BookButton>
              <Link href="/services" className="btn btn-secondary btn-lg">
                Explore services
              </Link>
            </div>
            <div
              style={{
                marginTop: 56,
                display: "flex",
                gap: 40,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div>
                <div className="display" style={{ fontSize: 36, color: "var(--c-primary)" }}>
                  {site.stats.googleRating}
                </div>
                <div style={{ fontSize: 13, color: "var(--c-ink-mute)" }}>
                  Google rating · {site.stats.reviewCount} reviews
                </div>
              </div>
              <div style={{ width: 1, height: 36, background: "var(--c-line)" }}></div>
              <div>
                <div className="display" style={{ fontSize: 36, color: "var(--c-primary)" }}>
                  {site.stats.yearsOfPractice}
                </div>
                <div style={{ fontSize: 13, color: "var(--c-ink-mute)" }}>Years of clinical practice</div>
              </div>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <Placeholder
              label="Hero photograph — Dr. Swetha with a young patient, natural light"
              aspect="4/5"
              style={{ borderRadius: 36 }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 32,
                left: -40,
                background: "var(--c-surface)",
                padding: 20,
                borderRadius: 20,
                boxShadow: "var(--shadow-lg)",
                maxWidth: 240,
                border: "1px solid var(--c-line)",
              }}
            >
              <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
                <Stars n={5} />
              </div>
              <p style={{ fontSize: 14, color: "var(--c-ink-soft)", lineHeight: 1.4 }}>
                "My six-year-old asks when we're going next."
              </p>
              <p style={{ fontSize: 12, color: "var(--c-ink-mute)", marginTop: 8 }}>— Meera, parent</p>
            </div>
            <div
              style={{
                position: "absolute",
                top: 32,
                right: -32,
                background: "var(--c-accent-soft)",
                padding: "14px 18px",
                borderRadius: 16,
                display: "flex",
                alignItems: "center",
                gap: 10,
                boxShadow: "var(--shadow)",
              }}
            >
              <Icon name="check" size={18} />
              <span style={{ fontSize: 13, fontWeight: 500 }}>Same-day emergencies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroSplit() {
  return (
    <section style={{ minHeight: "calc(100vh - 80px)", display: "flex" }}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px var(--gutter)",
          maxWidth: 720,
          margin: "0 auto",
        }}
      >
        <span className="eyebrow" style={{ marginBottom: 24 }}>Shreshtha Dentistry · Est. 2018</span>
        <h1 className="display" style={{ fontSize: "clamp(56px, 8vw, 112px)", marginBottom: 24 }}>
          Care
          <br />
          worth
          <br />
          <em style={{ fontStyle: "italic", color: "var(--c-primary)" }}>smiling for.</em>
        </h1>
        <p className="lede" style={{ maxWidth: 520, marginBottom: 36 }}>
          From a child's first visit to advanced cosmetic work — one calm, beautifully considered space in {site.brand.location}.
        </p>
        <div style={{ display: "flex", gap: 14 }}>
          <BookButton className="btn btn-primary btn-lg">Book a visit</BookButton>
          <Link href="/services" className="btn btn-ghost btn-lg">
            What we treat →
          </Link>
        </div>
      </div>
      <div style={{ flex: 1, padding: "20px var(--gutter) 20px 0" }}>
        <Placeholder
          label="Hero — full-bleed clinic interior"
          aspect="auto"
          style={{ borderRadius: 36, height: "100%", minHeight: 600 }}
        />
      </div>
    </section>
  );
}

function HeroCentered() {
  return (
    <section className="section" style={{ paddingTop: 80, paddingBottom: 60 }}>
      <div className="container" style={{ textAlign: "center", maxWidth: 920, margin: "0 auto" }}>
        <span className="chip chip-soft" style={{ marginBottom: 28 }}>
          <span className="dot" style={{ background: "var(--c-primary)" }}></span>
          Multispeciality · Paediatric · {site.brand.location}
        </span>
        <h1 className="display" style={{ fontSize: "clamp(48px, 8vw, 104px)", marginBottom: 28 }}>
          Where every smile
          <br />
          <em style={{ fontStyle: "italic", color: "var(--c-primary)" }}>feels at home.</em>
        </h1>
        <p className="lede" style={{ maxWidth: 600, margin: "0 auto 36px" }}>
          Family dentistry, paediatric specialists, and advanced cosmetic care — under one calm, modern roof.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <BookButton className="btn btn-primary btn-lg">Book appointment</BookButton>
          <Link href="/about" className="btn btn-secondary btn-lg">
            Meet the doctors
          </Link>
        </div>
        <div style={{ marginTop: 64 }}>
          <Placeholder label="Hero — wide clinic photograph" aspect="21/9" style={{ borderRadius: 36 }} />
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section
      style={{
        borderTop: "1px solid var(--c-line)",
        borderBottom: "1px solid var(--c-line)",
        padding: "32px 0",
        background: "var(--c-bg-alt)",
      }}
    >
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", gap: 32 }}
      >
        {[
          ["Award-winning", "Young Dental Achiever 2023"],
          ["Painless protocols", "Modern anaesthesia"],
          ["Transparent pricing", "Written treatment plans"],
          ["Same-day emergencies", "We keep slots open"],
        ].map(([t, s], i) => (
          <div key={i} style={{ textAlign: "center", minWidth: 160 }}>
            <div style={{ fontSize: 15, fontWeight: 500 }}>{t}</div>
            <div style={{ fontSize: 13, color: "var(--c-ink-mute)", marginTop: 2 }}>{s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesPreview() {
  const featured = ["aligners", "veneers", "crowns-bridges", "kids-pulp", "scaling-polishing", "extraction"];
  const items = featured.map((id) => services.find((s) => s.id === id)!).filter(Boolean);
  return (
    <section className="section">
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            marginBottom: 48,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <span className="eyebrow">What we treat</span>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 60px)", marginTop: 12, maxWidth: 640 }}>
              Comprehensive care,{" "}
              <em style={{ fontStyle: "italic", color: "var(--c-primary)" }}>under one roof.</em>
            </h2>
          </div>
          <Link href="/services" className="btn btn-ghost">
            All services <Icon name="arrow" size={16} />
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {items.map((s, i) => (
            <Reveal key={s.id} delay={i * 60}>
              <Link href={`/services/${s.id}`} className="card" style={{ display: "block", height: "100%", cursor: "pointer" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: "var(--c-primary-soft)",
                      color: "var(--c-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon name={s.icon} size={22} />
                  </div>
                  <span className="chip" style={{ fontSize: 11 }}>{s.duration}</span>
                </div>
                <h3 className="display" style={{ fontSize: 26, marginBottom: 10 }}>{s.name}</h3>
                <p style={{ color: "var(--c-ink-soft)", fontSize: 15, marginBottom: 24 }}>{s.tagline}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: 20,
                    borderTop: "1px solid var(--c-line)",
                  }}
                >
                  <span style={{ fontSize: 14, color: "var(--c-ink-mute)" }}>{s.price}</span>
                  <Icon name="arrow" size={18} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DoctorsPreview() {
  return (
    <section className="section" style={{ background: "var(--c-bg-alt)" }}>
      <div className="container">
        <div
          className="grid-2-1"
          style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "center" }}
        >
          <div>
            <span className="eyebrow">Our doctors</span>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 56px)", marginTop: 12, marginBottom: 24 }}>
              Two specialists.
              <br />
              <em style={{ fontStyle: "italic", color: "var(--c-primary)" }}>One philosophy.</em>
            </h2>
            <p style={{ color: "var(--c-ink-soft)", fontSize: 17, marginBottom: 32, lineHeight: 1.6 }}>
              We pair surgical precision with a paediatric-first sensibility. Every treatment plan
              is written, transparent, and explained on your terms — never rushed, never upsold.
            </p>
            <Link href="/about" className="btn btn-secondary">
              About the team <Icon name="arrow" size={16} />
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {doctors.map((d, i) => (
              <Reveal key={d.id} delay={i * 100}>
                <div className="card" style={{ padding: 0, overflow: "hidden", height: "100%" }}>
                  <Placeholder label={`Portrait — ${d.name}`} aspect="3/4" style={{ borderRadius: 0 }} src={d.image || undefined} />
                  <div style={{ padding: 24 }}>
                    <h3 className="display" style={{ fontSize: 22, marginBottom: 4 }}>{d.name}</h3>
                    <p style={{ fontSize: 13, color: "var(--c-ink-mute)", marginBottom: 8 }}>{d.credentials}</p>
                    <p style={{ fontSize: 14, color: "var(--c-primary)" }}>{d.specialty}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { n: "01", t: "Get in touch", d: "Book online, call, or WhatsApp us. We'll confirm within an hour during clinic hours." },
    { n: "02", t: "Consult & plan", d: "A thorough exam and digital imaging — followed by a written, itemised treatment plan." },
    { n: "03", t: "Treatment", d: "Comfortable, paced sessions in a calm operatory. Local anaesthesia for anything invasive." },
    { n: "04", t: "Follow-through", d: "Aftercare guidance, scheduled reviews, and a six-month recall — we don't disappear." },
  ];
  return (
    <section className="section">
      <div className="container">
        <div style={{ marginBottom: 56, maxWidth: 720 }}>
          <span className="eyebrow">How it works</span>
          <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 56px)", marginTop: 12 }}>
            From first visit to{" "}
            <em style={{ fontStyle: "italic", color: "var(--c-primary)" }}>follow-through.</em>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32 }}>
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div style={{ paddingTop: 24, borderTop: "1px solid var(--c-ink)" }}>
                <span className="display" style={{ fontSize: 14, color: "var(--c-ink-mute)", letterSpacing: "0.04em" }}>
                  {s.n}
                </span>
                <h3 className="display" style={{ fontSize: 24, marginTop: 32, marginBottom: 12 }}>
                  {s.t}
                </h3>
                <p style={{ fontSize: 15, color: "var(--c-ink-soft)", lineHeight: 1.55 }}>{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function KidsCallout() {
  return (
    <section className="section">
      <div className="container">
        <div
          style={{
            background: "linear-gradient(135deg, var(--c-accent-soft) 0%, var(--c-primary-soft) 100%)",
            borderRadius: 36,
            padding: "clamp(40px, 7vw, 96px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            className="grid-2-1"
            style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "center", position: "relative", zIndex: 2 }}
          >
            <div>
              <span className="chip" style={{ background: "rgba(255,255,255,0.55)", border: 0, marginBottom: 24 }}>
                <Icon name="heart" size={14} /> For our smallest patients
              </span>
              <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 64px)", marginBottom: 20 }}>
                Kids
                <br />
                <em style={{ fontStyle: "italic" }}>welcome here.</em>
              </h2>
              <p style={{ fontSize: 18, color: "var(--c-ink-soft)", lineHeight: 1.55, marginBottom: 32, maxWidth: 480 }}>
                Paediatric-trained, behaviour-management led. We make first visits gentle, build positive
                associations, and treat baby teeth like they matter — because they do.
              </p>
              <Link href="/kids" className="btn btn-primary">
                Visit Kids Dentistry <Icon name="arrow" size={16} />
              </Link>
            </div>
            <div>
              <Placeholder
                label="Photo — child smiling, kids' play corner"
                aspect="4/5"
                style={{ borderRadius: 24, background: "rgba(255,255,255,0.4)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
