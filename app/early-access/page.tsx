"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CheckCircle } from "lucide-react";

const benefits = [
  { icon: "🚀", title: "First Access", desc: "Be among the first 500 businesses to experience Inventra before public launch." },
  { icon: "💰", title: "Founder Pricing", desc: "Lock in lifetime founder pricing — up to 60% off standard rates, forever." },
  { icon: "🤝", title: "Direct Input", desc: "Shape the product. Early access members influence the roadmap directly." },
  { icon: "🎓", title: "Onboarding Support", desc: "Dedicated onboarding from our team. We'll set up your account personally." },
];

const companySizes = ["1–10 employees", "11–50 employees", "51–200 employees", "201–1000 employees", "1000+ employees"];
const useCaseOptions = ["Retail & FMCG", "Pharmaceuticals", "Manufacturing", "Logistics & 3PL", "Agribusiness", "Construction & Hardware", "Other"];
const roles = ["Founder / CEO", "Operations Manager", "Inventory Manager", "Procurement / Supply Chain", "IT / Technology", "Finance", "Other"];

export default function EarlyAccessPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    businessName: "",
    email: "",
    role: "",
    companySize: "",
    useCase: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px", background: "var(--bg)", minHeight: "100vh" }}>
        {/* Hero */}
        <section
          style={{
            padding: "80px 24px 60px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "800px",
              height: "600px",
              background:
                "radial-gradient(ellipse, rgba(0,229,255,0.09) 0%, rgba(124,77,255,0.04) 50%, transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ position: "relative", zIndex: 2 }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255,179,0,0.08)",
                border: "1px solid rgba(255,179,0,0.2)",
                color: "var(--amber)",
                fontFamily: "var(--font-space-mono), Space Mono, monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "7px 16px",
                borderRadius: "2px",
                marginBottom: "24px",
              }}
            >
              ▸ 412 of 500 spots claimed
            </div>
            <h1
              style={{
                fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: "20px",
              }}
            >
              Join the{" "}
              <em style={{ fontStyle: "normal", color: "var(--cyan)" }}>
                Waitlist
              </em>
            </h1>
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                color: "var(--muted)",
                maxWidth: "520px",
                margin: "0 auto",
                fontWeight: 300,
              }}
            >
              Secure your spot among the first African businesses to access
              Inventra — the AI+AR+VR inventory OS built for your market.
            </p>
          </motion.div>
        </section>

        {/* Main content */}
        <section style={{ padding: "0 24px 100px" }}>
          <div
            style={{
              maxWidth: "1120px",
              margin: "0 auto",
            }}
            className="ea-grid"
          >
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {submitted ? (
                <div
                  style={{
                    background: "rgba(0,229,255,0.05)",
                    border: "1px solid rgba(0,229,255,0.2)",
                    borderRadius: "14px",
                    padding: "48px",
                    textAlign: "center",
                  }}
                >
                  <CheckCircle
                    size={56}
                    style={{ color: "var(--cyan)", margin: "0 auto 24px" }}
                  />
                  <h2
                    style={{
                      fontFamily: "var(--font-syne), Syne, sans-serif",
                      fontWeight: 800,
                      fontSize: "1.8rem",
                      marginBottom: "16px",
                    }}
                  >
                    You&apos;re on the list!
                  </h2>
                  <p
                    style={{
                      color: "var(--muted)",
                      fontSize: "1rem",
                      lineHeight: 1.75,
                      marginBottom: "32px",
                    }}
                  >
                    We&apos;ve received your application for{" "}
                    <strong style={{ color: "var(--text)" }}>
                      {form.businessName}
                    </strong>
                    . Our team will reach out to{" "}
                    <strong style={{ color: "var(--cyan)" }}>{form.email}</strong>{" "}
                    within 48 hours with your access details.
                  </p>
                  <Link
                    href="/"
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
                    ← Back to Home
                  </Link>
                </div>
              ) : (
                <div
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "14px",
                    padding: "40px",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--font-syne), Syne, sans-serif",
                      fontWeight: 800,
                      fontSize: "1.5rem",
                      marginBottom: "8px",
                    }}
                  >
                    Request Early Access
                  </h2>
                  <p
                    style={{
                      color: "var(--muted)",
                      fontSize: "0.9rem",
                      marginBottom: "32px",
                    }}
                  >
                    Takes 2 minutes. No credit card required.
                  </p>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontFamily: "var(--font-space-mono), Space Mono, monospace",
                          fontSize: "0.65rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--muted)",
                          marginBottom: "8px",
                        }}
                      >
                        Business Name *
                      </label>
                      <input
                        required
                        name="businessName"
                        value={form.businessName}
                        onChange={handleChange}
                        placeholder="Acme Trading Co."
                        style={{
                          width: "100%",
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid var(--border)",
                          color: "var(--text)",
                          fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                          fontSize: "0.95rem",
                          padding: "14px 18px",
                          borderRadius: "6px",
                          outline: "none",
                          transition: "border-color 0.3s",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--cyan)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontFamily: "var(--font-space-mono), Space Mono, monospace",
                          fontSize: "0.65rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--muted)",
                          marginBottom: "8px",
                        }}
                      >
                        Business Email *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@yourbusiness.com"
                        style={{
                          width: "100%",
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid var(--border)",
                          color: "var(--text)",
                          fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                          fontSize: "0.95rem",
                          padding: "14px 18px",
                          borderRadius: "6px",
                          outline: "none",
                          transition: "border-color 0.3s",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--cyan)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontFamily: "var(--font-space-mono), Space Mono, monospace",
                          fontSize: "0.65rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--muted)",
                          marginBottom: "8px",
                        }}
                      >
                        Your Role *
                      </label>
                      <select
                        required
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          background: "var(--bg)",
                          border: "1px solid var(--border)",
                          color: form.role ? "var(--text)" : "var(--muted)",
                          fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                          fontSize: "0.95rem",
                          padding: "14px 18px",
                          borderRadius: "6px",
                          outline: "none",
                        }}
                      >
                        <option value="" disabled>Select your role</option>
                        {roles.map((r) => (
                          <option key={r} value={r} style={{ color: "var(--text)" }}>{r}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontFamily: "var(--font-space-mono), Space Mono, monospace",
                          fontSize: "0.65rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--muted)",
                          marginBottom: "8px",
                        }}
                      >
                        Company Size *
                      </label>
                      <select
                        required
                        name="companySize"
                        value={form.companySize}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          background: "var(--bg)",
                          border: "1px solid var(--border)",
                          color: form.companySize ? "var(--text)" : "var(--muted)",
                          fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                          fontSize: "0.95rem",
                          padding: "14px 18px",
                          borderRadius: "6px",
                          outline: "none",
                        }}
                      >
                        <option value="" disabled>Select company size</option>
                        {companySizes.map((s) => (
                          <option key={s} value={s} style={{ color: "var(--text)" }}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontFamily: "var(--font-space-mono), Space Mono, monospace",
                          fontSize: "0.65rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--muted)",
                          marginBottom: "8px",
                        }}
                      >
                        Primary Use Case *
                      </label>
                      <select
                        required
                        name="useCase"
                        value={form.useCase}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          background: "var(--bg)",
                          border: "1px solid var(--border)",
                          color: form.useCase ? "var(--text)" : "var(--muted)",
                          fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                          fontSize: "0.95rem",
                          padding: "14px 18px",
                          borderRadius: "6px",
                          outline: "none",
                        }}
                      >
                        <option value="" disabled>Select your industry</option>
                        {useCaseOptions.map((u) => (
                          <option key={u} value={u} style={{ color: "var(--text)" }}>{u}</option>
                        ))}
                      </select>
                    </div>
                    <button
                      type="submit"
                      style={{
                        background: "var(--cyan)",
                        color: "var(--bg)",
                        fontFamily: "var(--font-syne), Syne, sans-serif",
                        fontWeight: 700,
                        fontSize: "1rem",
                        padding: "16px",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        transition: "all 0.25s",
                        marginTop: "8px",
                      }}
                    >
                      Request Early Access →
                    </button>
                    <p
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--muted)",
                        textAlign: "center",
                        fontFamily: "var(--font-space-mono), Space Mono, monospace",
                      }}
                    >
                      🔒 No credit card required · We never spam
                    </p>
                  </form>
                </div>
              )}
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontWeight: 800,
                  fontSize: "1.6rem",
                  marginBottom: "8px",
                }}
              >
                What You Get
              </h2>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "32px", fontWeight: 300 }}>
                Early access isn&apos;t just first — it&apos;s better.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
                {benefits.map((b) => (
                  <div
                    key={b.title}
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                      padding: "20px",
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: "10px",
                    }}
                  >
                    <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{b.icon}</div>
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-syne), Syne, sans-serif",
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          marginBottom: "4px",
                        }}
                      >
                        {b.title}
                      </h3>
                      <p style={{ fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.65 }}>
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* What to expect */}
              <div
                style={{
                  background: "rgba(0,229,255,0.03)",
                  border: "1px solid rgba(0,229,255,0.1)",
                  borderRadius: "10px",
                  padding: "28px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-syne), Syne, sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    marginBottom: "16px",
                    color: "var(--cyan)",
                  }}
                >
                  What Happens Next
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { step: "1", text: "We review your application within 48 hours" },
                    { step: "2", text: "You receive a personalized onboarding link" },
                    { step: "3", text: "30-min setup call with our Africa team" },
                    { step: "4", text: "Full access to Inventra — start saving immediately" },
                  ].map((item) => (
                    <div key={item.step} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <div
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          background: "rgba(0,229,255,0.15)",
                          border: "1px solid rgba(0,229,255,0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "var(--font-syne), Syne, sans-serif",
                          fontWeight: 700,
                          fontSize: "0.72rem",
                          color: "var(--cyan)",
                          flexShrink: 0,
                        }}
                      >
                        {item.step}
                      </div>
                      <p style={{ fontSize: "0.86rem", color: "var(--muted)", lineHeight: 1.6, marginTop: "2px" }}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div
                style={{
                  marginTop: "24px",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  padding: "24px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "18px",
                    fontFamily: "var(--font-syne), Syne, sans-serif",
                    fontSize: "2.5rem",
                    color: "var(--cyan)",
                    opacity: 0.2,
                    lineHeight: 1,
                  }}
                >
                  &ldquo;
                </div>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--muted)",
                    lineHeight: 1.75,
                    paddingTop: "10px",
                    marginBottom: "16px",
                  }}
                >
                  Within 6 days of beta access, our stockout rate dropped by more
                  than half. The AI flagged 3 SKUs we had been overstocking for
                  months.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "34px",
                      height: "34px",
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
                    AC
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-syne), Syne, sans-serif",
                        fontWeight: 700,
                        fontSize: "0.84rem",
                      }}
                    >
                      Adaeze Chibuike
                    </div>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        color: "var(--muted)",
                        fontFamily: "var(--font-space-mono), Space Mono, monospace",
                      }}
                    >
                      CEO · FMCG Distributor, Lagos
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

    </>
  );
}
