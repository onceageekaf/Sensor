"use client"

export function ApplicationsSection() {
  const applications = [
    {
      title: "Precision Equipment Isolation",
      description: "Vibration isolation for sensitive scientific and medical instruments",
    },
    {
      title: "Industrial Machinery",
      description: "Vibration suppression in manufacturing and processing equipment",
    },
    {
      title: "Acoustic Enclosures",
      description: "Sound isolation in buildings and structures",
    },
    {
      title: "Transportation Systems",
      description: "Vibration control in vehicles and transportation infrastructure",
    },
    {
      title: "Seismic Protection",
      description: "Earthquake protection for buildings and structures",
    },
    {
      title: "Aerospace Applications",
      description: "Lightweight vibration isolation for aircraft and spacecraft",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Applications & Market</h2>
        <p className="text-lg text-gray-700 mb-12">
          Transforming vibration and sound isolation across multiple industries
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {applications.map((app, index) => (
            <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg hover:border-orange-300 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{app.title}</h3>
              <p className="text-gray-700">{app.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-white border border-orange-200 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Market Potential</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The vibration isolation market is substantial and growing, driven by demands for precision equipment, noise reduction, and seismic protection. Phononic crystals offer advantages over conventional isolators that have limited low-frequency performance.
          </p>
          <p className="text-gray-700">
            As manufacturing capabilities improve, phononic crystals are poised to revolutionize vibration and acoustic control across diverse industries.
          </p>
        </div>
      </div>
    </section>
  )
}
