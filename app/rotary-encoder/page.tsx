import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { DeepDiveSection } from "@/components/deep-dive-section"
import { HeroSection } from "./components/hero-section"
import { TechnologySection } from "./components/technology-section"
import { ApplicationsSection } from "./components/applications-section"
import { ContactSection } from "./components/contact-section"

export const metadata: Metadata = {
  title: "Miniaturized Rotary Encoder (ASTRAS) | Sensor Technologies",
  description: "High-accuracy angular sensor for surgical devices and robotics with exceptional precision",
  keywords: ["Medical Devices", "Robotics", "Sensing", "Angular Measurement"],
}

export default function RotaryEncoderPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <TechnologySection />
        <ApplicationsSection />
        <DeepDiveSection
          title="Miniaturized High-Accuracy Rotary Encoder (ASTRAS)"
          publication={{
            title: "Advanced Surgical Tool Angular Measurement Sensor (ASTRAS) - miniaturized high-accuracy angular sensor",
            journal: "Technology Transfer Opportunity",
            year: "ETH Zurich",
          }}
          innovationDetails="A miniaturized absolute rotary encoder with exceptional angular measurement precision for surgical instruments and robotic applications. ASTRAS provides real-time tool orientation feedback enabling improved surgical control and manipulation accuracy."
          methodology={[
            "Miniaturized sensor design compatible with surgical instruments",
            "High-resolution absolute position measurement",
            "Integration with surgical robotic systems",
            "Clinical validation in surgical procedures",
          ]}
          keyFindings={[
            "Achieved sub-degree angular measurement accuracy",
            "Successfully integrated into surgical robotic systems",
            "Improved surgeon control and manipulation precision",
            "Validated in clinical surgical settings",
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
