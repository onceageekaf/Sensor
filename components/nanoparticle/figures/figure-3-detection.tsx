'use client'

import { useState, useEffect } from 'react'

export function Figure3Detection() {
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
        <h3 className="text-xl font-semibold text-slate-900 mb-2">Signal Detection & Quantification</h3>
        <p className="text-slate-600 mb-6">Mass spectrometer detects individual nanoparticle signals in real-time, providing particle count, size, and composition data</p>
        
        <svg viewBox="0 0 600 400" className="w-full border border-slate-200 rounded-lg bg-slate-50">
          {/* Mass spec instrument outline */}
          <rect x="20" y="40" width="560" height="320" fill="none" stroke="#cbd5e1" strokeWidth="2" rx="8" />
          
          {/* Particle stream entering */}
          <g>
            <text x="30" y="150" fontSize="11" fill="#64748b" fontWeight="600">Particle Stream</text>
            <line x1="50" y1="180" x2="120" y2="180" stroke="#0d9488" strokeWidth="2" />
            <circle cx="120" cy="180" r="4" fill="#0d9488" />
          </g>

          {/* Ionization zone */}
          <g>
            <rect x="140" y="140" width="80" height="80" fill="#fef2f2" stroke="#fca5a5" strokeWidth="2" rx="4" />
            <text x="155" y="175" fontSize="10" fill="#991b1b" fontWeight="600">Ionization</text>
            <text x="165" y="187" fontSize="9" fill="#991b1b">+Plasma</text>
            
            {/* Animated particles being ionized */}
            {[0, 1, 2].map((i) => {
              const progress = (animationPhase + i * 33) % 100
              return (
                <circle 
                  key={`ionize-${i}`}
                  cx={145 + progress * 0.6} 
                  cy={180} 
                  r="3" 
                  fill="#f87171" 
                  opacity={progress < 80 ? 1 : 1 - (progress - 80) / 20}
                />
              )
            })}
          </g>

          {/* Quadrupole separator */}
          <g>
            <text x="280" y="135" fontSize="10" fill="#64748b" fontWeight="600">Mass Filter</text>
            <rect x="260" y="150" width="15" height="60" fill="none" stroke="#06b6d4" strokeWidth="2" />
            <rect x="285" y="150" width="15" height="60" fill="none" stroke="#06b6d4" strokeWidth="2" />
            <rect x="310" y="150" width="15" height="60" fill="none" stroke="#06b6d4" strokeWidth="2" />
            
            {/* Animated ions passing through */}
            {[0, 1, 2].map((i) => {
              const progress = (animationPhase + i * 33) % 100
              return (
                <circle
                  key={`filter-${i}`}
                  cx={290 + progress * 1.2}
                  cy={180}
                  r="2"
                  fill="#06b6d4"
                  opacity={progress < 85 ? 1 : 1 - (progress - 85) / 15}
                />
              )
            })}
          </g>

          {/* Detector */}
          <g>
            <rect x="420" y="120" width="80" height="120" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="2" rx="4" />
            <text x="435" y="175" fontSize="10" fill="#065f46" fontWeight="600">Detector</text>
            
            {/* Animated signal pulses */}
            {[0, 1, 2].map((i) => {
              const progress = (animationPhase + i * 33) % 100
              const height = Math.sin((progress / 100) * Math.PI) * 20
              return (
                <rect
                  key={`signal-${i}`}
                  x={425 + i * 15}
                  y={175 - height}
                  width="12"
                  height={height}
                  fill="#10b981"
                  opacity={0.7}
                />
              )
            })}
          </g>

          {/* Signal output graph */}
          <g>
            <text x="30" y="310" fontSize="11" fill="#64748b" fontWeight="600">Signal Output</text>
            <polyline
              points="50,350 80,340 110,325 140,335 170,320 200,330 230,315 260,325 290,310 320,320"
              fill="none"
              stroke="#0d9488"
              strokeWidth="2"
            />
            <circle cx="50" cy="350" r="2" fill="#0d9488" />
            <circle cx="140" cy="335" r="3" fill="#f87171" />
            <circle cx="230" cy="315" r="3" fill="#f87171" />
            <circle cx="320" cy="320" r="3" fill="#f87171" />
          </g>

          {/* Axis labels */}
          <text x="300" y="385" fontSize="9" fill="#94a3b8" textAnchor="middle">Time</text>
          <text x="15" y="340" fontSize="9" fill="#94a3b8" textAnchor="middle">Signal</text>
        </svg>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <p className="text-sm font-semibold text-slate-900">Detection Limit</p>
            <p className="text-lg font-bold text-teal-600">Single particles</p>
            <p className="text-xs text-slate-500 mt-1">Element-specific</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <p className="text-sm font-semibold text-slate-900">Time Resolution</p>
            <p className="text-lg font-bold text-teal-600">Milliseconds</p>
            <p className="text-xs text-slate-500 mt-1">Real-time counting</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <p className="text-sm font-semibold text-slate-900">Throughput</p>
            <p className="text-lg font-bold text-teal-600">{'>'}500/min</p>
            <p className="text-xs text-slate-500 mt-1">High particle flux</p>
          </div>
        </div>
      </div>
    </div>
  )
}
