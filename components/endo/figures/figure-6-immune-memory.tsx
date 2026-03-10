"use client"

import { useEffect, useState } from "react"

export function EndoFigure6() {
  const [animPhase, setAnimPhase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setAnimPhase((p) => (p + 1) % 300), 40)
    return () => clearInterval(interval)
  }, [])

  // Timeline phases
  const phase1End = 80   // Initial treatment
  const phase2Start = 100 // Gap period
  const phase2End = 160   // Re-challenge
  const phase3Start = 180 // Immune memory response

  const progress = animPhase

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 overflow-hidden">
      <svg viewBox="0 0 620 420" className="w-full h-auto">
        {/* Title */}
        <text x="310" y="20" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="600">
          {"Cancer \"Vaccination\" Effect: Re-Challenge Experiment"}
        </text>

        {/* Timeline */}
        <g transform="translate(40, 50)">
          <line x1="0" y1="0" x2="540" y2="0" stroke="#e2e8f0" strokeWidth="2" />
          
          {/* Phase markers */}
          <g>
            <rect x="0" y="-10" width="135" height="20" rx="10" fill="#8b5cf6" opacity="0.15" />
            <text x="67" y="4" textAnchor="middle" fill="#7c3aed" fontSize="9" fontWeight="600">Treatment Phase</text>
          </g>
          <g>
            <rect x="160" y="-10" width="100" height="20" rx="10" fill="#f1f5f9" />
            <text x="210" y="4" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">4 weeks gap</text>
          </g>
          <g>
            <rect x="285" y="-10" width="120" height="20" rx="10" fill="#ef4444" opacity="0.15" />
            <text x="345" y="4" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="600">Re-Challenge</text>
          </g>
          <g>
            <rect x="430" y="-10" width="110" height="20" rx="10" fill="#22c55e" opacity="0.15" />
            <text x="485" y="4" textAnchor="middle" fill="#16a34a" fontSize="9" fontWeight="600">Result</text>
          </g>
        </g>

        {/* Main visualization area */}
        <g transform="translate(40, 90)">
          {/* Phase 1: Treatment clears tumor */}
          <g>
            <text x="67" y="10" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="600">Initial Tumor</text>
            
            {/* Tumor shrinking */}
            {(() => {
              const shrink = progress < phase1End ? Math.max(0.1, 1 - (progress / phase1End) * 0.9) : 0.1
              const r = 40 * shrink
              return (
                <g>
                  <circle cx="67" cy="80" r={r} fill="#fecaca" stroke="#ef4444" strokeWidth="1.5" />
                  {r > 10 && <text x="67" y="84" textAnchor="middle" fill="#dc2626" fontSize={Math.max(6, 10 * shrink)} fontWeight="600">Tumor</text>}
                </g>
              )
            })()}

            {/* Treatment indicator */}
            {progress < phase1End && (
              <g>
                {/* PCZ + Antibody pills */}
                <rect x="15" y="130" width="45" height="20" rx="10" fill="#8b5cf6" />
                <text x="37" y="144" textAnchor="middle" fill="white" fontSize="7" fontWeight="700">PCZ</text>
                <rect x="70" y="130" width="50" height="20" rx="10" fill="#3b82f6" />
                <text x="95" y="144" textAnchor="middle" fill="white" fontSize="7" fontWeight="700">mAb</text>
                
                {/* Animated arrows attacking tumor */}
                {[0, 1, 2].map((i) => {
                  const angle = (progress * 3 + i * 120) * (Math.PI / 180)
                  const x = 67 + Math.cos(angle) * (25 + (progress % 20))
                  const y = 80 + Math.sin(angle) * (25 + (progress % 20))
                  return (
                    <circle key={`attack-${i}`} cx={x} cy={y} r="3" fill="#8b5cf6" opacity={0.6} />
                  )
                })}
              </g>
            )}

            {/* Cleared indicator */}
            {progress >= phase1End && (
              <g style={{ opacity: Math.min(1, (progress - phase1End) / 20) }}>
                <circle cx="67" cy="80" r="20" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4 2" />
                <text x="67" y="76" textAnchor="middle" fill="#16a34a" fontSize="14">&#10003;</text>
                <text x="67" y="90" textAnchor="middle" fill="#16a34a" fontSize="7" fontWeight="600">Cleared</text>
              </g>
            )}
          </g>

          {/* Phase 2: Memory T cells forming */}
          <g transform="translate(160, 0)">
            <text x="50" y="10" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="600">Memory Forming</text>
            
            {progress >= phase2Start && (
              <g style={{ opacity: Math.min(1, (progress - phase2Start) / 30) }}>
                {/* Memory T cells */}
                {[0, 1, 2, 3, 4].map((i) => {
                  const angle = (i * 72 + progress * 0.5) * (Math.PI / 180)
                  const r = 25
                  const x = 50 + Math.cos(angle) * r
                  const y = 80 + Math.sin(angle) * r
                  return (
                    <g key={`memory-${i}`}>
                      <circle cx={x} cy={y} r="14" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
                      <text x={x} y={y + 1} textAnchor="middle" fill="#1d4ed8" fontSize="6" fontWeight="700">T</text>
                      <text x={x} y={y + 8} textAnchor="middle" fill="#3b82f6" fontSize="5">mem</text>
                    </g>
                  )
                })}
                <text x="50" y="130" textAnchor="middle" fill="#3b82f6" fontSize="8">Memory T cells</text>
                <text x="50" y="142" textAnchor="middle" fill="#93c5fd" fontSize="7">patrolling the body</text>
              </g>
            )}
          </g>

          {/* Phase 3: Re-challenge */}
          <g transform="translate(285, 0)">
            <text x="60" y="10" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="600">Same Cancer Injected</text>

            {progress >= phase2End && (
              <g>
                {/* Cancer cells injected */}
                {(() => {
                  const shrink = progress >= phase3Start ? Math.max(0, 1 - ((progress - phase3Start) / 60)) : 1
                  return (
                    <g style={{ opacity: shrink }}>
                      {[0, 1, 2].map((i) => {
                        const x = 40 + i * 20
                        const y = 70 + Math.sin(i * 2 + progress * 0.05) * 5
                        const r = 12 * shrink
                        return (
                          <g key={`rechallenge-${i}`}>
                            <circle cx={x} cy={y} r={r} fill="#fecaca" stroke="#ef4444" strokeWidth="1" />
                            {r > 5 && <text x={x} y={y + 3} textAnchor="middle" fill="#dc2626" fontSize="6">C</text>}
                          </g>
                        )
                      })}
                    </g>
                  )
                })()}

                {/* Syringe indicator */}
                <text x="60" y="105" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="600">
                  Same tumor cells
                </text>
                <text x="60" y="117" textAnchor="middle" fill="#ef4444" fontSize="7">
                  re-injected
                </text>

                {/* Memory T cells attacking */}
                {progress >= phase3Start && (
                  <g>
                    {[0, 1, 2, 3].map((i) => {
                      const t = Math.min(1, (progress - phase3Start) / 40)
                      const startAngle = (i * 90) * (Math.PI / 180)
                      const startR = 60
                      const x = 60 + Math.cos(startAngle) * startR * (1 - t)
                      const y = 70 + Math.sin(startAngle) * startR * (1 - t)
                      return (
                        <g key={`attack-mem-${i}`} style={{ opacity: 0.5 + t * 0.5 }}>
                          <circle cx={x} cy={y} r="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
                          <text x={x} y={y + 1} textAnchor="middle" fill="#1d4ed8" fontSize="6" fontWeight="700">T</text>
                          <text x={x} y={y + 7} textAnchor="middle" fill="#3b82f6" fontSize="4">mem</text>
                        </g>
                      )
                    })}
                  </g>
                )}
              </g>
            )}
          </g>

          {/* Phase 4: Result */}
          <g transform="translate(430, 0)">
            <text x="55" y="10" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="600">Outcome</text>

            {progress >= phase3Start + 40 && (
              <g style={{ opacity: Math.min(1, (progress - phase3Start - 40) / 30) }}>
                <circle cx="55" cy="75" r="35" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2" />
                <text x="55" y="70" textAnchor="middle" fill="#16a34a" fontSize="22">&#10003;</text>
                <text x="55" y="88" textAnchor="middle" fill="#16a34a" fontSize="8" fontWeight="700">Rejected</text>
                
                <text x="55" y="128" textAnchor="middle" fill="#16a34a" fontSize="9" fontWeight="600">
                  No new tumor growth
                </text>
                <text x="55" y="142" textAnchor="middle" fill="#22c55e" fontSize="8">
                  No additional treatment
                </text>
              </g>
            )}
          </g>
        </g>

        {/* Key insight */}
        <g transform="translate(40, 290)">
          <rect x="0" y="0" width="540" height="105" rx="12" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
          
          <text x="270" y="24" textAnchor="middle" fill="#15803d" fontSize="12" fontWeight="700">
            {"The \"Vaccination\" Effect"}
          </text>
          
          <text x="270" y="44" textAnchor="middle" fill="#16a34a" fontSize="10">
            The combination therapy trained the immune system to recognize the cancer.
          </text>
          <text x="270" y="60" textAnchor="middle" fill="#16a34a" fontSize="10">
            When the same cancer cells returned, memory T cells eliminated them immediately.
          </text>
          
          <line x1="80" y1="72" x2="460" y2="72" stroke="#bbf7d0" strokeWidth="1" />
          
          <text x="270" y="90" textAnchor="middle" fill="#22c55e" fontSize="9">
            This long-term immune memory is considered a holy grail of cancer research - turning treatment into prevention.
          </text>
        </g>
      </svg>
    </div>
  )
}
