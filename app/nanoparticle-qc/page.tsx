import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/nanoparticle/hero-section"
import { TechnologySection } from "@/components/nanoparticle/technology-section"
import { HowItWorksSection } from "@/components/nanoparticle/how-it-works-section"
import { ApplicationsSection } from "@/components/nanoparticle/applications-section"
import { ContactSection } from "@/components/nanoparticle/contact-section"

export const metadata: Metadata = {
  title: "In-line Nanoparticle Quality Control | EPFL",
  description: "Single-particle ICP-MS method for comprehensive characterization of engineered inorganic nanoparticles—size, composition, and count in one measurement.",
}

export default function NanoparticleQCPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <HeroSection />
      <TechnologySection />
      <HowItWorksSection />
      <ApplicationsSection />
      <ContactSection />
      
      <footer className="py-8 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-500">
            EPFL Technology Transfer Office - Reference 6.2251
          </div>
          <div className="text-sm text-slate-400">
            Patent Pending: WO 2023/095020
          </div>
        </div>
      </footer>
    </main>
  )
}
