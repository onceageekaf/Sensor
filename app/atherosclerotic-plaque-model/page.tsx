"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Check, X, AlertTriangle, ExternalLink, FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"

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

export default function AtheroscleroticPlaqueModelPage() {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => { setIsVisible(true) }, [])

  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-red-50/60 via-white to-white" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
        </div>
        <div className={cn("relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-slate-600 text-sm font-medium">University of Zurich</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 mb-6 leading-tight tracking-tight text-balance">
            Human plaques,
            <br />
            <span className="text-red-600">in the lab.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            First bioengineered 3D model of human atherosclerotic plaques for high-throughput drug screening 
            and investigation of atherosclerosis pathomechanisms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-8 h-12 rounded-xl" onClick={() => document.getElementById("technology")?.scrollIntoView({ behavior: "smooth" })}>
              Learn how it works <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 bg-transparent h-12 rounded-xl" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Licensing inquiry
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: "3D Human", label: "Late-stage model" },
              { value: "96/384", label: "Well plate formats" },
              { value: "10%+", label: "Population >60 affected" },
              { value: "TRL 4", label: "Patent pending" },
            ].map((m, i) => (
              <div key={m.label} className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")} style={{ transitionDelay: `${300 + i * 100}ms` }}>
                <div className="text-2xl md:text-3xl font-semibold text-slate-900 mb-1">{m.value}</div>
                <div className="text-sm text-slate-400">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="technology" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="max-w-3xl mb-20">
              <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">The technology</h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                A bioengineered 3D model of human atherosclerotic plaques that shares anatomic and pathological 
                features with native human plaques, enabling investigation of cellular interplay and drug screening.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="grid lg:grid-cols-2 gap-12 mb-24">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">What is it?</h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Atherosclerosis is the major cause of vascular diseases including ischemic heart disease, stroke, 
                  and peripheral arterial disease. It affects 10% of the population over 60 years in the Western 
                  world, driving massive R&D investments in novel therapies.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  This first bioengineered human late-stage atherosclerosis model features a core of monocytes, 
                  macrophages, and dendritic cells embedded in a collagenous and cholesterol-rich matrix, surrounded 
                  by a thin layer of myofibroblasts — mirroring the architecture of actual human fibroatheromas.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 p-8">
                <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-6">Model Architecture</h4>
                <div className="space-y-4">
                  {[
                    { name: "Immune Cell Core", desc: "Monocytes, macrophages, and dendritic cells" },
                    { name: "Cholesterol-Rich Matrix", desc: "Collagenous environment mimicking native plaques" },
                    { name: "Myofibroblast Layer", desc: "Thin surrounding layer as in real fibroatheromas" },
                    { name: "Human Cell-Based", desc: "Patient-specific or commercial cell sources" },
                  ].map((c) => (
                    <div key={c.name} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                      <div>
                        <div className="font-medium text-slate-900">{c.name}</div>
                        <div className="text-sm text-slate-500">{c.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">What exists today?</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-24">
              {[
                { name: "Animal Models", desc: "Mouse/rabbit atherosclerosis", issues: ["Species differences", "Limited human relevance", "Long study timelines", "Ethical concerns"] },
                { name: "2D Cell Culture", desc: "Traditional monolayer cultures", issues: ["No 3D architecture", "Missing cell interactions", "No plaque structure", "Limited disease modeling"] },
                { name: "Tissue Explants", desc: "Human plaque samples", issues: ["Limited availability", "Patient variability", "Cannot control conditions", "Short viability window"] },
              ].map((m) => (
                <div key={m.name} className="bg-white rounded-2xl border border-slate-200 p-6">
                  <h4 className="font-semibold text-slate-900 mb-2">{m.name}</h4>
                  <p className="text-sm text-slate-500 mb-4">{m.desc}</p>
                  <div className="space-y-2">
                    {m.issues.map((issue) => (
                      <div key={issue} className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                        <span className="text-slate-600">{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">Why this is better</h3>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-4 bg-slate-50 border-b border-slate-200">
                <div className="text-sm font-medium text-slate-500">Feature</div>
                <div className="text-sm font-medium text-red-600">This Technology</div>
                <div className="text-sm font-medium text-slate-500">Existing Models</div>
              </div>
              {[
                { feature: "Human relevance", ours: "Human cells, human architecture", others: "Animal or 2D only" },
                { feature: "Disease stage", ours: "Late-stage fibroatheroma", others: "Early stages only" },
                { feature: "Throughput", ours: "96/384-well compatible", others: "Low throughput" },
                { feature: "Reproducibility", ours: "Standardized production", others: "High variability" },
                { feature: "Time-dependent studies", ours: "Full support", others: "Limited window" },
              ].map((row, i, arr) => (
                <div key={row.feature} className={cn("grid grid-cols-3 gap-4 p-4", i !== arr.length - 1 && "border-b border-slate-100")}>
                  <div className="text-slate-600">{row.feature}</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-red-500" /><span className="text-slate-900 font-medium">{row.ours}</span></div>
                  <div className="flex items-center gap-2"><X className="w-4 h-4 text-slate-300" /><span className="text-slate-400">{row.others}</span></div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-semibold text-slate-900 mb-4 tracking-tight">Applications</h2>
            <p className="text-lg text-slate-500 mb-12 max-w-2xl">Accelerating atherosclerosis drug discovery and understanding of disease mechanisms.</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Drug Screening", desc: "High-throughput screening of compounds affecting plaque formation" },
              { title: "Mechanism Studies", desc: "Investigation of cellular interplay and metabolic behavior" },
              { title: "Personalized Medicine", desc: "Patient-specific plaques for genetic predisposition analysis" },
              { title: "Viability Testing", desc: "Time-dependent effects of compounds on cell viability" },
            ].map((app, i) => (
              <FadeIn key={app.title} delay={i * 75}>
                <div className="p-6 rounded-2xl bg-red-50 border border-red-100 h-full">
                  <h3 className="font-semibold text-slate-900 mb-2">{app.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{app.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Key Publication</h3>
              <a href="#" className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200">
                <FileText className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-medium text-slate-900">Biofabricating atherosclerotic plaques: In vitro engineering of a three-dimensional human fibroatheroma model</h4>
                  <p className="text-sm text-slate-500 mt-1">Biomaterials, 2018 • Mallone, Weber, Hoerstrup</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 flex-shrink-0" />
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800 mb-6">
                  <span className="text-red-400 text-sm font-medium">Licensing Opportunity</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 text-balance">Interested in this technology?</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">Available for licensing and collaboration. Inventors: Anna Mallone, Benedikt Weber, Simon Hoerstrup.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Technology Readiness</h3>
                  <p className="text-slate-400 text-sm mb-4">Validated 3D model with confirmed plaque architecture. Published in peer-reviewed journal (Biomaterials).</p>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-1">
                      {[1, 2, 3, 4].map((l) => <div key={l} className="flex-1 h-2 bg-red-500 first:rounded-l" />)}
                      {[5, 6, 7, 8, 9].map((l) => <div key={l} className={cn("flex-1 h-2 bg-slate-700", l === 9 && "rounded-r")} />)}
                    </div>
                    <span className="text-sm text-red-400 font-medium shrink-0">TRL 4</span>
                  </div>
                </div>
                <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">IP Status</h3>
                  <p className="text-slate-400 text-sm mb-4">EP Patent filed August 23, 2017 (EP 17187562.8).</p>
                  <div className="text-sm text-slate-500">Reference: UZ-19/179</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white font-medium h-12 rounded-xl" asChild>
                  <a href="mailto:mail@unitectra.ch"><Mail className="w-5 h-5 mr-2" />Contact Unitectra Zurich</a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400 text-xs">University of Zurich. Patent pending. Ref: UZ-19/179.</p>
        </div>
      </footer>
    </main>
  )
}
