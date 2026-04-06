"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Demand Forecasting Engine",
    desc: "Predicts sales velocity and demand surges up to 30 days ahead with 94% accuracy.",
    stat: "94%",
    statLabel: "Accuracy",
  },
  {
    title: "Anomaly Detection",
    desc: "Flags unusual patterns — theft, spoilage, data entry errors — before they compound into losses.",
    stat: "< 1s",
    statLabel: "Detection",
  },
  {
    title: "Smart Reorder Intelligence",
    desc: "Calculates optimal reorder points factoring supplier reliability, cash flow, and lead time variance.",
    stat: "3×",
    statLabel: "Efficiency",
  },
  {
    title: "Natural Language Control",
    desc: 'Ask Inventra anything in plain English or Pidgin. "What\'s running low in Ikeja?" — done.',
    stat: "Any",
    statLabel: "Language",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function AiEngine() {
  return (
    <section
      id="ai-engine"
      style={{
        padding: "120px 24px",
        background: "var(--bg)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 65%)",
          top: "-150px",
          right: "-150px",
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
          style={{ marginBottom: "72px" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(0,229,255,0.08)",
              border: "1px solid rgba(0,229,255,0.2)",
              color: "var(--cyan)",
              fontFamily: "var(--font-space-mono), Space Mono, monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "7px 18px",
              borderRadius: "100px",
              marginBottom: "20px",
            }}
          >
            ◎ Under the Hood
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
              An AI Engine
              <br />
              Built for{" "}
              <em style={{ fontStyle: "normal", color: "var(--cyan)" }}>
                African Commerce
              </em>
            </h2>
            <p
              style={{
                color: "var(--muted)",
                fontWeight: 300,
                lineHeight: 1.8,
                fontSize: "1rem",
              }}
            >
              Most AI tools are trained on Western market data. Inventra&apos;s
              intelligence layer was built on African trade patterns —
              understanding seasonal spikes tied to local holidays, informal
              supply chains, multi-vendor sourcing, and infrastructural
              unpredictability.
            </p>
          </div>
        </motion.div>

        {/* Main layout: AI visual + capability cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 3fr",
            gap: "20px",
            alignItems: "start",
          }}
        >
          {/* AI Brain visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 80,
              damping: 20,
            }}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "24px",
              padding: "48px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "28px",
              boxShadow: "0 8px 40px rgba(0,229,255,0.06)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top cyan accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background:
                  "linear-gradient(90deg, var(--cyan), transparent)",
                borderRadius: "24px 24px 0 0",
              }}
            />

            {/* Rings + core */}
            <div
              style={{
                width: "200px",
                height: "200px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  border: "1px solid rgba(0,229,255,0.12)",
                  animation: "rotate 20s linear infinite",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: "72%",
                  height: "72%",
                  borderRadius: "50%",
                  border: "1px solid rgba(124,77,255,0.15)",
                  animation: "rotate 12s linear infinite reverse",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: "47%",
                  height: "47%",
                  borderRadius: "50%",
                  border: "1px solid rgba(0,229,255,0.2)",
                  animation: "rotate 8s linear infinite",
                }}
              />
              <div
                style={{
                  width: "96px",
                  height: "96px",
                  background:
                    "radial-gradient(circle, rgba(0,229,255,0.2), rgba(0,229,255,0.05))",
                  borderRadius: "50%",
                  border: "1px solid rgba(0,229,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  position: "relative",
                  zIndex: 2,
                  animation: "breathe 3s ease-in-out infinite",
                }}
              >
                🧠
              </div>
            </div>

            {/* Labels */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  marginBottom: "4px",
                }}
              >
                Inventra Intelligence
              </div>
              <div
                style={{
                  fontFamily:
                    "var(--font-space-mono), Space Mono, monospace",
                  fontSize: "0.62rem",
                  color: "var(--cyan)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                African-Trained AI · Active
              </div>
            </div>

            {/* Stats row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "8px",
                width: "100%",
              }}
            >
              {[
                { val: "30d", label: "Forecast Window" },
                { val: "94%", label: "Accuracy Rate" },
                { val: "< 1s", label: "Alert Speed" },
                { val: "20+", label: "Currencies" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: "rgba(0,229,255,0.04)",
                    border: "1px solid rgba(0,229,255,0.1)",
                    borderRadius: "10px",
                    padding: "12px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-syne), Syne, sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "var(--cyan)",
                    }}
                  >
                    {s.val}
                  </div>
                  <div
                    style={{
                      fontFamily:
                        "var(--font-space-mono), Space Mono, monospace",
                      fontSize: "0.56rem",
                      color: "var(--muted)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginTop: "2px",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Capabilities — 2x2 grid */}
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
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
            }}
          >
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  padding: "28px 24px",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Stat accent */}
                <div
                  style={{
                    fontFamily: "var(--font-syne), Syne, sans-serif",
                    fontWeight: 800,
                    fontSize: "2rem",
                    letterSpacing: "-0.03em",
                    color: "var(--cyan)",
                    lineHeight: 1,
                    marginBottom: "4px",
                    opacity: 0.9,
                  }}
                >
                  {cap.stat}
                </div>
                <div
                  style={{
                    fontFamily:
                      "var(--font-space-mono), Space Mono, monospace",
                    fontSize: "0.56rem",
                    color: "var(--muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                  }}
                >
                  {cap.statLabel}
                </div>

                <div
                  style={{
                    width: "24px",
                    height: "1px",
                    background: "var(--border-strong)",
                    marginBottom: "16px",
                  }}
                />

                <h4
                  style={{
                    fontFamily: "var(--font-syne), Syne, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    marginBottom: "8px",
                    color: "var(--text)",
                  }}
                >
                  {cap.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--muted)",
                    lineHeight: 1.7,
                  }}
                >
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
