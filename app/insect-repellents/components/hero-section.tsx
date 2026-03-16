"use client"

import { BacteriaIcon } from "@/components/icons/bioicons"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start gap-8 mb-8">
          <div className="flex-shrink-0">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-emerald-100">
              <BacteriaIcon size={32} color="#059669" animated />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Natural Spatial Insect Repellents
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Highly effective natural compound formulations comparable or superior to DEET, non-toxic and environmentally safe
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-green-50 text-green-700 border border-green-200">
                Biopesticides
              </span>
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-rose-50 text-rose-700 border border-rose-200">
                Healthcare
              </span>
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                Environmental
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Institution</p>
            <p className="font-semibold text-gray-900">University of Neuchâtel</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">TRL Status</p>
            <p className="font-semibold text-gray-900">5 - Prototype</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Status</p>
            <p className="font-semibold text-gray-900">Patent pending</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Type</p>
            <p className="font-semibold text-gray-900">Natural Formulation</p>
          </div>
        </div>
      </div>
    </section>
  )
}
