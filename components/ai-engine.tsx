"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Demand Forecasting Engine",
    desc: "Predicts sales velocity and demand surges up to 30 days ahead with 94% accuracy.",
  },
  {
    title: "Anomaly Detection",
    desc: "Flags unusual patterns — theft, spoilage, data entry errors — before they compound into losses.",
  },
  {
    title: "Smart Reorder Intelligence",
    desc: "Calculates optimal reorder points factoring supplier reliability, cash flow, and lead time variance.",
  },
  {
    title: "Natural Language Control",
    desc: 'Ask Inventra anything in plain English or Pidgin. "What\'s running low in Ikeja?" — done.',
  },
];

const capItemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function AiEngine() {
  return (
    <section
      id="ai-engine"
      style={{
        padding: "120px 24px",
        background: "var(--bg2)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 65%)",
          top: "-100px",
          right: "-100px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          alignItems: "center",
        }}
        className="grid-2col"
      >
        <div>
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={capItemVariants}>
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
                ◎ Under the Hood
              </div>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.4rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  marginBottom: "18px",
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
                  marginBottom: "32px",
                  lineHeight: 1.8,
                }}
              >
                Most AI tools are trained on Western market data. Inventra&apos;s
                intelligence layer was built on African trade patterns — understanding
                seasonal spikes tied to local holidays, informal supply chains,
                multi-vendor sourcing, and infrastructural unpredictability.
              </p>
            </motion.div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {capabilities.map((cap) => (
                <motion.div
                  key={cap.title}
                  variants={capItemVariants}
                  whileHover={{ x: 4 }}
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                    padding: "16px 18px",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    transition: "all 0.3s",
                    cursor: "default",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "var(--cyan)",
                      marginTop: "6px",
                      flexShrink: 0,
                      boxShadow: "0 0 10px var(--cyan)",
                    }}
                  />
                  <div>
                    <h4
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        marginBottom: "3px",
                        fontFamily: "var(--font-syne), Syne, sans-serif",
                      }}
                    >
                      {cap.title}
                    </h4>
                    <p style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
                      {cap.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* AI Brain visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 20 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <div
            style={{
              width: "300px",
              height: "300px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Rings */}
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
            {/* Core */}
            <div
              style={{
                width: "110px",
                height: "110px",
                background:
                  "radial-gradient(circle, rgba(0,229,255,0.2), rgba(0,229,255,0.05))",
                borderRadius: "50%",
                border: "1px solid rgba(0,229,255,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2.4rem",
                position: "relative",
                zIndex: 2,
                animation: "breathe 3s ease-in-out infinite",
              }}
            >
              🧠
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
