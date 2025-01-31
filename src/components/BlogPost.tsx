import { motion } from 'framer-motion';

interface BlogEntry {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
}

interface BlogPostProps {
  post: BlogEntry;
  onBack: () => void;
}

export default function BlogPost({ post, onBack }: BlogPostProps) {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.button
        onClick={onBack}
        className="mb-8 flex items-center text-primary hover:text-primary/80 transition-colors"
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
        Back to Blog
      </motion.button>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-8">
          <motion.img 
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          />
        </div>

        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {post.title}
        </motion.h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-sm bg-gray-700 rounded-full text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Example blog content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="lead">{post.excerpt}</p>
          
          <h2>Introduction</h2>
          <p>
            In the ever-evolving landscape of data science, maintaining reproducible research has become more critical than ever. 
            This article explores the current state of reproducible research and provides practical guidelines for implementing 
            robust reproducibility practices in your work.
          </p>

          <h2>Key Components of Reproducible Research</h2>
          <ul>
            <li>Version Control and Documentation</li>
            <li>Environment Management</li>
            <li>Data Pipeline Automation</li>
            <li>Automated Testing and Validation</li>
          </ul>

          <h2>Best Practices and Tools</h2>
          <p>
            Modern tools have made it easier than ever to ensure your research is reproducible. Here are some essential 
            practices and tools that every data scientist should consider:
          </p>

          <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">
              {`# Example R code for reproducible analysis
library(tidyverse)
library(renv)  # For dependency management

# Initialize project environment
renv::init()

# Load and process data
data <- read_csv("data/raw/dataset.csv") %>%
  clean_data() %>%
  prepare_analysis()`}
            </code>
          </pre>

          <h2>Conclusion</h2>
          <p>
            Implementing reproducible research practices may require initial investment in time and resources, but the long-term 
            benefits far outweigh the costs. By following these guidelines and utilizing modern tools, you can ensure your 
            research stands the test of time and scrutiny.
          </p>
        </div>
      </motion.article>
    </div>
  );
} 