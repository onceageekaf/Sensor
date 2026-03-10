import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { ArrowLeft, ExternalLink } from 'lucide-react'

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

      <div className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">SP-ICP-MS: Technical Deep Dive</h1>
          <p className="text-lg text-slate-600 mb-12">
            Comprehensive explanation of single-particle inductively-coupled plasma mass spectrometry for nanoparticle characterization with animated figures from ACS Nano 2022.
          </p>

          <div className="space-y-8">
            <div className="bg-violet-50 rounded-xl p-8 border border-violet-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Figure 1: Measurement Workflow</h2>
              <svg viewBox="0 0 800 300" className="w-full mb-6">
                {/* Nebulization */}
                <g>
                  <circle cx="100" cy="150" r="40" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2"/>
                  <text x="100" y="160" textAnchor="middle" fontSize="12" fill="#1e293b" fontWeight="bold">Sample</text>
                  <text x="100" y="210" textAnchor="middle" fontSize="11" fill="#64748b">Nebulization</text>
                </g>

                {/* Arrow */}
                <path d="M 150 150 L 220 150" stroke="#8b5cf6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>

                {/* Plasma */}
                <g>
                  <rect x="220" y="100" width="80" height="100" fill="#c084fc" stroke="#8b5cf6" strokeWidth="2" rx="4"/>
                  <text x="260" y="160" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">Plasma</text>
                  <text x="260" y="210" textAnchor="middle" fontSize="11" fill="#64748b">Ionization</text>
                </g>

                {/* Arrow */}
                <path d="M 310 150 L 380 150" stroke="#8b5cf6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>

                {/* Mass Analyzer */}
                <g>
                  <path d="M 380 120 L 450 150 L 380 180 Z" fill="#a78bfa" stroke="#8b5cf6" strokeWidth="2"/>
                  <text x="410" y="160" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">M/z</text>
                  <text x="410" y="210" textAnchor="middle" fontSize="11" fill="#64748b">Analysis</text>
                </g>

                {/* Arrow */}
                <path d="M 450 150 L 520 150" stroke="#8b5cf6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>

                {/* Detector */}
                <g>
                  <rect x="520" y="100" width="80" height="100" fill="#d8b4fe" stroke="#8b5cf6" strokeWidth="2" rx="4"/>
                  <text x="560" y="155" textAnchor="middle" fontSize="12" fill="#1e293b" fontWeight="bold">Ion</text>
                  <text x="560" y="170" textAnchor="middle" fontSize="12" fill="#1e293b" fontWeight="bold">Plumes</text>
                  <text x="560" y="210" textAnchor="middle" fontSize="11" fill="#64748b">Detection</text>
                </g>

                {/* Arrow */}
                <path d="M 610 150 L 680 150" stroke="#8b5cf6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>

                {/* Data */}
                <g>
                  <rect x="680" y="100" width="80" height="100" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2" rx="4"/>
                  <text x="720" y="155" textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="bold">Size</text>
                  <text x="720" y="170" textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="bold">Dist.</text>
                  <text x="720" y="210" textAnchor="middle" fontSize="11" fill="#64748b">Output</text>
                </g>

                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#8b5cf6"/>
                  </marker>
                </defs>
              </svg>
              <p className="text-slate-600">
                Individual nanoparticles are nebulized and enter the plasma torch where they are atomized and ionized. The resulting ion plumes are registered by the mass analyzer, with each particle generating a discrete signal (event). This contrasts with dissolved ions which produce constant background signal.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Figure 2: Particle Shape Modeling</h2>
              <p className="text-slate-600 mb-6">
                SP-ICP-MS can accommodate non-spherical particle geometries. The method determines shape-specific volume relationships to convert ion signal intensity into accurate size measurements for cubes, octahedra, tetrahedra, and other morphologies.
              </p>
              <div className="flex justify-around items-center py-8 bg-white rounded-lg">
                {[
                  { name: 'Sphere', equ: 'V = 4/3πr³' },
                  { name: 'Cube', equ: 'V = a³' },
                  { name: 'Octahedra', equ: 'V = √2/3 a³' },
                  { name: 'Tetrahedra', equ: 'V = a³/6√2' },
                ].map((shape, i) => (
                  <div key={i} className="text-center">
                    <div className="text-sm font-semibold text-slate-900 mb-2">{shape.name}</div>
                    <div className="text-xs text-slate-500 font-mono">{shape.equ}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Figure 3: Composition Distribution</h2>
              <p className="text-slate-600">
                For multimetallic nanoparticles like CuPd and CuPdAg alloys, SP-ICP-MS detects individual particles' elemental composition with single-particle resolution. This enables quantification of composition distributions within the ensemble—critical for understanding alloy formation kinetics and catalyst performance.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Key References</h2>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">•</span>
                  <span>Koolen, C. D., et al. "High-throughput sizing, counting, and elemental analysis of anisotropic multimetallic nanoparticles." ACS Nano 16.8 (2022): 11968-11978.</span>
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
