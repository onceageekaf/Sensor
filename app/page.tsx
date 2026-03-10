"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Atom, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const technologies = [
  {
    id: "oxygen-sensor",
    href: "/oxygen-sensor",
    label: "Sensing",
    title: "Dye-Sensitized Oxygen Sensor",
    subtitle: "A chemiresistive sensor for rapid, selective oxygen detection under visible light",
    institution: "ETH Zurich",
    published: "Advanced Science, 2024",
    color: "teal",
    icon: Atom,
    highlights: [
      "ppb-level sensitivity",
      "Visible light activation",
      "Humidity tolerant",
      "Low power consumption",
    ],
  },
  {
    id: "endocytosis-inhibitors",
    href: "/endocytosis-inhibitors",
    label: "Immunotherapy",
    title: "Endocytosis Inhibitors for Cancer Immunotherapy",
    subtitle: "Enhancing monoclonal antibody responses by clustering receptors on tumor surfaces",
    institution: "University of Queensland",
    published: "Cell, 2020",
    color: "violet",
    icon: ShieldCheck,
    highlights: [
      "Repurposed FDA-approved drug",
      "Clinical proof of mechanism",
      "Complete tumor clearance in mice",
      "Long-term immune memory",
    ],
  },
]

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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-6 px-6 border-b border-slate-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
              <span className="text-white text-xs font-bold">TT</span>
            </div>
            <span className="text-slate-900 font-semibold text-lg">Tech Transfer</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/oxygen-sensor" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
              Oxygen Sensor
            </Link>
            <Link href="/endocytosis-inhibitors" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
              Endocytosis Inhibitors
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-sm font-medium text-slate-400 tracking-widest uppercase mb-6">
              Technology Portfolio
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight text-balance">
              Breakthrough technologies, <br className="hidden md:block" />
              ready for licensing
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed text-pretty">
              From advanced sensing to cancer immunotherapy, explore innovative technologies
              developed at world-leading research institutions and available for commercialization.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Technology Cards */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {technologies.map((tech, i) => (
            <FadeIn key={tech.id} delay={i * 150}>
              <Link href={tech.href} className="group block">
                <div className={cn(
                  "relative rounded-2xl border p-8 md:p-10 h-full transition-all duration-300",
                  "hover:shadow-lg hover:-translate-y-1",
                  tech.color === "teal"
                    ? "border-teal-100 hover:border-teal-200 bg-gradient-to-br from-white to-teal-50/50"
                    : "border-violet-100 hover:border-violet-200 bg-gradient-to-br from-white to-violet-50/50"
                )}>
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={cn(
                      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium",
                      tech.color === "teal"
                        ? "bg-teal-100 text-teal-700"
                        : "bg-violet-100 text-violet-700"
                    )}>
                      <tech.icon className="w-3.5 h-3.5" />
                      {tech.label}
                    </span>
                    <span className="text-xs text-slate-400">{tech.institution}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-3">
                    {tech.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {tech.subtitle}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {tech.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          tech.color === "teal" ? "bg-teal-400" : "bg-violet-400"
                        )} />
                        {h}
                      </div>
                    ))}
                  </div>

                  {/* Published */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">{tech.published}</span>
                    <span className={cn(
                      "inline-flex items-center gap-1 text-sm font-medium transition-all group-hover:gap-2",
                      tech.color === "teal" ? "text-teal-600" : "text-violet-600"
                    )}>
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400 text-xs">
            Technology transfer portfolio. All technologies available for licensing.
          </p>
        </div>
      </footer>
    </main>
  )
}
