"use client"

import { useState } from "react"
import { CheckCircle, Download, Trash2, ChevronDown, ChevronUp, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { UploadedFile } from "@/app/upload/page"

interface ProcessedDataProps {
  files: UploadedFile[]
  onRemove: (fileId: string) => void
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + " B"
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB"
  return (bytes / (1024 * 1024)).toFixed(1) + " MB"
}

export function ProcessedData({ files, onRemove }: ProcessedDataProps) {
  const [expandedId, setExpandedId] = useState<string | null>(files[0]?.id || null)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleCopy = async (fileId: string, data: unknown) => {
    await navigator.clipboard.writeText(JSON.stringify(data, null, 2))
    setCopiedId(fileId)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleDownload = (file: UploadedFile) => {
    if (!file.processedData) return
    
    const content = JSON.stringify(file.processedData.preview, null, 2)
    const blob = new Blob([content], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = file.processedData.originalName.replace(/\.[^/.]+$/, "") + "_processed.json"
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200">
      <div className="px-4 py-3 border-b border-slate-100">
        <h2 className="font-medium text-slate-900">Processed Data</h2>
        <p className="text-sm text-slate-500 mt-0.5">
          {files.length} file{files.length !== 1 ? "s" : ""} converted to standardized format
        </p>
      </div>

      <div className="divide-y divide-slate-100">
        {files.map((file) => (
          <div key={file.id} className="overflow-hidden">
            {/* Header */}
            <button
              onClick={() => setExpandedId(expandedId === file.id ? null : file.id)}
              className="w-full flex items-center gap-3 p-4 hover:bg-slate-50 transition-colors text-left"
            >
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 truncate">
                  {file.processedData?.originalName}
                </p>
                <div className="flex items-center gap-3 mt-0.5 text-xs text-slate-500">
                  <span>{file.processedData?.format}</span>
                  <span>{formatFileSize(file.processedData?.size || 0)}</span>
                  <span>{file.processedData?.rows} rows</span>
                </div>
              </div>

              {expandedId === file.id ? (
                <ChevronUp className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {/* Expanded content */}
            {expandedId === file.id && file.processedData && (
              <div className="px-4 pb-4">
                {/* Columns */}
                <div className="mb-4">
                  <h4 className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
                    Detected Columns
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {file.processedData.columns?.map((col) => (
                      <span 
                        key={col} 
                        className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md font-mono"
                      >
                        {col}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Preview table */}
                <div className="mb-4">
                  <h4 className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
                    Data Preview
                  </h4>
                  <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-slate-50">
                          {file.processedData.columns?.map((col) => (
                            <th 
                              key={col} 
                              className="px-3 py-2 text-left font-medium text-slate-600 border-b border-slate-200"
                            >
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {file.processedData.preview?.map((row, i) => (
                          <tr key={i} className="border-b border-slate-100 last:border-0">
                            {file.processedData?.columns?.map((col) => (
                              <td 
                                key={col} 
                                className="px-3 py-2 text-slate-700 font-mono"
                              >
                                {String((row as Record<string, unknown>)[col] ?? "")}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => handleDownload(file)}
                    className="text-xs"
                  >
                    <Download className="w-3 h-3 mr-1.5" />
                    Download JSON
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => handleCopy(file.id, file.processedData?.preview)}
                    className="text-xs"
                  >
                    {copiedId === file.id ? (
                      <>
                        <Check className="w-3 h-3 mr-1.5 text-green-600" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 mr-1.5" />
                        Copy JSON
                      </>
                    )}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    onClick={() => onRemove(file.id)}
                    className="text-xs text-red-600 hover:text-red-700 hover:bg-red-50 ml-auto"
                  >
                    <Trash2 className="w-3 h-3 mr-1.5" />
                    Remove
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
