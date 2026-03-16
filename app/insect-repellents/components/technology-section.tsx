"use client"

export function TechnologySection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Technology Overview</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Natural Repellent Formulations</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Researchers at University of Neuchâtel have developed a novel series of natural insect repellent formulations that are highly effective at repelling insects while being completely non-toxic and environmentally safe. These compounds achieve efficacy comparable to or exceeding DEET without its drawbacks.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Natural compounds:</strong> Derived from plant and natural sources</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Non-toxic:</strong> Safe for human skin and environment</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>DEET-comparable efficacy:</strong> Repels mosquitoes, ticks, and other arthropods as effectively as synthetic repellents</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Environmental safety:</strong> Biodegradable and ecologically sound</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Market Advantages</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Growing consumer demand for natural, non-toxic personal care products creates a substantial market opportunity for these superior natural repellents.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Advantages</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-emerald-100 rounded-lg bg-emerald-50">
                <p className="font-semibold text-emerald-900 mb-2">Natural & Safe</p>
                <p className="text-gray-700">Non-toxic formulations safe for all users</p>
              </div>
              <div className="p-6 border border-emerald-100 rounded-lg bg-emerald-50">
                <p className="font-semibold text-emerald-900 mb-2">High Efficacy</p>
                <p className="text-gray-700">Repels insects as effectively as synthetic products</p>
              </div>
              <div className="p-6 border border-emerald-100 rounded-lg bg-emerald-50">
                <p className="font-semibold text-emerald-900 mb-2">Environmentally Safe</p>
                <p className="text-gray-700">Biodegradable with no harmful environmental impact</p>
              </div>
              <div className="p-6 border border-emerald-100 rounded-lg bg-emerald-50">
                <p className="font-semibold text-emerald-900 mb-2">Patent Protected</p>
                <p className="text-gray-700">Patent pending for competitive advantage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
