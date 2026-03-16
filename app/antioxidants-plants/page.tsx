import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { HeroSection } from "./components/hero-section"
import { TechnologySection } from "./components/technology-section"
import { ApplicationsSection } from "./components/applications-section"
import { ContactSection } from "./components/contact-section"

export const metadata: Metadata = {
  title: "Antioxidants Produced in Plants | Sensor Technologies",
  description: "Expert know-how in Vitamin E and K production pathways",
  keywords: ["Biotechnology", "Nutraceuticals", "Plant Biology"],
}

export default function AntioxidantsPlantsPage() {
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
