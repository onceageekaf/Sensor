"use client"

export function ApplicationsSection() {
  const applications = [
    {
      title: "Luxury Goods Authentication",
      description: "Verification of authentic designer products, jewelry, and high-value items",
    },
    {
      title: "Pharmaceutical Verification",
      description: "Anti-counterfeiting for medications and pharmaceutical products",
    },
    {
      title: "Electronics & Components",
      description: "Authentication of electronic devices and computer components",
    },
    {
      title: "Supply Chain Tracking",
      description: "Verification of products throughout supply and distribution chains",
    },
    {
      title: "Brand Protection",
      description: "Anti-counterfeiting solutions for manufacturers and brands",
    },
    {
      title: "Consumer Verification",
      description: "End-user authentication apps for verifying product authenticity",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Market Applications</h2>
        <p className="text-lg text-gray-700 mb-12">
          Addressing counterfeit products worth hundreds of billions annually
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
            Counterfeit products cost legitimate manufacturers and economies over $500 billion annually. This technology offers a non-invasive, cost-effective solution that doesn't require product modifications, making it attractive to manufacturers across diverse industries.
          </p>
          <p className="text-gray-700">
            The deployment readiness (TRL 7) of this technology demonstrates its market viability and immediate commercialization potential.
          </p>
        </div>
      </div>
    </section>
  )
}
