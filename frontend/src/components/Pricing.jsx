import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const freelancerPlan = {
    name: 'Freelancer',
    price: 14.99,
    features: [
      'Dashboard access',
      '5 coins per month for lead submissions',
      'Submit leads globally',
      'Real-time photo verification',
      'Internal chat & agreement templates',
    ],
    coinOptions: [
      { coins: 10, price: 5 },
      { coins: 14, price: 7 },
      { coins: 20, price: 10 },
    ],
  };

  const businessPlans = [
    {
      name: 'Basic',
      setupFee: 399,
      monthlyFee: 99,
      features: [
        '10 leads per month',
        '5 free ad campaigns per month',
        '3–4 businesses per category/city',
        'Real-time photo verification',
        'Lead tracking & analytics',
      ],
    },
    {
      name: 'Premium',
      setupFee: 599,
      monthlyFee: 149,
      features: [
        'Unlimited leads',
        '10 free ad campaigns per month',
        '3–4 businesses per category/city',
        'Real-time photo verification',
        'Lead tracking & analytics',
      ],
    },
  ];

  const adCampaigns = [
    { scope: 'Home State/Province', cost: '$5/week' },
    { scope: 'Additional State/Province', cost: '$2/week each' },
    { scope: 'Nationwide', cost: '$15/week' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0 0 40px rgba(0, 212, 255, 0.5)' },
    tap: { scale: 0.95 },
  };

  return (
    <section className="relative min-h-screen bg-gray-950 text-white overflow-hidden perspective-1000 font-sans">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_rgba(0,212,255,0.2),_transparent,_rgba(138,43,226,0.2))] animate-[gradient-shift_25s_ease_infinite] bg-[length:200%_200%]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(0,212,255,0.1),_transparent,_rgba(138,43,226,0.1))] animate-[gradient-shift_30s_ease_infinite_reverse] bg-[length:200%_200%]"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-cyan-400/70 rounded-full blur-md"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5], x: Math.random() * 80 - 40, y: Math.random() * 80 - 40 }}
            transition={{ duration: Math.random() * 10 + 10, repeat: true, repeatType: 'reverse', delay: Math.random() * 3 }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-lg border border-cyan-500/40 rounded-full px-6 py-2 mb-6 shadow-[0_0_30px_rgba(0,212,255,0.4)]"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 212, 255, 0.5)' }}
          >
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-medium text-gray-100">Pricing Plans</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-300 via-violet-400 to-cyan-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(0,212,255,0.7)] animate-[pulse_3s_ease_infinite]">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlock the power of Reflo Hub with flexible pricing for freelancers and businesses. Start connecting and growing today!
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Freelancer Plan */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-b from-white/5 to-white/3 backdrop-blur-lg border border-cyan-500/40 rounded-2xl p-8 shadow-[0_0_50px_rgba(0,212,255,0.3)]"
          >
            <h2 className="text-2xl font-bold text-white mb-4">{freelancerPlan.name}</h2>
            <p className="text-4xl font-extrabold text-cyan-300 mb-4">
              ${freelancerPlan.price}/month
            </p>
            <ul className="space-y-2 mb-6">
              {freelancerPlan.features.map((feature, i) => (
                <li key={i} className="flex items-start text-gray-300">
                  <span className="text-cyan-400 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold text-white mb-2">Additional Coins</h3>
            <ul className="space-y-2 mb-6">
              {freelancerPlan.coinOptions.map((option, i) => (
                <li key={i} className="text-gray-300">
                  {option.coins} Coins: ${option.price}
                </li>
              ))}
            </ul>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group w-full px-8 py-4 text-white bg-gradient-to-r from-cyan-600 to-violet-600 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </motion.button>
          </motion.div>

          {/* Business Plans */}
          {businessPlans.map((plan, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-b from-white/5 to-white/3 backdrop-blur-lg border border-cyan-500/40 rounded-2xl p-8 shadow-[0_0_50px_rgba(0,212,255,0.3)]"
            >
              <h2 className="text-2xl font-bold text-white mb-4">{plan.name}</h2>
              <p className="text-4xl font-extrabold text-cyan-300 mb-2">
                ${plan.monthlyFee}/month
              </p>
              <p className="text-sm text-gray-400 mb-4">+ ${plan.setupFee} setup fee</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="group w-full px-8 py-4 text-white bg-gradient-to-r from-cyan-600 to-violet-600 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Ad Campaigns */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto mt-16 bg-gradient-to-b from-white/5 to-white/3 backdrop-blur-lg border border-cyan-500/40 rounded-2xl p-8 shadow-[0_0_50px_rgba(0,212,255,0.3)]"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Additional Ad Campaigns</h2>
          <p className="text-gray-300 mb-6">
            Boost your visibility with targeted ad campaigns for businesses.
          </p>
          <table className="w-full text-left text-gray-300">
            <thead>
              <tr className="border-b border-cyan-500/20">
                <th className="py-2">Scope</th>
                <th className="py-2">Cost</th>
              </tr>
            </thead>
            <tbody>
              {adCampaigns.map((campaign, i) => (
                <tr key={i} className="border-b border-cyan-500/10">
                  <td className="py-2">{campaign.scope}</td>
                  <td className="py-2">{campaign.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;