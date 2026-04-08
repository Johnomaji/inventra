"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { DecryptedText } from "@/components/decrypted-text";
import { useEffect, useRef, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  { day: "Mar 18", velocity: 42 },
  { day: "Mar 19", velocity: 58 },
  { day: "Mar 20", velocity: 47 },
  { day: "Mar 21", velocity: 73 },
  { day: "Mar 22", velocity: 65 },
  { day: "Mar 23", velocity: 84 },
  { day: "Mar 24", velocity: 97 },
  { day: "Mar 25", velocity: 78 },
  { day: "Mar 26", velocity: 91 },
  { day: "Mar 27", velocity: 72 },
  { day: "Mar 28", velocity: 103 },
  { day: "Mar 29", velocity: 88 },
  { day: "Mar 30", velocity: 95 },
  { day: "Mar 31", velocity: 112 },
];

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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Grid */}
      <div className="hero-grid-bg" />

      {/* Giant watermark */}
      <div
        style={{
          position: "absolute",
          fontSize: "clamp(8rem, 22vw, 26rem)",
          fontFamily: "var(--font-syne), Syne, sans-serif",
          fontWeight: 800,
          color: "var(--text)",
          opacity: 0.02,
          top: "46%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          whiteSpace: "nowrap",
          letterSpacing: "-0.05em",
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
        }}
      >
        INVENTRA
      </div>

      {/* Orbs */}
      <div
        style={{
          position: "absolute",
          width: "1000px",
          height: "700px",
          background:
            "radial-gradient(ellipse, rgba(0,229,255,0.07) 0%, rgba(124,77,255,0.04) 40%, transparent 65%)",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "300px",
          background:
            "radial-gradient(ellipse, rgba(255,179,0,0.05) 0%, transparent 70%)",
          bottom: "10%",
          right: "10%",
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <div
        style={{
          maxWidth: "1120px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Badge */}
        {/* <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{ marginBottom: "32px" }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(0,229,255,0.08)",
              border: "1px solid rgba(0,229,255,0.2)",
              color: "var(--cyan)",
              fontFamily: "var(--font-space-mono), Space Mono, monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "7px 20px",
              borderRadius: "100px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--cyan)",
                animation: "pulse 2s infinite",
                display: "inline-block",
              }}
            />
            The Intelligent OS for African Commerce
          </span>
        </motion.div> */}

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: "clamp(3rem, 6.5vw, 6rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.02,
            marginBottom: "28px",
            maxWidth: "900px",
          }}
        >
          <DecryptedText text="Your Business." animateOn="view" sequential revealDirection="start" speed={35} encryptedClassName="decrypted-char-encrypted" />
          <br />
          <em style={{ fontStyle: "normal", color: "var(--cyan)" }}>
            <DecryptedText text="Finally" animateOn="view" sequential revealDirection="start" speed={35} encryptedClassName="decrypted-char-encrypted" />
          </em>{" "}
          <span style={{ color: "var(--amber)" }}>
            <DecryptedText text="Sees Everything." animateOn="view" sequential revealDirection="start" speed={35} encryptedClassName="decrypted-char-encrypted" />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: "clamp(1rem, 1.7vw, 1.2rem)",
            color: "var(--muted)",
            maxWidth: "600px",
            marginBottom: "44px",
            fontWeight: 300,
            lineHeight: 1.8,
          }}
        >
          Inventra fuses AI, Augmented Reality, and Virtual Reality into one
          unified platform — giving African businesses total intelligence over
          their inventory, supply chain, and growth.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "72px",
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
                color: "var(--bg)",
                fontFamily: "var(--font-syne), Syne, sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "16px 36px",
                textDecoration: "none",
                borderRadius: "10px",
                boxShadow: "0 4px 24px rgba(0,229,255,0.25)",
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
                padding: "15px 32px",
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

        {/* Metrics strip */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{ width: "100%", marginBottom: "48px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              overflow: "hidden",
              background: "var(--surface)",
            }}
          >
            {metrics.map((m, i) => (
              <div
                key={m.label}
                style={{
                  padding: "24px 16px",
                  textAlign: "center",
                  borderRight: i < metrics.length - 1 ? "1px solid var(--border)" : "none",
                  position: "relative",
                }}
              >
                {/* Subtle top accent on first */}
                {i === 0 && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background:
                        "linear-gradient(90deg, var(--cyan), var(--violet), var(--amber), transparent)",
                    }}
                  />
                )}
                <div
                  style={{
                    fontFamily: "var(--font-syne), Syne, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                    marginBottom: "6px",
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
                    fontSize: "0.62rem",
                    color: "var(--muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-space-mono), Space Mono, monospace",
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dashboard showcase card */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.8,
            type: "spring",
            stiffness: 60,
            damping: 18,
          }}
          style={{ width: "100%", position: "relative" }}
        >
          {/* Glow under dashboard */}
          <div
            style={{
              position: "absolute",
              inset: "-30px",
              background:
                "radial-gradient(ellipse at 50% 80%, rgba(0,229,255,0.1) 0%, transparent 65%)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          <div
            style={{
              background: "var(--dash-bg)",
              border: "1px solid var(--dash-border)",
              borderRadius: "20px",
              padding: "24px",
              backdropFilter: "blur(24px)",
              boxShadow:
                "0 40px 120px rgba(0,0,0,0.4), 0 0 0 1px var(--dash-border)",
              overflow: "hidden",
              position: "relative",
              zIndex: 1,
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
                  "linear-gradient(90deg, var(--cyan), var(--violet), var(--amber))",
                borderRadius: "20px 20px 0 0",
              }}
            />

            {/* Terminal header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px",
                paddingBottom: "16px",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#ff5f57",
                }}
              />
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#ffbd2e",
                }}
              />
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#28ca41",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-space-mono), Space Mono, monospace",
                  fontSize: "0.65rem",
                  color: "var(--muted)",
                  marginLeft: "8px",
                  letterSpacing: "0.06em",
                }}
              >
                INVENTRA OS — LIVE VIEW — LAGOS HUB
              </span>
              <div
                style={{
                  marginLeft: "auto",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "var(--font-space-mono), Space Mono, monospace",
                  fontSize: "0.62rem",
                  color: "var(--cyan)",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "var(--cyan)",
                    animation: "pulse 2s infinite",
                  }}
                />
                LIVE
              </div>
            </div>

            {/* KPI Grid */}
            <div className="dash-kpi-grid">
              {[
                {
                  label: "Total SKUs",
                  val: "12,847",
                  sub: "↑ 3.2% this week",
                  up: true,
                },
                {
                  label: "AI Alerts",
                  val: "7",
                  sub: "↓ 41% vs last week",
                  up: true,
                },
                {
                  label: "Demand Score",
                  val: "92.4",
                  sub: "↑ Trending up",
                  up: true,
                },
                {
                  label: "Restock ETA",
                  val: "2d 4h",
                  sub: "↓ 3 urgent items",
                  up: false,
                },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "14px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.6rem",
                      color: "var(--muted)",
                      fontFamily:
                        "var(--font-space-mono), Space Mono, monospace",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginBottom: "6px",
                    }}
                  >
                    {kpi.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-syne), Syne, sans-serif",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "var(--text)",
                    }}
                  >
                    {kpi.val}
                  </div>
                  <div
                    style={{
                      fontSize: "0.6rem",
                      color: kpi.up ? "#00c853" : "#ff5252",
                      marginTop: "4px",
                      fontFamily:
                        "var(--font-space-mono), Space Mono, monospace",
                    }}
                  >
                    {kpi.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Area chart */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "14px",
                position: "relative",
                marginTop: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    fontSize: "0.6rem",
                    color: "var(--muted)",
                    fontFamily:
                      "var(--font-space-mono), Space Mono, monospace",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  SALES VELOCITY — PAST 14 DAYS
                </span>
                <span
                  style={{
                    background: "rgba(0,229,255,0.1)",
                    border: "1px solid var(--dash-border)",
                    color: "var(--cyan)",
                    fontFamily:
                      "var(--font-space-mono), Space Mono, monospace",
                    fontSize: "0.58rem",
                    padding: "3px 9px",
                    borderRadius: "100px",
                    letterSpacing: "0.1em",
                  }}
                >
                  AR MODE READY
                </span>
              </div>
              <ResponsiveContainer width="100%" height={120}>
                <AreaChart
                  data={salesData}
                  margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="salesGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="var(--cyan)"
                        stopOpacity={0.35}
                      />
                      <stop
                        offset="95%"
                        stopColor="var(--cyan)"
                        stopOpacity={0.02}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="var(--border)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="day"
                    tick={{
                      fill: "var(--muted)",
                      fontSize: 9,
                      fontFamily: "Space Mono, monospace",
                    }}
                    tickLine={false}
                    axisLine={false}
                    interval={2}
                  />
                  <YAxis
                    tick={{
                      fill: "var(--muted)",
                      fontSize: 9,
                      fontFamily: "Space Mono, monospace",
                    }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "var(--dash-bg)",
                      border: "1px solid var(--dash-border)",
                      borderRadius: "8px",
                      fontSize: "11px",
                      fontFamily: "Space Mono, monospace",
                      color: "var(--text)",
                    }}
                    labelStyle={{ color: "var(--cyan)", marginBottom: "4px" }}
                    itemStyle={{ color: "var(--text)" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="velocity"
                    stroke="var(--cyan)"
                    strokeWidth={2}
                    fill="url(#salesGradient)"
                    dot={false}
                    activeDot={{ r: 4, fill: "var(--cyan)", strokeWidth: 0 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
