import { motion } from 'framer-motion';
import { useState } from 'react';
import BlogPost from './BlogPost';

interface BlogEntry {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
}

const blogPosts: BlogEntry[] = [
  {
    id: "reproducible-research-2024",
    title: "The State of Reproducible Research in 2024",
    excerpt: "An in-depth look at how modern tools and practices are shaping the landscape of reproducible research in data science. From containerization to automated pipelines, discover the essential practices for ensuring your research is truly reproducible.",
    date: "March 15, 2024",
    readTime: "8 min read",
    tags: ["Reproducibility", "Best Practices", "Docker", "Git"],
    image: "https://via.placeholder.com/800x400"
  },
  {
    id: "r-python-integration",
    title: "Seamlessly Integrating R and Python in Data Science Workflows",
    excerpt: "Learn how to leverage the best of both worlds by combining R and Python in your data science projects. We'll explore practical examples using reticulate, rpy2, and modern workflow management tools.",
    date: "March 1, 2024",
    readTime: "6 min read",
    tags: ["R", "Python", "Integration", "Workflows"],
    image: "https://via.placeholder.com/800x400"
  },
  {
    id: "automated-reporting",
    title: "Building Automated Scientific Reports with R Markdown",
    excerpt: "Discover how to create automated, reproducible scientific reports using R Markdown. From data analysis to publication-ready documents, learn the best practices for scientific communication.",
    date: "February 15, 2024",
    readTime: "10 min read",
    tags: ["R Markdown", "Scientific Writing", "Automation"],
    image: "https://via.placeholder.com/800x400"
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  if (selectedPost) {
    const post = blogPosts.find(p => p.id === selectedPost);
    if (post) {
      return <BlogPost post={post} onBack={() => setSelectedPost(null)} />;
    }
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.h2 
        className="text-3xl font-bold text-[#88C0D0] text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Latest Insights
      </motion.h2>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-[#3B4252] p-6 rounded-lg shadow-lg group cursor-pointer"
            onClick={() => setSelectedPost(post.id)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover transform transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E3440] to-transparent opacity-0 group-hover:opacity-70 transition-opacity" />
            </div>

            <div className="flex items-center space-x-2 text-sm text-[#D8DEE9] mb-2">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <h3 className="text-xl font-bold mb-2 text-[#88C0D0] group-hover:text-[#81A1C1] transition-colors">
              {post.title}
            </h3>
            
            <p className="text-[#D8DEE9] mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-sm bg-[#4C566A] rounded-full text-[#E5E9F0]"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="text-[#88C0D0] hover:text-[#81A1C1] transition-colors inline-flex items-center">
              Read More
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
      </div>
    </div>
  );
} 