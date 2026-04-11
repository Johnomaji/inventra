"use client";

import { motion } from "framer-motion";
import { DecryptedText } from "@/components/decrypted-text";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cases = [
  {
    emoji: "🏪",
    title: "Retail & FMCG",
    desc: "Eliminate stockouts during peak periods. AI-driven demand forecasting ensures your shelves are full exactly when customers need them.",
    market: "↗ $320B African retail market",
    featured: true,
    wide: true,
  },
  {
    emoji: "💊",
    title: "Pharmaceuticals",
    desc: "Track expiry dates, cold-chain compliance, and regulatory inventory in real time. Zero tolerance for error, fully automated.",
    market: "↗ $40B African pharma market",
    featured: false,
    wide: false,
  },
  {
    emoji: "🏭",
    title: "Manufacturing",
    desc: "Monitor raw materials, WIP, and finished goods with factory-floor AR scanning and AI-optimized supply chain triggers.",
    market: "↗ $500B African manufacturing opportunity",
    featured: false,
    wide: false,
  },
  {
    emoji: "🚚",
    title: "Logistics & 3PL",
    desc: "Manage multi-client warehouses, track inbound shipments, and visualize dispatch queues with spatial VR mapping.",
    market: "↗ $180B African logistics market",
    featured: false,
    wide: false,
  },
  {
    emoji: "🌾",
    title: "Agribusiness",
    desc: "Seasonal demand forecasting, perishable item tracking, and supply chain AI tailored to harvesting cycles and post-harvest loss prevention.",
    market: "↗ Largest African economic sector",
    featured: false,
    wide: false,
  },
  {
    emoji: "🏗️",
    title: "Construction & Hardware",
    desc: "Track thousands of SKUs across project sites. AR lets foremen do instant stock checks without leaving the floor.",
    market: "↗ $6T African infrastructure pipeline",
    featured: false,
    wide: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: i * 0.07,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function UseCases() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(index, cases.length - 1));
    const cardWidth = el.clientWidth * 0.8;
    const gap = el.clientWidth * 0.04;
    el.scrollTo({ left: clamped * (cardWidth + gap), behavior: "smooth" });
    setActiveIndex(clamped);
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth * 0.8;
    const gap = el.clientWidth * 0.04;
    const index = Math.round(el.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.max(0, Math.min(index, cases.length - 1)));
  };

  return (
    <section
      id="use-cases"
      style={{
        padding: "80px 0",
        background: "var(--bg)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(248,124,43,0.04) 0%, transparent 65%)",
          top: "20%",
          right: "-100px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1, padding: "0 24px" }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="use-cases-header"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "end",
            marginBottom: "56px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.4rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              <DecryptedText text="One Platform." animateOn="view" sequential revealDirection="start" speed={35} encryptedClassName="decrypted-char-encrypted" />
              <br />
              <DecryptedText text="Every Market." animateOn="view" sequential revealDirection="start" speed={35} encryptedClassName="decrypted-char-encrypted" />
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <p
              style={{
                color: "var(--muted)",
                fontWeight: 300,
                lineHeight: 1.75,
                fontSize: "1rem",
              }}
            >
              Inventra adapts to the unique rhythms, risks, and requirements of
              each sector — built ground-up for African trade realities.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Desktop bento grid — hidden on mobile */}
      <div className="hidden md:block" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto auto",
            gap: "12px",
          }}
        >
          {/* Retail — wide (spans 2 cols) */}
          <motion.div
            custom={0}
            variants={fadeUp}
            whileHover={{ y: -6, transition: { duration: 0.22 } }}
            style={{
              gridColumn: "1 / 3",
              background: "var(--cyan)",
              borderRadius: "20px",
              padding: "40px 40px",
              position: "relative",
              overflow: "hidden",
              cursor: "default",
              boxShadow: "0 12px 48px rgba(248,124,43,0.18)",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "center",
            }}
          >
            {/* Inner glow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at top right, rgba(255,255,255,0.15), transparent 55%)",
                pointerEvents: "none",
              }}
            />
            {/* Emoji bg */}
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "32px",
                fontSize: "9rem",
                opacity: 0.1,
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              🏪
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: "2.2rem", marginBottom: "16px" }}>
                🏪
              </div>
              <h3
                style={{
                  fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontWeight: 800,
                  color: "var(--bg)",
                  marginBottom: "8px",
                  letterSpacing: "-0.02em",
                }}
              >
                Retail & FMCG
              </h3>
              <div
                style={{
                  fontFamily:
                    "var(--font-space-mono), Space Mono, monospace",
                  fontSize: "0.65rem",
                  color: "rgba(5,8,16,0.55)",
                  letterSpacing: "0.06em",
                }}
              >
                ↗ $320B African retail market
              </div>
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <p
                style={{
                  fontSize: "1rem",
                  color: "rgba(5,8,16,0.72)",
                  lineHeight: 1.75,
                }}
              >
                Eliminate stockouts during peak periods. AI-driven demand
                forecasting ensures your shelves are full exactly when customers
                need them.
              </p>
            </div>
          </motion.div>

          {/* Remaining 5 cases */}
          {cases.slice(1).map((c, i) => (
            <motion.div
              key={c.title}
              custom={i + 1}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                padding: "28px 24px",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
              }}
            >
              <span
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "14px",
                  display: "block",
                }}
              >
                {c.emoji}
              </span>
              <h3
                style={{
                  fontSize: "0.95rem",
                  marginBottom: "8px",
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontWeight: 700,
                  color: "var(--text)",
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  marginBottom: "14px",
                }}
              >
                {c.desc}
              </p>
              <div
                style={{
                  fontFamily:
                    "var(--font-space-mono), Space Mono, monospace",
                  fontSize: "0.62rem",
                  color: "var(--cyan)",
                  borderTop: "1px solid var(--border)",
                  paddingTop: "10px",
                }}
              >
                {c.market}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile carousel — hidden on desktop */}
      <div className="block md:hidden">
        {/* Scroll track */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          style={{
            display: "flex",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
            gap: "4vw",
            paddingLeft: "10vw",
            paddingRight: "10vw",
            paddingBottom: "4px",
          }}
        >
          {cases.map((c, i) => (
            <div
              key={c.title}
              style={{
                scrollSnapAlign: "center",
                flex: "0 0 80vw",
                background: i === 0 ? "var(--cyan)" : "var(--surface)",
                border: i === 0 ? "none" : "1px solid var(--border)",
                borderRadius: "20px",
                padding: "32px 28px",
                position: "relative",
                overflow: "hidden",
                boxShadow: i === 0
                  ? "0 12px 48px rgba(248,124,43,0.18)"
                  : "0 4px 20px rgba(0,0,0,0.04)",
              }}
            >
              {i === 0 && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(ellipse at top right, rgba(255,255,255,0.15), transparent 55%)",
                    pointerEvents: "none",
                  }}
                />
              )}
              {i === 0 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    right: "16px",
                    fontSize: "7rem",
                    opacity: 0.1,
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                >
                  {c.emoji}
                </div>
              )}
              <span
                style={{
                  fontSize: "2rem",
                  marginBottom: "16px",
                  display: "block",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {c.emoji}
              </span>
              <h3
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "10px",
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontWeight: 800,
                  color: i === 0 ? "var(--bg)" : "var(--text)",
                  letterSpacing: "-0.02em",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: i === 0 ? "rgba(5,8,16,0.72)" : "var(--muted)",
                  lineHeight: 1.75,
                  marginBottom: "20px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {c.desc}
              </p>
              <div
                style={{
                  fontFamily: "var(--font-space-mono), Space Mono, monospace",
                  fontSize: "0.65rem",
                  color: i === 0 ? "rgba(5,8,16,0.5)" : "var(--cyan)",
                  borderTop: `1px solid ${i === 0 ? "rgba(5,8,16,0.15)" : "var(--border)"}`,
                  paddingTop: "12px",
                  position: "relative",
                  zIndex: 1,
                  letterSpacing: "0.04em",
                }}
              >
                {c.market}
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginTop: "24px",
            padding: "0 24px",
          }}
        >
          {/* Prev arrow */}
          <button
            onClick={() => scrollTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            style={{
              background: activeIndex === 0 ? "var(--surface)" : "var(--surface2)",
              border: "1px solid var(--border)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: activeIndex === 0 ? "not-allowed" : "pointer",
              color: activeIndex === 0 ? "var(--muted)" : "var(--text)",
              transition: "all 0.2s",
              flexShrink: 0,
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            {cases.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                style={{
                  width: i === activeIndex ? "20px" : "6px",
                  height: "6px",
                  borderRadius: "3px",
                  background: i === activeIndex ? "var(--cyan)" : "var(--border-strong)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.25s",
                }}
                aria-label={`Go to ${cases[i].title}`}
              />
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={() => scrollTo(activeIndex + 1)}
            disabled={activeIndex === cases.length - 1}
            style={{
              background: activeIndex === cases.length - 1 ? "var(--surface)" : "var(--surface2)",
              border: "1px solid var(--border)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: activeIndex === cases.length - 1 ? "not-allowed" : "pointer",
              color: activeIndex === cases.length - 1 ? "var(--muted)" : "var(--text)",
              transition: "all 0.2s",
              flexShrink: 0,
            }}
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
