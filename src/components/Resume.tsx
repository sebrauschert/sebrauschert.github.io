import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: "Principal Data Scientist, Business Development Manager and Consultant",
    company: "INSiGENe Pty Ltd",
    period: "April 2024 - Present",
    description: [
      "Led the creation and automation of 5+ analytical workflows, streamlining client data analytics and improving processing efficiency by 40%",
      "Established large language model functionality in workflows, improving information retrieval from documents and scientific publications by 25%",
      "Guided software engineering efforts to implement fully reproducible processing of client data in proprietary DecipherC2C platform",
      "Created and authored 'Byte-Sized Breakdowns', a technical newsletter combining data science insights with practical GitHub tutorials"
    ],
    technologies: ["R", "Python", "Machine Learning", "LLMs", "Reproducible Research", "Technical Leadership"]
  },
  {
    title: "Manager, Research Computational Biology",
    company: "Minderoo Foundation",
    period: "August 2021 - April 2024",
    description: [
      "Set up and spearheaded the computational biology unit of the OceanOmics project, leading to robust identification of over 500 species through environmental DNA analysis via reproducible and automated pipeline",
      "Scaled the computational biology team from 1 to 5 data scientists and bioinformatics staff, mentoring junior team members to become proficient in analyzing data and setting up reproducible workflows",
      "Led implementation of machine learning models that improved genomic prediction accuracy by up to 89%, directly contributing to global conservation efforts",
      "Developed and integrated a large language model chatbot into the eDNA dashboard, providing an accessible interface for stakeholders to interact with research data"
    ],
    technologies: ["Computational Biology", "Machine Learning", "Team Leadership", "R", "Python", "LLMs", "eDNA Analysis"]
  },
  {
    title: "Computational Biologist",
    company: "Telethon Kids Institute",
    period: "December 2019 - August 2021",
    description: [
      "Developed varppRule, an interpretable machine learning model that augments rare disease diagnosis by analyzing patient genomics and publicly available tissue expression data",
      "Created a centralized data repository for the team, streamlining access to key datasets and reducing analysis time by 40% via pre-processed workflow integration",
      "Automated and updated analytical workflows from in-house to integrating a best practice pipeline for large genomic data sets, increasing analysis speed by 60% and boosting reproducibility (Encode Pipeline Setup)"
    ],
    technologies: ["Machine Learning", "Genomics", "Python", "R", "Data Integration", "Pipeline Development", "Rare Disease Analysis"]
  },
  {
    title: "Bioinformatician",
    company: "Telethon Kids Institute",
    period: "February 2018 - December 2019",
    description: [
      "Built and deployed automated pipelines that reduced manual data processing time by 60%, enabling less technical staff to execute complex analytical processing of in-house generated data sets",
      "Led a project utilizing machine learning to identify genetic markers for disease risk, contributing to the discovery of actionable insights in pediatric health",
      "Secured 20k+ in research grants through collaborative work on the genomics project of the European Union funded LifeCycle project, contributing to software and Whitepaper development"
    ],
    technologies: ["Bioinformatics", "Pipeline Automation", "Machine Learning", "Genomics", "R", "Python", "Grant Writing"]
  }
];

const education: Education[] = [
  {
    degree: "PhD in Human Biology",
    institution: "Ludwig-Maximilians-University, Munich",
    period: "November 2013 - November 2017",
    description: "Specialized in bioinformatics and computational biology, focusing on large-scale omics data analysis (metabolomics). Applied advanced computational methods to analyze and interpret complex biological datasets, developing reproducible workflows for high-throughput data processing."
  },
  // Add more education here
];

const skills = {
  "Programming Languages": ["R", "Python", "SQL", "Bash/Shell"],
  "Data Science": ["Statistical Analysis", "Machine Learning", "Data Visualization", "Reproducible Research"],
  "Tools & Technologies": ["Docker", "Git", "Conda", "High-Performance Computing"],
  "Databases": ["PostgreSQL", "MongoDB", "SQLite"],
  "Other": ["Technical Writing", "Project Management", "Team Leadership"]
};

export default function Resume() {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.h2 
        className="text-3xl font-bold text-[#88C0D0] text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Professional Experience
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content - Experience & Education */}
        <div className="lg:col-span-2 space-y-12">
          {/* Experience Section */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-[#3B4252] p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#88C0D0]">{exp.title}</h3>
                    <p className="text-[#D8DEE9]">{exp.company}</p>
                  </div>
                  <span className="text-[#81A1C1]">{exp.period}</span>
                </div>
                <ul className="list-none space-y-2 text-[#E5E9F0] mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="pl-5 relative">
                      <span className="absolute left-0">•</span>
                      <span className="inline-block pl-2">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 text-sm bg-[#4C566A] rounded-full text-[#D8DEE9]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#88C0D0]">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-[#3B4252] p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-[#88C0D0]">{edu.degree}</h4>
                      <p className="text-[#D8DEE9]">{edu.institution}</p>
                    </div>
                    <span className="text-[#81A1C1]">{edu.period}</span>
                  </div>
                  <p className="text-[#E5E9F0]">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Skills */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <motion.div
              className="bg-[#3B4252] p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-[#88C0D0]">Skills</h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h4 className="text-lg font-semibold text-[#81A1C1] mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-sm bg-[#4C566A] rounded-full text-[#D8DEE9]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Download Resume Button */}
            <motion.a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#88C0D0] hover:bg-[#81A1C1] text-[#2E3440] font-medium px-6 py-3 rounded-full transition-colors w-full text-center flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              Download Resume
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
} 