"use client";

import * as React from "react";
import Icon from "./Icon";
import { faqs } from "@/lib/data";

export default function FAQList() {
  const [openIndex, setOpenIndex] = React.useState(0);
  return (
    <div>
      {faqs.map((f, i) => (
        <div key={i} style={{ borderTop: "1px solid var(--c-line)", padding: "24px 0" }}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            style={{ display: "flex", justifyContent: "space-between", width: "100%", textAlign: "left", gap: 24 }}
          >
            <span className="display" style={{ fontSize: 22 }}>{f.q}</span>
            <Icon name={openIndex === i ? "minus" : "plus"} size={22} />
          </button>
          {openIndex === i && (
            <p style={{ marginTop: 16, color: "var(--c-ink-soft)", fontSize: 16, lineHeight: 1.7, maxWidth: 720 }}>
              {f.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
