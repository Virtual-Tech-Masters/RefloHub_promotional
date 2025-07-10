import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Pricing = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants = {
    hover: { scale: 1.05, boxShadow: '0 0 30px rgba(255, 165, 0, 0.3)' },
  };

  const freelancerPlans = [
    {
      name: 'Freelancer Core',
      price: '$9.99 / month',
      features: [
        '5 free Lead Coins each month',
        'Instant payouts to PayPal, Stripe, or bank',
        'Access to all industries & territories',
        'Learning Hub courses + community leaderboard',
      ],
    },
  ];

  const coinPacks = [
    { name: '10 Coin Pack', price: '$5 one time', value: '$0.50 per coin' },
    { name: '20 Coin Pack', price: '$10 one time', value: '$0.50 per coin' },
  ];

  const businessPlans = [
    {
      name: 'Basic',
      setup: '$249',
      monthly: '$79',
      bestFor: 'Start ups & local SMBs launching their first referral campaign',
      features: {
        leads: '15',
        campaignSlots: '5',
        referralFee: true,
        aiLead: true,
        apiCrm: false,
        customerSuccess: false,
        cityMonopoly: false,
        strategyCall: false,
        growthGuarantee: true,
      },
    },
    {
      name: 'Standard',
      setup: '$349',
      monthly: '$99',
      bestFor: 'Growing teams managing multiple products or territories',
      features: {
        leads: 'Unlimited',
        campaignSlots: '15',
        referralFee: true,
        aiLead: true,
        apiCrm: true,
        customerSuccess: false,
        cityMonopoly: false,
        strategyCall: true,
        growthGuarantee: true,
      },
    },
    {
      name: 'Premium',
      setup: 'On call',
      monthly: 'On call',
      bestFor: 'Market leaders who want exclusive category rights in their city*',
      features: {
        leads: 'Unlimited',
        campaignSlots: '25',
        referralFee: true,
        aiLead: true,
        apiCrm: true,
        customerSuccess: true,
        cityMonopoly: true,
        strategyCall: true,
        growthGuarantee: true,
      },
    },
  ];

  const faqs = [
    {
      question: 'Can I cancel any time?',
      answer: 'Yes. Subscriptions are month to month after the one time setup fee. Cancel from your dashboard with no hidden penalties.',
    },
    {
      question: 'Are there additional transaction fees?',
      answer: 'No. Businesses only pay the referral fees they set. Reflo Hub does not skim commissions or charge payment processing spreads.',
    },
    {
      question: 'How are coins used?',
      answer: 'One coin equals one qualified lead submission. If a lead is rejected as invalid, the coin is automatically refunded to your balance.',
    },
    {
      question: 'Do coins expire?',
      answer: 'Coins roll over for up to 90 days. Any coins older than 90 days will expire.',
    },
    {
      question: 'What counts as a “city” for Premium exclusivity?',
      answer: 'We use official municipal boundaries (e.g., City of Toronto, City of Dubai). Suburbs and neighboring towns are separate territories.',
    },
  ];

  return (
    <section className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 dark:from-gray-950 via-gray-200 dark:via-gray-900 to-gray-100 dark:to-gray-950">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-orange-400/10 dark:from-sky-500/10 dark:to-orange-400/10 animate-[gradient-shift_20s_ease_infinite] bg-[length:200%_200%]"></div>
      </div>

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
              repeatType: 'loop',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 lg:py-24">
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
            <span className="text-sm font-medium text-gray-700 dark:text-gray-100">Simple, Transparent Pricing</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-sky-500 to-orange-400 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.3)]">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Whether you’re a solo referrer or a growing enterprise, Reflo Hub delivers pay-for-performance growth at a fraction of traditional advertising costs.
          </p>
          {/* <div className="mt-8 flex justify-center gap-4">
            <a
              href="#"
              className="bg-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-500 transition"
            >
              Start Free Trial
            </a>
            <a
              href="#"
              className="bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition"
            >
              Book a Demo
            </a>
          </div> */}
        </motion.div>

        <motion.section
          className="mb-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">For Freelancers</h2>
          <p className="text-center text-xl text-gray-600 dark:text-gray-300 mb-8">Unlimited Earnings, One Low Subscription</p>
          <div className="grid md:grid-cols-1 gap-6">
            {freelancerPlans.map((plan, index) => (
              <motion.div
                key={index}
                className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-8"
                variants={cardVariants}
                whileHover="hover"
              >
                <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                <p className="text-3xl font-bold text-orange-400 mb-4">{plan.price}</p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-sky-400" /> {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="mt-8">
            <h4 className="text-xl font-semibold text-center mb-4">Need More Coins?</h4>
            <div className="grid md:grid-cols-2 gap-6">
              {coinPacks.map((pack, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 text-center"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <h5 className="text-lg font-semibold mb-2">{pack.name}</h5>
                  <p className="text-orange-400 font-bold mb-2">{pack.price}</p>
                  <p className="text-gray-600 dark:text-gray-300">{pack.value}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-4">Unused coins roll over for 90 days. All prices in USD.</p>
          </div>
        </motion.section>

        <motion.section
          className="mb-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">For Businesses</h2>
          <p className="text-center text-xl text-gray-600 dark:text-gray-300 mb-8">Scale Leads, Not Costs</p>
          <div className="grid md:grid-cols-3 gap-6">
            {businessPlans.map((plan, index) => (
              <motion.div
                key={index}
                className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-8"
                variants={cardVariants}
                whileHover="hover"
              >
                <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">One Time Setup: <span className="text-orange-400 font-bold">{plan.setup}</span></p>
                <p className="text-3xl font-bold text-orange-400 mb-4">{plan.monthly}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{plan.bestFor}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8">
            <h4 className="text-xl font-semibold text-center mb-4">Plan Features Breakdown</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-200/60 dark:bg-white/10">
                    <th className="p-4 text-gray-700 dark:text-gray-100">Features</th>
                    <th className="p-4 text-center text-gray-700 dark:text-gray-100">Basic</th>
                    <th className="p-4 text-center text-gray-700 dark:text-gray-100">Standard</th>
                    <th className="p-4 text-center text-gray-700 dark:text-gray-100">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Leads per Month', key: 'leads' },
                    { name: 'Campaign Slots', key: 'campaignSlots' },
                    { name: 'Referral Fee Customization', key: 'referralFee' },
                    { name: 'AI Lead Verification', key: 'aiLead' },
                    { name: 'API & CRM Integrations', key: 'apiCrm' },
                    { name: 'Dedicated Customer Success Manager', key: 'customerSuccess' },
                    { name: 'City Wide Category Monopoly*', key: 'cityMonopoly' },
                    { name: 'Quarterly Strategy Call', key: 'strategyCall' },
                    { name: 'No Risk Growth Guarantee**', key: 'growthGuarantee' },
                  ].map((feature, i) => (
                    <tr key={i} className="border-t border-gray-200 dark:border-white/10">
                      <td className="p-4 text-gray-700 dark:text-gray-100">{feature.name}</td>
                      {businessPlans.map((plan, j) => (
                        <td key={j} className="p-4 text-center">
                          {typeof plan.features[feature.key] === 'string' ? (
                            plan.features[feature.key]
                          ) : plan.features[feature.key] ? (
                            <span className="text-sky-400">✔</span>
                          ) : (
                            '—'
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm">
              *Monopoly Clause: When you choose Premium, no other competitor in your business category can sign up within the same city for as long as you maintain an active subscription.<br />
              **Growth Guarantee: If zero customers convert in any consecutive 90 day window, we’ll credit you one month of Virtual Tech Masters’ Basic Ad Plan—free.
            </p>
          </div>
        </motion.section>

        <motion.section
          className="mb-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Need a Custom Solution?</h2>
          <div className="bg-gradient-to-r from-sky-200/30 dark:from-sky-500/10 to-orange-200/30 dark:to-orange-400/10 border border-gray-200 dark:border-white/10 rounded-xl p-8 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Enterprise multi-location or franchise network? Email{' '}
              <a href="mailto:sales@reflohub.com" className="text-orange-400 hover:underline font-semibold">
                sales@reflohub.com
              </a>{' '}
              for volume pricing and data residency options.
            </p>
          </div>
        </motion.section>

        <motion.section
          className="mb-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6"
                variants={cardVariants}
                whileHover="hover"
              >
                <h4 className="text-xl font-semibold mb-2">{faq.question}</h4>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Ready to Grow?</h2>
          <p className="text-center text-xl text-gray-600 dark:text-gray-300 mb-8">
            Choose your plan and start generating—or receiving—qualified leads in minutes.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/freelancer"
              className="bg-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-500 transition"
            >
              Join as a Freelancer
            </a>
            <a
              href="/business"
              className="bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition"
            >
              Join as a Business
            </a>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-300 mt-4 text-sm">
            Prices exclude applicable taxes. Reflo Hub reserves the right to modify pricing with 30 days’ notice.
          </p>
        </motion.section>
      </div>
    </section>
  );
};

export default Pricing;