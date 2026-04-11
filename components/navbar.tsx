"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Use Cases", href: "/#use-cases" },
];

export function Navbar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY || y < 80);
      setScrolled(y > 20);
      setLastY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  // Scroll lock when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Active section tracking via intersection observer
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("/#", ""));
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <>
      <nav
        className="px-4 md:px-10"
        style={{
          transform: visible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 100,
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          boxShadow: scrolled ? "0 1px 0 var(--border)" : "none",
          boxSizing: "border-box",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/inventralogo.svg"
            alt="Inventra"
            style={{
              height: "36px",
              width: "auto",
              display: "block",
            }}
            className="nav-logo"
          />
        </Link>

        {/* Desktop nav — pill container */}
        <div
          className="hidden md:flex"
          style={{
            alignItems: "center",
            gap: "2px",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "100px",
            padding: "4px",
          }}
        >
          {navLinks.map((link) => {
            const isActive = link.href.startsWith("/#")
              ? link.href === `/#${activeSection}`
              : pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: isActive ? "var(--text)" : "var(--muted)",
                  background: isActive ? "var(--surface2)" : "transparent",
                  textDecoration: "none",
                  fontSize: "0.82rem",
                  fontWeight: isActive ? 600 : 500,
                  padding: "7px 18px",
                  borderRadius: "100px",
                  transition: "all 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--text)";
                  e.currentTarget.style.background = "var(--surface2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isActive ? "var(--text)" : "var(--muted)";
                  e.currentTarget.style.background = isActive ? "var(--surface2)" : "transparent";
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right side — shrink:0 so it is never pushed off-screen */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <ThemeToggle />

          {/* CTA — desktop only */}
          <Link
            href="/early-access"
            className="hidden md:inline-flex"
            style={{
              background: "var(--cyan)",
              color: "var(--bg)",
              fontFamily: "var(--font-syne), Syne, sans-serif",
              fontWeight: 700,
              fontSize: "0.8rem",
              padding: "9px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              alignItems: "center",
              gap: "6px",
              letterSpacing: "0.03em",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.88";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get Early Access →
          </Link>

          {/* Mobile hamburger */}
          <button
            className="flex md:hidden items-center justify-center"
            style={{
              background: "transparent",
              border: "none",
              color: "var(--muted)",
              cursor: "pointer",
              minWidth: "44px",
              minHeight: "44px",
              borderRadius: "8px",
              padding: 0,
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="mobile-menu-enter"
          style={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            width: "100%",
            zIndex: 99,
            background: "var(--mobile-menu-bg)",
            backdropFilter: "blur(24px)",
            borderBottom: "1px solid var(--border)",
            padding: "20px 16px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            boxSizing: "border-box",
          }}
        >
          {navLinks.map((link) => {
            const isActive = link.href.startsWith("/#")
              ? link.href === `/#${activeSection}`
              : pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: isActive ? "var(--text)" : "var(--muted)",
                  background: isActive ? "var(--surface)" : "transparent",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: isActive ? 600 : 500,
                  padding: "12px 16px",
                  borderRadius: "10px",
                  transition: "all 0.2s",
                  display: "block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--text)";
                  e.currentTarget.style.background = "var(--surface)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isActive ? "var(--text)" : "var(--muted)";
                  e.currentTarget.style.background = isActive ? "var(--surface)" : "transparent";
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <div style={{ paddingTop: "12px", borderTop: "1px solid var(--border)", marginTop: "8px" }}>
            <Link
              href="/early-access"
              onClick={() => setMobileOpen(false)}
              style={{
                background: "var(--cyan)",
                color: "var(--bg)",
                fontFamily: "var(--font-syne), Syne, sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                padding: "13px 20px",
                textDecoration: "none",
                display: "block",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              Get Early Access →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
