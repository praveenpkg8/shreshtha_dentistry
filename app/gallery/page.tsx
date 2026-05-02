import BookCTA from "@/components/BookCTA";
import GalleryGrid from "./GalleryGrid";

export default function GalleryPage() {
  return (
    <div className="page-enter">
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <span className="eyebrow">Gallery</span>
          <h1 className="display" style={{ fontSize: "clamp(48px, 7vw, 88px)", margin: "16px 0 24px", lineHeight: 1.05 }}>
            Inside the clinic.
            <br />
            And the smiles we've built.
          </h1>
        </div>
      </section>
      <GalleryGrid />
      <BookCTA />
    </div>
  );
}
