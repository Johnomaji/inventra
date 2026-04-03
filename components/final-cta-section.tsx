"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function FinalCtaSection() {
  return (
    <section
      id="final-cta"
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
          width: "900px",
          height: "600px",
          background:
            "radial-gradient(ellipse, rgba(0,229,255,0.11) 0%, rgba(124,77,255,0.05) 50%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.div
          variants={itemVariants}
          style={{
            fontFamily: "var(--font-space-mono), Space Mono, monospace",
            fontSize: "0.68rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--amber)",
            marginBottom: "24px",
          }}
        >
          ▸ Limited Early Access — 500 Spots Remaining
        </motion.div>

        <motion.h2
          variants={itemVariants}
          style={{
            fontSize: "clamp(2rem, 4vw, 3.4rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "20px",
          }}
        >
          The Future of African
          <br />
          Commerce Starts{" "}
          <em style={{ fontStyle: "normal", color: "var(--cyan)" }}>Now.</em>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          style={{
            color: "var(--muted)",
            marginBottom: "44px",
            fontSize: "1.1rem",
            fontWeight: 300,
            lineHeight: 1.85,
          }}
        >
          Every day you wait is inventory lost, decisions delayed, and ground
          surrendered to competitors who move faster. Join 500 businesses already
          reshaping how Africa manages commerce.
        </motion.p>

        <motion.div variants={itemVariants}>
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
              fontSize: "1.1rem",
              padding: "18px 48px",
              textDecoration: "none",
              clipPath:
                "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)",
              transition: "all 0.25s",
              marginBottom: "24px",
            }}
          >
            Get Early Access →
          </Link>
        </motion.div>

        <motion.p
          variants={itemVariants}
          style={{
            fontFamily: "var(--font-space-mono), Space Mono, monospace",
            fontSize: "0.68rem",
            color: "var(--muted)",
            letterSpacing: "0.06em",
            marginTop: "24px",
          }}
        >
          🔒 Secure early access ·{" "}
          <span style={{ color: "var(--amber)" }}>412 of 500 spots claimed</span> ·
          No credit card required
        </motion.p>

        <motion.div
          variants={itemVariants}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "28px",
            marginTop: "40px",
            flexWrap: "wrap",
          }}
        >
          {["Free to start", "Setup in 10 min", "Cancel anytime", "African support team"].map(
            (sig) => (
              <div
                key={sig}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.78rem",
                  color: "var(--muted)",
                  fontFamily: "var(--font-space-mono), Space Mono, monospace",
                }}
              >
                <em style={{ fontStyle: "normal", color: "var(--cyan)" }}>✓</em> {sig}
              </div>
            )
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
