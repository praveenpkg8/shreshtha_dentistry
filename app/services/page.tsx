import BookCTA from "@/components/BookCTA";
import ServiceFinder from "./ServiceFinder";

export default function ServicesPage() {
  return (
    <div className="page-enter">
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <span className="eyebrow">Services</span>
          <h1 className="display" style={{ fontSize: "clamp(48px, 7vw, 88px)", margin: "16px 0 28px", lineHeight: 1.05 }}>
            Every kind of care
            <br />
            your smile needs.
          </h1>
          <p className="lede" style={{ maxWidth: 640 }}>
            From preventive cleaning to advanced cosmetic and paediatric care — explore our full
            service list, or use the finder below to narrow it down.
          </p>
        </div>
      </section>
      <ServiceFinder />
      <BookCTA />
    </div>
  );
}
