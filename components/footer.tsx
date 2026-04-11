"use client";

import Link from "next/link";

const cols = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/#product" },
      { label: "How It Works", href: "/#how" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Use Cases", href: "/#use-cases" },
      { label: "Docs", href: "/docs" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "72px 24px 40px",
        }}
      >
        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "48px",
            marginBottom: "64px",
          }}
        >
          {/* Brand column */}
          <div>
            {/* Logo */}
            <Link
              href="/"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/inventralogo.svg"
                alt="Inventra"
                style={{ height: "32px", width: "auto", display: "block" }}
                className="nav-logo"
              />
            </Link>

            <p
              style={{
                fontSize: "0.84rem",
                color: "var(--muted)",
                lineHeight: 1.75,
                maxWidth: "260px",
                marginBottom: "28px",
              }}
            >
              The Intelligent OS for African Commerce. AI, AR, and VR-powered
              inventory intelligence built for the continent.
            </p>

            {/* Status indicator */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(248,124,43,0.06)",
                border: "1px solid rgba(248,124,43,0.15)",
                borderRadius: "100px",
                padding: "7px 14px",
                marginBottom: "24px",
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
              <span
                style={{
                  fontFamily:
                    "var(--font-space-mono), Space Mono, monospace",
                  fontSize: "0.6rem",
                  color: "var(--cyan)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Early Access Open
              </span>
            </div>

            {/* Mini stats */}
            <div style={{ display: "flex", gap: "24px" }}>
              {[
                { val: "500+", label: "Beta users" },
                { val: "94%", label: "Accuracy" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-syne), Syne, sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "var(--text)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {s.val}
                  </div>
                  <div
                    style={{
                      fontFamily:
                        "var(--font-space-mono), Space Mono, monospace",
                      fontSize: "0.58rem",
                      color: "var(--muted)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginTop: "2px",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <div
                style={{
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  color: "var(--text)",
                  marginBottom: "20px",
                  letterSpacing: "0.04em",
                }}
              >
                {col.heading}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {col.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      color: "var(--muted)",
                      textDecoration: "none",
                      fontSize: "0.84rem",
                      transition: "color 0.2s",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--text)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--muted)")
                    }
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "0.74rem",
              color: "var(--muted)",
              fontFamily:
                "var(--font-space-mono), Space Mono, monospace",
            }}
          >
            © 2026 Inventra Technologies Ltd. Built for{" "}
            <span style={{ color: "var(--cyan)" }}>Africa</span>.
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            {["AI", "AR", "VR", "AFRICA"].map((tag, i) => (
              <span
                key={tag}
                style={{
                  fontSize: "0.65rem",
                  color: i === 3 ? "var(--cyan)" : "var(--muted)",
                  fontFamily:
                    "var(--font-space-mono), Space Mono, monospace",
                  letterSpacing: "0.1em",
                }}
              >
                {tag}
                {i < 3 && (
                  <span
                    style={{
                      marginLeft: "16px",
                      color: "var(--border-strong)",
                    }}
                  >
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
