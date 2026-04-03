"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const plans = [
  {
    tier: "Starter",
    price: "₦0",
    period: "/mo",
    desc: "For solo operators and early-stage businesses ready to step up from spreadsheets.",
    features: [
      { text: "Up to 500 SKUs", included: true },
      { text: "AI alerts & basic forecasting", included: true },
      { text: "AR scanning (50 scans/day)", included: true },
      { text: "1 location", included: true },
      { text: "Mobile app", included: true },
      { text: "VR Dashboard", included: false },
      { text: "Advanced AI engine", included: false },
      { text: "API access", included: false },
    ],
    cta: "Start Free →",
    ctaStyle: "outline",
    featured: false,
  },
  {
    tier: "Growth",
    price: "₦49,999",
    period: "/mo",
    desc: "For growing businesses managing multiple product lines and locations.",
    features: [
      { text: "Unlimited SKUs", included: true },
      { text: "Full AI demand engine", included: true },
      { text: "Unlimited AR scanning", included: true },
      { text: "Up to 5 locations", included: true },
      { text: "VR Dashboard (3 users)", included: true },
      { text: "Multi-currency support", included: true },
      { text: "Supplier integrations", included: true },
      { text: "Custom AI training", included: false },
    ],
    cta: "Get Early Access →",
    ctaStyle: "filled",
    featured: true,
  },
  {
    tier: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large distributors, manufacturers, and multi-country operations.",
    features: [
      { text: "Unlimited everything", included: true },
      { text: "Custom AI model training", included: true },
      { text: "Unlimited VR users", included: true },
      { text: "Unlimited locations", included: true },
      { text: "Dedicated API & webhooks", included: true },
      { text: "White-label options", included: true },
      { text: "SLA & priority support", included: true },
      { text: "Onsite onboarding", included: true },
    ],
    cta: "Talk to Sales →",
    ctaStyle: "outline",
    featured: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function PricingSection() {
  return (
    <section id="pricing" style={{ padding: "120px 24px", background: "var(--bg2)" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: "1120px", margin: "0 auto", textAlign: "center" }}
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
          ◎ Simple Pricing
        </div>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3.4rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          Start Free. Scale Fast.
        </h2>
        <p style={{ color: "var(--muted)", marginBottom: "60px", fontWeight: 300 }}>
          No hidden fees. No complex tiers. Pricing built for African business
          realities.
        </p>

        <motion.div
          className="grid-pricing"
          style={{ textAlign: "left" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.tier}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                background: plan.featured ? "var(--surface2)" : "var(--surface)",
                border: plan.featured
                  ? "1px solid var(--border-strong)"
                  : "1px solid var(--border)",
                borderRadius: "12px",
                padding: "36px 28px",
                transition: "all 0.3s",
                position: "relative",
                overflow: "hidden",
                boxShadow: plan.featured ? "var(--glow-cyan)" : "none",
              }}
            >
              {plan.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    background: "var(--cyan)",
                    color: "var(--bg)",
                    fontFamily: "var(--font-space-mono), Space Mono, monospace",
                    fontSize: "0.58rem",
                    fontWeight: 700,
                    padding: "5px 10px",
                    borderRadius: "2px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  MOST POPULAR
                </div>
              )}
              <div
                style={{
                  fontFamily: "var(--font-space-mono), Space Mono, monospace",
                  fontSize: "0.68rem",
                  color: "var(--muted)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                {plan.tier}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontWeight: 800,
                  fontSize: plan.price === "Custom" ? "2rem" : "2.8rem",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}
              >
                {plan.price}
                {plan.period && (
                  <span
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--muted)",
                      fontWeight: 400,
                    }}
                  >
                    {plan.period}
                  </span>
                )}
              </div>
              <p
                style={{
                  fontSize: "0.84rem",
                  color: "var(--muted)",
                  marginTop: "8px",
                  marginBottom: "24px",
                  paddingBottom: "24px",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {plan.desc}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "11px",
                  marginBottom: "28px",
                  padding: 0,
                }}
              >
                {plan.features.map((f) => (
                  <li
                    key={f.text}
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      fontSize: "0.86rem",
                      color: f.included ? "var(--text)" : "var(--muted)",
                    }}
                  >
                    <span
                      style={{
                        color: f.included ? "var(--cyan)" : "var(--muted)",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {f.included ? "✓" : "—"}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>
              <Link
                href="/early-access"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "14px",
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  borderRadius: "6px",
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "all 0.25s",
                  background: plan.ctaStyle === "filled" ? "var(--cyan)" : "transparent",
                  color: plan.ctaStyle === "filled" ? "var(--bg)" : "var(--text)",
                  border:
                    plan.ctaStyle === "outline" ? "1px solid var(--border)" : "none",
                }}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
