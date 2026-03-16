import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { DeepDiveSection } from "@/components/deep-dive-section"
import { HeroSection } from "./components/hero-section"
import { TechnologySection } from "./components/technology-section"
import { ApplicationsSection } from "./components/applications-section"
import { ContactSection } from "./components/contact-section"

export const metadata: Metadata = {
  title: "Natural Spatial Insect Repellents | Sensor Technologies",
  description: "Highly effective natural insect repellent formulations",
  keywords: ["Biopesticides", "Healthcare", "Environmental"],
}

export default function InsectRepellentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <TechnologySection />
        <ApplicationsSection />
        <DeepDiveSection
          title="Natural Spatial Insect Repellent Formulations"
          publication={{
            title: "Highly effective natural insect repellent formulations with spatial activity",
            journal: "Technology Transfer Opportunity",
            year: "ETH Zurich",
          }}
          innovationDetails="Novel natural insect repellent formulations that create spatial repellency zones, effectively deterring insects through environmental modification rather than direct application. These eco-friendly formulations use natural compounds and are safer for human and environmental health compared to synthetic alternatives."
          methodology={[
            "Screening of natural compounds for insecticidal and repellent properties",
            "Formulation optimization for spatial distribution and persistence",
            "Testing against target insect species (mosquitoes, ticks, flies)",
            "Environmental safety and persistence evaluation",
          ]}
          keyFindings={[
            "Demonstrated effective repellency against multiple insect species",
            "Created persistent spatial protection zones",
            "Showed superior environmental safety profile",
            "Successfully formulated for practical field applications",
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
