import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Feature = () => {
  const [openSection, setOpenSection] = useState(null);

  const featureSections = [
    {
      title: 'For Businesses',
      content: `
        <ul class="space-y-4">
          <li>
            <h4 class="font-semibold">1. Pay for Success Model</h4>
            <ul class mecanismos de listas-disc pl-5 space-y-2">
              <li>Zero Upfront Ads — Pay referral fees after a lead converts.</li>
              <li>Guaranteed ROI — Every dollar spent is tied to closed business.</li>
            </ul>
          </li>
          <li>
            <h4 class="font-semibold">2. Smart Lead Verification</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>AI screening & human review guard against spam and duplicates.</li>
              <li>Optional phone/email validation and CRM match checks.</li>
            </ul>
          </li>
          <li>
            <h4 class="font-semibold">3. Dynamic Referral Fee Controls</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>Set tiered payouts by product, region, or deal size.</li>
              <li>Update fees in real-time—freelancers see changes instantly.</li>
            </ul>
          </li>
          <li>
            <h4 class="font-semibold">4. Real-Time Performance Dashboard</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>Track inbound leads, conversion funnel, and cost per acquisition.</li>
              <li>Export CSV/PDF or connect via API to your own BI tools.</li>
            </ul>
          </li>
          <li>
            <h4 class="font-semibold">5. No Risk Growth Guarantee</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>If you receive zero customers in a quarter, we cover one month of basic ad services via our partner Virtual Tech Masters—on us.</li>
            </ul>
          </li>
        </ul>
      `,
    },
    {
      title: 'For Freelancers',
      content: `
        <ul class="space-y-4">
          <li>
            <h4 class="font-semibold">1. Unlimited Niches & Territories</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>Choose from 50+ high-commission industries or add your own niche.</li>
              <li>Local or global—your network, your rules.</li>
            </ul>
          </li>
          <li>
            <h4 class="font-semibold">2. Coin-Based Lead Credits</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>5 free lead submissions/month with your $9.99 subscription.</li>
              <li>Buy extra coins à la carte or unlock bonuses for top performance.</li>
            </ul>
          </li>
          <li>
            <h4 class="font-semibold">3. Smart Referral Links & QR Codes</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>One-click share to email, socials, or print.</li>
              <li>Built-in tracking pixel shows when your prospect engages.</li>
            </ul>
          </li>
          <li>
            <h4 class="font-semibold">4. Transparent Commission Tracker</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>Live feed of lead status, deal size, and payout schedule.</li>
              <li>Instant payout to Stripe, PayPal, or bank transfer when deals close.</li>
            </ul>
          </li>
          <li>
            <h4 class="font-semibold">5. Learning Hub & Community</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>Courses on prospecting, negotiation, and niche marketing.</li>
              <li>Peer forums, leaderboards, and monthly referral challenges.</li>
            </ul>
          </li>
        </ul>
      `,
    },
    {
      title: 'Marketplace & Matching Engine',
      content: `
        <ul class="list-disc pl-5 space-y-2">
          <li>AI MatchScore™ ranks every lead against business criteria for fit and intent.</li>
          <li>Two-way ratings build reputation and surface top performers.</li>
          <li>Dispute Center with built-in mediation and escrow system.</li>
        </ul>
      `,
    },
    {
      title: 'Security & Compliance',
      content: `
        <ul class="list-disc pl-5 space-y-2">
          <li>End-to-end encryption (TLS 1.3) and SOC 2 compliant infrastructure.</li>
          <li>Live photo KYC for all users to deter fraud.</li>
          <li>GDPR, CCPA, and PIPEDA ready—with regional data residency options.</li>
        </ul>
      `,
    },
    {
      title: 'Analytics & Insights',
      content: `
        <ul class="list-disc pl-5 space-y-2">
          <li>Conversion heatmaps and deal velocity charts.</li>
          <li>Custom funnels and cohort analysis.</li>
          <li>Automated weekly email digest summarizing ROI and trends.</li>
        </ul>
      `,
    },
    {
      title: 'Mobile & Accessibility',
      content: `
        <ul class="list-disc pl-5 space-y-2">
          <li>Responsive PWA: install from any browser—no app store needed.</li>
          <li>WCAG 2.1 AA compliant interface.</li>
          <li>Multilingual UI (English, more coming).</li>
        </ul>
      `,
    },
    {
      title: 'Scale & Reliability',
      content: `
        <ul class="list-disc pl-5 space-y-2">
          <li>Cloud-native on AWS with auto-scaling and multi-AZ redundancy.</li>
          <li>99.9% SLA uptime backed by real-time status page.</li>
          <li>Daily encrypted backups and 30-day point-in-time recovery.</li>
        </ul>
      `,
    },
    {
      title: 'Support & Success',
      content: `
        <ul class="list-disc pl-5 space-y-2">
          <li>24/7 live chat with 2-minute average first response.</li>
          <li>Dedicated Customer Success Manager for Premium plans.</li>
          <li>Extensive knowledge base, video tutorials, and community webinars.</li>
        </ul>
      `,
    },
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
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
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Features</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.7)] animate-[pulse_3s_ease_infinite]">
            Features That Fuel Win-Win Growth
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Everything you need to match high-quality leads with eager businesses—without the ad spend gamble.
          </p>
          <div className="flex justify-center gap-4">
            <motion.a
              href="#business-signup"
              variants={{ hover: { scale: 1.05, boxShadow: '0 0 40px rgba(255, 165, 0, 0.5)' }, tap: { scale: 0.95 } }}
              whileHover="hover"
              whileTap="tap"
              className="group inline-flex px-8 py-4 text-white bg-gradient-to-r from-sky-500 to-orange-300 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Start as a Business
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </motion.a>
            <motion.a
              href="#freelancer-signup"
              variants={{ hover: { scale: 1.05, boxShadow: '0 0 40px rgba(255, 165, 0, 0.5)' }, tap: { scale: 0.95 } }}
              whileHover="hover"
              whileTap="tap"
              className="group inline-flex px-8 py-4 text-white bg-gradient-to-r from-sky-500 to-orange-300 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Earn as a Freelancer
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* Why Reflo Hub */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-orange-400 dark:text-orange-300 mb-6">Why Reflo Hub?</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Traditional advertising burns budgets on impressions. Reflo Hub pays out only when real revenue is earned. Explore the features that power our risk-free ecosystem for both businesses and freelance referrers.
          </p>
        </motion.div>

        {/* Feature Sections */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          {featureSections.map((section, index) => (
            <div
              key={index}
              className="mb-4 bg-gray-100/60 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-orange-300/40 rounded-lg overflow-hidden"
            >
              <motion.button
                className="w-full px-6 py-4 text-left flex justify-between items-center text-lg font-semibold text-gray-900 dark:text-white hover:bg-orange-300/10 transition-all duration-300"
                onClick={() => toggleSection(index)}
                whileHover={{ scale: 1.01 }}
              >
                <span>{section.title}</span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${openSection === index ? 'rotate-180' : ''}`}
                />
              </motion.button>
              <AnimatePresence>
                {openSection === index && (
                  <motion.div
                    variants={accordionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="px-6 py-4 text-gray-600 dark:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-orange-400 dark:text-orange-300 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Discover how Reflo Hub’s features can drive your success as a business or freelancer.
          </p>
          <motion.a
            href="mailto:support@reflohub.com"
            variants={{ hover: { scale: 1.05, boxShadow: '0 0 40px rgba(255, 165, 0, 0.5)' }, tap: { scale: 0.95 } }}
            whileHover="hover"
            whileTap="tap"
            className="group inline-flex px-8 py-4 text-white bg-gradient-to-r from-sky-500 to-orange-300 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Contact Support
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </motion.a>
        </motion.div>

        {/* SEO Metadata */}
        <motion.div className="hidden">
          <meta name="title" content="Reflo Hub – Features for Businesses and Freelancers" />
          <meta
            name="description"
            content="Discover Reflo Hub’s features: pay-for-success model, AI lead verification, real-time dashboards, and more for businesses and freelancers."
          />
          <meta
            name="keywords"
            content="Reflo Hub features, SaaS lead generation, pay for success, AI lead verification, freelancer commissions, business growth tools, real-time analytics"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Feature;