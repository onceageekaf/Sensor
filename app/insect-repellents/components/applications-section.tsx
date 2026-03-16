"use client"

export function ApplicationsSection() {
  const applications = [
    {
      title: "Consumer Personal Care",
      description: "Insect repellent sprays, lotions, and wearable products for individuals",
    },
    {
      title: "Travel & Outdoor Products",
      description: "Natural repellents for travelers, campers, and outdoor enthusiasts",
    },
    {
      title: "Healthcare Settings",
      description: "Safe repellents for hospitals, clinics, and public health applications",
    },
    {
      title: "Agricultural Applications",
      description: "Natural pest management for organic farming and sustainable agriculture",
    },
    {
      title: "Veterinary & Animal Care",
      description: "Safe repellents for pets and livestock protection against insects",
    },
    {
      title: "Cosmetics & Beauty",
      description: "Integration into natural cosmetics and beauty product lines",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Market Applications</h2>
        <p className="text-lg text-gray-700 mb-12">
          Addressing consumer demand for safe, natural insect protection
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
            The global insect repellent market exceeds $3 billion annually and continues growing as consumers increasingly prefer natural, non-toxic alternatives to synthetic products. Health concerns about DEET and environmental contamination drive strong market demand.
          </p>
          <p className="text-gray-700">
            These natural formulations are positioned to capture significant market share from synthetic repellent manufacturers.
          </p>
        </div>
      </div>
    </section>
  )
}
