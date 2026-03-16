"use client"

export function TechnologySection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Technology Overview</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Biomorphic Silicon Implementation</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This revolutionary technology replicates the biomechanics and signal processing capabilities of the human cochlea using silicon electronics. The implementation achieves near-perfect biological agreement with the mammalian hearing system while operating on electronic principles.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span><strong>Mechanical frequency analysis:</strong> Silicon basilar membrane analogue for tonotopic frequency separation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span><strong>Biological signal encoding:</strong> Replicates neural firing patterns of biological auditory nerve</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span><strong>Low power consumption:</strong> Similar to biological cochlea's energy efficiency</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span><strong>Compact form factor:</strong> Miniaturizable design suitable for implants and robotic systems</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Biological Accuracy</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The electronic cochlea reproduces the fundamental mechanisms of biological hearing with remarkable fidelity, including frequency tuning, temporal coding, and intensity perception. This biomorphic approach enables unprecedented signal processing capabilities while maintaining biological realism.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Innovation</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-amber-100 rounded-lg bg-amber-50">
                <p className="font-semibold text-amber-900 mb-2">Biological Fidelity</p>
                <p className="text-gray-700">Near-perfect agreement with mammalian cochlear mechanics and signal processing</p>
              </div>
              <div className="p-6 border border-amber-100 rounded-lg bg-amber-50">
                <p className="font-semibold text-amber-900 mb-2">Silicon Implementation</p>
                <p className="text-gray-700">Fully integrated electronic system replicating auditory organ function</p>
              </div>
              <div className="p-6 border border-amber-100 rounded-lg bg-amber-50">
                <p className="font-semibold text-amber-900 mb-2">Versatile Applications</p>
                <p className="text-gray-700">Suitable for neural implants, auditory prostheses, and robotic hearing systems</p>
              </div>
              <div className="p-6 border border-amber-100 rounded-lg bg-amber-50">
                <p className="font-semibold text-amber-900 mb-2">Low Power Operation</p>
                <p className="text-gray-700">Energy-efficient design comparable to biological hearing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
