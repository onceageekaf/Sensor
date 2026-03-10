"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

// Figure 3: G-XisoK toolbox — 11+ ncAAs with diverse functional groups

const ncAAs = [
  { id: "AisoK",   label: "AisoK",   desc: "Alanine — baseline control, confirms system works",         color: "#10b981", category: "control",      works: true  },
  { id: "SisoK",   label: "SisoK",   desc: "Serine — post-translational modification mimic (Ser-lys)",  color: "#6366f1", category: "ptm",          works: true  },
  { id: "TisoK",   label: "TisoK",   desc: "Threonine — another PTM mimic previously inaccessible",     color: "#8b5cf6", category: "ptm",          works: true  },
  { id: "CisoK",   label: "CisoK",   desc: "Cysteine — native chemical ligation handle",                color: "#f59e0b", category: "ligation",     works: true  },
  { id: "PisoK",   label: "PisoK",   desc: "Proline — internal labelling with tyrosinase oxidation",    color: "#ec4899", category: "labelling",    works: true  },
  { id: "PrgisoK", label: "PrgisoK", desc: "Propargyl — click chemistry (CuAAC) for fluorophores",      color: "#3b82f6", category: "bioorthogonal", works: true  },
  { id: "pLisoK",  label: "pL-isoK", desc: "Photoleucine — UV-activated diazirine crosslinker",         color: "#ef4444", category: "crosslinker",  works: true  },
  { id: "ClAisoK", label: "ClAisoK", desc: "Chloroalanine — SN2 chemical crosslinker for PPIs",         color: "#f97316", category: "crosslinker",  works: true  },
  { id: "HisoK",   label: "HisoK",   desc: "Histidine — metal coordination site (metalloenzymes)",      color: "#06b6d4", category: "metal",        works: true  },
  { id: "LisoK",   label: "LisoK",   desc: "Leucine — hydrophobic probe",                               color: "#84cc16", category: "control",      works: true  },
  { id: "VisoK",   label: "VisoK",   desc: "Valine — structural variant",                               color: "#a78bfa", category: "control",      works: true  },
]

const categories = ["all", "ptm", "bioorthogonal", "crosslinker", "labelling", "ligation", "metal", "control"]

export function Figure3Toolbox() {
  const [filter, setFilter] = useState("all")
  const [hovered, setHovered] = useState<string | null>(null)
  const [animProgress, setAnimProgress] = useState(0)
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)

  const startAnim = () => {
    startRef.current = null
    setAnimProgress(0)
    const run = (ts: number) => {
      if (!startRef.current) startRef.current = ts
      const p = Math.min((ts - startRef.current) / 2000, 1)
      setAnimProgress(p)
      if (p < 1) rafRef.current = requestAnimationFrame(run)
    }
    rafRef.current = requestAnimationFrame(run)
  }

  useEffect(() => { startAnim(); return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) } }, [])

  const visible = filter === "all" ? ncAAs : ncAAs.filter(n => n.category === filter)

  // OppA binding pocket schematic — SVG
  // Shows the "spacious cavity" that accepts diverse side chains
  const pocketSVG = (
    <svg viewBox="0 0 320 200" className="w-full h-auto">
      <rect width="320" height="200" fill="#f8fafc" rx="8" />

      {/* OppA protein body */}
      <ellipse cx="160" cy="100" rx="120" ry="75" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
      <text x="160" y="165" textAnchor="middle" fill="#0369a1" fontSize="12" fontWeight="600">OppA binding pocket</text>

      {/* Binding cleft */}
      <path d="M 100 70 C 110 55 150 50 160 50 C 170 50 210 55 220 70 L 220 120 C 210 130 170 135 160 135 C 150 135 110 130 100 120 Z"
        fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1" />

      {/* G-XisoK in pocket */}
      {/* Backbone */}
      <path d="M 120 95 L 200 95" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
      {/* N-terminal Gly */}
      <circle cx="120" cy="95" r="10" fill="#10b981" stroke="white" strokeWidth="2" />
      <text x="120" y="99" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">G</text>
      {/* Central X residue */}
      <circle cx="160" cy="95" r="12" fill="#6366f1" stroke="white" strokeWidth="2" />
      <text x="160" y="99" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">X</text>
      {/* C-terminal isoK */}
      <circle cx="200" cy="95" r="10" fill="#f59e0b" stroke="white" strokeWidth="2" />
      <text x="200" y="99" textAnchor="middle" fill="white" fontSize="8" fontWeight="700">isoK</text>

      {/* Side-chain space annotation */}
      <path d="M 160 83 L 160 60" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="3 2" />
      <text x="160" y="55" textAnchor="middle" fill="#4f46e5" fontSize="9">Side chain</text>
      <text x="160" y="66" textAnchor="middle" fill="#4f46e5" fontSize="9">fits here →</text>

      {/* Key H-bond to D445 */}
      <path d="M 120 85 Q 108 68 115 60" stroke="#10b981" strokeWidth="1" strokeDasharray="3 2" />
      <text x="108" y="57" textAnchor="end" fill="#065f46" fontSize="8">D445</text>
    </svg>
  )

  return (
    <div className="space-y-5">
      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setFilter(cat)}
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium transition-all border",
              filter === cat
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-white text-slate-600 border-slate-200 hover:border-emerald-300"
            )}>
            {cat === "all" ? "All ncAAs" : cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {/* ncAA cards */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5">
          <h4 className="text-sm font-semibold text-slate-700 mb-4">G-XisoK toolbox — hover to inspect</h4>
          <div className="grid grid-cols-3 gap-3">
            {visible.map((ncAA, i) => {
              const delay = i * 0.07
              const appeared = animProgress > delay
              const scale = appeared ? Math.min(1, (animProgress - delay) / 0.15) : 0
              return (
                <div key={ncAA.id}
                  onMouseEnter={() => setHovered(ncAA.id)}
                  onMouseLeave={() => setHovered(null)}
                  className="cursor-pointer"
                  style={{ transform: `scale(${scale})`, opacity: scale, transition: "transform 0.2s, opacity 0.2s" }}
                >
                  <div className={cn(
                    "p-3 rounded-xl border-2 text-center transition-all",
                    hovered === ncAA.id
                      ? "shadow-md scale-105"
                      : "border-slate-200"
                  )}
                    style={{ borderColor: hovered === ncAA.id ? ncAA.color : undefined, background: hovered === ncAA.id ? `${ncAA.color}15` : undefined }}
                  >
                    <div className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center"
                      style={{ background: `${ncAA.color}20` }}>
                      <span className="text-xs font-bold" style={{ color: ncAA.color }}>X</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-800">{ncAA.label}</div>
                    <div className="text-xs mt-1 font-medium" style={{ color: ncAA.color }}>{ncAA.category}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* OppA pocket OR description */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5">
          {hovered ? (
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-900">{ncAAs.find(n => n.id === hovered)?.label}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{ncAAs.find(n => n.id === hovered)?.desc}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
                style={{ background: `${ncAAs.find(n => n.id === hovered)?.color}15`, color: ncAAs.find(n => n.id === hovered)?.color }}>
                {ncAAs.find(n => n.id === hovered)?.category}
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-slate-700 mb-2">OppA binding pocket (crystal structure)</h4>
              {pocketSVG}
              <p className="text-xs text-slate-500 leading-relaxed">
                OppA recognises the peptide backbone and termini but leaves a spacious pocket for diverse side chains —
                enabling the same transporter to import 11+ different ncAAs.
              </p>
            </div>
          )}
        </div>
      </div>

      <button onClick={startAnim} className="text-xs text-slate-400 hover:text-slate-600 transition-colors underline">
        Replay animation
      </button>
    </div>
  )
}
