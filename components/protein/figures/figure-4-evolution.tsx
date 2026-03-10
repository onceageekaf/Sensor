"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

// Figure 4: Directed evolution of OppA (OppA-iso) for rich media performance
// Shows: binding affinity comparison, IsoK12 vs K12 in 2-YT medium, FACS scheme

const bindingData = [
  {
    label: "wt-OppA",
    gSisoK: 50,
    gsk: 71,
  },
  {
    label: "OppA-iso",
    gSisoK: 37,
    gsk: 275,
  },
]

// Expression in 2-YT medium: K12 vs IsoK12 for 5 ncAAs
const expressionData = [
  { ncAA: "SisoK", k12: 12, isoK12: 95 },
  { ncAA: "CisoK", k12: 10, isoK12: 90 },
  { ncAA: "PrgisoK", k12: 8, isoK12: 92 },
  { ncAA: "pLisoK", k12: 9, isoK12: 88 },
  { ncAA: "ClAisoK", k12: 7, isoK12: 91 },
]

export function Figure4Evolution() {
  const [view, setView] = useState<"expression" | "binding">("expression")
  const [animProgress, setAnimProgress] = useState(0)
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)

  const startAnim = () => {
    startRef.current = null
    setAnimProgress(0)
    const run = (ts: number) => {
      if (!startRef.current) startRef.current = ts
      const p = Math.min((ts - startRef.current) / 1800, 1)
      setAnimProgress(p)
      if (p < 1) rafRef.current = requestAnimationFrame(run)
    }
    rafRef.current = requestAnimationFrame(run)
  }

  useEffect(() => { startAnim(); return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) } }, [view])

  return (
    <div className="space-y-5">
      <div className="flex gap-2 p-1 bg-slate-100 rounded-lg w-fit">
        {(["expression", "binding"] as const).map((v) => (
          <button key={v} onClick={() => setView(v)}
            className={cn("px-4 py-1.5 rounded-md text-sm font-medium transition-colors",
              view === v ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
            )}>
            {v === "expression" ? "IsoK12 in rich media" : "Binding affinity shift"}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-5">
        {view === "expression" ? (
          <svg viewBox="0 0 520 300" className="w-full h-auto">
            <rect width="520" height="300" fill="#fafafa" rx="8" />
            <text x="260" y="22" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="500">
              sfGFP Expression in 2-YT Rich Medium (% of wild-type)
            </text>

            {/* Axes */}
            <line x1="90" y1="40" x2="90" y2="250" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="90" y1="250" x2="490" y2="250" stroke="#cbd5e1" strokeWidth="1.5" />

            {[0, 25, 50, 75, 100].map((v) => {
              const y = 250 - (v / 100) * 210
              return (
                <g key={v}>
                  <line x1="85" y1={y} x2="490" y2={y} stroke="#e2e8f0" strokeDasharray="4 3" />
                  <text x="80" y={y + 4} textAnchor="end" fill="#94a3b8" fontSize="10">{v}%</text>
                </g>
              )
            })}

            {/* Wild-type reference dashed line */}
            <line x1="90" y1="40" x2="490" y2="40" stroke="#94a3b8" strokeWidth="1" strokeDasharray="6 4" />
            <text x="492" y="44" fill="#94a3b8" fontSize="9">WT</text>

            {/* Grouped bars per ncAA */}
            {expressionData.map((d, i) => {
              const cx = 130 + i * 78
              const delayK12 = i * 0.1
              const delayIsoK = i * 0.1 + 0.05

              const k12H = Math.min(1, Math.max(0, (animProgress - delayK12) / 0.25)) * (d.k12 / 100) * 210
              const isoK12H = Math.min(1, Math.max(0, (animProgress - delayIsoK) / 0.25)) * (d.isoK12 / 100) * 210

              return (
                <g key={d.ncAA}>
                  {/* K12 bar */}
                  <rect x={cx - 26} y={250 - k12H} width={23} height={k12H}
                    fill="#f87171" rx="3" opacity="0.85" />
                  {/* IsoK12 bar */}
                  <rect x={cx + 3} y={250 - isoK12H} width={23} height={isoK12H}
                    fill="#10b981" rx="3" opacity="0.85" />
                  <text x={cx} y="264" textAnchor="middle" fill="#64748b" fontSize="10">{d.ncAA}</text>
                </g>
              )
            })}

            {/* Legend */}
            <rect x="340" y="50" width="12" height="12" fill="#f87171" rx="2" />
            <text x="356" y="61" fill="#475569" fontSize="10">K12 (parent strain)</text>
            <rect x="340" y="68" width="12" height="12" fill="#10b981" rx="2" />
            <text x="356" y="79" fill="#475569" fontSize="10">IsoK12 (evolved)</text>

            {/* Improvement arrow */}
            {animProgress > 0.7 && (
              <g style={{ opacity: Math.min((animProgress - 0.7) / 0.2, 1) }}>
                <path d="M 120 80 L 120 220" stroke="#10b981" strokeWidth="1.5"
                  markerEnd="url(#upArrow)" markerStart="url(#upArrow)" strokeDasharray="none" />
                <text x="115" y="155" textAnchor="end" fill="#065f46" fontSize="9" fontWeight="600">
                  7–10×
                </text>
                <text x="115" y="165" textAnchor="end" fill="#065f46" fontSize="9">improvement</text>
              </g>
            )}
            <defs>
              <marker id="upArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse">
                <path d="M0,8 L4,0 L8,8 Z" fill="#10b981" />
              </marker>
            </defs>
          </svg>
        ) : (
          // Binding affinity comparison (Kd values)
          <svg viewBox="0 0 520 280" className="w-full h-auto">
            <rect width="520" height="280" fill="#fafafa" rx="8" />
            <text x="260" y="22" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="500">
              OppA binding affinity (Kd, μM) — lower is tighter
            </text>

            {/* Log scale bars */}
            {bindingData.map((d, oi) => {
              const baseY = 60 + oi * 100
              const maxKd = 300
              const logMax = Math.log10(maxKd + 1)

              return (
                <g key={d.label}>
                  <text x="100" y={baseY + 15} textAnchor="end" fill="#334155" fontSize="12" fontWeight="600">
                    {d.label}
                  </text>
                  {/* G-SisoK bar */}
                  {(() => {
                    const delay = oi * 0.2
                    const p = Math.min(1, Math.max(0, (animProgress - delay) / 0.3))
                    const barW = p * (Math.log10(d.gSisoK + 1) / logMax) * 320
                    return (
                      <>
                        <rect x="110" y={baseY} width={barW} height="18" fill="#10b981" rx="4" opacity="0.85" />
                        {p > 0.7 && <text x={110 + barW + 4} y={baseY + 13} fill="#065f46" fontSize="11" fontWeight="600">{d.gSisoK} μM</text>}
                        <text x="106" y={baseY + 13} textAnchor="end" fill="#64748b" fontSize="10">G-SisoK</text>
                      </>
                    )
                  })()}
                  {/* GSK bar */}
                  {(() => {
                    const delay = oi * 0.2 + 0.15
                    const p = Math.min(1, Math.max(0, (animProgress - delay) / 0.3))
                    const barW = p * (Math.log10(d.gsk + 1) / logMax) * 320
                    return (
                      <>
                        <rect x="110" y={baseY + 26} width={barW} height="18" fill="#f87171" rx="4" opacity="0.85" />
                        {p > 0.7 && <text x={110 + barW + 4} y={baseY + 39} fill="#b91c1c" fontSize="11" fontWeight="600">{d.gsk} μM</text>}
                        <text x="106" y={baseY + 39} textAnchor="end" fill="#64748b" fontSize="10">GSK (competitor)</text>
                      </>
                    )
                  })()}
                </g>
              )
            })}

            {/* Annotation */}
            {animProgress > 0.85 && (
              <g style={{ opacity: Math.min((animProgress - 0.85) / 0.15, 1) }}>
                <rect x="110" y="225" width="300" height="42" fill="#f0fdf4" rx="8" stroke="#bbf7d0" />
                <text x="260" y="243" textAnchor="middle" fill="#065f46" fontSize="11" fontWeight="600">
                  OppA-iso: 4× lower affinity for competitors
                </text>
                <text x="260" y="259" textAnchor="middle" fill="#64748b" fontSize="10">
                  Selectivity for G-SisoK improved while rejecting tryptone peptides
                </text>
              </g>
            )}
          </svg>
        )}
      </div>

      <button onClick={startAnim} className="text-xs text-slate-400 hover:text-slate-600 transition-colors underline">
        Replay animation
      </button>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
          <div className="text-sm font-semibold text-emerald-900 mb-1">IsoK12 strain</div>
          <p className="text-xs text-emerald-700">
            Genomically integrates OppA-iso into standard K12 E. coli. No plasmid maintenance required.
            Grows at the same rate as parent strain.
          </p>
        </div>
        <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
          <div className="text-sm font-semibold text-blue-900 mb-1">10× lower ncAA needed</div>
          <p className="text-xs text-blue-700">
            IsoK12 achieves the same incorporation with 50–100 μM G-SisoK as K12 needs 1 mM — 
            dramatically reducing material costs.
          </p>
        </div>
      </div>
    </div>
  )
}
