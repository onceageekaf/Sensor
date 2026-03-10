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

const results = [
  {
    category: "In Vitro",
    icon: "flask",
    findings: [
      {
        title: "Enhanced ADCC across multiple antibodies",
        description: "Prochlorperazine combined with cetuximab, trastuzumab, or avelumab significantly increased NK cell-mediated killing of tumor cells compared to antibody alone.",
      },
      {
        title: "Receptor clustering confirmed",
        description: "Microscopy showed that prochlorperazine treatment caused EGFR, HER2, and PD-L1 receptors to form dense clusters on the cell membrane, increasing antibody binding sites.",
      },
    ],
  },
  {
    category: "In Vivo (Mouse Studies)",
    icon: "mouse",
    findings: [
      {
        title: "Complete tumor clearance",
        description: "Combination of prochlorperazine + cetuximab resulted in 100% tumor disappearance in 10 mice with head and neck cancer. Neither drug alone achieved this.",
      },
      {
        title: "Metastasis prevention",
        description: "Combination therapy with avelumab significantly reduced metastases in treated mice compared to either treatment alone.",
      },
      {
        title: "Long-term immune memory",
        description: "When the same cancer was re-introduced 4 weeks after treatment, it was rapidly eliminated. The immune system had learned to recognize and destroy the cancer on its own.",
      },
    ],
  },
  {
    category: "Clinical (Human Proof of Mechanism)",
    icon: "hospital",
    findings: [
      {
        title: "Receptor clustering in patients",
        description: "In 5 head and neck cancer patients, a single IV dose of prochlorperazine increased EGFR clustering on tumor cells within hours, as confirmed by before-and-after biopsies.",
      },
      {
        title: "Uniform target availability",
        description: "Prochlorperazine eliminated tumor heterogeneity - after treatment, all tumor cells displayed receptors on their surface, not just a fraction.",
      },
      {
        title: "First verified endocytosis manipulation in humans",
        description: "This was the first time anyone demonstrated deliberate, verified manipulation of endocytosis in human patients, opening a new frontier in drug development.",
      },
    ],
  },
]

export function EndoResultsSection() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-sm font-medium text-violet-600 tracking-widest uppercase mb-4">Key results</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight max-w-3xl">
            From lab bench to bedside
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-3xl leading-relaxed">
            This technology has been validated at every stage - in cell cultures, animal models, and in a
            first-in-human clinical proof-of-mechanism study.
          </p>
        </FadeIn>

        <div className="mt-12 space-y-8">
          {results.map((group, gi) => (
            <FadeIn key={group.category} delay={gi * 100}>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                {/* Category header */}
                <div className="px-8 py-5 border-b border-slate-100 flex items-center gap-4">
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center",
                    gi === 0 ? "bg-teal-50" : gi === 1 ? "bg-amber-50" : "bg-violet-50"
                  )}>
                    {gi === 0 && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
                        <path d="M8.5 2h7" />
                      </svg>
                    )}
                    {gi === 1 && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    )}
                    {gi === 2 && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
                        <path d="M2 20h20" />
                        <path d="M14 12v.01" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{group.category}</h3>
                  </div>
                </div>

                {/* Findings */}
                <div className="divide-y divide-slate-100">
                  {group.findings.map((finding) => (
                    <div key={finding.title} className="px-8 py-5">
                      <h4 className="font-semibold text-slate-900 mb-1">{finding.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{finding.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
