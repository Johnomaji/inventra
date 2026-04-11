"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const quickStart = [
  { step: "01", title: "Create Your Account", desc: "Sign up with your business email and verify your account. Takes under 2 minutes.", tag: "5 min" },
  { step: "02", title: "Connect Your Data", desc: "Import your existing inventory via CSV, connect your POS system, or start fresh with our quick-add tool.", tag: "10 min" },
  { step: "03", title: "Configure AI Settings", desc: "Set your demand thresholds, reorder preferences, and AI notification settings.", tag: "5 min" },
  { step: "04", title: "Go Live", desc: "Activate Inventra Intelligence and start receiving real-time alerts and forecasts immediately.", tag: "Instant" },
];

const docCategories = [
  {
    id: "getting-started",
    icon: "🚀",
    title: "Getting Started",
    links: [
      { label: "Quick Start Guide", anchor: "getting-started" },
      { label: "Account Setup", anchor: "getting-started" },
      { label: "Importing Inventory", anchor: "getting-started" },
      { label: "User Management", anchor: "getting-started" },
      { label: "Mobile App Setup", anchor: "getting-started" },
    ],
  },
  {
    id: "ai-intelligence",
    icon: "🧠",
    title: "Inventra Intelligence (AI)",
    links: [
      { label: "Demand Forecasting Overview", anchor: "ai-intelligence" },
      { label: "Configuring Alert Thresholds", anchor: "ai-intelligence" },
      { label: "Anomaly Detection", anchor: "ai-intelligence" },
      { label: "Natural Language Queries", anchor: "ai-intelligence" },
      { label: "AI Model Accuracy", anchor: "ai-intelligence" },
    ],
  },
  {
    id: "inventra-ar",
    icon: "👓",
    title: "Inventra AR",
    links: [
      { label: "AR Mode Setup", anchor: "inventra-ar" },
      { label: "Supported Devices", anchor: "inventra-ar" },
      { label: "Shelf Scanning Tutorial", anchor: "inventra-ar" },
      { label: "Barcode & QR Integration", anchor: "inventra-ar" },
      { label: "Offline AR Sync", anchor: "inventra-ar" },
    ],
  },
  {
    id: "vr-hub",
    icon: "🌐",
    title: "Inventra VR Hub",
    links: [
      { label: "VR Dashboard Overview", anchor: "vr-hub" },
      { label: "Multi-Location Setup", anchor: "vr-hub" },
      { label: "Headset Compatibility", anchor: "vr-hub" },
      { label: "Desktop VR Mode", anchor: "vr-hub" },
      { label: "Spatial KPI Panels", anchor: "vr-hub" },
    ],
  },
  {
    id: "integrations",
    icon: "📡",
    title: "Integrations & API",
    links: [
      { label: "REST API Reference", anchor: "integrations" },
      { label: "Webhooks", anchor: "integrations" },
      { label: "POS Integrations", anchor: "integrations" },
      { label: "ERP Connectors", anchor: "integrations" },
      { label: "Supplier Network API", anchor: "integrations" },
    ],
  },
  {
    id: "billing",
    icon: "💰",
    title: "Billing & Account",
    links: [
      { label: "Subscription Plans", anchor: "billing" },
      { label: "Upgrading & Downgrading", anchor: "billing" },
      { label: "Invoice Management", anchor: "billing" },
      { label: "Multi-currency Payments", anchor: "billing" },
      { label: "Enterprise Agreements", anchor: "billing" },
    ],
  },
];

const easing = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: easing, delay: i * 0.07 },
  }),
};

export default function DocsPage() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const filteredCategories = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return docCategories;
    return docCategories
      .map((cat) => ({
        ...cat,
        links: cat.links.filter((l) => l.label.toLowerCase().includes(q)),
        titleMatch: cat.title.toLowerCase().includes(q),
      }))
      .filter((cat) => cat.titleMatch || cat.links.length > 0);
  }, [query]);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px", background: "var(--bg)", minHeight: "100vh" }}>
        {/* Hero */}
        <div
          style={{
            background: "var(--bg2)",
            borderBottom: "1px solid var(--border)",
            padding: "60px 24px",
          }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easing }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(248,124,43,0.08)",
                border: "1px solid rgba(248,124,43,0.2)",
                color: "var(--cyan)",
                fontFamily: "var(--font-space-mono), Space Mono, monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                padding: "7px 16px",
                borderRadius: "2px",
                marginBottom: "24px",
              }}
            >
              Documentation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: easing, delay: 0.08 }}
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              Build with Inventra
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: easing, delay: 0.15 }}
              style={{ color: "var(--muted)", fontSize: "1.1rem", fontWeight: 300, maxWidth: "560px" }}
            >
              Everything you need to integrate, configure, and master the
              Inventra platform — from quick starts to deep API dives.
            </motion.p>

            {/* Live search bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: easing, delay: 0.22 }}
              style={{
                marginTop: "32px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: focused ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${focused ? "rgba(248,124,43,0.4)" : "var(--border)"}`,
                borderRadius: "8px",
                padding: "12px 20px",
                maxWidth: "480px",
                transition: "border-color 0.25s, background 0.25s",
                boxShadow: focused ? "0 0 0 3px rgba(248,124,43,0.08)" : "none",
              }}
            >
              <Search size={16} style={{ color: "var(--muted)", flexShrink: 0 }} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="Search documentation..."
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "var(--text)",
                  fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                  fontSize: "0.95rem",
                }}
              />
              {query ? (
                <button
                  onClick={() => setQuery("")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--muted)",
                    cursor: "pointer",
                    fontSize: "0.8rem",
                    padding: "2px 6px",
                    borderRadius: "3px",
                    fontFamily: "var(--font-space-mono), Space Mono, monospace",
                  }}
                >
                  ✕
                </button>
              ) : (
                <span
                  style={{
                    fontFamily: "var(--font-space-mono), Space Mono, monospace",
                    fontSize: "0.65rem",
                    color: "var(--muted)",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    whiteSpace: "nowrap" as const,
                  }}
                >
                  ⌘K
                </span>
              )}
            </motion.div>
          </div>
        </div>

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "60px 24px 100px" }}>
          {/* Quick Start — only show when not searching */}
          <AnimatePresence>
            {!query && (
              <motion.div
                key="quickstart"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: easing }}
                style={{ overflow: "hidden" }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-syne), Syne, sans-serif",
                    fontWeight: 800,
                    fontSize: "1.5rem",
                    marginBottom: "32px",
                  }}
                >
                  Quick Start
                </h2>
                <div
                  id="quick-start"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                    gap: "16px",
                    marginBottom: "64px",
                  }}
                >
                  {quickStart.map((item, i) => (
                    <motion.div
                      key={item.step}
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      style={{
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: "10px",
                        padding: "24px",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-space-mono), Space Mono, monospace",
                          fontSize: "0.62rem",
                          color: "var(--cyan)",
                          letterSpacing: "0.1em",
                          marginBottom: "12px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span>{item.step}</span>
                        <span
                          style={{
                            background: "rgba(248,124,43,0.08)",
                            border: "1px solid rgba(248,124,43,0.15)",
                            padding: "2px 8px",
                            borderRadius: "3px",
                          }}
                        >
                          {item.tag}
                        </span>
                      </div>
                      <h3
                        style={{
                          fontFamily: "var(--font-syne), Syne, sans-serif",
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          marginBottom: "8px",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.65 }}>
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Doc Categories */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px", flexWrap: "wrap", gap: "12px" }}>
            <h2
              style={{
                fontFamily: "var(--font-syne), Syne, sans-serif",
                fontWeight: 800,
                fontSize: "1.5rem",
              }}
            >
              {query ? `Results for "${query}"` : "All Documentation"}
            </h2>
            {query && (
              <span style={{ fontFamily: "var(--font-space-mono), Space Mono, monospace", fontSize: "0.7rem", color: "var(--muted)" }}>
                {filteredCategories.reduce((acc, c) => acc + c.links.length, 0)} result{filteredCategories.reduce((acc, c) => acc + c.links.length, 0) !== 1 ? "s" : ""}
              </span>
            )}
          </div>

          <AnimatePresence mode="wait">
            {filteredCategories.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ textAlign: "center", padding: "80px 24px", color: "var(--muted)" }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "16px" }}>🔍</div>
                <p style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 700, marginBottom: "8px" }}>
                  No results for &ldquo;{query}&rdquo;
                </p>
                <p style={{ fontSize: "0.88rem" }}>Try a different search term or browse all categories below.</p>
                <button
                  onClick={() => setQuery("")}
                  style={{
                    marginTop: "20px",
                    background: "none",
                    border: "1px solid var(--border)",
                    color: "var(--cyan)",
                    fontFamily: "var(--font-syne), Syne, sans-serif",
                    fontWeight: 600,
                    fontSize: "0.82rem",
                    padding: "9px 20px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Clear Search
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "24px",
                }}
              >
                {filteredCategories.map((cat, i) => (
                  <motion.div
                    key={cat.id}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    id={cat.id}
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: "10px",
                      padding: "28px",
                    }}
                  >
                    <div style={{ fontSize: "1.5rem", marginBottom: "12px" }}>{cat.icon}</div>
                    <h3
                      style={{
                        fontFamily: "var(--font-syne), Syne, sans-serif",
                        fontWeight: 700,
                        fontSize: "1rem",
                        marginBottom: "16px",
                      }}
                    >
                      {cat.title}
                    </h3>
                    <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                      {cat.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={`/docs#${link.anchor}`}
                            style={{
                              color: "var(--muted)",
                              textDecoration: "none",
                              fontSize: "0.85rem",
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                              transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                          >
                            <span style={{ color: "var(--cyan)", fontSize: "0.7rem" }}>→</span>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Coming soon notice */}
          {!query && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                marginTop: "64px",
                padding: "28px 32px",
                background: "rgba(196,154,42,0.04)",
                border: "1px solid rgba(196,154,42,0.15)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
              }}
            >
              <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>🚧</span>
              <div>
                <p style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 700, fontSize: "0.92rem", marginBottom: "6px" }}>
                  Full documentation arriving with platform launch
                </p>
                <p style={{ fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.65 }}>
                  We're building out the full doc library in parallel with the product.{" "}
                  <Link href="/early-access" style={{ color: "var(--cyan)", textDecoration: "none" }}>
                    Join early access
                  </Link>{" "}
                  to get direct onboarding support from the Inventra team.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
