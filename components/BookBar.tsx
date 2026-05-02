"use client";

import Icon from "./Icon";
import { site } from "@/lib/data";
import { useBooking } from "./BookingHost";

export default function BookBar() {
  const { open } = useBooking();
  return (
    <div className="book-bar">
      <a
        className="fab fab-whatsapp"
        href={`https://wa.me/${site.contact.whatsapp}`}
        title="WhatsApp us"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="whatsapp" size={24} />
      </a>
      <a className="fab fab-call" href={`tel:${site.contact.phoneTel}`} title="Call us">
        <Icon name="phone" size={22} />
      </a>
      <button
        className="fab fab-call"
        onClick={open}
        title="Book appointment"
        style={{
          width: "auto",
          padding: "0 22px",
          borderRadius: 28,
          background: "var(--c-primary)",
          gap: 8,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Icon name="arrow" size={18} />
        <span style={{ fontWeight: 500, fontSize: 14 }}>Book</span>
      </button>
    </div>
  );
}
