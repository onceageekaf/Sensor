"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText } from "lucide-react"
import Link from "next/link"
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

export function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-white pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Nature, November 2025
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight text-balance">
            Designer proteins,{" "}
            <span className="text-emerald-600">made efficient</span>
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed text-pretty">
            A breakthrough platform that hijacks bacterial transporters to import non-canonical amino acids, 
            enabling wild-type-like production yields for proteins with novel chemical modifications.
          </p>
        </FadeIn>

        {/* Key metrics */}
        <FadeIn delay={300}>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600">60%</div>
              <div className="text-sm text-slate-500 mt-1">Higher yields</div>
            </div>
            <div className="text-center border-x border-slate-200">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600">11+</div>
              <div className="text-sm text-slate-500 mt-1">New ncAAs enabled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600">WT</div>
              <div className="text-sm text-slate-500 mt-1">Like expression</div>
            </div>
          </div>
        </FadeIn>

        {/* CTA buttons */}
        <FadeIn delay={400}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white h-12 rounded-xl px-6"
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
              className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent h-12 rounded-xl"
              asChild
            >
              <Link href="/protein-production/deep-dive">
                <FileText className="w-4 h-4 mr-2" />
                Technical deep dive
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
