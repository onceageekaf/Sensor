"use client"

export function ApplicationsSection() {
  const applications = [
    {
      title: "Antisense Oligonucleotides",
      description: "Manufacturing of therapeutic ASO drugs with precise stereochemistry",
    },
    {
      title: "Gene Silencing Therapeutics",
      description: "Development of ASO drugs that suppress disease-causing genes",
    },
    {
      title: "Rare Disease Treatment",
      description: "ASO-based therapies for genetic and rare diseases",
    },
    {
      title: "Cancer Therapeutics",
      description: "Oncology applications using stereopure ASO drugs",
    },
    {
      title: "Infectious Disease",
      description: "ASO therapeutics for targeting pathogenic genetic sequences",
    },
    {
      title: "Research Tools",
      description: "High-quality oligonucleotides for biological research applications",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Therapeutic Applications</h2>
        <p className="text-lg text-gray-700 mb-12">
          Enabling the next generation of antisense oligonucleotide therapeutics
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {applications.map((app, index) => (
            <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{app.title}</h3>
              <p className="text-gray-700">{app.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-white border border-blue-200 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Market Opportunity</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The antisense oligonucleotide drug market is growing rapidly, with multiple FDA-approved ASO therapeutics and numerous drugs in development. The ability to produce stereochemically pure building blocks is a critical technology enabler for this expanding therapeutic class.
          </p>
          <p className="text-gray-700">
            This technology directly supports the manufacturing of high-quality ASO drugs for the global pharmaceutical market.
          </p>
        </div>
      </div>
    </section>
  )
}
