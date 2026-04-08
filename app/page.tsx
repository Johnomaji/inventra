import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { ShiftSection } from "@/components/shift-section";
import { HowItWorks } from "@/components/how-it-works";
import { SocialProof } from "@/components/social-proof";
import { UseCases } from "@/components/use-cases";
import { Competitive } from "@/components/competitive";
import { PricingSection } from "@/components/pricing-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ShiftSection />
        <HowItWorks />
        <SocialProof />
        <UseCases />
        <Competitive />
        <PricingSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
