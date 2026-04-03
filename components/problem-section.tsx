"use client";

import { motion } from "framer-motion";

const pains = [
  {
    icon: "📉",
    title: "Stockouts cost you daily",
    desc: "Manual tracking leaves gaps. When a bestseller runs dry, you don't find out until a customer walks away.",
  },
  {
    icon: "🕳️",
    title: "Shrinkage is invisible",
    desc: "Pilferage, spoilage, miscounting — it bleeds profits silently across your entire operation, undetected.",
  },
  {
    icon: "📊",
    title: "Spreadsheets aren't strategy",
    desc: "Hours wasted reconciling data that's already outdated. You're making million-naira decisions on yesterday's guesses.",
  },
  {
    icon: "🌍",
    title: "Western software doesn't fit",
    desc: "Built for stable infrastructure, foreign currencies, and supply chains that bear no resemblance to yours.",
  },
];

const painItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function ProblemSection() {
  return (
    <section
      id="problem"
      style={{ padding: "120px 24px", background: "var(--bg2)" }}
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
          <motion.div variants={painItemVariants}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255,82,82,0.08)",
                border: "1px solid rgba(255,82,82,0.2)",
                color: "#ff5252",
                fontFamily: "var(--font-space-mono), Space Mono, monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "7px 16px",
                borderRadius: "2px",
                marginBottom: "24px",
              }}
            >
              ⚠ The Reality
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.4rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              African businesses are{" "}
              <em style={{ fontStyle: "normal", color: "#ff5252" }}>
                flying blind.
              </em>
            </h2>
            <p
              style={{
                color: "var(--muted)",
                marginTop: "20px",
                fontSize: "1.05rem",
                fontWeight: 300,
              }}
            >
              Every day, thousands of shops, warehouses, and distributors lose
              money — not because they don&apos;t work hard, but because they
              can&apos;t see clearly. The tools they rely on were built for someone
              else, somewhere else.
            </p>
          </motion.div>

          <div
            style={{
              marginTop: "36px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {pains.map((p) => (
              <motion.div
                key={p.title}
                variants={painItemVariants}
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  padding: "16px 20px",
                  background: "rgba(255,82,82,0.04)",
                  border: "1px solid rgba(255,82,82,0.1)",
                  borderRadius: "6px",
                  borderLeft: "3px solid #ff5252",
                }}
              >
                <div style={{ fontSize: "1.1rem", flexShrink: 0, marginTop: "2px" }}>
                  {p.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-syne), Syne, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.92rem",
                    }}
                  >
                    {p.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--muted)",
                      marginTop: "3px",
                    }}
                  >
                    {p.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "48px", paddingBottom: "48px" }}
        >
          <div
            style={{
              background: "rgba(255,82,82,0.04)",
              border: "1px solid rgba(255,82,82,0.12)",
              borderRadius: "10px",
              padding: "32px",
              width: "100%",
              maxWidth: "400px",
              position: "relative",
            }}
          >
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                style={{
                  height: "13px",
                  borderRadius: "3px",
                  background: "rgba(255,82,82,0.18)",
                  marginBottom: "10px",
                  width: i % 2 === 0 ? "80%" : "60%",
                }}
              />
            ))}
            <div
              style={{
                position: "absolute",
                top: "-12px",
                right: "-12px",
                background: "#ff5252",
                color: "#fff",
                fontFamily: "var(--font-space-mono), Space Mono, monospace",
                fontSize: "0.62rem",
                padding: "6px 12px",
                fontWeight: 700,
                borderRadius: "3px",
              }}
            >
              ERROR: DATA MISMATCH
            </div>
          </div>
          <div
            className="problem-stat-float"
            style={{
              position: "absolute",
              bottom: "-24px",
              left: "-24px",
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "14px 18px",
              fontFamily: "var(--font-space-mono), Space Mono, monospace",
              fontSize: "0.7rem",
              color: "#ff5252",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-syne), Syne, sans-serif",
                fontSize: "1.5rem",
                fontWeight: 800,
                display: "block",
              }}
            >
              ₦2.8T
            </span>
            lost annually to poor inventory management in sub-Saharan Africa
          </div>
          <div
            className="problem-stat-float"
            style={{
              position: "absolute",
              top: "-24px",
              left: "-24px",
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "14px 18px",
              fontFamily: "var(--font-space-mono), Space Mono, monospace",
              fontSize: "0.7rem",
              color: "var(--amber)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-syne), Syne, sans-serif",
                fontSize: "1.5rem",
                fontWeight: 800,
                display: "block",
              }}
            >
              67%
            </span>
            of SMEs still rely on spreadsheets or paper for inventory
          </div>
        </motion.div>
      </div>
    </section>
  );
}
