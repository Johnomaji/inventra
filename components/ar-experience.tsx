"use client";

import { motion } from "framer-motion";

const features = [
  { icon: "📱", title: "Works on any smartphone", desc: "No expensive AR headsets. Just the phone in your pocket." },
  { icon: "⚡", title: "Audit a shelf in 3 seconds", desc: "AI-powered object recognition handles identification automatically." },
  { icon: "🔴", title: "Live alerts overlaid in-view", desc: "See exactly which items need restocking as you walk the floor." },
  { icon: "🌐", title: "Offline-capable", desc: "Core AR features work without internet — syncs when reconnected." },
];

const featureItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function ArExperience() {
  return (
    <section
      id="ar-experience"
      style={{ padding: "120px 24px", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(0,229,255,0.02), transparent 50%, rgba(255,179,0,0.02))",
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
        {/* AR Visual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 20 }}
          style={{ position: "relative", aspectRatio: "1", maxWidth: "420px" }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "rgba(255,179,0,0.03)",
              border: "1px solid rgba(255,179,0,0.15)",
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Scanline */}
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, transparent, var(--amber), transparent)",
                animation: "scanLine 3s ease-in-out infinite",
                boxShadow: "0 0 10px var(--amber)",
              }}
            />
            {/* Corner decorations */}
            {[
              { top: "14px", left: "14px" },
              { bottom: "14px", right: "14px" },
            ].map((pos, i) => (
              <div key={i} style={{ position: "absolute", ...pos }}>
                <div
                  style={{
                    width: "20px",
                    height: "2px",
                    background: "var(--amber)",
                    opacity: 0.5,
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
                <div
                  style={{
                    width: "2px",
                    height: "20px",
                    background: "var(--amber)",
                    opacity: 0.5,
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
            ))}

            {/* AR boxes */}
            <div style={{ position: "relative", width: "200px", height: "200px" }}>
              {[
                { style: { width: "80px", height: "50px", top: "30%", left: "15%", animation: "arFloat 4s ease-in-out infinite" } },
                { style: { width: "60px", height: "60px", top: "50%", right: "20%", animation: "arFloat 4s ease-in-out 1s infinite" } },
                { style: { width: "100px", height: "40px", bottom: "30%", left: "30%", animation: "arFloat 4s ease-in-out 2s infinite" } },
              ].map((box, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    background: "rgba(255,179,0,0.07)",
                    border: "1px solid rgba(255,179,0,0.3)",
                    borderRadius: "4px",
                    ...box.style,
                  }}
                />
              ))}
              <div
                style={{
                  position: "absolute",
                  top: "20%",
                  right: "8%",
                  background: "rgba(255,179,0,0.15)",
                  border: "1px solid rgba(255,179,0,0.3)",
                  color: "var(--amber)",
                  fontFamily: "var(--font-space-mono), Space Mono, monospace",
                  fontSize: "0.58rem",
                  padding: "4px 8px",
                  borderRadius: "2px",
                  whiteSpace: "nowrap",
                }}
              >
                SKU-4421 · 47 units ✓
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "22%",
                  left: "8%",
                  background: "rgba(255,179,0,0.15)",
                  border: "1px solid rgba(255,179,0,0.3)",
                  color: "var(--amber)",
                  fontFamily: "var(--font-space-mono), Space Mono, monospace",
                  fontSize: "0.58rem",
                  padding: "4px 8px",
                  borderRadius: "2px",
                  whiteSpace: "nowrap",
                }}
              >
                SKU-1189 · LOW STOCK ⚠
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copy */}
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
            <motion.div variants={featureItemVariants}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255,179,0,0.08)",
                  border: "1px solid rgba(255,179,0,0.2)",
                  color: "var(--amber)",
                  fontFamily: "var(--font-space-mono), Space Mono, monospace",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "7px 16px",
                  borderRadius: "2px",
                  marginBottom: "24px",
                }}
              >
                ◎ Inventra AR
              </div>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.4rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  marginBottom: "18px",
                }}
              >
                See Your Inventory
                <br />
                in{" "}
                <em style={{ fontStyle: "normal", color: "var(--amber)" }}>
                  Real Space
                </em>
              </h2>
              <p style={{ color: "var(--muted)", fontWeight: 300, marginBottom: "32px", lineHeight: 1.8 }}>
                Open the Inventra AR mode on any smartphone. Point at a shelf. Watch
                live data materialize over every product — quantities, reorder urgency,
                price data, and AI alerts. No barcodes required. No wands. No dedicated
                hardware.
              </p>
            </motion.div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {features.map((feat) => (
                <motion.div
                  key={feat.title}
                  variants={featureItemVariants}
                  whileHover={{ background: "rgba(255,179,0,0.07)", borderColor: "rgba(255,179,0,0.28)" }}
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "center",
                    padding: "14px 18px",
                    background: "rgba(255,179,0,0.03)",
                    border: "1px solid rgba(255,179,0,0.1)",
                    borderRadius: "8px",
                    transition: "all 0.3s",
                  }}
                >
                  <div style={{ fontSize: "1.15rem", flexShrink: 0 }}>{feat.icon}</div>
                  <div>
                    <strong
                      style={{
                        color: "var(--text)",
                        fontWeight: 600,
                        display: "block",
                        marginBottom: "2px",
                        fontSize: "0.88rem",
                      }}
                    >
                      {feat.title}
                    </strong>
                    <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
                      {feat.desc}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
