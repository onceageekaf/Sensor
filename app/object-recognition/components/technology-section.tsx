"use client"

export function TechnologySection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Technology Overview</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Computer Vision Authentication</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This breakthrough technology enables product authentication using computer vision to identify unique surface features of objects, without requiring QR codes, holograms, or any modifications to the product. A simple smartphone camera can verify authenticity by analyzing the object's distinctive surface characteristics.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Non-invasive:</strong> No QR codes, holograms, or product modifications needed</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Portable device compatible:</strong> Works with standard smartphone cameras</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Natural surface features:</strong> Uses inherent unique characteristics of objects</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Difficult to counterfeit:</strong> Natural surface patterns are extremely difficult to replicate</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Deep Learning Approach</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Advanced computer vision and deep learning algorithms extract and compare surface features with high precision, enabling reliable authentication with minimal false positives.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Advantages</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-blue-100 rounded-lg bg-blue-50">
                <p className="font-semibold text-blue-900 mb-2">Non-Invasive</p>
                <p className="text-gray-700">No modifications to products needed for authentication</p>
              </div>
              <div className="p-6 border border-blue-100 rounded-lg bg-blue-50">
                <p className="font-semibold text-blue-900 mb-2">User-Friendly</p>
                <p className="text-gray-700">Simple smartphone camera verification</p>
              </div>
              <div className="p-6 border border-blue-100 rounded-lg bg-blue-50">
                <p className="font-semibold text-blue-900 mb-2">Fraud Prevention</p>
                <p className="text-gray-700">Highly difficult to counterfeit natural surface patterns</p>
              </div>
              <div className="p-6 border border-blue-100 rounded-lg bg-blue-50">
                <p className="font-semibold text-blue-900 mb-2">Cost Effective</p>
                <p className="text-gray-700">No expensive security features or QR codes needed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
