"use client";

import { motion } from "framer-motion";

const cards = [
  {
    icon: "🧠",
    title: "AI That Predicts, Not Reports",
    desc: "Instead of telling you what happened, Inventra tells you what's about to happen — demand surges, supply gaps, and optimal reorder windows before you feel the pain.",
  },
  {
    icon: "👁️",
    title: "AR That Sees Through Walls",
    desc: "Point your phone at any shelf or warehouse and watch live inventory data overlay reality. No manual counting. No guessing. Just clarity.",
  },
  {
    icon: "🌐",
    title: "VR That Puts You Everywhere",
    desc: "Walk through your Lagos warehouse while sitting in Abuja. Review operations in an immersive 3D environment that feels like being there.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function ShiftSection() {
  return (
    <section
      id="shift"
      style={{
        padding: "140px 24px",
        textAlign: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "1000px",
          height: "600px",
          background:
            "radial-gradient(ellipse, rgba(124,77,255,0.09) 0%, transparent 65%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(124,77,255,0.08)",
            border: "1px solid rgba(124,77,255,0.2)",
            color: "#a67cff",
            fontFamily: "var(--font-space-mono), Space Mono, monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "7px 16px",
            borderRadius: "2px",
            marginBottom: "24px",
          }}
        >
          ◈ The New Era
        </div>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3.4rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "24px",
          }}
        >
          What if your inventory
          <br />
          could{" "}
          <em style={{ fontStyle: "normal", color: "#a67cff" }}>
            think for itself?
          </em>
        </h2>
        <p
          style={{
            fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
            color: "var(--muted)",
            fontWeight: 300,
            marginBottom: "56px",
            lineHeight: 1.85,
          }}
        >
          We&apos;re not building a better spreadsheet. We&apos;re building a
          different reality — one where AI anticipates demand before it happens,
          AR lets you see every item without scanning, and VR puts you inside
          your operation from anywhere on the continent.
        </p>
      </motion.div>

      <div style={{ maxWidth: "1120px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <motion.div
          className="grid-3col"
          style={{ textAlign: "left" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                padding: "28px",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
            >
              <div style={{ fontSize: "1.8rem", marginBottom: "16px" }}>
                {card.icon}
              </div>
              <h3
                style={{
                  fontSize: "1rem",
                  marginBottom: "10px",
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontWeight: 700,
                }}
              >
                {card.title}
              </h3>
              <p style={{ fontSize: "0.86rem", color: "var(--muted)", lineHeight: 1.75 }}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
