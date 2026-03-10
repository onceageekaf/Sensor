"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { ExternalLink, Mail, FileText, Award, Newspaper } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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

const inventors = [
  {
    name: "Prof. Dr. Kathrin Lang",
    role: "Principal Investigator",
    institution: "ETH Zurich & TU Munich",
    bio: "Professor of Organic Chemistry specializing in chemical biology, genetic code expansion, and protein engineering. Pioneer in developing new tools for studying and manipulating proteins.",
    link: "https://lang.ethz.ch",
  },
  {
    name: "Dr. Maximilian Fottner",
    role: "Co-First Author",
    institution: "ETH Zurich",
    bio: "Postdoctoral researcher focusing on genetic code expansion and protein chemistry. Co-developed the tripeptide transport system.",
    link: null,
  },
  {
    name: "Tarun Iype",
    role: "Co-First Author",
    institution: "ETH Zurich",
    bio: "PhD researcher in the Lang group. Co-developed the evolved transporter variants and E. coli strains.",
    link: null,
  },
]

const pressArticles = [
  {
    title: "Novel transport system enables efficient production of designer proteins",
    source: "ETH Zurich News",
    date: "October 2025",
    link: "https://ethz.ch/en/news-and-events/eth-news.html",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-emerald-50">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-sm font-medium text-emerald-600 tracking-widest uppercase mb-4 text-center">Licensing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight text-center mb-4">
            Commercialize This Technology
          </h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">
            This technology is available for licensing through ETH Zurich Transfer. Contact us to discuss partnership opportunities.
          </p>
        </FadeIn>

        {/* Status indicators */}
        <FadeIn delay={100}>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-xl bg-white border border-slate-200 text-center">
              <div className="text-sm text-slate-500 mb-2">Technology Readiness</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[1,2,3,4,5,6,7,8,9].map(level => (
                  <div
                    key={level}
                    className={cn(
                      "w-6 h-6 rounded-full text-xs flex items-center justify-center font-medium",
                      level <= 5 ? "bg-emerald-500 text-white" : "bg-slate-200 text-slate-400"
                    )}
                  >
                    {level}
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium text-emerald-600">TRL 5 - Technology validated</div>
            </div>
            <div className="p-6 rounded-xl bg-white border border-slate-200 text-center">
              <div className="text-sm text-slate-500 mb-2">IP Status</div>
              <div className="text-2xl font-bold text-slate-900 mb-1">Patent Pending</div>
              <div className="text-sm text-slate-500">International protection sought</div>
            </div>
            <div className="p-6 rounded-xl bg-white border border-slate-200 text-center">
              <div className="text-sm text-slate-500 mb-2">Reference</div>
              <div className="text-2xl font-bold text-slate-900 mb-1">2024-108</div>
              <div className="text-sm text-slate-500">ETH Transfer</div>
            </div>
          </div>
        </FadeIn>

        {/* Inventors */}
        <FadeIn delay={200}>
          <h3 className="text-xl font-bold text-slate-900 mb-6">Inventors</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {inventors.map((inv) => (
              <div key={inv.name} className="p-6 rounded-xl bg-white border border-slate-200">
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <span className="text-emerald-700 font-bold text-lg">{inv.name.split(' ').map(n => n[0]).join('').slice(0,2)}</span>
                </div>
                <h4 className="font-bold text-slate-900">{inv.name}</h4>
                <p className="text-sm text-emerald-600 mb-1">{inv.role}</p>
                <p className="text-xs text-slate-400 mb-3">{inv.institution}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{inv.bio}</p>
                {inv.link && (
                  <a 
                    href={inv.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-sm text-emerald-600 hover:text-emerald-700"
                  >
                    Lab website <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Press */}
        <FadeIn delay={300}>
          <h3 className="text-xl font-bold text-slate-900 mb-6">Publication & Press</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a 
              href="https://doi.org/10.1038/s41586-025-09576-w"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-5 h-5 text-emerald-600" />
                <span className="text-xs text-slate-400">Original Publication</span>
              </div>
              <h4 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
                Hijacking a bacterial ABC transporter for genetic code expansion
              </h4>
              <p className="text-sm text-slate-500">Nature, Vol 647, November 2025</p>
            </a>
            {pressArticles.map((article) => (
              <a 
                key={article.title}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Newspaper className="w-5 h-5 text-blue-600" />
                  <span className="text-xs text-slate-400">{article.source}</span>
                </div>
                <h4 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
                  {article.title}
                </h4>
                <p className="text-sm text-slate-500">{article.date}</p>
              </a>
            ))}
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={400}>
          <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Interested in licensing?</h3>
            <p className="text-slate-500 mb-6 max-w-lg mx-auto">
              Contact ETH Transfer to discuss licensing terms, collaboration opportunities, or technical due diligence.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl">
                <a href="mailto:transfer@sl.ethz.ch">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact ETH Transfer
                </a>
              </Button>
              <Button asChild variant="outline" className="border-slate-200 rounded-xl bg-transparent">
                <a href="https://transfer.ethz.ch" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit ETH Transfer
                </a>
              </Button>
              <Button asChild variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 rounded-xl bg-transparent">
                <Link href="/protein-production/deep-dive">
                  <FileText className="w-4 h-4 mr-2" />
                  Technical deep dive
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
