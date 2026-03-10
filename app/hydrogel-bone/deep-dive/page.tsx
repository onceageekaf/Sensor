import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { ArrowLeft, ExternalLink } from 'lucide-react'

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

      <div className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Synthetic Hydrogel: Technical Deep Dive</h1>
          <p className="text-lg text-slate-600 mb-12">
            Comprehensive explanation of microporous PEG hydrogel synthesis and bone cell network formation with animated figures from Nature Communications 2024.
          </p>

          <div className="space-y-8">
            <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Figure 1: Pore Formation Mechanism</h2>
              <svg viewBox="0 0 800 350" className="w-full mb-6">
                {/* Timeline */}
                <g>
                  <text x="50" y="30" fontSize="12" fill="#64748b" fontWeight="bold">Polymerization-Induced Phase Separation (PIPS)</text>
                  
                  {/* Step 1 */}
                  <circle cx="120" cy="100" r="35" fill="#fef3c7" stroke="#fbbf24" strokeWidth="2"/>
                  <text x="120" y="105" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">T₀</text>
                  <text x="120" y="160" textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="bold">Mixed</text>
                  <text x="120" y="175" textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="bold">Solution</text>

                  {/* Arrow */}
                  <path d="M 160 100 L 240 100" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrowGreen)"/>

                  {/* Step 2 */}
                  <circle cx="290" cy="100" r="35" fill="#dcfce7" stroke="#10b981" strokeWidth="2"/>
                  <text x="290" y="100" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">37°C</text>
                  <text x="290" y="160" textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="bold">Phase</text>
                  <text x="290" y="175" textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="bold">Separation</text>

                  {/* Arrow */}
                  <path d="M 330 100 L 410 100" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrowGreen)"/>

                  {/* Step 3 */}
                  <circle cx="460" cy="100" r="35" fill="#a7f3d0" stroke="#10b981" strokeWidth="2"/>
                  <text x="460" y="105" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e293b">Pore</text>
                  <text x="460" y="120" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e293b">Form</text>
                  <text x="460" y="160" textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="bold">Connected</text>
                  <text x="460" y="175" textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="bold">Pores</text>

                  {/* Arrow */}
                  <path d="M 500 100 L 580 100" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrowGreen)"/>

                  {/* Step 4 */}
                  <circle cx="630" cy="100" r="35" fill="#6ee7b7" stroke="#10b981" strokeWidth="2"/>
                  <text x="630" y="105" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Cells</text>
                  <text x="630" y="120" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Spread</text>
                  <text x="630" y="160" textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="bold">3D Network</text>
                  <text x="630" y="175" textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="bold">Formation</text>
                </g>

                {/* Pore size diagram */}
                <g transform="translate(0, 230)">
                  <text x="50" y="20" fontSize="12" fill="#64748b" fontWeight="bold">Tunable Pore Size: 5-20μm</text>
                  <rect x="50" y="40" width="100" height="40" fill="#dcfce7" stroke="#10b981" strokeWidth="2" rx="4"/>
                  <text x="100" y="70" textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="bold">5μm</text>
                  
                  <rect x="200" y="40" width="150" height="40" fill="#a7f3d0" stroke="#10b981" strokeWidth="2" rx="4"/>
                  <text x="275" y="70" textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="bold">12.5μm</text>
                  
                  <rect x="400" y="40" width="200" height="40" fill="#6ee7b7" stroke="#10b981" strokeWidth="2" rx="4"/>
                  <text x="500" y="70" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">20μm</text>

                  <text x="50" y="110" fontSize="11" fill="#64748b">Small pores</text>
                  <text x="200" y="110" fontSize="11" fill="#64748b">Moderate (optimized)</text>
                  <text x="400" y="110" fontSize="11" fill="#64748b">Large pores</text>
                </g>

                <defs>
                  <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#10b981"/>
                  </marker>
                </defs>
              </svg>
              <p className="text-slate-600">
                Polymerization-induced phase separation (PIPS) occurs when 4-PEG-VS, hyaluronic acid, dextran, and crosslinker are mixed and heated to 37°C. As Michael-addition crosslinking proceeds, an initially miscible mixture undergoes phase decomposition, creating interconnected pores. This happens in a single processing step with cells encapsulated, enabling immediate 3D spreading.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Figure 2: Cell Network Development</h2>
              <p className="text-slate-600 mb-6">
                Human mesenchymal stromal cells and osteoblasts spread rapidly within microporous hydrogels, forming 3D networks within 24 hours. Matrix degradability—controlled by MMP-sensitive crosslinks—enables cells to actively remodel their microenvironment during osteogenic differentiation and mineralization, a process critical for mimicking bone development.
              </p>
              <div className="bg-white rounded-lg p-6">
                <div className="text-sm text-slate-600 mb-4">Timeline of 3D Bone Network Formation</div>
                <div className="flex justify-between items-end gap-4">
                  {[
                    { time: '0h', desc: 'Cell encapsulation', height: '20%' },
                    { time: '6h', desc: 'Initial spreading', height: '40%' },
                    { time: '12h', desc: 'Network formation', height: '65%' },
                    { time: '24h', desc: 'Mature network', height: '85%' },
                    { time: '7 days', desc: 'Mineralization', height: '100%' },
                  ].map((stage, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-emerald-400 rounded-t"
                        style={{ height: stage.height }}
                      />
                      <div className="text-xs font-semibold text-slate-700 mt-2">{stage.time}</div>
                      <div className="text-xs text-slate-500 text-center mt-1">{stage.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Figure 3: Real-time Collagen Imaging</h2>
              <p className="text-slate-600 mb-6">
                Unlike natural collagen matrices that opaquely obscure internal structure, transparent PEG hydrogels enable time-lapse confocal microscopy of cell-secreted collagen fibers. This allows quantitative assessment of extracellular matrix production—a hallmark of bone development and a key biomarker for osteogenic differentiation.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Figure 4: On-Chip Perfusion Culture</h2>
              <p className="text-slate-600">
                Microfluidic integration enables perfusion of the microporous hydrogel, providing physiological fluid shear stress critical for bone formation. This reproduces the interstitial flow dynamics within bone lacuno-canalicular system, a feature absent in static 2D or simple 3D models.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Key References</h2>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Zauchner, D., et al. "Synthetic biodegradable microporous hydrogels for in vitro 3D culture of functional human bone cell networks." Nature Communications 15.5027 (2024).</span>
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
