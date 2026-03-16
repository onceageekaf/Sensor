"use client"

export function TechnologySection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Technology Overview</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Core Technology</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              ASTRAS (Absolute Strain Transducer for Rotational Angular Sensor) represents a breakthrough in high-precision angular measurement. This miniaturized sensor achieves unprecedented accuracy of 10⁻⁵ radians while maintaining a compact form factor suitable for integration into surgical instruments and robotic systems.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Microradian accuracy:</strong> Achieves precision of 10⁻⁵ radians for exceptional resolution</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Miniaturizable design:</strong> Compact form factor suitable for surgical and robotic applications</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Absolute measurement:</strong> No homing required - immediate accurate angle readout</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Robust design:</strong> Suitable for sterilization and demanding medical environments</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technical Specifications</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The ASTRAS sensor combines innovative strain-based measurement principles with precision engineering to deliver unprecedented angular measurement capabilities in a miniaturized package.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Advantages</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-blue-100 rounded-lg bg-blue-50">
                <p className="font-semibold text-blue-900 mb-2">Extreme Precision</p>
                <p className="text-gray-700">10⁻⁵ radian accuracy enables microlevel angular control</p>
              </div>
              <div className="p-6 border border-blue-100 rounded-lg bg-blue-50">
                <p className="font-semibold text-blue-900 mb-2">Compact Form Factor</p>
                <p className="text-gray-700">Miniaturizable design fits into surgical instruments and robotic joints</p>
              </div>
              <div className="p-6 border border-blue-100 rounded-lg bg-blue-50">
                <p className="font-semibold text-blue-900 mb-2">Absolute Measurement</p>
                <p className="text-gray-700">No calibration or homing required - immediate angle data</p>
              </div>
              <div className="p-6 border border-blue-100 rounded-lg bg-blue-50">
                <p className="font-semibold text-blue-900 mb-2">Sterilizable</p>
                <p className="text-gray-700">Compatible with medical sterilization processes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
