"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

function FadeIn({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true) }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

const applications = [
  {
    title: "Head & Neck Cancer",
    antibody: "Cetuximab (anti-EGFR)",
    currentApproach: "Cetuximab is given alone or with radiation/chemo. Response rates are around 10-20% as monotherapy. Many patients progress due to receptor downregulation.",
    improvement: "Combination with prochlorperazine clusters EGFR on the tumor surface, dramatically increasing NK cell engagement. In mice, 100% tumor clearance was observed. Phase 1b trial is ongoing.",
    trialStatus: "Phase 1b (CESTEM) - active enrollment",
    market: "$2.8B antibody market for HNSCC",
    color: "violet",
  },
  {
    title: "HER2+ Breast Cancer",
    antibody: "Trastuzumab (anti-HER2)",
    currentApproach: "Trastuzumab (Herceptin) is the standard of care but 15-25% of HER2+ patients don't respond initially, and many develop resistance within a year.",
    improvement: "By clustering HER2 receptors and preventing their internalization, the combination approach overcomes a major resistance mechanism and enhances ADCC-mediated killing of breast cancer cells.",
    trialStatus: "HER2Pro Phase 1b dose de-escalation study - active",
    market: "$8.5B HER2-targeted therapy market",
    color: "pink",
  },
  {
    title: "PD-L1 Expressing Tumors",
    antibody: "Avelumab (anti-PD-L1)",
    currentApproach: "Checkpoint inhibitors revolutionized oncology, but many patients don't respond. Avelumab is unique among PD-1/PD-L1 drugs because it can trigger ADCC, not just checkpoint blockade.",
    improvement: "Prochlorperazine clusters PD-L1 on tumor surfaces, enhancing avelumab's dual mechanism: both immune checkpoint release and direct NK cell killing. Mouse studies showed reduced tumor growth and fewer metastases.",
    trialStatus: "Preclinical - strong in vivo data",
    market: "$35B+ immune checkpoint therapy market",
    color: "blue",
  },
  {
    title: "Triple-Negative Breast Cancer",
    antibody: "Multiple candidates",
    currentApproach: "TNBC lacks HER2, ER, and PR receptors, making it harder to target. Current options are limited to chemotherapy and newer immunotherapy combinations with modest response rates.",
    improvement: "By clustering whichever surface markers are present (including PD-L1), prochlorperazine can create targetable receptor clusters even on tumors with traditionally low target expression.",
    trialStatus: "Phase 1b safety trial - active",
    market: "$1.5B TNBC therapeutic market",
    color: "emerald",
  },
  {
    title: "Adenoid Cystic Carcinoma",
    antibody: "EGFR-targeting antibodies",
    currentApproach: "A rare but aggressive salivary gland cancer with very limited treatment options. No targeted therapies are specifically approved for this indication.",
    improvement: "Prochlorperazine-enhanced antibody therapy offers a potential treatment for an underserved cancer with high unmet medical need. Included in the Phase 1b CESTEM trial.",
    trialStatus: "Phase 1b (CESTEM) - active enrollment",
    market: "Rare disease with orphan drug potential",
    color: "amber",
  },
  {
    title: "Beyond Cancer: Future Applications",
    antibody: "Various / Experimental",
    currentApproach: "Endocytosis is involved in viral entry (HIV, Dengue, Ebola), epilepsy (receptor trafficking), and chronic kidney disease. Current approaches don't target this process.",
    improvement: "Temporary, controlled endocytosis inhibition could enhance anti-HIV antibodies, improve control of neurological receptor trafficking in epilepsy, and modify disease progression in chronic kidney disease.",
    trialStatus: "Conceptual / early research",
    market: "Multi-billion dollar opportunity across indications",
    color: "slate",
  },
]

export function EndoApplicationsSection() {
  const [expandedApp, setExpandedApp] = useState<number | null>(0)

  return (
    <section id="applications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-sm font-medium text-violet-600 tracking-widest uppercase mb-4">Applications</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight max-w-3xl">
            A platform technology across cancer types
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-3xl leading-relaxed">
            Because endocytosis is universal to all cells, this approach can enhance any monoclonal antibody
            that works through ADCC - across different cancer types and surface targets.
          </p>
        </FadeIn>

        <div className="mt-12 space-y-4">
          {applications.map((app, i) => (
            <FadeIn key={app.title} delay={i * 50}>
              <div
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden",
                  expandedApp === i ? "border-violet-200 bg-violet-50/30" : "border-slate-200 bg-white hover:border-slate-300"
                )}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  onClick={() => setExpandedApp(expandedApp === i ? null : i)}
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-3 h-3 rounded-full",
                      app.color === "violet" ? "bg-violet-400" :
                      app.color === "pink" ? "bg-pink-400" :
                      app.color === "blue" ? "bg-blue-400" :
                      app.color === "emerald" ? "bg-emerald-400" :
                      app.color === "amber" ? "bg-amber-400" : "bg-slate-400"
                    )} />
                    <div>
                      <h3 className="font-semibold text-slate-900">{app.title}</h3>
                      <p className="text-sm text-slate-400">{app.antibody}</p>
                    </div>
                  </div>
                  <svg
                    className={cn("w-5 h-5 text-slate-400 transition-transform", expandedApp === i && "rotate-180")}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedApp === i && (
                  <div className="px-6 pb-6 pt-0">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-white rounded-xl p-5 border border-slate-100">
                        <p className="text-xs font-medium text-red-500 uppercase tracking-wider mb-2">Current approach & limitations</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{app.currentApproach}</p>
                      </div>
                      <div className="bg-white rounded-xl p-5 border border-violet-100">
                        <p className="text-xs font-medium text-violet-600 uppercase tracking-wider mb-2">How this technology improves it</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{app.improvement}</p>
                      </div>
                      <div className="bg-white rounded-xl p-5 border border-slate-100">
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Market & status</p>
                        <p className="text-sm text-slate-600 leading-relaxed mb-2">{app.market}</p>
                        <span className={cn(
                          "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
                          app.trialStatus.includes("Phase") ? "bg-green-50 text-green-700" :
                          app.trialStatus.includes("Preclinical") ? "bg-amber-50 text-amber-700" : "bg-slate-100 text-slate-600"
                        )}>
                          <span className={cn(
                            "w-1.5 h-1.5 rounded-full",
                            app.trialStatus.includes("Phase") ? "bg-green-400" :
                            app.trialStatus.includes("Preclinical") ? "bg-amber-400" : "bg-slate-400"
                          )} />
                          {app.trialStatus}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
