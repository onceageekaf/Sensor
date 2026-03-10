"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">TT</span>
          </div>
          <span className="font-semibold text-slate-900">Tech Transfer</span>
        </Link>
        
        {!isHome && (
          <Link
            href="/"
            className={cn(
              "px-4 py-2 text-sm rounded-lg transition-colors",
              "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            )}
          >
            View all technologies
          </Link>
        )}
      </div>
    </header>
  )
}
