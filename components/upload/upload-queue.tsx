"use client"

import { File, X, Play, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { UploadedFile } from "@/app/upload/page"

interface UploadQueueProps {
  files: UploadedFile[]
  onProcess: (fileId: string) => void
  onRemove: (fileId: string) => void
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + " B"
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB"
  return (bytes / (1024 * 1024)).toFixed(1) + " MB"
}

function getFileIcon(filename: string): string {
  const ext = filename.split(".").pop()?.toLowerCase() || ""
  const icons: Record<string, string> = {
    csv: "text-green-600 bg-green-50",
    json: "text-amber-600 bg-amber-50",
    xlsx: "text-emerald-600 bg-emerald-50",
    xls: "text-emerald-600 bg-emerald-50",
    txt: "text-slate-600 bg-slate-100",
    pdf: "text-red-600 bg-red-50",
    doc: "text-blue-600 bg-blue-50",
    docx: "text-blue-600 bg-blue-50",
  }
  return icons[ext] || "text-slate-600 bg-slate-100"
}

export function UploadQueue({ files, onProcess, onRemove }: UploadQueueProps) {
  return (
    <div className="space-y-2">
      {files.map((file) => (
        <div 
          key={file.id}
          className={cn(
            "flex items-center gap-3 p-3 rounded-lg border transition-all",
            file.status === "error" 
              ? "bg-red-50 border-red-100" 
              : "bg-slate-50 border-slate-100"
          )}
        >
          {/* File icon */}
          <div className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
            getFileIcon(file.file.name)
          )}>
            <File className="w-5 h-5" />
          </div>

          {/* File info */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-900 truncate">
              {file.file.name}
            </p>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs text-slate-500">
                {formatFileSize(file.file.size)}
              </span>
              
              {file.status === "uploading" && (
                <span className="text-xs text-teal-600">
                  Uploading... {file.progress}%
                </span>
              )}
              {file.status === "processing" && (
                <span className="text-xs text-amber-600">
                  Processing...
                </span>
              )}
              {file.status === "error" && (
                <span className="text-xs text-red-600">
                  {file.error}
                </span>
              )}
            </div>

            {/* Progress bar */}
            {(file.status === "uploading" || file.status === "processing") && (
              <div className="mt-2 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className={cn(
                    "h-full transition-all duration-300 rounded-full",
                    file.status === "processing" ? "bg-amber-500" : "bg-teal-500"
                  )}
                  style={{ width: `${file.progress}%` }}
                />
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {file.status === "pending" && (
              <Button 
                size="sm" 
                variant="ghost" 
                onClick={() => onProcess(file.id)}
                className="h-8 w-8 p-0 text-teal-600 hover:text-teal-700 hover:bg-teal-50"
              >
                <Play className="w-4 h-4" />
              </Button>
            )}
            
            {(file.status === "uploading" || file.status === "processing") && (
              <div className="h-8 w-8 flex items-center justify-center">
                <Loader2 className="w-4 h-4 text-slate-400 animate-spin" />
              </div>
            )}

            {file.status === "error" && (
              <div className="h-8 w-8 flex items-center justify-center">
                <AlertCircle className="w-4 h-4 text-red-500" />
              </div>
            )}

            <Button 
              size="sm" 
              variant="ghost" 
              onClick={() => onRemove(file.id)}
              className="h-8 w-8 p-0 text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              disabled={file.status === "uploading" || file.status === "processing"}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
