import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Careers — Inventra",
  description: "Join the team building the intelligent OS for African commerce. Open roles at Inventra.",
};

const openRoles = [
  {
    dept: "Engineering",
    deptColor: "cyan",
    roles: [
      { title: "Senior Full-Stack Engineer", location: "Lagos, Nigeria (Hybrid)", type: "Full-time", level: "Senior" },
      { title: "Machine Learning Engineer — Demand Forecasting", location: "Remote (Africa)", type: "Full-time", level: "Senior" },
      { title: "iOS / Android Engineer (AR)", location: "Lagos, Nigeria", type: "Full-time", level: "Mid–Senior" },
      { title: "DevOps / Platform Engineer", location: "Remote (Africa)", type: "Full-time", level: "Mid" },
    ],
  },
  {
    dept: "Product & Design",
    deptColor: "violet",
    roles: [
      { title: "Product Manager — AI Features", location: "Lagos, Nigeria", type: "Full-time", level: "Senior" },
      { title: "Senior UX/UI Designer", location: "Lagos, Nigeria (Hybrid)", type: "Full-time", level: "Senior" },
    ],
  },
  {
    dept: "Growth & Commercial",
    deptColor: "amber",
    roles: [
      { title: "Head of Partnerships — West Africa", location: "Lagos, Nigeria", type: "Full-time", level: "Lead" },
      { title: "Account Executive — Enterprise", location: "Lagos / Abuja", type: "Full-time", level: "Mid–Senior" },
      { title: "Growth Marketing Manager", location: "Remote (Africa)", type: "Full-time", level: "Mid" },
    ],
  },
  {
    dept: "Operations",
    deptColor: "cyan",
    roles: [
      { title: "Customer Success Manager", location: "Lagos, Nigeria", type: "Full-time", level: "Mid" },
      { title: "Technical Support Specialist", location: "Remote (Africa)", type: "Full-time", level: "Junior–Mid" },
    ],
  },
];

const values = [
  { icon: "🌍", title: "Africa First", desc: "Everything we build is designed for African realities — infrastructure, currencies, culture, and trade patterns." },
  { icon: "🔬", title: "Radical Curiosity", desc: "We ask hard questions and challenge existing answers. The best idea wins, regardless of seniority." },
  { icon: "🚀", title: "Move with Urgency", desc: "We're building a new category. Speed and execution are survival skills, not just virtues." },
  { icon: "🤝", title: "Trust as Default", desc: "We hire adults. Autonomy, ownership, and accountability are the three pillars of how we work." },
];

const colorMap: Record<string, { bg: string; border: string; color: string }> = {
  cyan: { bg: "rgba(0,229,255,0.08)", border: "rgba(0,229,255,0.2)", color: "var(--cyan)" },
  amber: { bg: "rgba(255,179,0,0.08)", border: "rgba(255,179,0,0.2)", color: "var(--amber)" },
  violet: { bg: "rgba(124,77,255,0.08)", border: "rgba(124,77,255,0.2)", color: "#a67cff" },
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px", background: "var(--bg)", minHeight: "100vh" }}>
        {/* Hero */}
        <section
          style={{
            padding: "80px 24px 60px",
            textAlign: "center",
            borderBottom: "1px solid var(--border)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "700px",
              height: "500px",
              background: "radial-gradient(ellipse, rgba(124,77,255,0.09) 0%, transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", zIndex: 2, maxWidth: "680px", margin: "0 auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(124,77,255,0.08)",
                border: "1px solid rgba(124,77,255,0.2)",
                color: "#a67cff",
                fontFamily: "var(--font-space-mono), Space Mono, monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "7px 16px",
                borderRadius: "2px",
                marginBottom: "24px",
              }}
            >
              ◈ We&apos;re Hiring
            </div>
            <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "20px" }}>
              Build the Future of{" "}
              <em style={{ fontStyle: "normal", color: "var(--cyan)" }}>African Commerce</em>
            </h1>
            <p style={{ color: "var(--muted)", fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.75, marginBottom: "36px" }}>
              We&apos;re a small team with enormous ambition — building the AI+AR+VR platform that redefines how Africa manages commerce. Join us if you want your work to matter at continental scale.
            </p>
            <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { val: "43", label: "Team Members" },
                { val: "7", label: "Countries" },
                { val: "11", label: "Open Roles" },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 800, fontSize: "2rem", color: "var(--cyan)" }}>
                    {stat.val}
                  </div>
                  <div style={{ fontFamily: "var(--font-space-mono), Space Mono, monospace", fontSize: "0.68rem", color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "60px 24px 100px" }}>
          {/* Values */}
          <h2 style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 800, fontSize: "1.6rem", marginBottom: "32px" }}>
            How We Work
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "20px",
              marginBottom: "72px",
            }}
          >
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  padding: "28px",
                }}
              >
                <div style={{ fontSize: "1.6rem", marginBottom: "14px" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 700, fontSize: "0.95rem", marginBottom: "8px" }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Open roles */}
          <h2 style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 800, fontSize: "1.6rem", marginBottom: "8px" }}>
            Open Roles
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem", marginBottom: "40px" }}>
            All roles include competitive salary, equity, health coverage, and a remote-first culture.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {openRoles.map((dept) => {
              const c = colorMap[dept.deptColor];
              return (
                <div key={dept.dept}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                    <div
                      style={{
                        background: c.bg,
                        border: `1px solid ${c.border}`,
                        color: c.color,
                        fontFamily: "var(--font-space-mono), Space Mono, monospace",
                        fontSize: "0.65rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "5px 12px",
                        borderRadius: "2px",
                      }}
                    >
                      {dept.dept}
                    </div>
                    <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {dept.roles.map((role) => (
                      <div
                        key={role.title}
                        style={{
                          background: "var(--surface)",
                          border: "1px solid var(--border)",
                          borderRadius: "10px",
                          padding: "20px 24px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          flexWrap: "wrap",
                          gap: "12px",
                          transition: "border-color 0.2s",
                        }}
                      >
                        <div>
                          <h3 style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 700, fontSize: "0.95rem", marginBottom: "6px" }}>
                            {role.title}
                          </h3>
                          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                            <span style={{ fontFamily: "var(--font-space-mono), Space Mono, monospace", fontSize: "0.68rem", color: "var(--muted)" }}>
                              📍 {role.location}
                            </span>
                            <span style={{ fontFamily: "var(--font-space-mono), Space Mono, monospace", fontSize: "0.68rem", color: "var(--muted)" }}>
                              ⏱ {role.type}
                            </span>
                            <span style={{ fontFamily: "var(--font-space-mono), Space Mono, monospace", fontSize: "0.68rem", color: "var(--muted)" }}>
                              ◈ {role.level}
                            </span>
                          </div>
                        </div>
                        <Link
                          href="/contact"
                          style={{
                            background: "var(--cyan)",
                            color: "var(--bg)",
                            fontFamily: "var(--font-syne), Syne, sans-serif",
                            fontWeight: 700,
                            fontSize: "0.78rem",
                            padding: "10px 20px",
                            textDecoration: "none",
                            borderRadius: "4px",
                            letterSpacing: "0.04em",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Apply Now →
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: "72px",
              background: "rgba(0,229,255,0.03)",
              border: "1px solid rgba(0,229,255,0.12)",
              borderRadius: "14px",
              padding: "48px",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 800, fontSize: "1.5rem", marginBottom: "12px" }}>
              Don&apos;t see your role?
            </h2>
            <p style={{ color: "var(--muted)", marginBottom: "28px", maxWidth: "480px", margin: "0 auto 28px", lineHeight: 1.7 }}>
              We&apos;re always looking for exceptional people. Send us your CV and tell us why you&apos;d like to join Inventra.
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                background: "var(--cyan)",
                color: "var(--bg)",
                fontFamily: "var(--font-syne), Syne, sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                padding: "14px 32px",
                textDecoration: "none",
                borderRadius: "6px",
              }}
            >
              Send an Open Application →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
