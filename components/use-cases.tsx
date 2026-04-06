"use client";

import { motion } from "framer-motion";

const cases = [
  {
    emoji: "🏪",
    title: "Retail & FMCG",
    desc: "Eliminate stockouts during peak periods. AI-driven demand forecasting ensures your shelves are full exactly when customers need them.",
    market: "↗ $320B African retail market",
    featured: true,
    wide: true,
  },
  {
    emoji: "💊",
    title: "Pharmaceuticals",
    desc: "Track expiry dates, cold-chain compliance, and regulatory inventory in real time. Zero tolerance for error, fully automated.",
    market: "↗ $40B African pharma market",
    featured: false,
    wide: false,
  },
  {
    emoji: "🏭",
    title: "Manufacturing",
    desc: "Monitor raw materials, WIP, and finished goods with factory-floor AR scanning and AI-optimized supply chain triggers.",
    market: "↗ $500B African manufacturing opportunity",
    featured: false,
    wide: false,
  },
  {
    emoji: "🚚",
    title: "Logistics & 3PL",
    desc: "Manage multi-client warehouses, track inbound shipments, and visualize dispatch queues with spatial VR mapping.",
    market: "↗ $180B African logistics market",
    featured: false,
    wide: false,
  },
  {
    emoji: "🌾",
    title: "Agribusiness",
    desc: "Seasonal demand forecasting, perishable item tracking, and supply chain AI tailored to harvesting cycles and post-harvest loss prevention.",
    market: "↗ Largest African economic sector",
    featured: false,
    wide: false,
  },
  {
    emoji: "🏗️",
    title: "Construction & Hardware",
    desc: "Track thousands of SKUs across project sites. AR lets foremen do instant stock checks without leaving the floor.",
    market: "↗ $6T African infrastructure pipeline",
    featured: false,
    wide: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: i * 0.07,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function UseCases() {
  return (
    <section
      id="use-cases"
      style={{
        padding: "120px 24px",
        background: "var(--bg)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(0,229,255,0.04) 0%, transparent 65%)",
          top: "20%",
          right: "-100px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{ maxWidth: "1120px", margin: "0 auto", position: "relative", zIndex: 1 }}
      >
        {/* Header */}
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
            marginBottom: "56px",
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
              ◎ Built for Your Industry
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.4rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              One Platform.
              <br />
              Every Market.
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <p
              style={{
                color: "var(--muted)",
                fontWeight: 300,
                lineHeight: 1.75,
                fontSize: "1rem",
              }}
            >
              Inventra adapts to the unique rhythms, risks, and requirements of
              each sector — built ground-up for African trade realities.
            </p>
          </div>
        </motion.div>

        {/* Bento grid layout */}
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto auto",
            gap: "12px",
          }}
        >
          {/* Retail — wide (spans 2 cols) */}
          <motion.div
            custom={0}
            variants={fadeUp}
            whileHover={{ y: -6, transition: { duration: 0.22 } }}
            style={{
              gridColumn: "1 / 3",
              background: "var(--cyan)",
              borderRadius: "20px",
              padding: "40px 40px",
              position: "relative",
              overflow: "hidden",
              cursor: "default",
              boxShadow: "0 12px 48px rgba(0,229,255,0.18)",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "center",
            }}
          >
            {/* Inner glow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at top right, rgba(255,255,255,0.15), transparent 55%)",
                pointerEvents: "none",
              }}
            />
            {/* Emoji bg */}
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "32px",
                fontSize: "9rem",
                opacity: 0.1,
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              🏪
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: "2.2rem", marginBottom: "16px" }}>
                🏪
              </div>
              <h3
                style={{
                  fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontWeight: 800,
                  color: "var(--bg)",
                  marginBottom: "8px",
                  letterSpacing: "-0.02em",
                }}
              >
                Retail & FMCG
              </h3>
              <div
                style={{
                  fontFamily:
                    "var(--font-space-mono), Space Mono, monospace",
                  fontSize: "0.65rem",
                  color: "rgba(5,8,16,0.55)",
                  letterSpacing: "0.06em",
                }}
              >
                ↗ $320B African retail market
              </div>
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <p
                style={{
                  fontSize: "1rem",
                  color: "rgba(5,8,16,0.72)",
                  lineHeight: 1.75,
                }}
              >
                Eliminate stockouts during peak periods. AI-driven demand
                forecasting ensures your shelves are full exactly when customers
                need them.
              </p>
            </div>
          </motion.div>

          {/* Pharmaceuticals */}
          {cases.slice(1).map((c, i) => (
            <motion.div
              key={c.title}
              custom={i + 1}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                padding: "28px 24px",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
              }}
            >
              <span
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "14px",
                  display: "block",
                }}
              >
                {c.emoji}
              </span>
              <h3
                style={{
                  fontSize: "0.95rem",
                  marginBottom: "8px",
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontWeight: 700,
                  color: "var(--text)",
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  marginBottom: "14px",
                }}
              >
                {c.desc}
              </p>
              <div
                style={{
                  fontFamily:
                    "var(--font-space-mono), Space Mono, monospace",
                  fontSize: "0.62rem",
                  color: "var(--cyan)",
                  borderTop: "1px solid var(--border)",
                  paddingTop: "10px",
                }}
              >
                {c.market}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
