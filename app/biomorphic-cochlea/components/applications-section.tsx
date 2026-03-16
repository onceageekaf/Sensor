"use client"

export function ApplicationsSection() {
  const applications = [
    {
      title: "Cochlear Implants",
      description: "Advanced auditory prostheses providing natural hearing perception for deaf and hard-of-hearing individuals",
    },
    {
      title: "Robotic Hearing Systems",
      description: "Bio-inspired auditory systems for humanoid robots and autonomous systems requiring human-like sound perception",
    },
    {
      title: "Neuromorphic Processors",
      description: "Core component for neuromorphic computing systems that process audio information biologically",
    },
    {
      title: "Hearing Research",
      description: "Research tool for studying cochlear mechanics and auditory processing in health and disease",
    },
    {
      title: "Brain-Computer Interfaces",
      description: "Biologically realistic auditory input for neural interfaces and brain stimulation systems",
    },
    {
      title: "Auditory Neuroscience",
      description: "Platform for investigating fundamental mechanisms of sound perception and neural coding",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Applications & Opportunities</h2>
        <p className="text-lg text-gray-700 mb-12">
          The biomorphic cochlea opens new possibilities across medical devices, robotics, and neuroscience
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {applications.map((app, index) => (
            <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg hover:border-amber-300 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{app.title}</h3>
              <p className="text-gray-700">{app.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-white border border-amber-200 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Scientific Impact</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Published in Physical Review Letters in 2007, this breakthrough work has influenced research in neuromorphic engineering, auditory neuroscience, and biomorphic systems worldwide. The work demonstrates that complex biological sensory systems can be faithfully replicated in silicon.
          </p>
          <p className="text-gray-700">
            The technology represents a significant step toward brain-mimetic computing and bio-inspired engineering principles.
          </p>
        </div>
      </div>
    </section>
  )
}
