import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Figure1Workflow } from '@/components/nanoparticle/figures/figure-1-workflow'
import { Figure2Shapes } from '@/components/nanoparticle/figures/figure-2-shapes'
import { Figure3Detection } from '@/components/nanoparticle/figures/figure-3-detection'
import { Figure4Data } from '@/components/nanoparticle/figures/figure-4-data'
import { Figure5Applications } from '@/components/nanoparticle/figures/figure-5-applications'

export default function NanoparticleDeepDivePage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <div className="py-3 px-6 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/nanoparticle-qc" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to overview</span>
          </Link>
          <a 
            href="https://doi.org/10.1021/acsnano.2c01840" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-violet-600 hover:text-violet-700 transition-colors"
          >
            View full publication
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="py-16 px-6 bg-gradient-to-b from-violet-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">SP-ICP-MS Technical Deep Dive</h1>
          <p className="text-lg text-slate-600 mb-12">
            Comprehensive explanation of single-particle inductively-coupled plasma mass spectrometry for high-resolution nanoparticle characterization. All figures are animated to illustrate key concepts from the ACS Nano 2022 publication.
          </p>

          <div className="space-y-12">
            <Figure1Workflow />
            <Figure2Shapes />
            <Figure3Detection />
            <Figure4Data />
            <Figure5Applications />

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Advantages Over Bulk Methods</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <p className="text-sm font-semibold text-slate-900 mb-2">Traditional ICP-MS</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Ensemble average only</li>
                    <li>• Loses information</li>
                    <li>• Limited to soluble samples</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <p className="text-sm font-semibold text-slate-900 mb-2">SP-ICP-MS</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Individual particle data</li>
                    <li>• Distribution information</li>
                    <li>• Direct particle analysis</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <p className="text-sm font-semibold text-slate-900 mb-2">Electron Microscopy</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Imaging only</li>
                    <li>• Limited sampling (100s)</li>
                    <li>• Time-consuming analysis</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">References</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 font-bold mt-1">1.</span>
                  <span>Koolen, C. D., et al. "High-throughput sizing, counting, and elemental analysis of anisotropic multimetallic nanoparticles." <em>ACS Nano</em> 16.8 (2022): 11968-11978.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 font-bold mt-1">2.</span>
                  <span>Mateus, J. N., et al. "Method for in-line quality control of engineered inorganic nanoparticle production processes." EPFL Tech Offer 2024.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-8 px-6 border-t border-slate-100">
        <div className="max-w-5xl mx-auto text-center text-sm text-slate-500">
          EPFL Technology Transfer - Reference 6.2251
        </div>
      </footer>
    </main>
  )
}
