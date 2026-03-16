"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Check, X, AlertTriangle, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { DeepDiveSection } from "@/components/deep-dive-section"

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

export default function HighPermittivitySiliconePage() {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => { setIsVisible(true) }, [])

  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/60 via-white to-white" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
        </div>
        <div className={cn("relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-slate-600 text-sm font-medium">Empa — Swiss Federal Labs</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 mb-6 leading-tight tracking-tight text-balance">
            Soft actuators,
            <br />
            <span className="text-orange-600">lower voltage.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            High permittivity silicone elastomers with permittivity greater than 10, enabling dielectric elastomer actuators 
            that operate at significantly lower driving voltages for robotics, prosthetics, and medical devices.
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
              { value: "ε' > 10", label: "High permittivity" },
              { value: "10%", label: "Strain at 8.5 V/μm" },
              { value: "Low-cost", label: "Scalable synthesis" },
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
                A simple, low-cost, eco-friendly synthesis process for high permittivity silicone-based polymers and elastomers, 
                enabling dielectric elastomer actuators with lower driving voltages.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="grid lg:grid-cols-2 gap-12 mb-24">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">What is it?</h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Dielectric elastomer actuators (DEAs) are stretchable capacitors consisting of a thin elastomeric film 
                  sandwiched between compliant electrodes. When voltage is applied, an electrostatic force compresses 
                  the film, causing it to elongate — a reversible, muscle-like actuation.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  Common elastomers meet mechanical requirements but suffer from low permittivity (ε'), requiring 
                  high driving voltages. This invention provides silicone elastomers with ε' greater than 10, 
                  enabling the same actuation at significantly reduced voltages — critical for medical and wearable applications.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 p-8">
                <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-6">Core Advantages</h4>
                <div className="space-y-4">
                  {[
                    { name: "Tunable Properties", desc: "Dielectric and mechanical properties can be adjusted" },
                    { name: "Homogeneous Materials", desc: "Unlike blending high-permittivity phases into silicone" },
                    { name: "Readily Available", desc: "Uses cheap, common starting materials" },
                    { name: "Easily Scalable", desc: "Simple synthesis process for industrial production" },
                  ].map((c) => (
                    <div key={c.name} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0" />
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
                { name: "Standard Silicones", desc: "PDMS-based elastomers", issues: ["Low permittivity (ε' ~3)", "High voltages required", "Limited actuation strain", "Complex electronics needed"] },
                { name: "Ceramic Composites", desc: "Silicone with ceramic particles", issues: ["Inhomogeneous materials", "Processing difficulties", "Reduced mechanical properties", "Particle aggregation"] },
                { name: "Acrylic Elastomers", desc: "VHB-type adhesive tapes", issues: ["High viscoelastic losses", "Slow actuation response", "Temperature sensitive", "Limited lifetime"] },
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
                <div className="text-sm font-medium text-orange-600">This Technology</div>
                <div className="text-sm font-medium text-slate-500">Existing Solutions</div>
              </div>
              {[
                { feature: "Permittivity", ours: "> 10", others: "~3 (standard PDMS)" },
                { feature: "Material homogeneity", ours: "Fully homogeneous", others: "Particle aggregation" },
                { feature: "Driving voltage", ours: "Significantly reduced", others: "kV range required" },
                { feature: "Synthesis complexity", ours: "Simple, scalable", others: "Complex processing" },
                { feature: "Mechanical properties", ours: "Excellent retention", others: "Often compromised" },
              ].map((row, i, arr) => (
                <div key={row.feature} className={cn("grid grid-cols-3 gap-4 p-4", i !== arr.length - 1 && "border-b border-slate-100")}>
                  <div className="text-slate-600">{row.feature}</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500" /><span className="text-slate-900 font-medium">{row.ours}</span></div>
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
            <p className="text-lg text-slate-500 mb-12 max-w-2xl">Due to the simple working principle and excellent properties of DEAs, applications span numerous industries.</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Soft Robotics", desc: "Lightweight, quiet, muscle-like actuation for robotic systems" },
              { title: "Medical Prosthetics", desc: "Implantable devices requiring low voltage operation" },
              { title: "Haptic Devices", desc: "Tactile feedback systems for VR and consumer electronics" },
              { title: "Energy Harvesting", desc: "Dielectric elastomer generators from mechanical motion" },
            ].map((app, i) => (
              <FadeIn key={app.title} delay={i * 75}>
                <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100 h-full">
                  <h3 className="font-semibold text-slate-900 mb-2">{app.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{app.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive */}
      <DeepDiveSection
        title="High Permittivity Silicone for Dielectric Elastomer Actuators"
        publication={{
          title: "A simple, low cost, eco-friendly, fast, and easily up-scalable synthesis process for high permittivity silicone-based polymers and elastomers",
          journal: "Technology Transfer Opportunity",
          year: "Empa",
        }}
        innovationDetails="A novel synthesis process for silicone elastomers with permittivity greater than 10 enables dielectric elastomer actuators (DEAs) to operate at significantly lower driving voltages. The method is straightforward, leads to homogenous materials unlike blending approaches, uses readily available and cheap starting materials, and is simple and scalable. Demonstrated 10% lateral strain at 8.5 V/μm."
        methodology={[
          "Selection of starting materials with high permittivity and mechanical compatibility",
          "Chemical synthesis of silicone elastomers with tunable composition",
          "Mechanical property optimization through molecular design",
          "Validation of dielectric properties and actuation performance",
        ]}
        keyFindings={[
          "Achieved permittivity > 10, exceeding standard PDMS (~3)",
          "Maintained excellent mechanical properties throughout material composition range",
          "Demonstrated 10% lateral strain at 8.5 V/μm",
          "Significantly reduced driving voltage requirements compared to standard silicones",
        ]}
        patentStatus="Patent pending, Ref. 2013-254"
        trlLevel={4}
      />

      <section id="contact" className="py-24 bg-white">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="p-8 rounded-2xl border border-slate-200 bg-white">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <span className="text-orange-700 text-xl font-bold">DO</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">Dr Dorina M. Opris</h4>
                    <p className="text-sm text-orange-600">Laboratory for Functional Polymers</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4">Empa, Swiss Federal Laboratories</p>
                <a href="mailto:dorina.opris@empa.ch" className="text-sm text-orange-600 hover:text-orange-700 flex items-center gap-1">dorina.opris@empa.ch <ExternalLink className="w-3 h-3" /></a>
              </div>
              <div className="p-8 rounded-2xl border border-slate-200 bg-white">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <span className="text-slate-700 text-xl font-bold">AK</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">Dr Andreas Kündig</h4>
                    <p className="text-sm text-slate-500">Technology Transfer</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4">Empa, Dübendorf</p>
                <a href="mailto:andreas.kuendig@empa.ch" className="text-sm text-orange-600 hover:text-orange-700 flex items-center gap-1">andreas.kuendig@empa.ch <ExternalLink className="w-3 h-3" /></a>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800 mb-6">
                  <span className="text-orange-400 text-sm font-medium">Licensing Opportunity</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 text-balance">Interested in this technology?</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">Available for licensing. Patent pending, Ref. 2013-254.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Technology Readiness</h3>
                  <p className="text-slate-400 text-sm mb-4">Demonstrated 10% lateral strain at 8.5 V/μm. Synthesis process validated for tunable dielectric and mechanical properties.</p>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-1">
                      {[1, 2, 3, 4].map((l) => <div key={l} className="flex-1 h-2 bg-orange-500 first:rounded-l" />)}
                      {[5, 6, 7, 8, 9].map((l) => <div key={l} className={cn("flex-1 h-2 bg-slate-700", l === 9 && "rounded-r")} />)}
                    </div>
                    <span className="text-sm text-orange-400 font-medium shrink-0">TRL 4</span>
                  </div>
                </div>
                <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">IP Status</h3>
                  <p className="text-slate-400 text-sm mb-4">Patent pending. Technology available for licensing to DEA manufacturers and soft robotics developers.</p>
                  <div className="text-sm text-slate-500">Reference: TT-Ref. 2013-254</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-medium h-12 rounded-xl" asChild>
                  <a href="mailto:andreas.kuendig@empa.ch"><Mail className="w-5 h-5 mr-2" />Contact Empa Technology Transfer</a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400 text-xs">Empa Swiss Federal Laboratories for Materials Science and Technology. Patent pending. TT-Ref. 2013-254.</p>
        </div>
      </footer>
    </main>
  )
}
