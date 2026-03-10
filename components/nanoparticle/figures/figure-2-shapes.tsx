"use client"

import { useState, useEffect } from "react"

export function Figure2Shapes() {
  const [selectedShape, setSelectedShape] = useState(0)
  const [animPhase, setAnimPhase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimPhase((prev) => (prev + 1) % 360)
    }, 30)
    return () => clearInterval(interval)
  }, [])

  const shapes = [
    { 
      name: "Sphere", 
      formula: "V = 4/3 π r³",
      sizeFormula: "el = (6m/πρ)^(1/3)",
      color: "#f59e0b"
    },
    { 
      name: "Cube", 
      formula: "V = a³",
      sizeFormula: "el = (m/ρ)^(1/3)",
      color: "#8b5cf6"
    },
    { 
      name: "Truncated Octahedra", 
      formula: "V = 8√2 a³",
      sizeFormula: "el = (m/8√2ρ)^(1/3)",
      color: "#10b981"
    },
    { 
      name: "Tetrahedra", 
      formula: "V = a³/6√2",
      sizeFormula: "el = (6√2m/ρ)^(1/3)",
      color: "#ef4444"
    },
  ]

  const rotation = animPhase

  return (
    <div className="space-y-6">
      <div className="flex gap-2 flex-wrap justify-center">
        {shapes.map((shape, i) => (
          <button
            key={i}
            onClick={() => setSelectedShape(i)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all border-2 ${
              selectedShape === i
                ? "border-violet-500 bg-violet-50 text-violet-700"
                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
            }`}
          >
            {shape.name}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* 3D Shape visualization */}
        <div className="bg-slate-900 rounded-xl p-8 flex items-center justify-center min-h-[300px]">
          <svg viewBox="0 0 200 200" className="w-48 h-48">
            {selectedShape === 0 && (
              /* Sphere */
              <g transform={`translate(100, 100)`}>
                <defs>
                  <radialGradient id="sphereGrad" cx="30%" cy="30%">
                    <stop offset="0%" stopColor="#fef3c7" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#b45309" />
                  </radialGradient>
                </defs>
                <circle r="70" fill="url(#sphereGrad)" />
                <ellipse 
                  cx={Math.cos(rotation * Math.PI / 180) * 30} 
                  cy={Math.sin(rotation * Math.PI / 180) * 30} 
                  rx="8" ry="4" 
                  fill="white" 
                  opacity="0.6" 
                />
              </g>
            )}
            {selectedShape === 1 && (
              /* Cube - isometric view */
              <g transform={`translate(100, 100) rotate(${rotation * 0.5})`}>
                {/* Back faces */}
                <polygon points="-50,-50 50,-50 50,50 -50,50" fill="#7c3aed" opacity="0.7" />
                {/* Top face */}
                <polygon points="-50,-50 0,-80 50,-50 0,-20" fill="#a78bfa" />
                {/* Right face */}
                <polygon points="50,-50 50,50 0,20 0,-80" fill="#6d28d9" />
              </g>
            )}
            {selectedShape === 2 && (
              /* Truncated Octahedra */
              <g transform={`translate(100, 100) rotate(${rotation * 0.3})`}>
                <polygon points="0,-70 50,-35 50,35 0,70 -50,35 -50,-35" fill="#10b981" />
                <polygon points="0,-70 50,-35 30,-55" fill="#059669" />
                <polygon points="50,-35 50,35 65,0" fill="#047857" />
                <polygon points="-50,-35 -30,-55 0,-70" fill="#34d399" />
              </g>
            )}
            {selectedShape === 3 && (
              /* Tetrahedra */
              <g transform={`translate(100, 100) rotate(${rotation * 0.4})`}>
                <polygon points="0,-60 60,40 -60,40" fill="#ef4444" />
                <polygon points="0,-60 60,40 0,0" fill="#dc2626" />
                <polygon points="0,-60 -60,40 0,0" fill="#f87171" />
              </g>
            )}
          </svg>
        </div>

        {/* Formulas and data */}
        <div className="space-y-6">
          <div className="bg-slate-50 rounded-xl p-6">
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Volume Formula</h4>
            <div className="text-2xl font-mono text-violet-700 mb-2">
              {shapes[selectedShape].formula}
            </div>
            <p className="text-sm text-slate-600">
              Where {selectedShape === 0 ? "r = radius" : "a = edge length"}
            </p>
          </div>

          <div className="bg-violet-50 rounded-xl p-6">
            <h4 className="text-sm font-semibold text-slate-900 mb-4">SP-ICP-MS Size Conversion</h4>
            <div className="text-lg font-mono text-violet-700 mb-2">
              {shapes[selectedShape].sizeFormula}
            </div>
            <p className="text-sm text-slate-600">
              m = particle mass, ρ = density
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h4 className="text-sm font-semibold text-slate-900 mb-3">Key Insight</h4>
            <p className="text-sm text-slate-600">
              SP-ICP-MS can accommodate non-spherical geometries by applying 
              shape-specific volume relationships. This enables accurate sizing 
              of anisotropic nanoparticles like Cu cubes, truncated octahedra, 
              and tetrahedra synthesized via phosphine-mediated methods.
            </p>
          </div>
        </div>
      </div>

      {/* Comparison with TEM */}
      <div className="bg-slate-50 rounded-xl p-6">
        <h4 className="text-sm font-semibold text-slate-900 mb-4">SP-ICP-MS vs. TEM Size Distributions</h4>
        <div className="grid grid-cols-4 gap-4">
          {shapes.map((shape, i) => (
            <div key={i} className="text-center">
              <div 
                className="h-2 rounded-full mb-2"
                style={{ backgroundColor: shape.color }}
              />
              <div className="text-xs font-medium text-slate-700">{shape.name}</div>
              <div className="text-xs text-slate-500">Excellent agreement</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
