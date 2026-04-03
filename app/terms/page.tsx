import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service — Inventra",
  description: "Terms and conditions for using Inventra.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing or using Inventra's platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this service. These terms apply to all users, including browsers, businesses, vendors, customers, merchants, and contributors of content.`,
  },
  {
    title: "Use License",
    content: `Inventra grants you a non-exclusive, non-transferable, revocable license to use our platform for your legitimate business inventory management purposes. You may not: sublicense or resell the platform; modify, copy, or create derivative works; use the platform for any unlawful purpose; or attempt to reverse-engineer any component of the platform.`,
  },
  {
    title: "Account Registration",
    content: `You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use. Each business entity may only maintain one account unless explicitly authorized otherwise.`,
  },
  {
    title: "Subscription and Payment",
    content: `Paid plans are billed monthly or annually in advance. All fees are in Nigerian Naira (NGN) unless otherwise specified. We accept major payment methods available in your region. Subscriptions automatically renew unless cancelled at least 48 hours before the renewal date. No refunds are provided for partial months, though we may make exceptions at our discretion.`,
  },
  {
    title: "Data Ownership",
    content: `You retain full ownership of all data you input into Inventra. By using our platform, you grant us a limited license to process your data solely to provide our services. We never use your business data for advertising or sell it to competitors. Upon account termination, you may export your data within 30 days.`,
  },
  {
    title: "Acceptable Use",
    content: `You agree not to use Inventra to: engage in any form of data scraping or automated access; attempt to gain unauthorized access to our systems; transmit malware or malicious code; engage in any activity that disrupts or interferes with our services; or violate any applicable laws, including data protection regulations in your jurisdiction.`,
  },
  {
    title: "Service Availability",
    content: `We target 99.5% uptime for our platform. Planned maintenance windows will be communicated at least 24 hours in advance. We are not liable for downtime caused by force majeure events, third-party service failures, or factors outside our reasonable control. Enterprise customers receive SLA guarantees as specified in their service agreements.`,
  },
  {
    title: "Limitation of Liability",
    content: `To the fullest extent permitted by applicable law, Inventra shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities. Our total liability shall not exceed the fees paid by you in the 12 months preceding the event giving rise to the claim.`,
  },
  {
    title: "Governing Law",
    content: `These terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of Lagos State, Nigeria. We also agree to explore mediation before litigation for commercial disputes.`,
  },
  {
    title: "Modifications",
    content: `We reserve the right to modify these terms at any time. We will provide at least 30 days' notice for material changes via email or in-app notification. Continued use of the platform after changes take effect constitutes acceptance of the new terms.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px", background: "var(--bg)", minHeight: "100vh" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 24px 100px" }}>
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
              marginBottom: "24px",
            }}
          >
            Legal
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "12px",
            }}
          >
            Terms of Service
          </h1>
          <p
            style={{
              fontFamily: "var(--font-space-mono), Space Mono, monospace",
              fontSize: "0.72rem",
              color: "var(--muted)",
              marginBottom: "48px",
            }}
          >
            Last updated: April 1, 2026 · Effective: April 1, 2026
          </p>

          <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "48px", fontSize: "1.05rem" }}>
            Welcome to Inventra. These Terms of Service govern your access to and
            use of the Inventra platform, including our AI inventory management,
            AR scanning, and VR dashboard features. Please read them carefully.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {sections.map((section, i) => (
              <div
                key={section.title}
                style={{
                  paddingBottom: "40px",
                  borderBottom: i < sections.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-syne), Syne, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    marginBottom: "16px",
                    color: "var(--text)",
                  }}
                >
                  {i + 1}. {section.title}
                </h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "0.95rem" }}>
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "48px",
              padding: "24px",
              background: "rgba(0,229,255,0.04)",
              border: "1px solid rgba(0,229,255,0.12)",
              borderRadius: "8px",
            }}
          >
            <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.7 }}>
              Questions about these terms? Contact our legal team at{" "}
              <span style={{ color: "var(--cyan)" }}>legal@inventra.ai</span>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
