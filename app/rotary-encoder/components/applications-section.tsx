"use client"

export function ApplicationsSection() {
  const applications = [
    {
      title: "Surgical Robotics",
      description: "Precise joint angle measurement in robotic surgery systems for enhanced surgical precision",
    },
    {
      title: "Orthopedic Surgery",
      description: "Joint angle measurement during implantation of prosthetic devices requiring precise positioning",
    },
    {
      title: "Neurosurgery",
      description: "Fine angular control and measurement for stereotactic and image-guided surgical procedures",
    },
    {
      title: "Humanoid Robots",
      description: "Joint angle sensing in robotic limbs and manipulators requiring high-precision control",
    },
    {
      title: "Motor Control Systems",
      description: "Feedback sensor for precision motor control applications requiring microradian accuracy",
    },
    {
      title: "Research Instruments",
      description: "Laboratory instrumentation requiring precise angular measurements in constrained spaces",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Applications & Market</h2>
        <p className="text-lg text-gray-700 mb-12">
          ASTRAS enables precision control in demanding medical and robotics applications
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
            The surgical robotics market is experiencing rapid growth, with demand for increasingly precise angle measurement sensors. ASTRAS addresses a critical gap for miniaturized, high-precision angular sensors in medical and robotics applications.
          </p>
          <p className="text-gray-700">
            As robotic-assisted surgery expands and humanoid robotics advances, demand for precision sensors like ASTRAS is expected to grow significantly.
          </p>
        </div>
      </div>
    </section>
  )
}
