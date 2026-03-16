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

export default function AMProcessControlPage() {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => { setIsVisible(true) }, [])

  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-white to-white" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-100/50 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        </div>
        <div className={cn("relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-slate-600 text-sm font-medium">Empa — Swiss Federal Labs</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 mb-6 leading-tight tracking-tight text-balance">
            3D printing QC,
            <br />
            <span className="text-blue-600">in real time.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            AI-driven acoustic emission sensing via fiber optic sensors detects defects as they form 
            during additive manufacturing — enabling immediate process correction before waste is produced.
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
              { value: "Real-time", label: "In-situ monitoring" },
              { value: "AI-driven", label: "Signature recognition" },
              { value: "Add-on", label: "Any existing AM machine" },
              { value: "TRL 5", label: "Patent pending" },
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
                Acoustic emission signals from the sintering or melting process carry unique signatures about heat 
                distribution and particle interaction. AI interprets these signatures in real time to determine process quality.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="grid lg:grid-cols-2 gap-12 mb-24">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">What is it?</h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Current additive manufacturing quality control relies on thermal sensors and high-resolution 
                  cameras — but these only detect issues after the fact, and temperature measurements are often 
                  unreliable. There is no existing method to monitor AM quality in real time.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  This invention uses fiber optic acoustic emission (AE) sensors to detect unique sound signatures 
                  produced during sintering or melting. Each signature encodes information about heat distribution 
                  and particle interactions. An AI system classifies these signatures to assess quality in-situ, 
                  enabling both defect detection and adaptive process parameter optimization.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 p-8">
                <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-6">Core Components</h4>
                <div className="space-y-4">
                  {[
                    { name: "Fiber Optic AE Sensors", desc: "Embedded acoustic emission detectors in the AM machine" },
                    { name: "Acoustic Signatures", desc: "Unique sounds from sintering/melting events" },
                    { name: "AI Classification", desc: "Machine learning extraction and recognition of defect patterns" },
                    { name: "Feedback Control Loop", desc: "Self-contained parameter optimization from measured signals" },
                  ].map((c) => (
                    <div key={c.name} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
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
                { name: "Pyrometers", desc: "Temperature measurement of the process zone", issues: ["Post-process quality assessment only", "Discrepancies in measurement reliability", "Cannot detect internal porosity", "No real-time corrective action"] },
                { name: "Photo Diodes", desc: "Optical process zone monitoring", issues: ["Only surface-level detection", "Affected by spatter and smoke", "No acoustic defect signatures", "Slow feedback loop"] },
                { name: "Matrix CCD Cameras", desc: "High-resolution process imaging", issues: ["High resolution but post-factum", "No real-time parameter adjustment", "Expensive optics required", "Cannot predict subsurface defects"] },
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
                <div className="text-sm font-medium text-blue-600">This Technology</div>
                <div className="text-sm font-medium text-slate-500">Existing Solutions</div>
              </div>
              {[
                { feature: "Quality feedback timing", ours: "In real-time", others: "Post-factum only" },
                { feature: "Defect detection depth", ours: "Internal porosity", others: "Surface only" },
                { feature: "Process adaptation", ours: "Automated feedback loop", others: "Manual intervention" },
                { feature: "Integration", ours: "Hardware + software add-on", others: "Machine-specific" },
                { feature: "Intelligence", ours: "AI signature classification", others: "Threshold-based alarms" },
              ].map((row, i, arr) => (
                <div key={row.feature} className={cn("grid grid-cols-3 gap-4 p-4", i !== arr.length - 1 && "border-b border-slate-100")}>
                  <div className="text-slate-600">{row.feature}</div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-500" /><span className="text-slate-900 font-medium">{row.ours}</span></div>
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
            <p className="text-lg text-slate-500 mb-12 max-w-2xl">Versatile integration in any additive manufacturing machine, hardware or software, new or existing.</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "AM Machine Manufacturers", desc: "Integrate as standard hardware/software for quality-assured machines" },
              { title: "Aerospace & Defense", desc: "Critical component production with zero-defect requirements" },
              { title: "Medical Implants", desc: "High-integrity metal printing for patient-specific implants" },
              { title: "Industrial Tooling", desc: "Precision tooling and mold production with consistent quality" },
            ].map((app, i) => (
              <FadeIn key={app.title} delay={i * 75}>
                <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100 h-full">
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
        title="Real-Time Additive Manufacturing Process Control via Acoustic Emission"
        publication={{
          title: "AI-driven acoustic emission sensing for real-time detection and correction of additive manufacturing defects",
          journal: "Technology Transfer Opportunity",
          year: "Empa",
        }}
        innovationDetails="Fiber optic acoustic emission (AE) sensors detect unique sound signatures produced during sintering or melting in additive manufacturing. Each signature encodes information about heat distribution and particle interactions. An AI system classifies these signatures in real-time to assess quality and enable both defect detection and adaptive process parameter optimization, allowing immediate corrective action before waste is produced."
        methodology={[
          "Embedded fiber optic acoustic emission sensors in AM machine",
          "Real-time acoustic signature capture during sintering/melting",
          "Machine learning classification of acoustic signatures for defect patterns",
          "Feedback control loop for automated parameter optimization",
        ]}
        keyFindings={[
          "Successfully detected internal porosity and manufacturing defects",
          "Real-time feedback enables immediate process correction",
          "Hardware/software add-on compatible with existing AM machines",
          "Automated parameter adaptation reduces material waste",
        ]}
        patentStatus="Patent pending, Ref. 2015-124"
        trlLevel={5}
      />

      {/* Contact */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="p-8 rounded-2xl border border-slate-200 bg-white">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <span className="text-blue-700 text-xl font-bold">KW</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">Dr Kilian Wasmer</h4>
                    <p className="text-sm text-blue-600">Advanced Materials Processing</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4">Empa, Swiss Federal Laboratories for Materials Science</p>
                <a href="mailto:kilian.wasmer@empa.ch" className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">kilian.wasmer@empa.ch <ExternalLink className="w-3 h-3" /></a>
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
                <a href="mailto:andreas.kuendig@empa.ch" className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">andreas.kuendig@empa.ch <ExternalLink className="w-3 h-3" /></a>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800 mb-6">
                  <span className="text-blue-400 text-sm font-medium">Licensing Opportunity</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 text-balance">Interested in this technology?</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">This technology is available for integration by AM machine producers and add-on implementation for existing systems. Patent pending, Ref. 2015-124.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Technology Readiness</h3>
                  <p className="text-slate-400 text-sm mb-4">Demonstrated acoustic emission monitoring with AI classification in additive manufacturing environments. Validated for porosity detection and process adaptation.</p>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-1">
                      {[1, 2, 3, 4, 5].map((l) => <div key={l} className="flex-1 h-2 bg-blue-500 first:rounded-l" />)}
                      {[6, 7, 8, 9].map((l) => <div key={l} className={cn("flex-1 h-2 bg-slate-700", l === 9 && "rounded-r")} />)}
                    </div>
                    <span className="text-sm text-blue-400 font-medium shrink-0">TRL 5</span>
                  </div>
                </div>
                <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">IP Status</h3>
                  <p className="text-slate-400 text-sm mb-4">Patent pending. Technology can be licensed for integration in new AM machines or added as a hardware/software module to existing machines.</p>
                  <div className="text-sm text-slate-500">Reference: TT-Ref. 2015-124</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-medium h-12 rounded-xl" asChild>
                  <a href="mailto:andreas.kuendig@empa.ch"><Mail className="w-5 h-5 mr-2" />Contact Empa Technology Transfer</a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400 text-xs">Empa Swiss Federal Laboratories for Materials Science and Technology, Dübendorf. Patent pending. TT-Ref. 2015-124.</p>
        </div>
      </footer>
    </main>
  )
}
