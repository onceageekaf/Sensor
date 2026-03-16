import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { HeroSection } from "./components/hero-section"
import { TechnologySection } from "./components/technology-section"
import { ApplicationsSection } from "./components/applications-section"
import { ContactSection } from "./components/contact-section"

export const metadata: Metadata = {
  title: "Object Recognition and Verification on Portable Devices | Sensor Technologies",
  description: "Non-invasive product authentication using unique surface features",
  keywords: ["AI", "Security", "Computer Vision"],
}

export default function ObjectRecognitionPage() {
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
