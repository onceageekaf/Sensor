"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Syringe, Microscope, FlaskConical, Link2, Zap, Tag } from "lucide-react"

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

const applications = [
  {
    id: "adc",
    icon: Syringe,
    title: "Antibody-Drug Conjugates",
    description: "Site-specific incorporation of bioorthogonal handles (like propargyl groups) enables precise conjugation of cytotoxic payloads to therapeutic antibodies, improving homogeneity and therapeutic index.",
    currentMethod: "Random lysine/cysteine conjugation produces heterogeneous mixtures with variable drug-to-antibody ratios.",
    improvement: "Site-specific ncAA incorporation ensures homogeneous ADCs with defined stoichiometry and improved pharmacokinetics.",
    economics: "ADC market: $8B+ (2024). Homogeneous ADCs command premium pricing due to improved safety profiles.",
  },
  {
    id: "crosslinking",
    icon: Link2,
    title: "Protein Crosslinking Studies",
    description: "Photo-activatable crosslinkers (diazirine-bearing ncAAs) enable capture of transient protein-protein interactions in living cells, revealing the interactome.",
    currentMethod: "Chemical crosslinkers are non-specific and can create artifacts. Genetic crosslinkers were limited by poor incorporation.",
    improvement: "Efficient incorporation of crosslinker ncAAs enables systematic mapping of protein interactions at native expression levels.",
    economics: "Structural biology and drug discovery applications. Accelerates target validation and mechanism studies.",
  },
  {
    id: "ptm",
    icon: Tag,
    title: "Post-Translational Modifications",
    description: "Direct incorporation of modified amino acids (acetylated, methylated, phosphorylated) bypasses the need for enzymatic modification, enabling study of specific PTM states.",
    currentMethod: "Enzymatic modification is heterogeneous. Semi-synthesis is laborious and limited to terminal modifications.",
    improvement: "Uniform populations of proteins with defined PTMs at any position, enabling precise functional studies.",
    economics: "PTM dysregulation underlies many diseases. Better tools accelerate therapeutic development.",
  },
  {
    id: "labeling",
    icon: Zap,
    title: "Site-Specific Labeling",
    description: "Bioorthogonal handles enable attachment of fluorophores, PEG chains, or other labels at precise positions without perturbing protein function.",
    currentMethod: "Cysteine-maleimide chemistry is often incompatible with proteins containing essential cysteines.",
    improvement: "Click chemistry-compatible ncAAs provide orthogonal labeling sites that don't interfere with protein function.",
    economics: "Enables next-generation imaging probes and PEGylated biologics with improved pharmacokinetics.",
  },
  {
    id: "enzymes",
    icon: FlaskConical,
    title: "Engineered Enzymes",
    description: "Incorporation of catalytically active ncAAs or mechanistic probes enables creation of enzymes with novel activities or detailed study of catalytic mechanisms.",
    currentMethod: "Site-directed mutagenesis limited to 20 canonical amino acids. Unnatural enzyme activities rare.",
    improvement: "Expanded chemical space enables enzymes with enhanced or novel catalytic properties.",
    economics: "Industrial enzymes market: $7B+. Novel enzyme activities command significant value.",
  },
  {
    id: "vaccines",
    icon: Microscope,
    title: "Enhanced Vaccine Antigens",
    description: "Incorporation of immunostimulatory ncAAs or site-specific conjugation of adjuvants creates more potent vaccine candidates.",
    currentMethod: "Random chemical conjugation of antigens to carriers/adjuvants produces variable products.",
    improvement: "Defined antigen-adjuvant conjugates with optimized immunogenicity and manufacturing consistency.",
    economics: "Precision vaccines with improved efficacy and reduced side effects.",
  },
]

export function ApplicationsSection() {
  const [selectedApp, setSelectedApp] = useState(applications[0].id)
  const activeApp = applications.find(a => a.id === selectedApp) || applications[0]

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-sm font-medium text-emerald-600 tracking-widest uppercase mb-4 text-center">Applications</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight text-center mb-4">
            Enabling Next-Generation Biologics
          </h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">
            From therapeutic proteins to research tools, efficient ncAA incorporation unlocks applications previously limited by production challenges.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Application selector */}
            <div className="space-y-2">
              {applications.map((app) => (
                <button
                  key={app.id}
                  onClick={() => setSelectedApp(app.id)}
                  className={cn(
                    "w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all",
                    selectedApp === app.id
                      ? "bg-emerald-50 border border-emerald-200"
                      : "bg-slate-50 border border-transparent hover:bg-slate-100"
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center",
                    selectedApp === app.id ? "bg-emerald-100 text-emerald-600" : "bg-slate-200 text-slate-500"
                  )}>
                    <app.icon className="w-5 h-5" />
                  </div>
                  <span className={cn(
                    "font-medium text-sm",
                    selectedApp === app.id ? "text-emerald-900" : "text-slate-700"
                  )}>
                    {app.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Application details */}
            <div className="lg:col-span-2 p-8 rounded-2xl border border-slate-200 bg-slate-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <activeApp.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{activeApp.title}</h3>
              </div>

              <p className="text-slate-600 leading-relaxed mb-8">{activeApp.description}</p>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-100">
                  <h4 className="text-sm font-semibold text-rose-800 mb-2">Current Limitation</h4>
                  <p className="text-sm text-rose-700">{activeApp.currentMethod}</p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                  <h4 className="text-sm font-semibold text-emerald-800 mb-2">This Technology Enables</h4>
                  <p className="text-sm text-emerald-700">{activeApp.improvement}</p>
                </div>

                <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <h4 className="text-sm font-semibold text-blue-800 mb-2">Market Opportunity</h4>
                  <p className="text-sm text-blue-700">{activeApp.economics}</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
