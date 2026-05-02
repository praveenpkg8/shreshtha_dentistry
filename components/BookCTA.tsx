"use client";

import Icon from "./Icon";
import { site } from "@/lib/data";
import { useBooking } from "./BookingHost";

export default function BookCTA() {
  const { open } = useBooking();
  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
        <span className="eyebrow">Ready when you are</span>
        <h2 className="display" style={{ fontSize: "clamp(40px, 6vw, 72px)", margin: "16px 0 24px" }}>
          Let's get you smiling.
        </h2>
        <p className="lede" style={{ marginBottom: 36 }}>
          Same-week appointments, transparent pricing, and a clinic that actually feels good to walk into.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn btn-primary btn-lg" onClick={open}>
            Book online <Icon name="arrow" size={18} />
          </button>
          <a
            className="btn btn-secondary btn-lg"
            href={`https://wa.me/${site.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" size={18} /> WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
