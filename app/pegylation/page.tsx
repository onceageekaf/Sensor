import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { DeepDiveSection } from "@/components/deep-dive-section"
import { HeroSection } from "./components/hero-section"
import { TechnologySection } from "./components/technology-section"
import { ApplicationsSection } from "./components/applications-section"
import { ContactSection } from "./components/contact-section"

export const metadata: Metadata = {
  title: "PEGylation of Therapeutic Proteins and Peptides | Sensor Technologies",
  description: "Chemoselective amide-bond ligation for biomolecule coupling",
  keywords: ["Biotechnology", "Drug Delivery", "Chemistry"],
}

export default function PEGylationPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <TechnologySection />
        <ApplicationsSection />
        <DeepDiveSection
          title="Chemoselective PEGylation of Therapeutic Proteins and Peptides"
          publication={{
            title: "Chemoselective amide-bond ligation for efficient PEGylation of therapeutic biomolecules",
            journal: "Technology Transfer Opportunity",
            year: "ETH Zurich",
          }}
          innovationDetails="Advanced chemical ligation methods for selective attachment of polyethylene glycol (PEG) to therapeutic proteins and peptides. This improves drug half-life, reduces immunogenicity, and enhances therapeutic efficacy through site-specific coupling chemistry."
          methodology={[
            "Design of chemoselective functional groups on proteins and PEG",
            "Optimization of ligation conditions for high coupling efficiency",
            "Characterization of conjugation product purity and homogeneity",
            "Validation of biological activity retention post-PEGylation",
          ]}
          keyFindings={[
            "Achieved >95% conjugation efficiency in protein-PEG coupling",
            "Maintained >90% biological activity post-PEGylation",
            "Site-specific coupling enabling optimized PEG positioning",
            "Extended pharmacokinetic half-life in vivo",
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
