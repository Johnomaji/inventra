"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { DecryptedText } from "@/components/decrypted-text";
import { useEffect, useRef, useState } from "react";

const metrics = [
  { from: 0, to: 3.2, decimals: 1, unit: "×", label: "Inventory Accuracy" },
  { from: 0, to: 94, decimals: 0, unit: "%", label: "Waste Reduction" },
  { from: 0, to: 12, decimals: 0, unit: "s", label: "Full Stock Audit" },
  { from: null, to: null, unit: "", prefix: "₦0", label: "Hardware Needed" },
];

function CountUp({
  from,
  to,
  decimals,
  duration = 1.8,
}: {
  from: number;
  to: number;
  decimals: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(from.toFixed(decimals));

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    const totalMs = duration * 1000;
    const tick = (now: number) => {
      const t = Math.min((now - startTime) / totalMs, 1);
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setDisplay((from + (to - from) * eased).toFixed(decimals));
      if (t < 1) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [isInView, from, to, decimals, duration]);

  return <span ref={ref}>{display}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "100px 24px 80px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Grid bg */}
      <div className="hero-grid-bg" />

      {/* Subtle orb — right side only */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "600px",
          background:
            "radial-gradient(ellipse, rgba(248,124,43,0.07) 0%, transparent 65%)",
          top: "10%",
          right: "-80px",
          pointerEvents: "none",
        }}
      />

      {/* Split layout */}
      <div
        className="hero-split-inner"
        style={{
          maxWidth: "1280px",
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* ── LEFT: Text ── */}
        <div className="hero-text-col">
          {/* Headline */}
          <motion.h1
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontSize: "clamp(2.6rem, 5.5vw, 5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.04,
              marginBottom: "24px",
            }}
          >
            <DecryptedText
              text="Your Business."
              animateOn="view"
              sequential
              revealDirection="start"
              speed={35}
              encryptedClassName="decrypted-char-encrypted"
            />
            <br />
            {/* <em style={{ fontStyle: "normal", color: "var(--cyan)" }}>
              <DecryptedText
                text="Finally"
                animateOn="view"
                sequential
                revealDirection="start"
                speed={35}
                encryptedClassName="decrypted-char-encrypted"
              />
            </em>{" "} */}
            <span style={{ fontStyle: "normal", color: "var(--cyan)" }}>
              <DecryptedText
                text="Now Sees Everything."
                animateOn="view"
                sequential
                revealDirection="start"
                speed={35}
                encryptedClassName="decrypted-char-encrypted"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
              color: "var(--muted)",
              marginBottom: "40px",
              fontWeight: 300,
              lineHeight: 1.8,
              maxWidth: "480px",
            }}
          >
            From a Lagos bottled-water shop to a Nairobi distributor moving
            50,000 SKUs — Inventra gives you real-time eyes on every item, every
            location, every reorder. No hardware. No guesswork.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="hero-ctas"
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "56px",
            }}
          >
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/early-access"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "var(--cyan)",
                  color: "#fff",
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  padding: "15px 32px",
                  textDecoration: "none",
                  borderRadius: "10px",
                  boxShadow: "0 4px 20px rgba(248,124,43,0.3)",
                  transition: "all 0.2s",
                }}
              >
                Get Early Access →
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/#how"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "transparent",
                  color: "var(--text)",
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                  padding: "14px 28px",
                  border: "1px solid var(--border-strong)",
                  textDecoration: "none",
                  borderRadius: "10px",
                  transition: "all 0.25s",
                }}
              >
                See How It Works
              </Link>
            </motion.div>
          </motion.div>

          {/* Metrics strip — animated spinning border */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible">
            <div className="metrics-anim-border">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  borderRadius: "14px",
                  overflow: "hidden",
                  background: "var(--surface)",
                }}
              >
                {metrics.map((m, i) => (
                  <div
                    key={m.label}
                    style={{
                      padding: "20px 12px",
                      textAlign: "center",
                      borderRight:
                        i < metrics.length - 1 ? "1px solid var(--border)" : "none",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-syne), Syne, sans-serif",
                        fontWeight: 800,
                        fontSize: "clamp(1.3rem, 2.2vw, 2rem)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                        marginBottom: "5px",
                      }}
                    >
                      {m.from !== null && m.to !== null ? (
                        <>
                          <CountUp from={m.from} to={m.to} decimals={m.decimals!} />
                          <em style={{ fontStyle: "normal", color: "var(--cyan)" }}>
                            {m.unit}
                          </em>
                        </>
                      ) : (
                        <em style={{ fontStyle: "normal", color: "var(--cyan)" }}>
                          {m.prefix}
                        </em>
                      )}
                    </div>
                    <div
                      style={{
                        fontSize: "0.57rem",
                        color: "var(--muted)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        fontFamily:
                          "var(--font-space-mono), Space Mono, monospace",
                      }}
                    >
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT: Hero image — hidden on mobile ── */}
        <motion.div
          className="hero-img-col"
          initial={{ opacity: 0, x: 50, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1.1,
            delay: 0.2,
            type: "spring",
            stiffness: 55,
            damping: 18,
          }}
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/heroimage.svg"
            alt="Inventra inventory management"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "78vh",
              objectFit: "contain",
              display: "block",
              filter: "drop-shadow(0 24px 64px rgba(248,124,43,0.14))",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
