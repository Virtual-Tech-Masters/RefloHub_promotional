import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const NondiscriminationStatement = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const statementSections = [
    {
      title: 'Our Commitment to Inclusion and Fair Access',
      content: `
        <p>Reflo Hub. forbids discrimination of any type based on the following grounds:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>National origin, race, or ethnicity</li>
          <li>Gender identity or gender</li>
          <li>Sexual orientation</li>
          <li>Faith or religious convictions</li>
          <li>Generational status or age</li>
          <li>Health or disability status</li>
          <li>Status of marriage or family</li>
          <li>Immigration or citizenship status</li>
          <li>Background in socioeconomics</li>
          <li>Ideology or political allegiance</li>
        </ul>
        <p>Every user of our platform, be they a guest, business, or freelancer, has the right to equitable treatment, equal opportunity, and complete access to our services.</p>
      `,
    },
    {
      title: 'Fair Access for Freelancers',
      content: `
        <p>Reflo Hub.'s commitments include:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Giving all independent contractors, irrespective of location or experience, equal access to companies and leads.</li>
          <li>Avoiding partiality or bias in the distribution or evaluation of leads.</li>
          <li>Preventing companies from evaluating or dismissing independent contractors based on personal characteristics unrelated to output.</li>
          <li>Giving all independent contractors with active subscriptions access to the same tools, dashboards, and visibility.</li>
        </ul>
      `,
    },
    {
      title: 'Fair Treatment for Companies',
      content: `
        <p>Reflo Hub. guarantees:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>All validated companies receive the same treatment, irrespective of their ownership, size, or location.</li>
          <li>Only plan features and usage—not name, industry, or background—are used to determine listings, lead access, and exposure.</li>
          <li>No company may be unjustly singled out, devalued, or concealed because of personal characteristics or viewpoints.</li>
        </ul>
      `,
    },
    {
      title: 'Zero Tolerance for Discriminatory Behavior',
      content: `
        <p>We have a zero-tolerance policy for users (whether they are freelancers or businesses) who are caught engaging in:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Slurs or messages that discriminate</li>
          <li>Prejudicial review or rating procedures</li>
          <li>Discrimination on the basis of any protected group</li>
          <li>Abuse of platforms to censor or exclude others</li>
        </ul>
        <p>Infractions can lead to a permanent account ban, instant suspension, and, if necessary, reporting to the appropriate authorities.</p>
      `,
    },
    {
      title: 'Enforcement & Monitoring',
      content: `
        <p>To support this policy, Reflo Hub. keeps an eye on activity and does the following:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>A mechanism within the app for users to report instances of abuse or prejudice</li>
          <li>AI-powered chat message moderation and automated review tools (non-invasive, anonymized)</li>
          <li>Manual evaluations of each instance by our Trust & Safety Team</li>
          <li>Educating the community through training materials and user onboarding</li>
        </ul>
      `,
    },
    {
      title: 'How to Report Discrimination',
      content: `
        <p>Please report any instances of discrimination you encounter or observe on Reflo Hub right away by using the following form:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Email:</strong> <a href="mailto:support@reflohub.com" class="text-orange-400 dark:text-orange-300 hover:underline">support@reflohub.com</a></li>
          <li>In-dashboard Report Form > "Report a User" under user profile</li>
          <li>Confidential Reporting: When filing a complaint, you can ask to remain anonymous.</li>
        </ul>
        <p>Every report is treated with tact and looked at right away.</p>
      `,
    },
    {
      title: 'Why This Matters to Us',
      content: `
        <p>Reflo Hub is a global community as well as a platform. Our goal is to use the power of equal opportunity and ethical referrals to bridge cultural, industrial, and national divides. Everyone prospers when they are treated with respect.</p>
      `,
    },
    {
      title: 'Legal Adherence',
      content: `
        <p>The nondiscrimination policy of Reflo Hub. is consistent with:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>The Human Rights Act of Canada</li>
          <li>Human Rights Declaration of the United Nations</li>
          <li>The U.S. Civil Rights Act's Title VII (for U.S. users)</li>
          <li>The EU, UK, Australia, and other participating regions' laws pertaining to equal opportunity</li>
        </ul>
        <p>Reflo Hub. maintains the right to amend this policy in response to platform requirements or legal developments.</p>
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
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Nondiscrimination Statement</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.7)] animate-[pulse_3s_ease_infinite]">
            Reflo Hub Nondiscrimination Statement
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            At Reflo Hub., we think that respect for one another and fair opportunity are the cornerstones of international cooperation.
          </p>
        </motion.div>

        {/* Statement Sections */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          <p className="text-gray-500 dark:text-gray-400 mb-6">Last Updated: 2025-07-01</p>
          {statementSections.map((section, index) => (
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
            Contact our support team for any inquiries about our nondiscrimination statement.
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
          <meta name="title" content="Reflo Hub – Nondiscrimination Statement" />
          <meta
            name="description"
            content="Review the Nondiscrimination Statement for Reflo Hub, ensuring equal opportunity and fair treatment for all freelancers and businesses on our SaaS platform."
          />
          <meta
            name="keywords"
            content="Reflo Hub nondiscrimination policy, equal opportunity for freelancers, fairness statement for business platforms, SaaS anti-discrimination statement, inclusive diversity in lead referral programs, respectful freelancer-business partnership, global inclusive policy for users, equitable treatment on freelancer platforms, Reflo Hub accessibility and equality policy, zero tolerance for discrimination"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default NondiscriminationStatement;