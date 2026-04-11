"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Post } from "@/lib/blog-data";

const colorMap: Record<string, { bg: string; border: string; color: string }> = {
  cyan: { bg: "rgba(248,124,43,0.08)", border: "rgba(248,124,43,0.2)", color: "var(--cyan)" },
  amber: { bg: "rgba(196,154,42,0.08)", border: "rgba(196,154,42,0.2)", color: "var(--amber)" },
  violet: { bg: "rgba(39,97,146,0.08)", border: "rgba(39,97,146,0.2)", color: "#5b9fd4" },
};

const easing = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function BlogArticleClient({ post }: { post: Post }) {
  const c = colorMap[post.tagColor];

  return (
    <div style={{ maxWidth: "720px", margin: "0 auto", padding: "60px 24px 120px" }}>
      {/* Back */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: easing }}
      >
        <Link
          href="/blog"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            color: "var(--muted)",
            fontFamily: "var(--font-space-mono), Space Mono, monospace",
            fontSize: "0.72rem",
            letterSpacing: "0.08em",
            textDecoration: "none",
            marginBottom: "48px",
            transition: "color 0.2s",
          }}
        >
          ← Back to Blog
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.65, ease: easing, delay: 0.08 }}
      >
        <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px", flexWrap: "wrap" }}>
          <div
            style={{
              background: c.bg,
              border: `1px solid ${c.border}`,
              color: c.color,
              fontFamily: "var(--font-space-mono), Space Mono, monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              padding: "5px 12px",
              borderRadius: "2px",
            }}
          >
            {post.tag}
          </div>
          <span style={{ fontFamily: "var(--font-space-mono), Space Mono, monospace", fontSize: "0.68rem", color: "var(--muted)" }}>
            {post.date} · {post.readTime}
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            marginBottom: "24px",
          }}
        >
          {post.title}
        </h1>

        <p
          style={{
            color: "var(--text2)",
            fontSize: "1.1rem",
            fontWeight: 300,
            lineHeight: 1.75,
            marginBottom: "36px",
          }}
        >
          {post.excerpt}
        </p>

        {/* Author */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            paddingBottom: "40px",
            borderBottom: "1px solid var(--border)",
            marginBottom: "56px",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, var(--cyan), var(--violet))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-syne), Syne, sans-serif",
              fontWeight: 700,
              fontSize: "0.8rem",
              color: "var(--bg)",
              flexShrink: 0,
            }}
          >
            {post.author.initials}
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 700, fontSize: "0.9rem" }}>
              {post.author.name}
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--muted)", fontFamily: "var(--font-space-mono), Space Mono, monospace" }}>
              {post.author.role}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Body */}
      <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
        {post.body.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: easing, delay: i * 0.04 }}
          >
            {section.heading && (
              <h2
                style={{
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  letterSpacing: "-0.01em",
                  marginBottom: "14px",
                }}
              >
                {section.heading}
              </h2>
            )}

            {section.quote && (
              <blockquote
                style={{
                  borderLeft: "3px solid var(--cyan)",
                  paddingLeft: "24px",
                  margin: "8px 0",
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  lineHeight: 1.5,
                  color: "var(--text)",
                }}
              >
                {section.quote}
              </blockquote>
            )}

            {section.text && (
              <p style={{ fontSize: "1rem", color: "var(--text2)", lineHeight: 1.8 }}>
                {section.text}
              </p>
            )}

            {section.list && (
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px", marginTop: section.text ? "16px" : 0 }}>
                {section.list.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "0.95rem",
                      color: "var(--text2)",
                      lineHeight: 1.65,
                    }}
                  >
                    <span style={{ color: "var(--cyan)", marginTop: "4px", flexShrink: 0 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: easing }}
        style={{
          marginTop: "80px",
          padding: "40px",
          background: "rgba(248,124,43,0.04)",
          border: "1px solid rgba(248,124,43,0.15)",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-syne), Syne, sans-serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            marginBottom: "8px",
          }}
        >
          Ready to transform your inventory operations?
        </p>
        <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "24px" }}>
          Join the first 500 businesses on Inventra — and lock in founder pricing.
        </p>
        <Link
          href="/early-access"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "var(--cyan)",
            color: "#050810",
            fontFamily: "var(--font-syne), Syne, sans-serif",
            fontWeight: 700,
            fontSize: "0.88rem",
            padding: "13px 28px",
            borderRadius: "4px",
            textDecoration: "none",
            letterSpacing: "0.03em",
          }}
        >
          Request Early Access →
        </Link>
      </motion.div>

      {/* Back link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        style={{ marginTop: "48px", textAlign: "center" }}
      >
        <Link
          href="/blog"
          style={{
            color: "var(--muted)",
            fontFamily: "var(--font-space-mono), Space Mono, monospace",
            fontSize: "0.75rem",
            textDecoration: "none",
            letterSpacing: "0.06em",
          }}
        >
          ← All Articles
        </Link>
      </motion.div>
    </div>
  );
}
