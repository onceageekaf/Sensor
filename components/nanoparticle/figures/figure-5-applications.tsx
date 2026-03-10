'use client'

import { useState } from 'react'

export function Figure5Applications() {
  const [activeApp, setActiveApp] = useState(0)

  const applications = [
    {
      title: 'Upconversion Nanoparticles',
      description: 'Quality control of rare-earth doped particles for biomedical imaging',
      metrics: ['Size: 20-50 nm', 'Elements: Yb, Er, Tm', 'Homogeneity: >95%'],
      color: 'bg-rose-50 border-rose-200',
    },
    {
      title: 'Plasmonic Particles',
      description: 'Gold and silver nanoparticles for catalysis and sensing',
      metrics: ['Size: 10-100 nm', 'Purity check', 'Aggregation detection'],
      color: 'bg-amber-50 border-amber-200',
    },
    {
      title: 'Quantum Dots',
      description: 'CdSe core-shell particles for LED and display applications',
      metrics: ['Size: 2-10 nm', 'Shell composition', 'Defect detection'],
      color: 'bg-blue-50 border-blue-200',
    },
    {
      title: 'Metal Oxides',
      description: 'TiO2, ZnO particles for environmental and catalytic use',
      metrics: ['Size distribution', 'Doping levels', 'Crystallinity'],
      color: 'bg-purple-50 border-purple-200',
    },
  ]

  const app = applications[activeApp]

  return (
    <div className="w-full bg-white border border-slate-100 rounded-xl p-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-slate-900 mb-2">Industrial Applications</h3>
        <p className="text-slate-600 mb-6">SP-ICP-MS enables quality control across multiple nanoparticle production platforms</p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mb-8">
          {applications.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveApp(idx)}
              className={`p-3 rounded-lg text-left text-sm font-medium transition-all ${
                activeApp === idx
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className={`p-8 rounded-lg border-2 ${app.color}`}>
          <h4 className="text-lg font-semibold text-slate-900 mb-2">{app.title}</h4>
          <p className="text-slate-700 mb-6">{app.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {app.metrics.map((metric, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-sm text-slate-600">{metric}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 p-6 bg-slate-50 rounded-lg border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-3">Key Benefits for This Application</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">•</span>
              <span className="text-slate-700 text-sm">Single-particle resolution eliminates ensemble averaging artifacts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">•</span>
              <span className="text-slate-700 text-sm">Full elemental profiling identifies impurities and doping</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">•</span>
              <span className="text-slate-700 text-sm">Real-time monitoring enables in-process quality control</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">•</span>
              <span className="text-slate-700 text-sm">Batch consistency and compliance documentation</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
