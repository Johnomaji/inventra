"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer
      style={{
        padding: "48px 24px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-syne), Syne, sans-serif",
            fontWeight: 800,
            fontSize: "1.2rem",
          }}
        >
          Inven<span style={{ color: "var(--cyan)" }}>tra</span>
        </div>

        <div style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
          {[
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
            { label: "Docs", href: "/docs" },
            { label: "Blog", href: "/blog" },
            { label: "Careers", href: "/careers" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                fontSize: "0.84rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div
          style={{
            fontSize: "0.75rem",
            color: "var(--muted)",
            fontFamily: "var(--font-space-mono), Space Mono, monospace",
          }}
        >
          © 2026 Inventra Technologies Ltd. Built for{" "}
          <span style={{ color: "var(--cyan)" }}>Africa</span>.
        </div>
      </div>
    </footer>
  );
}
