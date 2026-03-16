import { ExternalLink } from 'lucide-react'

interface DeepDiveProps {
  title: string
  publication: {
    title: string
    journal?: string
    year?: string
    doi?: string
    url?: string
    authors?: string
  }
  methodology?: string[]
  keyFindings?: string[]
  innovationDetails?: string
  patentStatus?: string
  trlLevel?: number
}

export function DeepDiveSection({ title, publication, methodology, keyFindings, innovationDetails, patentStatus, trlLevel }: DeepDiveProps) {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Deep Dive:</span> {title}
        </h2>

        {/* Publication Section */}
        <div className="mb-12 p-6 bg-white border border-slate-200 rounded-lg">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Publication & References</h3>
          <div className="space-y-3">
            <p className="text-slate-700">
              <span className="font-medium text-slate-900">Title:</span> {publication.title}
            </p>
            {publication.journal && (
              <p className="text-slate-700">
                <span className="font-medium text-slate-900">Journal:</span> {publication.journal}
                {publication.year && ` (${publication.year})`}
              </p>
            )}
            {publication.authors && (
              <p className="text-slate-700">
                <span className="font-medium text-slate-900">Authors:</span> {publication.authors}
              </p>
            )}
            {publication.doi && (
              <div className="flex items-center gap-2">
                <span className="font-medium text-slate-900">DOI:</span>
                <a
                  href={`https://doi.org/${publication.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  {publication.doi}
                  <ExternalLink size={14} />
                </a>
              </div>
            )}
            {publication.url && (
              <div className="flex items-center gap-2">
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  Read Full Publication
                  <ExternalLink size={14} />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Innovation Details */}
        {innovationDetails && (
          <div className="mb-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Innovation Overview</h3>
            <p className="text-slate-700 leading-relaxed">{innovationDetails}</p>
          </div>
        )}

        {/* Methodology */}
        {methodology && methodology.length > 0 && (
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Methodology</h3>
            <ul className="space-y-3">
              {methodology.map((method, index) => (
                <li key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-slate-700 pt-0.5">{method}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Key Findings */}
        {keyFindings && keyFindings.length > 0 && (
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Key Findings</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {keyFindings.map((finding, index) => (
                <div key={index} className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <p className="text-slate-700">{finding}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Patent & TRL Status */}
        <div className="grid gap-4 md:grid-cols-2 mb-12">
          {patentStatus && (
            <div className="p-6 bg-amber-50 border border-amber-200 rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-2">Patent Status</h4>
              <p className="text-slate-700">{patentStatus}</p>
            </div>
          )}
          {trlLevel && (
            <div className="p-6 bg-violet-50 border border-violet-200 rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-2">Technology Readiness Level</h4>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center text-xl font-bold">
                  {trlLevel}
                </div>
                <span className="text-slate-700">of 9</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
