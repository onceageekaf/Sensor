"use client"

export function ApplicationsSection() {
  const applications = [
    {
      title: "Molecular Simulations",
      description: "Real-time preview of molecular dynamics simulation results during computation",
    },
    {
      title: "Quantum Chemistry",
      description: "Interactive feedback during quantum chemistry calculations and electronic structure computations",
    },
    {
      title: "Machine Learning Training",
      description: "Progress feedback during long-running neural network training procedures",
    },
    {
      title: "Data Analysis",
      description: "Intermediate statistical results during analysis of large datasets",
    },
    {
      title: "Computational Fluid Dynamics",
      description: "Real-time preview of CFD simulation results during computation",
    },
    {
      title: "Scientific Software",
      description: "General framework for providing intermediate feedback in any computationally intensive tool",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Applications</h2>
        <p className="text-lg text-gray-700 mb-12">
          Improve user experience across computational science and machine learning applications
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {applications.map((app, index) => (
            <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg hover:border-teal-300 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{app.title}</h3>
              <p className="text-gray-700">{app.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-white border border-teal-200 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Implementation</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Published in the Journal of Computational Chemistry in 2016, this method has proven valuable for scientific software development. It's particularly useful in scenarios where computation duration cannot be predicted in advance.
          </p>
          <p className="text-gray-700">
            The method can be integrated into existing computational frameworks to dramatically improve user experience during long computations.
          </p>
        </div>
      </div>
    </section>
  )
}
