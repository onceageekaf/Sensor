"use client"

export function TechnologySection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Technology Overview</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Phononic Engineering</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Phononic crystals represent a new class of engineered materials with periodic structures that control acoustic and elastic waves. These structures can isolate vibrations and sound across a wide frequency range while remaining lightweight and stiff.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Low-frequency isolation:</strong> Effective vibration suppression at frequencies difficult for conventional isolators</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Lightweight design:</strong> Phononic crystals are much lighter than conventional isolators</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>High stiffness:</strong> Maintains structural rigidity while isolating vibrations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Tunable band gaps:</strong> Acoustic properties can be engineered for specific applications</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Acoustic Band Gaps</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Phononic crystals exploit periodic structures to create acoustic band gaps where waves cannot propagate, providing unprecedented control over vibration transmission.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Advantages</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-orange-100 rounded-lg bg-orange-50">
                <p className="font-semibold text-orange-900 mb-2">Low-Frequency Isolation</p>
                <p className="text-gray-700">Suppresses difficult-to-isolate low-frequency vibrations</p>
              </div>
              <div className="p-6 border border-orange-100 rounded-lg bg-orange-50">
                <p className="font-semibold text-orange-900 mb-2">Lightweight</p>
                <p className="text-gray-700">Significantly lighter than traditional vibration isolators</p>
              </div>
              <div className="p-6 border border-orange-100 rounded-lg bg-orange-50">
                <p className="font-semibold text-orange-900 mb-2">Stiff Structure</p>
                <p className="text-gray-700">Maintains rigidity while isolating vibrations effectively</p>
              </div>
              <div className="p-6 border border-orange-100 rounded-lg bg-orange-50">
                <p className="font-semibold text-orange-900 mb-2">Tunable Properties</p>
                <p className="text-gray-700">Acoustic characteristics can be engineered for specific needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
