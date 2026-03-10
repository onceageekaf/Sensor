"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { AlertTriangle, Zap, Shield } from "lucide-react"

function FadeIn({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function EndoTechnologySection() {
  return (
    <section id="technology" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <FadeIn>
          <p className="text-sm font-medium text-violet-600 tracking-widest uppercase mb-4">The problem</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight max-w-3xl">
            Most cancer patients don{"'"}t respond to antibody immunotherapy
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-3xl leading-relaxed">
            Monoclonal antibodies like cetuximab, trastuzumab, and avelumab are designed to attach to specific
            proteins on tumor cell surfaces and recruit immune cells to destroy the cancer. But for many patients,
            these therapies either fail outright or stop working over time.
          </p>
        </FadeIn>

        {/* Problem explanation */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: AlertTriangle,
              title: "Receptors get swallowed",
              description: "Tumor cells actively pull their surface receptors inside the cell through a process called endocytosis. When the drug targets are hidden inside the cell, antibodies can't reach them.",
              color: "red",
            },
            {
              icon: Zap,
              title: "Uneven target distribution",
              description: "Even in the same tumor, some cells display lots of surface receptors while others show very few. This heterogeneity means the antibody drug only works on a fraction of the cancer cells.",
              color: "amber",
            },
            {
              icon: Shield,
              title: "Weak immune activation",
              description: "Antibody-dependent cell cytotoxicity (ADCC) requires strong physical contact between antibody-coated tumor cells and natural killer (NK) cells. Scattered receptors make this contact too weak to trigger killing.",
              color: "slate",
            },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 100}>
              <div className="bg-white rounded-2xl border border-slate-200 p-6 h-full">
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center mb-4",
                  item.color === "red" ? "bg-red-50" : item.color === "amber" ? "bg-amber-50" : "bg-slate-100"
                )}>
                  <item.icon className={cn(
                    "w-5 h-5",
                    item.color === "red" ? "text-red-500" : item.color === "amber" ? "text-amber-500" : "text-slate-500"
                  )} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* The Solution */}
        <FadeIn>
          <div className="mt-20">
            <p className="text-sm font-medium text-violet-600 tracking-widest uppercase mb-4">The breakthrough</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight max-w-3xl">
              Block endocytosis, force receptors to cluster, unleash the immune system
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-3xl leading-relaxed">
              Researchers at the University of Queensland discovered that temporarily inhibiting
              dynamin - a key enzyme that drives receptor internalization - causes drug target
              receptors to accumulate and cluster on the tumor cell surface. This creates a
              dramatically stronger target for antibody drugs and the immune cells they recruit.
            </p>
          </div>
        </FadeIn>

        {/* Key insight */}
        <FadeIn delay={100}>
          <div className="mt-8 bg-violet-50 rounded-2xl border border-violet-100 p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3">The key insight</h3>
                <p className="text-slate-600 leading-relaxed">
                  Patients with head and neck cancer who naturally had dysfunctional receptor
                  internalization (meaning receptors stayed clustered on the surface) responded
                  well to cetuximab treatment. Those with normal receptor biology did not.
                </p>
                <p className="text-slate-600 leading-relaxed mt-3">
                  This led to a simple but powerful idea: what if you could temporarily recreate
                  that clustered-receptor condition in all patients using a drug?
                </p>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3">The drug: Prochlorperazine (Stemetil)</h3>
                <p className="text-slate-600 leading-relaxed">
                  Prochlorperazine is a well-known anti-nausea drug already prescribed worldwide.
                  In addition to blocking dopamine receptors, it has an off-target effect:
                  it inhibits dynamin, the enzyme responsible for pulling receptors into the cell.
                </p>
                <p className="text-slate-600 leading-relaxed mt-3">
                  At high intravenous doses, it stops receptor trafficking for approximately 4 hours -
                  enough time to line up immune cells when combined with an antibody drug.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Comparison: before and after */}
        <FadeIn delay={100}>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <p className="text-sm font-medium text-red-500 uppercase tracking-wider mb-4">Without treatment</p>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Standard antibody therapy alone</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  Receptors are scattered and frequently pulled inside the cell
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  NK cells make weak, brief contact with tumor cells
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  Only a fraction of tumor cells are killed
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  Resistance develops quickly through receptor downregulation
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-violet-200 p-8">
              <p className="text-sm font-medium text-violet-600 uppercase tracking-wider mb-4">With endocytosis inhibition</p>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Antibody + Prochlorperazine</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                  Receptors are densely clustered on the surface, creating strong antibody binding
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                  NK cells form tight, sustained contacts - {"\""}zipped{"\""} to tumor cells
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                  Dramatically increased ADCC kills far more tumor cells
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                  Overcomes resistance by forcing all cells to display targets uniformly
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
