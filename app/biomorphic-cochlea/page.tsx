import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { DeepDiveSection } from "@/components/deep-dive-section"
import { HeroSection } from "./components/hero-section"
import { TechnologySection } from "./components/technology-section"
import { ApplicationsSection } from "./components/applications-section"
import { ContactSection } from "./components/contact-section"

export const metadata: Metadata = {
  title: "Biomorphic Electronic Cochlea | Sensor Technologies",
  description: "Silicon implementation of the mammalian hearing organ achieving near-perfect biological agreement",
  keywords: ["Neurotechnology", "Robotics", "Hearing", "Biomorphic"],
}

export default function BiomorphicCochleaPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <TechnologySection />
        <ApplicationsSection />
        <DeepDiveSection
          title="Biomorphic Silicon Cochlea"
          publication={{
            title: "Silicon implementation of the mammalian cochlea achieving near-perfect biological agreement",
            journal: "Technology Transfer Opportunity",
            year: "University of Zurich",
          }}
          innovationDetails="A silicon-based implementation of the mammalian cochlea that achieves remarkable biological fidelity in both structure and function. The device replicates the frequency analysis capabilities of the biological cochlea through biomimetic design, enabling applications in auditory neuroprosthetics, robotics, and hearing research."
          methodology={[
            "Analysis of mammalian cochlear structure and function",
            "Silicon-based photolithography design of cochlear geometry",
            "Implementation of fluid dynamics equivalent to perilymph motion",
            "Validation against biological frequency response measurements",
          ]}
          keyFindings={[
            "Achieved frequency selectivity matching biological cochlea",
            "Replicated cochlear amplification through biomimetic structures",
            "Successfully demonstrated auditory processing capabilities",
            "Proven applications in hearing prosthetics and robotics",
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
