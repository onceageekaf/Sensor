"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"

// Expandable figure section component
function FigureSection({ 
  number, 
  title, 
  children, 
  defaultOpen = false 
}: { 
  number: string
  title: string
  children: React.ReactNode
  defaultOpen?: boolean 
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
      >
        <div>
          <span className="text-sm text-emerald-600 font-medium">Figure {number}</span>
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>
      {isOpen && (
        <div className="p-6 bg-white">
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
          <Link href="/protein-production" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors">
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
              A comprehensive walkthrough of the science behind programmable ncAA import and efficient protein production.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-600">
              <strong>Citation:</strong> Iype, T., Fottner, M., Böhm, P. et al. Hijacking a bacterial ABC transporter for genetic code expansion. 
              <em> Nature</em> 647, 1045–1053 (2025). 
              <a href="https://doi.org/10.1038/s41586-025-09576-w" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline ml-1">
                doi.org/10.1038/s41586-025-09576-w
              </a>
            </div>
          </header>

          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Core Discovery</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The researchers discovered that the <strong>oligopeptide permease (Opp)</strong>, a bacterial ABC transporter, 
              can be co-opted to actively import non-canonical amino acids into E. coli cells when they are attached to 
              a simple tripeptide scaffold.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This "Trojan horse" approach overcomes a fundamental limitation of genetic code expansion: most ncAAs 
              cannot efficiently cross the cell membrane, resulting in low intracellular concentrations and poor 
              incorporation yields. By leveraging active transport, the system achieves 5-10x higher intracellular 
              ncAA concentrations, enabling wild-type-like protein production yields.
            </p>
          </section>

          {/* Figure 1 */}
          <FigureSection number="1" title="G-XisoK Tripeptides Enable Efficient Uptake" defaultOpen={true}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">What the figure shows:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">a</span>
                    <span>Chemical structures of G-XisoK (tripeptide), XisoK (dipeptide), and BocK (gold standard ncAA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">b</span>
                    <span>SDS-PAGE showing dramatic difference: G-AisoK produces full-length protein, while AisoK alone yields almost nothing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">c</span>
                    <span>Mass spectrometry confirms site-specific AisoK incorporation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">d</span>
                    <span>Real-time fluorescence shows G-AisoK enables faster, stronger protein production than BocK</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">e</span>
                    <span>Uptake assay: G-AisoK is rapidly processed inside cells, accumulating 5-10x more AisoK than direct supplementation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Key insight:</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Simply adding a glycine to the N-terminus of the ncAA (making it a tripeptide) transforms an 
                  impermeable building block into one that is actively imported and accumulates at high concentrations 
                  inside the cell. The N-terminal glycine is then cleaved off by endogenous peptidases.
                </p>
              </div>
            </div>
          </FigureSection>

          {/* Figure 2 */}
          <FigureSection number="2" title="Identification of the Opp Transporter">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">What the figure shows:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">a</span>
                    <span>Knockout screen: deleting any component of the Opp transporter (oppA, oppB, oppD) completely abolishes G-AisoK-dependent protein production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">b</span>
                    <span>AlphaFold2 structure of the Opp transporter showing its five components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">c</span>
                    <span>In ΔoppA cells, no intracellular AisoK is detected even when G-AisoK is supplied</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">d</span>
                    <span>Double knockout (ΔpepN/pepA) identifies the peptidases responsible for cleaving the N-terminal glycine</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Key insight:</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The Opp (oligopeptide permease) is an ABC transporter that normally imports small peptides 
                  for nutrition. The researchers discovered it also imports their G-XisoK tripeptides. 
                  Once inside, two redundant peptidases (PepN and PepA) cleave off the glycine, releasing 
                  the ncAA for incorporation.
                </p>
              </div>
            </div>
          </FigureSection>

          {/* Figure 3 */}
          <FigureSection number="3" title="A Versatile G-XisoK Toolbox">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">What the figure shows:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">a</span>
                    <span>Generalized G-XisoK structure: X can be any amino acid</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">b-c</span>
                    <span>Crystal structure of OppA bound to G-SisoK reveals a large cavity that can accommodate bulky side chains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">d</span>
                    <span>Toolbox of functional groups enabled: propargyl (click chemistry), diazirine (photocrosslinker), chloroacetyl (covalent crosslinker), and many natural amino acid variants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">e-i</span>
                    <span>Demonstrations: bioorthogonal conjugation, photocrosslinking, chemical crosslinking of protein complexes, enzymatic conjugation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Key insight:</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  The OppA binding pocket is promiscuous — it primarily recognizes the peptide backbone and 
                  termini, leaving a large cavity for diverse side chains. This enables a whole toolbox of 
                  11+ ncAAs with different functionalities.
                </p>
                <div className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                  <p className="text-xs text-emerald-700 font-medium">
                    Enabled functionalities: bioorthogonal handles (click chemistry), photocrosslinkers (UV-activated), 
                    chemical crosslinkers (proximity-based), post-translational modifications, enzymatic conjugation sites.
                  </p>
                </div>
              </div>
            </div>
          </FigureSection>

          {/* Figure 4 */}
          <FigureSection number="4" title="Evolved Transporters for Optimal Import">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">What the figure shows:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">a</span>
                    <span>Problem: in rich media, competing peptides reduce G-XisoK import efficiency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">b</span>
                    <span>Solution: directed evolution of OppA for preferential G-XisoK binding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">c-d</span>
                    <span>High-throughput FACS-based selection scheme to identify improved variants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">e-g</span>
                    <span>Evolved isoK12 strain achieves wild-type-like protein yields even in rich media</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Key insight:</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Through directed evolution, the researchers created OppA variants that preferentially 
                  bind G-XisoK tripeptides over the natural peptide substrates found in growth media. 
                  Genomic integration of these evolved transporters creates customized E. coli strains 
                  optimized for efficient ncAA import.
                </p>
              </div>
            </div>
          </FigureSection>

          {/* Figure 5 */}
          <FigureSection number="5" title="Expanded Scaffolds for Diverse ncAAs">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">What the figure shows:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">a</span>
                    <span>Extended scaffold Z-XisoK: the N-terminal amino acid can also be varied</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">b-c</span>
                    <span>Evolution of OppA for bulky Z-groups (like N3A — azidoalanine)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">d-e</span>
                    <span>Co-import of two different ncAAs via a single tripeptide for dual incorporation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Key insight:</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The platform is highly modular. Not only can the central X amino acid be varied, but 
                  the N-terminal "Z" position can also be changed — including to other ncAAs. This enables 
                  co-delivery and dual incorporation of two different non-canonical amino acids, opening 
                  new possibilities for multi-site labeling and crosslinking.
                </p>
              </div>
            </div>
          </FigureSection>

          {/* Summary */}
          <section className="mt-16 p-8 rounded-2xl bg-emerald-50 border border-emerald-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Summary: Why This Matters</h2>
            <div className="space-y-4 text-slate-600">
              <p className="leading-relaxed">
                <strong>For researchers:</strong> This technology dramatically expands the accessible chemical 
                space for protein engineering. ncAAs that were previously impractical due to poor uptake are 
                now readily incorporable at wild-type-like yields.
              </p>
              <p className="leading-relaxed">
                <strong>For industry:</strong> The improved efficiency makes industrial-scale production of 
                modified proteins economically viable. Less ncAA material is wasted, evolved strains are 
                ready for use, and production costs are significantly reduced.
              </p>
              <p className="leading-relaxed">
                <strong>For therapeutics:</strong> Site-specific modification of proteins (for ADCs, PEGylation, 
                labeling) can now be achieved at practical yields, enabling next-generation biologics with 
                improved homogeneity and therapeutic indices.
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
                <h4 className="font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">Full Publication</h4>
                <p className="text-sm text-slate-500">Nature, November 2025</p>
              </a>
              <a 
                href="https://transfer.ethz.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-slate-200 hover:border-emerald-200 hover:bg-emerald-50/50 transition-colors group"
              >
                <h4 className="font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">ETH Transfer</h4>
                <p className="text-sm text-slate-500">Licensing information</p>
              </a>
            </div>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-slate-400">
            Technology reference: 2024-108 | ETH Zurich
          </p>
        </div>
      </footer>
    </main>
  )
}
