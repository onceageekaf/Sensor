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

export default function SensingFruitPage() {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => { setIsVisible(true) }, [])

  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/60 via-white to-white" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lime-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
        </div>
        <div className={cn("relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-slate-600 text-sm font-medium">Empa — Swiss Federal Labs</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 mb-6 leading-tight tracking-tight text-balance">
            Cold chain monitoring,
            <br />
            <span className="text-green-600">fruit-level accuracy.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Biomimetic artificial fruit with integrated temperature sensors that matches the thermal behavior 
            of real produce for precise cold chain monitoring throughout transport and storage.
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
              { value: "Biomimetic", label: "Thermal matching" },
              { value: "Core + Surface", label: "Dual temperature" },
              { value: "Years", label: "Sensor lifespan" },
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
                An artificial fruit designed using a biomimetic approach to match the cooling behavior of real 
                produce, enabling realistic temperature monitoring throughout the cold chain.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="grid lg:grid-cols-2 gap-12 mb-24">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">What is it?</h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Temperature is the single most important parameter affecting produce quality, deterioration, and 
                  shelf life. Current monitoring methods either wound the fruit (point probes) or measure air 
                  temperature only (RFID tags) — neither tracks actual fruit pulp temperature throughout commercial shipments.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  The sensing fruit matches real produce in shape, size, surface texture, color, and internal 
                  composition. It can be packed directly with fresh produce without affecting airflow or cooling 
                  behavior, providing the highest degree of realism for measured core and surface temperatures.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 p-8">
                <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-6">Key Features</h4>
                <div className="space-y-4">
                  {[
                    { name: "Biomimetic Design", desc: "Matches thermal properties of real fruit species" },
                    { name: "Stand-Alone Unit", desc: "Self-powered, integrated wireless sensors" },
                    { name: "Non-Intrusive", desc: "Doesn't affect surrounding produce or airflow" },
                    { name: "Long Lifespan", desc: "Sensors designed for multi-year operation" },
                  ].map((c) => (
                    <div key={c.name} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 shrink-0" />
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
                { name: "Point Probes", desc: "Traditional temperature insertion", issues: ["Wounds the fruit", "Only accessible locations", "Limited placement options", "Not truly representative"] },
                { name: "RFID Tags", desc: "Air temperature monitoring", issues: ["Measures air, not fruit", "No pulp temperature data", "Doesn't track thermal lag", "Surface attachment only"] },
                { name: "Data Loggers", desc: "External temperature recorders", issues: ["Doesn't match fruit properties", "Air temperature focused", "Not integrated with produce", "Limited placement depth"] },
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
                <div className="text-sm font-medium text-green-600">Sensing Fruit</div>
                <div className="text-sm font-medium text-slate-500">Existing Solutions</div>
              </div>
              {[
                { feature: "What is measured", ours: "Actual fruit temperature", others: "Air or surface only" },
                { feature: "Thermal behavior", ours: "Matches real produce", others: "Different properties" },
                { feature: "Placement flexibility", ours: "Deep in cargo", others: "Accessible locations" },
                { feature: "Impact on produce", ours: "None (non-intrusive)", others: "Damages fruit" },
                { feature: "Journey coverage", ours: "Full cold chain", others: "Limited segments" },
              ].map((row, i, arr) => (
                <div key={row.feature} className={cn("grid grid-cols-3 gap-4 p-4", i !== arr.length - 1 && "border-b border-slate-100")}>
                  <div className="text-slate-600">{row.feature}</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /><span className="text-slate-900 font-medium">{row.ours}</span></div>
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
            <p className="text-lg text-slate-500 mb-12 max-w-2xl">From commercial shipments to packaging design validation, sensing fruit enables precise cold chain optimization.</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Commercial Shipping", desc: "Monitor thermal history in precooling, transport, and storage" },
              { title: "Packaging Design", desc: "Verify cooling behavior of novel packaging designs faster" },
              { title: "Quality Certification", desc: "Support cargo quality decisions and cold disinfestation protocols" },
              { title: "Container Development", desc: "Demonstrate new cooling hardware and control software" },
            ].map((app, i) => (
              <FadeIn key={app.title} delay={i * 75}>
                <div className="p-6 rounded-2xl bg-green-50 border border-green-100 h-full">
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
        title="Biomimetic Artificial Fruit for Cold Chain Monitoring"
        publication={{
          title: "Artificial fruit with integrated sensors for accurate temperature monitoring matching real produce thermal behavior",
          journal: "Technology Transfer Opportunity",
          year: "Empa",
        }}
        innovationDetails="A biomimetic artificial fruit with integrated temperature sensors that precisely matches the thermal behavior and characteristics of real produce. This technology enables accurate monitoring of temperature conditions throughout cold chain transport and storage by replicating how real fruits respond thermally to environmental conditions, providing data traceability and quality assurance."
        methodology={[
          "Characterization of thermal properties of real produce",
          "Design and manufacturing of biomimetic artificial fruit body",
          "Integration of precise temperature sensors within structure",
          "Validation against real fruit thermal response profiles",
        ]}
        keyFindings={[
          "Successfully matches thermal behavior of real produce",
          "Provides accurate temperature monitoring throughout cold chain",
          "Enables data traceability for food quality assurance",
          "Withstands realistic transport and storage conditions",
        ]}
        patentStatus="Patent pending"
        trlLevel={5}
      />

      <section id="contact" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="p-8 rounded-2xl border border-slate-200 bg-white">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <span className="text-green-700 text-xl font-bold">TD</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">Dr Thijs Defraeye</h4>
                    <p className="text-sm text-green-600">Multiscale Studies in Building Physics</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4">Empa, Swiss Federal Laboratories</p>
                <a href="mailto:thijs.defraeye@empa.ch" className="text-sm text-green-600 hover:text-green-700 flex items-center gap-1">thijs.defraeye@empa.ch <ExternalLink className="w-3 h-3" /></a>
              </div>
              <div className="p-8 rounded-2xl border border-slate-200 bg-white">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <span className="text-slate-700 text-xl font-bold">MK</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">Dr Markus Kasper</h4>
                    <p className="text-sm text-slate-500">Technology Transfer</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4">Empa, Dübendorf</p>
                <a href="mailto:markus.kasper@empa.ch" className="text-sm text-green-600 hover:text-green-700 flex items-center gap-1">markus.kasper@empa.ch <ExternalLink className="w-3 h-3" /></a>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800 mb-6">
                  <span className="text-green-400 text-sm font-medium">Licensing Opportunity</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 text-balance">Interested in this technology?</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">Available for licensing to fresh produce exporters, importers, and cold chain equipment manufacturers.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Technology Readiness</h3>
                  <p className="text-slate-400 text-sm mb-4">Sensing fruit validated for biomimetic thermal behavior matching real produce. Tunable to specific fruit species or cultivars.</p>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-1">
                      {[1, 2, 3, 4].map((l) => <div key={l} className="flex-1 h-2 bg-green-500 first:rounded-l" />)}
                      {[5, 6, 7, 8, 9].map((l) => <div key={l} className={cn("flex-1 h-2 bg-slate-700", l === 9 && "rounded-r")} />)}
                    </div>
                    <span className="text-sm text-green-400 font-medium shrink-0">TRL 4</span>
                  </div>
                </div>
                <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">IP Status</h3>
                  <p className="text-slate-400 text-sm mb-4">Patent pending. Technology can be customized for specific fruit types and cold chain requirements.</p>
                  <div className="text-sm text-slate-500">Reference: TT-Ref. 2015-140</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-medium h-12 rounded-xl" asChild>
                  <a href="mailto:markus.kasper@empa.ch"><Mail className="w-5 h-5 mr-2" />Contact Empa Technology Transfer</a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400 text-xs">Empa Swiss Federal Laboratories for Materials Science and Technology. Patent pending. TT-Ref. 2015-140.</p>
        </div>
      </footer>
    </main>
  )
}
