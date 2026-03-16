import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { DeepDiveSection } from "@/components/deep-dive-section"
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
        <DeepDiveSection
          title="Lightweight Phononic Crystal Vibration Isolators"
          publication={{
            title: "Engineered phononic crystals for low-frequency vibration and sound isolation",
            journal: "Technology Transfer Opportunity",
            year: "ETH Zurich",
          }}
          innovationDetails="Novel phononic crystal materials with engineered band gaps that effectively isolate low-frequency vibrations and acoustic noise. These lightweight structures provide superior isolation compared to conventional materials while maintaining structural integrity and mechanical performance."
          methodology={[
            "Computational design of phononic crystal band structures",
            "Material selection for optimized acoustic properties",
            "Manufacturing of periodic microstructures",
            "Characterization of vibration isolation performance",
          ]}
          keyFindings={[
            "Achieved 20-40 dB attenuation in target frequency ranges",
            "Demonstrated lightweight design maintaining structural strength",
            "Successfully reduced mechanical vibrations and acoustic noise",
            "Validated performance in precision measurement applications",
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
