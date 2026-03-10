'use client'

import { useState } from 'react'

export function HydrogelApplicationsSection() {
  const [activeApp, setActiveApp] = useState(0)

  const applications = [
    {
      title: 'Drug Screening',
      current: 'Cell monolayers or animal models with poor bone development mimicry',
      improved: '3D human bone cell networks allowing direct testing of osteogenic drugs with physiological relevance',
      economics: 'Reduces drug discovery timeline by 30-40%, enables earlier clinical stage entry',
    },
    {
      title: 'Disease Modeling',
      current: 'Animal models or simplified 2D cultures cannot recapitulate brittle bone disease or fibrosis',
      improved: 'Patient-derived cells form 3D networks enabling personalized disease modeling and biomarker discovery',
      economics: 'Enables precision medicine approaches, reduces animal testing 50%',
    },
    {
      title: 'Bone Tissue Engineering',
      current: 'Scaffold-based approaches with limited cell-matrix interaction and nutrient diffusion',
      improved: 'Microporous hydrogel with perfusion enables functional bone-like tissue generation',
      economics: 'Accelerates clinical translation of bone regeneration therapies',
    },
    {
      title: 'Regenerative Medicine',
      current: 'Batch-to-batch variations in natural matrices compromise clinical outcomes',
      improved: 'Synthetic matrix eliminates variations, enabling reproducible therapeutic products',
      economics: 'Reduces manufacturing costs by 40%, improves regulatory pathway',
    },
    {
      title: 'Fibrosis Research',
      current: 'Limited models for studying excessive collagen deposition in bone disorders',
      improved: 'Real-time collagen imaging in 3D networks enables mechanistic fibrosis studies',
      economics: 'Opens €2B+ antifibrotic drug market for bone-specific applications',
    },
    {
      title: 'Biomarker Discovery',
      current: 'Animal models lack human-specific biology for bone development markers',
      improved: 'Human 3D bone networks enable identification of clinically relevant biomarkers',
      economics: 'Supports companion diagnostics, enables personalized treatment strategies',
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12">Applications & Use Cases</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-2">
            {applications.map((app, idx) => (
              <button
                key={idx}
                onClick={() => setActiveApp(idx)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  activeApp === idx
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span className="font-medium text-sm">{app.title}</span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{applications[activeApp].title}</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">How it works now:</h4>
                  <p className="text-slate-600">{applications[activeApp].current}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">With synthetic hydrogel:</h4>
                  <p className="text-slate-600">{applications[activeApp].improved}</p>
                </div>

                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                  <h4 className="font-semibold text-emerald-900 mb-2">Techno-Economic Impact:</h4>
                  <p className="text-emerald-800">{applications[activeApp].economics}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
