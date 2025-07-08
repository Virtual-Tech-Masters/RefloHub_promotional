import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const BusinessRegistrationConsent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const consentSections = [
    {
      title: 'Agreement to Terms',
      content: `
        <p>By proceeding with registration, you ("the Business") agree to be bound by:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Reflo Hub's Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>This Consent Form</li>
        </ul>
        <p>You confirm that the information provided is accurate and that you are authorized to act on behalf of your business entity.</p>
      `,
    },
    {
      title: 'Subscription and Fee Structure',
      content: `
        <p>You understand and accept the following fee obligations:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>One-Time Registration Fee:</strong> The platform charges a setup fee as per the selected plan.</li>
          <li><strong>Monthly Subscription Fee:</strong> You agree to pay a recurring monthly fee for continued access to platform features, leads, and services.</li>
        </ul>
        <p>Reflo Hub reserves the right to revise the registration or subscription fees at any time. Any fee updates will be communicated via email and/or platform notifications at least 15 days in advance. Continued use of the platform after such changes constitutes acceptance of the new fee structure.</p>
      `,
    },
    {
      title: 'Lead Management and Direct Dealings',
      content: `
        <p>Reflo Hub is a SaaS-based platform that connects businesses with freelancers who submit leads from their social and professional networks. Businesses are expected to:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Engage professionally with leads submitted by freelancers</li>
          <li>Make direct payments to freelancers for successful leads as per their mutual agreement</li>
        </ul>
      `,
    },
    {
      title: 'Anti-Circumvention Clause',
      content: `
        <p>You must not bypass the Reflo Hub platform to establish direct relationships with freelancers outside the system with the intent to:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Avoid subscription terms</li>
          <li>Evade payment of agreed commissions</li>
        </ul>
        <p>If any attempt to bypass the platform is discovered, including but not limited to:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Contacting freelancers to avoid logging leads on the platform</li>
          <li>Settling commission privately and hiding the outcome of a successful lead</li>
        </ul>
        <p>Your account will be permanently banned, without refund, and:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>A formal complaint may be filed under applicable cyber and contractual laws</li>
          <li>Your business will be blacklisted from future participation on Reflo Hub</li>
        </ul>
        <p>This policy also applies to freelancers found guilty of similar conduct.</p>
      `,
    },
    {
      title: 'Dispute Resolution',
      content: `
        <p>If a commission-related dispute arises between you and a freelancer:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Reflo Hub will intervene as a neutral party only if both parties submit written evidence</li>
          <li>Final decisions will be made based on timestamps, communication history, and proof of transaction</li>
        </ul>
        <p>Repeated disputes may lead to account reviews or suspension.</p>
      `,
    },
    {
      title: 'Verification Requirement',
      content: `
        <p>As part of our KYC process, you agree to:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Submit valid business identity documents</li>
          <li>Complete live photo verification during registration</li>
        </ul>
        <p>Failure to complete verification will result in denied access to Reflo Hub services.</p>
      `,
    },
    {
      title: 'Termination of Account',
      content: `
        <p>Your account may be terminated or suspended by Reflo Hub for any of the following reasons:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Violation of platform rules or this agreement</li>
          <li>Failure to pay applicable fees</li>
          <li>Fraudulent, misleading, or abusive behavior</li>
          <li>Violation of the anti-circumvention clause</li>
        </ul>
        <p>In case of termination, all outstanding obligations remain enforceable.</p>
      `,
    },
    {
      title: 'Consent to Communication',
      content: `
        <p>By registering, you consent to receive:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Transactional emails</li>
          <li>System alerts</li>
          <li>Promotional updates and policy changes from Reflo Hub</li>
        </ul>
        <p>You may manage notification preferences from your account settings.</p>
      `,
    },
    {
      title: 'Acknowledgment and Agreement',
      content: `
        <p>By clicking “I Agree” or completing the registration process, you confirm:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>That you have read, understood, and agree to be legally bound by the terms outlined above</li>
          <li>That any violation of these terms may result in immediate and permanent removal from the platform</li>
        </ul>
      `,
    },
    {
      title: 'Contact Information',
      content: `
        <p>For any questions or clarifications, please contact our support team at:</p>
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
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Business Registration Consent</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.7)] animate-[pulse_3s_ease_infinite]">
            Business Registration Consent Form
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
            Contact our support team for any inquiries about our business registration consent form.
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
          <meta name="title" content="Reflo Hub – Business Registration Consent Form" />
          <meta
            name="description"
            content="Review the Business Registration Consent Form for Reflo Hub, outlining terms for businesses joining the platform, including fees, lead management, and anti-circumvention policies."
          />
          <meta
            name="keywords"
            content="Reflo Hub business registration, consent form, SaaS platform terms, freelancer lead management, anti-circumvention policy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessRegistrationConsent;