"use client"

import { ReceptorIcon } from "@/components/icons/bioicons"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start gap-8 mb-8">
          <div className="flex-shrink-0">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-amber-100">
              <ReceptorIcon size={32} color="#d97706" animated />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Biomorphic Electronic Cochlea
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Silicon implementation of the mammalian hearing organ achieving near-perfect biological agreement for robotics and neural implants
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-amber-50 text-amber-700 border border-amber-200">
                Neurotechnology
              </span>
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-slate-50 text-slate-700 border border-slate-200">
                Robotics
              </span>
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-amber-50 text-amber-700 border border-amber-200">
                Hearing
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Institution</p>
            <p className="font-semibold text-gray-900">ETH Zurich / University of Zurich</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">TRL Status</p>
            <p className="font-semibold text-gray-900">4 - Early Stage</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Published</p>
            <p className="font-semibold text-gray-900">Phys. Rev. Lett., 2007</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Impact</p>
            <p className="font-semibold text-gray-900">Breakthrough</p>
          </div>
        </div>
      </div>
    </section>
  )
}
