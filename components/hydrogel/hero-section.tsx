'use client'

import { ArrowRight, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HydrogelHeroSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-6">
          <div className="flex items-center gap-2 inline-flex px-3 py-1 bg-emerald-100 rounded-full">
            <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
            <span className="text-sm text-emerald-700 font-medium">ETH Zürich Transfer</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
          Synthetic biodegradable{' '}
          <span className="text-emerald-600">hydrogels for bone tissue engineering</span>
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed mb-8">
          A microporous hydrogel platform that enables 3D culture of functional human bone cell networks with real-time collagen imaging. Mimic early bone development on-chip for disease modeling and drug screening.
        </p>

        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 border border-slate-100">
            <div className="text-3xl font-bold text-emerald-600 mb-2">24h</div>
            <p className="text-sm text-slate-600">3D cell network formation</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-slate-100">
            <div className="text-3xl font-bold text-emerald-600 mb-2">5-20μm</div>
            <p className="text-sm text-slate-600">Tunable pore size</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-slate-100">
            <div className="text-3xl font-bold text-emerald-600 mb-2">TRL 6</div>
            <p className="text-sm text-slate-600">Pilot scale demonstrated</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button 
            size="lg" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white h-12 rounded-xl"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Licensing inquiry
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-slate-200 text-slate-700 hover:bg-slate-50 bg-transparent h-12 rounded-xl"
            onClick={() => document.getElementById("technology")?.scrollIntoView({ behavior: "smooth" })}
          >
            Learn more
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent h-12 rounded-xl"
            asChild
          >
            <Link href="/hydrogel-bone/deep-dive">
              <FileText className="w-4 h-4 mr-2" />
              Technical deep dive
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
