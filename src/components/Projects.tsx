import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Genomic Data Analysis Pipeline",
    description: "Developed an automated pipeline for processing and analyzing large-scale genomic data. Implemented parallel processing techniques to handle multiple samples simultaneously, reducing processing time by 60%.",
    tags: ["R", "Bioconductor", "Parallel Computing", "Genomics", "Docker"],
    image: "https://via.placeholder.com/500x300",
    link: "https://github.com/yourusername/genomics-pipeline"
  },
  {
    title: "Environmental Data Dashboard",
    description: "Created an interactive Shiny dashboard for visualizing and analyzing environmental sensor data. Features real-time data processing, anomaly detection, and automated reporting system.",
    tags: ["R", "Shiny", "Time Series", "Machine Learning", "PostgreSQL"],
    image: "https://via.placeholder.com/500x300",
    link: "https://github.com/yourusername/env-dashboard"
  },
  {
    title: "Clinical Trial Data Analysis",
    description: "Built a comprehensive analysis toolkit for clinical trial data, including automated statistical testing, survival analysis, and publication-ready visualizations using R and Python.",
    tags: ["R", "Python", "Statistics", "Survival Analysis", "ggplot2"],
    image: "https://via.placeholder.com/500x300",
    link: "https://github.com/yourusername/clinical-trials"
  },
  {
    title: "ML Model Deployment Framework",
    description: "Developed a framework for deploying machine learning models in production. Includes model versioning, A/B testing capabilities, and automated performance monitoring.",
    tags: ["Python", "Docker", "MLflow", "FastAPI", "PostgreSQL"],
    image: "https://via.placeholder.com/500x300",
    link: "https://github.com/yourusername/ml-deployment"
  },
  {
    title: "Automated Report Generation System",
    description: "Created a system for generating automated research reports using R Markdown and Python. Includes data validation, statistical analysis, and customizable visualization templates.",
    tags: ["R Markdown", "Python", "LaTeX", "Git", "CI/CD"],
    image: "https://via.placeholder.com/500x300",
    link: "https://github.com/yourusername/auto-reports"
  },
  {
    title: "Biomarker Discovery Pipeline",
    description: "Implemented a machine learning pipeline for identifying potential biomarkers from high-dimensional biological data. Includes feature selection, cross-validation, and biological pathway analysis.",
    tags: ["R", "Machine Learning", "Bioinformatics", "Statistics"],
    image: "https://via.placeholder.com/500x300",
    link: "https://github.com/yourusername/biomarker-discovery"
  },
  {
    title: "Real-time Data Processing System",
    description: "Developed a system for processing and analyzing streaming sensor data in real-time. Includes automated quality control, anomaly detection, and alert generation.",
    tags: ["Python", "Kafka", "Docker", "Time Series", "MongoDB"],
    image: "https://via.placeholder.com/500x300",
    link: "https://github.com/yourusername/realtime-processing"
  },
  {
    title: "Statistical Analysis Package",
    description: "Created an R package implementing novel statistical methods for analyzing complex experimental designs. Includes comprehensive documentation and vignettes.",
    tags: ["R", "Package Development", "Statistics", "Unit Testing"],
    image: "https://via.placeholder.com/500x300",
    link: "https://github.com/yourusername/stats-package"
  },
  {
    title: "Data Quality Control Framework",
    description: "Built a comprehensive framework for automated data quality assessment and cleaning. Includes customizable validation rules and detailed quality reports.",
    tags: ["Python", "pandas", "SQL", "Data Validation"],
    image: "https://via.placeholder.com/500x300",
    link: "https://github.com/yourusername/data-quality"
  },
  {
    title: "Meta-analysis Toolkit",
    description: "Developed tools for conducting systematic reviews and meta-analyses of research literature. Includes effect size calculation, forest plots, and publication bias assessment.",
    tags: ["R", "Meta-analysis", "Statistics", "Visualization"],
    image: "https://via.placeholder.com/500x300",
    link: "https://github.com/yourusername/meta-analysis"
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
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-[#3B4252] p-6 rounded-lg shadow-lg group"
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
            
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#88C0D0] hover:text-[#81A1C1] transition-colors"
            >
              View Project
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
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 