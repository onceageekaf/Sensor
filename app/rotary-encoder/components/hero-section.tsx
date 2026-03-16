"use client"

import { SensorIcon } from "@/components/icons/bioicons"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start gap-8 mb-8">
          <div className="flex-shrink-0">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-100">
              <SensorIcon size={32} color="#2563eb" animated />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Miniaturized Absolute Rotary Encoder (ASTRAS)
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              High-accuracy miniaturizable angular sensor for surgical devices and robotics with microradian precision
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200">
                Medical Devices
              </span>
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-slate-50 text-slate-700 border border-slate-200">
                Robotics
              </span>
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200">
                Sensing
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Institution</p>
            <p className="font-semibold text-gray-900">University of Basel</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">TRL Status</p>
            <p className="font-semibold text-gray-900">5 - Prototype</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Reference</p>
            <p className="font-semibold text-gray-900">UA-19/269</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Accuracy</p>
            <p className="font-semibold text-gray-900">10⁻⁵ rad</p>
          </div>
        </div>
      </div>
    </section>
  )
}
