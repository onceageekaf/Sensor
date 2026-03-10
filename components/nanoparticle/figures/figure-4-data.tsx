'use client'

import { useState, useEffect } from 'react'

export function Figure4Data() {
  const [activeMetric, setActiveMetric] = useState(0)
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((p) => (p + 1) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const metrics = [
    { label: 'Size Distribution', value: '50-200 nm', color: '#0d9488' },
    { label: 'Element Composition', value: 'Au, Ag, Cu, Zn...', color: '#2563eb' },
    { label: 'Particle Count', value: '1000+ per mL', color: '#7c3aed' },
  ]

  return (
    <div className="w-full bg-white border border-slate-100 rounded-xl p-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-slate-900 mb-2">Data Processing & Analysis</h3>
        <p className="text-slate-600 mb-6">Real-time analysis converts raw signal data into quantitative particle metrics with full elemental resolution</p>

        {/* Metric tabs */}
        <div className="flex gap-2 mb-6">
          {metrics.map((metric, idx) => (
            <button
              key={idx}
              onClick={() => setActiveMetric(idx)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeMetric === idx
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {metric.label}
            </button>
          ))}
        </div>

        <svg viewBox="0 0 600 350" className="w-full border border-slate-200 rounded-lg bg-slate-50">
          {/* Y-axis */}
          <line x1="60" y1="30" x2="60" y2="300" stroke="#cbd5e1" strokeWidth="2" />
          {/* X-axis */}
          <line x1="60" y1="300" x2="560" y2="300" stroke="#cbd5e1" strokeWidth="2" />

          {activeMetric === 0 && (
            <>
              <text x="25" y="170" fontSize="10" fill="#64748b" textAnchor="end">Frequency</text>
              <text x="310" y="330" fontSize="10" fill="#64748b" textAnchor="middle">Size (nm)</text>
              
              {/* Size distribution histogram */}
              {[50, 100, 150, 200].map((size, idx) => {
                const height = [20, 60, 85, 40][idx]
                return (
                  <g key={`bar-${idx}`}>
                    <rect x={100 + idx * 90} y={300 - height} width="70" height={height} fill="#0d9488" opacity="0.7" />
                    <text x={135 + idx * 90} y="320" fontSize="9" fill="#64748b" textAnchor="middle">{size}</text>
                  </g>
                )
              })}
            </>
          )}

          {activeMetric === 1 && (
            <>
              <text x="25" y="170" fontSize="10" fill="#64748b" textAnchor="end">Counts</text>
              <text x="310" y="330" fontSize="10" fill="#64748b" textAnchor="middle">Element</text>
              
              {/* Element composition bars */}
              {['Au', 'Ag', 'Cu', 'Zn'].map((element, idx) => {
                const height = [90, 70, 50, 30][idx]
                return (
                  <g key={`elem-${idx}`}>
                    <rect x={100 + idx * 90} y={300 - height} width="70" height={height} fill="#2563eb" opacity="0.7" />
                    <text x={135 + idx * 90} y="320" fontSize="9" fill="#64748b" textAnchor="middle">{element}</text>
                  </g>
                )
              })}
            </>
          )}

          {activeMetric === 2 && (
            <>
              <text x="25" y="170" fontSize="10" fill="#64748b" textAnchor="end">Particle Count</text>
              <text x="310" y="330" fontSize="10" fill="#64748b" textAnchor="middle">Time (min)</text>
              
              {/* Time series plot */}
              <polyline
                points="100,250 150,200 200,240 250,180 300,210 350,160 400,190 450,140 500,170 550,120"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="3"
              />
              
              {/* Animated point tracking */}
              {[0, 1, 2].map((i) => {
                const progress = (animationPhase + i * 33) % 100
                const x = 100 + (progress / 100) * 450
                const y = 250 - (Math.sin((progress / 100) * Math.PI * 2) * 70)
                return (
                  <circle key={`point-${i}`} cx={x} cy={y} r="4" fill="#7c3aed" opacity={0.8} />
                )
              })}
            </>
          )}
        </svg>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
            <p className="text-sm font-semibold text-emerald-900">Processing Speed</p>
            <p className="text-lg font-bold text-emerald-700">Real-time</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm font-semibold text-blue-900">Data Output</p>
            <p className="text-lg font-bold text-blue-700">CSV/Database</p>
          </div>
        </div>
      </div>
    </div>
  )
}
