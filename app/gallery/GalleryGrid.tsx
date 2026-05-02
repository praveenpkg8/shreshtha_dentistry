"use client";

import * as React from "react";
import Placeholder from "@/components/Placeholder";
import { gallery } from "@/lib/data";

export default function GalleryGrid() {
  const [filter, setFilter] = React.useState<"all" | "clinic" | "results">("all");
  const items = filter === "all" ? gallery : gallery.filter((g) => g.category === filter);
  return (
    <>
      <section style={{ paddingBottom: 40 }}>
        <div className="container" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {(
            [
              ["all", "All"],
              ["clinic", "Clinic"],
              ["results", "Before & After"],
            ] as const
          ).map(([id, l]) => (
            <button
              key={id}
              onClick={() => setFilter(id as any)}
              className={`chip ${filter === id ? "chip-active" : ""}`}
              style={{ cursor: "pointer" }}
            >
              {l}
            </button>
          ))}
        </div>
      </section>
      <section style={{ paddingBottom: 80 }}>
        <div className="container">
          <div style={{ columnCount: 3, columnGap: 20 }} className="masonry">
            {items.map((g) => (
              <div key={g.id} style={{ marginBottom: 20, breakInside: "avoid" }}>
                <Placeholder label={g.label} aspect={g.aspect} style={{ borderRadius: 20 }} src={g.image || undefined} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
