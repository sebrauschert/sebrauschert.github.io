import { motion } from 'framer-motion';
import { useState } from 'react';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Resume', id: 'resume' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-[#2E3440] text-[#ECEFF4]">
      {/* Floating Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-2xl px-4"
      >
        <div className="bg-[#3B4252]/80 backdrop-blur-lg rounded-full px-3 py-2 md:px-6 md:py-3 shadow-lg">
          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-between items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#D8DEE9] p-2"
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            <span className="text-[#ECEFF4] font-medium">Menu</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setActiveSection(item.id);
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${
                    activeSection === item.id ? 'text-[#ECEFF4]' : 'text-[#D8DEE9] hover:text-[#ECEFF4]'
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-[#88C0D0]/20 rounded-full"
                      style={{ borderRadius: 9999 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation Menu */}
          <motion.div
            initial={false}
            animate={{ height: isMenuOpen ? 'auto' : 0 }}
            className="md:hidden overflow-hidden"
          >
            <ul className="pt-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveSection(item.id);
                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      activeSection === item.id 
                        ? 'bg-[#88C0D0]/20 text-[#ECEFF4]' 
                        : 'text-[#D8DEE9] hover:bg-[#88C0D0]/10 hover:text-[#ECEFF4]'
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#88C0D0]/20 to-[#5E81AC]/20 opacity-50" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-4"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#88C0D0] to-[#5E81AC] bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            Sebastian Rauschert
          </motion.h1>
          <p className="text-xl md:text-2xl text-[#E5E9F0] mb-4">
            Principal Data Scientist at INSiGENe
          </p>
          <p className="text-lg text-[#D8DEE9] mb-8 max-w-3xl mx-auto">
            Technical leader with 12+ years in data science, computational biology, and machine learning. 
            Specializing in fit-for-purpose solutions for business optimization and scientific discovery. 
            Expert in leading cross-functional teams and bridging research with stakeholder needs through reproducible, production-ready solutions.
          </p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
          >
            <a href="#contact" className="bg-[#88C0D0] hover:bg-[#81A1C1] text-[#2E3440] font-medium px-6 py-3 rounded-full transition-colors">
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-[#88C0D0]/10 rounded-full"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>

      {/* Resume Section */}
      <section id="resume" className="min-h-screen">
        <Resume />
      </section>

      {/* Blog Section */}
      <section id="blog" className="min-h-screen">
        <Blog />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </div>
  );
}

export default App;
