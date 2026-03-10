import { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { HydrogelHeroSection } from '@/components/hydrogel/hero-section'
import { HydrogelTechnologySection } from '@/components/hydrogel/technology-section'
import { HydrogelApplicationsSection } from '@/components/hydrogel/applications-section'
import { HydrogelContactSection } from '@/components/hydrogel/contact-section'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Synthetic Hydrogel for Bone Tissue Engineering | ETH Zürich',
  description: 'Biodegradable microporous PEG hydrogel platform for 3D bone cell network culture with real-time collagen imaging. Enable disease modeling and drug screening on-chip.',
}

export default function HydrogelPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <HydrogelHeroSection />
      <HydrogelTechnologySection />
      <HydrogelApplicationsSection />
      <HydrogelContactSection />
      <Footer />
    </main>
  )
}
