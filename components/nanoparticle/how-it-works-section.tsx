"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    id: 1,
    title: "Sample Nebulization",
    description: "Highly diluted nanoparticle dispersions are nebulized to create an aerosol. A phase transfer step enables analysis of particles from organic solvents.",
  },
  {
    id: 2,
    title: "Plasma Processing",
    description: "Individual particles pass through the ICP torch where they are desolvated, vaporized, atomized, and ionized—generating discrete ion plumes.",
  },
  {
    id: 3,
    title: "Mass Detection",
    description: "Ion plumes arrive at the mass analyzer (quadrupole or TOF) as intensity spikes above background, each representing a single particle event.",
  },
  {
    id: 4,
    title: "Data Analysis",
    description: "Intensity histograms are converted to size distributions using geometric models for spheres, cubes, truncated octahedra, and tetrahedra.",
  },
]

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [animPhase, setAnimPhase] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isPlaying])

  useEffect(() => {
    let animationFrame: number
    const animate = () => {
      setAnimPhase((prev) => (prev + 0.5) % 100)
      animationFrame = requestAnimationFrame(animate)
    }
    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className={cn(
          "text-center mb-12 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <span className="text-violet-600 font-medium text-sm mb-2 block">How it works</span>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            From nanoparticle to size distribution in minutes
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            SP-ICP-MS transforms individual particle events into comprehensive ensemble statistics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Animation */}
          <div className={cn(
            "bg-white rounded-2xl p-8 border border-slate-200 transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-medium text-slate-500">
                Step {activeStep + 1}: {steps[activeStep].title}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
                className="h-8 w-8 p-0"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
            </div>

            <svg viewBox="0 0 500 350" className="w-full h-auto">
              <defs>
                <linearGradient id="plasmaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#f472b6" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Background */}
              <rect x="0" y="0" width="500" height="350" fill="#fafafa" rx="8" />

              {/* Nebulizer */}
              <g transform="translate(30, 120)">
                <text x="30" y="-10" fill="#64748b" fontSize="10" textAnchor="middle">Nebulizer</text>
                <rect x="0" y="0" width="60" height="80" fill="#e2e8f0" rx="4" stroke="#cbd5e1" />
                <rect x="10" y="10" width="40" height="30" fill="#bfdbfe" rx="2" />
                
                {/* Particles in solution */}
                {activeStep === 0 && [...Array(8)].map((_, i) => {
                  const x = 15 + (i % 3) * 12
                  const y = 15 + Math.floor(i / 3) * 10 + Math.sin(animPhase * 0.1 + i) * 3
                  return (
                    <rect key={i} x={x} y={y} width="6" height="6" fill="#8b5cf6" rx="1" opacity="0.8" />
                  )
                })}
                
                {/* Droplet spray */}
                <path d="M60 40 Q80 30 90 40 Q80 50 60 40" fill="#ddd6fe" opacity="0.5" />
              </g>

              {/* Plasma Torch */}
              <g transform="translate(130, 100)">
                <text x="50" y="-10" fill="#64748b" fontSize="10" textAnchor="middle">ICP Torch</text>
                <rect x="0" y="0" width="100" height="120" fill="#f1f5f9" rx="4" stroke="#cbd5e1" />
                
                {/* Plasma flame */}
                <ellipse cx="50" cy="60" rx="30" ry="45" fill="url(#plasmaGrad)" opacity={activeStep >= 1 ? 0.8 : 0.3} filter="url(#glow)" />
                <ellipse cx="50" cy="60" rx="18" ry="30" fill="#fef3c7" opacity={activeStep >= 1 ? 0.9 : 0.4} />
                
                {/* Particles being ionized */}
                {activeStep === 1 && [...Array(5)].map((_, i) => {
                  const progress = ((animPhase + i * 20) % 100) / 100
                  const x = 20 + progress * 60
                  const y = 40 + Math.sin(progress * Math.PI * 2) * 20
                  const size = 4 + (1 - progress) * 4
                  return (
                    <g key={i} opacity={progress < 0.8 ? 1 : (1 - progress) * 5}>
                      <rect x={x - size/2} y={y - size/2} width={size} height={size} fill="#8b5cf6" rx="1" />
                      {progress > 0.5 && (
                        <circle cx={x} cy={y} r={size + 4} fill="none" stroke="#f472b6" strokeWidth="1" opacity="0.5" />
                      )}
                    </g>
                  )
                })}
              </g>

              {/* Mass Analyzer */}
              <g transform="translate(260, 110)">
                <text x="60" y="-20" fill="#64748b" fontSize="10" textAnchor="middle">Mass Analyzer</text>
                <rect x="0" y="0" width="120" height="100" fill="#f1f5f9" rx="4" stroke="#cbd5e1" />
                
                {/* Quadrupole rods */}
                {[15, 45, 75, 105].map((x, i) => (
                  <rect key={i} x={x - 5} y="10" width="10" height="80" fill={i % 2 === 0 ? "#8b5cf6" : "#c084fc"} rx="2" opacity="0.6" />
                ))}
                
                {/* Ion path */}
                {activeStep === 2 && (
                  <g>
                    <path 
                      d={`M 0 50 Q 30 ${50 + Math.sin(animPhase * 0.2) * 15} 60 50 Q 90 ${50 - Math.sin(animPhase * 0.2) * 15} 120 50`}
                      stroke="#f472b6" 
                      strokeWidth="2" 
                      fill="none"
                      strokeDasharray="4 4"
                    />
                    {[...Array(3)].map((_, i) => {
                      const progress = ((animPhase * 2 + i * 30) % 100) / 100
                      const x = progress * 120
                      const y = 50 + Math.sin(progress * Math.PI * 4) * 15
                      return (
                        <circle key={i} cx={x} cy={y} r="4" fill="#f472b6" filter="url(#glow)" />
                      )
                    })}
                  </g>
                )}
              </g>

              {/* Detector / Output */}
              <g transform="translate(400, 120)">
                <text x="40" y="-30" fill="#64748b" fontSize="10" textAnchor="middle">Detector</text>
                <rect x="0" y="0" width="80" height="80" fill="#f1f5f9" rx="4" stroke="#cbd5e1" />
                
                {/* Signal display */}
                <rect x="10" y="10" width="60" height="30" fill="#1e1b4b" rx="2" />
                
                {/* Signal trace */}
                <path 
                  d={`M 15 30 ${[...Array(10)].map((_, i) => {
                    const x = 15 + i * 5
                    const spike = (activeStep === 3 && (i === 3 || i === 6 || i === 8)) ? -15 : 0
                    return `L ${x} ${25 + spike + Math.random() * 3}`
                  }).join(' ')}`}
                  stroke="#22c55e" 
                  strokeWidth="1.5" 
                  fill="none"
                />
                
                {/* Histogram bars */}
                {activeStep === 3 && (
                  <g transform="translate(10, 50)">
                    {[4, 8, 15, 12, 6, 3].map((h, i) => (
                      <rect 
                        key={i} 
                        x={i * 10} 
                        y={25 - h} 
                        width="8" 
                        height={h} 
                        fill="#8b5cf6"
                        opacity={0.3 + (animPhase % 50) / 100}
                      />
                    ))}
                  </g>
                )}
              </g>

              {/* Flow arrows */}
              <g opacity="0.4">
                <path d="M95 160 L125 160" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M235 160 L255 160" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M385 160 L395 160" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)" />
              </g>
              
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
                </marker>
              </defs>

              {/* Labels */}
              <text x="250" y="320" fill="#64748b" fontSize="11" textAnchor="middle">
                Complete analysis in {"<"}2 minutes per sample
              </text>
            </svg>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, i) => (
              <button
                key={step.id}
                onClick={() => {
                  setActiveStep(i)
                  setIsPlaying(false)
                }}
                className={cn(
                  "w-full text-left p-5 rounded-xl border transition-all",
                  activeStep === i
                    ? "bg-violet-50 border-violet-200"
                    : "bg-white border-slate-200 hover:border-violet-200"
                )}
              >
                <div className="flex gap-4">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0",
                    activeStep === i
                      ? "bg-violet-600 text-white"
                      : "bg-slate-100 text-slate-500"
                  )}>
                    {step.id}
                  </div>
                  <div>
                    <h3 className={cn(
                      "font-semibold mb-1",
                      activeStep === i ? "text-violet-900" : "text-slate-900"
                    )}>
                      {step.title}
                    </h3>
                    <p className={cn(
                      "text-sm",
                      activeStep === i ? "text-violet-700" : "text-slate-500"
                    )}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
