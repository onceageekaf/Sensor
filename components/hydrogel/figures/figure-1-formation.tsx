'use client'

import { useState, useEffect } from 'react'

export function Figure1HydrogelFormation() {
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
        <h3 className="text-xl font-semibold text-slate-900 mb-2">Hydrogel Formation & Pore Structure</h3>
        <p className="text-slate-600 mb-6">PIPS (Porogen-Induced Pore Structure) technique creates microporous PEG matrix with precise pore size control</p>

        <svg viewBox="0 0 600 400" className="w-full border border-slate-200 rounded-lg bg-gradient-to-b from-blue-50 to-slate-50">
          {/* Timeline */}
          <g>
            <text x="50" y="30" fontSize="12" fill="#64748b" fontWeight="600">Time Evolution</text>
            <line x1="80" y1="50" x2="560" y2="50" stroke="#cbd5e1" strokeWidth="2" />
            
            {['0h', '6h', '12h', '24h'].map((time, idx) => (
              <g key={idx}>
                <circle cx={100 + idx * 130} cy="50" r="5" fill="#0d9488" />
                <text x={100 + idx * 130} y="70" fontSize="10" fill="#64748b" textAnchor="middle">{time}</text>
              </g>
            ))}
          </g>

          {/* Stage 1: Polymer swelling */}
          <g>
            <rect x="80" y="100" width="100" height="100" fill="#e0f2fe" stroke="#0369a1" strokeWidth="2" rx="4" />
            <text x="130" y="125" fontSize="11" fill="#0c4a6e" fontWeight="600" textAnchor="middle">Polymer Mix</text>
            
            {/* Animated polymer chains */}
            {[0, 1, 2].map((i) => {
              const progress = (animationPhase + i * 33) % 100
              const y = 150 + Math.sin((progress / 100) * Math.PI * 2) * 15
              return (
                <circle key={`poly-${i}`} cx={100 + i * 30} cy={y} r="2" fill="#06b6d4" opacity="0.8" />
              )
            })}
          </g>

          {/* Stage 2: Porogen dispersion */}
          <g>
            <rect x="210" y="100" width="100" height="100" fill="#fce7f3" stroke="#be185d" strokeWidth="2" rx="4" />
            <text x="260" y="125" fontSize="11" fill="#831843" fontWeight="600" textAnchor="middle">Porogen Added</text>
            
            {/* Animated porogen particles */}
            {[0, 1, 2, 3].map((i) => {
              const progress = (animationPhase + i * 25) % 100
              const x = 220 + (progress / 100) * 80
              const y = 140 + Math.sin((progress / 100) * Math.PI * 4) * 20
              return (
                <circle key={`poro-${i}`} cx={x} cy={y} r="3" fill="#ec4899" opacity={0.7} />
              )
            })}
          </g>

          {/* Stage 3: Crosslinking */}
          <g>
            <rect x="340" y="100" width="100" height="100" fill="#fef3c7" stroke="#b45309" strokeWidth="2" rx="4" />
            <text x="390" y="125" fontSize="11" fill="#78350f" fontWeight="600" textAnchor="middle">Crosslinking</text>
            
            {/* Animated bonds forming */}
            {[0, 1, 2].map((i) => {
              const progress = (animationPhase + i * 33) % 100
              return (
                <g key={`link-${i}`} opacity={Math.min(progress / 50, 1)}>
                  <line x1={360 + i * 20} y1="140" x2={365 + i * 20} y2="165" stroke="#d97706" strokeWidth="2" />
                </g>
              )
            })}
          </g>

          {/* Stage 4: Porous Network */}
          <g>
            <rect x="470" y="100" width="100" height="100" fill="#dbeafe" stroke="#1e40af" strokeWidth="2" rx="4" />
            <text x="520" y="125" fontSize="11" fill="#172554" fontWeight="600" textAnchor="middle">Porous Network</text>
            
            {/* Pore visualization */}
            {[0, 1, 2, 3].map((i) =>
              [0, 1, 2].map((j) => (
                <circle
                  key={`pore-${i}-${j}`}
                  cx={480 + i * 25}
                  cy={135 + j * 25}
                  r="4"
                  fill="none"
                  stroke="#1e40af"
                  strokeWidth="2"
                />
              ))
            )}
          </g>

          {/* Pore size information */}
          <g transform="translate(0, 240)">
            <text x="50" y="0" fontSize="12" fill="#64748b" fontWeight="600">Pore Size Control</text>
            
            {['5-10 μm', '10-20 μm', '20-30 μm'].map((size, idx) => (
              <g key={idx}>
                <rect x={80 + idx * 140} y="20" width="120" height="80" fill="none" stroke="#cbd5e1" strokeWidth="2" rx="4" />
                <text x={140 + idx * 140} y="45" fontSize="11" fill="#0d9488" fontWeight="600" textAnchor="middle">{size}</text>
                
                {/* Pore visualization */}
                {Array(3).fill(0).map((_, i) =>
                  Array(3).fill(0).map((_, j) => {
                    const sizeNum = [8, 15, 25][idx]
                    return (
                      <circle
                        key={`vis-${idx}-${i}-${j}`}
                        cx={95 + idx * 140 + i * 35}
                        cy={60 + j * 25}
                        r={sizeNum / 5}
                        fill="#e0f2fe"
                        stroke="#0d9488"
                        strokeWidth="1"
                      />
                    )
                  })
                )}
              </g>
            ))}
          </g>
        </svg>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm font-semibold text-blue-900">Formation Time</p>
            <p className="text-lg font-bold text-blue-700">24 hours</p>
          </div>
          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
            <p className="text-sm font-semibold text-emerald-900">Pore Size Range</p>
            <p className="text-lg font-bold text-emerald-700">5-30 μm</p>
          </div>
        </div>
      </div>
    </div>
  )
}
