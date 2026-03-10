'use client'

import Link from 'next/link'
import { ExternalLink, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HydrogelContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">License bone-on-chip technology</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Collaborate with ETH Zürich to integrate synthetic hydrogels into your bone tissue engineering and drug discovery pipeline
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h3 className="text-sm font-medium text-slate-400 mb-4">Technology Readiness Level</h3>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((level) => (
                <div
                  key={level}
                  className={`flex-1 h-2 rounded-full ${
                    level <= 6 ? 'bg-emerald-500' : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-slate-400 mt-4">TRL 6 - Pilot scale demonstration</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h3 className="text-sm font-medium text-slate-400 mb-4">Intellectual Property</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="text-slate-300">Patent pending</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="text-slate-300">Published in Nature Communications (2024)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-lg font-semibold text-white mb-6">Research Team</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Prof. Ralph Müller', role: 'Principal Investigator', org: 'ETH Biomechanics' },
              { name: 'Dr. Xiao-Hua Qin', role: 'Lead Inventor', org: 'ETH Biomechanics' },
              { name: 'Dr. Doris Zauchner', role: 'First Author', org: 'ETH Biomechanics' },
            ].map((person, i) => (
              <div key={i} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg mb-3"></div>
                <h4 className="font-medium text-white">{person.name}</h4>
                <p className="text-sm text-slate-400">{person.role}</p>
                <p className="text-xs text-slate-500 mt-1">{person.org}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-lg font-semibold text-white mb-6">Publications</h3>
          <a href="https://doi.org/10.1038/s41467-024-49280-3" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-750 transition-colors border border-slate-700">
            <FileText className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h4 className="font-medium text-white">Synthetic biodegradable microporous hydrogels for in vitro 3D culture of functional human bone cell networks</h4>
              <p className="text-sm text-slate-400 mt-1">Nature Communications, 2024 • doi:10.1038/s41467-024-49280-3</p>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-500 flex-shrink-0" />
          </a>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white h-12 rounded-xl"
            asChild
          >
            <a href="mailto:transfer@sl.ethz.ch">
              Contact ETH Transfer
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-slate-400 text-white hover:bg-slate-800 bg-transparent h-12 rounded-xl"
            asChild
          >
            <Link href="/hydrogel-bone/deep-dive">
              <FileText className="w-4 h-4 mr-2" />
              Technical Deep Dive
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
