"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface Advantage {
  icon: LucideIcon
  title: string
  description: string
  metric: string
}

interface AdvantagesSectionProps {
  title?: string
  subtitle?: string
  advantages: Advantage[]
  accentColor?: string
}

export function TemplateAdvantagesSection({
  title = "Key advantages",
  subtitle = "Addressing fundamental limitations through innovative design.",
  advantages,
  accentColor = "teal",
}: AdvantagesSectionProps) {
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
      metric: "text-teal-600", 
      hover: "hover:border-teal-200 hover:bg-teal-50/50",
      iconHover: "group-hover:border-teal-200 group-hover:bg-teal-50 group-hover:text-teal-600"
    },
    blue: { 
      metric: "text-blue-600", 
      hover: "hover:border-blue-200 hover:bg-blue-50/50",
      iconHover: "group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600"
    },
    purple: { 
      metric: "text-purple-600", 
      hover: "hover:border-purple-200 hover:bg-purple-50/50",
      iconHover: "group-hover:border-purple-200 group-hover:bg-purple-50 group-hover:text-purple-600"
    },
    rose: { 
      metric: "text-rose-600", 
      hover: "hover:border-rose-200 hover:bg-rose-50/50",
      iconHover: "group-hover:border-rose-200 group-hover:bg-rose-50 group-hover:text-rose-600"
    },
  }

  const colors = accentClasses[accentColor as keyof typeof accentClasses] || accentClasses.teal

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={cn(
          "max-w-3xl mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className={cn(
                "group p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-all duration-500",
                colors.hover,
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={cn(
                  "w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center transition-colors",
                  colors.iconHover
                )}>
                  <advantage.icon className="w-6 h-6 text-slate-600 transition-colors" />
                </div>
                <div className="text-right">
                  <div className={`text-xl font-semibold ${colors.metric}`}>{advantage.metric}</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{advantage.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
