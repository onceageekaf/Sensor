"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

// Figure 5: Extended Z-XisoK scaffolds and dual ncAA incorporation
// Shows yields across multiple proteins + dual-labelling concept

const proteinYields = [
  { name: "sfGFP",   wt: 42, ncAA: 41, size: 27 },
  { name: "eGFPNb",  wt: 44, ncAA: 44, size: 15 },
  { name: "Ub",      wt: 38, ncAA: 36, size: 8.5 },
  { name: "IL-2",    wt: 35, ncAA: 33, size: 15 },
  { name: "hGH",     wt: 48, ncAA: 45, size: 22 },
  { name: "SUMO2",   wt: 30, ncAA: 28, size: 11 },
  { name: "PCNA",    wt: 52, ncAA: 49, size: 29 },
  { name: "β-lac",   wt: 40, ncAA: 38, size: 28 },
  { name: "Hsp82",   wt: 60, ncAA: 55, size: 85 },
]

export function Figure5Dual() {
  const [view, setView] = useState<"yields" | "dual">("yields")
  const [animProgress, setAnimProgress] = useState(0)
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)

  const startAnim = () => {
    startRef.current = null
    setAnimProgress(0)
    const run = (ts: number) => {
      if (!startRef.current) startRef.current = ts
      const p = Math.min((ts - startRef.current) / 2200, 1)
      setAnimProgress(p)
      if (p < 1) rafRef.current = requestAnimationFrame(run)
    }
    rafRef.current = requestAnimationFrame(run)
  }

  useEffect(() => { startAnim(); return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) } }, [view])

  const maxYield = 65
  const W = 520, H = 300
  const padL = 60, padR = 20, padT = 36, padB = 50
  const chartW = W - padL - padR
  const chartH = H - padT - padB
  const barPairW = chartW / proteinYields.length

  return (
    <div className="space-y-5">
      <div className="flex gap-2 p-1 bg-slate-100 rounded-lg w-fit">
        {(["yields", "dual"] as const).map((v) => (
          <button key={v} onClick={() => setView(v)}
            className={cn("px-4 py-1.5 rounded-md text-sm font-medium transition-colors",
              view === v ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
            )}>
            {v === "yields" ? "Protein yields across targets" : "Dual ncAA incorporation"}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-5">
        {view === "yields" ? (
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
            <rect width={W} height={H} fill="#fafafa" rx="8" />
            <text x={W / 2} y="22" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="500">
              Purified protein yields (mg/L) — IsoK12 with G-PrgisoK vs wild-type
            </text>

            {/* Y axis */}
            <line x1={padL} y1={padT} x2={padL} y2={padT + chartH} stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1={padL} y1={padT + chartH} x2={W - padR} y2={padT + chartH} stroke="#cbd5e1" strokeWidth="1.5" />
            <text x={padL - 40} y={padT + chartH / 2} textAnchor="middle" fill="#64748b" fontSize="11"
              transform={`rotate(-90, ${padL - 40}, ${padT + chartH / 2})`}>
              mg / L culture
            </text>

            {[0, 20, 40, 60].map((v) => {
              const y = padT + chartH - (v / maxYield) * chartH
              return (
                <g key={v}>
                  <line x1={padL} y1={y} x2={W - padR} y2={y} stroke="#e2e8f0" strokeDasharray="4 3" />
                  <text x={padL - 6} y={y + 4} textAnchor="end" fill="#94a3b8" fontSize="10">{v}</text>
                </g>
              )
            })}

            {proteinYields.map((d, i) => {
              const cx = padL + i * barPairW + barPairW / 2
              const delay = i * 0.09
              const p = Math.min(1, Math.max(0, (animProgress - delay) / 0.3))

              const wtH = p * (d.wt / maxYield) * chartH
              const ncAAH = p * (d.ncAA / maxYield) * chartH

              return (
                <g key={d.name}>
                  {/* WT bar */}
                  <rect x={cx - 18} y={padT + chartH - wtH} width={15} height={wtH}
                    fill="#94a3b8" rx="3" opacity="0.7" />
                  {/* ncAA bar */}
                  <rect x={cx + 3} y={padT + chartH - ncAAH} width={15} height={ncAAH}
                    fill="#10b981" rx="3" opacity="0.85" />
                  <text x={cx} y={padT + chartH + 14} textAnchor="middle" fill="#64748b" fontSize="10">{d.name}</text>
                  <text x={cx} y={padT + chartH + 24} textAnchor="middle" fill="#94a3b8" fontSize="9">
                    {d.size} kDa
                  </text>
                </g>
              )
            })}

            {/* Legend */}
            <rect x={padL + 8} y={padT + 6} width="12" height="12" fill="#94a3b8" rx="2" />
            <text x={padL + 24} y={padT + 17} fill="#475569" fontSize="10">Wild-type</text>
            <rect x={padL + 85} y={padT + 6} width="12" height="12" fill="#10b981" rx="2" />
            <text x={padL + 101} y={padT + 17} fill="#475569" fontSize="10">ncAA (IsoK12)</text>
          </svg>
        ) : (
          // Dual ncAA incorporation schematic
          <svg viewBox="0 0 520 300" className="w-full h-auto">
            <rect width="520" height="300" fill="#fafafa" rx="8" />
            <text x="260" y="22" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="500">
              Z-XisoK scaffold enables dual ncAA incorporation
            </text>

            {/* Z-XisoK structure */}
            {animProgress > 0.05 && (
              <g style={{ opacity: Math.min((animProgress - 0.05) / 0.25, 1) }}>
                <text x="260" y="60" textAnchor="middle" fill="#64748b" fontSize="11">Tripeptide scaffold</text>
                {/* Z */}
                <rect x="110" y="68" width="70" height="36" rx="8"
                  fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                <text x="145" y="91" textAnchor="middle" fill="#1e40af" fontSize="14" fontWeight="700">Z</text>
                {/* — */}
                <line x1="180" y1="86" x2="200" y2="86" stroke="#64748b" strokeWidth="2" />
                {/* X */}
                <rect x="200" y="68" width="70" height="36" rx="8"
                  fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
                <text x="235" y="91" textAnchor="middle" fill="#065f46" fontSize="14" fontWeight="700">X</text>
                {/* — */}
                <line x1="270" y1="86" x2="290" y2="86" stroke="#64748b" strokeWidth="2" />
                {/* isoK */}
                <rect x="290" y="68" width="80" height="36" rx="8"
                  fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
                <text x="330" y="91" textAnchor="middle" fill="#78350f" fontSize="13" fontWeight="700">isoK</text>

                {/* Labels */}
                <text x="145" y="116" textAnchor="middle" fill="#1e40af" fontSize="10">Can be ncAA</text>
                <text x="235" y="116" textAnchor="middle" fill="#065f46" fontSize="10">ncAA 1</text>
                <text x="330" y="116" textAnchor="middle" fill="#78350f" fontSize="10">Carrier</text>
              </g>
            )}

            {/* Arrow down */}
            {animProgress > 0.35 && (
              <g style={{ opacity: Math.min((animProgress - 0.35) / 0.2, 1) }}>
                <line x1="260" y1="122" x2="260" y2="145" stroke="#64748b" strokeWidth="2"
                  markerEnd="url(#dualDown)" />
                <text x="275" y="138" fill="#64748b" fontSize="10">OppA import</text>
              </g>
            )}

            {/* Inside cell */}
            {animProgress > 0.55 && (
              <g style={{ opacity: Math.min((animProgress - 0.55) / 0.25, 1) }}>
                <rect x="80" y="150" width="360" height="110" rx="12"
                  fill="#f0fdf4" stroke="#86efac" strokeWidth="2" strokeDasharray="6 3" />
                <text x="90" y="167" fill="#64748b" fontSize="10" fontStyle="italic">Cytoplasm (after Gly cleavage)</text>

                {/* Two separate ncAAs released */}
                <circle cx="190" cy="205" r="28" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                <text x="190" y="201" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="700">ncAA</text>
                <text x="190" y="215" textAnchor="middle" fill="#1e40af" fontSize="9">from Z</text>

                <circle cx="330" cy="205" r="28" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
                <text x="330" y="201" textAnchor="middle" fill="#065f46" fontSize="11" fontWeight="700">ncAA</text>
                <text x="330" y="215" textAnchor="middle" fill="#065f46" fontSize="9">from X</text>

                <text x="260" y="248" textAnchor="middle" fill="#374151" fontSize="11" fontWeight="600">
                  Dual site-specific labelling / crosslinking
                </text>
              </g>
            )}

            <defs>
              <marker id="dualDown" markerWidth="8" markerHeight="8" refX="4" refY="7" orient="auto">
                <path d="M0,0 L8,0 L4,7 Z" fill="#64748b" />
              </marker>
            </defs>
          </svg>
        )}
      </div>

      <button onClick={startAnim} className="text-xs text-slate-400 hover:text-slate-600 transition-colors underline">
        Replay animation
      </button>

      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { value: "9 proteins", label: "Targets validated (7–85 kDa)" },
          { value: "44 mg/L", label: "eGFPNb-PrgisoK yield — matches WT" },
          { value: "2 ncAAs", label: "Co-delivered in single tripeptide" },
        ].map((m) => (
          <div key={m.label} className="p-4 bg-slate-50 rounded-xl text-center">
            <div className="text-xl font-semibold text-slate-900">{m.value}</div>
            <div className="text-xs text-slate-500 mt-1">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
