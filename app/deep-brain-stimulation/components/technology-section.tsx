"use client"

export function TechnologySection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Technology Overview</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Automated DBS Programming</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This innovative algorithm uses local field potential (LFP) measurements to automatically identify and select the optimal contact configuration in directional deep brain stimulation electrodes. This eliminates time-consuming manual programming and significantly improves therapeutic outcomes for Parkinson's disease patients.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-violet-600 font-bold">•</span>
                <span><strong>LFP-based optimization:</strong> Uses neurophysiological signals to identify optimal contacts</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-600 font-bold">•</span>
                <span><strong>Directional DBS:</strong> Compatible with advanced directional electrode designs</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-600 font-bold">•</span>
                <span><strong>Automated selection:</strong> Eliminates manual parameter tuning by physicians</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-600 font-bold">•</span>
                <span><strong>Improved efficacy:</strong> Optimizes therapeutic benefit while reducing side effects</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Clinical Significance</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Programming deep brain stimulation electrodes is a complex, time-consuming process. This algorithm dramatically reduces programming time and improves outcomes by using patient-specific neurophysiological data to automatically optimize contact selection.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Advantages</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-violet-100 rounded-lg bg-violet-50">
                <p className="font-semibold text-violet-900 mb-2">Faster Programming</p>
                <p className="text-gray-700">Reduces time-consuming manual electrode programming</p>
              </div>
              <div className="p-6 border border-violet-100 rounded-lg bg-violet-50">
                <p className="font-semibold text-violet-900 mb-2">Optimized Outcomes</p>
                <p className="text-gray-700">Improves therapeutic benefit for patient care</p>
              </div>
              <div className="p-6 border border-violet-100 rounded-lg bg-violet-50">
                <p className="font-semibold text-violet-900 mb-2">Reduced Side Effects</p>
                <p className="text-gray-700">Minimizes adverse effects through precise contact selection</p>
              </div>
              <div className="p-6 border border-violet-100 rounded-lg bg-violet-50">
                <p className="font-semibold text-violet-900 mb-2">LFP-Based</p>
                <p className="text-gray-700">Uses patient-specific neurophysiological data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
