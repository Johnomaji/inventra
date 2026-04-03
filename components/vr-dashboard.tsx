"use client";

import { motion } from "framer-motion";

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
  { label: "Lagos Hub", val: "98.2%", fill: 98 },
  { label: "Kano Depot", val: "74.5%", fill: 74 },
  { label: "Accra Store", val: "81.0%", fill: 81 },
  { label: "Nairobi WH", val: "62.3%", fill: 62 },
];

const featureItemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function VrDashboard() {
  return (
    <section
      id="vr-dashboard"
      style={{
        padding: "120px 24px",
        background: "var(--bg2)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(124,77,255,0.09) 0%, transparent 65%)",
          bottom: "-200px",
          left: "-100px",
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
            <motion.div variants={featureItemVariants}>
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
                ◎ Inventra VR Hub
              </div>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.4rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  marginBottom: "18px",
                }}
              >
                Manage Every Location
                <br />
                from{" "}
                <em style={{ fontStyle: "normal", color: "#a67cff" }}>Anywhere</em>
              </h2>
              <p style={{ color: "var(--muted)", fontWeight: 300, marginBottom: "32px", lineHeight: 1.8 }}>
                Step into a virtual command center that renders your full operation in
                3D. See inventory flows between locations, monitor live KPIs in spatial
                panels, and walk through remote warehouses — all from your headset or
                desktop browser.
              </p>
            </motion.div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {features.map((feat) => (
                <motion.div
                  key={feat.num}
                  variants={featureItemVariants}
                  whileHover={{ background: "rgba(124,77,255,0.08)", borderColor: "rgba(124,77,255,0.28)" }}
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                    padding: "18px 20px",
                    background: "rgba(124,77,255,0.03)",
                    border: "1px solid rgba(124,77,255,0.1)",
                    borderRadius: "8px",
                    transition: "all 0.3s",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-syne), Syne, sans-serif",
                      fontWeight: 800,
                      fontSize: "1.3rem",
                      color: "rgba(124,77,255,0.4)",
                      flexShrink: 0,
                      lineHeight: 1,
                    }}
                  >
                    {feat.num}
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "0.88rem",
                        fontWeight: 700,
                        marginBottom: "3px",
                        fontFamily: "var(--font-syne), Syne, sans-serif",
                      }}
                    >
                      {feat.title}
                    </h4>
                    <p style={{ fontSize: "0.8rem", color: "var(--muted)" }}>{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* VR Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 20 }}
          style={{ maxWidth: "420px" }}
        >
          <div
            style={{
              background: "rgba(124,77,255,0.05)",
              border: "1px solid rgba(124,77,255,0.18)",
              borderRadius: "14px",
              padding: "28px",
              position: "relative",
            }}
          >
            <div
              style={{
                background: "rgba(124,77,255,0.1)",
                border: "1px solid rgba(124,77,255,0.22)",
                borderRadius: "8px",
                padding: "20px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse at center, rgba(124,77,255,0.12), transparent 70%)",
                }}
              />
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {locations.slice(0, 2).map((loc) => (
                  <div
                    key={loc.label}
                    style={{
                      flex: 1,
                      background: "var(--surface)",
                      border: "1px solid rgba(124,77,255,0.22)",
                      borderRadius: "6px",
                      padding: "10px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-space-mono), Space Mono, monospace",
                        fontSize: "0.56rem",
                        color: "#a67cff",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {loc.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-syne), Syne, sans-serif",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        marginTop: "4px",
                      }}
                    >
                      {loc.val}
                    </div>
                    <div
                      style={{
                        height: "3px",
                        background: "rgba(124,77,255,0.2)",
                        borderRadius: "2px",
                        marginTop: "6px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${loc.fill}%`,
                          background: "linear-gradient(90deg, var(--violet), var(--cyan))",
                          borderRadius: "2px",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {locations.slice(2).map((loc) => (
                  <div
                    key={loc.label}
                    style={{
                      flex: 1,
                      background: "var(--surface)",
                      border: "1px solid rgba(124,77,255,0.22)",
                      borderRadius: "6px",
                      padding: "10px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-space-mono), Space Mono, monospace",
                        fontSize: "0.56rem",
                        color: "#a67cff",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {loc.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-syne), Syne, sans-serif",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        marginTop: "4px",
                      }}
                    >
                      {loc.val}
                    </div>
                    <div
                      style={{
                        height: "3px",
                        background: "rgba(124,77,255,0.2)",
                        borderRadius: "2px",
                        marginTop: "6px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${loc.fill}%`,
                          background: "linear-gradient(90deg, var(--violet), var(--cyan))",
                          borderRadius: "2px",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "-10px",
                right: "-10px",
                background: "var(--violet)",
                color: "#fff",
                fontFamily: "var(--font-space-mono), Space Mono, monospace",
                fontSize: "0.58rem",
                padding: "6px 12px",
                borderRadius: "3px",
                letterSpacing: "0.05em",
              }}
            >
              ◈ VR MODE ACTIVE
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
