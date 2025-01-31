import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Programming Languages
  { name: "R", level: 95, category: "Programming Languages" },
  { name: "Python", level: 85, category: "Programming Languages" },
  { name: "SQL", level: 85, category: "Programming Languages" },
  { name: "Bash/Shell", level: 80, category: "Programming Languages" },

  // Data Science & ML
  { name: "Statistical Analysis", level: 90, category: "Data Science & ML" },
  { name: "Machine Learning", level: 85, category: "Data Science & ML" },
  { name: "Data Visualization", level: 90, category: "Data Science & ML" },
  { name: "Predictive Modeling", level: 85, category: "Data Science & ML" },

  // Tools & Technologies
  { name: "Docker", level: 80, category: "Tools & Technologies" },
  { name: "Git", level: 85, category: "Tools & Technologies" },
  { name: "Conda", level: 85, category: "Tools & Technologies" },
  { name: "Jupyter", level: 90, category: "Tools & Technologies" },

  // R Packages
  { name: "tidyverse", level: 95, category: "R Ecosystem" },
  { name: "shiny", level: 85, category: "R Ecosystem" },
  { name: "ggplot2", level: 90, category: "R Ecosystem" },
  { name: "dplyr", level: 95, category: "R Ecosystem" },

  // Python Libraries
  { name: "pandas", level: 85, category: "Python Ecosystem" },
  { name: "scikit-learn", level: 80, category: "Python Ecosystem" },
  { name: "numpy", level: 85, category: "Python Ecosystem" },
  { name: "matplotlib", level: 80, category: "Python Ecosystem" },
];

const categories = Array.from(new Set(skills.map(skill => skill.category)));

const generateRandomPosition = (index: number, total: number) => {
  // Create a grid-like distribution
  const columns = Math.ceil(Math.sqrt(total));
  const row = Math.floor(index / columns);
  const col = index % columns;
  
  // Add some randomness to the grid positions
  const baseX = (col / columns) * 100;
  const baseY = (row / Math.ceil(total / columns)) * 100;
  
  return {
    x: baseX + (Math.random() * 20 - 10),
    y: baseY + (Math.random() * 20 - 10)
  };
};

export default function Skills() {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.h2
        className="section-title text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills & Expertise
      </motion.h2>

      <div className="mt-12 space-y-16">
        {categories.map((category, categoryIndex) => (
          <div key={category}>
            <motion.h3
              className="text-2xl font-bold mb-6 text-gray-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              {category}
            </motion.h3>

            <div className="space-y-4">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1,
                          ease: "easeOut",
                          delay: index * 0.1
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Floating skill bubbles */}
      <div className="relative mt-16 h-96 overflow-hidden rounded-lg bg-gray-800/50">
        <div className="absolute inset-0">
          {skills.map((skill, index) => {
            const pos1 = generateRandomPosition(index, skills.length);
            const pos2 = generateRandomPosition((index + 5) % skills.length, skills.length);
            const pos3 = generateRandomPosition((index + 9) % skills.length, skills.length);

            return (
              <motion.div
                key={skill.name}
                className="absolute"
                initial={{ 
                  x: `${pos1.x}%`,
                  y: `${pos1.y}%`,
                  opacity: 0
                }}
                animate={{
                  x: [
                    `${pos1.x}%`,
                    `${pos2.x}%`,
                    `${pos3.x}%`,
                    `${pos1.x}%`
                  ],
                  y: [
                    `${pos1.y}%`,
                    `${pos2.y}%`,
                    `${pos3.y}%`,
                    `${pos1.y}%`
                  ],
                  opacity: 1
                }}
                transition={{
                  duration: 20 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.2
                }}
              >
                <div 
                  className="px-3 py-1 rounded-full text-sm font-medium bg-primary/20 text-primary whitespace-nowrap"
                  style={{
                    transform: `scale(${0.8 + (skill.level / 100) * 0.4})`
                  }}
                >
                  {skill.name}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 