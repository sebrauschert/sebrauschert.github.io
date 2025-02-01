import { motion } from 'framer-motion';
import portrait from '../assets/portrait.jpeg';
import contact from '../assets/contact.png';

export default function Contact() {
  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "seb.rauschert@gmail.com",
      href: "mailto:seb.rauschert@gmail.com",
      description: "Feel free to email me directly"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: "Fremantle, Western Australia",
      description: "Based in"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Role",
      value: "Principal Data Scientist at INSiGENe",
      description: "Current position"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div 
        className="flex flex-col items-center mb-24"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="relative w-64 h-64 mb-12 group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#88C0D0]/20 to-transparent rounded-3xl blur-2xl group-hover:opacity-75 transition-opacity" />
          <img 
            src={portrait} 
            alt="Sebastian Rauschert" 
            className="w-full h-full object-cover rounded-3xl shadow-2xl"
          />
        </motion.div>

        <motion.h2 
          className="text-4xl font-bold text-[#88C0D0] text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="text-[#D8DEE9] text-xl max-w-2xl text-center leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Interested in data science, reproducible analytics projects, or need help with data analysis? 
          I'm always open to discussing new opportunities and challenges in the field of data science.
        </motion.p>

        <motion.a
          href="mailto:seb.rauschert@gmail.com"
          className="inline-flex items-center gap-3 bg-[#88C0D0] hover:bg-[#81A1C1] text-[#2E3440] font-medium px-8 py-4 rounded-2xl transition-all hover:shadow-lg hover:-translate-y-1"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Send me an Email
        </motion.a>
      </motion.div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.label}
            className="bg-[#3B4252]/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-[#88C0D0] bg-[#88C0D0]/10 p-3 rounded-xl">
                {method.icon}
              </div>
              <h4 className="text-[#81A1C1] text-lg font-semibold">{method.label}</h4>
            </div>
            {method.href ? (
              <a 
                href={method.href}
                className="text-[#D8DEE9] hover:text-[#88C0D0] transition-colors block mb-2 text-lg"
              >
                {method.value}
              </a>
            ) : (
              <p className="text-[#D8DEE9] mb-2 text-lg">{method.value}</p>
            )}
            <p className="text-[#D8DEE9]/60">{method.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Social Links */}
      <div className="text-center">
        <h4 className="text-2xl font-semibold text-[#81A1C1] mb-8">Connect & Collaborate</h4>
        <div className="flex justify-center space-x-8">
          <motion.a
            href="https://github.com/sebrauschert"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D8DEE9] hover:text-[#88C0D0] transition-all p-4 hover:bg-[#88C0D0]/10 rounded-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="sr-only">GitHub</span>
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sebastian-rauschert-836760a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D8DEE9] hover:text-[#88C0D0] transition-all p-4 hover:bg-[#88C0D0]/10 rounded-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="sr-only">LinkedIn</span>
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </motion.a>
        </div>
      </div>
    </div>
  );
} 