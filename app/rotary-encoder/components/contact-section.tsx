"use client"

import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-3xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in This Technology?</h2>
        <p className="text-lg md:text-xl mb-8 text-blue-100">
          Explore integration opportunities for surgical robotics, humanoid systems, or precision instrumentation
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50"
          >
            Request Information
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-blue-700"
          >
            Technical Specs
          </Button>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-sm text-blue-200 mb-2">Contact</p>
            <p className="font-semibold">research@sensor-tech.eth</p>
          </div>
          <div>
            <p className="text-sm text-blue-200 mb-2">Reference</p>
            <p className="font-semibold">UA-19/269</p>
          </div>
          <div>
            <p className="text-sm text-blue-200 mb-2">Accuracy</p>
            <p className="font-semibold">10⁻⁵ rad</p>
          </div>
        </div>
      </div>
    </section>
  )
}
