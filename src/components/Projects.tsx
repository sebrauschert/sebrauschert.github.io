import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectPage from './ProjectPage';
import ednaImage from '../assets/edna.png';
import varppLogo from '../assets/varpp-logo.png';
import encodeImage from '../assets/encode.png';
import dnaSmokeLogo from '../assets/DNAsmokeR.png';
import insigeneLogo from '../assets/insigene.png';
import tkiepiLogo from '../assets/tkiepi.png';
import portalLogo from '../assets/portal.png';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  longDescription?: string;
  challenges?: string[];
  solutions?: string[];
  impact?: string[];
  technologies?: {
    category: string;
    items: string[];
  }[];
}

const projects: Project[] = [
  {
    title: "INSiGENe Client Portal (In Progress)",
    description: "Building a full-stack web application for secure file sharing and user management at INSiGENe. Features include user authentication, file management, and administrative controls, built with React, FastAPI, and PostgreSQL.",
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    image: portalLogo,
    link: "https://github.com/sebrauschert/client-portal",
    longDescription: "A comprehensive client portal that implements secure file sharing and user management for INSiGENe's consulting work. The application features a modern React frontend, FastAPI backend, and PostgreSQL database, all containerized with Docker.",
    challenges: [
      "Implementing secure file sharing and user authentication",
      "Creating an intuitive interface for file management",
      "Setting up containerized development and production environments",
      "Managing complex user permissions and access controls"
    ],
    solutions: [
      "Built JWT-based authentication system",
      "Developed responsive React interface with TypeScript",
      "Implemented Docker containerization for consistent deployment",
      "Created comprehensive monitoring and maintenance procedures"
    ],
    impact: [
      "Streamlined client file sharing process",
      "Enhanced security with role-based access control",
      "Improved system maintainability through containerization",
      "Enabled efficient user management for administrators"
    ],
    technologies: [
      {
        category: "Frontend",
        items: ["React", "TypeScript", "TailwindCSS"]
      },
      {
        category: "Backend",
        items: ["FastAPI", "Python", "PostgreSQL"]
      },
      {
        category: "DevOps",
        items: ["Docker", "Nginx", "JWT"]
      }
    ]
  },
  {
    title: "Environmental Data Dashboard",
    description: "Created an interactive Shiny dashboard for visualizing and analyzing environmental DNA data. Features a map-based interface for exploring DNA detections across a region, and a large language model chatbot for answering questions about the data.",
    tags: ["R", "Shiny", "Machine Learning", "leaflet"],
    image: ednaImage,
    link: "edna.minderoo.org",
    longDescription: "An interactive dashboard built with R Shiny that provides visualization and analysis of environmental DNA data.",
    challenges: [
      "Implementing responsive visualizations for large datasets",
      "Mapping individual DNA based detections to taxonomic cards on a map",
      "Creating an intuitive user interface"
    ],
    solutions: [
      "Optimized data processing with dplyr and data.table",
      "Implemented reactive programming patterns",
      "Led the development of custom machine learning models",
      "Created modular UI components"
    ],
    impact: [
      "Enabled interactive visualisation for stakeholders, demonstrating the power of eDNA in environmental monitoring",
      "Data decision making absed on easy exploration was sped up through the use of the dashboard in a no-code way",
      "Improved data-driven decision making enabled by the dashboard"
    ],
    technologies: [
      {
        category: "Frontend",
        items: ["R Shiny", "CSS", "JavaScript"]
      },
      {
        category: "Backend",
        items: ["R"]
      },
      {
        category: "Analytics",
        items: ["tidyverse", "leaflet"]
      }
    ]
  },
  {
    title: "insigene R Package",
    description: "Developed an R package for standardizing and streamlining consulting work at INSiGENe. Features include branded report templates, custom ggplot2 themes, and automated project setup functionality.",
    tags: ["R", "Package Development", "Quarto", "ggplot2", "Project Management"],
    image: insigeneLogo,
    link: "https://github.com/sebrauschert/insigene",
    longDescription: "A comprehensive R package that implements INSiGENe's consulting workflow standards. The package provides tools for creating branded reports, managing project structures, and maintaining consistent visual identity across analyses.",
    challenges: [
      "Creating consistent branding across different report types",
      "Implementing flexible project structure templates",
      "Developing maintainable ggplot2 themes",
      "Streamlining package management for projects"
    ],
    solutions: [
      "Built customizable Quarto templates for branded reports",
      "Created automated project directory setup with git integration",
      "Developed dark and light mode ggplot2 themes",
      "Implemented efficient package loading functionality"
    ],
    impact: [
      "Standardized consulting workflow across the company",
      "Reduced project setup time from hours to minutes",
      "Ensured consistent branding across all deliverables",
      "Improved reproducibility of consulting projects"
    ],
    technologies: [
      {
        category: "Core Technologies",
        items: ["R", "Quarto", "ggplot2"]
      },
      {
        category: "Development Tools",
        items: ["Git", "RStudio", "devtools"]
      },
      {
        category: "Documentation",
        items: ["R Markdown", "HTML", "CSS"]
      }
    ]
  },
  {
    title: "varppRule",
    description: "Developed an interpretable machine learning package for variant prioritization in rare genetic diseases. The model combines RuleFit with tissue expression data to provide human-readable rules for variant pathogenicity prediction.",
    tags: ["R", "Machine Learning", "Bioinformatics", "RuleFit", "Package Development"],
    image: varppLogo,
    link: "https://github.com/sebrauschert/varppRule",
    longDescription: "An R package implementing a novel approach to variant prioritization in rare genetic diseases. varppRule combines the interpretability of rule-based machine learning with tissue-specific expression data to create transparent, actionable predictions for genetic variants.",
    challenges: [
      "Creating interpretable predictions for complex genetic data",
      "Integrating multiple data sources (variants, tissue expression)",
      "Balancing model performance with rule interpretability",
      "Handling high-dimensional genomic data efficiently"
    ],
    solutions: [
      "Implemented RuleFit algorithm for transparent rule generation",
      "Developed custom data integration pipeline for variant and expression data",
      "Created automated report generation with detailed model statistics",
      "Built efficient parallel processing capabilities"
    ],
    impact: [
      "Enabled human-readable predictions for variant pathogenicity",
      "Improved rare disease diagnosis through interpretable ML",
      "Facilitated better understanding of variant effects across tissues",
      "Open-source contribution to the bioinformatics community"
    ],
    technologies: [
      {
        category: "Core Technologies",
        items: ["R", "RuleFit", "Machine Learning"]
      },
      {
        category: "Data Processing",
        items: ["Bioconductor", "parallel", "data.table"]
      },
      {
        category: "Documentation",
        items: ["R Markdown", "roxygen2", "knitr"]
      }
    ]
  },
  {
    title: "ENCODE RNA-seq Pipeline @ TKI",
    description: "Implemented and customized the ENCODE RNA-seq pipeline at Telethon Kids Institute using DataLad for reproducible analysis. Created a modular architecture with automated setup and execution scripts.",
    tags: ["DataLad", "RNA-seq", "Singularity", "Bioinformatics", "Pipeline Development"],
    image: encodeImage,
    link: "https://github.com/sebrauschert/encode_pipeline_tki",
    longDescription: "A comprehensive implementation of the ENCODE RNA-seq pipeline, adapted for use at Telethon Kids Institute. The project features a modular DataLad-based architecture, containerized execution environment, and automated setup scripts for reproducible analysis.",
    challenges: [
      "Setting up reproducible analysis environment across different systems",
      "Managing large-scale genomic data and indices efficiently",
      "Integrating multiple tools and dependencies",
      "Ensuring pipeline portability and ease of use"
    ],
    solutions: [
      "Implemented DataLad for version control and data management",
      "Created modular architecture for pipeline components",
      "Developed automated setup and execution scripts",
      "Built Singularity container for consistent execution"
    ],
    impact: [
      "Enabled reproducible RNA-seq analysis across the institute",
      "Reduced setup time for new analyses from days to hours",
      "Standardized RNA-seq processing workflows",
      "Facilitated collaboration through portable pipeline design"
    ],
    technologies: [
      {
        category: "Core Technologies",
        items: ["DataLad", "Singularity", "Conda"]
      },
      {
        category: "Pipeline Components",
        items: ["ENCODE RNA-seq", "Caper", "Croo"]
      },
      {
        category: "Infrastructure",
        items: ["Slurm", "Shell Scripting", "Git"]
      }
    ]
  },
  {
    title: "DNAsmokeR",
    description: "Developed an R package implementing a novel DNA methylation score for detecting fetal exposure to maternal smoking during pregnancy. The package uses machine learning methods to analyze DNA methylation data and provides interactive visualization tools.",
    tags: ["R", "Machine Learning", "Bioinformatics", "Package Development", "DNA Methylation"],
    image: dnaSmokeLogo,
    link: "https://github.com/Hobbeist/DNAsmokeR",
    longDescription: "An R package that implements a cross-continent poly-DNA methylation score for detecting fetal exposure to maternal smoking. The package includes functions for score calculation, visualization, and an interactive Shiny application for data exploration.",
    challenges: [
      "Developing accurate machine learning models for DNA methylation analysis",
      "Creating a score that works across different populations and age groups",
      "Handling large-scale methylation data efficiently",
      "Building user-friendly interfaces for complex genomic analyses"
    ],
    solutions: [
      "Implemented elastic net regression for robust score calculation",
      "Validated the model across multiple cohorts (Raine Study, NFBC1986, NFBC1966)",
      "Created efficient data processing pipelines for methylation data",
      "Developed interactive visualization tools with R Shiny"
    ],
    impact: [
      "Achieved 91% sensitivity and 76% specificity in the Raine cohort",
      "Outperformed three previously developed methylation scores",
      "Enabled biomarker detection for fetal smoke exposure",
      "Facilitated research into early life environmental impacts"
    ],
    technologies: [
      {
        category: "Core Technologies",
        items: ["R", "Machine Learning", "Statistics"]
      },
      {
        category: "Data Analysis",
        items: ["Bioconductor", "elastic net", "cross-validation"]
      },
      {
        category: "Visualization",
        items: ["R Shiny", "ggplot2", "Interactive Plots"]
      }
    ]
  },
  {
    title: "TKIepiR",
    description: "Developed a comprehensive R package for post-EWAS (Epigenome-Wide Association Study) analysis and visualization. The package streamlines DNA methylation analysis with tools for Manhattan plots, DMR detection, gene annotation, and pathway analysis.",
    tags: ["R", "Bioinformatics", "Package Development", "DNA Methylation", "EWAS"],
    image: tkiepiLogo,
    link: "https://github.com/Hobbeist/TKIepiR",
    longDescription: "An R package that implements a complete post-EWAS analysis pipeline used by the Diabetes & Obesity group at Telethon Kids Institute. It provides tools for visualizing results, finding differentially methylated regions, and performing pathway analysis.",
    challenges: [
      "Creating efficient tools for large-scale methylation data analysis",
      "Implementing robust statistical methods for DMR detection",
      "Integrating multiple analysis approaches (DMRcate, methylGSA, missMethyl)",
      "Building reproducible visualization tools for complex genomic data"
    ],
    solutions: [
      "Developed streamlined functions for CpG annotation and visualization",
      "Implemented DMRcate integration for region detection",
      "Created comprehensive pathway analysis pipeline",
      "Built publication-ready plotting functions"
    ],
    impact: [
      "Standardized post-EWAS analysis workflow at TKI",
      "Accelerated epigenetic research through automated tools",
      "Enabled reproducible methylation analysis",
      "Facilitated interpretation of complex methylation data"
    ],
    technologies: [
      {
        category: "Core Technologies",
        items: ["R", "Bioconductor", "Statistics"]
      },
      {
        category: "Analysis Tools",
        items: ["DMRcate", "methylGSA", "missMethyl"]
      },
      {
        category: "Visualization",
        items: ["ggplot2", "Manhattan Plots", "Volcano Plots"]
      }
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (selectedProject) {
    return (
      <ProjectPage 
        project={selectedProject} 
        onBack={() => setSelectedProject(null)} 
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.h2 
        className="text-3xl font-bold text-[#88C0D0] text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.slice(0, 7).map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-[#3B4252] p-6 rounded-lg shadow-lg group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover transform transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E3440] to-transparent opacity-0 group-hover:opacity-70 transition-opacity" />
            </div>
            
            <h3 className="text-xl font-bold mb-2 text-[#88C0D0]">{project.title}</h3>
            <p className="text-[#D8DEE9] mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="px-2 py-1 text-sm bg-[#4C566A] rounded-full text-[#E5E9F0]"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div 
              className="inline-flex items-center text-[#88C0D0] hover:text-[#81A1C1] transition-colors"
            >
              View Details
              <svg 
                className="w-4 h-4 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 