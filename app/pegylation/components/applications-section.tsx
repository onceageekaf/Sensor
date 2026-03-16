"use client"

export function ApplicationsSection() {
  const applications = [
    {
      title: "PEGylated Therapeutics",
      description: "Extension of therapeutic protein half-life through PEG conjugation",
    },
    {
      title: "Antibody Engineering",
      description: "Modification and conjugation of monoclonal antibodies for enhanced performance",
    },
    {
      title: "Enzyme Conjugation",
      description: "Linking enzymes to substrates or other proteins for bioanalysis",
    },
    {
      title: "Protein-Protein Fusion",
      description: "Creating fusion proteins and multimeric protein complexes",
    },
    {
      title: "Drug Conjugates",
      description: "Attaching drugs to protein carriers for targeted therapy",
    },
    {
      title: "Bioconjugate Chemistry",
      description: "General platform for creating complex protein-based bioconjugates",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Applications</h2>
        <p className="text-lg text-gray-700 mb-12">
          Enabling innovative protein therapeutics and bioconjugates
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
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Innovation Impact</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Published in ACS Central Science in 2018, this method has opened new possibilities for protein modification and therapeutic development. The chemoselective nature of the reaction enables precise bioconjugation without unwanted cross-linking.
          </p>
          <p className="text-gray-700">
            The technology is particularly valuable for creating improved biotherapeutics with extended half-lives and enhanced pharmacological properties.
          </p>
        </div>
      </div>
    </section>
  )
}
