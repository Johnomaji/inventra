import type { Metadata } from "next";
import { DecryptedText } from "@/components/decrypted-text";
import { Navbar } from "@/components/navbar";
import { ProductSection } from "@/components/product-section";
import { AiEngine } from "@/components/ai-engine";
import { ArExperience } from "@/components/ar-experience";
import { VrDashboard } from "@/components/vr-dashboard";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore the full Inventra platform — AI-powered inventory intelligence, Augmented Reality stock visibility, and a Virtual Reality command centre built for African commerce.",
};

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page intro */}
        <section
          style={{
            paddingTop: "140px",
            paddingBottom: "clamp(48px, 6vw, 80px)",
            paddingLeft: "24px",
            paddingRight: "24px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="hero-grid-bg" />
          <div style={{ maxWidth: "720px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(124,77,255,0.08)",
                border: "1px solid rgba(124,77,255,0.2)",
                color: "var(--violet)",
                fontFamily: "var(--font-space-mono), Space Mono, monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "7px 18px",
                borderRadius: "100px",
                marginBottom: "24px",
              }}
            >
              ◈ Platform Overview
            </div>
            <h1
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                marginBottom: "20px",
              }}
            >
              <DecryptedText text="Built for " animateOn="view" sequential revealDirection="start" speed={35} encryptedClassName="decrypted-char-encrypted" />
              <em style={{ fontStyle: "normal", color: "var(--violet)" }}>
                <DecryptedText text="every" animateOn="view" sequential revealDirection="start" speed={35} encryptedClassName="decrypted-char-encrypted" />
              </em>{" "}
              <DecryptedText text="layer of your business." animateOn="view" sequential revealDirection="start" speed={35} encryptedClassName="decrypted-char-encrypted" />
            </h1>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              From AI demand forecasting to AR stock walks and a full VR command
              centre — explore the capabilities that give African businesses total
              visibility over their operations.
            </p>
          </div>
        </section>

        <ProductSection />
        <AiEngine />
        <ArExperience />
        <VrDashboard />
      </main>
      <Footer />
    </>
  );
}
