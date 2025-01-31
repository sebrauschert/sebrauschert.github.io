import { motion } from 'framer-motion';

export default function Contact() {
  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: "seb.rauschert@gmail.com",
      href: "mailto:seb.rauschert@gmail.com",
      description: "Feel free to email me directly"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Fremantle, Western Australia",
      description: "Based in"
    },
    {
      icon: "🔬",
      label: "Role",
      value: "Principal Data Scientist at INSiGENe",
      description: "Current position"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.h2 
        className="text-3xl font-bold text-[#88C0D0] text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Main Contact Message */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#88C0D0] mb-4">Let's Collaborate</h3>
            <p className="text-[#D8DEE9] text-lg mb-8">
              Interested in data science collaborations, research projects, or need help with data analysis? 
              I'm always open to discussing new opportunities and challenges in the field of data science.
            </p>
            <motion.a
              href="mailto:seb.rauschert@gmail.com"
              className="inline-flex items-center bg-[#88C0D0] hover:bg-[#81A1C1] text-[#2E3440] font-medium px-8 py-3 rounded-full transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send me an Email
            </motion.a>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                className="bg-[#3B4252] p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-4xl mb-4 block">{method.icon}</span>
                <h4 className="text-[#81A1C1] font-semibold mb-2">{method.label}</h4>
                {method.href ? (
                  <a 
                    href={method.href}
                    className="text-[#D8DEE9] hover:text-[#88C0D0] transition-colors"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-[#D8DEE9]">{method.value}</p>
                )}
                <p className="text-[#D8DEE9]/60 text-sm mt-2">{method.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="text-center mt-12">
            <h4 className="text-xl font-semibold text-[#81A1C1] mb-6">Connect & Collaborate</h4>
            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://github.com/sebrauschert"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D8DEE9] hover:text-[#88C0D0] transition-colors text-2xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sebastian-rauschert/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D8DEE9] hover:text-[#88C0D0] transition-colors text-2xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 