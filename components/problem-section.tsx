"use client";

import { motion } from "framer-motion";

const pains = [
  {
    num: "01",
    title: "Stockouts cost you daily",
    desc: "Manual tracking leaves gaps. When a bestseller runs dry, you don't find out until a customer walks away.",
  },
  {
    num: "02",
    title: "Shrinkage is invisible",
    desc: "Pilferage, spoilage, miscounting — it bleeds profits silently across your entire operation, undetected.",
  },
  {
    num: "03",
    title: "Spreadsheets aren't strategy",
    desc: "Hours wasted reconciling data that's already outdated. You're making million-naira decisions on yesterday's guesses.",
  },
  {
    num: "04",
    title: "Western software doesn't fit",
    desc: "Built for stable infrastructure, foreign currencies, and supply chains that bear no resemblance to yours.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function ProblemSection() {
  return (
    <section
      id="problem"
      style={{
        padding: "120px 24px",
        background: "var(--bg2)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(255,82,82,0.05) 0%, transparent 65%)",
          top: "50%",
          right: "-100px",
          transform: "translateY(-50%)",
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
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "64px" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,82,82,0.08)",
              border: "1px solid rgba(255,82,82,0.2)",
              color: "#ff5252",
              fontFamily: "var(--font-space-mono), Space Mono, monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "7px 18px",
              borderRadius: "100px",
              marginBottom: "24px",
            }}
          >
            ⚠ The Reality
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "end",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.4rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
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
                fontSize: "1.05rem",
                fontWeight: 300,
                lineHeight: 1.75,
              }}
            >
              Every day, thousands of shops, warehouses, and distributors lose
              money — not because they don&apos;t work hard, but because they
              can&apos;t see clearly. The tools they rely on were built for
              someone else, somewhere else.
            </p>
          </div>
        </motion.div>

        {/* Bento layout: large stat + 4 pain cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "20px",
          }}
        >
          {/* Left: big stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 20 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {/* Stat 1 */}
            <div
              style={{
                background: "rgba(255,82,82,0.05)",
                border: "1px solid rgba(255,82,82,0.18)",
                borderRadius: "20px",
                padding: "40px 32px",
                flex: 1,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(ellipse at bottom right, rgba(255,82,82,0.07), transparent 60%)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontSize: "clamp(3.5rem, 6vw, 5.5rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  color: "#ff5252",
                  marginBottom: "12px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                ₦2.8T
              </div>
              <div
                style={{
                  fontFamily:
                    "var(--font-space-mono), Space Mono, monospace",
                  fontSize: "0.68rem",
                  color: "rgba(255,82,82,0.7)",
                  lineHeight: 1.6,
                  letterSpacing: "0.02em",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                lost annually to poor inventory management in sub-Saharan
                Africa
              </div>
            </div>

            {/* Stat 2 */}
            <div
              style={{
                background: "rgba(255,179,0,0.05)",
                border: "1px solid rgba(255,179,0,0.18)",
                borderRadius: "20px",
                padding: "40px 32px",
                flex: 1,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(ellipse at top right, rgba(255,179,0,0.07), transparent 60%)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontSize: "clamp(3.5rem, 6vw, 5.5rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  color: "var(--amber)",
                  marginBottom: "12px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                67%
              </div>
              <div
                style={{
                  fontFamily:
                    "var(--font-space-mono), Space Mono, monospace",
                  fontSize: "0.68rem",
                  color: "rgba(255,179,0,0.7)",
                  lineHeight: 1.6,
                  letterSpacing: "0.02em",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                of SMEs still rely on spreadsheets or paper for inventory
              </div>
            </div>
          </motion.div>

          {/* Right: 2x2 pain cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            {pains.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                style={{
                  background: "rgba(255,82,82,0.03)",
                  border: "1px solid rgba(255,82,82,0.1)",
                  borderRadius: "16px",
                  padding: "28px 24px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Number accent */}
                <div
                  style={{
                    fontFamily: "var(--font-syne), Syne, sans-serif",
                    fontWeight: 800,
                    fontSize: "3rem",
                    color: "rgba(255,82,82,0.08)",
                    lineHeight: 1,
                    position: "absolute",
                    top: "12px",
                    right: "16px",
                    letterSpacing: "-0.04em",
                    pointerEvents: "none",
                  }}
                >
                  {p.num}
                </div>

                <div
                  style={{
                    width: "4px",
                    height: "32px",
                    background: "#ff5252",
                    borderRadius: "2px",
                    marginBottom: "16px",
                    opacity: 0.7,
                  }}
                />
                <h4
                  style={{
                    fontFamily: "var(--font-syne), Syne, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    marginBottom: "10px",
                    color: "var(--text)",
                  }}
                >
                  {p.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--muted)",
                    lineHeight: 1.7,
                  }}
                >
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #problem-bento { grid-template-columns: 1fr !important; }
          #problem-inner-grid { grid-template-columns: 1fr !important; }
          #problem-header-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
