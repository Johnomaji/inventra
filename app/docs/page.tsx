import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Documentation — Inventra",
  description: "Get started with Inventra. Guides, API references, and tutorials.",
};

const quickStart = [
  { step: "01", title: "Create Your Account", desc: "Sign up with your business email and verify your account. Takes under 2 minutes.", tag: "5 min" },
  { step: "02", title: "Connect Your Data", desc: "Import your existing inventory via CSV, connect your POS system, or start fresh with our quick-add tool.", tag: "10 min" },
  { step: "03", title: "Configure AI Settings", desc: "Set your demand thresholds, reorder preferences, and AI notification settings.", tag: "5 min" },
  { step: "04", title: "Go Live", desc: "Activate Inventra Intelligence and start receiving real-time alerts and forecasts immediately.", tag: "Instant" },
];

const docCategories = [
  {
    icon: "🚀",
    title: "Getting Started",
    links: ["Quick Start Guide", "Account Setup", "Importing Inventory", "User Management", "Mobile App Setup"],
  },
  {
    icon: "🧠",
    title: "Inventra Intelligence (AI)",
    links: ["Demand Forecasting Overview", "Configuring Alert Thresholds", "Anomaly Detection", "Natural Language Queries", "AI Model Accuracy"],
  },
  {
    icon: "👓",
    title: "Inventra AR",
    links: ["AR Mode Setup", "Supported Devices", "Shelf Scanning Tutorial", "Barcode & QR Integration", "Offline AR Sync"],
  },
  {
    icon: "🌐",
    title: "Inventra VR Hub",
    links: ["VR Dashboard Overview", "Multi-Location Setup", "Headset Compatibility", "Desktop VR Mode", "Spatial KPI Panels"],
  },
  {
    icon: "📡",
    title: "Integrations & API",
    links: ["REST API Reference", "Webhooks", "POS Integrations", "ERP Connectors", "Supplier Network API"],
  },
  {
    icon: "💰",
    title: "Billing & Account",
    links: ["Subscription Plans", "Upgrading & Downgrading", "Invoice Management", "Multi-currency Payments", "Enterprise Agreements"],
  },
];

export default function DocsPage() {
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
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
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
                marginBottom: "24px",
              }}
            >
              Documentation
            </div>
            <h1
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              Build with Inventra
            </h1>
            <p style={{ color: "var(--muted)", fontSize: "1.1rem", fontWeight: 300, maxWidth: "560px" }}>
              Everything you need to integrate, configure, and master the
              Inventra platform — from quick starts to deep API dives.
            </p>

            {/* Search bar placeholder */}
            <div
              style={{
                marginTop: "32px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "14px 20px",
                maxWidth: "480px",
                cursor: "text",
              }}
            >
              <span style={{ color: "var(--muted)", fontSize: "1rem" }}>🔍</span>
              <span style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
                Search documentation...
              </span>
              <span
                style={{
                  marginLeft: "auto",
                  fontFamily: "var(--font-space-mono), Space Mono, monospace",
                  fontSize: "0.65rem",
                  color: "var(--muted)",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  padding: "3px 8px",
                  borderRadius: "4px",
                }}
              >
                ⌘K
              </span>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "60px 24px 100px" }}>
          {/* Quick Start */}
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
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "16px",
              marginBottom: "64px",
            }}
          >
            {quickStart.map((item) => (
              <div
                key={item.step}
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
                      background: "rgba(0,229,255,0.08)",
                      border: "1px solid rgba(0,229,255,0.15)",
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
              </div>
            ))}
          </div>

          {/* Doc Categories */}
          <h2
            style={{
              fontFamily: "var(--font-syne), Syne, sans-serif",
              fontWeight: 800,
              fontSize: "1.5rem",
              marginBottom: "32px",
            }}
          >
            All Documentation
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {docCategories.map((cat) => (
              <div
                key={cat.title}
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
                    <li key={link}>
                      <Link
                        href="/docs"
                        style={{
                          color: "var(--muted)",
                          textDecoration: "none",
                          fontSize: "0.85rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          transition: "color 0.2s",
                        }}
                      >
                        <span style={{ color: "var(--cyan)", fontSize: "0.7rem" }}>→</span>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />

    </>
  );
}
