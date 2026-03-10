import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { TemplateHeroSection } from "@/components/template/hero-section"
import { TemplateTechnologySection } from "@/components/template/technology-section"
import { TemplateAdvantagesSection } from "@/components/template/advantages-section"
import { TemplateApplicationsSection } from "@/components/template/applications-section"
import { TemplateContactSection } from "@/components/template/contact-section"
import { 
  Zap, 
  Shield, 
  Clock, 
  Target, 
  DollarSign, 
  Leaf,
  Building2,
  Microscope,
  Factory,
  HeartPulse
} from "lucide-react"

export const metadata = {
  title: "Technology Template | Tech Transfer",
  description: "A template page for showcasing breakthrough technologies available for licensing.",
}

// Example data - replace with actual technology data
const heroData = {
  institution: "Research Institution",
  badge: "Innovation",
  title: "Technology name,",
  titleHighlight: "reimagined.",
  description: "A breakthrough technology that addresses a critical need with superior performance, efficiency, and cost-effectiveness compared to existing solutions.",
  metrics: [
    { value: "10x", label: "Performance gain" },
    { value: "50%", label: "Cost reduction" },
    { value: "<1hr", label: "Processing time" },
    { value: "99.9%", label: "Accuracy" },
  ],
  technicalDetailsLink: "/template/deep-dive",
  accentColor: "teal",
}

const technologyData = {
  title: "The technology",
  subtitle: "A novel approach that combines multiple innovations to solve a persistent industry challenge.",
  whatIsIt: {
    title: "What is it?",
    paragraphs: [
      "This technology represents a fundamental shift in how we approach [problem domain]. By combining [key innovation 1] with [key innovation 2], we achieve results that were previously impossible with conventional methods.",
      "The system works by [brief mechanism explanation]. This enables [key capability] while maintaining [important constraint], opening new possibilities for [application area].",
    ],
  },
  coreComponents: [
    { name: "Component A", description: "Primary functional element that enables core capability" },
    { name: "Component B", description: "Supporting structure that provides stability and efficiency" },
    { name: "Component C", description: "Control system for precision and reproducibility" },
    { name: "Component D", description: "Interface layer for integration with existing systems" },
  ],
  existingMethods: [
    {
      name: "Traditional Method A",
      description: "The most common approach used by 60% of the industry today.",
      limitations: [
        "Slow processing speed limits throughput",
        "High energy consumption increases costs",
        "Requires skilled operators",
        "Maintenance-intensive equipment",
      ],
    },
    {
      name: "Alternative Method B",
      description: "A newer approach that addresses some limitations of Method A.",
      limitations: [
        "High capital cost limits adoption",
        "Complex setup and calibration",
        "Limited scalability",
        "Inconsistent results in variable conditions",
      ],
    },
    {
      name: "Emerging Method C",
      description: "Research-stage technology with promising early results.",
      limitations: [
        "Not yet commercially viable",
        "Unproven long-term reliability",
        "Requires specialized materials",
        "Regulatory pathway unclear",
      ],
    },
  ],
  comparisonTable: [
    { feature: "Processing speed", ours: "10x faster", others: "Baseline" },
    { feature: "Energy efficiency", ours: "90% reduction", others: "High consumption" },
    { feature: "Accuracy", ours: "99.9%", others: "95-98%" },
    { feature: "Maintenance", ours: "Annual", others: "Monthly" },
    { feature: "Scalability", ours: "Modular", others: "Limited" },
    { feature: "Operating cost", ours: "50% lower", others: "Baseline" },
  ],
  accentColor: "teal",
}

const advantagesData = {
  title: "Key advantages",
  subtitle: "Addressing fundamental limitations through innovative design and novel materials.",
  advantages: [
    {
      icon: Zap,
      title: "High Performance",
      description: "Achieves 10x improvement over existing solutions through innovative mechanism design.",
      metric: "10x",
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Reduces total cost of ownership by 50% through lower energy and maintenance requirements.",
      metric: "50%",
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Completes operations in under 1 hour compared to days with traditional methods.",
      metric: "<1hr",
    },
    {
      icon: Target,
      title: "High Precision",
      description: "Achieves 99.9% accuracy through advanced control systems and feedback loops.",
      metric: "99.9%",
    },
    {
      icon: Shield,
      title: "Reliable Operation",
      description: "Maintains consistent performance across varying conditions with minimal drift.",
      metric: "Stable",
    },
    {
      icon: Leaf,
      title: "Sustainable",
      description: "Reduces environmental footprint by 80% compared to conventional alternatives.",
      metric: "80%",
    },
  ],
  accentColor: "teal",
}

const applicationsData = {
  title: "Applications",
  subtitle: "Transforming multiple industries with superior performance and economics.",
  applications: [
    {
      id: "industry-a",
      icon: Factory,
      title: "Manufacturing",
      currentMethod: {
        name: "Conventional manufacturing process",
        description: "Standard industrial process that has been used for decades with incremental improvements.",
        limitations: [
          "High energy consumption limits profitability",
          "Batch processing creates bottlenecks",
          "Quality variations between batches",
          "Significant waste generation",
        ],
      },
      improvement: {
        description: "Continuous processing with real-time quality control enables 24/7 operation with consistent output quality. Energy requirements reduced by 70% through innovative process design.",
        benefits: [
          "Continuous operation eliminates batch delays",
          "Real-time monitoring ensures consistent quality",
          "Waste reduction through precision control",
        ],
      },
      economics: {
        marketSize: "$5.2B",
        marketContext: "Target market segment (2024)",
        costReduction: "45%",
        costContext: "Manufacturing cost reduction",
        roi: "Typical payback period of 18-24 months based on energy and labor savings alone.",
      },
    },
    {
      id: "industry-b",
      icon: HeartPulse,
      title: "Healthcare",
      currentMethod: {
        name: "Standard diagnostic approach",
        description: "Laboratory-based testing requiring sample transport and skilled technicians.",
        limitations: [
          "Long turnaround times delay treatment",
          "Requires specialized laboratory infrastructure",
          "High cost per test limits accessibility",
          "Sample degradation affects accuracy",
        ],
      },
      improvement: {
        description: "Point-of-care testing with results in minutes enables immediate treatment decisions. Simplified operation removes the need for specialized training.",
        benefits: [
          "Results in minutes instead of days",
          "No specialized training required",
          "Lower cost enables broader screening",
        ],
      },
      economics: {
        marketSize: "$8.7B",
        marketContext: "Point-of-care diagnostics market (2024)",
        costReduction: "60%",
        costContext: "Cost per test reduction",
        roi: "Healthcare systems report 30% reduction in treatment costs through earlier intervention.",
      },
    },
    {
      id: "industry-c",
      icon: Microscope,
      title: "Research",
      currentMethod: {
        name: "Traditional research methodology",
        description: "Labor-intensive approaches requiring significant time and expertise.",
        limitations: [
          "Slow iteration cycles limit discoveries",
          "High cost restricts experiment scope",
          "Reproducibility challenges",
          "Limited throughput per researcher",
        ],
      },
      improvement: {
        description: "Automated high-throughput capability enables exploration of parameter spaces that were previously impractical. Built-in data capture ensures reproducibility.",
        benefits: [
          "100x increase in experimental throughput",
          "Automated data capture and analysis",
          "Perfect reproducibility through digital protocols",
        ],
      },
      economics: {
        marketSize: "$3.1B",
        marketContext: "Research instrumentation market (2024)",
        costReduction: "70%",
        costContext: "Cost per experiment reduction",
        roi: "Research institutions report 5x increase in publication output per researcher.",
      },
    },
    {
      id: "industry-d",
      icon: Building2,
      title: "Infrastructure",
      currentMethod: {
        name: "Periodic inspection and maintenance",
        description: "Scheduled maintenance based on time intervals rather than actual condition.",
        limitations: [
          "Unexpected failures cause costly downtime",
          "Over-maintenance wastes resources",
          "Limited visibility into actual conditions",
          "Reactive rather than proactive approach",
        ],
      },
      improvement: {
        description: "Continuous monitoring with predictive analytics enables maintenance exactly when needed. Early warning of developing issues prevents catastrophic failures.",
        benefits: [
          "Predict failures weeks in advance",
          "Optimize maintenance scheduling",
          "Reduce emergency repairs by 90%",
        ],
      },
      economics: {
        marketSize: "$12.4B",
        marketContext: "Predictive maintenance market (2024)",
        costReduction: "35%",
        costContext: "Maintenance cost reduction",
        roi: "Infrastructure operators report ROI of 300-500% within first year of deployment.",
      },
    },
  ],
  accentColor: "teal",
}

const contactData = {
  inventors: [
    {
      name: "Dr. Jane Smith",
      role: "Principal Investigator",
      affiliation: "Professor, Department of Engineering",
      initials: "JS",
      bio: "Dr. Smith leads the research group that developed this technology. Her work spans materials science, process engineering, and industrial applications. Previously at Stanford and MIT.",
      credentials: [
        { icon: "award" as const, text: "National Science Award for Innovation" },
        { icon: "book" as const, text: "PhD Stanford, Postdoc MIT" },
      ],
      profileUrl: "https://example.com/profile/smith",
    },
    {
      name: "Dr. John Doe",
      role: "Co-Inventor & Lead Researcher",
      affiliation: "Senior Research Scientist",
      initials: "JD",
      bio: "Dr. Doe developed the core technology and led the experimental validation. His expertise in process optimization was crucial to achieving commercial-ready performance.",
      credentials: [
        { icon: "book" as const, text: "PhD Cambridge, Research Fellow" },
      ],
      profileUrl: "https://example.com/profile/doe",
    },
  ],
  coAuthors: ["Alice Johnson", "Bob Williams", "Carol Brown", "David Lee"],
  pressArticles: [
    {
      source: "Tech News",
      title: "Breakthrough technology promises to transform industry",
      url: "https://example.com/article1",
      date: "January 2024",
    },
    {
      source: "Science Daily",
      title: "Researchers achieve 10x performance improvement",
      url: "https://example.com/article2",
      date: "December 2023",
    },
    {
      source: "Industry Journal",
      title: "New approach could cut costs by half",
      url: "https://example.com/article3",
      date: "November 2023",
    },
  ],
  techReadinessLevel: 5,
  ipStatus: "Patent pending (PCT filed)",
  reference: "TECH-2024-001",
  marketSize: "~$15B annually",
  contactEmail: "licensing@example.com",
  contactLabel: "Contact for Licensing",
  technicalDetailsLink: "/template/deep-dive",
  accentColor: "teal",
}

export default function TemplatePage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <TemplateHeroSection {...heroData} />
      <TemplateTechnologySection {...technologyData} />
      <TemplateAdvantagesSection {...advantagesData} />
      <TemplateApplicationsSection {...applicationsData} />
      <TemplateContactSection {...contactData} />
      <Footer />
    </main>
  )
}
