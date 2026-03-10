"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Play, Pause } from "lucide-react"

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

const steps = [
  {
    id: 1,
    title: "Tripeptide Synthesis",
    description: "The non-canonical amino acid (X) is linked to a glycine-lysine dipeptide via an isopeptide bond, creating the G-XisoK scaffold — a 'Trojan horse' that the bacterial transporter recognizes.",
  },
  {
    id: 2,
    title: "Active Import",
    description: "The periplasmic binding protein OppA binds the tripeptide and delivers it to the Opp transporter. ATP hydrolysis drives active import into the cytosol — achieving 5-10x higher intracellular concentrations.",
  },
  {
    id: 3,
    title: "Intracellular Processing",
    description: "Endogenous peptidases (PepA and PepN) cleave the N-terminal glycine, releasing the free XisoK non-canonical amino acid inside the cell.",
  },
  {
    id: 4,
    title: "Protein Incorporation",
    description: "The orthogonal aminoacyl-tRNA synthetase (PylRS) charges its cognate tRNA with the ncAA, enabling site-specific incorporation at amber stop codons during translation.",
  },
]

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [animPhase, setAnimPhase] = useState(0)

  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isPlaying])

  useEffect(() => {
    const animInterval = setInterval(() => {
      setAnimPhase((prev) => (prev + 1) % 100)
    }, 50)
    return () => clearInterval(animInterval)
  }, [])

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-sm font-medium text-emerald-600 tracking-widest uppercase mb-4 text-center">Mechanism</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight text-center mb-4">
            How It Works
          </h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">
            A four-step process transforms cell-impermeable building blocks into efficiently incorporated protein modifications.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Animation */}
            <div className="relative bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-slate-500">Step {activeStep + 1} of {steps.length}</span>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4 text-slate-500" /> : <Play className="w-4 h-4 text-slate-500" />}
                </button>
              </div>

              {/* SVG Animation */}
              <svg viewBox="0 0 500 350" className="w-full h-auto">
                <defs>
                  <linearGradient id="proteinMembrane" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                  <filter id="proteinGlow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Background regions */}
                <rect x="0" y="0" width="500" height="80" fill="#f0fdf4" />
                <text x="20" y="25" fill="#059669" fontSize="11" fontWeight="600">PERIPLASM</text>
                
                <rect x="0" y="80" width="500" height="60" fill="url(#proteinMembrane)" opacity="0.3" />
                <text x="20" y="115" fill="#d97706" fontSize="11" fontWeight="600">INNER MEMBRANE</text>
                
                <rect x="0" y="140" width="500" height="210" fill="#ecfdf5" />
                <text x="20" y="165" fill="#059669" fontSize="11" fontWeight="600">CYTOSOL</text>

                {/* OppA binding protein */}
                <g transform="translate(80, 30)">
                  <ellipse cx="40" cy="25" rx="35" ry="22" fill="#86efac" stroke="#22c55e" strokeWidth="2" />
                  <text x="40" y="30" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="600">OppA</text>
                </g>

                {/* Tripeptide - G-XisoK */}
                {activeStep >= 0 && (
                  <g style={{ 
                    transform: activeStep === 0 
                      ? `translate(200px, 40px)` 
                      : activeStep === 1 
                        ? `translate(${120 + Math.sin(animPhase * 0.1) * 5}px, ${30 + (animPhase % 30)}px)`
                        : `translate(200px, 180px)`,
                    transition: 'transform 0.5s ease-out'
                  }}>
                    <rect x="0" y="0" width="60" height="25" rx="5" fill="#10b981" stroke="#059669" strokeWidth="2" />
                    <text x="30" y="17" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">G-XisoK</text>
                  </g>
                )}

                {/* Transporter complex */}
                <g transform="translate(150, 80)">
                  {/* OppB/C channels */}
                  <rect x="0" y="0" width="25" height="60" rx="5" fill="#fcd34d" stroke="#f59e0b" strokeWidth="2" />
                  <text x="12" y="35" textAnchor="middle" fill="#92400e" fontSize="8" fontWeight="600">B</text>
                  
                  <rect x="35" y="0" width="25" height="60" rx="5" fill="#fcd34d" stroke="#f59e0b" strokeWidth="2" />
                  <text x="47" y="35" textAnchor="middle" fill="#92400e" fontSize="8" fontWeight="600">C</text>
                  
                  {/* OppD/F NBDs */}
                  <rect x="-10" y="60" width="30" height="25" rx="5" fill="#a3e635" stroke="#84cc16" strokeWidth="2" />
                  <text x="5" y="77" textAnchor="middle" fill="#3f6212" fontSize="8" fontWeight="600">D</text>
                  
                  <rect x="40" y="60" width="30" height="25" rx="5" fill="#a3e635" stroke="#84cc16" strokeWidth="2" />
                  <text x="55" y="77" textAnchor="middle" fill="#3f6212" fontSize="8" fontWeight="600">F</text>
                  
                  {/* ATP */}
                  {activeStep === 1 && (
                    <>
                      <circle cx="5" cy="95" r="8" fill="#ef4444" filter="url(#proteinGlow)" />
                      <text x="5" y="98" textAnchor="middle" fill="white" fontSize="6" fontWeight="700">ATP</text>
                      <circle cx="55" cy="95" r="8" fill="#ef4444" filter="url(#proteinGlow)" />
                      <text x="55" y="98" textAnchor="middle" fill="white" fontSize="6" fontWeight="700">ATP</text>
                    </>
                  )}
                </g>

                {/* Peptidases */}
                {activeStep >= 2 && (
                  <g transform="translate(280, 180)">
                    <ellipse cx="30" cy="20" rx="25" ry="18" fill="#c4b5fd" stroke="#8b5cf6" strokeWidth="2" />
                    <text x="30" y="24" textAnchor="middle" fill="#5b21b6" fontSize="9" fontWeight="600">PepA/N</text>
                    
                    {/* Cleavage animation */}
                    {activeStep === 2 && (
                      <line 
                        x1={-20 + (animPhase % 50) * 0.5} 
                        y1="20" 
                        x2={-10 + (animPhase % 50) * 0.5} 
                        y2="20" 
                        stroke="#8b5cf6" 
                        strokeWidth="3" 
                        strokeLinecap="round"
                      />
                    )}
                  </g>
                )}

                {/* Released XisoK */}
                {activeStep >= 2 && (
                  <g style={{ 
                    transform: activeStep === 2 
                      ? `translate(350px, 200px)` 
                      : `translate(380px, 260px)`,
                    transition: 'transform 0.8s ease-out'
                  }}>
                    <rect x="0" y="0" width="45" height="20" rx="4" fill="#14b8a6" stroke="#0d9488" strokeWidth="2" />
                    <text x="22" y="14" textAnchor="middle" fill="white" fontSize="8" fontWeight="700">XisoK</text>
                  </g>
                )}

                {/* PylRS/tRNA */}
                {activeStep === 3 && (
                  <g transform="translate(320, 260)">
                    <path d="M 0 30 L 20 0 L 40 30 L 30 30 L 30 50 L 10 50 L 10 30 Z" fill="#f472b6" stroke="#ec4899" strokeWidth="2" />
                    <text x="20" y="38" textAnchor="middle" fill="#831843" fontSize="7" fontWeight="600">tRNA</text>
                    
                    <ellipse cx="70" cy="30" rx="25" ry="18" fill="#fda4af" stroke="#f43f5e" strokeWidth="2" />
                    <text x="70" y="34" textAnchor="middle" fill="#881337" fontSize="8" fontWeight="600">PylRS</text>
                  </g>
                )}

                {/* Ribosome and protein */}
                {activeStep === 3 && (
                  <g transform="translate(100, 240)">
                    <ellipse cx="50" cy="40" rx="45" ry="35" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
                    <text x="50" y="38" textAnchor="middle" fill="#3730a3" fontSize="9" fontWeight="600">Ribosome</text>
                    <text x="50" y="50" textAnchor="middle" fill="#3730a3" fontSize="7">mRNA</text>
                    
                    {/* Growing protein chain */}
                    <rect x="95" y="25" width="60" height="12" rx="3" fill="#818cf8" />
                    <rect x={155 + (animPhase % 30) * 0.3} y="25" width="8" height="12" rx="2" fill="#14b8a6" />
                  </g>
                )}

                {/* Step labels */}
                <g transform="translate(350, 20)">
                  <rect x="0" y="0" width="140" height="60" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
                  <text x="10" y="20" fill="#059669" fontSize="10" fontWeight="700">Step {activeStep + 1}</text>
                  <text x="10" y="35" fill="#334155" fontSize="9" fontWeight="600">{steps[activeStep].title}</text>
                </g>
              </svg>
            </div>

            {/* Steps */}
            <div className="space-y-4">
              {steps.map((step, i) => (
                <button
                  key={step.id}
                  onClick={() => { setActiveStep(i); setIsPlaying(false); }}
                  className={cn(
                    "w-full text-left p-5 rounded-xl border transition-all",
                    activeStep === i 
                      ? "border-emerald-200 bg-emerald-50 shadow-sm" 
                      : "border-slate-200 bg-white hover:border-slate-300"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold transition-colors",
                      activeStep === i ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-500"
                    )}>
                      {step.id}
                    </div>
                    <div>
                      <h4 className={cn(
                        "font-semibold mb-1 transition-colors",
                        activeStep === i ? "text-emerald-900" : "text-slate-700"
                      )}>
                        {step.title}
                      </h4>
                      <p className={cn(
                        "text-sm leading-relaxed transition-colors",
                        activeStep === i ? "text-emerald-700" : "text-slate-500"
                      )}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
