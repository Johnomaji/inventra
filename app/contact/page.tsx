"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const contactReasons = [
  "General Enquiry",
  "Early Access / Sales",
  "Partnership",
  "Press & Media",
  "Careers / Open Application",
  "Technical Support",
  "Investor Relations",
];

const offices = [
  { city: "Lagos", country: "Nigeria", address: "14 Bisi Ogabi Street, Victoria Island", email: "lagos@inventra.ai", primary: true },
  { city: "Accra", country: "Ghana", address: "Cantonments, Accra (Q3 2026)", email: "accra@inventra.ai", primary: false },
  { city: "Nairobi", country: "Kenya", address: "Westlands, Nairobi (Q4 2026)", email: "nairobi@inventra.ai", primary: false },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", reason: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputStyle: React.CSSProperties = {
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
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-space-mono), Space Mono, monospace",
    fontSize: "0.65rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--muted)",
    marginBottom: "8px",
  };

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px", background: "var(--bg)", minHeight: "100vh" }}>
        {/* Hero */}
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
              ◎ Contact Us
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "12px" }}>
              Let&apos;s Talk
            </h1>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem", fontWeight: 300, maxWidth: "500px" }}>
              Sales, partnerships, press, careers, or just curious about Inventra — we&apos;re a message away.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "60px 24px 100px" }}>
          <div style={{ maxWidth: "1120px" }} className="contact-grid">
            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
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
                  <CheckCircle size={52} style={{ color: "var(--cyan)", margin: "0 auto 20px" }} />
                  <h2 style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 800, fontSize: "1.6rem", marginBottom: "12px" }}>
                    Message Received
                  </h2>
                  <p style={{ color: "var(--muted)", lineHeight: 1.75, marginBottom: "8px" }}>
                    Thanks, <strong style={{ color: "var(--text)" }}>{form.name}</strong>. We&apos;ll be in touch at{" "}
                    <strong style={{ color: "var(--cyan)" }}>{form.email}</strong> within 1 business day.
                  </p>
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
                  <h2 style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 800, fontSize: "1.4rem", marginBottom: "28px" }}>
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div>
                      <label style={labelStyle}>Your Name *</label>
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Adaeze Chibuike"
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "var(--cyan)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "var(--cyan)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Reason for Contact *</label>
                      <select
                        required
                        name="reason"
                        value={form.reason}
                        onChange={handleChange}
                        style={{ ...inputStyle, background: "var(--bg)", color: form.reason ? "var(--text)" : "var(--muted)" }}
                      >
                        <option value="" disabled>Select a reason</option>
                        {contactReasons.map((r) => (
                          <option key={r} value={r} style={{ color: "var(--text)" }}>{r}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Message *</label>
                      <textarea
                        required
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us what's on your mind..."
                        rows={5}
                        style={{ ...inputStyle, resize: "vertical", lineHeight: 1.65 }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--cyan)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                      />
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
                        marginTop: "8px",
                      }}
                    >
                      Send Message →
                    </button>
                  </form>
                </div>
              )}
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
              {/* Quick contacts */}
              <h2 style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 800, fontSize: "1.3rem", marginBottom: "24px" }}>
                Direct Contacts
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "48px" }}>
                {[
                  { label: "Sales & Partnerships", email: "sales@inventra.ai", icon: "💼" },
                  { label: "Press & Media", email: "press@inventra.ai", icon: "📰" },
                  { label: "Technical Support", email: "support@inventra.ai", icon: "🛠️" },
                  { label: "Investor Relations", email: "investors@inventra.ai", icon: "📈" },
                  { label: "Privacy & Legal", email: "legal@inventra.ai", icon: "⚖️" },
                ].map((item) => (
                  <div
                    key={item.email}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "16px 20px",
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                    }}
                  >
                    <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                    <div>
                      <div style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 600, fontSize: "0.88rem", marginBottom: "2px" }}>
                        {item.label}
                      </div>
                      <div style={{ fontFamily: "var(--font-space-mono), Space Mono, monospace", fontSize: "0.72rem", color: "var(--cyan)" }}>
                        {item.email}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Offices */}
              <h2 style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 800, fontSize: "1.3rem", marginBottom: "24px" }}>
                Offices
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {offices.map((office) => (
                  <div
                    key={office.city}
                    style={{
                      padding: "20px 24px",
                      background: office.primary ? "rgba(0,229,255,0.04)" : "var(--surface)",
                      border: office.primary ? "1px solid rgba(0,229,255,0.15)" : "1px solid var(--border)",
                      borderRadius: "10px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                      <span style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 700, fontSize: "0.95rem" }}>
                        {office.city}, {office.country}
                      </span>
                      {office.primary && (
                        <span
                          style={{
                            background: "rgba(0,229,255,0.1)",
                            border: "1px solid rgba(0,229,255,0.2)",
                            color: "var(--cyan)",
                            fontFamily: "var(--font-space-mono), Space Mono, monospace",
                            fontSize: "0.58rem",
                            padding: "3px 8px",
                            borderRadius: "2px",
                            letterSpacing: "0.08em",
                          }}
                        >
                          HQ
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "var(--muted)", marginBottom: "4px" }}>{office.address}</div>
                    <div style={{ fontFamily: "var(--font-space-mono), Space Mono, monospace", fontSize: "0.7rem", color: "var(--cyan)" }}>
                      {office.email}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />

    </>
  );
}
