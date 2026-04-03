import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Blog — Inventra",
  description: "Insights on African commerce, inventory intelligence, and the future of business operations.",
};

const featured = {
  tag: "AI & Commerce",
  tagColor: "cyan",
  date: "March 28, 2026",
  readTime: "8 min read",
  title: "Why 94% of African SMEs Are Losing Money to Invisible Inventory Problems",
  excerpt:
    "A deep dive into the data behind sub-Saharan Africa's ₦2.8 trillion annual inventory loss — and what the businesses that are winning are doing differently.",
  author: { initials: "TI", name: "Tunde Ifeanyi", role: "CEO, Inventra" },
};

const posts = [
  {
    tag: "Product",
    tagColor: "cyan",
    date: "March 22, 2026",
    readTime: "5 min",
    title: "Introducing Inventra AR 2.0: Audit a Shelf in Under 3 Seconds",
    excerpt: "Our biggest AR update yet — real-time multi-SKU recognition, offline sync improvements, and a redesigned scan interface.",
    author: { initials: "AF", name: "Amina Farouq", role: "Head of Product" },
  },
  {
    tag: "Industry",
    tagColor: "amber",
    date: "March 15, 2026",
    readTime: "6 min",
    title: "The Rise of Phygital Commerce in West Africa: What It Means for Inventory",
    excerpt: "How the blending of physical and digital channels is reshaping what businesses need from their operations platforms.",
    author: { initials: "CO", name: "Chisom Obi", role: "Head of Research" },
  },
  {
    tag: "Case Study",
    tagColor: "violet",
    date: "March 10, 2026",
    readTime: "7 min",
    title: "How PharmaNet Cut Stock Reconciliation from 2 Days to 10 Minutes",
    excerpt: "Ibrahim Balogun's team manages 4 pharmacies across Abuja. This is how Inventra AR transformed their operations.",
    author: { initials: "IB", name: "Ibrahim Balogun", role: "Operations Director, PharmaNet" },
  },
  {
    tag: "AI & Commerce",
    tagColor: "cyan",
    date: "March 5, 2026",
    readTime: "9 min",
    title: "Building an AI That Actually Understands African Trade Patterns",
    excerpt: "Western AI models are trained on Western markets. Here's what we learned building demand forecasting from the ground up for Africa.",
    author: { initials: "TI", name: "Tunde Ifeanyi", role: "CEO, Inventra" },
  },
  {
    tag: "Industry",
    tagColor: "amber",
    date: "February 28, 2026",
    readTime: "5 min",
    title: "Agribusiness in Africa: Why Post-Harvest Loss is a Solvable Problem",
    excerpt: "Up to 40% of harvests are lost before they reach the consumer. Predictive inventory and supply chain AI are changing that math.",
    author: { initials: "CO", name: "Chisom Obi", role: "Head of Research" },
  },
  {
    tag: "Product",
    tagColor: "cyan",
    date: "February 20, 2026",
    readTime: "4 min",
    title: "Natural Language Queries: Ask Inventra Anything in English or Pidgin",
    excerpt: "\"What's running low in Ikeja?\" — type it, say it, get an answer in seconds. Here's how we built Pidgin support into our NLP engine.",
    author: { initials: "AF", name: "Amina Farouq", role: "Head of Product" },
  },
];

const colorMap: Record<string, { bg: string; border: string; color: string }> = {
  cyan: { bg: "rgba(0,229,255,0.08)", border: "rgba(0,229,255,0.2)", color: "var(--cyan)" },
  amber: { bg: "rgba(255,179,0,0.08)", border: "rgba(255,179,0,0.2)", color: "var(--amber)" },
  violet: { bg: "rgba(124,77,255,0.08)", border: "rgba(124,77,255,0.2)", color: "#a67cff" },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px", background: "var(--bg)", minHeight: "100vh" }}>
        {/* Header */}
        <div style={{ padding: "60px 24px 48px", borderBottom: "1px solid var(--border)" }}>
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
                marginBottom: "20px",
              }}
            >
              ◎ Inventra Blog
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "12px" }}>
              Intelligence for African Commerce
            </h1>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem", fontWeight: 300, maxWidth: "520px" }}>
              Product updates, industry research, case studies, and the future of commerce on the continent.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "60px 24px 100px" }}>
          {/* Featured post */}
          <div
            style={{
              background: "rgba(0,229,255,0.03)",
              border: "1px solid rgba(0,229,255,0.12)",
              borderRadius: "14px",
              padding: "48px",
              marginBottom: "64px",
              position: "relative",
              overflow: "hidden",
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
                  background: colorMap[featured.tagColor].bg,
                  border: `1px solid ${colorMap[featured.tagColor].border}`,
                  color: colorMap[featured.tagColor].color,
                  fontFamily: "var(--font-space-mono), Space Mono, monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "5px 12px",
                  borderRadius: "2px",
                }}
              >
                Featured · {featured.tag}
              </div>
              <span style={{ fontFamily: "var(--font-space-mono), Space Mono, monospace", fontSize: "0.68rem", color: "var(--muted)" }}>
                {featured.date} · {featured.readTime}
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "16px", maxWidth: "680px" }}>
              {featured.title}
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.75, fontSize: "1rem", maxWidth: "640px", marginBottom: "28px" }}>
              {featured.excerpt}
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
                  {featured.author.initials}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 700, fontSize: "0.86rem" }}>
                    {featured.author.name}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "var(--muted)", fontFamily: "var(--font-space-mono), Space Mono, monospace" }}>
                    {featured.author.role}
                  </div>
                </div>
              </div>
              <Link
                href="/blog"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--cyan)",
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  textDecoration: "none",
                }}
              >
                Read Article →
              </Link>
            </div>
          </div>

          {/* Post grid */}
          <h2 style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 800, fontSize: "1.3rem", marginBottom: "32px" }}>
            Latest Posts
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {posts.map((post) => {
              const c = colorMap[post.tagColor];
              return (
                <div
                  key={post.title}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    transition: "border-color 0.3s, transform 0.3s",
                    cursor: "pointer",
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
                        textTransform: "uppercase",
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
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
