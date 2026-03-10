"use client"

import { useState, useCallback, useRef } from "react"
import { Upload, File, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface FileUploaderProps {
  onFilesAdded: (files: File[]) => void
  maxSize?: number // in bytes
  acceptedFormats?: string[]
}

const DEFAULT_ACCEPTED = [".txt", ".csv", ".json", ".doc", ".docx", ".pdf", ".xlsx", ".xls"]
const DEFAULT_MAX_SIZE = 50 * 1024 * 1024 // 50MB

export function FileUploader({ 
  onFilesAdded, 
  maxSize = DEFAULT_MAX_SIZE,
  acceptedFormats = DEFAULT_ACCEPTED 
}: FileUploaderProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const validateFiles = useCallback((fileList: FileList | File[]): File[] => {
    const files = Array.from(fileList)
    const validFiles: File[] = []
    const errors: string[] = []

    files.forEach((file) => {
      // Check file size
      if (file.size > maxSize) {
        errors.push(`${file.name} exceeds maximum size of ${Math.round(maxSize / 1024 / 1024)}MB`)
        return
      }

      // Check file format
      const ext = "." + file.name.split(".").pop()?.toLowerCase()
      if (!acceptedFormats.includes(ext)) {
        errors.push(`${file.name} has unsupported format`)
        return
      }

      validFiles.push(file)
    })

    if (errors.length > 0) {
      setError(errors.join(". "))
      setTimeout(() => setError(null), 5000)
    }

    return validFiles
  }, [maxSize, acceptedFormats])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const validFiles = validateFiles(e.dataTransfer.files)
    if (validFiles.length > 0) {
      onFilesAdded(validFiles)
    }
  }, [validateFiles, onFilesAdded])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const validFiles = validateFiles(e.target.files)
      if (validFiles.length > 0) {
        onFilesAdded(validFiles)
      }
    }
    // Reset input
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }, [validateFiles, onFilesAdded])

  return (
    <div className="space-y-3">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={cn(
          "relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200",
          isDragging 
            ? "border-teal-400 bg-teal-50" 
            : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
        )}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          accept={acceptedFormats.join(",")}
          onChange={handleFileSelect}
          className="hidden"
        />

        <div className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors",
          isDragging ? "bg-teal-100" : "bg-slate-100"
        )}>
          <Upload className={cn(
            "w-6 h-6 transition-colors",
            isDragging ? "text-teal-600" : "text-slate-400"
          )} />
        </div>

        <h3 className="font-medium text-slate-900 mb-1">
          {isDragging ? "Drop files here" : "Drag & drop files here"}
        </h3>
        <p className="text-sm text-slate-500 mb-4">
          or click to browse from your computer
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {[".csv", ".json", ".xlsx", ".txt", ".pdf"].map((format) => (
            <span 
              key={format}
              className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-mono"
            >
              {format}
            </span>
          ))}
        </div>

        {/* Animated border effect when dragging */}
        {isDragging && (
          <div className="absolute inset-0 rounded-xl border-2 border-teal-400 animate-pulse pointer-events-none" />
        )}
      </div>

      {/* Error message */}
      {error && (
        <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-100 rounded-lg text-sm text-red-700">
          <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Info text */}
      <p className="text-xs text-slate-400 text-center">
        Maximum file size: {Math.round(maxSize / 1024 / 1024)}MB
      </p>
    </div>
  )
}
