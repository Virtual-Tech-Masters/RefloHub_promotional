import { motion } from 'framer-motion';
import { Users, Target, DollarSign, TrendingUp, Search, Handshake } from 'lucide-react';

const HowItWorks = () => {
  const freelancerSteps = [
    {
      icon: Search,
      title: 'Find Opportunities',
      description: 'Browse available lead opportunities in 50+ categories in your network.',
    },
    {
      icon: Target,
      title: 'Submit Quality Leads',
      description: 'Share high-quality leads with listed businesses on the portal.',
    },
    {
      icon: DollarSign,
      title: 'Earn Commissions',
      description: 'Get paid when businesses successfully convert your leads.',
    },
  ];

  const businessSteps = [
    {
      icon: Users,
      title: 'Choose Your Plan',
      description: 'Select a plan that fits your lead generation needs and business growth goals.',
    },
    {
      icon: Handshake,
      title: 'Access Quality Leads',
      description: 'Browse and connect with pre-qualified leads in your industry.',
    },
    {
      icon: TrendingUp,
      title: 'Scale Your Business',
      description: 'Convert leads into customers and grow your revenue.',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/10 dark:via-sky-500/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How It{' '}
            <span className="bg-gradient-to-r from-sky-500 to-orange-400 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our platform bridges the gap between talented freelancers and growing businesses,
            creating a win-win ecosystem for lead generation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Freelancer Flow */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">For Freelancers</h3>
              <p className="text-gray-600 dark:text-gray-300">Turn your network into a revenue stream</p>
            </div>

            <div className="space-y-8">
              {freelancerSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-sky-500/20 to-orange-400/20 dark:from-sky-500/20 dark:to-orange-400/20 rounded-xl flex items-center justify-center group-hover:from-sky-500/30 group-hover:to-orange-400/30 transition-all duration-300">
                      <step.icon className="w-8 h-8 text-sky-500 dark:text-sky-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  </div>
                  {index < freelancerSteps.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-8 bg-gradient-to-b from-sky-500/50 to-transparent"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Business Flow */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">For Businesses</h3>
              <p className="text-gray-600 dark:text-gray-300">Access premium leads to scale faster</p>
            </div>

            <div className="space-y-8">
              {businessSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-sky-500/20 to-orange-400/20 dark:from-sky-500/20 dark:to-orange-400/20 rounded-xl flex items-center justify-center group-hover:from-sky-500/30 group-hover:to-orange-400/30 transition-all duration-300">
                      <step.icon className="w-8 h-8 text-orange-400 dark:text-orange-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  </div>
                  {index < businessSteps.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-8 bg-gradient-to-b from-orange-400/50 to-transparent"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
