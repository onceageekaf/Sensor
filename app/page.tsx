import { HeroSection } from "@/components/hero-section"
import { TechnologySection } from "@/components/technology-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { SpecsSection } from "@/components/specs-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { ApplicationsSection } from "@/components/applications-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function OxygenSensorPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <TechnologySection />
      <HowItWorksSection />
      <SpecsSection />
      <AdvantagesSection />
      <ApplicationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
