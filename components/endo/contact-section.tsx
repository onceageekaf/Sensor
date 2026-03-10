"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Award, Users } from "lucide-react"
import Link from "next/link"

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

export function EndoContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Inventors */}
        <FadeIn>
          <p className="text-sm font-medium text-violet-600 tracking-widest uppercase mb-4">The research team</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight max-w-3xl mb-12">
            Meet the inventors
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* PI: Fiona Simpson */}
          <FadeIn delay={100}>
            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center shrink-0">
                  <span className="text-violet-600 font-bold text-xl">FS</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Prof. Fiona Simpson</h3>
                  <p className="text-sm text-violet-600 font-medium">Principal Investigator</p>
                  <p className="text-sm text-slate-400 mt-0.5">University of Queensland</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Professor Simpson leads the Cancer Therapy group at the Frazer Institute, UQ.
                Her cross-disciplinary research spans cell biology, pharmacology, and immunology
                to improve targeted therapy and immunotherapy against cancer. She has spent over
                a decade developing this endocytosis inhibition approach, driven by a personal
                commitment after losing her mother to cancer in 1999.
              </p>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                She is the lead scientific investigator on multiple clinical trials, including
                the CESTEM combination therapy study and the HER2Pro study. Her work has been
                published in over 84 peer-reviewed articles, including in Cell and Nature Reviews Cancer.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2.5 py-1 rounded-full bg-violet-50 text-violet-700 text-xs font-medium">
                  Frazer Institute, UQ
                </span>
                <span className="px-2.5 py-1 rounded-full bg-violet-50 text-violet-700 text-xs font-medium">
                  84+ publications
                </span>
                <span className="px-2.5 py-1 rounded-full bg-violet-50 text-violet-700 text-xs font-medium">
                  NHMRC funded
                </span>
              </div>
              <a
                href="https://frazer.uq.edu.au/research/simpson-group"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-violet-600 hover:text-violet-800 mt-4 font-medium"
              >
                Simpson Group at Frazer Institute
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </FadeIn>

          {/* Co-investigators */}
          <FadeIn delay={200}>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-8">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                    <span className="text-blue-600 font-bold text-xl">JW</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Dr. James Wells</h3>
                    <p className="text-sm text-blue-600 font-medium">Co-Investigator, Immunologist</p>
                    <p className="text-sm text-slate-400 mt-0.5">University of Queensland</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  Expert immunologist working closely with the Simpson group to translate
                  the endocytosis inhibition findings into clinical treatments. His work
                  focuses on establishing protective immune memory responses to prevent
                  cancer recurrence after combination therapy.
                </p>
              </div>

              {/* Key collaborators */}
              <div className="bg-white rounded-2xl border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 text-slate-400" />
                  <h3 className="font-semibold text-slate-900">Key collaborators</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    { name: "Prof. Adam McCluskey", org: "University of Newcastle" },
                    { name: "Prof. Phillip Robinson", org: "Children's Medical Research Institute" },
                    { name: "Prof. Ian Frazer", org: "UQ Diamantina Institute" },
                    { name: "Prof. Rob Parton", org: "UQ Inst. for Molecular Bioscience" },
                    { name: "Prof. Riccardo Dolcetti", org: "Peter MacCallum Cancer Centre" },
                    { name: "Dr. Shannon Joseph", org: "Frazer Institute, UQ" },
                  ].map((c) => (
                    <div key={c.name}>
                      <p className="font-medium text-slate-700">{c.name}</p>
                      <p className="text-slate-400 text-xs">{c.org}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Press & Recognition */}
        <FadeIn>
          <p className="text-sm font-medium text-violet-600 tracking-widest uppercase mb-4 mt-16">Press & Recognition</p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {[
            {
              title: "New drug combination could support better cancer treatments",
              source: "University of Queensland",
              date: "March 6, 2020",
              url: "https://www.uq.edu.au/news/article/2020/03/new-drug-combination-could-support-better-cancer-treatments",
            },
            {
              title: "Drug that keeps surface receptors on cancer cells makes them more visible to immune cells",
              source: "Medical Xpress / Cell Press",
              date: "March 5, 2020",
              url: "https://medicalxpress.com/news/2020-03-drug-surface-receptors-cancer-cells.html",
            },
            {
              title: "Hopes one-two punch cancer treatment will prove knockout blow",
              source: "Brisbane Times",
              date: "March 6, 2020",
              url: "#",
            },
          ].map((article, i) => (
            <FadeIn key={article.title} delay={i * 100}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl border border-slate-200 p-6 hover:border-violet-200 hover:shadow-sm transition-all h-full"
              >
                <p className="text-xs text-slate-400 mb-3">{article.date}</p>
                <h4 className="font-semibold text-slate-900 text-sm leading-snug mb-2">{article.title}</h4>
                <p className="text-xs text-violet-600 font-medium flex items-center gap-1">
                  {article.source}
                  <ExternalLink className="w-3 h-3" />
                </p>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Clinical trials */}
        <FadeIn>
          <div className="bg-violet-50 rounded-2xl border border-violet-100 p-8 mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-5 h-5 text-violet-600" />
              <h3 className="text-xl font-bold text-slate-900">Active Clinical Trials</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">CESTEM Study</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Phase 1b combination safety and efficacy study of cetuximab + prochlorperazine
                  in head and neck cancer, triple-negative breast cancer, and adenoid cystic carcinoma
                  at Princess Alexandra Hospital, Brisbane.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">HER2Pro Study</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Phase 1b dose de-escalation study of high-dose prochlorperazine added to
                  paclitaxel, trastuzumab, and pertuzumab for previously untreated HER2-positive
                  metastatic breast cancer.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Licensing CTA */}
        <FadeIn>
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Licensing opportunity
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-4">
              UniQuest is seeking licensing partners, collaborative partners, or investment for
              preclinical and clinical development of dynamin inhibitors to be used in combination
              with existing and future monoclonal antibody therapies.
            </p>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto mb-8">
              This includes reformulated prochlorperazine and novel chemical entities (NCEs) that
              target dynamin, for use with any ADCC-mediating antibody targeting appropriate receptors.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-violet-600 hover:bg-violet-700 text-white h-12 rounded-xl"
                asChild
              >
                <a href="https://uniquest.com.au/available-technology/endocytosis-inhibitors-to-improve-anti-cancer-monoclonal-antibody-immunotherapy-responses/" target="_blank" rel="noopener noreferrer">
                  Contact UniQuest
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800 bg-transparent h-12 rounded-xl"
                asChild
              >
                <Link href="/endocytosis-inhibitors/deep-dive">
                  Read the technical deep dive
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto">
              <div>
                <p className="text-2xl font-bold text-white">IP</p>
                <p className="text-xs text-slate-400 mt-1">Patent applications filed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">TRL 6</p>
                <p className="text-xs text-slate-400 mt-1">Clinical proof of mechanism</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">2x</p>
                <p className="text-xs text-slate-400 mt-1">Active clinical trials</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
