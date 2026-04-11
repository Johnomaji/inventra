"use client";

import { motion } from "framer-motion";
import { DecryptedText } from "@/components/decrypted-text";

const features = [
  {
    num: "01",
    title: "3D Warehouse Walkthroughs",
    desc: "Navigate a photorealistic model of your warehouse. Every shelf, every zone, every item — spatially mapped.",
  },
  {
    num: "02",
    title: "Multi-Location Command",
    desc: "Switch between your Lagos store, Kano warehouse, and Accra branch in seconds. One view. Total control.",
  },
  {
    num: "03",
    title: "Immersive Data Panels",
    desc: "KPIs, forecasts, and alerts float around you in space. Intuitive. Visual. Instantly actionable.",
  },
];

const locations = [
  { label: "Lagos Hub", val: "98.2%", fill: 98, trend: "+2.1%" },
  { label: "Kano Depot", val: "74.5%", fill: 74, trend: "+0.8%" },
  { label: "Accra Store", val: "81.0%", fill: 81, trend: "+1.4%" },
  { label: "Nairobi WH", val: "62.3%", fill: 62, trend: "-0.5%" },
];

const fadeUp = {
  hidden: { opacity: 0, x: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function VrDashboard() {
  return (
    <section
      id="vr-dashboard"
      style={{
        padding: "80px 24px",
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(39,97,146,0.07) 0%, transparent 65%)",
          bottom: "-200px",
          left: "-100px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "64px", textAlign: "center" }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            <DecryptedText text="Manage Every Location" animateOn="view" sequential revealDirection="start" speed={35} encryptedClassName="decrypted-char-encrypted" />
            <br />
            <DecryptedText text="from " animateOn="view" sequential revealDirection="start" speed={35} encryptedClassName="decrypted-char-encrypted" />
            <em style={{ fontStyle: "normal", color: "#5b9fd4" }}>
              <DecryptedText text="Anywhere" animateOn="view" sequential revealDirection="start" speed={35} encryptedClassName="decrypted-char-encrypted" />
            </em>
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontWeight: 300,
              lineHeight: 1.8,
              maxWidth: "560px",
              margin: "0 auto",
              fontSize: "1rem",
            }}
          >
            Step into a virtual command center that renders your full operation
            in 3D. See inventory flows between locations, monitor live KPIs in
            spatial panels, and walk through remote warehouses — all from your
            headset or desktop browser.
          </p>
        </motion.div>

        {/* Main layout: VR visual + features */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "5fr 4fr",
            gap: "20px",
            alignItems: "start",
          }}
        >
          {/* VR Hub visual — full card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 80,
              damping: 20,
            }}
          >
            <div
              style={{
                background: "rgba(39,97,146,0.04)",
                border: "1px solid rgba(39,97,146,0.18)",
                borderRadius: "24px",
                padding: "32px",
                boxShadow: "0 8px 48px rgba(39,97,146,0.08)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background:
                    "linear-gradient(90deg, var(--violet), var(--cyan))",
                  borderRadius: "24px 24px 0 0",
                }}
              />

              {/* VR header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "24px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-syne), Syne, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                    }}
                  >
                    VR Command Center
                  </div>
                  <div
                    style={{
                      fontFamily:
                        "var(--font-space-mono), Space Mono, monospace",
                      fontSize: "0.58rem",
                      color: "var(--muted)",
                      marginTop: "2px",
                    }}
                  >
                    4 LOCATIONS · LIVE
                  </div>
                </div>
                <div
                  style={{
                    background: "var(--violet)",
                    color: "#fff",
                    fontFamily:
                      "var(--font-space-mono), Space Mono, monospace",
                    fontSize: "0.55rem",
                    padding: "5px 12px",
                    borderRadius: "4px",
                    letterSpacing: "0.08em",
                  }}
                >
                  ◈ VR MODE ACTIVE
                </div>
              </div>

              {/* Inner VR space */}
              <div
                style={{
                  background: "rgba(39,97,146,0.06)",
                  border: "1px solid rgba(39,97,146,0.18)",
                  borderRadius: "12px",
                  padding: "24px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(ellipse at center, rgba(39,97,146,0.1), transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Grid lines perspective effect */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                      "linear-gradient(rgba(39,97,146,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(39,97,146,0.08) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    pointerEvents: "none",
                  }}
                />

                {/* Location cards */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {locations.map((loc) => (
                    <div
                      key={loc.label}
                      style={{
                        background: "rgba(5,8,26,0.7)",
                        border: "1px solid rgba(39,97,146,0.25)",
                        borderRadius: "8px",
                        padding: "14px 12px",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            fontFamily:
                              "var(--font-space-mono), Space Mono, monospace",
                            fontSize: "0.55rem",
                            color: "#5b9fd4",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                          }}
                        >
                          {loc.label}
                        </div>
                        <div
                          style={{
                            fontFamily:
                              "var(--font-space-mono), Space Mono, monospace",
                            fontSize: "0.55rem",
                            color:
                              loc.trend.startsWith("+")
                                ? "#00c853"
                                : "#ff5252",
                          }}
                        >
                          {loc.trend}
                        </div>
                      </div>
                      <div
                        style={{
                          fontFamily:
                            "var(--font-syne), Syne, sans-serif",
                          fontWeight: 700,
                          fontSize: "1.2rem",
                          color: "#fff",
                          marginBottom: "8px",
                        }}
                      >
                        {loc.val}
                      </div>
                      {/* Progress bar */}
                      <div
                        style={{
                          height: "4px",
                          background: "rgba(39,97,146,0.2)",
                          borderRadius: "2px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            width: `${loc.fill}%`,
                            background:
                              "linear-gradient(90deg, var(--violet), var(--cyan))",
                            borderRadius: "2px",
                            transition: "width 1s ease",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {features.map((feat, i) => (
              <motion.div
                key={feat.num}
                custom={i}
                variants={fadeUp}
                whileHover={{
                  borderColor: "rgba(39,97,146,0.3)",
                  background: "rgba(39,97,146,0.05)",
                  transition: { duration: 0.2 },
                }}
                style={{
                  padding: "28px 24px",
                  background: "rgba(39,97,146,0.02)",
                  border: "1px solid rgba(39,97,146,0.12)",
                  borderRadius: "16px",
                  cursor: "default",
                  transition: "all 0.3s",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-syne), Syne, sans-serif",
                    fontWeight: 800,
                    fontSize: "2.5rem",
                    color: "rgba(39,97,146,0.25)",
                    lineHeight: 1,
                    marginBottom: "12px",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {feat.num}
                </div>
                <h4
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    marginBottom: "8px",
                    fontFamily: "var(--font-syne), Syne, sans-serif",
                    color: "var(--text)",
                  }}
                >
                  {feat.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--muted)",
                    lineHeight: 1.7,
                  }}
                >
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
