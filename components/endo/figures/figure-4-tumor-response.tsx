"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function EndoFigure4() {
  const [animPhase, setAnimPhase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setAnimPhase((p) => Math.min(p + 1, 100)), 60)
    return () => clearInterval(interval)
  }, [])

  const groups = [
    { label: "Untreated", color: "#94a3b8", finalSize: 95 },
    { label: "Cetuximab only", color: "#f59e0b", finalSize: 65 },
    { label: "PCZ only", color: "#8b5cf6", finalSize: 75 },
    { label: "PCZ + Cetuximab", color: "#22c55e", finalSize: 0 },
  ]

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 overflow-hidden">
      <svg viewBox="0 0 600 350" className="w-full h-auto">
        {/* Title */}
        <text x="300" y="20" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="600">
          Tumor Volume Over Time (Head & Neck Cancer, Mouse Model)
        </text>

        {/* Axes */}
        <line x1="80" y1="40" x2="80" y2="280" stroke="#e2e8f0" strokeWidth="1.5" />
        <line x1="80" y1="280" x2="560" y2="280" stroke="#e2e8f0" strokeWidth="1.5" />

        {/* Y-axis label */}
        <text x="25" y="160" textAnchor="middle" fill="#94a3b8" fontSize="10" transform="rotate(-90 25 160)">Tumor Volume</text>

        {/* X-axis label */}
        <text x="320" y="310" textAnchor="middle" fill="#94a3b8" fontSize="10">Days after treatment start</text>

        {/* Y-axis ticks */}
        {[0, 25, 50, 75, 100].map((v) => {
          const y = 280 - (v / 100) * 240
          return (
            <g key={`ytick-${v}`}>
              <line x1="75" y1={y} x2="80" y2={y} stroke="#e2e8f0" strokeWidth="1" />
              <text x="70" y={y + 4} textAnchor="end" fill="#94a3b8" fontSize="9">{v}%</text>
              <line x1="80" y1={y} x2="560" y2={y} stroke="#f1f5f9" strokeWidth="1" />
            </g>
          )
        })}

        {/* X-axis ticks */}
        {[0, 7, 14, 21, 28].map((d, i) => {
          const x = 80 + (i / 4) * 480
          return (
            <g key={`xtick-${d}`}>
              <line x1={x} y1="280" x2={x} y2="285" stroke="#e2e8f0" strokeWidth="1" />
              <text x={x} y="298" textAnchor="middle" fill="#94a3b8" fontSize="9">{d}</text>
            </g>
          )
        })}

        {/* Treatment start marker */}
        <line x1="200" y1="40" x2="200" y2="280" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 3" />
        <text x="200" y="38" textAnchor="middle" fill="#94a3b8" fontSize="8">Treatment start</text>

        {/* Tumor growth curves */}
        {groups.map((group, gi) => {
          const progress = animPhase / 100
          const startY = 280 - 10 * 2.4 // all start at ~10% (initial tumor)
          const endY = 280 - group.finalSize * 2.4
          const midY = gi === 3 ? startY - (startY - endY) * 0.6 : startY + (endY - startY) * 0.3 // slight increase then drop for combo

          // Simple bezier curve
          const currentProgress = Math.min(progress, 1)
          const points = Array.from({ length: 20 }).map((_, pi) => {
            const t = (pi / 19) * currentProgress
            const x = 80 + t * 480
            const bY = (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * midY + t * t * endY
            return `${x},${bY}`
          })

          return (
            <g key={group.label}>
              <polyline
                points={points.join(" ")}
                fill="none"
                stroke={group.color}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* End point */}
              {progress > 0.8 && (
                <circle
                  cx={80 + currentProgress * 480}
                  cy={(() => {
                    const t = currentProgress
                    return (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * midY + t * t * endY
                  })()}
                  r="4"
                  fill={group.color}
                />
              )}
            </g>
          )
        })}

        {/* Legend */}
        {groups.map((group, i) => (
          <g key={`legend-${group.label}`} transform={`translate(${90 + i * 125}, 330)`}>
            <line x1="0" y1="0" x2="16" y2="0" stroke={group.color} strokeWidth="2.5" />
            <text x="22" y="4" fill="#64748b" fontSize="9">{group.label}</text>
          </g>
        ))}

        {/* Result callout */}
        {animPhase > 80 && (
          <g style={{ opacity: (animPhase - 80) / 20 }}>
            <rect x="400" y="50" width="150" height="55" rx="8" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1" />
            <text x="475" y="70" textAnchor="middle" fill="#16a34a" fontSize="11" fontWeight="700">100% clearance</text>
            <text x="475" y="86" textAnchor="middle" fill="#22c55e" fontSize="9">10/10 mice tumor-free</text>
            <text x="475" y="99" textAnchor="middle" fill="#22c55e" fontSize="9">with combination therapy</text>
          </g>
        )}
      </svg>
    </div>
  )
}
