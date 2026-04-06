"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const caps = [
  {
    icon: "🧠",
    name: "Inventra Intelligence",
    desc: "AI demand forecasting & anomaly detection",
    badge: "LIVE",
    badgeColor: "var(--cyan)",
    badgeBg: "rgba(0,229,255,0.1)",
    badgeBorder: "rgba(0,229,255,0.2)",
    accent: "var(--cyan)",
  },
  {
    icon: "👓",
    name: "Inventra AR",
    desc: "Real-world inventory overlay & scanning",
    badge: "BETA",
    badgeColor: "var(--cyan)",
    badgeBg: "rgba(0,229,255,0.1)",
    badgeBorder: "rgba(0,229,255,0.2)",
    accent: "var(--amber)",
  },
  {
    icon: "🌐",
    name: "Inventra VR Hub",
    desc: "Immersive multi-location management",
    badge: "Q3 2025",
    badgeColor: "var(--amber)",
    badgeBg: "rgba(255,179,0,0.1)",
    badgeBorder: "rgba(255,179,0,0.2)",
    accent: "#a67cff",
  },
  {
    icon: "📡",
    name: "Inventra Connect",
    desc: "Supplier network & logistics API",
    badge: "LIVE",
    badgeColor: "var(--cyan)",
    badgeBg: "rgba(0,229,255,0.1)",
    badgeBorder: "rgba(0,229,255,0.2)",
    accent: "var(--cyan)",
  },
];

const pills = [
  { label: "AI Forecasting", variant: "cyan" },
  { label: "AR Scanning", variant: "cyan" },
  { label: "VR Operations", variant: "cyan" },
  { label: "Multi-currency", variant: "amber" },
  { label: "Offline-first", variant: "amber" },
  { label: "Predictive Restocking", variant: "violet" },
  { label: "Supply Chain AI", variant: "violet" },
  { label: "Mobile-native", variant: "cyan" },
];

const pillColors: Record<string, React.CSSProperties> = {
  cyan: {
    background: "rgba(0,229,255,0.06)",
    border: "1px solid rgba(0,229,255,0.15)",
    color: "var(--cyan)",
  },
  amber: {
    background: "rgba(255,179,0,0.06)",
    border: "1px solid rgba(255,179,0,0.15)",
    color: "var(--amber)",
  },
  violet: {
    background: "rgba(124,77,255,0.06)",
    border: "1px solid rgba(124,77,255,0.15)",
    color: "#a67cff",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function ProductSection() {
  return (
    <section
      id="product"
      style={{
        padding: "120px 24px",
        background: "var(--bg2)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle bg accent */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(0,229,255,0.05) 0%, transparent 65%)",
          top: "20%",
          left: "-100px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "end",
            marginBottom: "60px",
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
              ◎ Introducing Inventra
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.4rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              The{" "}
              <em style={{ fontStyle: "normal", color: "var(--cyan)" }}>
                Intelligent OS
              </em>{" "}
              for Commerce in Africa
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-end" }}>
            <p
              style={{
                color: "var(--muted)",
                fontWeight: 300,
                lineHeight: 1.8,
                fontSize: "1rem",
              }}
            >
              Inventra isn&apos;t software you install and forget. It&apos;s a
              living system that learns your business, adapts to your market,
              and gets smarter with every transaction — built ground-up for
              African trade realities.
            </p>
            <p
              style={{
                color: "var(--muted)",
                fontWeight: 300,
                lineHeight: 1.8,
                fontSize: "1rem",
              }}
            >
              One platform. Every layer of your inventory operation. Total
              intelligence.
            </p>
          </div>
        </motion.div>

        {/* Capability cards — horizontal 4-grid */}
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          {caps.map((cap, i) => (
            <motion.div
              key={cap.name}
              custom={i}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "28px 20px",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
            >
              {/* Top color accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: cap.accent,
                  opacity: 0.6,
                  borderRadius: "16px 16px 0 0",
                }}
              />

              {/* Badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,229,255,0.08)",
                    borderRadius: "10px",
                    fontSize: "1.1rem",
                  }}
                >
                  {cap.icon}
                </div>
                <span
                  style={{
                    background: cap.badgeBg,
                    border: `1px solid ${cap.badgeBorder}`,
                    color: cap.badgeColor,
                    fontFamily:
                      "var(--font-space-mono), Space Mono, monospace",
                    fontSize: "0.55rem",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {cap.badge}
                </span>
              </div>

              <div
                style={{
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  marginBottom: "6px",
                  color: "var(--text)",
                }}
              >
                {cap.name}
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "var(--muted)",
                  lineHeight: 1.6,
                }}
              >
                {cap.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pills + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
            paddingTop: "32px",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {pills.map((pill) => (
              <span
                key={pill.label}
                style={{
                  ...pillColors[pill.variant],
                  fontFamily:
                    "var(--font-space-mono), Space Mono, monospace",
                  fontSize: "0.65rem",
                  padding: "6px 13px",
                  borderRadius: "100px",
                  letterSpacing: "0.05em",
                }}
              >
                {pill.label}
              </span>
            ))}
          </div>

          <Link
            href="/early-access"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--cyan)",
              color: "var(--bg)",
              fontFamily: "var(--font-syne), Syne, sans-serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              padding: "13px 28px",
              textDecoration: "none",
              borderRadius: "10px",
              flexShrink: 0,
              transition: "all 0.2s",
            }}
          >
            Get Early Access →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
