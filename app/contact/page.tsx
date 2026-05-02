import Placeholder from "@/components/Placeholder";
import FAQList from "@/components/FAQList";
import BookButton from "@/components/BookButton";
import { site } from "@/lib/data";

export default function ContactPage() {
  return (
    <div className="page-enter">
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <span className="eyebrow">Contact</span>
          <h1 className="display" style={{ fontSize: "clamp(48px, 7vw, 88px)", margin: "16px 0 24px", lineHeight: 1.05 }}>
            Come visit us
            <br />
            in {site.brand.location.split(",")[0]}.
          </h1>
          <p className="lede" style={{ maxWidth: 600 }}>
            Located near Pondy Bazaar, central Chennai. Walk in for a tour, or get in touch — we
            typically reply within an hour during clinic hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2-1" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48 }}>
            <div>
              <div style={{ marginBottom: 32 }}>
                <span className="eyebrow">Visit</span>
                <p style={{ fontSize: 18, marginTop: 8, lineHeight: 1.5 }}>
                  {site.brand.fullName}
                  <br />
                  {site.contact.addressLine1}
                  <br />
                  {site.contact.addressLine2}
                </p>
              </div>
              <div style={{ marginBottom: 32 }}>
                <span className="eyebrow">Contact</span>
                <p style={{ fontSize: 18, marginTop: 8, lineHeight: 1.7 }}>
                  <a href={`tel:${site.contact.phoneTel}`} style={{ display: "block" }}>
                    {site.contact.phone}
                  </a>
                  <a
                    href={`mailto:${site.contact.email}`}
                    style={{ display: "block", color: "var(--c-primary)" }}
                  >
                    {site.contact.email}
                  </a>
                  <a href={`https://wa.me/${site.contact.whatsapp}`} style={{ display: "block" }}>
                    WhatsApp →
                  </a>
                </p>
              </div>
              <div style={{ marginBottom: 32 }}>
                <span className="eyebrow">Hours</span>
                <p style={{ fontSize: 16, marginTop: 8, lineHeight: 1.7, color: "var(--c-ink-soft)" }}>
                  {site.hours.weekdays}
                  <br />
                  {site.hours.weekend}
                </p>
              </div>
              <BookButton className="btn btn-primary btn-lg">Book appointment</BookButton>
            </div>
            {site.contact.mapEmbed ? (
              <iframe
                src={site.contact.mapEmbed}
                style={{ width: "100%", aspectRatio: "4/3", border: 0, borderRadius: 24 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <Placeholder
                label="Map embed — Google Maps location pin in T. Nagar"
                aspect="4/3"
                style={{ borderRadius: 24 }}
              />
            )}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--c-bg-alt)" }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <span className="eyebrow">FAQ</span>
          <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 56px)", margin: "16px 0 40px" }}>
            Common questions.
          </h2>
          <FAQList />
        </div>
      </section>
    </div>
  );
}
