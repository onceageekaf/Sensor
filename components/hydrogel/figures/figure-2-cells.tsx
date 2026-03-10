'use client'

import { useState, useEffect } from 'react'

export function Figure2CellNetwork() {
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((p) => (p + 1) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-white border border-slate-100 rounded-xl p-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-slate-900 mb-2">3D Cell Network Formation</h3>
        <p className="text-slate-600 mb-6">Bone cells (osteoblasts) organize into interconnected 3D networks within microporous hydrogel matrix</p>

        <svg viewBox="0 0 600 380" className="w-full border border-slate-200 rounded-lg bg-gradient-to-b from-pink-50 to-slate-50">
          {/* Time progression */}
          <g>
            <text x="50" y="30" fontSize="12" fill="#64748b" fontWeight="600">Network Development</text>
          </g>

          {/* Day 1 - Individual cells */}
          <g>
            <rect x="60" y="60" width="110" height="130" fill="#fce7f3" stroke="#db2777" strokeWidth="2" rx="4" />
            <text x="115" y="50" fontSize="10" fill="#9f1239" fontWeight="600" textAnchor="middle">Day 1</text>
            
            {[0, 1, 2, 3].map((i) => {
              const progress = (animationPhase + i * 25) % 100
              return (
                <circle
                  key={`d1-${i}`}
                  cx={70 + (progress / 100) * 90}
                  cy={90 + Math.sin((progress / 100) * Math.PI * 2) * 40}
                  r="6"
                  fill="#f43f5e"
                  opacity="0.8"
                />
              )
            })}
          </g>

          {/* Day 5 - Network forming */}
          <g>
            <rect x="200" y="60" width="110" height="130" fill="#fcd34d" stroke="#b45309" strokeWidth="2" rx="4" />
            <text x="255" y="50" fontSize="10" fill="#78350f" fontWeight="600" textAnchor="middle">Day 5</text>
            
            {/* Cells */}
            {[0, 1, 2, 3, 4].map((i) => (
              <circle key={`d5-cell-${i}`} cx={220 + (i % 3) * 30} cy={80 + Math.floor(i / 3) * 35} r="5" fill="#d97706" opacity="0.8" />
            ))}
            
            {/* Connections forming */}
            <line x1="220" y1="80" x2="250" y2="80" stroke="#f59e0b" strokeWidth="1" opacity="0.6" />
            <line x1="250" y1="80" x2="250" y2="115" stroke="#f59e0b" strokeWidth="1" opacity="0.6" />
          </g>

          {/* Day 14 - Mature network */}
          <g>
            <rect x="340" y="60" width="110" height="130" fill="#c7d2fe" stroke="#4f46e5" strokeWidth="2" rx="4" />
            <text x="395" y="50" fontSize="10" fill="#1e1b4b" fontWeight="600" textAnchor="middle">Day 14</text>
            
            {/* Dense network visualization */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <g key={`d14-${i}`}>
                <circle cx={360 + (i % 3) * 25} cy={80 + Math.floor(i / 3) * 25} r="4" fill="#4f46e5" />
                {i < 5 && (
                  <line
                    x1={360 + (i % 3) * 25}
                    y1={80 + Math.floor(i / 3) * 25}
                    x2={360 + ((i + 1) % 3) * 25}
                    y2={80 + Math.floor((i + 1) / 3) * 25}
                    stroke="#4f46e5"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                )}
              </g>
            ))}
          </g>

          {/* Day 28 - Fully integrated */}
          <g>
            <rect x="480" y="60" width="110" height="130" fill="#d1fae5" stroke="#059669" strokeWidth="2" rx="4" />
            <text x="535" y="50" fontSize="10" fill="#064e3b" fontWeight="600" textAnchor="middle">Day 28</text>
            
            {/* Fully connected network */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <g key={`d28-${i}`}>
                <circle cx={490 + (i % 3) * 25} cy={75 + Math.floor(i / 3) * 25} r="4" fill="#059669" />
                {/* Multi-directional connections */}
                {i < 8 && (
                  <>
                    <line
                      x1={490 + (i % 3) * 25}
                      y1={75 + Math.floor(i / 3) * 25}
                      x2={490 + ((i + 1) % 3) * 25}
                      y2={75 + Math.floor((i + 1) / 3) * 25}
                      stroke="#059669"
                      strokeWidth="1"
                      opacity="0.6"
                    />
                  </>
                )}
              </g>
            ))}
          </g>

          {/* Cell type information */}
          <g transform="translate(0, 220)">
            <text x="50" y="0" fontSize="12" fill="#64748b" fontWeight="600">Cell Organization</text>
            
            <g>
              <rect x="60" y="15" width="150" height="100" fill="none" stroke="#cbd5e1" strokeWidth="2" rx="4" />
              <circle cx="80" cy="40" r="4" fill="#f43f5e" />
              <text x="100" y="44" fontSize="10" fill="#64748b">Osteoblasts</text>
              
              <circle cx="80" cy="65" r="4" fill="#0d9488" />
              <text x="100" y="69" fontSize="10" fill="#64748b">Fibroblasts</text>
              
              <circle cx="80" cy="90" r="4" fill="#2563eb" />
              <text x="100" y="94" fontSize="10" fill="#64748b">ECM Matrix</text>
            </g>

            <g>
              <rect x="240" y="15" width="150" height="100" fill="#f0f9ff" stroke="#cbd5e1" strokeWidth="2" rx="4" />
              <text x="255" y="40" fontSize="11" fill="#1e40af" fontWeight="600">Cell Density</text>
              <text x="255" y="60" fontSize="10" fill="#0c4a6e">{'>'} 1000 cells/mm³</text>
              <text x="255" y="80" fontSize="10" fill="#0c4a6e">Homogeneous distribution</text>
              <text x="255" y="100" fontSize="10" fill="#0c4a6e">High viability ({'>'} 95%)</text>
            </g>
          </g>
        </svg>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
            <p className="text-sm font-semibold text-pink-900">Network Maturity</p>
            <p className="text-lg font-bold text-pink-700">28 days</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm font-semibold text-blue-900">Cell Connectivity</p>
            <p className="text-lg font-bold text-blue-700">{'>'}80%</p>
          </div>
          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
            <p className="text-sm font-semibold text-emerald-900">Migration</p>
            <p className="text-lg font-bold text-emerald-700">3D integration</p>
          </div>
        </div>
      </div>
    </div>
  )
}
