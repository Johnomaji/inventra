"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    color: "var(--cyan)",
    colorRgb: "0,229,255",
    title: "Connect Your Business",
    desc: "Link your POS, supplier data, or import a spreadsheet. Inventra maps your full inventory ecosystem in under 10 minutes.",
    detail: "No hardware. No IT team. No months-long onboarding.",
  },
  {
    num: "02",
    color: "var(--violet)",
    colorRgb: "124,77,255",
    title: "AI Learns Your Patterns",
    desc: "Over the first 7 days, the AI engine analyzes demand cycles, seasonal patterns, supplier lead times, and risk factors unique to your market.",
    detail: "African trade patterns. Local data. Zero Western assumptions.",
  },
  {
    num: "03",
    color: "var(--amber)",
    colorRgb: "255,179,0",
    title: "Command with Clarity",
    desc: "From day 8, Inventra surfaces predictions, alerts, and AR-powered visibility tools so you can make decisions in seconds, not hours.",
    detail: "Intelligence activated. Business transformed.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      style={{
        padding: "140px 24px",
        background: "var(--bg2)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "80px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "40px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(0,229,255,0.08)",
                  border: "1px solid rgba(0,229,255,0.2)",
                  color: "var(--cyan)",
                  fontFamily:
                    "var(--font-space-mono), Space Mono, monospace",
                  fontSize: "0.68rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "7px 18px",
                  borderRadius: "100px",
                  marginBottom: "20px",
                }}
              >
                ◈ Simple by Design
              </div>
              <h2
                style={{
                  fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                }}
              >
                Live in{" "}
                <em style={{ fontStyle: "normal", color: "var(--cyan)" }}>
                  3 Steps.
                </em>
              </h2>
            </div>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "1.05rem",
                fontWeight: 300,
                lineHeight: 1.75,
                maxWidth: "380px",
              }}
            >
              No hardware. No expensive consultants. No months-long onboarding.
              Just intelligence, activated.
            </p>
          </div>
        </motion.div>

        {/* Steps — editorial row layout */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              whileHover={{ x: 4 }}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr 1fr",
                gap: "40px",
                alignItems: "center",
                padding: "40px 40px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: i === 0
                  ? "20px 20px 0 0"
                  : i === steps.length - 1
                  ? "0 0 20px 20px"
                  : "0",
                borderBottom: i < steps.length - 1 ? "none" : "1px solid var(--border)",
                cursor: "default",
                transition: "background 0.3s",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--surface2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--surface)";
              }}
            >
              {/* Left accent bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "3px",
                  bottom: 0,
                  background: step.color,
                  opacity: 0.6,
                }}
              />

              {/* Step number */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    fontFamily: "var(--font-syne), Syne, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(2.5rem, 4vw, 4rem)",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    color: step.color,
                    opacity: 0.9,
                  }}
                >
                  {step.num}
                </div>
                <div
                  style={{
                    width: "28px",
                    height: "2px",
                    background: step.color,
                    marginTop: "8px",
                    opacity: 0.4,
                    borderRadius: "1px",
                  }}
                />
              </div>

              {/* Title */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-syne), Syne, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                    color: "var(--text)",
                    marginBottom: "8px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily:
                      "var(--font-space-mono), Space Mono, monospace",
                    fontSize: "0.65rem",
                    color: step.color,
                    opacity: 0.75,
                    letterSpacing: "0.06em",
                  }}
                >
                  {step.detail}
                </p>
              </div>

              {/* Description */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--muted)",
                    lineHeight: 1.75,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .how-step-row {
            grid-template-columns: 60px 1fr !important;
            grid-template-rows: auto auto;
          }
          .how-step-row > *:nth-child(3) {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </section>
  );
}
