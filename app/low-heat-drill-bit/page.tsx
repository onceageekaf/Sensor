import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { DeepDiveSection } from "@/components/deep-dive-section"
import { HeroSection } from "./components/hero-section"
import { TechnologySection } from "./components/technology-section"
import { ApplicationsSection } from "./components/applications-section"
import { ContactSection } from "./components/contact-section"

export const metadata: Metadata = {
  title: "Low Heat Drill Bit for Surgery | Sensor Technologies",
  description: "Optimized drill bit design minimizing tissue temperature elevation",
  keywords: ["Surgery", "Medical Devices", "Robotics"],
}

export default function LowHeatDrillBitPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <TechnologySection />
        <ApplicationsSection />
        <DeepDiveSection
          title="Optimized Low-Heat Surgical Drill Bit Design"
          publication={{
            title: "Optimized drill bit design for minimizing tissue temperature elevation during surgical procedures",
            journal: "Technology Transfer Opportunity",
            year: "ETH Zurich",
          }}
          innovationDetails="Advanced drill bit geometry and material design that significantly minimizes tissue heating during surgical bone drilling. This technology reduces thermal necrosis and promotes better bone healing while maintaining drilling efficiency, critical for orthopedic and neurosurgical applications."
          methodology={[
            "Thermal analysis of conventional surgical drill bits",
            "Optimized geometry design to reduce friction and heat generation",
            "Material selection for improved thermal properties",
            "In vitro and in vivo validation of temperature profiles",
          ]}
          keyFindings={[
            "Achieved 30-50% reduction in maximum tissue temperature",
            "Maintained equivalent drilling speed and efficiency",
            "Reduced thermal necrosis zone in bone tissue",
            "Improved postoperative healing outcomes",
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
