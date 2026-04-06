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
    accentColor: "var(--cyan)",
    accentBg: "rgba(0,229,255,0.06)",
    accentBorder: "rgba(0,229,255,0.15)",
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
    accentColor: "var(--cyan)",
    accentBg: "rgba(0,229,255,0.06)",
    accentBorder: "rgba(0,229,255,0.15)",
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
    accentColor: "#a67cff",
    accentBg: "rgba(124,77,255,0.06)",
    accentBorder: "rgba(124,77,255,0.15)",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function PricingSection() {
  return (
    <section
      id="pricing"
      style={{ padding: "120px 24px", background: "var(--bg)", overflow: "hidden" }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          width: "800px",
          height: "600px",
          background:
            "radial-gradient(ellipse, rgba(0,229,255,0.05) 0%, rgba(124,77,255,0.03) 50%, transparent 70%)",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: "1120px", margin: "0 auto", position: "relative", zIndex: 1 }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(0,229,255,0.08)",
              border: "1px solid rgba(0,229,255,0.2)",
              color: "var(--cyan)",
              fontFamily: "var(--font-space-mono), Space Mono, monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "7px 18px",
              borderRadius: "100px",
              marginBottom: "20px",
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
            Start Free.{" "}
            <em style={{ fontStyle: "normal", color: "var(--cyan)" }}>
              Scale Fast.
            </em>
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontWeight: 300,
              fontSize: "1rem",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            No hidden fees. No complex tiers. Pricing built for African business
            realities.
          </p>
        </div>

        {/* Pricing grid */}
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
            alignItems: "start",
          }}
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.tier}
              custom={i}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                background: plan.featured ? "var(--surface2)" : "var(--surface)",
                border: plan.featured
                  ? "1px solid var(--border-strong)"
                  : "1px solid var(--border)",
                borderRadius: "20px",
                padding: "0",
                transition: "all 0.3s",
                position: "relative",
                overflow: "hidden",
                boxShadow: plan.featured
                  ? "0 16px 60px rgba(0,229,255,0.1), 0 4px 16px rgba(0,0,0,0.1)"
                  : "0 4px 20px rgba(0,0,0,0.04)",
              }}
            >
              {/* Top gradient accent */}
              <div
                style={{
                  height: plan.featured ? "3px" : "2px",
                  background: plan.featured
                    ? "linear-gradient(90deg, var(--cyan), var(--violet))"
                    : `linear-gradient(90deg, ${plan.accentColor}, transparent)`,
                  borderRadius: "20px 20px 0 0",
                }}
              />

              <div style={{ padding: "32px 28px" }}>
                {/* Tier header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      fontFamily:
                        "var(--font-space-mono), Space Mono, monospace",
                      fontSize: "0.65rem",
                      color: plan.featured ? "var(--cyan)" : "var(--muted)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    {plan.tier}
                  </div>
                  {plan.featured && (
                    <div
                      style={{
                        background: "var(--cyan)",
                        color: "var(--bg)",
                        fontFamily:
                          "var(--font-space-mono), Space Mono, monospace",
                        fontSize: "0.52rem",
                        fontWeight: 700,
                        padding: "4px 10px",
                        borderRadius: "100px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        flexShrink: 0,
                      }}
                    >
                      MOST POPULAR
                    </div>
                  )}
                </div>

                {/* Price */}
                <div style={{ marginBottom: "20px" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-syne), Syne, sans-serif",
                      fontWeight: 800,
                      fontSize: plan.price === "Custom" ? "2.2rem" : "3rem",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      marginBottom: "4px",
                    }}
                  >
                    {plan.price}
                    {plan.period && (
                      <span
                        style={{
                          fontSize: "0.9rem",
                          color: "var(--muted)",
                          fontWeight: 400,
                          letterSpacing: "0",
                        }}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--muted)",
                    paddingBottom: "20px",
                    borderBottom: "1px solid var(--border)",
                    marginBottom: "20px",
                    lineHeight: 1.65,
                  }}
                >
                  {plan.desc}
                </p>

                {/* Features list */}
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
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
                        fontSize: "0.84rem",
                        color: f.included ? "var(--text)" : "var(--muted)",
                        opacity: f.included ? 1 : 0.6,
                      }}
                    >
                      <span
                        style={{
                          color: f.included
                            ? plan.featured
                              ? "var(--cyan)"
                              : plan.accentColor
                            : "var(--muted)",
                          fontWeight: 700,
                          flexShrink: 0,
                          fontSize: "0.78rem",
                        }}
                      >
                        {f.included ? "✓" : "—"}
                      </span>
                      {f.text}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/early-access"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "14px",
                    fontFamily: "var(--font-syne), Syne, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    borderRadius: "10px",
                    textDecoration: "none",
                    transition: "all 0.25s",
                    background:
                      plan.ctaStyle === "filled" ? "var(--cyan)" : "transparent",
                    color:
                      plan.ctaStyle === "filled" ? "var(--bg)" : "var(--text)",
                    border:
                      plan.ctaStyle === "outline"
                        ? "1px solid var(--border-strong)"
                        : "none",
                  }}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
