"use client";

import { motion } from "framer-motion";
import { DecryptedText } from "@/components/decrypted-text";

const features = [
  {
    icon: "📱",
    title: "Works on any smartphone",
    desc: "No expensive AR headsets. Just the phone in your pocket.",
  },
  {
    icon: "⚡",
    title: "Audit a shelf in 3 seconds",
    desc: "AI-powered object recognition handles identification automatically.",
  },
  {
    icon: "🔴",
    title: "Live alerts overlaid in-view",
    desc: "See exactly which items need restocking as you walk the floor.",
  },
  {
    icon: "🌐",
    title: "Offline-capable",
    desc: "Core AR features work without internet — syncs when reconnected.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function ArExperience() {
  return (
    <section
      id="ar-experience"
      style={{
        padding: "80px 24px",
        background: "var(--bg2)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(196,154,42,0.02), transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "52px", textAlign: "center" }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
              lineHeight: 1.1,
            }}
          >
            <DecryptedText text="See Your Inventory" animateOn="view" sequential revealDirection="start" speed={35} encryptedClassName="decrypted-char-encrypted" />
            <br />
            <DecryptedText text="in " animateOn="view" sequential revealDirection="start" speed={35} encryptedClassName="decrypted-char-encrypted" />
            <em style={{ fontStyle: "normal", color: "var(--amber)" }}>
              <DecryptedText text="Real Space" animateOn="view" sequential revealDirection="start" speed={35} encryptedClassName="decrypted-char-encrypted" />
            </em>
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontWeight: 300,
              lineHeight: 1.8,
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: "1rem",
            }}
          >
            Open the Inventra AR mode on any smartphone. Point at a shelf.
            Watch live data materialize over every product — quantities, reorder
            urgency, price data, and AI alerts. No barcodes required. No wands.
            No dedicated hardware.
          </p>
        </motion.div>

        {/* AR Viewport — full width showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.9,
            type: "spring",
            stiffness: 70,
            damping: 18,
          }}
          style={{
            width: "100%",
            aspectRatio: "21/9",
            background: "rgba(196,154,42,0.03)",
            border: "1px solid rgba(196,154,42,0.2)",
            borderRadius: "20px",
            boxShadow: "0 12px 60px rgba(196,154,42,0.08)",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            marginBottom: "24px",
          }}
        >
          {/* Scan line */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, var(--amber), transparent)",
              animation: "scanLine 3s ease-in-out infinite",
              boxShadow: "0 0 12px var(--amber)",
            }}
          />

          {/* Corner brackets — all 4 */}
          {[
            { top: "16px", left: "16px" },
            { top: "16px", right: "16px", transform: "scaleX(-1)" },
            { bottom: "16px", left: "16px", transform: "scaleY(-1)" },
            { bottom: "16px", right: "16px", transform: "scale(-1)" },
          ].map((pos, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                ...pos,
                width: "24px",
                height: "24px",
                borderTop: "2px solid rgba(196,154,42,0.6)",
                borderLeft: "2px solid rgba(196,154,42,0.6)",
                borderRadius: "2px 0 0 0",
              }}
            />
          ))}

          {/* Header bar */}
          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(196,154,42,0.1)",
              border: "1px solid rgba(196,154,42,0.3)",
              color: "var(--amber)",
              fontFamily: "var(--font-space-mono), Space Mono, monospace",
              fontSize: "0.6rem",
              padding: "5px 14px",
              borderRadius: "100px",
              letterSpacing: "0.1em",
            }}
          >
            ◈ AR SCAN MODE — FLOOR 3 · WAREHOUSE A
          </div>

          {/* Floating AR elements */}
          <div
            style={{
              position: "relative",
              width: "80%",
              height: "70%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "60px",
            }}
          >
            {/* Shelf rack representation */}
            {[
              {
                sku: "SKU-4421",
                units: "47 units",
                status: "OK",
                color: "rgba(0,200,83,0.8)",
                x: "-120px",
                delay: "0s",
              },
              {
                sku: "SKU-1189",
                units: "LOW STOCK",
                status: "⚠",
                color: "rgba(196,154,42,0.9)",
                x: "0px",
                delay: "1s",
              },
              {
                sku: "SKU-7723",
                units: "91 units",
                status: "OK",
                color: "rgba(0,200,83,0.8)",
                x: "120px",
                delay: "2s",
              },
            ].map((item) => (
              <div
                key={item.sku}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                  animation: `arFloat 4s ease-in-out ${item.delay} infinite`,
                }}
              >
                {/* Bounding box */}
                <div
                  style={{
                    width: "80px",
                    height: "96px",
                    background: "rgba(196,154,42,0.04)",
                    border: "1px solid rgba(196,154,42,0.35)",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.6rem",
                    opacity: 0.7,
                  }}
                >
                  📦
                </div>
                {/* Label */}
                <div
                  style={{
                    background: "rgba(5,8,16,0.85)",
                    border: `1px solid ${item.color}`,
                    color: item.color,
                    fontFamily:
                      "var(--font-space-mono), Space Mono, monospace",
                    fontSize: "0.56rem",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    textAlign: "center",
                    lineHeight: 1.4,
                    whiteSpace: "nowrap",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {item.sku}
                  <br />
                  {item.units} {item.status}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom status bar */}
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "16px",
            }}
          >
            {[
              { dot: "#00c853", label: "2 OK" },
              { dot: "#ffb300", label: "1 LOW" },
              { dot: "#ff5252", label: "0 CRITICAL" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontFamily:
                    "var(--font-space-mono), Space Mono, monospace",
                  fontSize: "0.55rem",
                  color: s.dot,
                  background: "rgba(5,8,16,0.75)",
                  border: `1px solid ${s.dot}33`,
                  padding: "4px 10px",
                  borderRadius: "100px",
                  backdropFilter: "blur(4px)",
                }}
              >
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: s.dot,
                  }}
                />
                {s.label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Feature cards — horizontal 4-col */}
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "12px",
          }}
        >
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              custom={i}
              variants={fadeUp}
              whileHover={{
                borderColor: "rgba(196,154,42,0.3)",
                background: "rgba(196,154,42,0.04)",
                y: -2,
                transition: { duration: 0.2 },
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "20px 18px",
                background: "rgba(196,154,42,0.02)",
                border: "1px solid rgba(196,154,42,0.1)",
                borderRadius: "14px",
                cursor: "default",
                transition: "all 0.3s",
              }}
            >
              <div style={{ fontSize: "1.2rem" }}>{feat.icon}</div>
              <div
                style={{
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.86rem",
                  color: "var(--text)",
                }}
              >
                {feat.title}
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                }}
              >
                {feat.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
