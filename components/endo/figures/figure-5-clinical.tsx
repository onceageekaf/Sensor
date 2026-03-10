"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function EndoFigure5() {
  const [animPhase, setAnimPhase] = useState(0)
  const [selectedPatient, setSelectedPatient] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setAnimPhase((p) => (p + 1) % 200), 50)
    return () => clearInterval(interval)
  }, [])

  const patients = [
    { id: "Patient 1", eGFR_before: 35, eGFR_after: 78, cluster_before: 12, cluster_after: 65 },
    { id: "Patient 2", eGFR_before: 28, eGFR_after: 71, cluster_before: 15, cluster_after: 58 },
    { id: "Patient 3", eGFR_before: 42, eGFR_after: 85, cluster_before: 18, cluster_after: 72 },
    { id: "Patient 4", eGFR_before: 31, eGFR_after: 68, cluster_before: 10, cluster_after: 55 },
  ]

  const p = patients[selectedPatient]
  const barAnim = Math.min(1, animPhase / 60)

  return (
    <div className="space-y-4">
      {/* Patient selector */}
      <div className="flex gap-2 justify-center flex-wrap">
        {patients.map((pat, i) => (
          <button
            key={pat.id}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all",
              selectedPatient === i ? "bg-violet-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            )}
            onClick={() => { setSelectedPatient(i); setAnimPhase(0) }}
          >
            {pat.id}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 overflow-hidden">
        <svg viewBox="0 0 600 420" className="w-full h-auto">
          {/* Title */}
          <text x="300" y="20" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="600">
            First-in-Human Biopsy Results: {p.id}
          </text>
          <text x="300" y="36" textAnchor="middle" fill="#94a3b8" fontSize="10">
            Tumor biopsied before and 30 minutes after IV prochlorperazine infusion
          </text>

          {/* Timeline graphic */}
          <g transform="translate(50, 55)">
            <line x1="0" y1="15" x2="500" y2="15" stroke="#e2e8f0" strokeWidth="2" />
            {/* Step 1: Biopsy */}
            <circle cx="50" cy="15" r="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
            <text x="50" y="19" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="700">1</text>
            <text x="50" y="38" textAnchor="middle" fill="#64748b" fontSize="9">Biopsy</text>
            {/* Step 2: Infusion */}
            <circle cx="250" cy="15" r="8" fill="#f5f3ff" stroke="#8b5cf6" strokeWidth="2" />
            <text x="250" y="19" textAnchor="middle" fill="#8b5cf6" fontSize="8" fontWeight="700">2</text>
            <text x="250" y="38" textAnchor="middle" fill="#8b5cf6" fontSize="9">PCZ infusion</text>
            <text x="250" y="50" textAnchor="middle" fill="#a78bfa" fontSize="8">(20 min IV)</text>
            {/* Step 3: Second biopsy */}
            <circle cx="450" cy="15" r="8" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2" />
            <text x="450" y="19" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="700">3</text>
            <text x="450" y="38" textAnchor="middle" fill="#22c55e" fontSize="9">Biopsy</text>
            {/* Animated progress dot */}
            {(() => {
              const progress = (animPhase % 120) / 120
              const x = 50 + progress * 400
              return <circle cx={x} cy="15" r="4" fill="#8b5cf6" opacity={0.6 + Math.sin(animPhase * 0.1) * 0.4} />
            })()}
          </g>

          {/* Bar chart: EGFR Surface Expression */}
          <g transform="translate(50, 120)">
            <text x="125" y="0" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="600">
              Surface EGFR Expression
            </text>
            <text x="125" y="14" textAnchor="middle" fill="#94a3b8" fontSize="9">
              (receptors per cell, relative units)
            </text>

            {/* Axes */}
            <line x1="40" y1="30" x2="40" y2="170" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="40" y1="170" x2="230" y2="170" stroke="#e2e8f0" strokeWidth="1" />

            {/* Y-axis ticks */}
            {[0, 25, 50, 75, 100].map((v) => {
              const y = 170 - (v / 100) * 130
              return (
                <g key={`egfr-ytick-${v}`}>
                  <text x="35" y={y + 3} textAnchor="end" fill="#94a3b8" fontSize="8">{v}</text>
                  <line x1="40" y1={y} x2="230" y2={y} stroke="#f1f5f9" strokeWidth="0.5" />
                </g>
              )
            })}

            {/* Before bar */}
            <rect
              x="70" y={170 - (p.eGFR_before / 100) * 130 * barAnim}
              width="50" height={(p.eGFR_before / 100) * 130 * barAnim}
              fill="#cbd5e1" rx="4"
            />
            <text x="95" y="186" textAnchor="middle" fill="#64748b" fontSize="9">Before</text>

            {/* After bar */}
            <rect
              x="145" y={170 - (p.eGFR_after / 100) * 130 * barAnim}
              width="50" height={(p.eGFR_after / 100) * 130 * barAnim}
              fill="#8b5cf6" rx="4"
            />
            <text x="170" y="186" textAnchor="middle" fill="#8b5cf6" fontSize="9">After PCZ</text>

            {/* Increase label */}
            {barAnim > 0.8 && (
              <g style={{ opacity: (barAnim - 0.8) * 5 }}>
                <text x="170" y={170 - (p.eGFR_after / 100) * 130 - 8} textAnchor="middle" fill="#8b5cf6" fontSize="10" fontWeight="700">
                  +{Math.round((p.eGFR_after / p.eGFR_before - 1) * 100)}%
                </text>
              </g>
            )}
          </g>

          {/* Bar chart: Receptor Clustering */}
          <g transform="translate(320, 120)">
            <text x="125" y="0" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="600">
              Receptor Clustering Score
            </text>
            <text x="125" y="14" textAnchor="middle" fill="#94a3b8" fontSize="9">
              (cluster density, relative units)
            </text>

            {/* Axes */}
            <line x1="40" y1="30" x2="40" y2="170" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="40" y1="170" x2="230" y2="170" stroke="#e2e8f0" strokeWidth="1" />

            {/* Y-axis ticks */}
            {[0, 25, 50, 75, 100].map((v) => {
              const y = 170 - (v / 100) * 130
              return (
                <g key={`clust-ytick-${v}`}>
                  <text x="35" y={y + 3} textAnchor="end" fill="#94a3b8" fontSize="8">{v}</text>
                  <line x1="40" y1={y} x2="230" y2={y} stroke="#f1f5f9" strokeWidth="0.5" />
                </g>
              )
            })}

            {/* Before bar */}
            <rect
              x="70" y={170 - (p.cluster_before / 100) * 130 * barAnim}
              width="50" height={(p.cluster_before / 100) * 130 * barAnim}
              fill="#cbd5e1" rx="4"
            />
            <text x="95" y="186" textAnchor="middle" fill="#64748b" fontSize="9">Before</text>

            {/* After bar */}
            <rect
              x="145" y={170 - (p.cluster_after / 100) * 130 * barAnim}
              width="50" height={(p.cluster_after / 100) * 130 * barAnim}
              fill="#a855f7" rx="4"
            />
            <text x="170" y="186" textAnchor="middle" fill="#a855f7" fontSize="9">After PCZ</text>

            {/* Increase label */}
            {barAnim > 0.8 && (
              <g style={{ opacity: (barAnim - 0.8) * 5 }}>
                <text x="170" y={170 - (p.cluster_after / 100) * 130 - 8} textAnchor="middle" fill="#a855f7" fontSize="10" fontWeight="700">
                  +{Math.round((p.cluster_after / p.cluster_before - 1) * 100)}%
                </text>
              </g>
            )}
          </g>

          {/* Key insight callout */}
          <g transform="translate(50, 340)">
            <rect x="0" y="0" width="500" height="55" rx="12" fill="#f5f3ff" stroke="#ddd6fe" strokeWidth="1" />
            <text x="250" y="22" textAnchor="middle" fill="#7c3aed" fontSize="11" fontWeight="600">
              First verified manipulation of endocytosis in human tumors
            </text>
            <text x="250" y="40" textAnchor="middle" fill="#8b5cf6" fontSize="9">
              Receptors increased, clustered, and became more uniform across all tumor cells within 30 minutes
            </text>
          </g>
        </svg>
      </div>
    </div>
  )
}
