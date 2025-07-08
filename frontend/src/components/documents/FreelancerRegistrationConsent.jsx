import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const FreelancerRegistrationConsent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const consentSections = [
    {
      title: 'Agreement to Terms',
      content: `
        <p>By signing up, you ("the Freelancer") agree to:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Reflo Hub’s Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>This Freelancer Consent Agreement</li>
        </ul>
        <p>You confirm that the information you provide is accurate and that you will use the platform honestly and responsibly.</p>
      `,
    },
    {
      title: 'Subscription and Coin Policy',
      content: `
        <p>As a freelancer, you agree to:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Pay a monthly subscription fee of $9.99 USD for access to your dashboard and lead tools.</li>
          <li>Receive 5 coins per month to submit leads. Additional coins can be purchased via your dashboard.</li>
          <li>Understand that coins are required to submit leads to businesses. Each lead submission deducts 1 coin from your balance.</li>
        </ul>
        <p>Reflo Hub reserves the right to update the monthly fee or coin pricing as needed, with at least 15 days’ notice provided through email or platform notification.</p>
      `,
    },
    {
      title: 'Your Role as a Lead Referrer',
      content: `
        <p>You understand and agree that:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Your responsibility is to find and refer potential clients to businesses listed on the platform using the lead submission dashboard.</li>
          <li>You are not required to sell, negotiate, or handle business operations – your role is limited to referral generation.</li>
          <li>You may refer leads from any location or country, regardless of your physical location.</li>
        </ul>
      `,
    },
    {
      title: 'Direct Payment from Businesses',
      content: `
        <p>Once a business receives and converts your submitted lead into a client:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>The business will pay you directly, based on the mutually agreed commission (negotiated off-platform via internal chat).</li>
          <li>Reflo Hub does not act as a payment intermediary and does not process or withhold any commissions.</li>
          <li>You are responsible for managing your income and taxes in accordance with the laws of your country.</li>
        </ul>
      `,
    },
    {
      title: 'Anti-Circumvention Clause',
      content: `
        <p>To protect the integrity of the platform:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>You must not approach any business listed on Reflo Hub directly to deal outside the platform.</li>
        </ul>
        <p>If found guilty of attempting to bypass the system, you will face:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Immediate and permanent ban from the platform</li>
          <li>Forfeiture of access to any pending leads or earnings</li>
          <li>Possible legal action in cases of serious misconduct</li>
        </ul>
        <p>This policy also applies to businesses found guilty of bypassing freelancers.</p>
      `,
    },
    {
      title: 'Dispute Handling',
      content: `
        <p>If a dispute arises with a business regarding commission:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>You can submit a complaint through the platform’s Help Center with supporting screenshots or communication logs.</li>
          <li>Reflo Hub may intervene to review and mediate, but cannot enforce payments between you and businesses.</li>
        </ul>
        <p>Frequent disputes may result in a performance review or temporary suspension.</p>
      `,
    },
    {
      title: 'Identity & Photo Verification',
      content: `
        <p>As part of your registration, you agree to:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Complete KYC (Know Your Customer) process</li>
          <li>Submit a live photo verification through Reflo Hub’s secure tool</li>
          <li>Provide accurate identification and payment details</li>
        </ul>
        <p>Failure to verify identity will result in your registration being declined.</p>
      `,
    },
    {
      title: 'Termination of Account',
      content: `
        <p>Your account may be suspended or terminated for:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Submitting fake or irrelevant leads</li>
          <li>Circumventing the platform’s policies</li>
          <li>Receiving repeated negative feedback from businesses</li>
          <li>Using the platform for spam or fraud</li>
        </ul>
        <p>Termination will result in the loss of remaining coins, and you will not be eligible for a refund of subscription fees.</p>
      `,
    },
    {
      title: 'Consent to Communication',
      content: `
        <p>By registering, you agree to receive:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Transactional and operational emails</li>
          <li>System notifications and updates</li>
          <li>Occasional marketing messages (with the option to opt-out)</li>
        </ul>
        <p>You can manage your notification preferences in your dashboard settings.</p>
      `,
    },
    {
      title: 'Acknowledgment',
      content: `
        <p>By checking the box and clicking "I Agree":</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>You confirm that you have read and understood all of the above policies.</li>
          <li>You consent to abide by Reflo Hub’s platform rules and standards.</li>
          <li>You understand that failure to comply may result in account termination and legal consequences.</li>
        </ul>
      `,
    },
    {
      title: 'Contact Information',
      content: `
        <p>For questions, contact our support team at:</p>
        <p><strong>Email:</strong> <a href="mailto:support@reflohub.com" class="text-orange-400 dark:text-orange-300 hover:underline">support@reflohub.com</a></p>
      `,
    },
  ];

  const toggleSection = (index) => {
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
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Freelancer Registration Consent</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.7)] animate-[pulse_3s_ease_infinite]">
            Freelancer Registration Consent Form
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Welcome to Reflo Hub. Please read this consent form carefully before completing your registration.
          </p>
        </motion.div>

        {/* Consent Sections */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          <p className="text-gray-500 dark:text-gray-400 mb-6">Effective Date: 2025-07-01</p>
          {consentSections.map((section, index) => (
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
                  className={`w-5 h-5 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
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
          <h2 className="text-3xl font-bold text-orange-400 dark:text-orange-300 mb-4">Have Questions?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Contact our support team for any inquiries about our freelancer registration consent form.
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
          <meta name="title" content="Reflo Hub – Freelancer Registration Consent Form" />
          <meta
            name="description"
            content="Review the Freelancer Registration Consent Form for Reflo Hub, outlining terms for freelancers joining the platform, including subscription fees, coin policy, and anti-circumvention policies."
          />
          <meta
            name="keywords"
            content="Reflo Hub freelancer registration, consent form, SaaS platform terms, lead referral, anti-circumvention policy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FreelancerRegistrationConsent;