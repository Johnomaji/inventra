import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Inventra",
  description: "How Inventra collects, uses, and protects your data.",
};

const sections = [
  {
    title: "Information We Collect",
    content: `We collect information you provide directly to us when creating an account, including your business name, email address, role, company size, and industry. We also collect usage data, inventory records you input into our platform, and technical information such as IP address, browser type, and device identifiers.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use your information to provide, maintain, and improve our services; process transactions and send related information; send technical notices and support messages; respond to your comments and questions; and send marketing communications (you may opt out at any time). We also use data to train and improve our AI models, though this is always done in aggregate and anonymized form.`,
  },
  {
    title: "Data Storage and Security",
    content: `Your data is stored on servers located within Africa (primary) and replicated internationally for redundancy. We use industry-standard encryption (AES-256 at rest, TLS 1.3 in transit) and follow SOC 2 Type II security practices. We conduct regular penetration testing and vulnerability assessments.`,
  },
  {
    title: "Data Sharing",
    content: `We do not sell your personal data to third parties. We may share information with service providers who assist in our operations under strict confidentiality agreements. We may disclose information if required by law, court order, or government authority. In the event of a merger or acquisition, your data may be transferred with advance notice.`,
  },
  {
    title: "Your Rights (African Data Subjects)",
    content: `Under the Nigeria Data Protection Regulation (NDPR), South Africa's POPIA, Kenya's Data Protection Act, and other applicable African data laws, you have the right to: access your personal data, correct inaccurate data, request deletion of your data, object to processing, and data portability. To exercise these rights, contact privacy@inventra.ai.`,
  },
  {
    title: "Cookies and Tracking",
    content: `We use cookies to maintain your session, remember your preferences, and analyze usage patterns. You can control cookies through your browser settings. We use analytics tools to understand how users interact with our platform — this data is aggregated and not used to identify individuals.`,
  },
  {
    title: "Children's Privacy",
    content: `Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from minors. If you believe a minor has provided us with information, contact us immediately.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy periodically. We will notify you of significant changes via email or prominent notice on our platform. Continued use after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "Contact Us",
    content: `For privacy-related inquiries, contact our Data Protection Officer at privacy@inventra.ai or write to: Inventra Technologies Ltd., 14 Bisi Ogabi Street, Victoria Island, Lagos, Nigeria.`,
  },
];

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p
            style={{
              fontFamily: "var(--font-space-mono), Space Mono, monospace",
              fontSize: "0.72rem",
              color: "var(--muted)",
              marginBottom: "48px",
            }}
          >
            Last updated: April 1, 2026
          </p>

          <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "48px", fontSize: "1.05rem" }}>
            Inventra Technologies Ltd. (&quot;Inventra,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is
            committed to protecting your privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you use our
            platform.
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
        </div>
      </main>
      <Footer />
    </>
  );
}
