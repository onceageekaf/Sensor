import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { DeepDiveSection } from "@/components/deep-dive-section"
import { HeroSection } from "./components/hero-section"
import { TechnologySection } from "./components/technology-section"
import { ApplicationsSection } from "./components/applications-section"
import { ContactSection } from "./components/contact-section"

export const metadata: Metadata = {
  title: "Deep Brain Stimulation Programming | Sensor Technologies",
  description: "LFP-based algorithm for automated optimal contact selection",
  keywords: ["Neurology", "Medical Devices", "Parkinson's Disease"],
}

export default function DeepBrainStimulationPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <TechnologySection />
        <ApplicationsSection />
        <DeepDiveSection
          title="Automated Deep Brain Stimulation Contact Selection"
          publication={{
            title: "LFP-based algorithm for automated optimal contact selection in deep brain stimulation",
            journal: "Technology Transfer Opportunity",
            year: "University of Bern",
          }}
          innovationDetails="An automated algorithm that uses local field potential (LFP) recordings to select optimal contacts for deep brain stimulation therapy. This technology improves the efficacy of DBS treatments by identifying the most therapeutically effective electrode contacts, personalizing treatment for each patient and reducing side effects."
          methodology={[
            "Recording and analysis of local field potential signals from DBS electrodes",
            "Machine learning classification of electrophysiological signatures",
            "Automated optimization of contact selection based on LFP patterns",
            "Clinical validation in Parkinson's disease and dystonia patients",
          ]}
          keyFindings={[
            "Identified reliable LFP markers for optimal contact selection",
            "Achieved improved motor symptom improvement with automated selection",
            "Reduced adverse effects compared to manual contact selection",
            "Successfully validated algorithm in clinical DBS settings",
          ]}
          patentStatus="Patent pending"
          trlLevel={6}
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
