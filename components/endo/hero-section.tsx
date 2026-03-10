"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

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
      className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function EndoHeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Nav */}
      <div className="py-4 px-6 border-b border-slate-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            All Technologies
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={() => document.getElementById("technology")?.scrollIntoView({ behavior: "smooth" })} className="text-slate-500 hover:text-slate-900 transition-colors">
              Technology
            </button>
            <button onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })} className="text-slate-500 hover:text-slate-900 transition-colors">
              How it works
            </button>
            <button onClick={() => document.getElementById("applications")?.scrollIntoView({ behavior: "smooth" })} className="text-slate-500 hover:text-slate-900 transition-colors">
              Applications
            </button>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="text-slate-500 hover:text-slate-900 transition-colors">
              Contact
            </button>
          </nav>
        </div>
      </div>

      {/* Hero content */}
      <div className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-100 mb-8">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              <span className="text-sm font-medium text-violet-700">Cancer Immunotherapy</span>
              <span className="text-violet-300">|</span>
              <span className="text-sm text-violet-600">University of Queensland</span>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight text-balance">
              Making cancer cells <br className="hidden md:block" />
              visible to the immune system
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed text-pretty">
              By temporarily blocking how tumor cells hide their surface markers,
              this approach dramatically enhances the ability of existing antibody
              drugs to trigger immune destruction of cancer.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <Button
                size="lg"
                className="bg-violet-600 hover:bg-violet-700 text-white h-12 rounded-xl"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Licensing inquiry
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-200 text-slate-700 hover:bg-slate-50 bg-transparent h-12 rounded-xl"
                onClick={() => document.getElementById("technology")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn more
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-violet-200 text-violet-700 hover:bg-violet-50 bg-transparent h-12 rounded-xl"
                asChild
              >
                <Link href="/endocytosis-inhibitors/deep-dive">
                  <FileText className="w-4 h-4 mr-2" />
                  Technical deep dive
                </Link>
              </Button>
            </div>
          </FadeIn>

          {/* Key stats */}
          <FadeIn delay={400}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
              {[
                { value: "Cell", label: "Published in" },
                { value: "Phase 1b", label: "Clinical trial" },
                { value: "100%", label: "Tumor clearance (mice)" },
                { value: "FDA-approved", label: "Drug repurposed" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
