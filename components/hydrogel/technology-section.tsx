'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function HydrogelTechnologySection() {
  const [expandedIdx, setExpandedIdx] = useState(0)

  return (
    <section id="technology" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">What is it?</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A synthetic, biodegradable polyethylene glycol (PEG) hydrogel platform that creates a microporous 3D microenvironment mimicking early bone development. Using polymerization-induced phase separation (PIPS), the hydrogel forms tunable interconnected pores while cells are encapsulated, enabling rapid 3D bone cell network formation and real-time collagen imaging on microfluidic chips.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">The Problem</h3>
          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <h4 className="font-semibold text-slate-900 mb-2">Current In Vitro Models</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Nanoscale pores (5-100nm) prevent cell spreading without matrix degradation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Natural matrices (collagen, Matrigel) show batch-to-batch variation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Poor simulation of interstitial fluid flow critical for bone development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Cannot visualize cell-secreted extracellular matrix in real-time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">The Breakthrough</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-emerald-700 mb-3">Microporous Architecture</h4>
              <p className="text-slate-700">5-20μm interconnected pores created in-situ during polymerization, enabling immediate cell spreading without waiting for degradation</p>
            </div>
            <div>
              <h4 className="font-semibold text-emerald-700 mb-3">Tunable Degradation</h4>
              <p className="text-slate-700">MMP-sensitive crosslinks enable cells to actively remodel matrix during osteogenic differentiation and mineralization</p>
            </div>
            <div>
              <h4 className="font-semibold text-emerald-700 mb-3">Transparent & Fluorescent</h4>
              <p className="text-slate-700">PEG hydrogels are transparent, enabling time-lapse imaging of fluid flow and cell-secreted collagen fibers</p>
            </div>
            <div>
              <h4 className="font-semibold text-emerald-700 mb-3">Microfluidic Integration</h4>
              <p className="text-slate-700">On-chip perfusion culture provides physiological fluid shear stress critical for bone formation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
