"use client"

import { useState, useCallback } from "react"
import { SiteHeader } from "@/components/site-header"
import { FileUploader } from "@/components/upload/file-uploader"
import { UploadQueue } from "@/components/upload/upload-queue"
import { ProcessedData } from "@/components/upload/processed-data"
import { Button } from "@/components/ui/button"
import { ArrowLeft, HelpCircle } from "lucide-react"
import Link from "next/link"

export interface UploadedFile {
  id: string
  file: File
  status: "pending" | "uploading" | "processing" | "completed" | "error"
  progress: number
  error?: string
  processedData?: ProcessedDataResult
}

export interface ProcessedDataResult {
  originalName: string
  format: string
  size: number
  rows?: number
  columns?: string[]
  preview?: Record<string, unknown>[]
  standardizedFormat: "json" | "csv"
}

export default function UploadPage() {
  const [files, setFiles] = useState<UploadedFile[]>([])
  const [showHelp, setShowHelp] = useState(false)

  const handleFilesAdded = useCallback((newFiles: File[]) => {
    const uploadFiles: UploadedFile[] = newFiles.map((file) => ({
      id: crypto.randomUUID(),
      file,
      status: "pending" as const,
      progress: 0,
    }))
    setFiles((prev) => [...prev, ...uploadFiles])
  }, [])

  const handleProcessFile = useCallback(async (fileId: string) => {
    setFiles((prev) =>
      prev.map((f) =>
        f.id === fileId ? { ...f, status: "uploading" as const, progress: 0 } : f
      )
    )

    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      await new Promise((r) => setTimeout(r, 100))
      setFiles((prev) =>
        prev.map((f) =>
          f.id === fileId ? { ...f, progress: Math.min(i, 50) } : f
        )
      )
    }

    setFiles((prev) =>
      prev.map((f) =>
        f.id === fileId ? { ...f, status: "processing" as const, progress: 50 } : f
      )
    )

    // Simulate processing
    await new Promise((r) => setTimeout(r, 1500))

    const file = files.find((f) => f.id === fileId)?.file
    if (!file) return

    // Determine file type and create mock processed data
    const ext = file.name.split(".").pop()?.toLowerCase() || ""
    const isValidFormat = ["txt", "csv", "json", "doc", "docx", "pdf", "xlsx", "xls"].includes(ext)

    if (!isValidFormat) {
      setFiles((prev) =>
        prev.map((f) =>
          f.id === fileId
            ? { ...f, status: "error" as const, progress: 0, error: `Unsupported file format: .${ext}` }
            : f
        )
      )
      return
    }

    // Mock processed data result
    const processedData: ProcessedDataResult = {
      originalName: file.name,
      format: ext.toUpperCase(),
      size: file.size,
      rows: Math.floor(Math.random() * 500) + 50,
      columns: ["id", "name", "value", "timestamp", "category"],
      preview: [
        { id: 1, name: "Sample A", value: 42.5, timestamp: "2024-01-15", category: "Type 1" },
        { id: 2, name: "Sample B", value: 38.2, timestamp: "2024-01-16", category: "Type 2" },
        { id: 3, name: "Sample C", value: 55.8, timestamp: "2024-01-17", category: "Type 1" },
      ],
      standardizedFormat: "json",
    }

    setFiles((prev) =>
      prev.map((f) =>
        f.id === fileId
          ? { ...f, status: "completed" as const, progress: 100, processedData }
          : f
      )
    )
  }, [files])

  const handleRemoveFile = useCallback((fileId: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== fileId))
  }, [])

  const handleProcessAll = useCallback(() => {
    const pendingFiles = files.filter((f) => f.status === "pending")
    pendingFiles.forEach((f) => {
      handleProcessFile(f.id)
    })
  }, [files, handleProcessFile])

  const completedFiles = files.filter((f) => f.status === "completed")
  const pendingOrProcessingFiles = files.filter((f) => f.status !== "completed")

  return (
    <main className="min-h-screen bg-slate-50">
      <SiteHeader />
      
      {/* Sub-header */}
      <div className="py-3 px-6 border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <button 
            onClick={() => setShowHelp(!showHelp)}
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            Help
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-900 mb-2">
            Data Upload & Processing
          </h1>
          <p className="text-slate-600">
            Upload your files to convert them into a standardized format for analysis and integration.
          </p>
        </div>

        {/* Help panel */}
        {showHelp && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-100 rounded-xl">
            <h3 className="font-medium text-blue-900 mb-2">Supported Formats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-blue-800">
              <div className="flex items-center gap-2">
                <span className="w-10 h-6 bg-blue-100 rounded text-xs flex items-center justify-center font-mono">.csv</span>
                <span>Comma-separated</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-10 h-6 bg-blue-100 rounded text-xs flex items-center justify-center font-mono">.json</span>
                <span>JSON data</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-10 h-6 bg-blue-100 rounded text-xs flex items-center justify-center font-mono">.xlsx</span>
                <span>Excel files</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-10 h-6 bg-blue-100 rounded text-xs flex items-center justify-center font-mono">.txt</span>
                <span>Plain text</span>
              </div>
            </div>
            <p className="mt-3 text-sm text-blue-700">
              Maximum file size: 50MB. All data is securely processed and stored.
            </p>
          </div>
        )}

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left column - Upload area */}
          <div className="space-y-6">
            <FileUploader onFilesAdded={handleFilesAdded} />
            
            {pendingOrProcessingFiles.length > 0 && (
              <div className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-medium text-slate-900">Upload Queue</h2>
                  <Button 
                    size="sm" 
                    onClick={handleProcessAll}
                    disabled={!files.some((f) => f.status === "pending")}
                    className="bg-teal-600 hover:bg-teal-700"
                  >
                    Process All
                  </Button>
                </div>
                <UploadQueue 
                  files={pendingOrProcessingFiles} 
                  onProcess={handleProcessFile}
                  onRemove={handleRemoveFile}
                />
              </div>
            )}
          </div>

          {/* Right column - Processed data */}
          <div>
            {completedFiles.length > 0 ? (
              <ProcessedData files={completedFiles} onRemove={handleRemoveFile} />
            ) : (
              <div className="bg-white rounded-xl border border-slate-200 border-dashed p-8 text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-medium text-slate-900 mb-1">No processed data yet</h3>
                <p className="text-sm text-slate-500">
                  Upload and process files to see standardized data here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
