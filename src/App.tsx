import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Projects from './components/Projects';
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
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-[#2E3440] text-[#ECEFF4]">
      <header className="sr-only">
        <h1>Sebastian Rauschert - Principal Data Scientist</h1>
        <p>Technical leader in data science, computational biology, and machine learning</p>
      </header>

      {/* Fixed Background Container */}
      <div className="fixed inset-0 z-0" aria-hidden="true">
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
          className="fixed top-0 md:top-6 left-0 md:left-1/2 w-full md:w-[90%] md:max-w-3xl z-50 md:transform md:-translate-x-1/2"
          role="navigation"
          aria-label="Main navigation"
        >
          <motion.div 
            className="backdrop-blur-sm"
          >
            {/* Mobile Menu Button */}
            <div className="md:hidden flex justify-end items-center px-8 py-6">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#D8DEE9] p-2 hover:text-[#88C0D0] transition-colors"
              >
                <span className="sr-only">Open menu</span>
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.svg 
                    className="h-8 w-8" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    animate={{ opacity: isMenuOpen ? 0 : 1 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </motion.svg>
                  {isMenuOpen && (
                    <motion.svg 
                      className="h-8 w-8 absolute top-0 left-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12H4" />
                    </motion.svg>
                  )}
                </motion.div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center justify-center space-x-12 h-12">
              {navigation.map((item) => (
                <li key={item.id} className="h-full flex items-center">
                  <button
                    onClick={() => {
                      setActiveSection(item.id);
                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`relative h-full px-6 flex items-center text-lg font-medium transition-colors ${
                      activeSection === item.id ? 'text-[#ECEFF4]' : 'text-[#D8DEE9] hover:text-[#ECEFF4]'
                    }`}
                  >
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-[#88C0D0]/10 rounded-full"
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
              animate={{ 
                opacity: isMenuOpen ? 1 : 0,
                height: isMenuOpen ? "auto" : 0
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut"
              }}
              className="md:hidden overflow-hidden backdrop-blur-lg"
            >
              <ul className="px-8 py-6 space-y-4">
                {navigation.map((item) => (
                  <motion.li 
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: isMenuOpen ? 0.3 : 0 }}
                  >
                    <button
                      onClick={() => {
                        setActiveSection(item.id);
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                        setIsMenuOpen(false);
                      }}
                      className={`relative w-full text-left px-6 py-3 text-xl font-medium transition-colors ${
                        activeSection === item.id 
                          ? 'text-[#ECEFF4]' 
                          : 'text-[#D8DEE9] hover:text-[#ECEFF4]'
                      }`}
                    >
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="activeSection-mobile"
                          className="absolute inset-0 bg-[#88C0D0]/10 rounded-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.nav>

        {/* Content Sections */}
        <main className="relative">
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex items-center justify-center pt-24 md:pt-0" aria-label="Introduction">
            <div className="container mx-auto px-4 z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left max-w-6xl mx-auto"
              >
                <motion.h1 
                  className="font-space-grotesk text-5xl sm:text-6xl md:text-8xl lg:text-[12rem] xl:text-[14rem] font-bold mb-4 md:mb-6 text-[#BF616A] tracking-tight leading-[0.9]"
                >
                  Sebastian<br />Rauschert
                </motion.h1>

                <p className="text-lg md:text-xl mb-4 text-[#88C0D0] flex flex-wrap items-center gap-2">
                  <span className="whitespace-nowrap">Consultant & Principal Data Scientist at</span>
                  <a 
                    href="https://insigene.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[#81A1C1] transition-colors underline decoration-[#88C0D0]/30 hover:decoration-[#81A1C1] inline-flex items-center gap-1"
                    aria-label="INSiGENe website"
                  >
                    INSiGENe
                    <svg 
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </p>

                <div className="text-base md:text-lg text-[#D8DEE9] mb-8 max-w-3xl leading-relaxed">
                  <h2 className="sr-only">About Me</h2>
                  <p>
                    Pioneering reproducible analytics in data science with a proven 12-year track record. As a technical leader, I transform complex research challenges into production-ready solutions that stand the test of time. My expertise lies in building scalable, reproducible data science frameworks that bridge the gap between cutting-edge research and practical business applications. At INSiGENe, I lead projects developing transparent, verifiable analytics solutions for computational biology and data analytics challenges. My approach combines scientific rigor with business acumen, ensuring that every analysis can be trusted, reproduced, and built upon.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4" role="navigation" aria-label="Quick actions">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 bg-[#88C0D0] hover:bg-[#81A1C1] text-[#2E3440] font-medium px-6 py-3 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
                    aria-label="Get in touch"
                  >
                    Get in Touch
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="#projects" 
                    className="inline-flex items-center gap-2 border-2 border-[#88C0D0] text-[#88C0D0] hover:bg-[#88C0D0] hover:text-[#2E3440] font-medium px-6 py-3 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
                    aria-label="View my projects"
                  >
                    View Projects
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Projects Section */}
          <section 
            id="projects" 
            className="min-h-screen"
            aria-label="Projects"
          >
            <Projects />
          </section>

          {/* Resume Section */}
          <section 
            id="resume" 
            className="min-h-screen"
            aria-label="Resume"
          >
            <Resume />
          </section>

          {/* Contact Section */}
          <section 
            id="contact" 
            className="min-h-screen"
            aria-label="Contact"
          >
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
