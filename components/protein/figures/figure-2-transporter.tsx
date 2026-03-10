"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

// Figure 2: Opp transporter knockout screen + AlphaFold structure

const oppComponents = [
  { id: "oppA", label: "OppA", desc: "Periplasmic binding protein — captures tripeptides outside the cell", color: "#10b981" },
  { id: "oppB", label: "OppB", desc: "Transmembrane subunit 1 — forms the pore channel", color: "#6366f1" },
  { id: "oppC", label: "OppC", desc: "Transmembrane subunit 2 — forms the pore channel", color: "#8b5cf6" },
  { id: "oppD", label: "OppD", desc: "ATPase subunit — powers transport with ATP hydrolysis", color: "#f59e0b" },
  { id: "oppF", label: "OppF", desc: "ATPase subunit 2 — pairs with OppD for energy coupling", color: "#ef4444" },
]

// Knockout screen data: expression when each subunit is knocked out
// Full expression = 100 (wildtype). Knockout abolishes it → ~0–5
const knockoutData = [
  { label: "Wild-type", value: 100, color: "#10b981" },
  { label: "ΔoppA", value: 3, color: "#f87171" },
  { label: "ΔoppB", value: 4, color: "#f87171" },
  { label: "ΔoppC", value: 5, color: "#f87171" },
  { label: "ΔoppD", value: 4, color: "#f87171" },
  { label: "ΔoppF", value: 3, color: "#f87171" },
]

export function Figure2Transporter() {
  const [view, setView] = useState<"knockout" | "structure">("knockout")
  const [selected, setSelected] = useState<string | null>(null)
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
        {(["knockout", "structure"] as const).map((v) => (
          <button key={v} onClick={() => setView(v)}
            className={cn("px-4 py-1.5 rounded-md text-sm font-medium transition-colors",
              view === v ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
            )}>
            {v === "knockout" ? "Knockout screen" : "Transporter structure"}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-5">
        {view === "knockout" ? (
          <svg viewBox="0 0 520 280" className="w-full h-auto">
            <rect width="520" height="280" fill="#fafafa" rx="8" />
            <text x="260" y="22" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="500">
              sfGFP Expression When Opp Subunit Deleted (G-AisoK supplied)
            </text>

            {/* Axes */}
            <line x1="90" y1="40" x2="90" y2="240" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="90" y1="240" x2="490" y2="240" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="30" y="140" textAnchor="middle" fill="#64748b" fontSize="11"
              transform="rotate(-90,30,140)">Expression (%)</text>

            {[0, 25, 50, 75, 100].map((v, i) => {
              const y = 240 - (v / 100) * 200
              return (
                <g key={v}>
                  <line x1="85" y1={y} x2="490" y2={y} stroke="#e2e8f0" strokeDasharray="4 3" />
                  <text x="80" y={y + 4} textAnchor="end" fill="#94a3b8" fontSize="10">{v}</text>
                </g>
              )
            })}

            {knockoutData.map((d, i) => {
              const x = 115 + i * 65
              const delay = i * 0.12
              const rawH = ((animProgress - delay) / 0.25)
              const pct = Math.max(0, Math.min(rawH, 1))
              const barH = pct * (d.value / 100) * 200
              const y = 240 - barH
              return (
                <g key={d.label}>
                  <rect x={x - 20} y={y} width={40} height={barH}
                    fill={d.color} rx="4" opacity="0.85" />
                  <text x={x} y="255" textAnchor="middle" fill="#64748b" fontSize="10">{d.label}</text>
                  {pct > 0.85 && (
                    <text x={x} y={y - 6} textAnchor="middle" fill={d.color} fontSize="11" fontWeight="600">
                      {d.value}%
                    </text>
                  )}
                </g>
              )
            })}

            {/* "Transport abolished" brace annotation */}
            {animProgress > 0.8 && (
              <g style={{ opacity: Math.min((animProgress - 0.8) / 0.3, 1) }}>
                <line x1="174" y1="250" x2="455" y2="250" stroke="#f87171" strokeWidth="1.5" />
                <line x1="174" y1="247" x2="174" y2="253" stroke="#f87171" strokeWidth="1.5" />
                <line x1="455" y1="247" x2="455" y2="253" stroke="#f87171" strokeWidth="1.5" />
                <text x="315" y="265" textAnchor="middle" fill="#f87171" fontSize="10" fontWeight="500">
                  Transport completely abolished
                </text>
              </g>
            )}
          </svg>
        ) : (
          // Schematic of the 5-component ABC transporter across membrane
          <svg viewBox="0 0 520 300" className="w-full h-auto">
            <rect width="520" height="300" fill="#fafafa" rx="8" />

            {/* Membrane bilayer */}
            <rect x="50" y="110" width="420" height="80" fill="#fef9c3" rx="4" stroke="#fde047" strokeWidth="1" />
            <text x="20" y="152" textAnchor="middle" fill="#a16207" fontSize="10"
              transform="rotate(-90,20,152)">Membrane</text>
            <text x="30" y="100" fill="#64748b" fontSize="10">Periplasm</text>
            <text x="30" y="215" fill="#64748b" fontSize="10">Cytoplasm</text>

            {/* OppA — periplasm */}
            {animProgress > 0.05 && (
              <g style={{ opacity: Math.min((animProgress - 0.05) / 0.25, 1) }}>
                <ellipse cx="260" cy="75" rx="52" ry="28"
                  fill="#d1fae5" stroke="#10b981" strokeWidth="2"
                  className={cn(selected === "oppA" && "fill-emerald-200")}
                  onMouseEnter={() => setSelected("oppA")} onMouseLeave={() => setSelected(null)}
                  style={{ cursor: "pointer" }}
                />
                <text x="260" y="79" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="600">OppA</text>
                {/* G-XisoK ligand inside OppA */}
                <ellipse cx="260" cy="72" rx="14" ry="8" fill="#10b981" opacity="0.35" />
                <text x="260" y="75" textAnchor="middle" fill="#065f46" fontSize="8">G-XisoK</text>
              </g>
            )}

            {/* OppB + OppC — transmembrane */}
            {animProgress > 0.2 && (
              <g style={{ opacity: Math.min((animProgress - 0.2) / 0.25, 1) }}>
                <rect x="210" y="112" width="40" height="76" rx="6"
                  fill="#e0e7ff" stroke="#6366f1" strokeWidth="2"
                  className={cn(selected === "oppB" && "fill-indigo-200")}
                  onMouseEnter={() => setSelected("oppB")} onMouseLeave={() => setSelected(null)}
                  style={{ cursor: "pointer" }}
                />
                <text x="230" y="155" textAnchor="middle" fill="#3730a3" fontSize="11" fontWeight="600">OppB</text>
                <rect x="270" y="112" width="40" height="76" rx="6"
                  fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2"
                  className={cn(selected === "oppC" && "fill-violet-200")}
                  onMouseEnter={() => setSelected("oppC")} onMouseLeave={() => setSelected(null)}
                  style={{ cursor: "pointer" }}
                />
                <text x="290" y="155" textAnchor="middle" fill="#4c1d95" fontSize="11" fontWeight="600">OppC</text>
                {/* Pore arrow */}
                <line x1="260" y1="103" x2="260" y2="112" stroke="#10b981" strokeWidth="2"
                  markerEnd="url(#arrowDown)" />
              </g>
            )}

            {/* OppD + OppF — cytoplasmic ATPases */}
            {animProgress > 0.4 && (
              <g style={{ opacity: Math.min((animProgress - 0.4) / 0.25, 1) }}>
                <rect x="200" y="196" width="52" height="40" rx="6"
                  fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"
                  className={cn(selected === "oppD" && "fill-amber-200")}
                  onMouseEnter={() => setSelected("oppD")} onMouseLeave={() => setSelected(null)}
                  style={{ cursor: "pointer" }}
                />
                <text x="226" y="220" textAnchor="middle" fill="#78350f" fontSize="11" fontWeight="600">OppD</text>
                <rect x="268" y="196" width="52" height="40" rx="6"
                  fill="#fee2e2" stroke="#ef4444" strokeWidth="2"
                  className={cn(selected === "oppF" && "fill-red-200")}
                  onMouseEnter={() => setSelected("oppF")} onMouseLeave={() => setSelected(null)}
                  style={{ cursor: "pointer" }}
                />
                <text x="294" y="220" textAnchor="middle" fill="#7f1d1d" fontSize="11" fontWeight="600">OppF</text>
                {/* ATP labels */}
                <text x="226" y="245" textAnchor="middle" fill="#a16207" fontSize="9">ATP→ADP</text>
                <text x="294" y="245" textAnchor="middle" fill="#991b1b" fontSize="9">ATP→ADP</text>
              </g>
            )}

            {/* Released ncAA in cytoplasm */}
            {animProgress > 0.6 && (
              <g style={{ opacity: Math.min((animProgress - 0.6) / 0.25, 1) }}>
                <circle cx="400" cy="225" r="18" fill="#d1fae5" stroke="#10b981" strokeWidth="1.5" />
                <text x="400" y="221" textAnchor="middle" fill="#065f46" fontSize="9" fontWeight="600">SisoK</text>
                <text x="400" y="233" textAnchor="middle" fill="#065f46" fontSize="8">free</text>
                <path d="M 320 210 Q 360 210 382 218" stroke="#10b981" strokeWidth="1.5" fill="none"
                  markerEnd="url(#arrowGreen)" strokeDasharray="4 3" />
              </g>
            )}

            {/* PepN/PepA scissors */}
            {animProgress > 0.75 && (
              <g style={{ opacity: Math.min((animProgress - 0.75) / 0.2, 1) }}>
                <text x="355" y="200" fill="#64748b" fontSize="9">PepN/PepA</text>
                <text x="355" y="210" fill="#64748b" fontSize="9">cleave Gly</text>
              </g>
            )}

            <defs>
              <marker id="arrowDown" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#10b981" />
              </marker>
              <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#10b981" />
              </marker>
            </defs>
          </svg>
        )}
      </div>

      {/* Tooltip for selected component */}
      {selected && (
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm">
          <strong className="text-slate-900">{oppComponents.find(c => c.id === selected)?.label}</strong>
          <span className="text-slate-600 ml-2">{oppComponents.find(c => c.id === selected)?.desc}</span>
        </div>
      )}

      <button onClick={startAnim} className="text-xs text-slate-400 hover:text-slate-600 transition-colors underline">
        Replay animation
      </button>

      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
        <p className="text-sm text-emerald-800 leading-relaxed">
          <strong>Key finding:</strong> Deleting <em>any</em> single Opp subunit completely abolishes
          protein production when G-XisoK is supplied — proving the entire ABC transporter is required
          for uptake. Two cytoplasmic peptidases (PepN and PepA) then clip the N-terminal glycine,
          releasing the free ncAA for incorporation.
        </p>
      </div>
    </div>
  )
}
