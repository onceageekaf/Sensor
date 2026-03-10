"use client"

import { useEffect, useState } from "react"

export function EndoFigure3() {
  const [animPhase, setAnimPhase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setAnimPhase((p) => (p + 1) % 200), 40)
    return () => clearInterval(interval)
  }, [])

  const nkApproachProgress = Math.min(1, animPhase / 80)
  const killPhase = animPhase > 120

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 overflow-hidden">
      <svg viewBox="0 0 600 400" className="w-full h-auto">
        <defs>
          <filter id="adccGlow">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <radialGradient id="tumorGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef2f2" />
            <stop offset="100%" stopColor="#fee2e2" />
          </radialGradient>
          <radialGradient id="nkGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#eff6ff" />
            <stop offset="100%" stopColor="#dbeafe" />
          </radialGradient>
        </defs>

        {/* Title */}
        <text x="300" y="20" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="600">
          Antibody-Dependent Cell Cytotoxicity (ADCC)
        </text>

        {/* Tumor cell - center */}
        <ellipse cx="300" cy="250" rx="120" ry="100" fill="url(#tumorGrad)" stroke="#fca5a5" strokeWidth="2" />
        <text x="300" y="255" textAnchor="middle" fill="#dc2626" fontSize="14" fontWeight="600">Tumor Cell</text>
        <text x="300" y="272" textAnchor="middle" fill="#ef4444" fontSize="10">with clustered receptors</text>

        {/* Clustered receptors on tumor surface */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = ((i * 30 - 90) * Math.PI) / 180
          const rx = 115
          const ry = 95
          const x = 300 + rx * Math.cos(angle)
          const y = 250 + ry * Math.sin(angle)
          const dx = Math.cos(angle) * 15
          const dy = Math.sin(angle) * 15
          return (
            <g key={`receptor-adcc-${i}`}>
              {/* Receptor */}
              <circle cx={x} cy={y} r="6" fill="#8b5cf6" />
              {/* Y-shaped antibody */}
              <line x1={x} y1={y} x2={x + dx} y2={y + dy} stroke="#7c3aed" strokeWidth="1.5" />
              <line x1={x + dx} y1={y + dy} x2={x + dx + Math.cos(angle + 0.5) * 8} y2={y + dy + Math.sin(angle + 0.5) * 8} stroke="#7c3aed" strokeWidth="1.5" />
              <line x1={x + dx} y1={y + dy} x2={x + dx + Math.cos(angle - 0.5) * 8} y2={y + dy + Math.sin(angle - 0.5) * 8} stroke="#7c3aed" strokeWidth="1.5" />
            </g>
          )
        })}

        {/* NK cells approaching */}
        {[
          { startX: 80, startY: 60, endX: 180, endY: 160 },
          { startX: 520, startY: 60, endX: 420, endY: 160 },
          { startX: 300, startY: 30, endX: 300, endY: 135 },
        ].map((nk, i) => {
          const x = nk.startX + (nk.endX - nk.startX) * nkApproachProgress
          const y = nk.startY + (nk.endY - nk.startY) * nkApproachProgress
          const wobble = Math.sin(animPhase * 0.08 + i * 2) * 3
          return (
            <g key={`nk-adcc-${i}`}>
              <circle cx={x + wobble} cy={y} r="30" fill="url(#nkGrad)" stroke="#3b82f6" strokeWidth="2" />
              <circle cx={x + wobble} cy={y} r="12" fill="#93c5fd" />
              <text x={x + wobble} y={y + 4} textAnchor="middle" fill="#1d4ed8" fontSize="9" fontWeight="700">NK</text>
              {/* Fc receptor on NK cell */}
              {nkApproachProgress > 0.7 && (
                <g>
                  <text x={x + wobble} y={y + 35} textAnchor="middle" fill="#3b82f6" fontSize="8">Fc receptor</text>
                  {/* Connection line */}
                  {nkApproachProgress > 0.9 && (
                    <line
                      x1={x + wobble} y1={y + 28}
                      x2={x + wobble + (300 - x - wobble) * 0.3} y2={y + 28 + (250 - y - 28) * 0.3}
                      stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 2"
                      style={{ opacity: 0.5 + Math.sin(animPhase * 0.1) * 0.5 }}
                    />
                  )}
                </g>
              )}
            </g>
          )
        })}

        {/* Kill indicators */}
        {killPhase && (
          <g>
            {[0, 1, 2, 3].map((i) => {
              const angle = ((animPhase - 120 + i * 90) * 2 * Math.PI) / 360
              const r = 140 + (animPhase - 120) * 0.5
              const x = 300 + r * Math.cos(angle)
              const y = 250 + r * Math.sin(angle) * 0.8
              return (
                <g key={`kill-${i}`} style={{ opacity: Math.max(0, 1 - (animPhase - 120) / 80) }}>
                  <text x={x} y={y} fill="#ef4444" fontSize="16" textAnchor="middle">&#9889;</text>
                </g>
              )
            })}
            <text x="300" y="385" textAnchor="middle" fill="#dc2626" fontSize="12" fontWeight="600">
              ADCC: NK cells destroying tumor cell
            </text>
          </g>
        )}

        {/* Labels */}
        <g transform="translate(20, 370)">
          <circle cx="8" cy="0" r="6" fill="#8b5cf6" />
          <text x="20" y="4" fill="#64748b" fontSize="9">Receptor</text>
          <line x1="85" y1="-3" x2="95" y2="-3" stroke="#7c3aed" strokeWidth="1.5" />
          <line x1="95" y1="-3" x2="100" y2="-8" stroke="#7c3aed" strokeWidth="1.5" />
          <line x1="95" y1="-3" x2="100" y2="2" stroke="#7c3aed" strokeWidth="1.5" />
          <text x="108" y="4" fill="#64748b" fontSize="9">Antibody (Y)</text>
          <circle cx="198" cy="0" r="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
          <text x="212" y="4" fill="#64748b" fontSize="9">NK Cell</text>
        </g>
      </svg>
    </div>
  )
}
