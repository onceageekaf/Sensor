"use client"

import { useState, useEffect } from "react"

export function Figure1Workflow() {
  const [animPhase, setAnimPhase] = useState(0)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimPhase((prev) => (prev + 1) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5)
    }, 3000)
    return () => clearInterval(stepInterval)
  }, [])

  const steps = [
    { label: "Nebulization", desc: "Sample dispersions are converted to aerosol droplets" },
    { label: "Plasma Torch", desc: "Particles are desolvated, vaporized, atomized, and ionized" },
    { label: "Mass Analyzer", desc: "Ion plumes sorted by mass-to-charge ratio" },
    { label: "Detection", desc: "Individual particle events registered as intensity spikes" },
    { label: "Data Output", desc: "Size, count, and composition distributions generated" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex gap-2 flex-wrap">
        {steps.map((step, i) => (
          <button
            key={i}
            onClick={() => setActiveStep(i)}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
              activeStep === i
                ? "bg-violet-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {step.label}
          </button>
        ))}
      </div>

      <svg viewBox="0 0 800 320" className="w-full">
        <defs>
          <marker id="arrowViolet" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#8b5cf6" />
          </marker>
          <filter id="glowViolet" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="plasmaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>

        {/* Step 1: Nebulization */}
        <g transform="translate(40, 80)" opacity={activeStep === 0 ? 1 : 0.4}>
          <rect x="0" y="0" width="100" height="120" rx="8" fill="#ede9fe" stroke="#8b5cf6" strokeWidth={activeStep === 0 ? 3 : 1} />
          <text x="50" y="-10" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1e293b">Nebulization</text>
          
          {/* Sample vial */}
          <rect x="30" y="60" width="40" height="50" rx="4" fill="#c4b5fd" stroke="#8b5cf6" strokeWidth="1" />
          <rect x="35" y="70" width="30" height="35" fill="#a78bfa" />
          
          {/* Animated droplets */}
          {activeStep === 0 && [0, 1, 2, 3, 4].map((i) => {
            const progress = ((animPhase * 2 + i * 20) % 100) / 100
            const y = 50 - progress * 40
            const opacity = progress < 0.8 ? 1 : 1 - (progress - 0.8) * 5
            return (
              <circle
                key={i}
                cx={40 + i * 5}
                cy={y}
                r="3"
                fill="#7c3aed"
                opacity={opacity}
              />
            )
          })}
        </g>

        {/* Arrow 1 */}
        <path d="M 150 140 L 200 140" stroke="#8b5cf6" strokeWidth="2" fill="none" markerEnd="url(#arrowViolet)" />

        {/* Step 2: Plasma Torch */}
        <g transform="translate(210, 80)" opacity={activeStep === 1 ? 1 : 0.4}>
          <rect x="0" y="0" width="120" height="120" rx="8" fill="url(#plasmaGrad)" stroke="#7c3aed" strokeWidth={activeStep === 1 ? 3 : 1} />
          <text x="60" y="-10" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1e293b">Plasma Torch</text>
          
          {/* Flame effect */}
          {activeStep === 1 && [0, 1, 2].map((i) => {
            const flicker = Math.sin((animPhase + i * 30) * 0.1) * 5
            return (
              <ellipse
                key={i}
                cx={60}
                cy={60 + flicker}
                rx={30 - i * 8}
                ry={40 - i * 10}
                fill={i === 0 ? "#fef3c7" : i === 1 ? "#fde68a" : "#fbbf24"}
                opacity={0.7}
              />
            )
          })}
          
          {/* Ionization particles */}
          {activeStep === 1 && [0, 1, 2, 3].map((i) => {
            const angle = ((animPhase * 3 + i * 90) % 360) * Math.PI / 180
            const r = 25
            return (
              <circle
                key={i}
                cx={60 + Math.cos(angle) * r}
                cy={60 + Math.sin(angle) * r}
                r="4"
                fill="#ffffff"
                filter="url(#glowViolet)"
              />
            )
          })}
          
          <text x="60" y="105" textAnchor="middle" fontSize="9" fill="white" fontWeight="600">6000-10000K</text>
        </g>

        {/* Arrow 2 */}
        <path d="M 340 140 L 390 140" stroke="#8b5cf6" strokeWidth="2" fill="none" markerEnd="url(#arrowViolet)" />

        {/* Step 3: Mass Analyzer */}
        <g transform="translate(400, 80)" opacity={activeStep === 2 ? 1 : 0.4}>
          <rect x="0" y="0" width="120" height="120" rx="8" fill="#f5f3ff" stroke="#8b5cf6" strokeWidth={activeStep === 2 ? 3 : 1} />
          <text x="60" y="-10" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1e293b">Mass Analyzer</text>
          
          {/* Quadrupole rods */}
          <rect x="20" y="30" width="80" height="12" rx="6" fill="#a78bfa" />
          <rect x="20" y="78" width="80" height="12" rx="6" fill="#a78bfa" />
          
          {/* Ion path */}
          <path d="M 10 60 Q 60 50 110 60" stroke="#7c3aed" strokeWidth="2" fill="none" strokeDasharray="4 2" />
          
          {/* Animated ions passing through */}
          {activeStep === 2 && [0, 1, 2].map((i) => {
            const progress = ((animPhase * 2 + i * 33) % 100) / 100
            const x = 10 + progress * 100
            const y = 60 + Math.sin(progress * Math.PI * 2) * 8
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="5"
                fill="#7c3aed"
                filter="url(#glowViolet)"
              />
            )
          })}
          
          <text x="60" y="105" textAnchor="middle" fontSize="9" fill="#64748b">m/z separation</text>
        </g>

        {/* Arrow 3 */}
        <path d="M 530 140 L 580 140" stroke="#8b5cf6" strokeWidth="2" fill="none" markerEnd="url(#arrowViolet)" />

        {/* Step 4: Detection */}
        <g transform="translate(590, 80)" opacity={activeStep === 3 ? 1 : 0.4}>
          <rect x="0" y="0" width="100" height="120" rx="8" fill="#ede9fe" stroke="#8b5cf6" strokeWidth={activeStep === 3 ? 3 : 1} />
          <text x="50" y="-10" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1e293b">Detection</text>
          
          {/* Signal display */}
          <rect x="10" y="20" width="80" height="50" fill="#1e1b4b" rx="4" />
          
          {/* Animated signal trace */}
          <path
            d={`M 15 55 ${Array.from({ length: 15 }).map((_, i) => {
              const x = 15 + i * 5
              const spike = (activeStep === 3 && (i === 3 || i === 7 || i === 11)) 
                ? Math.sin((animPhase + i * 10) * 0.2) * 15 
                : 0
              return `L ${x} ${55 - spike - Math.random() * 3}`
            }).join(" ")}`}
            stroke="#22d3ee"
            strokeWidth="1.5"
            fill="none"
          />
          
          {/* Particle event indicators */}
          {activeStep === 3 && (
            <g>
              <circle cx="30" cy="35" r="3" fill="#22d3ee" className="animate-pulse" />
              <circle cx="50" cy="35" r="3" fill="#22d3ee" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
              <circle cx="70" cy="35" r="3" fill="#22d3ee" className="animate-pulse" style={{ animationDelay: "1s" }} />
            </g>
          )}
          
          <text x="50" y="85" textAnchor="middle" fontSize="9" fill="#64748b">Ion plumes</text>
          <text x="50" y="100" textAnchor="middle" fontSize="9" fill="#64748b">detected</text>
        </g>

        {/* Arrow 4 */}
        <path d="M 700 140 L 750 140" stroke="#8b5cf6" strokeWidth="2" fill="none" markerEnd="url(#arrowViolet)" />

        {/* Step 5: Data Output (histogram) */}
        <g transform="translate(680, 230)" opacity={activeStep === 4 ? 1 : 0.4}>
          <text x="60" y="-10" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1e293b">Size Distribution</text>
          
          {/* Histogram bars */}
          {[20, 35, 55, 80, 65, 45, 30, 15].map((h, i) => {
            const barHeight = activeStep === 4 ? h * (Math.min(animPhase, 50) / 50) : h * 0.3
            return (
              <rect
                key={i}
                x={i * 15}
                y={60 - barHeight}
                width="12"
                height={barHeight}
                fill="#8b5cf6"
                opacity={activeStep === 4 ? 0.8 : 0.4}
                rx="2"
              />
            )
          })}
          
          {/* Axis */}
          <line x1="0" y1="60" x2="120" y2="60" stroke="#64748b" strokeWidth="1" />
          <text x="60" y="75" textAnchor="middle" fontSize="8" fill="#64748b">Size (nm)</text>
        </g>

        {/* Description box */}
        <g transform="translate(40, 260)">
          <rect x="0" y="0" width="600" height="50" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
          <text x="20" y="20" fontSize="11" fontWeight="600" fill="#1e293b">
            Step {activeStep + 1}: {steps[activeStep].label}
          </text>
          <text x="20" y="38" fontSize="10" fill="#64748b">
            {steps[activeStep].desc}
          </text>
        </g>
      </svg>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-violet-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-violet-700">&gt;500</div>
          <div className="text-xs text-slate-600">particles/min</div>
        </div>
        <div className="bg-violet-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-violet-700">&gt;90</div>
          <div className="text-xs text-slate-600">elements detectable</div>
        </div>
        <div className="bg-violet-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-violet-700">fg</div>
          <div className="text-xs text-slate-600">mass resolution</div>
        </div>
      </div>
    </div>
  )
}
