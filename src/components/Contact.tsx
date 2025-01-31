import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      name: 'ResearchGate',
      url: 'https://www.researchgate.net/profile/yourusername',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.323-.306-.174-.517-.4-.67-.645-.154-.247-.277-.573-.353-.876-.074-.3-.115-.706-.115-1.017 0-.31.041-.705.115-1.002.076-.303.2-.629.354-.876.153-.245.363-.47.67-.645.308-.172.664-.322 1.21-.322.38 0 .736.074 1.025.222.29.148.49.332.602.645.04.11.072.231.095.351.023.119.038.265.044.436 0 .033.014.05.042.05h1.395c.033 0 .05-.025.05-.075a3.392 3.392 0 0 0-.208-1.279c-.137-.327-.356-.63-.635-.906a3.419 3.419 0 0 0-1.09-.634C20.16.118 19.72 0 19.586 0zm-8.49.141c-.09 0-.134.047-.134.141v10.831c0 .094.044.141.134.141h1.402c.09 0 .134-.047.134-.141V.282c0-.094-.044-.141-.134-.141h-1.402zm-8.582 0c-.09 0-.134.047-.134.141v10.831c0 .094.044.141.134.141h1.402c.09 0 .135-.047.135-.141V.282c0-.094-.045-.141-.135-.141H2.514zM.054 13.135l-.001.094c0 .095.044.142.134.142h1.402c.09 0 .135-.047.135-.142v-.094c0-.094-.045-.141-.135-.141H.188c-.09 0-.134.047-.134.141zm2.46 0l-.001.094c0 .095.044.142.134.142h1.402c.09 0 .135-.047.135-.142v-.094c0-.094-.045-.141-.135-.141H2.648c-.09 0-.134.047-.134.141z"/>
        </svg>
      )
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <motion.div
          className="bg-[#3B4252] p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#E5E9F0]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-[#4C566A] border-[#3B4252] text-[#ECEFF4] shadow-sm focus:border-[#88C0D0] focus:ring focus:ring-[#88C0D0] focus:ring-opacity-50"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#E5E9F0]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-[#4C566A] border-[#3B4252] text-[#ECEFF4] shadow-sm focus:border-[#88C0D0] focus:ring focus:ring-[#88C0D0] focus:ring-opacity-50"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#E5E9F0]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md bg-[#4C566A] border-[#3B4252] text-[#ECEFF4] shadow-sm focus:border-[#88C0D0] focus:ring focus:ring-[#88C0D0] focus:ring-opacity-50"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-[#88C0D0] hover:bg-[#81A1C1] text-[#2E3440] font-medium px-6 py-3 rounded-full transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-2xl font-bold text-[#88C0D0] mb-4">Let's Collaborate</h3>
            <p className="text-[#D8DEE9]">
              Interested in data science collaborations, research projects, or need help with data analysis? 
              I'm always open to discussing new opportunities and challenges in the field of data science.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-[#81A1C1] mb-4">Connect & Collaborate</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D8DEE9] hover:text-[#88C0D0] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="bg-[#3B4252] p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-[#81A1C1] mb-4">Contact Information</h4>
            <div className="space-y-3 text-[#D8DEE9]">
              <p>📍 88/51 Queen Victoria Street, Fremantle, 6160</p>
              <p>📧 seb.rauschert@gmail.com</p>
              <p>🔬 Principal Data Scientist at INSiGENe</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 