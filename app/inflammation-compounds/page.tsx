import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { DeepDiveSection } from "@/components/deep-dive-section"
import { HeroSection } from "./components/hero-section"
import { TechnologySection } from "./components/technology-section"
import { ApplicationsSection } from "./components/applications-section"
import { ContactSection } from "./components/contact-section"

export const metadata: Metadata = {
  title: "Novel Compounds for Inflammation Treatment | Sensor Technologies",
  description: "Injectable, water-soluble compounds for treatment of severe inflammation and ischemia-reperfusion events",
  keywords: ["Inflammation", "Pharmacology", "Critical Care", "Therapeutic Compounds"],
}

export default function InflammationCompoundsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <TechnologySection />
        <ApplicationsSection />
        <DeepDiveSection
          title="Novel Injectable Water-Soluble Anti-Inflammatory Compounds"
          publication={{
            title: "Injectable, water-soluble compounds for treatment of severe inflammation and ischemia-reperfusion events",
            journal: "Technology Transfer Opportunity",
            year: "ETH Zurich",
          }}
          innovationDetails="Novel water-soluble pharmaceutical compounds designed for injectable delivery to treat severe inflammation and ischemia-reperfusion injury. These compounds provide rapid anti-inflammatory action with improved bioavailability and reduced side effects compared to existing therapies."
          methodology={[
            "Chemical synthesis and optimization of anti-inflammatory compounds",
            "Water solubility enhancement through molecular design",
            "In vitro anti-inflammatory efficacy testing",
            "In vivo evaluation in ischemia-reperfusion models",
          ]}
          keyFindings={[
            "Achieved excellent water solubility for injectable formulation",
            "Demonstrated potent anti-inflammatory effects in cell models",
            "Protected tissue in ischemia-reperfusion injury models",
            "Showed improved efficacy compared to standard therapies",
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
