import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { HeroSection } from "./components/hero-section"
import { TechnologySection } from "./components/technology-section"
import { ApplicationsSection } from "./components/applications-section"
import { ContactSection } from "./components/contact-section"

export const metadata: Metadata = {
  title: "Biomorphic Electronic Cochlea | Sensor Technologies",
  description: "Silicon implementation of the mammalian hearing organ achieving near-perfect biological agreement",
  keywords: ["Neurotechnology", "Robotics", "Hearing", "Biomorphic"],
}

export default function BiomorphicCochleaPage() {
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
