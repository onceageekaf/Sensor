'use client'

import { useState } from 'react'

export function Figure4Performance() {
  const [activeTest, setActiveTest] = useState(0)

  const tests = [
    {
      name: 'Viability',
      timepoints: ['Day 1', 'Day 7', 'Day 14', 'Day 21'],
      values: [95, 92, 88, 85],
      color: '#10b981',
    },
    {
      name: 'Mineralization',
      timepoints: ['Day 7', 'Day 14', 'Day 21', 'Day 28'],
      values: [15, 35, 60, 85],
      color: '#2563eb',
    },
    {
      name: 'Collagen I',
      timepoints: ['Day 7', 'Day 14', 'Day 21', 'Day 28'],
      values: [20, 45, 70, 90],
      color: '#dc2626',
    },
  ]

  const test = tests[activeTest]

  return (
    <div className="w-full bg-white border border-slate-100 rounded-xl p-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-slate-900 mb-2">Biological Performance</h3>
        <p className="text-slate-600 mb-6">Quantitative assessment of cell viability, differentiation, and ECM production over time</p>

        <div className="flex gap-2 mb-6">
          {tests.map((t, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTest(idx)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTest === idx ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>

        <svg viewBox="0 0 600 300" className="w-full border border-slate-200 rounded-lg bg-slate-50">
          {/* Axes */}
          <line x1="60" y1="30" x2="60" y2="250" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="60" y1="250" x2="540" y2="250" stroke="#cbd5e1" strokeWidth="2" />

          {/* Y-axis label */}
          <text x="25" y="140" fontSize="10" fill="#64748b" textAnchor="middle" transform="rotate(-90 25 140)">
            {test.name} (%)
          </text>

          {/* Y-axis values */}
          {[0, 25, 50, 75, 100].map((val) => {
            const y = 250 - (val / 100) * 200
            return (
              <g key={`y-${val}`}>
                <line x1="55" y1={y} x2="60" y2={y} stroke="#cbd5e1" strokeWidth="1" />
                <text x="50" y={y + 4} fontSize="9" fill="#94a3b8" textAnchor="end">
                  {val}
                </text>
              </g>
            )
          })}

          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((val) => {
            const y = 250 - (val / 100) * 200
            return (
              <line key={`grid-${val}`} x1="60" y1={y} x2="540" y2={y} stroke="#e2e8f0" strokeWidth="1" opacity="0.5" />
            )
          })}

          {/* Data line */}
          <polyline
            points={test.values
              .map((val, idx) => {
                const x = 80 + idx * 120
                const y = 250 - (val / 100) * 200
                return `${x},${y}`
              })
              .join(' ')}
            fill="none"
            stroke={test.color}
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Data points */}
          {test.values.map((val, idx) => {
            const x = 80 + idx * 120
            const y = 250 - (val / 100) * 200
            return (
              <circle key={`point-${idx}`} cx={x} cy={y} r="5" fill={test.color} opacity="0.8" />
            )
          })}

          {/* X-axis labels */}
          {test.timepoints.map((time, idx) => {
            const x = 80 + idx * 120
            return (
              <g key={`x-${idx}`}>
                <line x1={x} y1="250" x2={x} y2="255" stroke="#cbd5e1" strokeWidth="1" />
                <text x={x} y="270" fontSize="9" fill="#64748b" textAnchor="middle">
                  {time}
                </text>
              </g>
            )
          })}
        </svg>

        <div className="mt-6 p-6 bg-slate-50 rounded-lg border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-3">Key Performance Indicators</h4>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-xs text-slate-600 font-semibold">Peak Value</p>
              <p className="text-lg font-bold text-slate-900">{Math.max(...test.values)}%</p>
            </div>
            <div>
              <p className="text-xs text-slate-600 font-semibold">Avg Growth Rate</p>
              <p className="text-lg font-bold text-slate-900">
                {Math.round((test.values[test.values.length - 1] - test.values[0]) / test.values.length)}%/week
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-600 font-semibold">Status</p>
              <p className="text-lg font-bold text-emerald-700">On target</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
