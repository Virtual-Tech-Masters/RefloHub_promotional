import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqCategories = [
    {
      title: 'General Enquiries',
      questions: [
        {
          q: 'What is Reflo Hub exactly?',
          a: 'Reflo Hub is a cutting-edge, SaaS-based referral network that links companies and independent contractors. After a successful conversion, businesses pay freelancers directly. Freelancers provide leads from their network. Reflo Hub does not handle payments directly; instead, it offers tools, tracking, and management.',
        },
        {
          q: 'How does Reflo Hub benefit businesses and freelancers?',
          a: '<ul><li><strong>Companies:</strong> Get high-quality leads without paying for marketing upfront. Only 3–4 companies per category and city ensure high-quality lead distribution.</li><li><strong>Freelancers:</strong> Earn money by recommending contacts without selling. Work locally, earn globally.</li></ul>',
        },
        {
          q: 'How many cities or nations is Reflo Hub present in?',
          a: 'Reflo Hub is a worldwide business. Freelancers can submit leads to companies in other cities or nations from any location to increase their earning potential.',
        },
      ],
    },
    {
      title: 'Verification & Registration',
      questions: [
        {
          q: 'How can I register as a freelancer or business?',
          a: 'Easily register on our website. A live photo confirmation is required to verify your identity and avoid fraud using our secure platform.',
        },
        {
          q: 'What is the need for live photo verification?',
          a: 'Live photo verification reduces fraudulent registrations, fosters trust, and ensures platform security, maintaining the authenticity and dependability of our network.',
        },
      ],
    },
    {
      title: 'For Freelancers',
      questions: [
        {
          q: 'How much does Reflo Hub charge freelancers?',
          a: 'The basic monthly subscription fee for freelancers is $14.99, which includes dashboard access and five coins for each lead submitted.',
        },
        {
          q: 'Describe the Reflo Hub Coins.',
          a: 'Freelancers use coins, which are credits, to submit leads. Five coins are given each month, and you can buy more at any time: <ul><li>10 coins: $5</li><li>14 coins: $7</li><li>20 coins: $10</li></ul>',
        },
        {
          q: 'How does a freelancer get paid?',
          a: 'After a lead successfully converts, businesses pay freelancers directly through platforms like PayPal, e-transfer, Wise, etc. Payments are not handled by Reflo Hub.',
        },
      ],
    },
    {
      title: 'For Businesses',
      questions: [
        {
          q: 'Which business membership plans are available?',
          a: '<table class="w-full text-left"><thead><tr><th>Plan</th><th>Setup Fee</th><th>Monthly Fee</th><th>Included Leads</th><th>Free Ad Campaigns</th></tr></thead><tbody><tr><td>Basic</td><td>$399</td><td>$99/month</td><td>10 leads/month</td><td>5 ads/month</td></tr><tr><td>Premium</td><td>$599</td><td>$149/month</td><td>Unlimited</td><td>10 ads/month</td></tr></tbody></table>',
        },
        {
          q: 'Can I purchase extra advertising campaigns?',
          a: 'Yes, businesses can improve visibility with additional ad campaigns: <ul><li>Home State/Province: $5/week</li><li>Additional State/Province: +$2/week each</li><li>Nationwide: $15/week</li></ul>',
        },
        {
          q: 'How are freelancers paid by companies?',
          a: 'When a lead is converted, businesses pay freelancers directly. Reflo Hub offers downloadable agreement forms and internal messages for open communication.',
        },
        {
          q: 'How many businesses are permitted per category and city?',
          a: 'Reflo Hub restricts registrations to 3–4 companies per category in each city to preserve high-quality leads, ensuring targeted and worthwhile referrals.',
        },
      ],
    },
    {
      title: 'Security, Safety, and Disputes',
      questions: [
        {
          q: 'What if there is a dispute over commissions?',
          a: 'Payments are handled directly by companies and freelancers. Reflo Hub uses internal conversation logs and timestamps to arbitrate and settle conflicts amicably if they occur.',
        },
        {
          q: 'In what ways does Reflo Hub guard against fraud or evasion?',
          a: '<ul><li>Real-time photo verification during registration</li><li>Time-stamped tracking of leads</li><li>Reputation review and rating systems</li><li>Optional Non-Circumvention Agreements</li><li>Penalties for fraud include warnings, fines, and potential lifetime bans</li></ul>',
        },
      ],
    },
    {
      title: 'Platform Features and Usage',
      questions: [
        {
          q: 'What features make the monthly costs for Reflo Hub justified?',
          a: '<ul><li>Smart matching between businesses and freelancers</li><li>Comprehensive analytics-based lead dashboards</li><li>Internal chat and agreement templates</li><li>Industry- and city-specific lead management</li><li>Leaderboard and review system to foster trust</li></ul>',
        },
        {
          q: 'Can freelancers send leads in other countries?',
          a: 'Yes, freelancers can send leads from their nation to companies in other nations or cities, opening up opportunities for international income.',
        },
      ],
    },
    {
      title: 'Technical and Legal Details',
      questions: [
        {
          q: 'Does Reflo Hub personally manage any payments or commissions?',
          a: 'No, Reflo Hub only functions as a SaaS supplier. Payments between freelancers and businesses are handled directly.',
        },
        {
          q: 'Does Reflo Hub comply with international law?',
          a: 'Yes, Reflo Hub remains fully compliant under UAE law as a SaaS platform with no direct financial involvement, avoiding complex foreign tax obligations.',
        },
      ],
    },
  ];

  const comparisonData = [
    {
      feature: 'Commission Fees',
      traditional: 'Typically 10–30% per transaction',
      reflo: 'Zero commission',
    },
    {
      feature: 'Global Reach',
      traditional: 'Often restricted to local markets',
      reflo: 'Global submissions allowed',
    },
    {
      feature: 'Payment Handling',
      traditional: 'Platform-controlled, complex taxes',
      reflo: 'Direct payments between parties',
    },
    {
      feature: 'Verification',
      traditional: 'Minimal (email only)',
      reflo: 'Live photo verification (secure)',
    },
    {
      feature: 'Business Limits per City',
      traditional: 'Usually unlimited (leads diluted)',
      reflo: 'Only 3–4 per category (quality leads)',
    },
    {
      feature: 'Subscription Model',
      traditional: 'Variable fees, unclear costs',
      reflo: 'Clear, fixed monthly fees',
    },
    {
      feature: 'Lead Transparency',
      traditional: 'Limited tracking',
      reflo: 'Full tracking & timestamped transparency',
    },
    {
      feature: 'Dispute Management',
      traditional: 'Limited or complex',
      reflo: 'Direct mediation only if required',
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const accordionVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.4, ease: 'easeInOut' } },
  };

  return (
    <section className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden perspective-1000 font-sans">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 dark:from-gray-950 via-gray-200 dark:via-gray-900 to-gray-100 dark:to-gray-950">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-orange-300/10 dark:from-sky-500/10 dark:to-orange-300/10 animate-[gradient-shift_25s_ease_infinite] bg-[length:200%_200%]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-orange-300/70 rounded-full blur-md"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5], x: Math.random() * 80 - 40, y: Math.random() * 80 - 40 }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, repeatType: 'reverse', delay: Math.random() * 3 }}
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
            className="inline-flex items-center gap-2 bg-gray-100/60 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-orange-300/40 rounded-full px-6 py-2 mb-6 shadow-[0_0_30px_rgba(255,165,0,0.4)]"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255, 165, 0, 0.5)' }}
          >
            <Sparkles className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-100">FAQs</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.7)] animate-[pulse_3s_ease_infinite]">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how Reflo Hub's exclusive referral SaaS platform connects freelancers and businesses globally with zero-commission leads.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        {faqCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-orange-400 dark:text-orange-300 mb-6">{category.title}</h2>
            <div className="space-y-4">
              {category.questions.map((item, qIndex) => {
                const globalIndex = `${catIndex}-${qIndex}`;
                return (
                  <div
                    key={globalIndex}
                    className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-orange-300/40 rounded-lg overflow-hidden"
                  >
                    <motion.button
                      className="w-full px-6 py-4 text-left flex justify-between items-center text-lg font-semibold text-gray-900 dark:text-white hover:bg-orange-300/10 transition-all duration-300"
                      onClick={() => toggleQuestion(globalIndex)}
                      whileHover={{ scale: 1.01 }}
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 transform transition-transform duration-300 ${
                          openIndex === globalIndex ? 'rotate-180' : ''
                        }`}
                      />
                    </motion.button>
                    <AnimatePresence>
                      {openIndex === globalIndex && (
                        <motion.div
                          variants={accordionVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="px-6 py-4 text-gray-600 dark:text-gray-300"
                          dangerouslySetInnerHTML={{ __html: item.a }}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}

        {/* Comparison Table */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto mt-16 bg-gradient-to-b from-gray-100/60 dark:from-white/5 to-gray-100/30 dark:to-white/3 backdrop-blur-lg border border-gray-200 dark:border-orange-300/40 rounded-2xl p-8 shadow-[0_0_50px_rgba(255,165,0,0.3)]"
        >
          <h2 className="text-3xl font-bold text-orange-400 dark:text-orange-300 mb-6">Why Reflo Hub is Different</h2>
          <table className="w-full text-left text-gray-600 dark:text-gray-300">
            <thead>
              <tr className="border-b border-gray-200 dark:border-orange-300/20">
                <th className="py-3">Feature</th>
                <th className="py-3">Traditional Platforms</th>
                <th className="py-3">Reflo Hub</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={i} className="border-b border-gray-200 dark:border-orange-300/10">
                  <td className="py-3">{row.feature}</td>
                  <td className="py-3">{row.traditional}</td>
                  <td className="py-3 text-orange-400 dark:text-orange-300">{row.reflo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Support Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-orange-400 dark:text-orange-300 mb-4">Need More Help?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Visit our Help Centre, use the Support Ticket system on your dashboard, or email us at{' '}
            <a href="mailto:support@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">
              support@reflohub.com
            </a>.
          </p>
          <motion.a
            href="/get-started"
            variants={{ hover: { scale: 1.05, boxShadow: '0 0 40px rgba(255, 165, 0, 0.5)' }, tap: { scale: 0.95 } }}
            whileHover="hover"
            whileTap="tap"
            className="group inline-flex px-8 py-4 text-white bg-gradient-to-r from-sky-500 to-orange-300 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Join Reflo Hub Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;