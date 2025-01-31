import { motion } from 'framer-motion';

interface ProjectPageProps {
  project: {
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
  };
  onBack: () => void;
}

export default function ProjectPage({ project, onBack }: ProjectPageProps) {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.button
        onClick={onBack}
        className="mb-8 flex items-center text-[#88C0D0] hover:text-[#81A1C1] transition-colors"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <svg 
          className="w-4 h-4 mr-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 19l-7-7m0 0l7-7m-7 7h18" 
          />
        </svg>
        Back to Projects
      </motion.button>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-8">
          <motion.img 
            src={project.image} 
            alt={project.title}
            className="w-full h-[400px] object-cover rounded-lg shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-3xl font-bold text-[#88C0D0] mb-4">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-sm bg-[#4C566A] rounded-full text-[#E5E9F0]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[#D8DEE9] mb-8">{project.description}</p>

            {project.longDescription && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#88C0D0] mb-4">Overview</h2>
                <p className="text-[#D8DEE9]">{project.longDescription}</p>
              </div>
            )}

            {project.challenges && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#88C0D0] mb-4">Challenges</h2>
                <ul className="list-none space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="text-[#D8DEE9] pl-5 relative">
                      <span className="absolute left-0">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.solutions && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#88C0D0] mb-4">Solutions</h2>
                <ul className="list-none space-y-2">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="text-[#D8DEE9] pl-5 relative">
                      <span className="absolute left-0">•</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.impact && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#88C0D0] mb-4">Impact</h2>
                <ul className="list-none space-y-2">
                  {project.impact.map((item, index) => (
                    <li key={index} className="text-[#D8DEE9] pl-5 relative">
                      <span className="absolute left-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.technologies && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#88C0D0] mb-4">Technologies Used</h2>
                <div className="space-y-4">
                  {project.technologies.map((tech, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold text-[#81A1C1] mb-2">{tech.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {tech.items.map((item, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-sm bg-[#4C566A] rounded-full text-[#D8DEE9]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#88C0D0] hover:bg-[#81A1C1] text-[#2E3440] font-medium px-6 py-3 rounded-full transition-colors mt-8"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
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
          </motion.a>
        </motion.div>
      </motion.article>
    </div>
  );
} 