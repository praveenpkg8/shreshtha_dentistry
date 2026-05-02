"use client";

import * as React from "react";
import Icon from "./Icon";
import Stars from "./Stars";
import { testimonials } from "@/lib/data";

export default function TestimonialsCarousel() {
  const [i, setI] = React.useState(0);
  const t = testimonials[i];
  React.useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="section" style={{ background: "var(--c-ink)", color: "var(--c-bg)" }}>
      <div className="container" style={{ maxWidth: 920, textAlign: "center", margin: "0 auto" }}>
        <span className="eyebrow" style={{ color: "var(--c-bg-alt)" }}>Patient stories</span>
        <div style={{ marginTop: 16 }}>
          <Icon name="quote" size={36} stroke={0} />
        </div>
        <p
          className="display"
          style={{ fontSize: "clamp(26px, 3.5vw, 40px)", lineHeight: 1.3, marginBottom: 32, marginTop: 24, minHeight: 180 }}
        >
          "{t.quote}"
        </p>
        <div style={{ marginBottom: 24, display: "flex", justifyContent: "center" }}>
          <Stars n={t.rating} />
        </div>
        <div style={{ fontWeight: 500 }}>{t.name}</div>
        <div style={{ fontSize: 13, color: "var(--c-ink-mute)" }}>
          {t.location} · {t.treatment}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 40 }}>
          {testimonials.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              style={{
                width: k === i ? 32 : 8,
                height: 8,
                borderRadius: 4,
                background: k === i ? "var(--c-bg)" : "rgba(255,255,255,.3)",
                transition: "all .3s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
