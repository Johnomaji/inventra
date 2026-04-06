"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { featuredPost, regularPosts } from "@/lib/blog-data";

const colorMap: Record<string, { bg: string; border: string; color: string }> = {
  cyan: { bg: "rgba(0,229,255,0.08)", border: "rgba(0,229,255,0.2)", color: "var(--cyan)" },
  amber: { bg: "rgba(255,179,0,0.08)", border: "rgba(255,179,0,0.2)", color: "var(--amber)" },
  violet: { bg: "rgba(124,77,255,0.08)", border: "rgba(124,77,255,0.2)", color: "#a67cff" },
};

const easing = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: easing, delay: i * 0.08 },
  }),
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px", background: "var(--bg)", minHeight: "100vh" }}>
        {/* Header */}
        <div style={{ padding: "60px 24px 48px", borderBottom: "1px solid var(--border)" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easing }}
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
                textTransform: "uppercase" as const,
                padding: "7px 16px",
                borderRadius: "2px",
                marginBottom: "20px",
              }}
            >
              ◎ Inventra Blog
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: easing, delay: 0.08 }}
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "12px" }}
            >
              Intelligence for African Commerce
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: easing, delay: 0.16 }}
              style={{ color: "var(--muted)", fontSize: "1.05rem", fontWeight: 300, maxWidth: "520px" }}
            >
              Product updates, industry research, case studies, and the future of commerce on the continent.
            </motion.p>
          </div>
        </div>

        <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "60px 24px 100px" }}>
          {/* Featured post */}
          <motion.div
            initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.65, ease: easing, delay: 0.22 }}
          >
            <Link
              href={`/blog/${featuredPost.slug}`}
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              <motion.div
                whileHover={{ scale: 1.005, boxShadow: "0 0 0 1px rgba(0,229,255,0.25), 0 20px 60px rgba(0,0,0,0.3)" }}
                transition={{ duration: 0.25 }}
                style={{
                  background: "rgba(0,229,255,0.03)",
                  border: "1px solid rgba(0,229,255,0.12)",
                  borderRadius: "14px",
                  padding: "48px",
                  marginBottom: "64px",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "linear-gradient(90deg, var(--cyan), var(--violet))",
                  }}
                />
                <div style={{ display: "flex", gap: "12px", marginBottom: "20px", alignItems: "center" }}>
                  <div
                    style={{
                      background: colorMap[featuredPost.tagColor].bg,
                      border: `1px solid ${colorMap[featuredPost.tagColor].border}`,
                      color: colorMap[featuredPost.tagColor].color,
                      fontFamily: "var(--font-space-mono), Space Mono, monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase" as const,
                      padding: "5px 12px",
                      borderRadius: "2px",
                    }}
                  >
                    Featured · {featuredPost.tag}
                  </div>
                  <span style={{ fontFamily: "var(--font-space-mono), Space Mono, monospace", fontSize: "0.68rem", color: "var(--muted)" }}>
                    {featuredPost.date} · {featuredPost.readTime}
                  </span>
                </div>
                <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "16px", maxWidth: "680px" }}>
                  {featuredPost.title}
                </h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.75, fontSize: "1rem", maxWidth: "640px", marginBottom: "28px" }}>
                  {featuredPost.excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, var(--cyan), var(--violet))",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-syne), Syne, sans-serif",
                        fontWeight: 700,
                        fontSize: "0.72rem",
                        color: "var(--bg)",
                      }}
                    >
                      {featuredPost.author.initials}
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 700, fontSize: "0.86rem" }}>
                        {featuredPost.author.name}
                      </div>
                      <div style={{ fontSize: "0.72rem", color: "var(--muted)", fontFamily: "var(--font-space-mono), Space Mono, monospace" }}>
                        {featuredPost.author.role}
                      </div>
                    </div>
                  </div>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "var(--cyan)",
                      fontFamily: "var(--font-syne), Syne, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.88rem",
                    }}
                  >
                    Read Article →
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Post grid */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easing }}
            style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 800, fontSize: "1.3rem", marginBottom: "32px" }}
          >
            Latest Posts
          </motion.h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {regularPosts.map((post, i) => {
              const c = colorMap[post.tagColor];
              return (
                <motion.div
                  key={post.slug}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.25)" }}
                  transition={{ duration: 0.25 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}
                  >
                    <div
                      style={{
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: "12px",
                        padding: "28px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "14px",
                        cursor: "pointer",
                        height: "100%",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div
                          style={{
                            background: c.bg,
                            border: `1px solid ${c.border}`,
                            color: c.color,
                            fontFamily: "var(--font-space-mono), Space Mono, monospace",
                            fontSize: "0.62rem",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase" as const,
                            padding: "4px 10px",
                            borderRadius: "2px",
                          }}
                        >
                          {post.tag}
                        </div>
                        <span style={{ fontFamily: "var(--font-space-mono), Space Mono, monospace", fontSize: "0.62rem", color: "var(--muted)" }}>
                          {post.readTime}
                        </span>
                      </div>
                      <h3 style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 700, fontSize: "1rem", lineHeight: 1.3 }}>
                        {post.title}
                      </h3>
                      <p style={{ fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.7, flex: 1 }}>
                        {post.excerpt}
                      </p>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "12px", borderTop: "1px solid var(--border)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <div
                            style={{
                              width: "28px",
                              height: "28px",
                              borderRadius: "50%",
                              background: "linear-gradient(135deg, var(--cyan), var(--violet))",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontFamily: "var(--font-syne), Syne, sans-serif",
                              fontWeight: 700,
                              fontSize: "0.6rem",
                              color: "var(--bg)",
                            }}
                          >
                            {post.author.initials}
                          </div>
                          <span style={{ fontSize: "0.78rem", fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 600 }}>
                            {post.author.name}
                          </span>
                        </div>
                        <span style={{ fontFamily: "var(--font-space-mono), Space Mono, monospace", fontSize: "0.62rem", color: "var(--muted)" }}>
                          {post.date}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
