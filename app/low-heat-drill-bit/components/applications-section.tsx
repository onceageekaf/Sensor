"use client"

export function ApplicationsSection() {
  const applications = [
    {
      title: "Orthopedic Surgery",
      description: "Bone drilling for fracture repair, joint replacement, and orthopedic procedures",
    },
    {
      title: "Spinal Surgery",
      description: "Vertebral drilling for fusion, fixation, and decompression procedures",
    },
    {
      title: "Trauma Surgery",
      description: "Rapid, safe bone drilling for trauma and emergency procedures",
    },
    {
      title: "Dental Surgery",
      description: "Precise drilling for implants and dental surgical procedures",
    },
    {
      title: "Robotic Surgery",
      description: "Integration into surgical robotic systems for controlled bone drilling",
    },
    {
      title: "Implant Placement",
      description: "Optimal hole preparation for prosthetic implant positioning",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Surgical Applications</h2>
        <p className="text-lg text-gray-700 mb-12">
          Improving surgical outcomes across multiple disciplines
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {applications.map((app, index) => (
            <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg hover:border-rose-300 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{app.title}</h3>
              <p className="text-gray-700">{app.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-white border border-rose-200 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Market Impact</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Millions of surgical procedures involving bone drilling are performed annually worldwide. The reduction of thermal complications directly improves patient outcomes and reduces post-operative complications, making this technology valuable across surgical specialties.
          </p>
          <p className="text-gray-700">
            Integration into robotic surgical systems and standard surgical instruments offers significant market opportunity.
          </p>
        </div>
      </div>
    </section>
  )
}
