"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Check, X, AlertTriangle } from "lucide-react"

interface ExistingMethod {
  name: string
  description: string
  limitations: string[]
}

interface ComparisonRow {
  feature: string
  ours: string
  others: string
}

interface CoreComponent {
  name: string
  description: string
}

interface TechnologySectionProps {
  title?: string
  subtitle?: string
  whatIsIt: {
    title?: string
    paragraphs: string[]
  }
  coreComponents: CoreComponent[]
  existingMethods: ExistingMethod[]
  comparisonTable: ComparisonRow[]
  accentColor?: string
}

export function TemplateTechnologySection({
  title = "The technology",
  subtitle = "A breakthrough approach that addresses fundamental limitations of existing solutions.",
  whatIsIt,
  coreComponents,
  existingMethods,
  comparisonTable,
  accentColor = "teal",
}: TechnologySectionProps) {
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
    teal: { dot: "bg-teal-500", check: "text-teal-500", header: "text-teal-600" },
    blue: { dot: "bg-blue-500", check: "text-blue-500", header: "text-blue-600" },
    purple: { dot: "bg-purple-500", check: "text-purple-500", header: "text-purple-600" },
    rose: { dot: "bg-rose-500", check: "text-rose-500", header: "text-rose-600" },
  }

  const colors = accentClasses[accentColor as keyof typeof accentClasses] || accentClasses.teal

  return (
    <section id="technology" className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className={cn(
          "max-w-3xl mb-20 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* What is it */}
        <div className={cn(
          "grid lg:grid-cols-2 gap-12 mb-24 transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">{whatIsIt.title || "What is it?"}</h3>
            {whatIsIt.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-slate-500 leading-relaxed mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-6">Core Components</h4>
            <div className="space-y-4">
              {coreComponents.map((component) => (
                <div key={component.name} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50">
                  <div className={`w-2 h-2 rounded-full ${colors.dot} mt-2 shrink-0`} />
                  <div>
                    <div className="font-medium text-slate-900">{component.name}</div>
                    <div className="text-sm text-slate-500">{component.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Existing methods */}
        <div className={cn(
          "mb-24 transition-all duration-700 delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h3 className="text-2xl font-semibold text-slate-900 mb-8">What exists today?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {existingMethods.map((method) => (
              <div key={method.name} className="bg-white rounded-2xl border border-slate-200 p-6">
                <h4 className="font-semibold text-slate-900 mb-2">{method.name}</h4>
                <p className="text-sm text-slate-500 mb-4">{method.description}</p>
                <div className="space-y-2">
                  {method.limitations.map((limitation) => (
                    <div key={limitation} className="flex items-start gap-2 text-sm">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                      <span className="text-slate-600">{limitation}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why this is better */}
        <div className={cn(
          "transition-all duration-700 delay-400",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h3 className="text-2xl font-semibold text-slate-900 mb-8">Why this is better</h3>
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-4 bg-slate-50 border-b border-slate-200">
              <div className="text-sm font-medium text-slate-500">Feature</div>
              <div className={`text-sm font-medium ${colors.header}`}>This Technology</div>
              <div className="text-sm font-medium text-slate-500">Existing Solutions</div>
            </div>
            {comparisonTable.map((row, index) => (
              <div 
                key={row.feature} 
                className={cn(
                  "grid grid-cols-3 gap-4 p-4",
                  index !== comparisonTable.length - 1 && "border-b border-slate-100"
                )}
              >
                <div className="text-slate-600">{row.feature}</div>
                <div className="flex items-center gap-2">
                  <Check className={`w-4 h-4 ${colors.check}`} />
                  <span className="text-slate-900 font-medium">{row.ours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <X className="w-4 h-4 text-slate-300" />
                  <span className="text-slate-400">{row.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
