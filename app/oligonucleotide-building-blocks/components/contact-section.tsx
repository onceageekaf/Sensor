"use client"

import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-3xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in This Technology?</h2>
        <p className="text-lg md:text-xl mb-8 text-blue-100">
          Explore licensing opportunities for ASO drug manufacturing and development
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
            View Publication
          </Button>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-sm text-blue-200 mb-2">Contact</p>
            <p className="font-semibold">research@sensor-tech.eth</p>
          </div>
          <div>
            <p className="text-sm text-blue-200 mb-2">Published</p>
            <p className="font-semibold">Chem. Commun., 2017</p>
          </div>
          <div>
            <p className="text-sm text-blue-200 mb-2">Application</p>
            <p className="font-semibold">ASO Drug Manufacturing</p>
          </div>
        </div>
      </div>
    </section>
  )
}
