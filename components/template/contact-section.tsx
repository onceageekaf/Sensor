"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ExternalLink, Mail, ArrowRight, Award, BookOpen, Newspaper } from "lucide-react"
import Link from "next/link"

interface Inventor {
  name: string
  role: string
  affiliation: string
  initials: string
  bio: string
  credentials: { icon: "award" | "book"; text: string }[]
  profileUrl?: string
}

interface PressArticle {
  source: string
  title: string
  url: string
  date: string
}

interface ContactSectionProps {
  inventors: Inventor[]
  coAuthors?: string[]
  pressArticles?: PressArticle[]
  techReadinessLevel?: number
  ipStatus?: string
  reference?: string
  marketSize?: string
  contactEmail?: string
  contactLabel?: string
  technicalDetailsLink?: string
  accentColor?: string
}

export function TemplateContactSection({
  inventors,
  coAuthors,
  pressArticles,
  techReadinessLevel = 4,
  ipStatus = "Patent pending",
  reference = "REF-000",
  marketSize,
  contactEmail = "contact@example.com",
  contactLabel = "Contact for Licensing",
  technicalDetailsLink,
  accentColor = "teal",
}: ContactSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const accentClasses = {
    teal: { 
      badge: "text-teal-600",
      dot: "bg-teal-500",
      link: "text-teal-600 hover:text-teal-700",
      button: "bg-teal-500 hover:bg-teal-600",
      trl: "bg-teal-500",
      metric: "text-teal-400",
      hoverBorder: "hover:border-teal-200 hover:bg-teal-50/30",
      iconHover: "group-hover:text-teal-500"
    },
    blue: { 
      badge: "text-blue-600",
      dot: "bg-blue-500",
      link: "text-blue-600 hover:text-blue-700",
      button: "bg-blue-500 hover:bg-blue-600",
      trl: "bg-blue-500",
      metric: "text-blue-400",
      hoverBorder: "hover:border-blue-200 hover:bg-blue-50/30",
      iconHover: "group-hover:text-blue-500"
    },
    purple: { 
      badge: "text-purple-600",
      dot: "bg-purple-500",
      link: "text-purple-600 hover:text-purple-700",
      button: "bg-purple-500 hover:bg-purple-600",
      trl: "bg-purple-500",
      metric: "text-purple-400",
      hoverBorder: "hover:border-purple-200 hover:bg-purple-50/30",
      iconHover: "group-hover:text-purple-500"
    },
    rose: { 
      badge: "text-rose-600",
      dot: "bg-rose-500",
      link: "text-rose-600 hover:text-rose-700",
      button: "bg-rose-500 hover:bg-rose-600",
      trl: "bg-rose-500",
      metric: "text-rose-400",
      hoverBorder: "hover:border-rose-200 hover:bg-rose-50/30",
      iconHover: "group-hover:text-rose-500"
    },
  }

  const colors = accentClasses[accentColor as keyof typeof accentClasses] || accentClasses.teal

  return (
    <section id="contact" className="py-24 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Inventors Section */}
        <div className={cn(
          "mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className={`text-sm font-semibold ${colors.badge} uppercase tracking-wide mb-2 text-center`}>The Team</h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-12 text-center text-balance">
            Meet the inventors
          </h3>

          <div className={`grid md:grid-cols-${Math.min(inventors.length, 2)} gap-8`}>
            {inventors.map((inventor) => (
              <div key={inventor.name} className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors">
                <div className="flex items-start gap-5 mb-5">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${accentColor}-100 to-${accentColor}-200 flex items-center justify-center shrink-0`}>
                    <span className={`text-${accentColor}-700 text-xl font-bold`}>{inventor.initials}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">{inventor.name}</h4>
                    <p className="text-sm text-slate-500">{inventor.role}</p>
                    <p className={`text-sm ${colors.link}`}>{inventor.affiliation}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{inventor.bio}</p>
                <div className="space-y-2">
                  {inventor.credentials.map((cred, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      {cred.icon === "award" ? (
                        <Award className="w-4 h-4 text-amber-500" />
                      ) : (
                        <BookOpen className={`w-4 h-4 ${colors.link}`} />
                      )}
                      <span className="text-slate-700">{cred.text}</span>
                    </div>
                  ))}
                </div>
                {inventor.profileUrl && (
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <a 
                      href={inventor.profileUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`text-sm ${colors.link} transition-colors flex items-center gap-1`}
                    >
                      Visit profile
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional co-authors */}
          {coAuthors && coAuthors.length > 0 && (
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-400">
                With contributions from {coAuthors.join(", ")}
              </p>
            </div>
          )}
        </div>

        {/* Press Coverage */}
        {pressArticles && pressArticles.length > 0 && (
          <div className={cn(
            "mb-16 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">Press coverage</h3>
            <div className={`grid sm:grid-cols-${Math.min(pressArticles.length, 3)} gap-4`}>
              {pressArticles.map((article) => (
                <a 
                  key={article.url}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-5 rounded-xl border border-slate-200 ${colors.hoverBorder} transition-all`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Newspaper className={`w-4 h-4 text-slate-400 ${colors.iconHover} transition-colors`} />
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">{article.source}</span>
                  </div>
                  <p className="text-sm font-medium text-slate-800 group-hover:text-slate-900 transition-colors leading-snug">
                    {article.title}
                  </p>
                  <p className="text-xs text-slate-400 mt-2">{article.date}</p>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* CTA Card */}
        <div className={cn(
          "bg-slate-900 rounded-3xl p-8 md:p-12 transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800 mb-6">
              <span className={`${colors.metric} text-sm font-medium`}>Licensing Opportunity</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 text-balance">
              Interested in this technology?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              This technology is available for licensing. Contact us to discuss partnership opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-3">Technology Readiness</h3>
              <p className="text-slate-400 text-sm mb-4">
                {ipStatus}. The technology has been validated at TRL {techReadinessLevel}.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex flex-1">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "flex-1 h-2",
                        i < techReadinessLevel ? colors.trl : "bg-slate-700",
                        i === 0 && "rounded-l",
                        i === 8 && "rounded-r"
                      )}
                    />
                  ))}
                </div>
                <span className={`text-sm ${colors.metric} font-medium shrink-0`}>TRL {techReadinessLevel}</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-3">IP Status</h3>
              <p className="text-slate-400 text-sm mb-4">
                {ipStatus}. Available for exclusive or non-exclusive licensing.
              </p>
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <span>Reference: {reference}</span>
                {marketSize && (
                  <>
                    <span className="text-slate-700">|</span>
                    <span>Market: {marketSize}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className={`${colors.button} text-white font-medium h-12 rounded-xl`}
              asChild
            >
              <a href={`mailto:${contactEmail}`}>
                <Mail className="w-5 h-5 mr-2" />
                {contactLabel}
              </a>
            </Button>
            {technicalDetailsLink && (
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800 bg-transparent h-12 rounded-xl"
                asChild
              >
                <Link href={technicalDetailsLink}>
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Read the technical deep dive
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
