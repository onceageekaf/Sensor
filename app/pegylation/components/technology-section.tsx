"use client"

export function TechnologySection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Technology Overview</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Chemoselective Ligation</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This novel method enables chemoselective, near-equimolar amide-bond ligation of large biomolecules including proteins, peptides, and polyethylene glycol (PEG) chains. The reaction occurs efficiently in aqueous solution, making it ideal for pharmaceutical applications.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-violet-600 font-bold">•</span>
                <span><strong>Chemoselective ligation:</strong> Amide-bond formation with high selectivity and no unwanted side reactions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-600 font-bold">•</span>
                <span><strong>Equimolar coupling:</strong> Efficient 1:1 stoichiometric reaction rates</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-600 font-bold">•</span>
                <span><strong>Aqueous conditions:</strong> Reaction occurs in water, compatible with biomolecules</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-600 font-bold">•</span>
                <span><strong>Large molecule compatibility:</strong> Works with proteins, peptides, and polymers</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mechanism</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The reaction exploits specific functional groups on biomolecules to form stable amide bonds, enabling site-specific coupling and complex bioconjugate synthesis.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Advantages</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-violet-100 rounded-lg bg-violet-50">
                <p className="font-semibold text-violet-900 mb-2">High Selectivity</p>
                <p className="text-gray-700">Chemoselective ligation with minimal side reactions</p>
              </div>
              <div className="p-6 border border-violet-100 rounded-lg bg-violet-50">
                <p className="font-semibold text-violet-900 mb-2">Efficient Coupling</p>
                <p className="text-gray-700">Near-equimolar reaction rates for fast synthesis</p>
              </div>
              <div className="p-6 border border-violet-100 rounded-lg bg-violet-50">
                <p className="font-semibold text-violet-900 mb-2">Aqueous Solution</p>
                <p className="text-gray-700">Works in water, maintaining biomolecule integrity</p>
              </div>
              <div className="p-6 border border-violet-100 rounded-lg bg-violet-50">
                <p className="font-semibold text-violet-900 mb-2">Pharmaceutical Ready</p>
                <p className="text-gray-700">Applicable to therapeutic protein modification</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
