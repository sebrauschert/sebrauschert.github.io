import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Resume from './components/Resume';
import portrait from './assets/portrait.jpeg';
import background from './assets/background.png';
import contact from './assets/contact.png';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentBackground, setCurrentBackground] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'contact') {
              setCurrentBackground('contact');
            } else {
              setCurrentBackground('home');
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Resume', id: 'resume' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-[#2E3440] text-[#ECEFF4]">
      {/* Fixed Background Container */}
      <div className="fixed inset-0 z-0">
        <AnimatePresence mode="wait">
          {currentBackground === 'home' ? (
            <motion.div
              key="home-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <img 
                src={background} 
                alt="" 
                className="w-full h-full object-cover object-bottom opacity-20"
              />
              <div className="absolute inset-0 bg-[#2E3440] mix-blend-color opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#88C0D0]/10 to-[#5E81AC]/10" />
            </motion.div>
          ) : (
            <motion.div
              key="contact-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <img 
                src={contact} 
                alt="" 
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-[#2E3440] mix-blend-color opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#88C0D0]/10 to-[#5E81AC]/10" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation and rest of the content */}
      <div className="relative z-10">
        {/* Floating Navigation */}
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-2xl px-4"
        >
          <motion.div 
            className="bg-[#3B4252]/80 backdrop-blur-lg shadow-lg overflow-hidden"
            initial={{ borderRadius: "9999px" }}
            animate={{ 
              borderRadius: isMenuOpen ? "1.5rem" : "9999px"
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
          >
            {/* Mobile Menu Button */}
            <div className="md:hidden flex justify-between items-center px-4 py-3">
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
            <ul className="hidden md:flex space-x-8 px-6 py-3">
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
              animate={{ 
                height: isMenuOpen ? 'auto' : 0,
                opacity: isMenuOpen ? 1 : 0
              }}
              className="md:hidden overflow-hidden"
            >
              <ul className="px-4 pb-4 space-y-2">
                {navigation.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        setActiveSection(item.id);
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                        setIsMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm font-medium rounded-xl transition-colors ${
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
          </motion.div>
        </motion.nav>

        {/* Content Sections */}
        <motion.div className="relative">
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left max-w-6xl mx-auto"
              >
                <motion.h1 
                  className="text-7xl md:text-8xl font-bold mb-6 text-[#BF616A] whitespace-nowrap overflow-visible"
                >
                  Sebastian Rauschert
                </motion.h1>
                <p className="text-xl md:text-2xl mb-4 text-[#88C0D0]">
                  Principal Data Scientist at{" "}
                  <a 
                    href="https://insigene.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[#81A1C1] transition-colors underline decoration-[#88C0D0]/30 hover:decoration-[#81A1C1]"
                  >
                    INSiGENe
                  </a>
                </p>
                <p className="text-lg text-[#D8DEE9] mb-8 max-w-3xl">
                  Technical leader with 12+ years in data science, computational biology, and machine learning. 
                  Specializing in fit-for-purpose solutions for business optimization and scientific discovery. 
                  Expert in leading cross-functional teams and bridging research with stakeholder needs through reproducible, production-ready solutions.
                </p>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
                >
                  <a href="#contact" className="inline-block bg-[#88C0D0] hover:bg-[#81A1C1] text-[#2E3440] font-medium px-6 py-3 rounded-full transition-colors">
                    Get in Touch
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Projects Section */}
          <motion.section 
            id="projects" 
            className="min-h-screen"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Projects />
          </motion.section>

          {/* Resume Section */}
          <motion.section 
            id="resume" 
            className="min-h-screen"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Resume />
          </motion.section>

          {/* Blog Section */}
          <motion.section 
            id="blog" 
            className="min-h-screen"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Blog />
          </motion.section>

          {/* Contact Section */}
          <motion.section 
            id="contact" 
            className="min-h-screen"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Contact />
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
