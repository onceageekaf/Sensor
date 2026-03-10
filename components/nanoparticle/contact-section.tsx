"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Mail, Award, FileText, Newspaper } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const inventors = [
  {
    name: "Dr. Cedric D. Koolen",
    role: "Lead Inventor",
    affiliation: "EPFL / Empa",
    bio: "Researcher at the Laboratory of Materials for Renewable Energy (LMER), specializing in nanoparticle synthesis and characterization for catalysis applications.",
    email: "cedric.koolen@epfl.ch",
    link: "https://www.epfl.ch/labs/lmer/",
  },
  {
    name: "Prof. Andreas Züttel",
    role: "Principal Investigator",
    affiliation: "EPFL LMER",
    bio: "Head of the Laboratory of Materials for Renewable Energy at EPFL, leading research on hydrogen storage and catalytic materials.",
    link: "https://www.epfl.ch/labs/lmer/",
  },
]

const pressArticles = [
  {
    title: "High-throughput sizing, counting, and elemental analysis of nanoparticles",
    source: "ACS Nano",
    date: "July 2022",
    link: "https://doi.org/10.1021/acsnano.2c01840",
  },
]

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* CTA Card */}
        <div className={cn(
          "bg-slate-900 rounded-3xl p-8 md:p-12 mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-violet-400 font-medium text-sm mb-2 block">Licensing Opportunity</span>
              <h2 className="text-3xl font-bold text-white mb-4">
                Transform your nanoparticle QC
              </h2>
              <p className="text-slate-300 mb-6">
                License this technology to enable real-time, comprehensive nanoparticle characterization 
                in your production line. Available for exclusive and non-exclusive agreements.
              </p>
              
              {/* TRL */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-slate-400">Technology Readiness Level</span>
                  <span className="text-violet-400 font-semibold">TRL 5</span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((level) => (
                    <div
                      key={level}
                      className={cn(
                        "h-2 flex-1 rounded-full",
                        level <= 5 ? "bg-violet-500" : "bg-slate-700"
                      )}
                    />
                  ))}
                </div>
                <div className="text-xs text-slate-500 mt-1">Technology validated in relevant environment</div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button className="bg-violet-500 hover:bg-violet-600 text-white" asChild>
                  <a href="mailto:adam.swetloff@epfl.ch">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact TTO
                  </a>
                </Button>
                <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 bg-transparent" asChild>
                  <Link href="/nanoparticle-qc/deep-dive">
                    <FileText className="w-4 h-4 mr-2" />
                    Technical deep dive
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-800 rounded-xl p-5">
                <div className="text-slate-400 text-sm mb-1">Patent Status</div>
                <div className="text-white font-medium">WO 2023/095020 (Patent Pending)</div>
              </div>
              <div className="bg-slate-800 rounded-xl p-5">
                <div className="text-slate-400 text-sm mb-1">Reference Number</div>
                <div className="text-white font-medium">EPFL-TTO 6.2251</div>
              </div>
              <div className="bg-slate-800 rounded-xl p-5">
                <div className="text-slate-400 text-sm mb-1">TTO Contact</div>
                <div className="text-white font-medium">Dr. Adam Swetloff</div>
                <div className="text-slate-400 text-sm">adam.swetloff@epfl.ch</div>
              </div>
            </div>
          </div>
        </div>

        {/* Inventors */}
        <div className={cn(
          "mb-16 transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <h3 className="text-xl font-bold text-slate-900 mb-6">Research Team</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {inventors.map((inventor, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-violet-600">
                      {inventor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{inventor.name}</h4>
                    <div className="text-sm text-violet-600">{inventor.role}</div>
                    <div className="text-xs text-slate-500">{inventor.affiliation}</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-4">{inventor.bio}</p>
                {inventor.link && (
                  <a 
                    href={inventor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-violet-600 hover:text-violet-700 mt-3"
                  >
                    View profile
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className={cn(
          "transition-all duration-700 delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <h3 className="text-xl font-bold text-slate-900 mb-6">Publications</h3>
          <div className="space-y-4">
            {pressArticles.map((article, i) => (
              <a
                key={i}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <Newspaper className="w-5 h-5 text-violet-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-slate-900 group-hover:text-violet-600 transition-colors">
                    {article.title}
                  </div>
                  <div className="text-sm text-slate-500">
                    {article.source} - {article.date}
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-violet-600 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
