"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function EndoFigure1() {
  const [animPhase, setAnimPhase] = useState(0)
  const [showInhibited, setShowInhibited] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => setAnimPhase((p) => (p + 1) % 200), 40)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-4">
      <div className="flex gap-2 justify-center">
        <button
          className={cn("px-4 py-2 rounded-lg text-sm font-medium transition-all", !showInhibited ? "bg-violet-600 text-white" : "bg-slate-100 text-slate-600")}
          onClick={() => setShowInhibited(false)}
        >
          Normal endocytosis
        </button>
        <button
          className={cn("px-4 py-2 rounded-lg text-sm font-medium transition-all", showInhibited ? "bg-violet-600 text-white" : "bg-slate-100 text-slate-600")}
          onClick={() => setShowInhibited(true)}
        >
          Dynamin inhibited (PCZ)
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 overflow-hidden">
        <svg viewBox="0 0 600 350" className="w-full h-auto">
          <defs>
            <filter id="endo1Glow">
              <feGaussianBlur stdDeviation="2" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Title */}
          <text x="300" y="20" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="600">
            {showInhibited ? "Endocytosis blocked: receptors accumulate" : "Normal receptor internalization"}
          </text>

          {/* Cell membrane - wavy line */}
          <path
            d="M 0 180 Q 50 175 100 180 Q 150 185 200 180 Q 250 175 300 180 Q 350 185 400 180 Q 450 175 500 180 Q 550 185 600 180"
            fill="none" stroke="#94a3b8" strokeWidth="3"
          />
          <text x="580" y="170" fill="#94a3b8" fontSize="9" textAnchor="end">membrane</text>

          {/* Extracellular */}
          <text x="10" y="50" fill="#94a3b8" fontSize="10">Extracellular</text>
          {/* Intracellular */}
          <text x="10" y="320" fill="#94a3b8" fontSize="10">Intracellular</text>

          {!showInhibited ? (
            /* NORMAL ENDOCYTOSIS */
            <g>
              {/* Stage 1: Receptor on surface */}
              <g transform="translate(80, 130)">
                <rect x="0" y="0" width="6" height="50" fill="#94a3b8" rx="3" />
                <circle cx="3" cy="-8" r="10" fill="#8b5cf6" />
                <text x="3" y="-4" textAnchor="middle" fill="white" fontSize="7" fontWeight="700">R</text>
                <text x="3" y="70" textAnchor="middle" fill="#64748b" fontSize="9">1. Surface</text>
              </g>

              {/* Stage 2: Clathrin coat forming */}
              <g transform="translate(200, 130)">
                <path d="M -20 50 Q -20 70 0 70 Q 20 70 20 50" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
                <rect x="-3" y="0" width="6" height="50" fill="#94a3b8" rx="3" />
                <circle cx="0" cy="-8" r="10" fill="#8b5cf6" />
                <text x="0" y="-4" textAnchor="middle" fill="white" fontSize="7" fontWeight="700">R</text>
                <text x="0" y="90" textAnchor="middle" fill="#64748b" fontSize="9">2. Clathrin pit</text>
                <text x="30" y="65" fill="#f59e0b" fontSize="8">clathrin coat</text>
              </g>

              {/* Stage 3: Dynamin pinching */}
              <g transform="translate(340, 130)">
                <path d="M -25 50 Q -25 85 0 85 Q 25 85 25 50" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
                <rect x="-3" y="0" width="6" height="50" fill="#94a3b8" rx="3" />
                <circle cx="0" cy="-8" r="10" fill="#8b5cf6" />
                <text x="0" y="-4" textAnchor="middle" fill="white" fontSize="7" fontWeight="700">R</text>
                {/* Dynamin ring */}
                <ellipse cx="0" cy="53" rx="12" ry="6" fill="none" stroke="#ef4444" strokeWidth="2.5" />
                <text x="25" y="55" fill="#ef4444" fontSize="9" fontWeight="600">dynamin</text>
                <text x="0" y="110" textAnchor="middle" fill="#64748b" fontSize="9">3. Pinching</text>
              </g>

              {/* Stage 4: Vesicle released */}
              <g transform="translate(500, 130)">
                {/* Animated vesicle moving down */}
                {(() => {
                  const progress = (animPhase % 100) / 100
                  const y = 60 + progress * 120
                  return (
                    <g style={{ opacity: 1 - progress * 0.5 }}>
                      <circle cx="0" cy={y} r="18" fill="none" stroke="#f59e0b" strokeWidth="2" />
                      <circle cx="0" cy={y - 18} r="8" fill="#8b5cf6" />
                      <text x="0" y={y - 14} textAnchor="middle" fill="white" fontSize="6" fontWeight="700">R</text>
                    </g>
                  )
                })()}
                <text x="0" y="240" textAnchor="middle" fill="#64748b" fontSize="9">4. Internalized</text>
                <text x="0" y="255" textAnchor="middle" fill="#94a3b8" fontSize="8">receptor lost</text>
              </g>
            </g>
          ) : (
            /* INHIBITED - receptors accumulate */
            <g>
              {/* Multiple receptors stuck on surface */}
              {Array.from({ length: 10 }).map((_, i) => {
                const x = 60 + i * 50
                const wobble = Math.sin(animPhase * 0.05 + i) * 3
                return (
                  <g key={`stuck-${i}`} transform={`translate(${x}, ${130 + wobble})`}>
                    <rect x="-3" y="0" width="6" height="50" fill="#94a3b8" rx="3" />
                    <circle cx="0" cy="-8" r="10" fill="#8b5cf6" filter="url(#endo1Glow)" />
                    <text x="0" y="-4" textAnchor="middle" fill="white" fontSize="7" fontWeight="700">R</text>
                  </g>
                )
              })}

              {/* Blocked dynamin */}
              {[0, 1, 2].map((i) => (
                <g key={`blocked-${i}`} transform={`translate(${150 + i * 150}, 240)`}>
                  <circle cx="0" cy="0" r="16" fill="none" stroke="#ef4444" strokeWidth="2" />
                  <line x1="-8" y1="-8" x2="8" y2="8" stroke="#ef4444" strokeWidth="2.5" />
                  <text x="0" y="28" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="600">blocked</text>
                </g>
              ))}

              {/* PCZ indicator */}
              <g transform="translate(470, 260)">
                <rect x="0" y="0" width="100" height="35" rx="17" fill="#8b5cf6" />
                <text x="50" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">PCZ active</text>
              </g>

              <text x="300" y="330" textAnchor="middle" fill="#8b5cf6" fontSize="11" fontWeight="600">
                Receptors cluster on surface - more targets for antibodies
              </text>
            </g>
          )}
        </svg>
      </div>
    </div>
  )
}
