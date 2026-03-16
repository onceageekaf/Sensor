"use client"

export function TechnologySection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Technology Overview</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Plant Antioxidant Expertise</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The research team at University of Neuchâtel has developed deep expertise in the biochemical pathways responsible for producing natural antioxidants in plants, particularly focusing on Vitamin E (tocopherols) and Vitamin K (prenylquinones) biosynthesis and extraction.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Tocopherol biosynthesis:</strong> Understanding and optimization of Vitamin E production pathways</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Prenylquinone metabolism:</strong> Expertise in Vitamin K and related compound production</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Enhanced extraction methods:</strong> Techniques for maximizing antioxidant yield</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Plant biotechnology:</strong> Application to food and nutraceutical production</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Research Focus</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The work combines molecular plant biology with applied biotechnology to improve production and extraction of valuable antioxidant compounds.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Advantages</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-emerald-100 rounded-lg bg-emerald-50">
                <p className="font-semibold text-emerald-900 mb-2">Deep Expertise</p>
                <p className="text-gray-700">Comprehensive knowledge of plant antioxidant pathways</p>
              </div>
              <div className="p-6 border border-emerald-100 rounded-lg bg-emerald-50">
                <p className="font-semibold text-emerald-900 mb-2">Natural Production</p>
                <p className="text-gray-700">Sustainable extraction from plant sources</p>
              </div>
              <div className="p-6 border border-emerald-100 rounded-lg bg-emerald-50">
                <p className="font-semibold text-emerald-900 mb-2">Market Relevance</p>
                <p className="text-gray-700">High demand for natural antioxidant compounds</p>
              </div>
              <div className="p-6 border border-emerald-100 rounded-lg bg-emerald-50">
                <p className="font-semibold text-emerald-900 mb-2">Bioavailability</p>
                <p className="text-gray-700">Plant-derived compounds with high biological activity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
