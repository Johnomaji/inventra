"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { label: "Features", href: "/#product" },
  { label: "How It Works", href: "/#how" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Use Cases", href: "/#use-cases" },
];

export function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY || y < 80);
      setLastY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <>
      <nav
        style={{
          transform: visible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "18px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "var(--nav-bg)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-syne), Syne, sans-serif",
            fontWeight: 800,
            fontSize: "1.4rem",
            letterSpacing: "-0.01em",
            color: "var(--text)",
            textDecoration: "none",
          }}
        >
          Inven<span style={{ color: "var(--cyan)" }}>tra</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                fontSize: "0.88rem",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/early-access"
            style={{
              background: "var(--cyan)",
              color: "var(--bg)",
              fontFamily: "var(--font-syne), Syne, sans-serif",
              fontWeight: 700,
              fontSize: "0.82rem",
              padding: "10px 22px",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
              textDecoration: "none",
              display: "inline-block",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--cyan)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Get Early Access
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-2 text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: "65px",
            left: 0,
            right: 0,
            zIndex: 99,
            background: "var(--mobile-menu-bg)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/early-access"
            onClick={() => setMobileOpen(false)}
            style={{
              background: "var(--cyan)",
              color: "var(--bg)",
              fontFamily: "var(--font-syne), Syne, sans-serif",
              fontWeight: 700,
              fontSize: "0.85rem",
              padding: "12px 20px",
              textDecoration: "none",
              display: "inline-block",
              textAlign: "center",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Get Early Access
          </Link>
        </div>
      )}
    </>
  );
}
