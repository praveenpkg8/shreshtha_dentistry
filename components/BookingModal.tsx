"use client";

import * as React from "react";
import Icon from "./Icon";
import { services } from "@/lib/data";

type Props = { open: boolean; close: () => void };

type FormData = {
  forWhom: string;
  service: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
};

const STEPS = ["Who", "Service", "When", "Details"];
const TITLES = ["Who is this for?", "Choose a service", "Pick a date & time", "Your details"];

export default function BookingModal({ open, close }: Props) {
  const [step, setStep] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const [data, setData] = React.useState<FormData>({
    forWhom: "",
    service: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    notes: "",
  });
  const set = <K extends keyof FormData>(k: K, v: FormData[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  React.useEffect(() => {
    if (open) {
      setStep(0);
      setDone(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const canNext = () => {
    if (step === 0) return !!data.forWhom;
    if (step === 1) return !!data.service;
    if (step === 2) return !!data.date && !!data.time;
    if (step === 3) return !!data.name && !!data.phone;
    return false;
  };

  const submit = () => setDone(true);

  return (
    <div
      onClick={close}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(31,42,40,0.6)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        animation: "fadeUp .3s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--c-bg)",
          borderRadius: 28,
          maxWidth: 640,
          width: "100%",
          maxHeight: "90vh",
          overflow: "auto",
          padding: 40,
          position: "relative",
        }}
      >
        <button onClick={close} style={{ position: "absolute", top: 20, right: 20, padding: 8 }}>
          <Icon name="close" size={20} />
        </button>

        {done ? (
          <div style={{ textAlign: "center", padding: "32px 0" }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "var(--c-primary)",
                color: "var(--c-bg)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
              }}
            >
              <Icon name="check" size={32} stroke={2} />
            </div>
            <h2 className="display" style={{ fontSize: 36, marginBottom: 16 }}>
              You're booked.
            </h2>
            <p
              style={{
                color: "var(--c-ink-soft)",
                fontSize: 17,
                maxWidth: 440,
                margin: "0 auto 32px",
              }}
            >
              We'll send a confirmation to {data.phone || "your phone"} shortly. Our team will reach
              out within an hour during clinic hours.
            </p>
            <button className="btn btn-primary" onClick={close}>
              Close
            </button>
          </div>
        ) : (
          <>
            <span className="eyebrow">Book appointment</span>
            <h2 className="display" style={{ fontSize: 32, margin: "12px 0 8px" }}>
              {TITLES[step]}
            </h2>

            <div style={{ display: "flex", gap: 6, marginTop: 24, marginBottom: 32 }}>
              {STEPS.map((_, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: 4,
                    borderRadius: 2,
                    background: i <= step ? "var(--c-primary)" : "var(--c-line)",
                    transition: "background .2s",
                  }}
                />
              ))}
            </div>

            {step === 0 && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  ["Adult", "For me"],
                  ["Child", "For my child"],
                  ["Family", "Family visit"],
                  ["Emergency", "Urgent / emergency"],
                ].map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => set("forWhom", id)}
                    style={{
                      padding: 24,
                      borderRadius: 16,
                      textAlign: "left",
                      background: data.forWhom === id ? "var(--c-ink)" : "var(--c-surface)",
                      color: data.forWhom === id ? "var(--c-bg)" : "var(--c-ink)",
                      border: "1px solid " + (data.forWhom === id ? "transparent" : "var(--c-line)"),
                      transition: "all .2s",
                    }}
                  >
                    <div className="display" style={{ fontSize: 20, marginBottom: 4 }}>
                      {id}
                    </div>
                    <div style={{ fontSize: 13, opacity: 0.7 }}>{label}</div>
                  </button>
                ))}
              </div>
            )}

            {step === 1 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  maxHeight: 360,
                  overflow: "auto",
                  paddingRight: 8,
                }}
              >
                <button
                  onClick={() => set("service", "consultation")}
                  style={{
                    padding: 16,
                    borderRadius: 12,
                    textAlign: "left",
                    background: data.service === "consultation" ? "var(--c-primary-soft)" : "var(--c-surface)",
                    border:
                      "1px solid " +
                      (data.service === "consultation" ? "var(--c-primary)" : "var(--c-line)"),
                  }}
                >
                  <div style={{ fontWeight: 500 }}>General consultation</div>
                  <div style={{ fontSize: 13, color: "var(--c-ink-mute)", marginTop: 4 }}>
                    Not sure yet — we'll figure it out together.
                  </div>
                </button>
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => set("service", s.id)}
                    style={{
                      padding: 16,
                      borderRadius: 12,
                      textAlign: "left",
                      background: data.service === s.id ? "var(--c-primary-soft)" : "var(--c-surface)",
                      border:
                        "1px solid " + (data.service === s.id ? "var(--c-primary)" : "var(--c-line)"),
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 16,
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 500 }}>{s.name}</div>
                      <div style={{ fontSize: 13, color: "var(--c-ink-mute)", marginTop: 2 }}>
                        {s.duration}
                      </div>
                    </div>
                    <Icon name={s.icon} size={20} />
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <div style={{ display: "grid", gap: 16 }}>
                <div className="field">
                  <label className="label">Preferred date</label>
                  <input
                    type="date"
                    className="input"
                    value={data.date}
                    onChange={(e) => set("date", e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div className="field">
                  <label className="label">Preferred time</label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
                    {["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:00"].map((t) => (
                      <button
                        key={t}
                        onClick={() => set("time", t)}
                        style={{
                          padding: "12px 0",
                          borderRadius: 8,
                          background: data.time === t ? "var(--c-ink)" : "var(--c-surface)",
                          color: data.time === t ? "var(--c-bg)" : "var(--c-ink)",
                          border:
                            "1px solid " + (data.time === t ? "transparent" : "var(--c-line)"),
                          fontSize: 14,
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div style={{ display: "grid", gap: 14 }}>
                <div className="field">
                  <label className="label">Name *</label>
                  <input
                    className="input"
                    value={data.name}
                    onChange={(e) => set("name", e.target.value)}
                  />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div className="field">
                    <label className="label">Phone *</label>
                    <input
                      className="input"
                      value={data.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      placeholder="+91 ..."
                    />
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <input
                      className="input"
                      value={data.email}
                      onChange={(e) => set("email", e.target.value)}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Notes (optional)</label>
                  <textarea
                    className="textarea"
                    value={data.notes}
                    onChange={(e) => set("notes", e.target.value)}
                    placeholder="Anything we should know before your visit?"
                  />
                </div>
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 32, gap: 12 }}>
              {step > 0 ? (
                <button className="btn btn-ghost" onClick={() => setStep((s) => s - 1)}>
                  ← Back
                </button>
              ) : (
                <div></div>
              )}
              {step < 3 ? (
                <button
                  className="btn btn-primary"
                  disabled={!canNext()}
                  onClick={() => setStep((s) => s + 1)}
                  style={{ opacity: canNext() ? 1 : 0.5 }}
                >
                  Continue <Icon name="arrow" size={16} />
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  disabled={!canNext()}
                  onClick={submit}
                  style={{ opacity: canNext() ? 1 : 0.5 }}
                >
                  Confirm booking
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
