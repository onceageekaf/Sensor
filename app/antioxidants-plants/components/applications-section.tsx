"use client"

export function ApplicationsSection() {
  const applications = [
    {
      title: "Nutraceutical Products",
      description: "Enhanced antioxidant supplements for health and wellness markets",
    },
    {
      title: "Food Additives",
      description: "Natural antioxidant compounds for food preservation without synthetic additives",
    },
    {
      title: "Cosmetics",
      description: "Natural antioxidant ingredients for skincare and cosmetic formulations",
    },
    {
      title: "Pharmaceutical Applications",
      description: "Therapeutic use of natural antioxidants in medical treatments",
    },
    {
      title: "Functional Foods",
      description: "Development of antioxidant-enriched functional food products",
    },
    {
      title: "Agricultural Research",
      description: "Optimization of plant breeding for enhanced antioxidant production",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Market Applications</h2>
        <p className="text-lg text-gray-700 mb-12">
          Natural antioxidants are in high demand across multiple industries
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {applications.map((app, index) => (
            <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg hover:border-emerald-300 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{app.title}</h3>
              <p className="text-gray-700">{app.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-white border border-emerald-200 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Market Opportunity</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The global natural antioxidants market exceeds $2 billion annually and continues growing as consumers demand natural, plant-based products over synthetic alternatives. This expertise positions opportunities in functional foods, nutraceuticals, and pharmaceutical applications.
          </p>
          <p className="text-gray-700">
            The sustainable sourcing of these compounds from plants also aligns with environmental and ethical consumer preferences.
          </p>
        </div>
      </div>
    </section>
  )
}
