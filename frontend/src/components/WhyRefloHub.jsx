import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Globe, CreditCard, Camera, Flame, Rocket, ArrowRight } from 'lucide-react';

const WhyRefloHub = () => {
  const features = [
    {
      name: 'Commission Model',
      refloHub: '❌ Zero Commissions',
      traditional: '✅ Typically charge 10-20% per lead',
      icon: <CreditCard className="w-6 h-6 text-sky-500" />,
    },
    {
      name: 'Business Listings',
      refloHub: '🔒 3–4 Exclusive per Category/City',
      traditional: '⚠️ Unlimited competition',
      icon: <CheckCircle className="w-6 h-6 text-sky-500" />,
    },
    {
      name: 'Payment Method',
      refloHub: '💳 Direct Business-to-Freelancer Payments',
      traditional: '🏦 Platform-processed payments',
      icon: <CreditCard className="w-6 h-6 text-sky-500" />,
    },
    {
      name: 'Global Reach',
      refloHub: '🌍 Freelancers submit leads globally',
      traditional: '📍 Usually limited by geography',
      icon: <Globe className="w-6 h-6 text-sky-500" />,
    },
    {
      name: 'Verification',
      refloHub: '📸 Live Photo Verification for Trust & Safety',
      traditional: '⚠️ Limited verification processes',
      icon: <Camera className="w-6 h-6 text-sky-500" />,
    },
    {
      name: 'Subscription Model',
      refloHub: '🔥 Affordable Monthly SaaS Model',
      traditional: '💸 High fees and unpredictable costs',
      icon: <Flame className="w-6 h-6 text-sky-500" />,
    },
    {
      name: 'Scalability',
      refloHub: '🚀 Easily scale without local tax complications',
      traditional: '⚖️ Complex international tax obligations',
      icon: <Rocket className="w-6 h-6 text-sky-500" />,
    },
  ];

  const categories = [
    'Real Estate',
    'Mortgage Brokers',
    'Immigration Consultants',
    'Legal Services',
    'Website Development & Digital Marketing',
    'Tours & Travel',
    'Auto Sales and Parts',
    'Home Services & HVAC',
    'Tuition and Coaching Centres',
    'Skincare & Beauty Clinics',
    'Event Venues & Party Halls',
    'Fencing and Landscaping',
    'Concrete & Driveways',
    'Insurance Providers',
    'And More',
  ];

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section className="relative min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden perspective-1000 font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 dark:from-gray-950 via-gray-200 dark:via-gray-900 to-gray-100 dark:to-gray-950">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_rgba(14,165,233,0.2),_transparent,_rgba(255,165,0,0.2))] animate-[gradient-shift_25s_ease_infinite] bg-[length:200%_200%]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(14,165,233,0.1),_transparent,_rgba(255,165,0,0.1))] animate-[gradient-shift_30s_ease_infinite_reverse] bg-[length:200%_200%]"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-sky-500/70 dark:bg-sky-400/70 rounded-full blur-md"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5], x: Math.random() * 80 - 40, y: Math.random() * 80 - 40 }}
            transition={{ duration: Math.random() * 10 + 10, repeat: true, repeatType: 'reverse', delay: Math.random() * 3 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-100/60 dark:bg-white/5 backdrop-blur-lg border border-sky-500/40 dark:border-sky-400/40 rounded-full px-6 py-2 mb-6 shadow-[0_0_30px_rgba(14,165,233,0.4)]"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(14,165,233,0.5)' }}
          >
            <CheckCircle className="w-5 h-5 text-sky-500" />
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Why Choose Reflo Hub</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-400 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(14,165,233,0.7)] animate-[pulse_3s_ease_infinite]">
            Why Reflo Hub Stands Out
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Reflo Hub is a commission-free platform offering unparalleled value, global exposure, and exclusive listings to drive business growth through targeted lead generation.
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto bg-gradient-to-b from-gray-100/60 dark:from-white/5 to-gray-200/60 dark:to-white/3 backdrop-blur-lg border border-sky-500/40 dark:border-sky-400/40 rounded-2xl p-8 shadow-[0_0_50px_rgba(14,165,233,0.3)]"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Reflo Hub vs Traditional Platforms</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gradient-to-r from-sky-500/20 to-orange-400/20">
                  <th className="p-4 text-gray-900 dark:text-white font-semibold rounded-tl-2xl">Feature</th>
                  <th className="p-4 text-gray-900 dark:text-white font-semibold">Reflo Hub</th>
                  <th className="p-4 text-gray-900 dark:text-white font-semibold rounded-tr-2xl">Traditional Platforms</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <motion.tr
                    key={feature.name}
                    variants={rowVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-sky-500/20 dark:border-sky-400/20 hover:bg-gray-200/30 dark:hover:bg-gray-800/30 transition-all duration-300"
                  >
                    <td className="p-4 flex items-center gap-3">
                      {feature.icon}
                      <span className="text-gray-900 dark:text-white font-medium">{feature.name}</span>
                    </td>
                    <td className="p-4 text-gray-800 dark:text-gray-200">{feature.refloHub}</td>
                    <td className="p-4 text-gray-600 dark:text-gray-400">{feature.traditional}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 max-w-5xl mx-auto bg-gradient-to-b from-gray-100/60 dark:from-white/5 to-gray-200/60 dark:to-white/3 backdrop-blur-lg border border-sky-500/40 dark:border-sky-400/40 rounded-2xl p-8 shadow-[0_0_50px_rgba(14,165,233,0.3)]"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Quality Equals Exclusivity</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
            We limit each city to just 3–4 businesses per category to maximize lead quality and quantity. This ensures freelancers deliver targeted, high-value leads to your business.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Available Categories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                className="p-4 bg-gray-100/60 dark:bg-gray-800/50 rounded-lg flex items-center gap-3 border border-sky-500/20 dark:border-sky-400/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(14,165,233,0.5)' }}
              >
                <CheckCircle className="w-5 h-5 text-sky-500" />
                <span className="text-gray-900 dark:text-white">{category}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <motion.a
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-orange-400 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(14,165,233,0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Reserve Your Spot Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Limited availability—secure your exclusive listing today!</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyRefloHub;
