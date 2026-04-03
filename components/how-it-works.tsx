"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    color: "var(--cyan)",
    title: "Connect Your Business",
    desc: "Link your POS, supplier data, or import a spreadsheet. Inventra maps your full inventory ecosystem in under 10 minutes.",
  },
  {
    num: "02",
    color: "var(--violet)",
    title: "AI Learns Your Patterns",
    desc: "Over the first 7 days, the AI engine analyzes demand cycles, seasonal patterns, supplier lead times, and risk factors unique to your market.",
  },
  {
    num: "03",
    color: "var(--amber)",
    title: "Command with Clarity",
    desc: "From day 8, Inventra surfaces predictions, alerts, and AR-powered visibility tools so you can make decisions in seconds, not hours.",
  },
];

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function HowItWorks() {
  return (
    <section
      id="how"
      style={{ padding: "140px 24px", textAlign: "center" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: "1120px", margin: "0 auto" }}
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
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "7px 16px",
            borderRadius: "2px",
            marginBottom: "16px",
          }}
        >
          ◈ Simple by Design
        </div>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3.4rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          Live in 3 Steps.
        </h2>
        <p
          style={{
            color: "var(--muted)",
            marginBottom: "72px",
            fontSize: "1.05rem",
            fontWeight: 300,
          }}
        >
          No hardware. No expensive consultants. No months-long onboarding. Just
          intelligence, activated.
        </p>

        <div className="steps-track">
          {/* connector line */}
          <div
            className="steps-line"
            style={{
              position: "absolute",
              top: "56px",
              left: "17%",
              right: "17%",
              height: "1px",
              background:
                "linear-gradient(90deg, var(--cyan), var(--violet), var(--amber))",
            }}
          />
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stepVariants}
              style={{ padding: "0 20px" }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "var(--bg2)",
                  border: `2px solid ${step.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 28px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-syne), Syne, sans-serif",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    color: step.color,
                  }}
                >
                  {step.num}
                </span>
              </div>
              <h3
                style={{
                  marginBottom: "12px",
                  fontSize: "1.05rem",
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontWeight: 700,
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.75 }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
