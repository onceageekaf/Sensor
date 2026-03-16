"use client"

export function TechnologySection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Technology Overview</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Thermally Optimized Design</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This innovative drill bit design minimizes tissue heating during surgical bone drilling procedures. Excessive temperature elevation damages bone tissue and increases complications. The optimized geometry and material selection significantly reduce thermal damage while maintaining cutting efficiency.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-rose-600 font-bold">•</span>
                <span><strong>Reduced heat generation:</strong> Geometry optimized to minimize frictional heating</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-600 font-bold">•</span>
                <span><strong>Better heat dissipation:</strong> Design features for improved thermal transfer away from tissue</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-600 font-bold">•</span>
                <span><strong>Maintained cutting performance:</strong> No compromise on surgical efficiency</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-600 font-bold">•</span>
                <span><strong>Tissue preservation:</strong> Reduces thermal necrosis and complications</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Clinical Significance</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Temperature elevation during bone drilling is a known complication that can lead to thermal necrosis, delayed healing, and implant failure. This low-heat design directly addresses this surgical challenge.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Advantages</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-rose-100 rounded-lg bg-rose-50">
                <p className="font-semibold text-rose-900 mb-2">Reduced Thermal Damage</p>
                <p className="text-gray-700">Minimizes tissue necrosis and complications</p>
              </div>
              <div className="p-6 border border-rose-100 rounded-lg bg-rose-50">
                <p className="font-semibold text-rose-900 mb-2">Improved Healing</p>
                <p className="text-gray-700">Better bone healing outcomes with reduced thermal injury</p>
              </div>
              <div className="p-6 border border-rose-100 rounded-lg bg-rose-50">
                <p className="font-semibold text-rose-900 mb-2">Cutting Efficiency</p>
                <p className="text-gray-700">Maintains surgical performance and drilling speed</p>
              </div>
              <div className="p-6 border border-rose-100 rounded-lg bg-rose-50">
                <p className="font-semibold text-rose-900 mb-2">Better Outcomes</p>
                <p className="text-gray-700">Reduces post-operative complications and pain</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
