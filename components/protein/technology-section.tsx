"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { AlertTriangle, Check, X, Zap, FlaskConical, DollarSign } from "lucide-react"

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
      className={cn(
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function TechnologySection() {
  return (
    <section id="technology" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* What is it */}
        <FadeIn>
          <p className="text-sm font-medium text-emerald-600 tracking-widest uppercase mb-4">The Technology</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
            What is Genetic Code Expansion?
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed">
              <strong>Genetic code expansion (GCE)</strong> is a powerful technique that allows scientists to incorporate 
              non-canonical amino acids (ncAAs) into proteins at precisely defined positions. This enables the production 
              of "designer proteins" with novel chemical functionalities not found in nature — including bioorthogonal 
              handles for drug conjugation, crosslinkers for structural studies, and post-translational modifications.
            </p>
          </div>
        </FadeIn>

        {/* The Problem */}
        <FadeIn delay={200}>
          <div className="mt-16 p-8 rounded-2xl bg-rose-50 border border-rose-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-rose-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">The Problem: Poor Uptake Limits Production</h3>
                <p className="text-slate-600 leading-relaxed">
                  Despite its promise, genetic code expansion has been held back by <strong>low protein production yields</strong>. 
                  A key bottleneck is that most ncAAs cannot efficiently cross the bacterial cell membrane — they rely on 
                  passive diffusion or mismatched native transporters, resulting in low intracellular concentrations. 
                  Combined with expensive synthesis costs, this makes industrial-scale production of modified proteins 
                  economically unfeasible.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* The Breakthrough */}
        <FadeIn delay={300}>
          <div className="mt-8 p-8 rounded-2xl bg-emerald-50 border border-emerald-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">The Breakthrough: Hijacking Bacterial Transporters</h3>
                <p className="text-slate-600 leading-relaxed">
                  This technology solves the uptake problem by <strong>hijacking an existing bacterial ABC transporter</strong> (the 
                  oligopeptide permease, Opp) to actively import ncAAs into cells. The key insight: ncAAs are linked to 
                  a tripeptide "Trojan horse" scaffold (G-XisoK) that the transporter recognizes and imports. Once inside 
                  the cell, endogenous peptidases cleave off the carrier, releasing the ncAA for incorporation into proteins.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Comparison Table */}
        <FadeIn delay={400}>
          <div className="mt-16">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Comparison: Traditional vs. This Technology</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 pr-4 text-sm font-semibold text-slate-900">Aspect</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-slate-500">Traditional GCE</th>
                    <th className="text-left py-4 pl-4 text-sm font-semibold text-emerald-600">This Technology</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-slate-100">
                    <td className="py-4 pr-4 text-slate-700">ncAA Uptake</td>
                    <td className="py-4 px-4 text-slate-500">Passive diffusion (low)</td>
                    <td className="py-4 pl-4 text-emerald-700 font-medium">Active transport (5-10x higher)</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-4 pr-4 text-slate-700">Expression Yields</td>
                    <td className="py-4 px-4 text-slate-500">10-30% of wild-type</td>
                    <td className="py-4 pl-4 text-emerald-700 font-medium">Wild-type-like (up to 100%)</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-4 pr-4 text-slate-700">ncAA Diversity</td>
                    <td className="py-4 px-4 text-slate-500">Limited by membrane permeability</td>
                    <td className="py-4 pl-4 text-emerald-700 font-medium">Expanded (11+ new ncAAs enabled)</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-4 pr-4 text-slate-700">Cost Efficiency</td>
                    <td className="py-4 px-4 text-slate-500">High (excess ncAA needed)</td>
                    <td className="py-4 pl-4 text-emerald-700 font-medium">Low (less ncAA required)</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 text-slate-700">Scalability</td>
                    <td className="py-4 px-4 text-slate-500">Challenging</td>
                    <td className="py-4 pl-4 text-emerald-700 font-medium">Industrial-ready</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        {/* Key Features */}
        <FadeIn delay={500}>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                <FlaskConical className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Easy Synthesis</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tripeptide scaffolds are synthesized via standard solid-phase peptide synthesis — no specialized 
                chemistry required.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Evolved Transporters</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                High-throughput directed evolution creates custom transporter variants optimized for specific ncAAs.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                <DollarSign className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Cost-Effective</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Efficient transport means less ncAA material is wasted, dramatically reducing production costs.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
