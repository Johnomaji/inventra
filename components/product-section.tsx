"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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

const caps = [
  { icon: "🧠", name: "Inventra Intelligence", desc: "AI demand forecasting & anomaly detection", badge: "LIVE", badgeVariant: "cyan" },
  { icon: "👓", name: "Inventra AR", desc: "Real-world inventory overlay & scanning", badge: "BETA", badgeVariant: "cyan" },
  { icon: "🌐", name: "Inventra VR Hub", desc: "Immersive multi-location management", badge: "Q3 2025", badgeVariant: "amber" },
  { icon: "📡", name: "Inventra Connect", desc: "Supplier network & logistics API", badge: "LIVE", badgeVariant: "cyan" },
];

const pillColors: Record<string, React.CSSProperties> = {
  cyan: { background: "rgba(0,229,255,0.06)", border: "1px solid rgba(0,229,255,0.15)", color: "var(--cyan)" },
  amber: { background: "rgba(255,179,0,0.06)", border: "1px solid rgba(255,179,0,0.15)", color: "var(--amber)" },
  violet: { background: "rgba(124,77,255,0.06)", border: "1px solid rgba(124,77,255,0.15)", color: "#a67cff" },
};

const badgeColors: Record<string, React.CSSProperties> = {
  cyan: { background: "rgba(0,229,255,0.1)", color: "var(--cyan)", border: "1px solid rgba(0,229,255,0.2)" },
  amber: { background: "rgba(255,179,0,0.1)", color: "var(--amber)", border: "1px solid rgba(255,179,0,0.2)" },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function ProductSection() {
  return (
    <section
      id="product"
      style={{ padding: "120px 24px", background: "var(--bg2)", overflow: "hidden" }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          alignItems: "center",
        }}
        className="grid-2col"
      >
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={itemVariants}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(0,229,255,0.08)",
                border: "1px solid rgba(0,229,255,0.2)",
                color: "var(--cyan)",
                fontFamily: "var(--font-space-mono), Space Mono, monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "7px 16px",
                borderRadius: "2px",
                marginBottom: "24px",
              }}
            >
              ◎ Introducing Inventra
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.4rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: "18px",
              }}
            >
              The{" "}
              <em style={{ fontStyle: "normal", color: "var(--cyan)" }}>
                Intelligent OS
              </em>{" "}
              for Commerce in Africa
            </h2>
            <p style={{ color: "var(--muted)", fontWeight: 300, lineHeight: 1.8 }}>
              Inventra isn&apos;t software you install and forget. It&apos;s a living
              system that learns your business, adapts to your market, and gets
              smarter with every transaction — built ground-up for African trade
              realities.
            </p>
            <p style={{ color: "var(--muted)", fontWeight: 300, lineHeight: 1.8, marginTop: "12px" }}>
              One platform. Every layer of your inventory operation. Total
              intelligence.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "28px" }}>
            {pills.map((pill) => (
              <span
                key={pill.label}
                style={{
                  ...pillColors[pill.variant],
                  fontFamily: "var(--font-space-mono), Space Mono, monospace",
                  fontSize: "0.68rem",
                  padding: "7px 14px",
                  borderRadius: "100px",
                  letterSpacing: "0.05em",
                }}
              >
                {pill.label}
              </span>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} style={{ marginTop: "40px" }}>
            <Link
              href="/early-access"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "var(--cyan)",
                color: "var(--bg)",
                fontFamily: "var(--font-syne), Syne, sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "16px 36px",
                textDecoration: "none",
                clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)",
                transition: "all 0.25s",
              }}
            >
              Get Early Access →
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            background: "var(--surface2)",
            border: "1px solid var(--border-strong)",
            borderRadius: "14px",
            padding: "32px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-syne), Syne, sans-serif",
              fontWeight: 800,
              fontSize: "2.8rem",
              letterSpacing: "-0.02em",
              marginBottom: "4px",
            }}
          >
            Inven<span style={{ color: "var(--cyan)" }}>tra</span>
          </div>
          <div
            style={{
              fontFamily: "var(--font-space-mono), Space Mono, monospace",
              fontSize: "0.65rem",
              color: "var(--muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "28px",
              paddingBottom: "20px",
              borderBottom: "1px solid var(--border)",
            }}
          >
            THE INTELLIGENT OPERATING SYSTEM FOR AFRICAN COMMERCE
          </div>
          <motion.div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {caps.map((cap) => (
              <motion.div
                key={cap.name}
                variants={itemVariants}
                whileHover={{ x: 6 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 16px",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  transition: "border-color 0.3s",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,229,255,0.1)",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    flexShrink: 0,
                  }}
                >
                  {cap.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-syne), Syne, sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                    }}
                  >
                    {cap.name}
                  </div>
                  <div style={{ fontSize: "0.76rem", color: "var(--muted)" }}>
                    {cap.desc}
                  </div>
                </div>
                <span
                  style={{
                    ...badgeColors[cap.badgeVariant],
                    fontFamily: "var(--font-space-mono), Space Mono, monospace",
                    fontSize: "0.58rem",
                    padding: "4px 8px",
                    borderRadius: "3px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  {cap.badge}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
