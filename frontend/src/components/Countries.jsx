import { motion } from 'framer-motion';
import { MapPin, Globe } from 'lucide-react';

const Countries = () => {
  return (
    <section id="countries" className="py-24 bg-gray-100 dark:bg-gray-950 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Globe className="w-12 h-12 text-sky-500 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Global <span className="bg-gradient-to-r from-sky-500 to-orange-400 bg-clip-text text-transparent">Reach</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Available in 20+ countries and expanding rapidly. Join thousands of freelancers and businesses worldwide.
          </p>
        </motion.div>

        {/* Expansion Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <MapPin className="w-12 h-12 text-sky-500 dark:text-sky-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Expanding Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're actively working to bring Reflo Hub to more countries. 
              Join our waitlist to be notified when we launch in your region.
            </p>
            <a href="/contact">
             <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 30px rgba(14,165,233,0.4)' ,
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-sky-500 to-orange-400 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
            >
              Join Waitlist
            </motion.button>
            </a>
           
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Countries;
