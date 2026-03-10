import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Figure1HydrogelFormation } from '@/components/hydrogel/figures/figure-1-formation'
import { Figure2CellNetwork } from '@/components/hydrogel/figures/figure-2-cells'
import { Figure3Collagen } from '@/components/hydrogel/figures/figure-3-collagen'
import { Figure4Performance } from '@/components/hydrogel/figures/figure-4-performance'

export default function HydrogelDeepDivePage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <div className="py-3 px-6 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/hydrogel-bone" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to overview</span>
          </Link>
          <a 
            href="https://doi.org/10.1038/s41467-024-49280-3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            View full publication
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="py-16 px-6 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Synthetic Hydrogel: Technical Deep Dive</h1>
          <p className="text-lg text-slate-600 mb-12">
            Comprehensive explanation of microporous PEG hydrogel synthesis using polymerization-induced phase separation (PIPS) and 3D bone cell network formation. All figures are animated to illustrate key concepts from the Nature Communications 2024 publication.
          </p>

          <div className="space-y-12">
            <Figure1HydrogelFormation />
            <Figure2CellNetwork />
            <Figure3Collagen />
            <Figure4Performance />

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Advantages Over Natural ECM</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <p className="text-sm font-semibold text-slate-900 mb-2">Natural Collagen</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Opaque - no imaging</li>
                    <li>• Variable composition</li>
                    <li>• Batch-to-batch variability</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <p className="text-sm font-semibold text-slate-900 mb-2">PEG Hydrogels</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Transparent - live imaging</li>
                    <li>• Defined composition</li>
                    <li>• Highly reproducible</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <p className="text-sm font-semibold text-slate-900 mb-2">2D Culture</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• No 3D architecture</li>
                    <li>• Poor relevance</li>
                    <li>• Limited utility</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Technical Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <p className="text-xs text-slate-500 font-semibold">Polymer</p>
                  <p className="text-sm font-bold text-emerald-700">4-PEG-VS</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <p className="text-xs text-slate-500 font-semibold">Pore Size</p>
                  <p className="text-sm font-bold text-emerald-700">5-20 μm</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <p className="text-xs text-slate-500 font-semibold">Stiffness</p>
                  <p className="text-sm font-bold text-emerald-700">1-10 kPa</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <p className="text-xs text-slate-500 font-semibold">Degradation</p>
                  <p className="text-sm font-bold text-emerald-700">MMP-responsive</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">References</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-1">1.</span>
                  <span>Zauchner, D., et al. "Synthetic biodegradable microporous hydrogels for in vitro 3D culture of functional human bone cell networks." <em>Nature Communications</em> 15.5027 (2024).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-1">2.</span>
                  <span>Qin, X. H., et al. ETH Transfer Technology Offer 2022-035.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-8 px-6 border-t border-slate-100">
        <div className="max-w-5xl mx-auto text-center text-sm text-slate-500">
          ETH Transfer - Reference 2022-035
        </div>
      </footer>
    </main>
  )
}
