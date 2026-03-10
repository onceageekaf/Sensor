"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

// Figure 1: G-XisoK tripeptides enable efficient uptake vs XisoK alone
// Shows SDS-PAGE-style comparison and real-time fluorescence production

const timePoints = [0, 1, 2, 3, 4, 5, 6, 7, 8]
// Fluorescence units normalised to WT at t=8
const fluorGXisoK   = [0, 0.05, 0.18, 0.42, 0.68, 0.85, 0.95, 0.99, 1.00]
const fluorXisoK    = [0, 0.01, 0.03, 0.05, 0.07, 0.09, 0.10, 0.11, 0.11]
const fluorWT       = [0, 0.08, 0.22, 0.48, 0.72, 0.88, 0.96, 1.00, 1.00]

export function Figure1Tripeptide() {
  const [animProgress, setAnimProgress] = useState(0) // 0-1
  const [hoveredLine, setHoveredLine] = useState<string | null>(null)
  const [view, setView] = useState<"kinetics" | "gel">("kinetics")
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    const duration = 2200
    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts
      const elapsed = ts - startRef.current
      setAnimProgress(Math.min(elapsed / duration, 1))
      if (elapsed < duration) rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [view])

  const replay = () => {
    startRef.current = null
    setAnimProgress(0)
    rafRef.current = requestAnimationFrame((ts) => {
      startRef.current = ts
      const animate = (ts2: number) => {
        const elapsed = ts2 - (startRef.current ?? ts2)
        setAnimProgress(Math.min(elapsed / 2200, 1))
        if (elapsed < 2200) rafRef.current = requestAnimationFrame(animate)
      }
      rafRef.current = requestAnimationFrame(animate)
    })
  }

  // SVG dimensions
  const W = 520, H = 280
  const padL = 72, padR = 20, padT = 32, padB = 44
  const chartW = W - padL - padR
  const chartH = H - padT - padB

  const toX = (t: number) => padL + (t / 8) * chartW
  const toY = (v: number) => padT + (1 - v) * chartH

  const visibleIdx = Math.floor(animProgress * 8)

  const buildPath = (data: number[]) =>
    data
      .slice(0, visibleIdx + 1)
      .map((v, i) => `${i === 0 ? "M" : "L"} ${toX(i)} ${toY(v)}`)
      .join(" ")

  // Gel data — bands for G-XisoK (full length) and XisoK (faint/truncated)
  const gelRows = [
    { label: "G-AisoK", fullBand: true,  truncBand: false },
    { label: "AisoK",   fullBand: false, truncBand: true  },
    { label: "BocK",    fullBand: true,  truncBand: false },
    { label: "—",       fullBand: false, truncBand: false },
  ]

  return (
    <div className="space-y-5">
      {/* Toggle */}
      <div className="flex gap-2 p-1 bg-slate-100 rounded-lg w-fit">
        {(["kinetics", "gel"] as const).map((v) => (
          <button
            key={v}
            onClick={() => { setView(v); replay() }}
            className={cn(
              "px-4 py-1.5 rounded-md text-sm font-medium transition-colors",
              view === v ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
            )}
          >
            {v === "kinetics" ? "Real-time fluorescence" : "Protein gel (SDS-PAGE)"}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-5">
        {view === "kinetics" ? (
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
            <defs>
              <filter id="glow1">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <rect width={W} height={H} fill="#fafafa" rx="8" />

            {/* Grid */}
            {[0, 0.25, 0.5, 0.75, 1].map((v) => (
              <g key={v}>
                <line x1={padL} y1={toY(v)} x2={W - padR} y2={toY(v)} stroke="#e2e8f0" strokeDasharray="4 3" />
                <text x={padL - 8} y={toY(v) + 4} textAnchor="end" fill="#94a3b8" fontSize="10">
                  {Math.round(v * 100)}
                </text>
              </g>
            ))}
            {timePoints.map((t) => (
              <g key={t}>
                <line x1={toX(t)} y1={padT} x2={toX(t)} y2={padT + chartH} stroke="#e2e8f0" strokeDasharray="4 3" />
                <text x={toX(t)} y={H - 8} textAnchor="middle" fill="#94a3b8" fontSize="10">{t}h</text>
              </g>
            ))}

            {/* Axes */}
            <line x1={padL} y1={padT} x2={padL} y2={padT + chartH} stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1={padL} y1={padT + chartH} x2={W - padR} y2={padT + chartH} stroke="#cbd5e1" strokeWidth="1.5" />
            <text x={padL - 46} y={padT + chartH / 2} textAnchor="middle" fill="#64748b" fontSize="11"
              transform={`rotate(-90, ${padL - 46}, ${padT + chartH / 2})`}>
              Fluorescence (norm.)
            </text>
            <text x={padL + chartW / 2} y={H - 2} textAnchor="middle" fill="#64748b" fontSize="11">
              Time after induction
            </text>

            {/* Lines */}
            {/* WT */}
            <path d={buildPath(fluorWT)} fill="none" stroke="#94a3b8" strokeWidth="2"
              strokeDasharray="6 4"
              opacity={hoveredLine && hoveredLine !== "wt" ? 0.25 : 1}
              onMouseEnter={() => setHoveredLine("wt")} onMouseLeave={() => setHoveredLine(null)}
            />
            {/* XisoK */}
            <path d={buildPath(fluorXisoK)} fill="none" stroke="#f87171" strokeWidth="2.5"
              opacity={hoveredLine && hoveredLine !== "xisok" ? 0.25 : 1}
              onMouseEnter={() => setHoveredLine("xisok")} onMouseLeave={() => setHoveredLine(null)}
            />
            {/* G-XisoK */}
            <path d={buildPath(fluorGXisoK)} fill="none" stroke="#10b981" strokeWidth="2.5"
              filter="url(#glow1)"
              opacity={hoveredLine && hoveredLine !== "gxisok" ? 0.25 : 1}
              onMouseEnter={() => setHoveredLine("gxisok")} onMouseLeave={() => setHoveredLine(null)}
            />

            {/* Live dots at front of each line */}
            {animProgress < 1 && (
              <>
                <circle cx={toX(visibleIdx)} cy={toY(fluorWT[visibleIdx])} r="4" fill="#94a3b8" />
                <circle cx={toX(visibleIdx)} cy={toY(fluorXisoK[visibleIdx])} r="4" fill="#f87171" />
                <circle cx={toX(visibleIdx)} cy={toY(fluorGXisoK[visibleIdx])} r="4" fill="#10b981" />
              </>
            )}

            {/* Legend */}
            {[
              { label: "G-XisoK (tripeptide)", color: "#10b981", id: "gxisok" },
              { label: "XisoK (dipeptide alone)", color: "#f87171", id: "xisok" },
              { label: "Wild-type (no ncAA stop)", color: "#94a3b8", id: "wt", dash: true },
            ].map((item, i) => (
              <g key={item.id} transform={`translate(${padL + 8}, ${padT + 8 + i * 20})`}
                onMouseEnter={() => setHoveredLine(item.id)} onMouseLeave={() => setHoveredLine(null)}
                className="cursor-pointer"
              >
                <line x1="0" y1="6" x2="22" y2="6" stroke={item.color} strokeWidth="2.5"
                  strokeDasharray={item.dash ? "6 4" : "none"} />
                <text x="27" y="10" fill="#475569" fontSize="10">{item.label}</text>
              </g>
            ))}
          </svg>
        ) : (
          // Simulated SDS-PAGE gel
          <svg viewBox="0 0 420 240" className="w-full h-auto">
            <rect width="420" height="240" fill="#fafafa" rx="8" />

            {/* Gel background */}
            <rect x="60" y="20" width="320" height="185" fill="#1e293b" rx="4" />

            {/* Ladder bands */}
            {[35, 60, 80, 110, 140].map((y) => (
              <rect key={y} x="70" y={y} width="28" height="3" fill="#94a3b8" opacity="0.6" rx="1" />
            ))}
            {[35, 60, 80, 110, 140].map((y, i) => (
              <text key={y} x="56" y={y + 4} textAnchor="end" fill="#64748b" fontSize="9">
                {[100, 75, 50, 37, 25][i]}
              </text>
            ))}
            <text x="84" y="14" textAnchor="middle" fill="#64748b" fontSize="9">kDa</text>

            {/* Columns: G-AisoK, AisoK, BocK, blank */}
            {gelRows.map((row, ci) => {
              const cx = 115 + ci * 70
              const delay = ci * 0.15
              const appeared = animProgress > delay
              const opacity = appeared ? Math.min((animProgress - delay) / 0.3, 1) : 0
              return (
                <g key={row.label}>
                  <text x={cx} y="215" textAnchor="middle" fill="#94a3b8" fontSize="10">{row.label}</text>
                  {/* Full-length band (sfGFP ~28 kDa → y≈80) */}
                  {row.fullBand && (
                    <rect x={cx - 15} y="75" width="30" height="8"
                      fill="#10b981" opacity={opacity * 0.9} rx="2"
                      style={{ transition: "opacity 0.3s" }}
                    />
                  )}
                  {/* Truncated band (sfGFP-TAG ~18 kDa → y≈105) */}
                  {row.truncBand && (
                    <rect x={cx - 12} y="102" width="24" height="5"
                      fill="#f87171" opacity={opacity * 0.5} rx="2"
                    />
                  )}
                  {/* Faint full-length for AisoK */}
                  {!row.fullBand && !row.truncBand && row.label !== "—" && (
                    <rect x={cx - 15} y="75" width="30" height="4"
                      fill="#475569" opacity={opacity * 0.25} rx="1"
                    />
                  )}
                </g>
              )
            })}

            {/* Annotation arrow to G-AisoK band */}
            {animProgress > 0.6 && (
              <g style={{ opacity: Math.min((animProgress - 0.6) / 0.2, 1) }}>
                <text x="365" y="79" fill="#10b981" fontSize="10" fontWeight="600">Full-length</text>
                <text x="365" y="91" fill="#10b981" fontSize="9">protein</text>
              </g>
            )}
          </svg>
        )}
      </div>

      {/* Replay */}
      <button onClick={replay} className="text-xs text-slate-400 hover:text-slate-600 transition-colors underline">
        Replay animation
      </button>

      {/* Key metrics */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { value: "5–10×", label: "More intracellular ncAA vs. direct addition" },
          { value: "~WT", label: "Protein yield with G-XisoK in IsoK12" },
          { value: ">11", label: "ncAA variants demonstrated" },
        ].map((m) => (
          <div key={m.label} className="p-4 bg-slate-50 rounded-xl text-center">
            <div className="text-2xl font-semibold text-slate-900">{m.value}</div>
            <div className="text-xs text-slate-500 mt-1">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
