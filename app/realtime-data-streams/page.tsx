import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { DeepDiveSection } from "@/components/deep-dive-section"
import { HeroSection } from "./components/hero-section"
import { TechnologySection } from "./components/technology-section"
import { ApplicationsSection } from "./components/applications-section"
import { ContactSection } from "./components/contact-section"

export const metadata: Metadata = {
  title: "Real-time Feedback from Data Streams | Sensor Technologies",
  description: "Surrogate function method for instantaneous user feedback from complex computations",
  keywords: ["AI", "Software", "Simulation", "Real-time Processing"],
}

export default function RealtimeDataStreamsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <TechnologySection />
        <ApplicationsSection />
        <DeepDiveSection
          title="Surrogate Function Method for Real-Time Data Stream Processing"
          publication={{
            title: "Surrogate function method for providing instantaneous user feedback from complex computational simulations",
            journal: "Technology Transfer Opportunity",
            year: "ETH Zurich",
          }}
          innovationDetails="A machine learning-based surrogate modeling technique that provides real-time user feedback and interactive manipulation of complex simulation results. This enables immediate responsiveness in computational workflows without waiting for full simulation completion."
          methodology={[
            "Training of surrogate models on full simulation databases",
            "Real-time interpolation of simulation results",
            "Interactive visualization and parameter adjustment",
            "Validation against full simulation outputs",
          ]}
          keyFindings={[
            "Achieved 1000-10000× speedup in feedback generation",
            "Maintained high accuracy in surrogate model predictions",
            "Successfully integrated into interactive applications",
            "Enabled real-time parameter exploration workflows",
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
