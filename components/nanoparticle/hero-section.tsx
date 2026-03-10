"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-violet-50 to-white">
      {/* Animated nanoparticle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          {/* Nanoparticles floating */}
          {[...Array(12)].map((_, i) => {
            const size = 8 + Math.random() * 16
            const x = 50 + Math.random() * 700
            const y = 50 + Math.random() * 500
            const delay = i * 0.3
            const shapes = ['cube', 'octahedra', 'sphere']
            const shape = shapes[i % 3]
            
            return (
              <g key={i} style={{ animation: `float ${4 + i * 0.5}s ease-in-out ${delay}s infinite alternate` }}>
                {shape === 'cube' && (
                  <g transform={`translate(${x}, ${y})`}>
                    <rect x={-size/2} y={-size/2} width={size} height={size} fill="#8b5cf6" opacity="0.3" rx="1" />
                    <rect x={-size/2 + 2} y={-size/2 + 2} width={size - 4} height={size - 4} fill="#a78bfa" opacity="0.5" rx="1" />
                  </g>
                )}
                {shape === 'octahedra' && (
                  <g transform={`translate(${x}, ${y})`}>
                    <polygon points={`0,${-size} ${size},0 0,${size} ${-size},0`} fill="#c084fc" opacity="0.3" />
                    <polygon points={`0,${-size*0.6} ${size*0.6},0 0,${size*0.6} ${-size*0.6},0`} fill="#d8b4fe" opacity="0.5" />
                  </g>
                )}
                {shape === 'sphere' && (
                  <g transform={`translate(${x}, ${y})`}>
                    <circle r={size} fill="#a78bfa" opacity="0.2" />
                    <circle r={size * 0.7} fill="#c084fc" opacity="0.3" />
                    <circle cx={-size * 0.3} cy={-size * 0.3} r={size * 0.2} fill="white" opacity="0.5" />
                  </g>
                )}
              </g>
            )
          })}
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div 
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {/* Badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-medium">
              ACS Nano 2022
            </span>
            <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
              EPFL
            </span>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
              Patent Pending
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6 text-balance">
            In-line quality control for{" "}
            <span className="text-violet-600">nanoparticle production</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
            A single-particle ICP-MS method that provides comprehensive characterization of engineered 
            inorganic nanoparticles—size, composition, and count—in one measurement, enabling real-time 
            quality control during production.
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { value: ">500", label: "particles/min" },
              { value: ">90", label: "elements detected" },
              { value: "Single", label: "measurement" },
              { value: "In-line", label: "monitoring" },
            ].map((metric, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-violet-100">
                <div className="text-2xl font-bold text-violet-600">{metric.value}</div>
                <div className="text-sm text-slate-500">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
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
              <Link href="/nanoparticle-qc/deep-dive">
                <FileText className="w-4 h-4 mr-2" />
                Technical deep dive
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>
    </section>
  )
}
