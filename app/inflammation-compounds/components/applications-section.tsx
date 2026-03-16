"use client"

export function ApplicationsSection() {
  const applications = [
    {
      title: "Acute Inflammatory Events",
      description: "Treatment of severe acute inflammatory responses including sepsis, cytokine storms, and acute respiratory distress syndrome",
    },
    {
      title: "Ischemia-Reperfusion Injury",
      description: "Mitigation of tissue damage following surgical procedures, organ transplantation, and vascular interventions",
    },
    {
      title: "Myocardial Infarction",
      description: "Adjunctive therapy to reduce reperfusion injury following coronary intervention and restore cardiac function",
    },
    {
      title: "Stroke and Cerebral Injury",
      description: "Neuroprotection through reduction of post-ischemic inflammation and secondary brain injury cascades",
    },
    {
      title: "Trauma and Shock Management",
      description: "Critical care application for multi-organ inflammatory response syndrome following severe trauma",
    },
    {
      title: "Surgical Procedure Support",
      description: "Perioperative administration to minimize inflammatory complications and improve patient recovery",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Clinical Applications</h2>
        <p className="text-lg text-gray-700 mb-12">
          These compounds address critical unmet needs in emergency and intensive care medicine
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
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Market Opportunity</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The global critical care therapeutics market exceeds $30 billion annually, with significant demand for innovative anti-inflammatory compounds. These compounds address a critical gap in current therapeutic options for severe inflammation and ischemic injury, with potential applications across emergency medicine, cardiology, neurology, and trauma surgery.
          </p>
          <p className="text-gray-700">
            Patent protection for this technology is pending, ensuring competitive advantage during commercialization.
          </p>
        </div>
      </div>
    </section>
  )
}
