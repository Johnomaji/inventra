"use client";

import { motion } from "framer-motion";

const logos = [
  "Y Combinator",
  "Google for Startups",
  "Techstars Africa",
  "Seedstars",
  "AfricArena",
  "Lagos Angel Network",
];

const testimonials = [
  {
    initials: "AC",
    name: "Adaeze Chibuike",
    role: "CEO · FMCG Distributor, Lagos",
    text: "Within 6 days of beta access, our stockout rate dropped by more than half. The AI flagged 3 SKUs we had been overstocking for months. I don't know how we managed without it.",
  },
  {
    initials: "IB",
    name: "Ibrahim Balogun",
    role: "Operations Director · PharmaNet",
    text: "We manage 4 pharmacies across Abuja. Before Inventra, stock reconciliation took 3 people two full days. Now the AR scan does it in under 10 minutes. Game-changing isn't the word.",
  },
  {
    initials: "FO",
    name: "Fatima Ouédraogo",
    role: "Founder · TradeLink West Africa",
    text: "The VR dashboard isn't just cool — it's operationally transformative. I ran a full multi-warehouse review from my phone on a bus. That kind of access used to require a flight.",
  },
];

const testimonialVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const tickerLogos = [...logos, ...logos]; // doubled for seamless loop

export function SocialProof() {
  return (
    <section id="social-proof" style={{ padding: "120px 24px", textAlign: "center" }}>
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
          ◎ Early Traction
        </div>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3.4rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          Trusted by Builders,
          <br />
          Backed by Believers
        </h2>
        <p style={{ color: "var(--muted)", marginBottom: "60px", fontWeight: 300 }}>
          From Tier-1 accelerators to Category-A retailers — the ecosystem is
          paying attention.
        </p>

        {/* Logo ticker */}
        <div className="logos-ticker-outer">
          <div className="logos-ticker-track">
            {tickerLogos.map((logo, i) => (
              <div
                key={`${logo}-${i}`}
                style={{
                  padding: "0 40px",
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  color: "var(--muted)",
                  letterSpacing: "0.06em",
                  whiteSpace: "nowrap",
                  borderRight: "1px solid var(--border)",
                  transition: "color 0.3s",
                }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <motion.div
          className="grid-testimonials"
          style={{ textAlign: "left" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.13 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={testimonialVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="card-shimmer card-accent"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "32px 28px",
                position: "relative",
                cursor: "default",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "14px",
                  left: "20px",
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontSize: "3.5rem",
                  color: "var(--cyan)",
                  opacity: 0.18,
                  lineHeight: 1,
                  pointerEvents: "none",
                }}
              >
                &ldquo;
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--muted)",
                  lineHeight: 1.85,
                  marginBottom: "24px",
                  paddingTop: "16px",
                }}
              >
                {t.text}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--cyan), var(--violet))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-syne), Syne, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    color: "var(--bg)",
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-syne), Syne, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.88rem",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--muted)",
                      fontFamily: "var(--font-space-mono), Space Mono, monospace",
                      marginTop: "2px",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
