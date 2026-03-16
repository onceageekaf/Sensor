"use client"

import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-rose-600 to-rose-700">
      <div className="max-w-3xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in This Technology?</h2>
        <p className="text-lg md:text-xl mb-8 text-rose-100">
          Explore licensing and partnership opportunities for surgical instruments and robotics
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-white text-rose-600 hover:bg-rose-50"
          >
            Request Information
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-rose-700"
          >
            View Publication
          </Button>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-sm text-rose-200 mb-2">Contact</p>
            <p className="font-semibold">research@sensor-tech.eth</p>
          </div>
          <div>
            <p className="text-sm text-rose-200 mb-2">Published</p>
            <p className="font-semibold">Ann. Biomed. Eng., 2016</p>
          </div>
          <div>
            <p className="text-sm text-rose-200 mb-2">Application</p>
            <p className="font-semibold">Surgical Drilling</p>
          </div>
        </div>
      </div>
    </section>
  )
}
