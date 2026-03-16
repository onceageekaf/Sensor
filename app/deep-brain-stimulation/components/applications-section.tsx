"use client"

export function ApplicationsSection() {
  const applications = [
    {
      title: "Parkinson's Disease",
      description: "Optimized DBS treatment for motor symptoms in Parkinson's disease",
    },
    {
      title: "Essential Tremor",
      description: "DBS programming for tremor control and functional improvement",
    },
    {
      title: "Dystonia Treatment",
      description: "Automated programming for dystonia patients receiving DBS",
    },
    {
      title: "Clinical Research",
      description: "Tool for investigating DBS mechanisms and optimization",
    },
    {
      title: "Directional Electrodes",
      description: "Optimization of advanced directional DBS electrode systems",
    },
    {
      title: "Surgical Planning",
      description: "Pre-operative planning tool for DBS electrode placement",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Clinical Applications</h2>
        <p className="text-lg text-gray-700 mb-12">
          Improving outcomes for millions of DBS patients worldwide
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {applications.map((app, index) => (
            <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg hover:border-violet-300 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{app.title}</h3>
              <p className="text-gray-700">{app.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-white border border-violet-200 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Clinical Market</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Over 200,000 patients worldwide have received deep brain stimulation for movement disorders. The market for DBS systems and optimization tools continues to grow as the procedure becomes more widely adopted and directional electrodes advance.
          </p>
          <p className="text-gray-700">
            This algorithm is directly applicable to the clinical workflows of neurosurgeons and neurologists programming DBS systems globally.
          </p>
        </div>
      </div>
    </section>
  )
}
