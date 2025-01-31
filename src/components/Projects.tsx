import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectPage from './ProjectPage';
import ednaImage from '../assets/edna.png';
import varppLogo from '../assets/varpp-logo.png';

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
    title: "ENCODE RNA-seq Pipeline @ TKI",
    description: "Implemented and customized the ENCODE RNA-seq pipeline at Telethon Kids Institute using DataLad for reproducible analysis. Created a modular architecture with automated setup and execution scripts.",
    tags: ["DataLad", "RNA-seq", "Singularity", "Bioinformatics", "Pipeline Development"],
    image: "https://via.placeholder.com/500x300",
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
        {projects.slice(0, 3).map((project, index) => (
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