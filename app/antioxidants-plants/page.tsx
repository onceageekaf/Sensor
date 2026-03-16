import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { DeepDiveSection } from "@/components/deep-dive-section"
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
        <DeepDiveSection
          title="Plant-Based Antioxidant Production Methods"
          publication={{
            title: "Expert know-how in Vitamin E and K production pathways in plants",
            journal: "Technology Transfer Opportunity",
            year: "ETH Zurich",
          }}
          innovationDetails="Advanced biotechnology methods for optimizing the production of antioxidants in plants, particularly Vitamin E and Vitamin K through genetic and cultivation techniques. These pathways enhance the nutritional value of plant-derived products for nutraceutical and pharmaceutical applications."
          methodology={[
            "Characterization of biosynthetic pathways for Vitamin E and K production",
            "Genetic optimization of antioxidant production in crop plants",
            "Cultivation and processing techniques for enhanced yield",
            "Quality control and standardization of antioxidant concentrations",
          ]}
          keyFindings={[
            "Successfully increased Vitamin E and K production in plant systems",
            "Identified key genetic factors controlling antioxidant synthesis",
            "Developed scalable production methods for nutraceutical applications",
            "Demonstrated enhanced antioxidant properties in treated plants",
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
