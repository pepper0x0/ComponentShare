import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import image1 from '../landing_page_assets/LP001_1.jpg';

const FuturisticSaasLanding = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 text-white">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            FutureSaaS
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
            {['Home', 'Features', 'Pricing', 'Contact'].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-purple-300 transition-colors duration-300">
                  {item}
                </a>
              </li>
            ))}
          </motion.ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-10 lg:mb-0"
          >
            <h1 className="text-5xl font-bold mb-6">
              Revolutionize Your Workflow with FutureSaaS
            </h1>
            <p className="text-xl mb-8">
              Harness the power of AI to streamline your business processes and skyrocket your productivity.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
            >
              Get Started Free
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-lg transform -rotate-6"></div>
              <img
                src={image1}
                alt="Dashboard"
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </main>

      <section className="bg-indigo-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'AI-Powered Analytics', icon: '📊' },
              { title: 'Real-time Collaboration', icon: '👥' },
              { title: 'Advanced Security', icon: '🔒' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-indigo-700 p-6 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-indigo-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 FutureSaaS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FuturisticSaasLanding;
