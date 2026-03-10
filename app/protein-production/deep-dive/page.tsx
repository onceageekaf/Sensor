"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { Figure1Tripeptide } from "@/components/protein/figures/figure-1-tripeptide"
import { Figure2Transporter } from "@/components/protein/figures/figure-2-transporter"
import { Figure3Toolbox } from "@/components/protein/figures/figure-3-toolbox"
import { Figure4Evolution } from "@/components/protein/figures/figure-4-evolution"
import { Figure5Dual } from "@/components/protein/figures/figure-5-dual"

function FigureSection({
  number,
  title,
  children,
  defaultOpen = false,
}: {
  number: string
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
      >
        <div>
          <span className="text-sm text-emerald-600 font-medium">Figure {number}</span>
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        </div>
        {isOpen
          ? <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
          : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
        }
      </button>
      {isOpen && (
        <div className="p-6 bg-white border-t border-slate-100">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProteinDeepDivePage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      {/* Sub-header */}
      <div className="py-3 px-6 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/protein-production"
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to overview
          </Link>
          <a
            href="https://doi.org/10.1038/s41586-025-09576-w"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            View full publication
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Content */}
      <article className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-16">
            <p className="text-sm font-medium text-emerald-600 tracking-widest uppercase mb-4">Technical Deep Dive</p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
              Hijacking a Bacterial ABC Transporter for Genetic Code Expansion
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-6">
              A comprehensive walkthrough of the science behind programmable non-canonical amino acid import
              and efficient designer protein production — with interactive figures from the paper.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-600">
              <strong>Citation:</strong> Iype, T., Fottner, M., Böhm, P. et al. Hijacking a bacterial ABC transporter for genetic code expansion.{" "}
              <em>Nature</em> 647, 1045–1053 (2025).{" "}
              <a
                href="https://doi.org/10.1038/s41586-025-09576-w"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:underline"
              >
                doi.org/10.1038/s41586-025-09576-w
              </a>
            </div>
          </header>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Core Discovery</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The researchers discovered that the <strong>oligopeptide permease (Opp)</strong>, a bacterial ABC
              transporter, can be co-opted to actively import non-canonical amino acids (ncAAs) into{" "}
              <em>E. coli</em> cells when they are attached to a simple tripeptide scaffold (G-XisoK).
            </p>
            <p className="text-slate-600 leading-relaxed">
              This "Trojan horse" approach overcomes the fundamental limitation of genetic code expansion:
              most ncAAs cannot efficiently cross the cell membrane. By leveraging active transport the system
              achieves 5–10× higher intracellular ncAA concentrations, enabling wild-type-like protein yields.
            </p>
          </section>

          {/* Figures */}
          <FigureSection number="1" title="G-XisoK Tripeptides Enable Efficient Uptake" defaultOpen>
            <div className="mb-6">
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Adding a single glycine to the N-terminus of an ncAA transforms an impermeable building block
                into one that is actively imported by the Opp transporter. The interactive charts below compare
                real-time fluorescence from a reporter protein (sfGFP-N150TAG) when either G-AisoK (tripeptide)
                or AisoK alone (dipeptide) is supplied to the cell, alongside a simulated SDS-PAGE gel showing
                the presence or absence of full-length protein.
              </p>
            </div>
            <Figure1Tripeptide />
            <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm text-slate-600">
              <div className="p-4 bg-slate-50 rounded-xl">
                <strong className="text-slate-800">Panel b (SDS-PAGE):</strong> G-AisoK produces a strong
                full-length sfGFP band. AisoK alone produces only a faint truncated band — the amber stop
                codon is not read through without sufficient intracellular ncAA.
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <strong className="text-slate-800">Panel d/e (kinetics):</strong> G-AisoK drives fluorescence
                to wild-type levels within hours. Uptake assays confirm 5–10× more intracellular AisoK
                compared to direct dipeptide supplementation.
              </div>
            </div>
          </FigureSection>

          <FigureSection number="2" title="Identification of the Opp Transporter">
            <div className="mb-6">
              <p className="text-sm text-slate-600 leading-relaxed">
                A systematic gene knockout screen showed that deleting any single Opp subunit completely
                abolishes G-XisoK-mediated protein production. An AlphaFold2 structure revealed the five-component
                ABC transporter architecture, with OppA as the periplasmic binding protein that first captures
                the G-XisoK tripeptide. Hover each subunit in the structure view to explore its role.
              </p>
            </div>
            <Figure2Transporter />
          </FigureSection>

          <FigureSection number="3" title="A Versatile G-XisoK Toolbox">
            <div className="mb-6">
              <p className="text-sm text-slate-600 leading-relaxed">
                The OppA binding pocket primarily recognises the peptide backbone and termini, leaving a
                spacious cavity for diverse side chains. This was confirmed by solving the crystal structure
                of OppA bound to G-SisoK (PDB: 9RD1). Use the category filter below to explore the 11+
                ncAAs demonstrated, spanning post-translational modification mimics, bioorthogonal handles,
                crosslinkers, and labelling handles.
              </p>
            </div>
            <Figure3Toolbox />
          </FigureSection>

          <FigureSection number="4" title="Evolved Transporters for Scalable Production">
            <div className="mb-6">
              <p className="text-sm text-slate-600 leading-relaxed">
                In nutrient-rich (2-YT) media, competing peptides in tryptone reduce G-XisoK import
                efficiency sevenfold. Through FACS-based directed evolution of OppA, the researchers
                created <strong>OppA-iso</strong> — a variant with fourfold lower affinity for competitor
                peptides while retaining high affinity for G-SisoK. Genomic integration of OppA-iso into
                K12 creates the <strong>IsoK12</strong> production strain.
              </p>
            </div>
            <Figure4Evolution />
          </FigureSection>

          <FigureSection number="5" title="Expanded Scaffolds and Dual ncAA Delivery">
            <div className="mb-6">
              <p className="text-sm text-slate-600 leading-relaxed">
                The platform extends to Z-XisoK scaffolds where the N-terminal position (Z) can also be a
                non-canonical amino acid, enabling co-delivery and dual incorporation of two different ncAAs
                in a single tripeptide. The yield comparison demonstrates that IsoK12 achieves wild-type-level
                purified protein across nine therapeutically relevant target proteins spanning 7–85 kDa.
              </p>
            </div>
            <Figure5Dual />
          </FigureSection>

          {/* Summary */}
          <section className="mt-16 p-8 rounded-2xl bg-emerald-50 border border-emerald-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Summary: Why This Matters</h2>
            <div className="space-y-4 text-slate-600">
              <p className="leading-relaxed">
                <strong>For researchers:</strong> ncAAs previously impractical due to poor uptake are now
                incorporable at wild-type yields. The toolbox covers every major functional group used in
                protein engineering — PTMs, click handles, crosslinkers, and labelling sites.
              </p>
              <p className="leading-relaxed">
                <strong>For industry:</strong> IsoK12 works in standard rich media, eliminates expensive
                autoinduction media, requires 10× less ncAA material, and is genomically integrated — ready
                for scale-up without plasmid maintenance.
              </p>
              <p className="leading-relaxed">
                <strong>For therapeutics:</strong> Site-specific modification of biologics (ADCs, PEGylation,
                multi-site labelling) is now achievable at homogeneous, preparative yields — enabling
                next-generation protein therapeutics with improved safety profiles.
              </p>
            </div>
          </section>

          {/* Resources */}
          <section className="mt-16">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="https://doi.org/10.1038/s41586-025-09576-w"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-slate-200 hover:border-emerald-200 hover:bg-emerald-50/50 transition-colors group"
              >
                <h4 className="font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Full Publication
                </h4>
                <p className="text-sm text-slate-500">Nature, November 2025</p>
              </a>
              <a
                href="https://ethz.ch/en/news-and-events/eth-news/news/2025/12/a-trojan-horse-for-artificial-amino-acids.html"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-slate-200 hover:border-emerald-200 hover:bg-emerald-50/50 transition-colors group"
              >
                <h4 className="font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  ETH Zurich News Article
                </h4>
                <p className="text-sm text-slate-500">December 2025</p>
              </a>
              <a
                href="https://transfer.ethz.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-slate-200 hover:border-emerald-200 hover:bg-emerald-50/50 transition-colors group"
              >
                <h4 className="font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  ETH Transfer
                </h4>
                <p className="text-sm text-slate-500">Licensing information — Ref. 2024-108</p>
              </a>
              <a
                href="https://lang.ethz.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-slate-200 hover:border-emerald-200 hover:bg-emerald-50/50 transition-colors group"
              >
                <h4 className="font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Lang Group, ETH Zurich
                </h4>
                <p className="text-sm text-slate-500">Principal investigator lab website</p>
              </a>
            </div>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-slate-400">Technology reference: 2024-108 | ETH Zurich</p>
        </div>
      </footer>
    </main>
  )
}
