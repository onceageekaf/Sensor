import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { DeepDiveSection } from "@/components/deep-dive-section"
import { HeroSection } from "./components/hero-section"
import { TechnologySection } from "./components/technology-section"
import { ApplicationsSection } from "./components/applications-section"
import { ContactSection } from "./components/contact-section"

export const metadata: Metadata = {
  title: "Oligonucleotide Building Blocks | Sensor Technologies",
  description: "Stereochemically pure oligonucleotide synthesis for therapeutic drugs",
  keywords: ["Chemistry", "Drug Delivery", "Biotechnology"],
}

export default function OligonucleotideBuildingBlocksPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <TechnologySection />
        <ApplicationsSection />
        <DeepDiveSection
          title="Stereochemically Pure Oligonucleotide Building Blocks"
          publication={{
            title: "Synthesis of stereochemically pure oligonucleotide building blocks for therapeutic drug development",
            journal: "Technology Transfer Opportunity",
            year: "ETH Zurich",
          }}
          innovationDetails="Advanced synthetic chemistry methods for producing stereochemically pure oligonucleotide building blocks with precise control over stereochemistry. These pure building blocks enable more effective synthesis of therapeutic oligonucleotides and antisense drugs with improved efficacy and reduced off-target effects."
          methodology={[
            "Stereochemical optimization of nucleotide synthesis",
            "Chiral resolution and purification techniques",
            "Characterization of stereochemical purity by NMR and MS",
            "Integration into therapeutic oligonucleotide synthesis",
          ]}
          keyFindings={[
            "Achieved >99% stereochemical purity in synthesized blocks",
            "Successfully incorporated into therapeutic oligonucleotides",
            "Demonstrated improved binding specificity and efficacy",
            "Scalable synthesis process for pharmaceutical production",
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
