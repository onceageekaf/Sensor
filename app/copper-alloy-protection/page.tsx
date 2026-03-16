"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Check, X, AlertTriangle, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

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

export default function CopperAlloyPage() {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => { setIsVisible(true) }, [])

  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/60 via-white to-white" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
        </div>
        <div className={cn("relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-slate-600 text-sm font-medium">University of Neuchâtel</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 mb-6 leading-tight tracking-tight text-balance">
            Copper protection,
            <br />
            <span className="text-amber-600">naturally.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            A fungal strain that induces a stable, durable protective patina on copper and bronze surfaces — 
            replacing toxic organic coatings with a field-proven ecological alternative.
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
              { value: "Eco-friendly", label: "No toxic inhibitors" },
              { value: "Durable", label: "Insoluble patina" },
              { value: "TRL 5", label: "Field-proven method" },
              { value: "Multi-use", label: "Heritage & architecture" },
            ].map((m, i) => (
              <div key={m.label} className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")} style={{ transitionDelay: `${300 + i * 100}ms` }}>
                <div className="text-2xl md:text-3xl font-semibold text-slate-900 mb-1">{m.value}</div>
                <div className="text-sm text-slate-400">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="max-w-3xl mb-20">
              <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">The technology</h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                A biologically-induced protective patina using a fungal strain that actively converts copper surface layers 
                into stable, insoluble compounds — a sustainable alternative to toxic organic coatings.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="grid lg:grid-cols-2 gap-12 mb-24">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">What is it?</h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Copper and bronze surfaces corrode progressively, threatening cultural heritage artefacts, sculptures,
                  and architectural elements. Current solutions rely on waxes, resins, and toxic corrosion inhibitors 
                  that require regular reapplication and pose environmental hazards.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  This method uses a carefully selected fungal strain to induce formation of a chemically stable 
                  protective patina directly on the copper surface. Unlike coatings, the patina is an integral part 
                  of the surface itself — insoluble, preventing staining of adjacent materials and actively 
                  stabilizing existing corrosion.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 p-8">
                <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-6">Core Components</h4>
                <div className="space-y-4">
                  {[
                    { name: "Fungal Strain", desc: "Selected strain with copper patina-inducing properties" },
                    { name: "Active Stabilization", desc: "Converts surface into chemically stable compounds" },
                    { name: "Insoluble Patina", desc: "Prevents run-off staining of adjacent materials" },
                    { name: "Treatment Kit", desc: "Tailorable to specific application demands" },
                  ].map((c) => (
                    <div key={c.name} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
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
                { name: "Organic Coatings (Waxes)", desc: "Topical application of wax layers", issues: ["Regular reapplication required", "Does not stop underlying corrosion", "Prone to UV degradation", "Alters visual appearance"] },
                { name: "Synthetic Resins", desc: "Polymer-based protective films", issues: ["Trap moisture underneath", "Difficult to remove", "Non-reversible application", "Aging and yellowing"] },
                { name: "Toxic Inhibitors", desc: "Chemical corrosion inhibitors", issues: ["Environmental toxicity", "Skin and eye irritants", "Regulatory restrictions", "Need protective equipment"] },
              ].map((m) => (
                <div key={m.name} className="bg-white rounded-2xl border border-slate-200 p-6">
                  <h4 className="font-semibold text-slate-900 mb-2">{m.name}</h4>
                  <p className="text-sm text-slate-500 mb-4">{m.desc}</p>
                  <div className="space-y-2">
                    {m.issues.map((i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                        <span className="text-slate-600">{i}</span>
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
                <div className="text-sm font-medium text-amber-600">This Technology</div>
                <div className="text-sm font-medium text-slate-500">Existing Solutions</div>
              </div>
              {[
                { feature: "Corrosion mechanism", ours: "Actively stabilized", others: "Passively covered" },
                { feature: "Toxicity", ours: "Eco-friendly", others: "Toxic inhibitors" },
                { feature: "Durability", ours: "Insoluble patina", others: "Organic coating degrades" },
                { feature: "Visual effect", ours: "Uniform, natural patina", others: "Uneven chromatic differences" },
                { feature: "Reversibility", ours: "Tailorable approach", others: "Often irreversible" },
              ].map((row, i, arr) => (
                <div key={row.feature} className={cn("grid grid-cols-3 gap-4 p-4", i !== arr.length - 1 && "border-b border-slate-100")}>
                  <div className="text-slate-600">{row.feature}</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-500" /><span className="text-slate-900 font-medium">{row.ours}</span></div>
                  <div className="flex items-center gap-2"><X className="w-4 h-4 text-slate-300" /><span className="text-slate-400">{row.others}</span></div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-semibold text-slate-900 mb-4 tracking-tight">Applications</h2>
            <p className="text-lg text-slate-500 mb-12 max-w-2xl">The method has been successfully demonstrated on a wide range of copper-bearing objects.</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Cultural Heritage", desc: "Conservation of museum artefacts and archaeological finds" },
              { title: "Architecture", desc: "Protection of copper roofing, facades, and structural elements" },
              { title: "Sculpture", desc: "Artists' copper and bronze works, indoor and outdoor" },
              { title: "Decorative Objects", desc: "Pre-patination and aesthetic treatment of copper products" },
            ].map((app, i) => (
              <FadeIn key={app.title} delay={i * 75}>
                <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100 h-full">
                  <h3 className="font-semibold text-slate-900 mb-2">{app.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{app.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="p-8 rounded-2xl border border-slate-200 bg-white">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                    <span className="text-amber-700 text-xl font-bold">EJ</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">Dr Edith Joseph</h4>
                    <p className="text-sm text-amber-600">Research Team Lead</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4">Laboratoire de Microbiologie, University of Neuchâtel</p>
                <a href="mailto:edith.joseph@unine.ch" className="text-sm text-amber-600 hover:text-amber-700 flex items-center gap-1">edith.joseph@unine.ch <ExternalLink className="w-3 h-3" /></a>
              </div>
              <div className="p-8 rounded-2xl border border-slate-200 bg-white">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <span className="text-slate-700 text-xl font-bold">CN</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">Dr Claudia Nash</h4>
                    <p className="text-sm text-slate-500">Technology Transfer Office</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4">University of Neuchâtel, SRI</p>
                <a href="mailto:claudia.nash@unine.ch" className="text-sm text-amber-600 hover:text-amber-700 flex items-center gap-1">claudia.nash@unine.ch <ExternalLink className="w-3 h-3" /></a>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800 mb-6">
                  <span className="text-amber-400 text-sm font-medium">Licensing Opportunity</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 text-balance">Interested in this technology?</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  Available for collaboration, consultancy, and service engagements. Treatment kits and on-site applications are possible.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Technology Readiness</h3>
                  <p className="text-slate-400 text-sm mb-4">Field-proven on cultural heritage artefacts, sculptures, and architectural monuments. Biological patina prevents further corrosive destruction.</p>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-1">
                      {[1, 2, 3, 4, 5].map((l) => <div key={l} className="flex-1 h-2 bg-amber-500 first:rounded-l" />)}
                      {[6, 7, 8, 9].map((l) => <div key={l} className={cn("flex-1 h-2 bg-slate-700", l === 9 && "rounded-r")} />)}
                    </div>
                    <span className="text-sm text-amber-400 font-medium shrink-0">TRL 5</span>
                  </div>
                </div>
                <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Opportunity Type</h3>
                  <p className="text-slate-400 text-sm mb-4">Open to collaboration and service engagements. Treatment can be tailored to specific demands of conservation, architecture, and artistic applications.</p>
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <span>Collaboration</span>
                    <span className="text-slate-700">|</span>
                    <span>Consultancy</span>
                    <span className="text-slate-700">|</span>
                    <span>On-site service</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-medium h-12 rounded-xl" asChild>
                  <a href="mailto:claudia.nash@unine.ch"><Mail className="w-5 h-5 mr-2" />Contact Technology Transfer</a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400 text-xs">University of Neuchâtel — Laboratoire de Microbiologie. Patent pending.</p>
        </div>
      </footer>
    </main>
  )
}
