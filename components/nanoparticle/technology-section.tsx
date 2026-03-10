"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

export function TechnologySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  const existingMethods = [
    {
      name: "UV-Vis Spectroscopy",
      limitation: "Only provides bulk averages, no single-particle resolution",
    },
    {
      name: "Electron Microscopy",
      limitation: "Low throughput, tedious sample prep, small sample sizes",
    },
    {
      name: "Dynamic Light Scattering",
      limitation: "Limited to size only, no composition data",
    },
    {
      name: "Zeta Potential",
      limitation: "Surface charge only, indirect measurements",
    },
  ]

  return (
    <section id="technology" ref={sectionRef} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* What is it */}
        <div className={cn(
          "mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <span className="text-violet-600 font-medium text-sm mb-2 block">What is it?</span>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Single-Particle ICP-MS for Nanoparticle Analysis
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-3xl">
            Engineered inorganic nanoparticles (EINPs) are making breakthroughs in LED devices, biosensors, 
            and catalysis. Their properties depend critically on particle size, composition, and shape—yet 
            current QC methods require multiple tools and provide only batch-limited results. This technology 
            uses inductively-coupled plasma mass spectrometry (ICP-MS) to characterize individual nanoparticles, 
            delivering size and composition distributions in a single, rapid measurement.
          </p>
        </div>

        {/* Core components */}
        <div className={cn(
          "grid md:grid-cols-3 gap-6 mb-16 transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          {[
            {
              title: "Nebulization & Plasma",
              description: "Diluted NP dispersions are nebulized and introduced directly into a plasma torch where particles are atomized and ionized",
              icon: (
                <svg viewBox="0 0 48 48" className="w-10 h-10">
                  <circle cx="24" cy="24" r="20" fill="#ede9fe" />
                  <circle cx="24" cy="24" r="8" fill="#8b5cf6" />
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <circle key={i} cx={24 + 14 * Math.cos(angle * Math.PI / 180)} cy={24 + 14 * Math.sin(angle * Math.PI / 180)} r="3" fill="#a78bfa" />
                  ))}
                </svg>
              ),
            },
            {
              title: "Mass Analysis",
              description: "Ion plumes from individual particles are registered by quadrupole or time-of-flight mass analyzers with atomistic precision",
              icon: (
                <svg viewBox="0 0 48 48" className="w-10 h-10">
                  <rect x="4" y="16" width="40" height="16" fill="#ede9fe" rx="2" />
                  <path d="M8 24 L16 20 L24 28 L32 18 L40 24" stroke="#8b5cf6" strokeWidth="2" fill="none" />
                  {[12, 20, 28, 36].map((x, i) => (
                    <rect key={i} x={x-2} y="32" width="4" height={8 + i * 3} fill="#a78bfa" />
                  ))}
                </svg>
              ),
            },
            {
              title: "Data Processing",
              description: "Intensity histograms are converted to size distributions using shape-specific geometric models for cubes, tetrahedra, and more",
              icon: (
                <svg viewBox="0 0 48 48" className="w-10 h-10">
                  <rect x="6" y="28" width="8" height="12" fill="#c084fc" />
                  <rect x="16" y="20" width="8" height="20" fill="#a78bfa" />
                  <rect x="26" y="12" width="8" height="28" fill="#8b5cf6" />
                  <rect x="36" y="24" width="8" height="16" fill="#c084fc" />
                  <path d="M10 26 L20 18 L30 10 L40 22" stroke="#6d28d9" strokeWidth="2" fill="none" strokeDasharray="4 2" />
                </svg>
              ),
            },
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 rounded-2xl p-6">
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Existing methods */}
        <div className={cn(
          "transition-all duration-700 delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <span className="text-violet-600 font-medium text-sm mb-2 block">The problem with existing methods</span>
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Current QC is fragmented, slow, and batch-limited
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {existingMethods.map((method, i) => (
              <div key={i} className="flex gap-4 p-4 bg-red-50/50 rounded-xl border border-red-100">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-slate-900">{method.name}</div>
                  <div className="text-sm text-slate-500">{method.limitation}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-medium text-slate-500">Capability</th>
                  <th className="text-center py-3 px-4 font-medium text-slate-500">Traditional Methods</th>
                  <th className="text-center py-3 px-4 font-medium text-violet-600">SP-ICP-MS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { capability: "Single-particle resolution", traditional: false, new: true },
                  { capability: "Size distribution", traditional: "Partial", new: true },
                  { capability: "Composition analysis", traditional: "Separate test", new: true },
                  { capability: "In-line monitoring", traditional: false, new: true },
                  { capability: "Organic solvent compatible", traditional: "Varies", new: true },
                  { capability: ">90 elements", traditional: false, new: true },
                  { capability: "Shape modeling", traditional: false, new: true },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="py-3 px-4 text-slate-700">{row.capability}</td>
                    <td className="py-3 px-4 text-center">
                      {row.traditional === true ? (
                        <span className="text-green-500">Yes</span>
                      ) : row.traditional === false ? (
                        <span className="text-red-400">No</span>
                      ) : (
                        <span className="text-amber-500">{row.traditional}</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {row.new === true ? (
                        <span className="inline-flex items-center gap-1 text-violet-600 font-medium">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Yes
                        </span>
                      ) : (
                        <span className="text-red-400">No</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
