"use client";

import { motion } from "framer-motion";
import { DecryptedText } from "@/components/decrypted-text";

const fadeUp = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function ShiftSection() {
  return (
    <section
      id="shift"
      style={{
        padding: "140px 24px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          width: "1100px",
          height: "700px",
          background:
            "radial-gradient(ellipse, rgba(124,77,255,0.08) 0%, transparent 65%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "64px", textAlign: "center" }}
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
              fontSize: "0.68rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "7px 18px",
              borderRadius: "100px",
              marginBottom: "24px",
            }}
          >
            ◈ The New Era
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "20px",
              maxWidth: "720px",
              margin: "0 auto 20px",
            }}
          >
            <DecryptedText text="What if your inventory" animateOn="view" sequential revealDirection="start" speed={35} encryptedClassName="decrypted-char-encrypted" />
            <br />
            <DecryptedText text="could " animateOn="view" sequential revealDirection="start" speed={35} encryptedClassName="decrypted-char-encrypted" />
            <em style={{ fontStyle: "normal", color: "#a67cff" }}>
              <DecryptedText text="think for itself?" animateOn="view" sequential revealDirection="start" speed={35} encryptedClassName="decrypted-char-encrypted" />
            </em>
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
              color: "var(--muted)",
              fontWeight: 300,
              lineHeight: 1.85,
              maxWidth: "640px",
              margin: "0 auto",
              marginTop: "16px",
            }}
          >
            We&apos;re not building a better spreadsheet. We&apos;re building a
            different reality — one where AI anticipates demand before it
            happens, AR lets you see every item without scanning, and VR puts
            you inside your operation from anywhere on the continent.
          </p>
        </motion.div>

        {/* Bento grid: featured large + 2 stacked */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            gridTemplateRows: "auto auto",
            gap: "16px",
          }}
        >
          {/* AI — large featured card (spans full height) */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            style={{
              background: "var(--violet)",
              borderRadius: "24px",
              padding: "48px 44px",
              gridRow: "1 / 3",
              position: "relative",
              overflow: "hidden",
              cursor: "default",
              boxShadow: "0 16px 60px rgba(124,77,255,0.3)",
            }}
          >
            {/* Inner glows */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at top left, rgba(255,255,255,0.14), transparent 55%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-40px",
                right: "-40px",
                width: "300px",
                height: "300px",
                background:
                  "radial-gradient(circle, rgba(0,229,255,0.12), transparent 60%)",
                pointerEvents: "none",
              }}
            />

            {/* Big emoji as background accent */}
            <div
              style={{
                position: "absolute",
                bottom: "24px",
                right: "32px",
                fontSize: "10rem",
                opacity: 0.08,
                lineHeight: 1,
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              🧠
            </div>

            <div
              style={{
                fontSize: "2.2rem",
                marginBottom: "24px",
                position: "relative",
                zIndex: 1,
              }}
            >
              🧠
            </div>

            <div
              style={{
                fontFamily:
                  "var(--font-space-mono), Space Mono, monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "16px",
                position: "relative",
                zIndex: 1,
              }}
            >
              Inventra Intelligence
            </div>

            <h3
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
                fontFamily: "var(--font-syne), Syne, sans-serif",
                fontWeight: 800,
                color: "#fff",
                marginBottom: "20px",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                position: "relative",
                zIndex: 1,
              }}
            >
              AI That Predicts,
              <br />
              Not Reports
            </h3>

            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.8,
                maxWidth: "400px",
                position: "relative",
                zIndex: 1,
              }}
            >
              Instead of telling you what happened, Inventra tells you
              what&apos;s about to happen — demand surges, supply gaps, and
              optimal reorder windows before you feel the pain.
            </p>

            {/* Feature tags */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                marginTop: "36px",
                position: "relative",
                zIndex: 1,
              }}
            >
              {[
                "Demand Forecasting",
                "Anomaly Detection",
                "Smart Reorder",
                "Natural Language",
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: "rgba(255,255,255,0.85)",
                    fontFamily:
                      "var(--font-space-mono), Space Mono, monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.08em",
                    padding: "5px 12px",
                    borderRadius: "100px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* AR Card */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "24px",
              padding: "36px 32px",
              position: "relative",
              overflow: "hidden",
              cursor: "default",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            }}
          >
            {/* Top accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background:
                  "linear-gradient(90deg, var(--amber), transparent)",
                borderRadius: "24px 24px 0 0",
              }}
            />

            <div
              style={{ fontSize: "1.8rem", marginBottom: "16px" }}
            >
              👁️
            </div>

            <div
              style={{
                fontFamily:
                  "var(--font-space-mono), Space Mono, monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--amber)",
                marginBottom: "12px",
                opacity: 0.8,
              }}
            >
              Inventra AR
            </div>

            <h3
              style={{
                fontSize: "1.15rem",
                fontFamily: "var(--font-syne), Syne, sans-serif",
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: "12px",
                lineHeight: 1.25,
              }}
            >
              AR That Sees Through Walls
            </h3>
            <p
              style={{
                fontSize: "0.86rem",
                color: "var(--muted)",
                lineHeight: 1.75,
              }}
            >
              Point your phone at any shelf and watch live inventory data
              overlay reality. No manual counting. No guessing. Just clarity.
            </p>
          </motion.div>

          {/* VR Card */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "24px",
              padding: "36px 32px",
              position: "relative",
              overflow: "hidden",
              cursor: "default",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            }}
          >
            {/* Top accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background:
                  "linear-gradient(90deg, rgba(124,77,255,0.7), transparent)",
                borderRadius: "24px 24px 0 0",
              }}
            />

            <div
              style={{ fontSize: "1.8rem", marginBottom: "16px" }}
            >
              🌐
            </div>

            <div
              style={{
                fontFamily:
                  "var(--font-space-mono), Space Mono, monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#a67cff",
                marginBottom: "12px",
                opacity: 0.8,
              }}
            >
              Inventra VR Hub
            </div>

            <h3
              style={{
                fontSize: "1.15rem",
                fontFamily: "var(--font-syne), Syne, sans-serif",
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: "12px",
                lineHeight: 1.25,
              }}
            >
              VR That Puts You Everywhere
            </h3>
            <p
              style={{
                fontSize: "0.86rem",
                color: "var(--muted)",
                lineHeight: 1.75,
              }}
            >
              Walk through your Lagos warehouse while sitting in Abuja. Review
              operations in an immersive 3D environment that feels like being
              there.
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #shift-bento { grid-template-columns: 1fr !important; }
          #shift-bento > *:first-child { grid-row: auto !important; }
        }
      `}</style>
    </section>
  );
}
