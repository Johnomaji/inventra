"use client";

import { motion } from "framer-motion";
import { DecryptedText } from "@/components/decrypted-text";

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
    featured: true,
    highlight: "stockout rate dropped by more than half",
  },
  {
    initials: "IB",
    name: "Ibrahim Balogun",
    role: "Operations Director · PharmaNet",
    text: "We manage 4 pharmacies across Abuja. Before Inventra, stock reconciliation took 3 people two full days. Now the AR scan does it in under 10 minutes. Game-changing isn't the word.",
    featured: false,
    highlight: null,
  },
  {
    initials: "FO",
    name: "Fatima Ouédraogo",
    role: "Founder · TradeLink West Africa",
    text: "The VR dashboard isn't just cool — it's operationally transformative. I ran a full multi-warehouse review from my phone on a bus. That kind of access used to require a flight.",
    featured: false,
    highlight: null,
  },
];

const tickerLogos = [...logos, ...logos];

const fadeUp = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
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

export function SocialProof() {
  return (
    <section id="social-proof" style={{ padding: "120px 24px", background: "var(--bg2)" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "60px", textAlign: "center" }}
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
              fontSize: "0.68rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "7px 18px",
              borderRadius: "100px",
              marginBottom: "20px",
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
              lineHeight: 1.1,
            }}
          >
            <DecryptedText text="Trusted by Builders," animateOn="view" sequential revealDirection="start" speed={35} encryptedClassName="decrypted-char-encrypted" />
            <br />
            <DecryptedText text="Backed by Believers" animateOn="view" sequential revealDirection="start" speed={35} encryptedClassName="decrypted-char-encrypted" />
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontWeight: 300,
              lineHeight: 1.75,
              fontSize: "1rem",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            From Tier-1 accelerators to Category-A retailers — the ecosystem is
            paying attention.
          </p>
        </motion.div>

        {/* Logo ticker */}
        <div className="logos-ticker-outer" style={{ marginBottom: "60px" }}>
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

        {/* Testimonials — featured large + 2 stacked */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            gap: "16px",
            alignItems: "start",
          }}
        >
          {/* Featured testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            style={{
              background: "var(--surface2)",
              border: "1px solid var(--border-strong)",
              borderRadius: "24px",
              padding: "48px 44px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 8px 48px rgba(0,0,0,0.08)",
            }}
          >
            {/* Top gradient bar */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background:
                  "linear-gradient(90deg, var(--cyan), var(--violet))",
                borderRadius: "24px 24px 0 0",
              }}
            />

            {/* Large quote mark */}
            <div
              style={{
                fontFamily: "var(--font-syne), Syne, sans-serif",
                fontSize: "8rem",
                color: "var(--cyan)",
                opacity: 0.08,
                lineHeight: 0.8,
                marginBottom: "16px",
                fontWeight: 800,
              }}
            >
              &ldquo;
            </div>

            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--text2)",
                lineHeight: 1.85,
                marginBottom: "36px",
                fontWeight: 300,
              }}
            >
              Within 6 days of beta access, our{" "}
              <em
                style={{
                  fontStyle: "normal",
                  color: "var(--cyan)",
                  fontWeight: 600,
                }}
              >
                stockout rate dropped by more than half
              </em>
              . The AI flagged 3 SKUs we had been overstocking for months. I
              don&apos;t know how we managed without it.
            </p>

            <div
              style={{
                height: "1px",
                background: "var(--border)",
                marginBottom: "24px",
              }}
            />

            <div
              style={{ display: "flex", alignItems: "center", gap: "16px" }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg, var(--cyan), var(--violet))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "var(--bg)",
                  flexShrink: 0,
                }}
              >
                AC
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-syne), Syne, sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                  }}
                >
                  Adaeze Chibuike
                </div>
                <div
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--muted)",
                    fontFamily:
                      "var(--font-space-mono), Space Mono, monospace",
                    marginTop: "2px",
                  }}
                >
                  CEO · FMCG Distributor, Lagos
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column — 2 stacked */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {testimonials.slice(1).map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15 + 0.2,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "20px",
                  padding: "28px 24px",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    fontFamily: "var(--font-syne), Syne, sans-serif",
                    fontSize: "2.5rem",
                    color: "var(--cyan)",
                    opacity: 0.1,
                    lineHeight: 1,
                  }}
                >
                  &ldquo;
                </div>

                <p
                  style={{
                    fontSize: "0.86rem",
                    color: "var(--muted)",
                    lineHeight: 1.8,
                    marginBottom: "20px",
                  }}
                >
                  {t.text}
                </p>

                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background:
                        "linear-gradient(135deg, var(--cyan), var(--violet))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-syne), Syne, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.74rem",
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
                        fontSize: "0.86rem",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.68rem",
                        color: "var(--muted)",
                        fontFamily:
                          "var(--font-space-mono), Space Mono, monospace",
                        marginTop: "1px",
                      }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
