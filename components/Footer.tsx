"use client";

import Link from "next/link";
import Icon from "./Icon";
import { navPages, site } from "@/lib/data";
import { useBooking } from "./BookingHost";

export default function Footer() {
  const { open } = useBooking();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand" style={{ color: "var(--c-bg)", marginBottom: 16 }}>
              <div className="brand-mark"></div>
              <span>{site.brand.fullName}</span>
            </Link>
            <p style={{ color: "var(--c-ink-mute)", maxWidth: 320, marginBottom: 24, marginTop: 16 }}>
              Multispeciality and paediatric dental care in {site.brand.location}. Patient-first. Ethical. Evidence-based.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {site.social.instagram && (
                <a
                  href={site.social.instagram}
                  className="fab"
                  style={{ width: 40, height: 40, background: "transparent", border: "1px solid rgba(255,255,255,.15)", color: "var(--c-bg)" }}
                >
                  <Icon name="instagram" size={18} />
                </a>
              )}
              {site.social.facebook && (
                <a
                  href={site.social.facebook}
                  className="fab"
                  style={{ width: 40, height: 40, background: "transparent", border: "1px solid rgba(255,255,255,.15)", color: "var(--c-bg)" }}
                >
                  <Icon name="facebook" size={18} />
                </a>
              )}
              {site.social.whatsapp && (
                <a
                  href={site.social.whatsapp}
                  className="fab"
                  style={{ width: 40, height: 40, background: "transparent", border: "1px solid rgba(255,255,255,.15)", color: "var(--c-bg)" }}
                >
                  <Icon name="whatsapp" size={18} />
                </a>
              )}
            </div>
          </div>
          <div>
            <h5>Visit</h5>
            <ul>
              <li>{site.contact.addressLine1}</li>
              <li>{site.contact.addressLine2}</li>
              <li>{site.contact.phone}</li>
              <li>{site.contact.email}</li>
            </ul>
          </div>
          <div>
            <h5>Hours</h5>
            <ul>
              <li>{site.hours.weekdays.split("·")[0].trim()}</li>
              <li>{site.hours.weekdays.split("·")[1]?.trim() || ""}</li>
              <li style={{ marginTop: 8 }}>{site.hours.weekend.split("·")[0].trim()}</li>
              <li>{site.hours.weekend.split("·")[1]?.trim() || ""}</li>
            </ul>
          </div>
          <div>
            <h5>Browse</h5>
            <ul>
              {navPages.map((p) => (
                <li key={p.id}>
                  <Link href={p.id}>{p.label}</Link>
                </li>
              ))}
              <li>
                <a onClick={open}>Book appointment</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 {site.brand.fullName}. All rights reserved.</span>
          <span>Designed with care · {site.brand.location}</span>
        </div>
      </div>
    </footer>
  );
}
