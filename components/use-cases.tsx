"use client";

import { motion } from "framer-motion";

const cases = [
  {
    emoji: "🏪",
    title: "Retail & FMCG",
    desc: "Eliminate stockouts during peak periods. AI-driven demand forecasting ensures your shelves are full exactly when customers need them.",
    market: "↗ $320B African retail market",
  },
  {
    emoji: "💊",
    title: "Pharmaceuticals",
    desc: "Track expiry dates, cold-chain compliance, and regulatory inventory in real time. Zero tolerance for error, fully automated.",
    market: "↗ $40B African pharma market",
  },
  {
    emoji: "🏭",
    title: "Manufacturing",
    desc: "Monitor raw materials, WIP, and finished goods with factory-floor AR scanning and AI-optimized supply chain triggers.",
    market: "↗ $500B African manufacturing opportunity",
  },
  {
    emoji: "🚚",
    title: "Logistics & 3PL",
    desc: "Manage multi-client warehouses, track inbound shipments, and visualize dispatch queues with spatial VR mapping.",
    market: "↗ $180B African logistics market",
  },
  {
    emoji: "🌾",
    title: "Agribusiness",
    desc: "Seasonal demand forecasting, perishable item tracking, and supply chain AI tailored to harvesting cycles and post-harvest loss prevention.",
    market: "↗ Largest African economic sector",
  },
  {
    emoji: "🏗️",
    title: "Construction & Hardware",
    desc: "Track thousands of SKUs across project sites. AR lets foremen do instant stock checks without leaving the floor.",
    market: "↗ $6T African infrastructure pipeline",
  },
];

const caseVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function UseCases() {
  return (
    <section id="use-cases" style={{ padding: "120px 24px", background: "var(--bg2)" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: "1120px", margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
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
            }}
          >
            ◎ Built for Your Industry
          </div>
        </div>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(2rem, 4vw, 3.4rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          One Platform. Every Market.
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--muted)",
            marginBottom: "60px",
            fontWeight: 300,
          }}
        >
          Inventra adapts to the unique rhythms, risks, and requirements of each
          sector.
        </p>

        <motion.div
          className="grid-use-cases"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {cases.map((c) => (
            <motion.div
              key={c.title}
              variants={caseVariants}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
              className="card-shimmer card-accent"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                padding: "32px 28px",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
            >
              <span style={{ fontSize: "2rem", marginBottom: "14px", display: "block" }}>
                {c.emoji}
              </span>
              <h3
                style={{
                  fontSize: "1rem",
                  marginBottom: "10px",
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontWeight: 700,
                }}
              >
                {c.title}
              </h3>
              <p style={{ fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "14px" }}>
                {c.desc}
              </p>
              <div
                style={{
                  fontFamily: "var(--font-space-mono), Space Mono, monospace",
                  fontSize: "0.68rem",
                  color: "var(--cyan)",
                  borderTop: "1px solid var(--border)",
                  paddingTop: "12px",
                }}
              >
                {c.market}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
