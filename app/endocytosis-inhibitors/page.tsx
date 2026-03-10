import { EndoHeroSection } from "@/components/endo/hero-section"
import { EndoTechnologySection } from "@/components/endo/technology-section"
import { EndoHowItWorksSection } from "@/components/endo/how-it-works-section"
import { EndoResultsSection } from "@/components/endo/results-section"
import { EndoApplicationsSection } from "@/components/endo/applications-section"
import { EndoContactSection } from "@/components/endo/contact-section"
import { SiteHeader } from "@/components/site-header"

export const metadata = {
  title: "Endocytosis Inhibitors for Cancer Immunotherapy | University of Queensland",
  description: "Enhancing monoclonal antibody responses by blocking receptor internalization. Published in Cell, with active Phase 1b clinical trials.",
}

export default function EndocytosisInhibitorsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <EndoHeroSection />
      <EndoTechnologySection />
      <EndoHowItWorksSection />
      <EndoResultsSection />
      <EndoApplicationsSection />
      <EndoContactSection />

      {/* Footer */}
      <footer className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold">EI</span>
              </div>
              <span className="text-slate-900 font-medium">Endocytosis Inhibitors</span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://uniquest.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-900 text-sm transition-colors"
              >
                UniQuest
              </a>
              <a
                href="https://frazer.uq.edu.au/research/simpson-group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-900 text-sm transition-colors"
              >
                Simpson Group
              </a>
              <a
                href="https://uniquest.com.au/available-technology/endocytosis-inhibitors-to-improve-anti-cancer-monoclonal-antibody-immunotherapy-responses/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-900 text-sm transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200 text-center">
            <p className="text-slate-400 text-xs">
              Published in Cell, 180(5), 895-914, 2020. DOI: 10.1016/j.cell.2020.02.019
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
