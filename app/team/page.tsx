import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Team — Inventra",
  description: "Meet the people building the intelligent OS for African commerce.",
};

const team = [
  {
    name: "Philip A. Adikpe",
    role: "Chief Executive Officer",
    roleShort: "CEO",
    roleColor: "cyan",
    image: "/team1.jpg",
    bio: "Philip leads Inventra's vision to redefine commerce infrastructure across Africa. With a background spanning enterprise technology and emerging markets, he drives strategy, partnerships, and the mission to give every African business world-class intelligence.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Okpe Bernard",
    role: "Chief Technology Officer",
    roleShort: "CTO",
    roleColor: "violet",
    image: "/team2.jpg",
    bio: "Okpe architects the AI, AR, and VR systems at the heart of Inventra. He leads engineering with a relentless focus on scalability and real-world performance — building technology that works for African infrastructure, not against it.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Doris Ahua",
    role: "Chief Operations Officer",
    roleShort: "COO",
    roleColor: "green",
    image: "/team3.jpg",
    bio: "Doris oversees the operational backbone of Inventra, ensuring that every product, process, and partnership runs with precision. With deep roots in African business ecosystems, she bridges strategy and execution at every layer of the company.",
    linkedin: "#",
    twitter: "#",
  },
  // {
  //   name: "Emeka Osei",
  //   role: "Chief Product Officer",
  //   roleShort: "CPO",
  //   roleColor: "rose",
  //   image: "/team4.jpg",
  //   bio: "Emeka shapes the product experience that merchants and partners interact with every day. He brings a user-first philosophy to everything Inventra ships — obsessing over clarity, speed, and value for businesses across the continent.",
  //   linkedin: "#",
  //   twitter: "#",
  // },
];

const colorMap: Record<string, { bg: string; border: string; color: string; glow: string }> = {
  cyan: {
    bg: "rgba(248,124,43,0.08)",
    border: "rgba(248,124,43,0.25)",
    color: "var(--cyan)",
    glow: "rgba(248,124,43,0.15)",
  },
  violet: {
    bg: "rgba(39,97,146,0.08)",
    border: "rgba(39,97,146,0.25)",
    color: "#5b9fd4",
    glow: "rgba(39,97,146,0.15)",
  },
  green: {
    bg: "rgba(34,197,94,0.08)",
    border: "rgba(34,197,94,0.25)",
    color: "#4ade80",
    glow: "rgba(34,197,94,0.15)",
  },
  rose: {
    bg: "rgba(244,63,94,0.08)",
    border: "rgba(244,63,94,0.25)",
    color: "#fb7185",
    glow: "rgba(244,63,94,0.15)",
  },
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px", background: "var(--bg)", minHeight: "100vh" }}>
        <style>{`
          .team-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }
          .team-card {
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 16px;
            overflow: hidden;
            transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
            position: relative;
          }
          .team-card:hover {
            transform: translateY(-4px);
          }
          .team-card-cyan:hover {
            border-color: rgba(248,124,43,0.35);
            box-shadow: 0 20px 60px rgba(248,124,43,0.1);
          }
          .team-card-violet:hover {
            border-color: rgba(39,97,146,0.4);
            box-shadow: 0 20px 60px rgba(39,97,146,0.12);
          }
          .team-card-green:hover {
            border-color: rgba(34,197,94,0.35);
            box-shadow: 0 20px 60px rgba(34,197,94,0.1);
          }
          .team-card-rose:hover {
            border-color: rgba(244,63,94,0.35);
            box-shadow: 0 20px 60px rgba(244,63,94,0.1);
          }
          .team-image-wrap {
            position: relative;
            width: 100%;
            aspect-ratio: 4 / 4.5;
            overflow: hidden;
          }
          .team-image-wrap img {
            object-fit: cover;
            transition: transform 0.5s ease;
          }
          .team-card:hover .team-image-wrap img {
            transform: scale(1.03);
          }
          .team-image-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 55%;
            pointer-events: none;
          }
          .team-body {
            padding: 28px 30px 32px;
          }
          .team-social-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            border-radius: 8px;
            border: 1px solid var(--border);
            background: var(--surface);
            transition: border-color 0.2s, background 0.2s;
            text-decoration: none;
            color: var(--text2);
          }
          .team-social-link:hover {
            border-color: var(--border-strong);
            background: rgba(255,255,255,0.06);
            color: var(--text);
          }
          .team-divider {
            width: 40px;
            height: 2px;
            border-radius: 2px;
            margin-bottom: 16px;
          }
          @media (max-width: 768px) {
            .team-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }
            .team-image-wrap {
              aspect-ratio: 4 / 3.8;
            }
            .team-body {
              padding: 22px 22px 26px;
            }
          }
          @media (max-width: 480px) {
            .team-image-wrap {
              aspect-ratio: 1 / 1;
            }
          }
        `}</style>

        {/* Hero */}
        <section
          style={{
            padding: "80px 24px 72px",
            textAlign: "center",
            borderBottom: "1px solid var(--border)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "800px",
              height: "500px",
              background: "radial-gradient(ellipse, rgba(248,124,43,0.07) 0%, transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", zIndex: 2, maxWidth: "620px", margin: "0 auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(248,124,43,0.08)",
                border: "1px solid rgba(248,124,43,0.2)",
                color: "var(--cyan)",
                fontFamily: "var(--font-space-mono), Space Mono, monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "7px 16px",
                borderRadius: "2px",
                marginBottom: "28px",
              }}
            >
              ◈ Leadership
            </div>
            <h1
              style={{
                fontFamily: "var(--font-syne), Syne, sans-serif",
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                marginBottom: "20px",
              }}
            >
              The People Behind{" "}
              <em style={{ fontStyle: "normal", color: "var(--cyan)" }}>Inventra</em>
            </h1>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "1.05rem",
                fontWeight: 300,
                lineHeight: 1.8,
                maxWidth: "480px",
                margin: "0 auto",
              }}
            >
              A founding team united by one belief — African commerce deserves world-class intelligence infrastructure, built from the ground up for the continent.
            </p>
          </div>
        </section>

        {/* Team Cards */}
        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "72px 24px 100px" }}>
          <div className="team-grid">
            {team.map((member) => {
              const c = colorMap[member.roleColor];
              return (
                <div
                  key={member.name}
                  className={`team-card team-card-${member.roleColor}`}
                >
                  {/* Image */}
                  <div className="team-image-wrap">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 480px"
                      priority
                    />
                    {/* Gradient overlay */}
                    <div
                      className="team-image-overlay"
                      style={{
                        background: `linear-gradient(to bottom, transparent 0%, rgba(5,8,16,0.6) 60%, var(--bg) 100%)`,
                      }}
                    />
                    {/* Role badge on image */}
                    <div
                      style={{
                        position: "absolute",
                        top: "16px",
                        left: "16px",
                        background: c.bg,
                        border: `1px solid ${c.border}`,
                        color: c.color,
                        fontFamily: "var(--font-space-mono), Space Mono, monospace",
                        fontSize: "0.62rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        padding: "5px 12px",
                        borderRadius: "2px",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                      }}
                    >
                      {member.roleShort}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="team-body">
                    <div
                      className="team-divider"
                      style={{ background: c.color }}
                    />
                    <h2
                      style={{
                        fontFamily: "var(--font-syne), Syne, sans-serif",
                        fontWeight: 800,
                        fontSize: "1.4rem",
                        letterSpacing: "-0.01em",
                        marginBottom: "4px",
                        color: "var(--text)",
                      }}
                    >
                      {member.name}
                    </h2>
                    <p
                      style={{
                        fontFamily: "var(--font-space-mono), Space Mono, monospace",
                        fontSize: "0.68rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: c.color,
                        marginBottom: "16px",
                      }}
                    >
                      {member.role}
                    </p>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--muted)",
                        lineHeight: 1.8,
                        marginBottom: "24px",
                      }}
                    >
                      {member.bio}
                    </p>

                    {/* Social */}
                    <div style={{ display: "flex", gap: "10px" }}>
                      <Link href={member.linkedin} className="team-social-link" aria-label="LinkedIn">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </Link>
                      <Link href={member.twitter} className="team-social-link" aria-label="Twitter / X">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom note */}
          <div
            style={{
              marginTop: "72px",
              textAlign: "center",
              padding: "48px 32px",
              background: "rgba(248,124,43,0.03)",
              border: "1px solid rgba(248,124,43,0.1)",
              borderRadius: "14px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-space-mono), Space Mono, monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--cyan)",
                marginBottom: "12px",
              }}
            >
              ◈ Growing Team
            </p>
            <h3
              style={{
                fontFamily: "var(--font-syne), Syne, sans-serif",
                fontWeight: 800,
                fontSize: "1.4rem",
                marginBottom: "12px",
                letterSpacing: "-0.01em",
              }}
            >
              Want to build with us?
            </h3>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.9rem",
                marginBottom: "28px",
                lineHeight: 1.75,
                maxWidth: "400px",
                margin: "0 auto 28px",
              }}
            >
              We&apos;re hiring across engineering, product, and growth. See what roles are open.
            </p>
            <Link
              href="/careers"
              style={{
                display: "inline-block",
                background: "var(--cyan)",
                color: "var(--bg)",
                fontFamily: "var(--font-syne), Syne, sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                padding: "12px 28px",
                textDecoration: "none",
                borderRadius: "6px",
                letterSpacing: "0.03em",
              }}
            >
              View Open Roles →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
