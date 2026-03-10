"use client"

import React from "react"

import { useEffect, useRef, useState, useCallback } from "react"
import { cn } from "@/lib/utils"
import { Play, Pause, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

function FadeIn({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true) }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

const steps = [
  {
    id: 0,
    title: "Normal tumor cell",
    description: "On a typical tumor cell, surface receptors (like EGFR, HER2, or PD-L1) are distributed unevenly. The cell constantly cycles these receptors in and out of the membrane through endocytosis, reducing the number available for antibody drugs to bind.",
  },
  {
    id: 1,
    title: "Prochlorperazine blocks dynamin",
    description: "An intravenous dose of prochlorperazine temporarily inhibits dynamin, the molecular motor that pinches off endocytic vesicles. Without dynamin, receptors can no longer be pulled inside the cell. They accumulate and form dense clusters on the surface.",
  },
  {
    id: 2,
    title: "Antibody binds clustered receptors",
    description: "The therapeutic antibody (cetuximab, trastuzumab, or avelumab) binds to the densely clustered receptors. The high density of antibody molecules coating the tumor surface creates a powerful 'eat me' signal that the immune system can't ignore.",
  },
  {
    id: 3,
    title: "NK cells destroy tumor",
    description: "Natural killer (NK) cells recognize the antibody-coated tumor through their Fc receptors. The dense receptor clustering allows NK cells to form tight, sustained contacts - almost 'zipping' to the tumor cell - triggering powerful antibody-dependent cell cytotoxicity (ADCC).",
  },
  {
    id: 4,
    title: "Immune memory forms",
    description: "The strong immune response doesn't just destroy the current tumor. In mouse studies, treated animals developed long-term immunity - when the same cancer was re-introduced 4 weeks later, it was rapidly eliminated. The combination treatment had 'taught' the immune system to recognize the cancer.",
  },
]

export function EndoHowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [animPhase, setAnimPhase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setAnimPhase((p) => (p + 1) % 100), 50)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => setActiveStep((s) => (s + 1) % steps.length), 5000)
    return () => clearInterval(interval)
  }, [isPlaying])

  const resetAnimation = useCallback(() => {
    setActiveStep(0)
    setIsPlaying(true)
  }, [])

  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-sm font-medium text-violet-600 tracking-widest uppercase mb-4">Mechanism of action</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight max-w-3xl">
            How endocytosis inhibition works
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-12 grid lg:grid-cols-5 gap-8">
            {/* Animation area */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-200 p-4 md:p-6">
                <svg viewBox="0 0 600 500" className="w-full h-auto">
                  <defs>
                    <filter id="endoGlow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                    <linearGradient id="cellMembrane" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e2e8f0" />
                      <stop offset="50%" stopColor="#cbd5e1" />
                      <stop offset="100%" stopColor="#e2e8f0" />
                    </linearGradient>
                    <radialGradient id="cellBody" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#f8fafc" />
                      <stop offset="100%" stopColor="#f1f5f9" />
                    </radialGradient>
                  </defs>

                  {/* Background label */}
                  <text x="300" y="25" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="500">
                    Tumor Cell
                  </text>

                  {/* Cell body */}
                  <ellipse cx="300" cy="280" rx="250" ry="190" fill="url(#cellBody)" stroke="url(#cellMembrane)" strokeWidth="4" />

                  {/* Nucleus */}
                  <ellipse cx="300" cy="320" rx="70" ry="50" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
                  <text x="300" y="325" textAnchor="middle" fill="#94a3b8" fontSize="12">Nucleus</text>

                  {/* Receptors on cell surface */}
                  {(() => {
                    const receptorPositions = [
                      { angle: -140, label: "EGFR" },
                      { angle: -120, label: "EGFR" },
                      { angle: -100, label: "EGFR" },
                      { angle: -80, label: "HER2" },
                      { angle: -60, label: "HER2" },
                      { angle: -40, label: "PD-L1" },
                      { angle: -20, label: "EGFR" },
                      { angle: 0, label: "HER2" },
                      { angle: 20, label: "EGFR" },
                      { angle: 40, label: "PD-L1" },
                    ]

                    // In steps 0, receptors are scattered. Steps 1+, they cluster
                    const isClustered = activeStep >= 1
                    const hasAntibody = activeStep >= 2
                    const hasNK = activeStep >= 3
                    const hasMemory = activeStep >= 4

                    return (
                      <g>
                        {receptorPositions.map((r, i) => {
                          const baseAngle = (r.angle * Math.PI) / 180
                          // When clustered, compress angles towards top of cell
                          const clusteredAngle = isClustered
                            ? ((-80 + (i - receptorPositions.length / 2) * 12) * Math.PI) / 180
                            : baseAngle
                          const angle = isClustered ? clusteredAngle : baseAngle
                          const rx = 245
                          const ry = 185
                          const x = 300 + rx * Math.cos(angle)
                          const y = 280 + ry * Math.sin(angle)
                          // Receptor stalk direction (outward from ellipse center)
                          const dx = Math.cos(angle) * 25
                          const dy = Math.sin(angle) * 25

                          return (
                            <g key={`receptor-${i}`} className="transition-all duration-1000">
                              {/* Receptor stalk */}
                              <line
                                x1={x} y1={y} x2={x + dx} y2={y + dy}
                                stroke={isClustered ? "#7c3aed" : "#94a3b8"}
                                strokeWidth="2"
                              />
                              {/* Receptor head */}
                              <circle
                                cx={x + dx} cy={y + dy} r={isClustered ? 8 : 6}
                                fill={isClustered ? "#8b5cf6" : "#94a3b8"}
                                className="transition-all duration-1000"
                              />

                              {/* Antibody Y-shape when bound */}
                              {hasAntibody && (
                                <g>
                                  <line
                                    x1={x + dx} y1={y + dy}
                                    x2={x + dx + Math.cos(angle) * 15} y2={y + dy + Math.sin(angle) * 15}
                                    stroke="#7c3aed" strokeWidth="2"
                                  />
                                  <line
                                    x1={x + dx + Math.cos(angle) * 15} y1={y + dy + Math.sin(angle) * 15}
                                    x2={x + dx + Math.cos(angle) * 15 + Math.cos(angle + 0.6) * 10}
                                    y2={y + dy + Math.sin(angle) * 15 + Math.sin(angle + 0.6) * 10}
                                    stroke="#7c3aed" strokeWidth="2"
                                  />
                                  <line
                                    x1={x + dx + Math.cos(angle) * 15} y1={y + dy + Math.sin(angle) * 15}
                                    x2={x + dx + Math.cos(angle) * 15 + Math.cos(angle - 0.6) * 10}
                                    y2={y + dy + Math.sin(angle) * 15 + Math.sin(angle - 0.6) * 10}
                                    stroke="#7c3aed" strokeWidth="2"
                                  />
                                  {/* mAb label on first */}
                                  {i === 4 && (
                                    <text
                                      x={x + dx + Math.cos(angle) * 30}
                                      y={y + dy + Math.sin(angle) * 30}
                                      fill="#7c3aed" fontSize="9" textAnchor="middle" fontWeight="600"
                                    >
                                      mAb
                                    </text>
                                  )}
                                </g>
                              )}
                            </g>
                          )
                        })}

                        {/* Endocytic vesicles (only in step 0) */}
                        {!isClustered && (
                          <g>
                            {[0, 1, 2].map((v) => {
                              const progress = ((animPhase * 1.5 + v * 30) % 100) / 100
                              const vx = 200 + v * 80
                              const vy = 180 + progress * 100
                              return (
                                <g key={`vesicle-${v}`} style={{ opacity: 1 - progress }}>
                                  <circle cx={vx} cy={vy} r="10" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 2" />
                                  <circle cx={vx} cy={vy - 10} r="4" fill="#94a3b8" />
                                  <text x={vx + 15} y={vy + 4} fill="#94a3b8" fontSize="8">endocytosis</text>
                                </g>
                              )
                            })}
                          </g>
                        )}

                        {/* Dynamin inhibition marker (step 1) */}
                        {activeStep === 1 && (
                          <g>
                            {[0, 1, 2].map((v) => {
                              const vx = 200 + v * 80
                              return (
                                <g key={`block-${v}`}>
                                  <circle cx={vx} cy="200" r="14" fill="none" stroke="#ef4444" strokeWidth="2" />
                                  <line x1={vx - 8} y1="193" x2={vx + 8} y2="207" stroke="#ef4444" strokeWidth="2" />
                                  <text x={vx} y="230" fill="#ef4444" fontSize="8" textAnchor="middle" fontWeight="600">BLOCKED</text>
                                </g>
                              )
                            })}
                            {/* PCZ pill icon */}
                            <g transform="translate(480, 130)">
                              <rect x="0" y="0" width="80" height="30" rx="15" fill="#8b5cf6" />
                              <text x="40" y="20" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">PCZ</text>
                            </g>
                            <text x="520" y="175" fill="#7c3aed" fontSize="9" textAnchor="middle">Dynamin</text>
                            <text x="520" y="186" fill="#7c3aed" fontSize="9" textAnchor="middle">inhibited</text>
                          </g>
                        )}

                        {/* NK cells (steps 3+) */}
                        {hasNK && (
                          <g>
                            {[0, 1, 2].map((nk) => {
                              const wobble = Math.sin(animPhase * 0.1 + nk) * 3
                              const baseX = 200 + nk * 80
                              const baseY = 50 + wobble
                              return (
                                <g key={`nk-${nk}`}>
                                  <circle cx={baseX} cy={baseY} r="22" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                                  <circle cx={baseX} cy={baseY} r="8" fill="#93c5fd" />
                                  <text x={baseX} y={baseY + 4} textAnchor="middle" fill="#1d4ed8" fontSize="7" fontWeight="700">NK</text>
                                  {/* Connection line to antibody */}
                                  <line
                                    x1={baseX} y1={baseY + 22}
                                    x2={baseX + 20} y2={baseY + 50}
                                    stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2"
                                    style={{ opacity: 0.6 + Math.sin(animPhase * 0.1 + nk * 2) * 0.4 }}
                                  />
                                </g>
                              )
                            })}
                            <text x="400" y="60" fill="#1d4ed8" fontSize="10" fontWeight="600">Natural Killer Cells</text>
                            <text x="400" y="74" fill="#3b82f6" fontSize="9">Triggering ADCC</text>
                          </g>
                        )}

                        {/* Immune memory (step 4) */}
                        {hasMemory && (
                          <g>
                            {/* Memory T cells */}
                            {[0, 1, 2, 3].map((mc) => {
                              const mx = 80 + mc * 40
                              const my = 430 + Math.sin(animPhase * 0.08 + mc) * 5
                              return (
                                <g key={`memory-${mc}`}>
                                  <circle cx={mx} cy={my} r="12" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5" />
                                  <text x={mx} y={my + 3} textAnchor="middle" fill="#16a34a" fontSize="6" fontWeight="700">T</text>
                                </g>
                              )
                            })}
                            <text x="80" y="460" fill="#16a34a" fontSize="9" fontWeight="600">Memory T cells formed</text>
                            <text x="80" y="472" fill="#22c55e" fontSize="8">Long-term immunity established</text>

                            {/* Shield icon */}
                            <g transform="translate(440, 400)">
                              <path d="M 20 0 L 40 10 L 40 30 Q 40 45 20 50 Q 0 45 0 30 L 0 10 Z" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5" />
                              <text x="20" y="32" textAnchor="middle" fill="#16a34a" fontSize="16">&#10003;</text>
                            </g>
                            <text x="460" y="465" fill="#16a34a" fontSize="9" textAnchor="middle" fontWeight="600">Cancer resistant</text>
                          </g>
                        )}
                      </g>
                    )
                  })()}
                </svg>

                {/* Controls */}
                <div className="flex items-center justify-center gap-3 mt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-transparent"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-transparent"
                    onClick={resetAnimation}
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Step descriptions */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              {steps.map((step) => (
                <button
                  key={step.id}
                  className={cn(
                    "text-left p-4 rounded-xl border transition-all duration-300",
                    activeStep === step.id
                      ? "bg-violet-50 border-violet-200"
                      : "bg-white border-slate-100 hover:border-slate-200"
                  )}
                  onClick={() => { setActiveStep(step.id); setIsPlaying(false) }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={cn(
                      "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold",
                      activeStep === step.id
                        ? "bg-violet-600 text-white"
                        : "bg-slate-100 text-slate-400"
                    )}>
                      {step.id + 1}
                    </div>
                    <h3 className={cn(
                      "font-semibold text-sm",
                      activeStep === step.id ? "text-violet-900" : "text-slate-600"
                    )}>
                      {step.title}
                    </h3>
                  </div>
                  {activeStep === step.id && (
                    <p className="text-sm text-slate-600 leading-relaxed pl-10">
                      {step.description}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
