"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { EndoFigure1 } from "@/components/endo/figures/figure-1-endocytosis"
import { EndoFigure2 } from "@/components/endo/figures/figure-2-receptor-clustering"
import { EndoFigure3 } from "@/components/endo/figures/figure-3-adcc"
import { EndoFigure4 } from "@/components/endo/figures/figure-4-tumor-response"
import { EndoFigure5 } from "@/components/endo/figures/figure-5-clinical"
import { EndoFigure6 } from "@/components/endo/figures/figure-6-immune-memory"

function FadeIn({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true) }, { threshold: 0.05 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function EndoDeepDivePage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      {/* Sub-header */}
      <div className="py-3 px-6 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/endocytosis-inhibitors" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to overview
          </Link>
          <span className="text-xs text-slate-400">Technical Deep Dive</span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Title */}
        <FadeIn>
          <p className="text-sm font-medium text-violet-600 tracking-widest uppercase mb-4">Cell, Volume 180, Issue 5, 2020</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Endocytosis Inhibition in Humans to Improve Responses to ADCC-Mediating Antibodies
          </h1>
          <p className="mt-4 text-slate-500 text-sm leading-relaxed">
            Hui Yi Chew, Priscila O. De Lima, Jazmina L. Gonzalez Cruz, Blerida Banushi, Godwins Echejoh,
            Lingbo Hu, Shannon R. Joseph, Benedict Lum, James Rae, Jake S. O{"'"}Donnell, Lilia Merida de Long,
            Satomi Okano, Brigid King, Rachael Barry, Davide Moi, Roberta Mazzieri, Ranjeny Thomas,
            Fernando Souza-Fonseca-Guimaraes, Matthew Foote, Adam McCluskey, Phillip J. Robinson,
            Ian H. Frazer, Nicholas A. Saunders, Robert G. Parton, Riccardo Dolcetti, Katharine Cuff,
            Jennifer H. Martin, Benedict Panizza, Euan Walpole, James W. Wells, and Fiona Simpson
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://doi.org/10.1016/j.cell.2020.02.019"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-violet-600 hover:text-violet-800 font-medium"
            >
              Read full paper (Cell)
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </FadeIn>

        {/* Introduction */}
        <FadeIn>
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The big picture</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed">
                Monoclonal antibodies are one of the most important tools in modern cancer treatment.
                Drugs like cetuximab, trastuzumab (Herceptin), and avelumab work by attaching to specific
                proteins on the surface of tumor cells and recruiting the body{"'"}s immune system to destroy them.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                But there{"'"}s a fundamental problem: tumor cells don{"'"}t just sit still and wait to be attacked.
                They constantly pull their surface receptors inside through a process called
                <strong className="text-slate-800"> endocytosis</strong>. When those receptors disappear from the
                surface, the antibody drugs lose their targets and the immune cells lose their handles on the cancer.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                This paper asks a bold question: <em className="text-slate-800">what if we could temporarily stop
                tumor cells from hiding their receptors?</em> And what if we could do it using a drug that{"'"}s
                already approved and prescribed every day in hospitals around the world?
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Figure 1: Endocytosis explained */}
        <FadeIn>
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Figure 1: Understanding endocytosis
            </h2>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Endocytosis is the process by which cells swallow things from their surface.
              Imagine the cell membrane as a conveyor belt: receptors land on the surface, sit
              there briefly, and are then pulled inside in tiny bubbles called vesicles. The key
              molecular motor driving this process is <strong className="text-slate-700">dynamin</strong>,
              a protein that pinches the vesicle off from the membrane like a molecular lasso.
            </p>
            <EndoFigure1 />
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">
              The animation shows how a surface receptor (like EGFR) is normally internalized via
              clathrin-coated pits. Dynamin wraps around the neck of the forming vesicle and pinches
              it off. When dynamin is inhibited by prochlorperazine, this pinching cannot occur and
              receptors accumulate on the surface.
            </p>
          </div>
        </FadeIn>

        {/* Figure 2: Receptor clustering */}
        <FadeIn>
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Figure 2: From scattered to clustered
            </h2>
            <p className="text-slate-500 mb-6 leading-relaxed">
              The researchers discovered something critical: it{"'"}s not just about having more receptors
              on the surface, it{"'"}s about how they{"'"}re arranged. When endocytosis is blocked, receptors
              don{"'"}t just stay put - they cluster together into dense patches. This clustering is
              essential because it creates a concentrated target that immune cells can latch onto.
            </p>
            <EndoFigure2 />
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">
              The study used advanced microscopy to show that prochlorperazine treatment causes
              EGFR (and other surface receptors like HER2 and PD-L1) to form dense clusters on the
              cell membrane. This was measured both in cell cultures and in actual patient tumor
              biopsies before and after treatment.
            </p>
          </div>
        </FadeIn>

        {/* Figure 3: ADCC mechanism */}
        <FadeIn>
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Figure 3: Enhanced immune cell killing (ADCC)
            </h2>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Antibody-Dependent Cell Cytotoxicity (ADCC) is one of the most powerful weapons in
              the immune system{"'"}s arsenal. Here{"'"}s how it works: the therapeutic antibody coats the
              tumor cell by binding to surface receptors. Natural Killer (NK) cells then recognize
              the antibody coating through their Fc receptors and attach to the tumor cell to destroy it.
            </p>
            <EndoFigure3 />
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">
              The paper showed that receptor clustering creates what the authors described as a
              {"\""}zipping{"\""} effect - NK cells form exceptionally tight, sustained contacts with
              antibody-coated tumor cells, leading to dramatically more effective killing.
              This was observed with cetuximab (anti-EGFR), trastuzumab (anti-HER2), and
              avelumab (anti-PD-L1).
            </p>
          </div>
        </FadeIn>

        {/* Figure 4: Mouse tumor studies */}
        <FadeIn>
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Figure 4: Tumor response in living systems
            </h2>
            <p className="text-slate-500 mb-6 leading-relaxed">
              The real test came in mouse models of cancer. The researchers compared four groups:
              untreated mice, mice receiving only the antibody drug, mice receiving only prochlorperazine,
              and mice receiving both drugs together. The results were striking.
            </p>
            <EndoFigure4 />
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">
              In head and neck cancer models, the combination of prochlorperazine + cetuximab achieved
              complete tumor clearance in all 10 treated mice. Neither drug alone came close to this
              result. Similarly, prochlorperazine + avelumab significantly reduced tumor growth and
              metastases in other cancer models.
            </p>
          </div>
        </FadeIn>

        {/* Figure 5: Clinical data */}
        <FadeIn>
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Figure 5: First-in-human proof of concept
            </h2>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Perhaps the most remarkable part of this study is the clinical data. Five patients with
              head and neck squamous cell carcinoma volunteered for a {"\""}no benefit trial{"\""} - they
              agreed to have a tumor biopsy, receive a 20-minute IV infusion of prochlorperazine, and
              then have another biopsy. No therapeutic benefit was expected; the goal was purely to
              test whether endocytosis inhibition works in real human tumors.
            </p>
            <EndoFigure5 />
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">
              Biopsy analysis from four evaluable patients confirmed that prochlorperazine: (1) increased
              the number of EGFR molecules on the tumor surface, (2) caused receptors to cluster together,
              and (3) made the receptor distribution more uniform across all tumor cells, eliminating
              the heterogeneity problem. This was the first verified manipulation of endocytosis in humans.
            </p>
          </div>
        </FadeIn>

        {/* Figure 6: Immune memory */}
        <FadeIn>
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Figure 6: Cancer vaccination effect
            </h2>
            <p className="text-slate-500 mb-6 leading-relaxed">
              The most unexpected finding came when the researchers re-challenged the successfully
              treated mice. Four weeks after the combination therapy had cleared their tumors, the
              same cancer cells were injected again. In normal circumstances, these cells would form
              new tumors. Instead, something remarkable happened.
            </p>
            <EndoFigure6 />
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">
              The cancer was rapidly eliminated without any additional treatment. The combination
              therapy had effectively {"\""}vaccinated{"\""} the mice against their own cancer by generating
              long-term immune memory. This suggests that the enhanced ADCC doesn{"'"}t just kill tumors -
              it teaches the immune system to recognize and prevent cancer recurrence, a holy grail
              of oncology research.
            </p>
          </div>
        </FadeIn>

        {/* Why this matters */}
        <FadeIn>
          <div className="mt-16 bg-violet-50 rounded-2xl border border-violet-100 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why this matters</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Immediate clinical potential</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Prochlorperazine is already FDA-approved and manufactured at scale. Repurposing
                  it as an immunotherapy enhancer could bypass years of drug development and approval.
                  Phase 1b trials are already underway.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Platform technology</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Because every cell uses endocytosis, this approach can enhance any antibody drug
                  that works through ADCC - across different cancers and different target receptors.
                  It{"'"}s not a single-drug solution but a platform.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Overcoming resistance</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Receptor downregulation is one of the most common mechanisms of resistance to
                  antibody therapy. By forcing receptors back to the surface, this approach directly
                  addresses a key reason why treatments fail.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Beyond cancer</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The same principle of temporary endocytosis inhibition could be applied to viral
                  infections (blocking viral entry), epilepsy (managing receptor trafficking), and
                  chronic kidney disease - opening entirely new therapeutic frontiers.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Resources */}
        <FadeIn>
          <div className="mt-16 pt-8 border-t border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-4">Resources</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="https://doi.org/10.1016/j.cell.2020.02.019"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-violet-200 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center shrink-0">
                  <ExternalLink className="w-4 h-4 text-violet-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Full publication in Cell</p>
                  <p className="text-xs text-slate-400">DOI: 10.1016/j.cell.2020.02.019</p>
                </div>
              </a>
              <a
                href="https://www.nature.com/articles/s41568-023-00574-6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-violet-200 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center shrink-0">
                  <ExternalLink className="w-4 h-4 text-violet-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Endocytosis in cancer (Nature Reviews Cancer)</p>
                  <p className="text-xs text-slate-400">2023 review by the same group</p>
                </div>
              </a>
            </div>
          </div>
        </FadeIn>
      </article>
    </main>
  )
}
