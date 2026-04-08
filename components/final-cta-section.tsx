"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { DecryptedText } from "@/components/decrypted-text";

const sigs = [
  "Free to start",
  "Setup in 10 min",
  "Cancel anytime",
  "African support team",
];

export function FinalCtaSection() {
  return (
    <section
      id="final-cta"
      style={{
        padding: "0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Full-bleed gradient background */}
      <div
        style={{
          background:
            "linear-gradient(160deg, var(--bg2) 0%, rgba(0,229,255,0.06) 40%, rgba(124,77,255,0.06) 70%, var(--bg2) 100%)",
          padding: "140px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
            opacity: 0.4,
          }}
        />

        {/* Orbs */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(0,229,255,0.1) 0%, transparent 70%)",
            top: "0%",
            left: "20%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(124,77,255,0.07) 0%, transparent 70%)",
            bottom: "0%",
            right: "20%",
            pointerEvents: "none",
          }}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          {/* Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
              },
            }}
            style={{ marginBottom: "32px" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-space-mono), Space Mono, monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--amber)",
                background: "rgba(255,179,0,0.08)",
                border: "1px solid rgba(255,179,0,0.2)",
                padding: "7px 20px",
                borderRadius: "100px",
              }}
            >
              ▸ Limited Early Access — 500 Spots Remaining
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
              },
            }}
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.04,
              marginBottom: "24px",
            }}
          >
            <DecryptedText text="The Future of African" animateOn="view" sequential revealDirection="start" speed={35} encryptedClassName="decrypted-char-encrypted" />
            <br />
            <DecryptedText text="Commerce Starts " animateOn="view" sequential revealDirection="start" speed={35} encryptedClassName="decrypted-char-encrypted" />
            <em style={{ fontStyle: "normal", color: "var(--cyan)" }}>
              <DecryptedText text="Now." animateOn="view" sequential revealDirection="start" speed={35} encryptedClassName="decrypted-char-encrypted" />
            </em>
          </motion.h2>

          {/* Body */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
              },
            }}
            style={{
              color: "var(--muted)",
              marginBottom: "52px",
              fontSize: "1.1rem",
              fontWeight: 300,
              lineHeight: 1.85,
              maxWidth: "600px",
              margin: "0 auto 52px",
            }}
          >
            Every day you wait is inventory lost, decisions delayed, and ground
            surrendered to competitors who move faster. Join 500 businesses
            already reshaping how Africa manages commerce.
          </motion.p>

          {/* CTA + counter */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
              },
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
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
                  padding: "20px 60px",
                  textDecoration: "none",
                  borderRadius: "12px",
                  boxShadow:
                    "0 8px 40px rgba(0,229,255,0.25), 0 2px 8px rgba(0,0,0,0.15)",
                  transition: "all 0.25s",
                }}
              >
                Get Early Access →
              </Link>
            </motion.div>

            {/* Progress indicator */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "280px",
                  height: "4px",
                  background: "var(--surface2)",
                  borderRadius: "2px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "82.4%",
                    background:
                      "linear-gradient(90deg, var(--cyan), var(--amber))",
                    borderRadius: "2px",
                  }}
                />
              </div>
              <div
                style={{
                  fontFamily:
                    "var(--font-space-mono), Space Mono, monospace",
                  fontSize: "0.65rem",
                  color: "var(--muted)",
                  letterSpacing: "0.06em",
                }}
              >
                🔒 Secure early access ·{" "}
                <span style={{ color: "var(--amber)" }}>
                  412 of 500 spots claimed
                </span>{" "}
                · No credit card required
              </div>
            </div>
          </motion.div>

          {/* Support statements */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.5, delay: 0.4 },
              },
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "32px",
              marginTop: "52px",
              paddingTop: "36px",
              borderTop: "1px solid var(--border)",
              flexWrap: "wrap",
            }}
          >
            {sigs.map((sig) => (
              <div
                key={sig}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.78rem",
                  color: "var(--muted)",
                  fontFamily:
                    "var(--font-space-mono), Space Mono, monospace",
                  letterSpacing: "0.03em",
                }}
              >
                <em style={{ fontStyle: "normal", color: "var(--cyan)" }}>
                  ✓
                </em>{" "}
                {sig}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
