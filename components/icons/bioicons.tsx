"use client"

import React from "react"

interface BioIconProps {
  className?: string
  size?: number
  color?: string
  animated?: boolean
}

// DNA Double Helix
export function DNAIcon({ className, size = 24, color = "currentColor", animated = false }: BioIconProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      className={className}
      fill="none"
    >
      <style>
        {animated && `
          @keyframes dnaRotate {
            0%, 100% { transform: rotateY(0deg); }
            50% { transform: rotateY(180deg); }
          }
          .dna-strand { animation: dnaRotate 3s ease-in-out infinite; transform-origin: center; }
        `}
      </style>
      <g className={animated ? "dna-strand" : ""}>
        {/* Left strand */}
        <path 
          d="M7 2C7 2 5 6 7 8C9 10 9 14 7 16C5 18 7 22 7 22" 
          stroke={color} 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
        {/* Right strand */}
        <path 
          d="M17 2C17 2 19 6 17 8C15 10 15 14 17 16C19 18 17 22 17 22" 
          stroke={color} 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
        {/* Base pairs */}
        <line x1="8" y1="4" x2="16" y2="4" stroke={color} strokeWidth="1" opacity="0.6" />
        <line x1="6" y1="8" x2="18" y2="8" stroke={color} strokeWidth="1" opacity="0.6" />
        <line x1="8" y1="12" x2="16" y2="12" stroke={color} strokeWidth="1" opacity="0.6" />
        <line x1="6" y1="16" x2="18" y2="16" stroke={color} strokeWidth="1" opacity="0.6" />
        <line x1="8" y1="20" x2="16" y2="20" stroke={color} strokeWidth="1" opacity="0.6" />
      </g>
    </svg>
  )
}

// Cell / Eukaryotic Cell
export function CellIcon({ className, size = 24, color = "currentColor", animated = false }: BioIconProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      className={className}
      fill="none"
    >
      <style>
        {animated && `
          @keyframes cellPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          .cell-membrane { animation: cellPulse 2s ease-in-out infinite; transform-origin: center; }
        `}
      </style>
      {/* Cell membrane - irregular shape */}
      <path 
        className={animated ? "cell-membrane" : ""}
        d="M12 2C7 2 3 5 2.5 10C2 15 5 20 10 21.5C15 23 20 20 21.5 14C23 8 18 2 12 2Z" 
        stroke={color} 
        strokeWidth="1.5"
        fill={color}
        fillOpacity="0.1"
      />
      {/* Nucleus */}
      <ellipse cx="11" cy="11" rx="4" ry="3.5" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.2" />
      {/* Nucleolus */}
      <circle cx="10" cy="11" r="1.5" fill={color} fillOpacity="0.4" />
      {/* Organelles - mitochondria */}
      <ellipse cx="17" cy="9" rx="2" ry="1" stroke={color} strokeWidth="0.75" />
      <ellipse cx="6" cy="15" rx="1.5" ry="0.8" stroke={color} strokeWidth="0.75" />
      {/* ER */}
      <path d="M14 16C15 15 16 16 17 15" stroke={color} strokeWidth="0.75" strokeLinecap="round" />
    </svg>
  )
}

// Antibody / Immunoglobulin Y-shape
export function AntibodyIcon({ className, size = 24, color = "currentColor", animated = false }: BioIconProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      className={className}
      fill="none"
    >
      <style>
        {animated && `
          @keyframes antibodyWiggle {
            0%, 100% { transform: rotate(-2deg); }
            50% { transform: rotate(2deg); }
          }
          .antibody-body { animation: antibodyWiggle 1.5s ease-in-out infinite; transform-origin: center bottom; }
        `}
      </style>
      <g className={animated ? "antibody-body" : ""}>
        {/* Y shape body */}
        <path 
          d="M12 22V14M12 14L6 6M12 14L18 6" 
          stroke={color} 
          strokeWidth="2.5" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Antigen binding sites */}
        <circle cx="5" cy="5" r="2" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1" />
        <circle cx="19" cy="5" r="2" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1" />
        {/* Fc region */}
        <circle cx="12" cy="21" r="1.5" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1" />
      </g>
    </svg>
  )
}

// Molecule / Chemical Structure
export function MoleculeIcon({ className, size = 24, color = "currentColor", animated = false }: BioIconProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      className={className}
      fill="none"
    >
      <style>
        {animated && `
          @keyframes moleculeVibrate {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(0.5px, -0.5px); }
            75% { transform: translate(-0.5px, 0.5px); }
          }
          .molecule-atom { animation: moleculeVibrate 0.3s ease-in-out infinite; }
        `}
      </style>
      {/* Central atom */}
      <circle className={animated ? "molecule-atom" : ""} cx="12" cy="12" r="3" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.5" />
      {/* Bonds */}
      <line x1="12" y1="9" x2="12" y2="4" stroke={color} strokeWidth="1.5" />
      <line x1="12" y1="15" x2="12" y2="20" stroke={color} strokeWidth="1.5" />
      <line x1="9" y1="12" x2="4" y2="12" stroke={color} strokeWidth="1.5" />
      <line x1="15" y1="12" x2="20" y2="12" stroke={color} strokeWidth="1.5" />
      <line x1="14" y1="10" x2="18" y2="6" stroke={color} strokeWidth="1.5" />
      <line x1="10" y1="14" x2="6" y2="18" stroke={color} strokeWidth="1.5" />
      {/* Outer atoms */}
      <circle cx="12" cy="3" r="1.5" fill={color} />
      <circle cx="12" cy="21" r="1.5" fill={color} />
      <circle cx="3" cy="12" r="1.5" fill={color} />
      <circle cx="21" cy="12" r="1.5" fill={color} />
      <circle cx="19" cy="5" r="1.5" fill={color} />
      <circle cx="5" cy="19" r="1.5" fill={color} />
    </svg>
  )
}

// Protein / Folded Structure
export function ProteinIcon({ className, size = 24, color = "currentColor", animated = false }: BioIconProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      className={className}
      fill="none"
    >
      <style>
        {animated && `
          @keyframes proteinFold {
            0%, 100% { d: path("M4 12C4 8 6 4 10 4C14 4 14 10 12 12C10 14 10 20 14 20C18 20 20 16 20 12"); }
            50% { d: path("M4 12C4 9 7 5 10 5C13 5 13 11 12 12C11 13 11 19 14 19C17 19 20 15 20 12"); }
          }
        `}
      </style>
      {/* Alpha helix representation */}
      <path 
        d="M4 12C4 8 6 4 10 4C14 4 14 10 12 12C10 14 10 20 14 20C18 20 20 16 20 12" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round"
        fill="none"
      />
      {/* Amino acid residues */}
      <circle cx="7" cy="7" r="1.5" fill={color} fillOpacity="0.5" />
      <circle cx="12" cy="12" r="1.5" fill={color} fillOpacity="0.5" />
      <circle cx="17" cy="17" r="1.5" fill={color} fillOpacity="0.5" />
    </svg>
  )
}

// Nanotube / Carbon Structure
export function NanotubeIcon({ className, size = 24, color = "currentColor", animated = false }: BioIconProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      className={className}
      fill="none"
    >
      <style>
        {animated && `
          @keyframes electronFlow {
            0% { stroke-dashoffset: 20; }
            100% { stroke-dashoffset: 0; }
          }
          .electron-flow { stroke-dasharray: 4 2; animation: electronFlow 1s linear infinite; }
        `}
      </style>
      {/* Tube body */}
      <rect x="4" y="6" width="16" height="12" rx="6" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.1" />
      {/* Hexagonal pattern */}
      <path d="M7 9L9 8L11 9L11 11L9 12L7 11Z" stroke={color} strokeWidth="0.5" opacity="0.5" />
      <path d="M11 9L13 8L15 9L15 11L13 12L11 11Z" stroke={color} strokeWidth="0.5" opacity="0.5" />
      <path d="M9 12L11 11L13 12L13 14L11 15L9 14Z" stroke={color} strokeWidth="0.5" opacity="0.5" />
      <path d="M13 12L15 11L17 12L17 14L15 15L13 14Z" stroke={color} strokeWidth="0.5" opacity="0.5" />
      {/* End caps */}
      <ellipse cx="4" cy="12" rx="1" ry="4" fill={color} fillOpacity="0.3" />
      <ellipse cx="20" cy="12" rx="1" ry="4" fill={color} fillOpacity="0.3" />
      {/* Electron flow */}
      {animated && (
        <line className="electron-flow" x1="6" y1="12" x2="18" y2="12" stroke={color} strokeWidth="1.5" />
      )}
    </svg>
  )
}

// Receptor / Membrane Protein
export function ReceptorIcon({ className, size = 24, color = "currentColor", animated = false }: BioIconProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      className={className}
      fill="none"
    >
      <style>
        {animated && `
          @keyframes receptorBind {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-2px); }
          }
          .receptor-binding { animation: receptorBind 1.5s ease-in-out infinite; }
        `}
      </style>
      {/* Membrane */}
      <rect x="2" y="10" width="20" height="4" fill={color} fillOpacity="0.2" rx="2" />
      {/* Transmembrane domain */}
      <rect x="10" y="8" width="4" height="8" fill={color} fillOpacity="0.4" rx="1" />
      {/* Extracellular domain */}
      <path 
        className={animated ? "receptor-binding" : ""}
        d="M8 8C8 5 10 3 12 3C14 3 16 5 16 8" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round"
        fill={color}
        fillOpacity="0.2"
      />
      {/* Intracellular domain */}
      <path d="M10 16L10 20M14 16L14 20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Binding site */}
      <circle cx="12" cy="4" r="1.5" fill={color} />
    </svg>
  )
}

// Virus / Pathogen
export function VirusIcon({ className, size = 24, color = "currentColor", animated = false }: BioIconProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      className={className}
      fill="none"
    >
      <style>
        {animated && `
          @keyframes virusSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .virus-spikes { animation: virusSpin 10s linear infinite; transform-origin: center; }
        `}
      </style>
      {/* Capsid */}
      <circle cx="12" cy="12" r="6" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" />
      {/* Spike proteins */}
      <g className={animated ? "virus-spikes" : ""}>
        <line x1="12" y1="6" x2="12" y2="2" stroke={color} strokeWidth="1.5" />
        <circle cx="12" cy="2" r="1" fill={color} />
        <line x1="12" y1="18" x2="12" y2="22" stroke={color} strokeWidth="1.5" />
        <circle cx="12" cy="22" r="1" fill={color} />
        <line x1="6" y1="12" x2="2" y2="12" stroke={color} strokeWidth="1.5" />
        <circle cx="2" cy="12" r="1" fill={color} />
        <line x1="18" y1="12" x2="22" y2="12" stroke={color} strokeWidth="1.5" />
        <circle cx="22" cy="12" r="1" fill={color} />
        <line x1="8" y1="8" x2="5" y2="5" stroke={color} strokeWidth="1.5" />
        <circle cx="5" cy="5" r="1" fill={color} />
        <line x1="16" y1="8" x2="19" y2="5" stroke={color} strokeWidth="1.5" />
        <circle cx="19" cy="5" r="1" fill={color} />
        <line x1="8" y1="16" x2="5" y2="19" stroke={color} strokeWidth="1.5" />
        <circle cx="5" cy="19" r="1" fill={color} />
        <line x1="16" y1="16" x2="19" y2="19" stroke={color} strokeWidth="1.5" />
        <circle cx="19" cy="19" r="1" fill={color} />
      </g>
      {/* Genetic material */}
      <path d="M10 10C11 9 13 9 14 10C15 11 15 13 14 14C13 15 11 15 10 14C9 13 9 11 10 10" stroke={color} strokeWidth="0.75" />
    </svg>
  )
}

// Enzyme / Catalytic Site
export function EnzymeIcon({ className, size = 24, color = "currentColor", animated = false }: BioIconProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      className={className}
      fill="none"
    >
      <style>
        {animated && `
          @keyframes enzymeCatalyze {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          .enzyme-substrate { animation: enzymeCatalyze 1s ease-in-out infinite; }
        `}
      </style>
      {/* Enzyme body - irregular blob */}
      <path 
        d="M5 12C5 7 8 4 12 4C16 4 19 7 19 12C19 17 16 20 12 20C8 20 5 17 5 12Z" 
        fill={color}
        fillOpacity="0.15"
        stroke={color} 
        strokeWidth="1.5"
      />
      {/* Active site cleft */}
      <path 
        d="M9 8C10 10 10 14 9 16" 
        stroke={color} 
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Substrate */}
      <rect 
        className={animated ? "enzyme-substrate" : ""}
        x="6" 
        y="10" 
        width="4" 
        height="4" 
        rx="1" 
        fill={color}
        fillOpacity="0.5"
      />
      {/* Catalytic residues */}
      <circle cx="11" cy="10" r="1" fill={color} />
      <circle cx="11" cy="14" r="1" fill={color} />
      {/* Product */}
      <circle cx="15" cy="12" r="1.5" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="0.75" />
    </svg>
  )
}

// Sensor / Detection
export function SensorIcon({ className, size = 24, color = "currentColor", animated = false }: BioIconProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      className={className}
      fill="none"
    >
      <style>
        {animated && `
          @keyframes sensorPulse {
            0%, 100% { r: 3; opacity: 1; }
            50% { r: 5; opacity: 0.5; }
          }
          .sensor-signal { animation: sensorPulse 1.5s ease-in-out infinite; }
        `}
      </style>
      {/* Sensor chip base */}
      <rect x="4" y="14" width="16" height="6" rx="1" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" />
      {/* Electrodes */}
      <rect x="6" y="16" width="3" height="2" fill={color} />
      <rect x="10.5" y="16" width="3" height="2" fill={color} />
      <rect x="15" y="16" width="3" height="2" fill={color} />
      {/* Sensing layer */}
      <rect x="5" y="12" width="14" height="2" fill={color} fillOpacity="0.4" rx="1" />
      {/* Detection signal */}
      <circle className={animated ? "sensor-signal" : ""} cx="12" cy="8" r="3" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1" />
      {/* Signal waves */}
      <path d="M8 6C9 4 11 3 12 3C13 3 15 4 16 6" stroke={color} strokeWidth="0.75" opacity="0.5" />
      <path d="M6 4C8 2 10 1 12 1C14 1 16 2 18 4" stroke={color} strokeWidth="0.75" opacity="0.3" />
    </svg>
  )
}

// Bacteria / Prokaryote
export function BacteriaIcon({ className, size = 24, color = "currentColor", animated = false }: BioIconProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      className={className}
      fill="none"
    >
      <style>
        {animated && `
          @keyframes bacteriaWiggle {
            0%, 100% { transform: rotate(-3deg); }
            50% { transform: rotate(3deg); }
          }
          .bacteria-body { animation: bacteriaWiggle 0.5s ease-in-out infinite; transform-origin: center; }
        `}
      </style>
      <g className={animated ? "bacteria-body" : ""}>
        {/* Cell body - rod shaped */}
        <rect x="5" y="8" width="14" height="8" rx="4" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" />
        {/* Nucleoid */}
        <path d="M8 11C9 10 11 10 12 11C13 12 15 12 16 11" stroke={color} strokeWidth="1" opacity="0.6" />
        <path d="M8 13C9 14 11 14 12 13C13 12 15 12 16 13" stroke={color} strokeWidth="1" opacity="0.6" />
        {/* Flagella */}
        <path d="M5 12C3 11 2 13 1 12C0 11 1 9 2 10" stroke={color} strokeWidth="1" strokeLinecap="round" />
        <path d="M19 12C21 11 22 13 23 12" stroke={color} strokeWidth="1" strokeLinecap="round" />
        {/* Pili */}
        <line x1="7" y1="8" x2="6" y2="5" stroke={color} strokeWidth="0.75" />
        <line x1="12" y1="8" x2="12" y2="5" stroke={color} strokeWidth="0.75" />
        <line x1="17" y1="8" x2="18" y2="5" stroke={color} strokeWidth="0.75" />
      </g>
    </svg>
  )
}

// Ribosome
export function RibosomeIcon({ className, size = 24, color = "currentColor", animated = false }: BioIconProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      className={className}
      fill="none"
    >
      <style>
        {animated && `
          @keyframes ribosomeTranslate {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(2px); }
          }
          .ribosome-body { animation: ribosomeTranslate 1s ease-in-out infinite; }
        `}
      </style>
      <g className={animated ? "ribosome-body" : ""}>
        {/* Large subunit */}
        <ellipse cx="12" cy="14" rx="7" ry="5" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.5" />
        {/* Small subunit */}
        <ellipse cx="12" cy="8" rx="5" ry="3" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" />
        {/* mRNA */}
        <path d="M3 11L21 11" stroke={color} strokeWidth="1.5" strokeDasharray="2 1" />
        {/* tRNA */}
        <path d="M10 8L10 14" stroke={color} strokeWidth="1" />
        <path d="M14 8L14 14" stroke={color} strokeWidth="1" />
        {/* Amino acid */}
        <circle cx="10" cy="6" r="1" fill={color} />
        <circle cx="14" cy="6" r="1" fill={color} />
      </g>
    </svg>
  )
}

export const BioIcons = {
  DNA: DNAIcon,
  Cell: CellIcon,
  Antibody: AntibodyIcon,
  Molecule: MoleculeIcon,
  Protein: ProteinIcon,
  Nanotube: NanotubeIcon,
  Receptor: ReceptorIcon,
  Virus: VirusIcon,
  Enzyme: EnzymeIcon,
  Sensor: SensorIcon,
  Bacteria: BacteriaIcon,
  Ribosome: RibosomeIcon,
}
