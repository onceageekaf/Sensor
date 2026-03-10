'use client'

import { useState, useEffect } from 'react'

export function Figure3Collagen() {
  const [animationPhase, setAnimationPhase] = useState(0)
  const [toggleImaging, setToggleImaging] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((p) => (p + 1) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-white border border-slate-100 rounded-xl p-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-slate-900 mb-2">Real-time Collagen Imaging</h3>
        <p className="text-slate-600 mb-6">Non-invasive fluorescent imaging of collagen deposition and ECM remodeling in real-time on chip</p>

        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setToggleImaging(true)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              toggleImaging ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            Collagen Signal
          </button>
          <button
            onClick={() => setToggleImaging(false)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              !toggleImaging ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            ECM Distribution
          </button>
        </div>

        <svg viewBox="0 0 600 350" className="w-full border border-slate-200 rounded-lg bg-slate-50">
          {toggleImaging ? (
            <>
              {/* Collagen staining visualization */}
              <text x="50" y="30" fontSize="12" fill="#64748b" fontWeight="600">Fluorescent Collagen Detection</text>
              
              <g>
                {/* Left side - Day 7 */}
                <rect x="60" y="60" width="130" height="150" fill="#fef2f2" stroke="#fca5a5" strokeWidth="2" rx="4" />
                <text x="125" y="50" fontSize="10" fill="#991b1b" fontWeight="600" textAnchor="middle">Day 7</text>
                
                {/* Early collagen deposition */}
                {[0, 1, 2].map((i) => {
                  const progress = (animationPhase + i * 33) % 100
                  return (
                    <circle
                      key={`col7-${i}`}
                      cx={70 + (progress / 100) * 110}
                      cy={90 + Math.sin((progress / 100) * Math.PI * 2) * 30}
                      r={3}
                      fill="#dc2626"
                      opacity={0.7}
                    />
                  )
                })}
              </g>

              <g>
                {/* Middle - Day 14 */}
                <rect x="230" y="60" width="130" height="150" fill="#fff1f2" stroke="#f87171" strokeWidth="2" rx="4" />
                <text x="295" y="50" fontSize="10" fill="#7f1d1d" fontWeight="600" textAnchor="middle">Day 14</text>
                
                {/* Increased collagen */}
                {Array(8).fill(0).map((_, i) => (
                  <circle
                    key={`col14-${i}`}
                    cx={240 + (i % 3) * 35}
                    cy={80 + Math.floor(i / 3) * 35}
                    r={3}
                    fill="#f43f5e"
                    opacity="0.8"
                  />
                ))}
                
                {/* Connections */}
                <line x1="240" y1="80" x2="275" y2="80" stroke="#f87171" strokeWidth="1" opacity="0.5" />
              </g>

              <g>
                {/* Right side - Day 28 */}
                <rect x="400" y="60" width="130" height="150" fill="#fef3c7" stroke="#fbbf24" strokeWidth="2" rx="4" />
                <text x="465" y="50" fontSize="10" fill="#b45309" fontWeight="600" textAnchor="middle">Day 28</text>
                
                {/* Dense collagen network */}
                {Array(15).fill(0).map((_, i) => (
                  <circle
                    key={`col28-${i}`}
                    cx={410 + (i % 4) * 25}
                    cy={75 + Math.floor(i / 4) * 25}
                    r={2}
                    fill="#f59e0b"
                    opacity="0.9"
                  />
                ))}
              </g>

              {/* Intensity scale */}
              <g transform="translate(0, 240)">
                <text x="50" y="0" fontSize="11" fill="#64748b" fontWeight="600">Collagen Intensity</text>
                <rect x="60" y="10" width="200" height="20" fill="url(#collagen-gradient)" stroke="#cbd5e1" strokeWidth="1" rx="2" />
                <text x="60" y="40" fontSize="9" fill="#64748b">Low</text>
                <text x="250" y="40" fontSize="9" fill="#64748b">High</text>
                
                <defs>
                  <linearGradient id="collagen-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#fef2f2', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#f87171', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#dc2626', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
              </g>
            </>
          ) : (
            <>
              {/* ECM distribution */}
              <text x="50" y="30" fontSize="12" fill="#64748b" fontWeight="600">ECM Spatial Distribution</text>
              
              <g>
                {/* 3D matrix visualization */}
                <circle cx="150" cy="150" r="80" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                <ellipse cx="150" cy="150" rx="80" ry="30" fill="none" stroke="#cbd5e1" strokeWidth="1" opacity="0.3" />
                
                {/* ECM fibers */}
                {[0, 1, 2, 3, 4].map((i) => {
                  const angle = (i / 5) * Math.PI * 2
                  const x1 = 150 + Math.cos(angle) * 60
                  const y1 = 150 + Math.sin(angle) * 60
                  const x2 = 150 - Math.cos(angle) * 60
                  const y2 = 150 - Math.sin(angle) * 60
                  return (
                    <line key={`fiber-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0d9488" strokeWidth="2" opacity="0.6" />
                  )
                })}
                
                {/* Animated molecules */}
                {[0, 1, 2].map((i) => {
                  const progress = (animationPhase + i * 33) % 100
                  const angle = (progress / 100) * Math.PI * 2
                  return (
                    <circle
                      key={`mol-${i}`}
                      cx={150 + Math.cos(angle) * 50}
                      cy={150 + Math.sin(angle) * 50}
                      r="3"
                      fill="#2563eb"
                      opacity="0.8"
                    />
                  )
                })}
              </g>

              {/* Quantification */}
              <g transform="translate(300, 100)">
                <text x="0" y="0" fontSize="11" fill="#64748b" fontWeight="600">ECM Metrics</text>
                
                <g transform="translate(0, 30)">
                  <text x="0" y="0" fontSize="10" fill="#64748b">Density:</text>
                  <rect x="80" y="-12" width="100" height="16" fill="none" stroke="#cbd5e1" strokeWidth="1" rx="2" />
                  <rect x="80" y="-12" width={100 * (animationPhase / 100)} height="16" fill="#10b981" />
                  <text x="190" y="0" fontSize="10" fill="#064e3b" fontWeight="600">{Math.round((animationPhase / 100) * 100)}%</text>
                </g>
                
                <g transform="translate(0, 60)">
                  <text x="0" y="0" fontSize="10" fill="#64748b">Alignment:</text>
                  <rect x="80" y="-12" width="100" height="16" fill="none" stroke="#cbd5e1" strokeWidth="1" rx="2" />
                  <rect x="80" y="-12" width={100 * (0.75)} height="16" fill="#0d9488" />
                  <text x="190" y="0" fontSize="10" fill="#134e4a" fontWeight="600">75%</text>
                </g>
                
                <g transform="translate(0, 90)">
                  <text x="0" y="0" fontSize="10" fill="#64748b">Crosslinking:</text>
                  <rect x="80" y="-12" width="100" height="16" fill="none" stroke="#cbd5e1" strokeWidth="1" rx="2" />
                  <rect x="80" y="-12" width={100 * (0.6)} height="16" fill="#06b6d4" />
                  <text x="190" y="0" fontSize="10" fill="#0c4a6e" fontWeight="600">60%</text>
                </g>
              </g>
            </>
          )}
        </svg>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <p className="text-sm font-semibold text-red-900">Imaging Method</p>
            <p className="text-lg font-bold text-red-700">Two-photon SHG</p>
          </div>
          <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
            <p className="text-sm font-semibold text-teal-900">Resolution</p>
            <p className="text-lg font-bold text-teal-700">Subcellular</p>
          </div>
        </div>
      </div>
    </div>
  )
}
