"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
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

function CountUp({ from, to, decimals, duration = 1.8 }: { from: number; to: number; decimals: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(from.toFixed(decimals));

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    const totalMs = duration * 1000;
    const tick = (now: number) => {
      const t = Math.min((now - startTime) / totalMs, 1);
      // ease-out expo
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setDisplay((from + (to - from) * eased).toFixed(decimals));
      if (t < 1) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [isInView, from, to, decimals, duration]);

  return <span ref={ref}>{display}</span>;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
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
        textAlign: "center",
        padding: "120px 24px 80px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Theme-aware grid */}
      <div className="hero-grid-bg" />

      {/* Orbs */}
      <div
        style={{
          position: "absolute",
          width: "900px",
          height: "900px",
          background:
            "radial-gradient(circle, rgba(0,229,255,0.08) 0%, rgba(124,77,255,0.04) 40%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "300px",
          background:
            "radial-gradient(ellipse, rgba(255,179,0,0.05) 0%, transparent 70%)",
          bottom: "5%",
          left: "15%",
          pointerEvents: "none",
        }}
      />

      {/* Hero content */}
      <motion.div
        style={{ position: "relative", zIndex: 2, maxWidth: "900px", width: "100%" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          style={{
            fontFamily: "var(--font-space-mono), Space Mono, monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--cyan)",
            marginBottom: "28px",
          }}
        >
          ▸ The Intelligent OS for African Commerce
        </motion.div>

        <motion.h1
          variants={itemVariants}
          style={{
            fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "28px",
            lineHeight: 1.08,
          }}
        >
          Your Business.
          <br />
          <em style={{ fontStyle: "normal", color: "var(--cyan)" }}>Finally</em>{" "}
          <span style={{ color: "var(--amber)" }}>Sees Everything.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "var(--muted)",
            maxWidth: "580px",
            margin: "0 auto 48px",
            fontWeight: 300,
            lineHeight: 1.7,
          }}
        >
          Inventra fuses AI, Augmented Reality, and Virtual Reality into one
          unified platform — giving African businesses total intelligence over
          their inventory, supply chain, and growth.
        </motion.p>

        <motion.div
          variants={itemVariants}
          style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}
        >
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/early-access"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "var(--cyan)",
                color: "var(--bg)",
                fontFamily: "var(--font-syne), Syne, sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "16px 36px",
                textDecoration: "none",
                clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)",
              }}
            >
              Get Early Access →
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03, borderColor: "var(--cyan)" }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/#how"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "transparent",
                color: "var(--text)",
                fontFamily: "var(--font-syne), Syne, sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                padding: "15px 32px",
                border: "1px solid var(--border)",
                textDecoration: "none",
                transition: "all 0.25s",
              }}
            >
              See How It Works
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated metrics */}
        <motion.div variants={itemVariants} className="hero-metrics-row">
          {metrics.map((m) => (
            <div key={m.label} style={{ textAlign: "center" }}>
              <span
                style={{
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontWeight: 800,
                  fontSize: "2.2rem",
                  color: "var(--text)",
                  letterSpacing: "-0.02em",
                  display: "block",
                  lineHeight: 1.1,
                }}
              >
                {m.from !== null && m.to !== null ? (
                  <>
                    <CountUp from={m.from} to={m.to} decimals={m.decimals!} />
                    <em style={{ fontStyle: "normal", color: "var(--cyan)" }}>{m.unit}</em>
                  </>
                ) : (
                  <em style={{ fontStyle: "normal", color: "var(--cyan)" }}>{m.prefix}</em>
                )}
              </span>
              <span
                style={{
                  fontSize: "0.72rem",
                  color: "var(--muted)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-space-mono), Space Mono, monospace",
                  display: "block",
                  marginTop: "4px",
                }}
              >
                {m.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Dashboard mock */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 1.1, type: "spring", stiffness: 70, damping: 18 }}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "860px",
          margin: "56px auto 0",
        }}
      >
        {/* Glow behind dashboard */}
        <div
          style={{
            position: "absolute",
            inset: "-40px",
            background: "radial-gradient(ellipse at 50% 60%, rgba(0,229,255,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div
          style={{
            background: "var(--dash-bg)",
            border: "1px solid var(--dash-border)",
            borderRadius: "14px",
            padding: "24px",
            backdropFilter: "blur(24px)",
            boxShadow: "0 40px 120px rgba(0,0,0,0.5), 0 0 0 1px var(--dash-border)",
            overflow: "hidden",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Top accent line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "linear-gradient(90deg, var(--cyan), var(--violet), var(--amber))",
            }}
          />

          {/* Header */}
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
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57" }} />
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ffbd2e" }} />
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28ca41" }} />
            <span
              style={{
                fontFamily: "var(--font-space-mono), Space Mono, monospace",
                fontSize: "0.68rem",
                color: "var(--muted)",
                marginLeft: "8px",
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
                fontSize: "0.65rem",
                color: "var(--cyan)",
              }}
            >
              <div
                style={{
                  width: "7px",
                  height: "7px",
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
              { label: "Total SKUs", val: "12,847", sub: "↑ 3.2% this week", up: true },
              { label: "AI Alerts", val: "7", sub: "↓ 41% vs last week", up: true },
              { label: "Demand Score", val: "92.4", sub: "↑ Trending up", up: true },
              { label: "Restock ETA", val: "2d 4h", sub: "↓ 3 urgent items", up: false },
            ].map((kpi) => (
              <div
                key={kpi.label}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "14px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.62rem",
                    color: "var(--muted)",
                    fontFamily: "var(--font-space-mono), Space Mono, monospace",
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
                    fontSize: "0.62rem",
                    color: kpi.up ? "#00c853" : "#ff5252",
                    marginTop: "4px",
                    fontFamily: "var(--font-space-mono), Space Mono, monospace",
                  }}
                >
                  {kpi.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Recharts Area Chart */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "14px",
              position: "relative",
            }}
          >
            <div
              style={{
                fontSize: "0.62rem",
                color: "var(--muted)",
                fontFamily: "var(--font-space-mono), Space Mono, monospace",
                marginBottom: "10px",
                letterSpacing: "0.06em",
              }}
            >
              SALES VELOCITY — PAST 14 DAYS
            </div>
            <ResponsiveContainer width="100%" height={120}>
              <AreaChart data={salesData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--cyan)" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="var(--cyan)" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--border)"
                  vertical={false}
                />
                <XAxis
                  dataKey="day"
                  tick={{ fill: "var(--muted)", fontSize: 9, fontFamily: "Space Mono, monospace" }}
                  tickLine={false}
                  axisLine={false}
                  interval={2}
                />
                <YAxis
                  tick={{ fill: "var(--muted)", fontSize: 9, fontFamily: "Space Mono, monospace" }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "var(--dash-bg)",
                    border: "1px solid var(--dash-border)",
                    borderRadius: "6px",
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
            <div
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                background: "rgba(0,229,255,0.1)",
                border: "1px solid var(--dash-border)",
                color: "var(--cyan)",
                fontFamily: "var(--font-space-mono), Space Mono, monospace",
                fontSize: "0.6rem",
                padding: "4px 10px",
                borderRadius: "2px",
                letterSpacing: "0.1em",
              }}
            >
              AR MODE READY
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
