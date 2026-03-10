"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText } from "lucide-react"
import Link from "next/link"

interface Metric {
  value: string
  label: string
}

interface HeroSectionProps {
  badge?: string
  institution?: string
  title: string
  titleHighlight: string
  description: string
  metrics: Metric[]
  technicalDetailsLink?: string
  accentColor?: string
}

export function TemplateHeroSection({
  badge = "Innovation",
  institution = "Research Institution",
  title = "Technology",
  titleHighlight = "reimagined.",
  description = "A breakthrough technology that addresses a critical need with superior performance.",
  metrics = [],
  technicalDetailsLink,
  accentColor = "teal",
}: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const accentClasses = {
    teal: {
      badge: "bg-teal-500",
      highlight: "text-teal-600",
      outline: "border-teal-200 text-teal-700 hover:bg-teal-50",
      gradient1: "bg-teal-100/30",
    },
    blue: {
      badge: "bg-blue-500",
      highlight: "text-blue-600",
      outline: "border-blue-200 text-blue-700 hover:bg-blue-50",
      gradient1: "bg-blue-100/30",
    },
    purple: {
      badge: "bg-purple-500",
      highlight: "text-purple-600",
      outline: "border-purple-200 text-purple-700 hover:bg-purple-50",
      gradient1: "bg-purple-100/30",
    },
    rose: {
      badge: "bg-rose-500",
      highlight: "text-rose-600",
      outline: "border-rose-200 text-rose-700 hover:bg-rose-50",
      gradient1: "bg-rose-100/30",
    },
  }

  const colors = accentClasses[accentColor as keyof typeof accentClasses] || accentClasses.teal

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-white" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${colors.gradient1} rounded-full blur-3xl animate-pulse`} style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-100/50 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>
      
      <div 
        className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white mb-8 shadow-sm">
          <span className={`w-2 h-2 rounded-full ${colors.badge} animate-pulse`} />
          <span className="text-slate-600 text-sm font-medium">{institution} {badge}</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 mb-6 leading-tight tracking-tight text-balance">
          {title}
          <br />
          <span className={colors.highlight}>{titleHighlight}</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Button 
            size="lg" 
            className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-8 h-12 rounded-xl"
            onClick={() => document.getElementById("technology")?.scrollIntoView({ behavior: "smooth" })}
          >
            Learn how it works
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-slate-200 text-slate-700 hover:bg-slate-50 bg-transparent h-12 rounded-xl"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Licensing inquiry
          </Button>
          {technicalDetailsLink && (
            <Button 
              size="lg" 
              variant="outline" 
              className={`${colors.outline} bg-transparent h-12 rounded-xl`}
              asChild
            >
              <Link href={technicalDetailsLink}>
                <FileText className="w-4 h-4 mr-2" />
                Technical details
              </Link>
            </Button>
          )}
        </div>
        
        {metrics.length > 0 && (
          <div className={`grid grid-cols-2 md:grid-cols-${Math.min(metrics.length, 4)} gap-8 max-w-3xl mx-auto`}>
            {metrics.map((metric, index) => (
              <div 
                key={metric.label} 
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-semibold text-slate-900 mb-1">{metric.value}</div>
                <div className="text-sm text-slate-400">{metric.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
