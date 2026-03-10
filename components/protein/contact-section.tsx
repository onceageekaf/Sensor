"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ExternalLink, Mail, ArrowRight, BookOpen, Newspaper, FileText } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-24 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Inventors */}
        <div className={cn(
          "mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-2 text-center">The Team</h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-12 text-center text-balance">
            Meet the inventors
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                initials: "KL",
                name: "Prof. Dr. Kathrin Lang",
                role: "Principal Investigator",
                dept: "ETH Zurich & TU Munich",
                bio: "Professor of Organic Chemistry and Chemical Biology. Pioneer in genetic code expansion, protein engineering, and the development of chemical tools for studying cellular processes.",
                awards: "ERC Consolidator Grant, Heinz Maier-Leibnitz Prize",
                link: "https://lang.ethz.ch",
              },
              {
                initials: "MF",
                name: "Dr. Maximilian Fottner",
                role: "Co-First Author",
                dept: "ETH Zurich",
                bio: "Postdoctoral researcher specializing in genetic code expansion and protein chemistry. Co-developed the tripeptide transport system and the OppA crystal structure.",
                awards: null,
                link: null,
              },
              {
                initials: "TI",
                name: "Tarun Iype",
                role: "Co-First Author",
                dept: "ETH Zurich",
                bio: "PhD researcher in the Lang group. Led development of evolved OppA transporter variants and IsoK12 E. coli strains for scalable ncAA production.",
                awards: null,
                link: null,
              },
            ].map((inv, i) => (
              <div
                key={inv.name}
                className={cn(
                  "p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center shrink-0">
                    <span className="text-emerald-700 text-lg font-bold">{inv.initials}</span>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900">{inv.name}</h4>
                    <p className="text-sm text-slate-500">{inv.role}</p>
                    <p className="text-sm text-emerald-600">{inv.dept}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{inv.bio}</p>
                {inv.awards && (
                  <div className="flex items-start gap-2 text-sm mb-4">
                    <BookOpen className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{inv.awards}</span>
                  </div>
                )}
                {inv.link && (
                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href={inv.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors flex items-center gap-1"
                    >
                      Visit research group <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-400">
              With contributions from Philipp Böhm, Stephanie Kötter, Nicole Tötsch, Andreas Brunner, and Kathrin Engel
            </p>
          </div>
        </div>

        {/* Press Coverage */}
        <div className={cn(
          "mb-16 transition-all duration-700 delay-100",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">Press coverage</h3>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a
              href="https://ethz.ch/en/news-and-events/eth-news/news/2025/12/a-trojan-horse-for-artificial-amino-acids.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-xl border border-slate-200 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <Newspaper className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">ETH Zurich</span>
              </div>
              <p className="text-sm font-medium text-slate-800 group-hover:text-emerald-900 transition-colors leading-snug">
                {"\"A Trojan horse for artificial amino acids\""}
              </p>
              <p className="text-xs text-slate-400 mt-2">December 2025</p>
            </a>
            <a
              href="https://doi.org/10.1038/s41586-025-09576-w"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-xl border border-slate-200 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">Nature</span>
              </div>
              <p className="text-sm font-medium text-slate-800 group-hover:text-emerald-900 transition-colors leading-snug">
                {"\"Hijacking a bacterial ABC transporter for genetic code expansion\""}
              </p>
              <p className="text-xs text-slate-400 mt-2">Vol 647, November 2025</p>
            </a>
          </div>
        </div>

        {/* Dark CTA card — same pattern as oxygen sensor */}
        <div className={cn(
          "bg-slate-900 rounded-3xl p-8 md:p-12 transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800 mb-6">
              <span className="text-emerald-400 text-sm font-medium">Licensing Opportunity</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 text-balance">
              Interested in this technology?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              This platform is available for licensing through ETH Transfer. It can be adapted
              to any ncAA of interest and scales to industrial production volumes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-3">Technology Readiness</h3>
              <p className="text-slate-400 text-sm mb-4">
                Demonstrated in laboratory conditions with validated E. coli strains, crystal
                structures, and wild-type-level protein yields across multiple target proteins.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex flex-1">
                  {[1,2,3,4,5].map((level) => (
                    <div key={level} className={cn("flex-1 h-2 bg-emerald-500", level === 1 && "rounded-l")} />
                  ))}
                  {[6,7,8,9].map((level) => (
                    <div key={level} className={cn("flex-1 h-2 bg-slate-700", level === 9 && "rounded-r")} />
                  ))}
                </div>
                <span className="text-sm text-emerald-400 font-medium shrink-0">TRL 5</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-3">IP Status</h3>
              <p className="text-slate-400 text-sm mb-4">
                Patent pending with international protection sought. Reference 2024-108.
                Platform covers the G-XisoK scaffold, IsoK12 strain, and evolved OppA variants.
              </p>
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <span>Ref: 2024-108</span>
                <span className="text-slate-700">|</span>
                <span>Market: ~$300B biologics</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium h-12 rounded-xl" asChild>
              <a href="mailto:transfer@sl.ethz.ch">
                <Mail className="w-5 h-5 mr-2" />
                Contact ETH Transfer
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800 bg-transparent h-12 rounded-xl" asChild>
              <Link href="/protein-production/deep-dive">
                <ArrowRight className="w-5 h-5 mr-2" />
                Read the technical deep dive
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
