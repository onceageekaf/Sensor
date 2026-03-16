"use client"

export function TechnologySection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Technology Overview</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Surrogate Function Method</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This innovative method enables real-time, instantaneous user feedback from computations with unpredictable execution times. Using surrogate functions trained on preliminary computation data, users receive intermediate results immediately while the full computation continues in the background.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>Instantaneous feedback:</strong> Immediate approximate results before full computation completes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>Surrogate models:</strong> Machine learning functions trained to approximate expensive computations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>Unpredictable timing:</strong> Works with computations of variable and unknown duration</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>User engagement:</strong> Keeps users informed and engaged during long computations</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Algorithm Approach</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The method leverages machine learning to create fast approximations of expensive computational procedures, enabling interactive feedback throughout computation execution without waiting for results.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Advantages</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-teal-100 rounded-lg bg-teal-50">
                <p className="font-semibold text-teal-900 mb-2">Real-time Feedback</p>
                <p className="text-gray-700">Instantaneous intermediate results during computation</p>
              </div>
              <div className="p-6 border border-teal-100 rounded-lg bg-teal-50">
                <p className="font-semibold text-teal-900 mb-2">Unpredictable Duration</p>
                <p className="text-gray-700">Works with computations of variable execution time</p>
              </div>
              <div className="p-6 border border-teal-100 rounded-lg bg-teal-50">
                <p className="font-semibold text-teal-900 mb-2">User Experience</p>
                <p className="text-gray-700">Improved user engagement and satisfaction</p>
              </div>
              <div className="p-6 border border-teal-100 rounded-lg bg-teal-50">
                <p className="font-semibold text-teal-900 mb-2">General Application</p>
                <p className="text-gray-700">Applicable to any computationally intensive task</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
