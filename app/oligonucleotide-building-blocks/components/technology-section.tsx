"use client"

export function TechnologySection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Technology Overview</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Stereopure Oligonucleotide Synthesis</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              These novel MOE (2'-methoxyethyl) phosphoramidite building blocks enable the solid-phase synthesis of stereochemically pure phosphorothioate oligonucleotides. This advancement is critical for developing high-quality antisense oligonucleotide (ASO) therapeutic drugs.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Stereochemical purity:</strong> Production of stereopure oligonucleotides without impurities</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>MOE chemistry:</strong> Enhanced nucleotide properties for improved therapeutics</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Phosphorothioate bonds:</strong> More stable and bioactive oligonucleotide backbone</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Solid-phase synthesis:</strong> Compatible with automated oligonucleotide synthesis</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">ASO Therapeutics Importance</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Antisense oligonucleotides represent a rapidly growing therapeutic class. The stereochemical purity of these building blocks is critical for ensuring consistent drug quality, efficacy, and safety.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Advantages</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-blue-100 rounded-lg bg-blue-50">
                <p className="font-semibold text-blue-900 mb-2">Stereochemical Purity</p>
                <p className="text-gray-700">Eliminates impurities and anomers in oligonucleotides</p>
              </div>
              <div className="p-6 border border-blue-100 rounded-lg bg-blue-50">
                <p className="font-semibold text-blue-900 mb-2">Improved Efficacy</p>
                <p className="text-gray-700">Higher quality ASO drugs with better therapeutic performance</p>
              </div>
              <div className="p-6 border border-blue-100 rounded-lg bg-blue-50">
                <p className="font-semibold text-blue-900 mb-2">Automated Synthesis</p>
                <p className="text-gray-700">Compatible with standard oligonucleotide synthesizers</p>
              </div>
              <div className="p-6 border border-blue-100 rounded-lg bg-blue-50">
                <p className="font-semibold text-blue-900 mb-2">Regulatory Grade</p>
                <p className="text-gray-700">Suitable for pharmaceutical manufacturing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
