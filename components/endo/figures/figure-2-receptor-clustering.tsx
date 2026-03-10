"use client"

import { useEffect, useState } from "react"

export function EndoFigure2() {
  const [animPhase, setAnimPhase] = useState(0)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => setAnimPhase((p) => (p + 1) % 300), 40)
    return () => clearInterval(interval)
  }, [])

  // Auto trigger clustering animation
  useEffect(() => {
    const timer = setTimeout(() => setTriggered(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  // Generate random positions for scattered receptors
  const scatteredPositions = Array.from({ length: 16 }).map((_, i) => ({
    x: 60 + (i % 4) * 120 + Math.sin(i * 3) * 30,
    y: 80 + Math.floor(i / 4) * 70 + Math.cos(i * 2) * 20,
  }))

  // Clustered positions (3 groups)
  const clusterCenters = [{ x: 150, y: 160 }, { x: 300, y: 140 }, { x: 450, y: 170 }]
  const clusteredPositions = scatteredPositions.map((_, i) => {
    const cluster = clusterCenters[i % 3]
    const angle = ((i * 137.5) % 360) * (Math.PI / 180)
    const r = 15 + (i % 5) * 6
    return {
      x: cluster.x + Math.cos(angle) * r,
      y: cluster.y + Math.sin(angle) * r,
    }
  })

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 overflow-hidden">
        <svg viewBox="0 0 600 320" className="w-full h-auto">
          <defs>
            <filter id="clusterGlow">
              <feGaussianBlur stdDeviation="4" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Labels */}
          <text x="150" y="25" textAnchor="middle" fill={triggered ? "#94a3b8" : "#8b5cf6"} fontSize="12" fontWeight="600">
            Before PCZ (scattered)
          </text>
          <text x="450" y="25" textAnchor="middle" fill={triggered ? "#8b5cf6" : "#94a3b8"} fontSize="12" fontWeight="600">
            After PCZ (clustered)
          </text>

          {/* Divider */}
          <line x1="300" y1="35" x2="300" y2="280" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 3" />

          {/* Arrow */}
          <g transform="translate(280, 285)">
            <text x="20" y="0" textAnchor="middle" fill="#8b5cf6" fontSize="20">&#8594;</text>
            <text x="20" y="18" textAnchor="middle" fill="#8b5cf6" fontSize="9" fontWeight="500">PCZ treatment</text>
          </g>

          {/* Scattered receptors (left side) */}
          {scatteredPositions.slice(0, 8).map((pos, i) => {
            const wobble = Math.sin(animPhase * 0.03 + i) * 2
            return (
              <g key={`scattered-${i}`}>
                <circle cx={pos.x - 150 + 150} cy={pos.y + wobble} r="10" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="1.5" />
                <text x={pos.x - 150 + 150} y={pos.y + wobble + 4} textAnchor="middle" fill="#7c3aed" fontSize="7" fontWeight="700">
                  {i % 3 === 0 ? "E" : i % 3 === 1 ? "H" : "P"}
                </text>
              </g>
            )
          })}

          {/* Clustered receptors (right side) */}
          {clusterCenters.map((center, ci) => (
            <g key={`cluster-ring-${ci}`}>
              {/* Cluster highlight */}
              <circle
                cx={center.x + 150} cy={center.y}
                r="40"
                fill="#f5f3ff" stroke="#ddd6fe" strokeWidth="1"
                style={{ opacity: triggered ? 0.8 : 0 }}
                className="transition-opacity duration-1000"
              />
            </g>
          ))}
          {scatteredPositions.slice(0, 8).map((_, i) => {
            const target = clusteredPositions[i]
            const wobble = Math.sin(animPhase * 0.05 + i * 0.7) * 2
            return (
              <g key={`clustered-${i}`}>
                <circle
                  cx={target.x + 150} cy={target.y + wobble}
                  r="10"
                  fill="#8b5cf6" stroke="#7c3aed" strokeWidth="1.5"
                  filter={triggered ? "url(#clusterGlow)" : undefined}
                />
                <text x={target.x + 150} y={target.y + wobble + 4} textAnchor="middle" fill="white" fontSize="7" fontWeight="700">
                  {i % 3 === 0 ? "E" : i % 3 === 1 ? "H" : "P"}
                </text>
              </g>
            )
          })}

          {/* Legend */}
          <g transform="translate(40, 290)">
            <circle cx="0" cy="0" r="6" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="1" />
            <text x="12" y="4" fill="#64748b" fontSize="9">E = EGFR</text>
            <circle cx="80" cy="0" r="6" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="1" />
            <text x="92" y="4" fill="#64748b" fontSize="9">H = HER2</text>
            <circle cx="150" cy="0" r="6" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="1" />
            <text x="162" y="4" fill="#64748b" fontSize="9">P = PD-L1</text>
          </g>
        </svg>
      </div>
    </div>
  )
}
