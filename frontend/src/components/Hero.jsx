import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 dark:from-gray-950 via-gray-200 dark:via-gray-900 to-gray-100 dark:to-gray-950">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-orange-400/10 dark:from-sky-500/10 dark:to-orange-400/10 animate-[gradient-shift_20s_ease_infinite] bg-[length:200%_200%]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/30 dark:bg-orange-300/30 rounded-full"
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
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full px-4 py-1 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-gray-900 dark:text-gray-100">Now Available in 20+ Countries</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-400 bg-clip-text text-transparent mb-6 drop-shadow-[0_0_30px_rgba(255,165,0,0.6)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Reflo Hub
          </motion.h1>
               <motion.h2
            className="text-5xl md:text-4xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-400 bg-clip-text text-transparent mb-6 drop-shadow-[0_0_30px_rgba(255,165,0,0.6)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Keep 100% of What You Earn
          </motion.h2>

          <motion.p
            className="text-xl md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Revolutionizing Referrals: Empowering Freelancers to Fuel Business Growth.
            <br />
            Turn connections into cash. Share leads, earn instantly, and help businesses thrive — no cuts, no middlemen. Keep everything you make.

          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="/freelancer">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(255, 165, 0, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-orange-300 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Join as Freelancer
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </a>

            <a href="/business">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 0 40px rgba(30, 64, 175, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-orange-300 to-sky-500 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/20 text-white dark:text-white rounded-xl font-semibold text-lg hover:border-sky-500/50 dark:hover:border-sky-400/50 transition-all duration-300"
              >
                <span className="flex items-center">
                  Join as Business
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </motion.button>
            </a>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: '10K+', label: 'Active Freelancers' },
            { number: '500+', label: 'Partner Businesses' },
            { number: '20+', label: 'Countries Served' },
            { number: '95%', label: 'Success Rate' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
