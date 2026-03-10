"use client"

import React, { useEffect, useRef, useState, useMemo } from "react"
import Link from "next/link"
import { ArrowRight, Search, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { 
  SensorIcon, 
  NanotubeIcon, 
  AntibodyIcon, 
  ReceptorIcon, 
  DNAIcon, 
  ProteinIcon,
  BacteriaIcon,
  MoleculeIcon,
  CellIcon,
  EnzymeIcon,
  RibosomeIcon
} from "@/components/icons/bioicons"

// Technology data - easily scalable to hundreds of entries
const technologies = [
  {
    id: "oxygen-sensor",
    href: "/oxygen-sensor",
    title: "Dye-Sensitized Oxygen Sensor",
    subtitle: "A chemiresistive sensor for rapid, selective oxygen detection under visible light",
    institution: "ETH Zurich",
    published: "Advanced Science, 2024",
    trl: 4,
    tags: ["Sensing", "Nanotechnology", "Environmental"],
    icon: SensorIcon,
    color: "teal",
  },
  {
    id: "endocytosis-inhibitors",
    href: "/endocytosis-inhibitors",
    title: "Endocytosis Inhibitors for Cancer Immunotherapy",
    subtitle: "Enhancing monoclonal antibody responses by clustering receptors on tumor surfaces",
    institution: "University of Queensland",
    published: "Cell, 2020",
    trl: 6,
    tags: ["Oncology", "Immunotherapy", "Drug Repurposing"],
    icon: AntibodyIcon,
    color: "violet",
  },
  {
    id: "protein-production",
    href: "/protein-production",
    title: "Production Platform for Non-Canonical Amino Acid Proteins",
    subtitle: "Hijacking bacterial ABC transporters for efficient genetic code expansion and designer protein production",
    institution: "ETH Zurich",
    published: "Nature, 2025",
    trl: 5,
    tags: ["Biotechnology", "Protein Engineering", "Synthetic Biology"],
    icon: RibosomeIcon,
    color: "emerald",
  },
  {
    id: "nanoparticle-qc",
    href: "/nanoparticle-qc",
    title: "In-line Quality Control of Engineered Nanoparticles",
    subtitle: "Single-particle ICP-MS for comprehensive characterization of nanoparticle size, composition, and count in production",
    institution: "EPFL",
    published: "ACS Nano, 2022",
    trl: 7,
    tags: ["Nanotechnology", "Quality Control", "Analytical"],
    icon: NanotubeIcon,
    color: "violet",
  },
  {
    id: "hydrogel-bone",
    href: "/hydrogel-bone",
    title: "Synthetic Hydrogel for Bone Tissue Engineering",
    subtitle: "Biodegradable microporous PEG hydrogel for 3D bone cell networks with real-time collagen imaging on-chip",
    institution: "ETH Zurich",
    published: "Nature Communications, 2024",
    trl: 6,
    tags: ["Biotechnology", "Tissue Engineering", "Drug Discovery"],
    icon: CellIcon,
    color: "emerald",
  },
]

// Extract all unique tags for filtering
const allTags = Array.from(new Set(technologies.flatMap(t => t.tags))).sort()

// Tag icons mapping - using bioicons for scientific tags
const tagIconsMap: Record<string, React.FC<{ className?: string; size?: number; color?: string }>> = {
  "Sensing": SensorIcon,
  "Nanotechnology": NanotubeIcon,
  "Environmental": MoleculeIcon,
  "Oncology": CellIcon,
  "Immunotherapy": AntibodyIcon,
  "Drug Repurposing": EnzymeIcon,
  "Biotechnology": DNAIcon,
  "Protein Engineering": ProteinIcon,
  "Synthetic Biology": BacteriaIcon,
  "Quality Control": SensorIcon,
  "Analytical": MoleculeIcon,
  "Tissue Engineering": CellIcon,
  "Drug Discovery": EnzymeIcon,
}

// Color mapping for tags
const tagColors: Record<string, string> = {
  "Sensing": "bg-teal-50 text-teal-700 border-teal-200",
  "Nanotechnology": "bg-blue-50 text-blue-700 border-blue-200",
  "Environmental": "bg-green-50 text-green-700 border-green-200",
  "Oncology": "bg-rose-50 text-rose-700 border-rose-200",
  "Immunotherapy": "bg-violet-50 text-violet-700 border-violet-200",
  "Drug Repurposing": "bg-amber-50 text-amber-700 border-amber-200",
  "Biotechnology": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Protein Engineering": "bg-cyan-50 text-cyan-700 border-cyan-200",
  "Synthetic Biology": "bg-indigo-50 text-indigo-700 border-indigo-200",
  "Quality Control": "bg-purple-50 text-purple-700 border-purple-200",
  "Analytical": "bg-blue-50 text-blue-700 border-blue-200",
  "Tissue Engineering": "bg-pink-50 text-pink-700 border-pink-200",
  "Drug Discovery": "bg-orange-50 text-orange-700 border-orange-200",
}

const cardColors: Record<string, string> = {
  teal: "border-teal-100 hover:border-teal-300",
  violet: "border-violet-100 hover:border-violet-300",
  emerald: "border-emerald-100 hover:border-emerald-300",
  blue: "border-blue-100 hover:border-blue-300",
}

const iconBgColors: Record<string, string> = {
  teal: "bg-teal-50",
  violet: "bg-violet-50",
  emerald: "bg-emerald-50",
  blue: "bg-blue-50",
}

const iconColors: Record<string, string> = {
  teal: "#0d9488",
  violet: "#7c3aed",
  emerald: "#059669",
  blue: "#2563eb",
}

const accentColors: Record<string, string> = {
  teal: "text-teal-600",
  violet: "text-violet-600",
  emerald: "text-emerald-600",
  blue: "text-blue-600",
}

function FadeIn({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const filteredTechnologies = useMemo(() => {
    return technologies.filter(tech => {
      const matchesSearch = searchQuery === "" || 
        tech.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tech.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tech.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tech.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => tech.tags.includes(tag))
      
      return matchesSearch && matchesTags
    })
  }, [searchQuery, selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    )
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedTags([])
  }

  const hasFilters = searchQuery !== "" || selectedTags.length > 0

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="py-5 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-sm">
              <DNAIcon size={18} color="white" />
            </div>
            <span className="text-slate-900 font-semibold text-lg">Tech Transfer</span>
          </div>
          <div className="text-sm text-slate-500">
            {technologies.length} technologies available
          </div>
        </div>
      </header>

      {/* Hero + Search */}
      <section className="py-16 md:py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight text-balance">
              Technology Portfolio
            </h1>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed text-pretty">
              Explore breakthrough technologies from world-leading research institutions, available for licensing and commercialization.
            </p>
          </FadeIn>
          
          {/* Search Bar */}
          <FadeIn delay={200}>
            <div className="mt-10 max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search technologies, institutions, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </FadeIn>

          {/* Tag Filters */}
          <FadeIn delay={300}>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {allTags.map(tag => {
                const isSelected = selectedTags.includes(tag)
                const TagIcon = tagIconsMap[tag] || MoleculeIcon
                return (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={cn(
                      "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all",
                      isSelected 
                        ? "bg-slate-900 text-white border-slate-900" 
                        : tagColors[tag] || "bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300"
                    )}
                  >
                    <TagIcon size={12} color={isSelected ? "white" : undefined} />
                    {tag}
                  </button>
                )
              })}
            </div>
          </FadeIn>

          {/* Active filters indicator */}
          {hasFilters && (
            <FadeIn delay={350}>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500">
                <span>
                  {filteredTechnologies.length} of {technologies.length} technologies
                </span>
                <button
                  onClick={clearFilters}
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  Clear filters
                </button>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Technology Cards */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {filteredTechnologies.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-500">No technologies match your search.</p>
              <button
                onClick={clearFilters}
                className="mt-4 text-teal-600 hover:text-teal-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredTechnologies.map((tech, i) => {
                const TechIcon = tech.icon
                return (
                  <FadeIn key={tech.id} delay={i * 75}>
                    <Link href={tech.href} className="group block h-full">
                      <div className={cn(
                        "relative rounded-2xl border p-6 h-full transition-all duration-300 bg-white",
                        "hover:shadow-lg hover:-translate-y-1",
                        cardColors[tech.color]
                      )}>
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center",
                            iconBgColors[tech.color]
                          )}>
                            <TechIcon size={28} color={iconColors[tech.color]} animated />
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] text-slate-400 uppercase tracking-wider">TRL</span>
                            <span className={cn(
                              "text-sm font-bold",
                              accentColors[tech.color]
                            )}>{tech.trl}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-lg font-bold text-slate-900 leading-snug mb-2 line-clamp-2">
                          {tech.title}
                        </h2>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                          {tech.subtitle}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {tech.tags.slice(0, 3).map(tag => {
                            const TagIcon = tagIconsMap[tag] || MoleculeIcon
                            return (
                              <span
                                key={tag}
                                className={cn(
                                  "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium border",
                                  tagColors[tag] || "bg-slate-50 text-slate-600 border-slate-200"
                                )}
                              >
                                <TagIcon size={10} />
                                {tag}
                              </span>
                            )
                          })}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                          <div className="flex flex-col">
                            <span className="text-xs text-slate-400">{tech.institution}</span>
                            <span className="text-[10px] text-slate-300">{tech.published}</span>
                          </div>
                          <span className={cn(
                            "inline-flex items-center gap-1 text-sm font-medium transition-all group-hover:gap-2",
                            accentColors[tech.color]
                          )}>
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </FadeIn>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm">
            All technologies available for licensing. Contact the respective technology transfer office for inquiries.
          </p>
        </div>
      </footer>
    </main>
  )
}
