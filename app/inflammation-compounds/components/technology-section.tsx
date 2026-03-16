"use client"

export function TechnologySection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Technology Overview</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Core Technology</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              These novel compounds represent a breakthrough in treating severe inflammatory conditions and ischemia-reperfusion injuries. Unlike traditional approaches, these injectable, water-soluble compounds can be rapidly deployed in critical care settings to modulate inflammatory cascades and reduce tissue damage.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-violet-600 font-bold">•</span>
                <span><strong>Injectable formulation:</strong> Water-soluble compounds enabling rapid intravenous administration</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-600 font-bold">•</span>
                <span><strong>Non-anaesthetic properties:</strong> Distinct mechanism from conventional pain medications</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-600 font-bold">•</span>
                <span><strong>Anti-inflammatory action:</strong> Suppresses inflammatory cytokine cascades</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-600 font-bold">•</span>
                <span><strong>Rapid onset:</strong> Effective within minutes of administration</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Development Stage</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Currently at Technology Readiness Level 4, these compounds have demonstrated efficacy in preclinical models and are ready for advancement toward clinical validation. The research team at University of Zurich and ETH Zurich continues to optimize formulations and explore additional applications.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Advantages</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-violet-100 rounded-lg bg-violet-50">
                <p className="font-semibold text-violet-900 mb-2">Rapid Administration</p>
                <p className="text-gray-700">Injectable formulation allows immediate deployment in emergency settings</p>
              </div>
              <div className="p-6 border border-violet-100 rounded-lg bg-violet-50">
                <p className="font-semibold text-violet-900 mb-2">Non-anaesthetic</p>
                <p className="text-gray-700">Distinct mechanism of action without sedative side effects</p>
              </div>
              <div className="p-6 border border-violet-100 rounded-lg bg-violet-50">
                <p className="font-semibold text-violet-900 mb-2">Water-soluble</p>
                <p className="text-gray-700">Excellent bioavailability and distribution throughout the body</p>
              </div>
              <div className="p-6 border border-violet-100 rounded-lg bg-violet-50">
                <p className="font-semibold text-violet-900 mb-2">Broad Therapeutic Potential</p>
                <p className="text-gray-700">Applicable to multiple inflammatory and ischemic conditions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
