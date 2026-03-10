import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/protein/hero-section"
import { TechnologySection } from "@/components/protein/technology-section"
import { HowItWorksSection } from "@/components/protein/how-it-works-section"
import { ApplicationsSection } from "@/components/protein/applications-section"
import { ContactSection } from "@/components/protein/contact-section"

export const metadata: Metadata = {
  title: "Production Platform for Non-Canonical Amino Acid Proteins | ETH Zurich",
  description: "Hijacking bacterial ABC transporters for efficient genetic code expansion. Achieve wild-type-like expression yields for proteins with novel chemical modifications.",
}

export default function ProteinProductionPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <HeroSection />
      <TechnologySection />
      <HowItWorksSection />
      <ApplicationsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm text-slate-400">
            Technology reference: 2024-108 | ETH Zurich
          </p>
        </div>
      </footer>
    </main>
  )
}
