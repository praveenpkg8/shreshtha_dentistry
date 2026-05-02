"use client";

import * as React from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { services, categories } from "@/lib/data";

export default function ServiceFinder() {
  const [filter, setFilter] = React.useState("all");
  const [search, setSearch] = React.useState("");
  const filtered = services.filter(
    (s) =>
      (filter === "all" || s.category === filter) &&
      (search === "" ||
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.tagline.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <section style={{ paddingBottom: 40 }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              gap: 16,
              alignItems: "center",
              flexWrap: "wrap",
              padding: 16,
              background: "var(--c-bg-alt)",
              borderRadius: 20,
            }}
          >
            <input
              className="input"
              placeholder="Search services — e.g. whitening, braces, fillings"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ flex: 1, minWidth: 240, background: "var(--c-surface)" }}
            />
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setFilter(c.id)}
                  className={`chip ${filter === c.id ? "chip-active" : ""}`}
                  style={{ cursor: "pointer" }}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: 80 }}>
        <div className="container">
          {filtered.length === 0 ? (
            <p style={{ textAlign: "center", color: "var(--c-ink-mute)", padding: 80 }}>
              No services match — try clearing the search.
            </p>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
              {filtered.map((s, i) => (
                <Reveal key={s.id} delay={(i % 6) * 40}>
                  <Link
                    href={`/services/${s.id}`}
                    className="card"
                    style={{ display: "block", height: "100%", cursor: "pointer" }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 12,
                          background: "var(--c-primary-soft)",
                          color: "var(--c-primary)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon name={s.icon} size={20} />
                      </div>
                      <span className="chip" style={{ fontSize: 11, textTransform: "capitalize" }}>
                        {s.category}
                      </span>
                    </div>
                    <h3 className="display" style={{ fontSize: 24, marginBottom: 10 }}>
                      {s.name}
                    </h3>
                    <p style={{ color: "var(--c-ink-soft)", fontSize: 14.5, marginBottom: 24, lineHeight: 1.5 }}>
                      {s.tagline}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingTop: 16,
                        borderTop: "1px solid var(--c-line)",
                      }}
                    >
                      <span style={{ fontSize: 13, color: "var(--c-ink-mute)" }}>
                        {s.duration} · {s.price}
                      </span>
                      <Icon name="arrow" size={16} />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
