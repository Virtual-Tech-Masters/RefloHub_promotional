import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Mail, MapPin, Instagram, Linkedin, Facebook,Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '',phone:'', message: '' });
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants = {
    hover: { scale: 1.05, boxShadow: '0 0 30px rgba(255, 165, 0, 0.4)' },
  };

  return (
    <section className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 dark:from-gray-950 via-gray-200 dark:via-gray-900 to-gray-100 dark:to-gray-950">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-orange-300/10 dark:from-sky-500/10 dark:to-orange-300/10 animate-[gradient-shift_20s_ease_infinite] bg-[length:200%_200%]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-300/30 dark:bg-orange-300/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'loop',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 lg:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full px-4 py-1 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-100">Get in Touch</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_20px_rgba(255,165,0,0.3)]">
            Contact Reflo Hub
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions or ready to connect? Reach out to us and let’s build something extraordinary together.
          </p>
        </motion.div>

        {/* Contact Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div
            className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-8"
            variants={cardVariants}
            whileHover="hover"
          >
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                  placeholder="Your Email"
                />
              </div>
                 <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
              </div>
              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255, 165, 0, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="group w-full px-8 py-3 bg-gradient-to-r from-sky-500 to-orange-300 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  Send Message
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="bg-gradient-to-br from-sky-500/10 dark:from-sky-500/10 to-orange-300/10 dark:to-orange-300/10 border border-gray-200 dark:border-white/10 rounded-xl p-8"
            variants={cardVariants}
            whileHover="hover"
          >
            <h2 className="text-2xl font-semibold mb-6">Connect with Us</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-orange-400 mt-1" />
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <a
                    href="mailto:Support@reflohub.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-300 transition-colors duration-200"
                  >
                    Support@reflohub.com
                  </a>
                </div>
                
              </div>
                 <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-orange-400 mt-1" />
                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <a
                    href="tel:18552200505"
                    className="text-gray-600 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-300 transition-colors duration-200"
                  >
                   (855) 220-0505 (toll free)
                  </a>
                </div>
                
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 text-orange-400 mt-1">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/reflohub/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-300 transition-colors duration-200"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61578387472424"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-300 transition-colors duration-200"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@reflo_hub?is_from_webapp=1&sender_device=pc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-300 transition-colors duration-200"
                    >
                      <MessageCircle className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </section>
  );
};

export default Contact;