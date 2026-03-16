import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { HeroSection } from "./components/hero-section"
import { TechnologySection } from "./components/technology-section"
import { ApplicationsSection } from "./components/applications-section"
import { ContactSection } from "./components/contact-section"

export const metadata: Metadata = {
  title: "Phononic Crystal Vibration Isolator | Sensor Technologies",
  description: "Lightweight phononic crystals for low-frequency vibration and sound isolation",
  keywords: ["Materials", "Acoustics", "Engineering"],
}

export default function PhononicCrystalPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <TechnologySection />
        <ApplicationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
