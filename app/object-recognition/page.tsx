import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { DeepDiveSection } from "@/components/deep-dive-section"
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
        <DeepDiveSection
          title="Object Recognition and Authentication via Unique Surface Features"
          publication={{
            title: "Non-invasive product authentication using unique surface features and AI recognition",
            journal: "Technology Transfer Opportunity",
            year: "ETH Zurich",
          }}
          innovationDetails="An AI-powered computer vision system that authenticates products by analyzing unique surface features using portable devices. This non-invasive technology creates a digital fingerprint of product surfaces, enabling secure authentication and anti-counterfeiting solutions without special markings or tags."
          methodology={[
            "High-resolution surface image capture on portable devices",
            "Feature extraction and digital fingerprinting algorithms",
            "Machine learning model training on authentic product databases",
            "Real-time authentication verification against database",
          ]}
          keyFindings={[
            "Achieved 99%+ authentication accuracy on validated products",
            "Successfully detected counterfeit items with altered surfaces",
            "Portable device implementation enabling field authentication",
            "Non-invasive method preserving product integrity",
          ]}
          patentStatus="Patent pending"
          trlLevel={5}
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
