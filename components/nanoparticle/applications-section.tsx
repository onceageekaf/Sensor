"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

const applications = [
  {
    id: "upconversion",
    title: "Upconversion Nanoparticles",
    examples: "NaYF4, LiYF4, NaGdF4, NaLuF4",
    currentMethod: "UV-Vis spectroscopy and TEM imaging with manual counting",
    improvement: "Direct size and composition analysis of rare-earth doped particles in a single measurement",
    economics: {
      market: "$2.8B bioimaging & photonics market",
      benefit: "Reduce QC time from hours to minutes, eliminate batch failures",
    },
  },
  {
    id: "catalysts",
    title: "Transition Metal Catalysts",
    examples: "Cu, Pd, Pt, Rh nanoparticles and alloys",
    currentMethod: "XPS for composition, TEM for size—separate measurements on different instruments",
    improvement: "Comprehensive CuPd, CuAg, CuPdAg alloy characterization with composition distributions",
    economics: {
      market: "$5.2B heterogeneous catalyst market",
      benefit: "Ensure batch uniformity critical for catalyst performance",
    },
  },
  {
    id: "quantum",
    title: "Quantum Dots & Semiconductors",
    examples: "CdSe, CsPbBr3, InP core-shell structures",
    currentMethod: "Photoluminescence spectroscopy, limited composition insight",
    improvement: "Direct elemental analysis of core and shell with single-particle resolution",
    economics: {
      market: "$8.1B display & LED market",
      benefit: "Optimize emission wavelength uniformity for displays",
    },
  },
  {
    id: "biomedical",
    title: "Biomedical Nanoparticles",
    examples: "Gold, silver, iron oxide for diagnostics and therapy",
    currentMethod: "DLS for size, separate ICP-MS digestion for composition",
    improvement: "Non-destructive single-particle analysis with full elemental profile",
    economics: {
      market: "$11.4B nanomedicine market by 2030",
      benefit: "Regulatory compliance with comprehensive batch documentation",
    },
  },
  {
    id: "mof",
    title: "Metal-Organic Frameworks",
    examples: "ZIF-8, HKUST-1, UiO-66",
    currentMethod: "XRD for crystallinity, BET for surface area—no direct particle metrics",
    improvement: "Size distribution of MOF particles with metal content quantification",
    economics: {
      market: "$410M MOF market growing 30% CAGR",
      benefit: "Quality assurance for gas storage and separation applications",
    },
  },
  {
    id: "oxide",
    title: "Metal Oxide Nanoparticles",
    examples: "TiO2, ZnO, Al2O3 for coatings and electronics",
    currentMethod: "Multiple techniques: DLS, TEM, XRF for complete characterization",
    improvement: "Single-instrument analysis with mass fraction accounting for oxide stoichiometry",
    economics: {
      market: "$14.7B metal oxide NP market",
      benefit: "Streamline QC from 4+ techniques to 1",
    },
  },
]

export function ApplicationsSection() {
  const [selectedApp, setSelectedApp] = useState(applications[0])
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

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className={cn(
          "text-center mb-12 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <span className="text-violet-600 font-medium text-sm mb-2 block">Applications</span>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Universal platform for engineered nanoparticles
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Sensitive to {">"} 90 elements and compatible with both organic and aqueous solvents
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Application selector */}
          <div className="space-y-2">
            {applications.map((app) => (
              <button
                key={app.id}
                onClick={() => setSelectedApp(app)}
                className={cn(
                  "w-full text-left p-4 rounded-xl border transition-all",
                  selectedApp.id === app.id
                    ? "bg-violet-50 border-violet-200"
                    : "bg-white border-slate-200 hover:border-violet-200"
                )}
              >
                <div className="font-medium text-slate-900">{app.title}</div>
                <div className="text-xs text-slate-500 mt-1">{app.examples}</div>
              </button>
            ))}
          </div>

          {/* Application details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{selectedApp.title}</h3>
              
              {/* Current method */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                    <svg className="w-3 h-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-slate-500">Current Method</span>
                </div>
                <p className="text-slate-600 pl-7">{selectedApp.currentMethod}</p>
              </div>

              {/* Improvement */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center">
                    <svg className="w-3 h-3 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-violet-600">With SP-ICP-MS</span>
                </div>
                <p className="text-slate-700 pl-7 font-medium">{selectedApp.improvement}</p>
              </div>

              {/* Economics */}
              <div className="bg-white rounded-xl p-5 border border-slate-200">
                <div className="text-sm font-medium text-slate-500 mb-3">Techno-Economic Analysis</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-slate-400 mb-1">Market Size</div>
                    <div className="text-sm font-medium text-slate-900">{selectedApp.economics.market}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-1">Key Benefit</div>
                    <div className="text-sm font-medium text-violet-700">{selectedApp.economics.benefit}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Particle shapes visual */}
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6">
              <div className="text-sm font-medium text-slate-500 mb-4">Supports multiple particle geometries</div>
              <div className="flex justify-around items-center">
                {[
                  { name: "Sphere", shape: <circle cx="25" cy="25" r="20" fill="#8b5cf6" opacity="0.7" /> },
                  { name: "Cube", shape: <rect x="5" y="5" width="40" height="40" fill="#a78bfa" opacity="0.7" rx="2" /> },
                  { name: "Octahedra", shape: <polygon points="25,2 48,25 25,48 2,25" fill="#c084fc" opacity="0.7" /> },
                  { name: "Tetrahedra", shape: <polygon points="25,5 45,45 5,45" fill="#d8b4fe" opacity="0.7" /> },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <svg viewBox="0 0 50 50" className="w-12 h-12 mx-auto mb-2">
                      {item.shape}
                    </svg>
                    <div className="text-xs text-slate-600">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
