import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Mail, Twitter, Linkedin, Github, ArrowRight } from 'lucide-react';

const Footer = () => {
  const companyLinks = [
    { label: 'About Us' },
    { label: 'Career' },
    { label: 'Contact' },
    { label: 'Blog' },
  ];

  const productLinks = [
    { label: 'Features' },
    { label: 'Pricing' },
    { label: 'API' },
    { label: 'Integrations' },
  ];

  const legalLinks = [
    { label: 'Business Registration Consent' },
    { label: 'Freelancer Registration Consent' },
    { label: 'Data Processing Agreement' },
    { label: 'Nondiscrimination Statement' },
    { label: 'Privacy Policy' },
    { label: 'Terms and Conditions' },
    { label: 'Cookies' },
    { label: 'Documents' },
  ];

  const socialLinks = [
    { icon: Twitter, label: 'Twitter' },
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Github, label: 'GitHub' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-200/50 dark:from-gray-900/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-12 border-b border-gray-200 dark:border-white/10"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Get the latest updates, tips, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-sky-500 transition-colors duration-200"
              />
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(255, 165, 0, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-sky-500 to-orange-400 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="py-12 grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-sky-500 to-orange-400 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">RefloHub</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Leading the future of lead generation with innovative solutions for freelancers and businesses worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.1,
                    color: '#38BDF8'
                  }}
                  className="w-10 h-10 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-sky-500 transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={`/${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    whileHover={{ x: 5, color: '#38BDF8' }}
                    className="text-gray-600 dark:text-gray-300 hover:text-sky-500 transition-colors duration-200"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={`/${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    whileHover={{ x: 5, color: '#38BDF8' }}
                    className="text-gray-600 dark:text-gray-300 hover:text-sky-500 transition-colors duration-200"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={`/${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    whileHover={{ x: 5, color: '#38BDF8' }}
                    className="text-gray-600 dark:text-gray-300 hover:text-sky-500 transition-colors duration-200"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-8 text-center"
        >
          <motion.a
            href="/blog"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(255, 165, 0, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-sky-500 to-orange-400 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center mx-auto"
          >
            Visit Our Blog
            <ArrowRight className="w-4 h-4 ml-2" />
          </motion.a>
        </motion.div>

        <div className="py-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center">
          <motion.a
            href="/copyright"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-gray-600 dark:text-gray-300 text-center md:text-left mb-4 md:mb-0 hover:text-sky-500 transition-colors duration-200"
          >
            Copyright © 2025 RefloHub. All rights reserved.
          </motion.a>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 text-center md:text-right"
          >
            Made with ❤️ for the future of lead generation
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;