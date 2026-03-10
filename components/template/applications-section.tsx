"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ArrowRight, TrendingUp, TrendingDown, DollarSign, LucideIcon } from "lucide-react"

interface Application {
  id: string
  icon: LucideIcon
  title: string
  currentMethod: {
    name: string
    description: string
    limitations: string[]
  }
  improvement: {
    description: string
    benefits: string[]
  }
  economics: {
    marketSize: string
    marketContext: string
    costReduction: string
    costContext: string
    roi: string
  }
}

interface ApplicationsSectionProps {
  title?: string
  subtitle?: string
  applications: Application[]
  accentColor?: string
}

export function TemplateApplicationsSection({
  title = "Applications",
  subtitle = "Transforming industries with superior performance and economics.",
  applications,
  accentColor = "teal",
}: ApplicationsSectionProps) {
  const [activeApp, setActiveApp] = useState(applications[0])
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
      active: "bg-teal-500", 
      bg: "bg-teal-50", 
      border: "border-teal-100",
      text: "text-teal-800",
      textLight: "text-teal-700",
      dot: "bg-teal-500",
      arrow: "text-teal-400",
      metric: "text-teal-400"
    },
    blue: { 
      active: "bg-blue-500", 
      bg: "bg-blue-50", 
      border: "border-blue-100",
      text: "text-blue-800",
      textLight: "text-blue-700",
      dot: "bg-blue-500",
      arrow: "text-blue-400",
      metric: "text-blue-400"
    },
    purple: { 
      active: "bg-purple-500", 
      bg: "bg-purple-50", 
      border: "border-purple-100",
      text: "text-purple-800",
      textLight: "text-purple-700",
      dot: "bg-purple-500",
      arrow: "text-purple-400",
      metric: "text-purple-400"
    },
    rose: { 
      active: "bg-rose-500", 
      bg: "bg-rose-50", 
      border: "border-rose-100",
      text: "text-rose-800",
      textLight: "text-rose-700",
      dot: "bg-rose-500",
      arrow: "text-rose-400",
      metric: "text-rose-400"
    },
  }

  const colors = accentClasses[accentColor as keyof typeof accentClasses] || accentClasses.teal

  return (
    <section id="applications" className="py-24 bg-slate-50" ref={ref}>
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

        <div className={cn(
          "grid lg:grid-cols-3 gap-8 transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Application selector */}
          <div className="lg:col-span-1 space-y-2">
            {applications.map((app) => (
              <button
                key={app.id}
                onClick={() => setActiveApp(app)}
                className={cn(
                  "w-full flex items-center gap-4 p-4 rounded-xl border transition-all text-left",
                  activeApp.id === app.id
                    ? "bg-slate-900 border-slate-900"
                    : "bg-white border-slate-200 hover:border-slate-300"
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                    activeApp.id === app.id
                      ? `${colors.active} text-white`
                      : "bg-slate-100 text-slate-500"
                  )}
                >
                  <app.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className={cn(
                      "font-medium truncate transition-colors",
                      activeApp.id === app.id ? "text-white" : "text-slate-900"
                    )}
                  >
                    {app.title}
                  </div>
                </div>
                <ArrowRight
                  className={cn(
                    "w-4 h-4 shrink-0 transition-all",
                    activeApp.id === app.id
                      ? `${colors.arrow} translate-x-1`
                      : "text-slate-300"
                  )}
                />
              </button>
            ))}
          </div>

          {/* Application detail */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl ${colors.active} flex items-center justify-center`}>
                  <activeApp.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">{activeApp.title}</h3>
              </div>
            </div>

            {/* Current method */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                  <TrendingDown className="w-3.5 h-3.5 text-amber-600" />
                </div>
                <h4 className="font-semibold text-slate-900">Current Method: {activeApp.currentMethod.name}</h4>
              </div>
              <p className="text-slate-500 mb-4">{activeApp.currentMethod.description}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {activeApp.currentMethod.limitations.map((limitation) => (
                  <div key={limitation} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span className="text-slate-600">{limitation}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Improvement */}
            <div className={`${colors.bg} rounded-2xl border ${colors.border} p-6`}>
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-6 h-6 rounded-full ${colors.active} flex items-center justify-center`}>
                  <TrendingUp className="w-3.5 h-3.5 text-white" />
                </div>
                <h4 className={`font-semibold ${colors.text}`}>How This Technology Improves It</h4>
              </div>
              <p className={`${colors.text} mb-4`}>{activeApp.improvement.description}</p>
              <div className="space-y-2">
                {activeApp.improvement.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2 text-sm">
                    <div className={`w-1.5 h-1.5 rounded-full ${colors.dot} mt-2 shrink-0`} />
                    <span className={colors.textLight}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Techno-economic analysis */}
            <div className="bg-slate-900 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-6">
                <div className={`w-6 h-6 rounded-full ${colors.active} flex items-center justify-center`}>
                  <DollarSign className="w-3.5 h-3.5 text-white" />
                </div>
                <h4 className="font-semibold">Techno-Economic Analysis</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className={`text-3xl font-semibold ${colors.metric} mb-1`}>{activeApp.economics.marketSize}</div>
                  <div className="text-sm text-slate-400">{activeApp.economics.marketContext}</div>
                </div>
                <div>
                  <div className={`text-3xl font-semibold ${colors.metric} mb-1`}>{activeApp.economics.costReduction}</div>
                  <div className="text-sm text-slate-400">{activeApp.economics.costContext}</div>
                </div>
              </div>
              <div className="p-4 bg-slate-800 rounded-xl">
                <div className="text-sm text-slate-300">{activeApp.economics.roi}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
