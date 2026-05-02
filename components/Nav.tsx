"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { navPages, site } from "@/lib/data";
import { useBooking } from "./BookingHost";

export default function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();
  const { open } = useBooking();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="brand" style={{ cursor: "pointer" }}>
          <div className="brand-mark"></div>
          <span>{site.brand.name}</span>
        </Link>
        <div className="nav-links">
          {navPages.map((p) => (
            <Link key={p.id} href={p.id} className={`nav-link ${isActive(p.id) ? "active" : ""}`}>
              {p.label}
            </Link>
          ))}
        </div>
        <div className="nav-cta">
          <a
            className="btn btn-ghost btn-sm"
            href={`tel:${site.contact.phoneTel}`}
            style={{ display: "inline-flex", gap: 6, alignItems: "center" }}
          >
            <Icon name="phone" size={16} /> Call
          </a>
          <button className="btn btn-primary btn-sm" onClick={open}>
            Book appointment
          </button>
        </div>
      </div>
    </nav>
  );
}
