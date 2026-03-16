"use client"

import { ProteinIcon } from "@/components/icons/bioicons"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32 bg-gradient-to-b from-violet-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start gap-8 mb-8">
          <div className="flex-shrink-0">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-violet-100">
              <ProteinIcon size={32} color="#7c3aed" animated />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              PEGylation of Therapeutic Proteins and Peptides
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Chemoselective, near-equimolar amide-bond ligation for covalent joining of large biomolecules
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-violet-50 text-violet-700 border border-violet-200">
                Biotechnology
              </span>
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-violet-50 text-violet-700 border border-violet-200">
                Drug Delivery
              </span>
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200">
                Chemistry
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Institution</p>
            <p className="font-semibold text-gray-900">ETH Zurich</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">TRL Status</p>
            <p className="font-semibold text-gray-900">6 - Advanced</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Published</p>
            <p className="font-semibold text-gray-900">ACS Cent. Sci., 2018</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Application</p>
            <p className="font-semibold text-gray-900">Protein Engineering</p>
          </div>
        </div>
      </div>
    </section>
  )
}
