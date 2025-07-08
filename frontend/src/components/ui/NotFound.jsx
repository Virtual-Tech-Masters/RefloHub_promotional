import { motion } from 'framer-motion';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const textVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
  };

  return (
    <section className="relative min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white flex items-center justify-center overflow-hidden perspective-1000 font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 dark:from-gray-950 via-gray-200 dark:via-gray-900 to-gray-100 dark:to-gray-950">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_rgba(255,165,0,0.2),_transparent,_rgba(14,165,233,0.2))] animate-[gradient-shift_25s_ease_infinite] bg-[length:200%_200%]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,165,0,0.1),_transparent,_rgba(14,165,233,0.1))] animate-[gradient-shift_30s_ease_infinite_reverse] bg-[length:200%_200%]"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-orange-400/70 dark:bg-orange-300/70 rounded-full blur-md"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5], x: Math.random() * 80 - 40, y: Math.random() * 80 - 40 }}
            transition={{ duration: Math.random() * 10 + 10, repeat: true, repeatType: 'reverse', delay: Math.random() * 3 }}
          />
        ))}
      </div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-2xl mx-auto px-6 py-16 text-center bg-gradient-to-b from-gray-100/60 dark:from-white/5 to-gray-200/60 dark:to-white/3 backdrop-blur-lg border border-orange-400/40 dark:border-orange-300/40 rounded-2xl shadow-[0_0_50px_rgba(255,165,0,0.3)]"
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-gray-100/60 dark:bg-white/5 backdrop-blur-lg border border-orange-400/40 dark:border-orange-300/40 rounded-full px-6 py-2 mb-6 shadow-[0_0_30px_rgba(255,165,0,0.4)]"
          whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,165,0,0.5)' }}
        >
          <AlertTriangle className="w-5 h-5 text-orange-400" />
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Page Not Found</span>
        </motion.div>

        <motion.h1
          variants={textVariants}
          className="text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-orange-400 to-sky-500 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.7)] animate-[pulse_3s_ease_infinite]"
        >
          404
        </motion.h1>

        <motion.p
          variants={textVariants}
          className="text-xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Oops! It looks like you're lost in the digital wilderness. The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.a
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-400 to-sky-500 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,165,0,0.5)' }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Home
        </motion.a>
      </motion.div>
    </section>
  );
};

export default NotFound;