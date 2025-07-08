import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const DataProcessingAgreement = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const dpaSections = [
    {
      title: 'Introduction',
      content: `
        <p>The Terms of Use and/or Subscription Agreement (the "Main Agreement") includes this Global Data Processing Agreement ("Agreement" or "DPA") between Reflo Hub Ltd Inc., a Canadian corporation that was incorporated and has its main office at [Insert Address] ("Reflo Hub Ltd", "we", "us", or "Processor"), AND the user (company or freelancer) operating as a data controller or business according to applicable law ("User", "you", or "Controller").</p>
        <p>The processing of personal data provided to or gathered through the Reflo Hub Ltd platform and services is governed by this agreement.</p>
      `,
    },
    {
      title: 'Definitions',
      content: `
        <p>All capitalised phrases have the meaning specified in the main agreement unless otherwise indicated in this DPA. The definitions listed below are applicable:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Personal Data:</strong> Any information pertaining to an identified or identifiable natural person, such as names, emails, contact details, IP addresses, and other data as defined by applicable regulations (such as the CCPA or GDPR).</li>
          <li><strong>Data Subject:</strong> Refers to the person to whom personal information pertains.</li>
          <li><strong>Processing, Processor, Controller, Sub-processor, Supervisory Authority:</strong> As defined by GDPR Article 4.</li>
          <li><strong>Applicable Laws:</strong> Refers to all data protection laws and rules, such as the California Consumer Privacy Act (CCPA), the EU/UK GDPR, Canada's PIPEDA, and any other privacy or data protection legislation in the locations where Reflo Hub Ltd conducts business or has users.</li>
        </ul>
      `,
    },
    {
      title: 'Scope and Purpose',
      content: `
        <p>This DPA regulates how Reflo Hub Ltd processes user-provided personal data in order to deliver the Reflo Hub Ltd platform and associated services (collectively, the "Services"). Personal data is only processed by Reflo Hub Ltd in order to provide, maintain, and enhance the services.</p>
      `,
    },
    {
      title: 'Functions and Accountabilities',
      content: `
        <ul class="list-disc pl-5 space-y-2">
          <li>According to applicable law, the User is the "Data Controller" or a comparable entity.</li>
          <li>Reflo Hub Ltd represents the user as a "data processor".</li>
          <li>Every party must abide by its own responsibilities under the relevant data protection law.</li>
        </ul>
      `,
    },
    {
      title: 'Types of Personal Information Processed',
      content: `
        <p>The following types of personal data may be processed by Reflo Hub Ltd.:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Contact information (name, nationality, city, phone number, and email address)</li>
          <li>Lead information provided by independent contractors (client name, service requirement, and address)</li>
          <li>Identifiers and account credentials</li>
          <li>Analytics and usage information (such as IP address, browser type, and device logs)</li>
          <li>Photos from profiles, including real-time photo confirmations</li>
          <li>Records of messages and chats between companies and independent contractors</li>
        </ul>
        <p>There is no deliberate collection or processing of any particular categories of personal data, such as biometric, health, or political views.</p>
      `,
    },
    {
      title: 'Rights of Data Subjects',
      content: `
        <p>To the degree that it is legally allowed, Reflo Hub Ltd. will:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Help the user respond to objections, rectification, erasure (also known as the "right to be forgotten"), data portability, and data subject access requests (DSARs).</li>
          <li>Unless otherwise required by law, forward any direct request from a data subject to the appropriate user for processing.</li>
        </ul>
      `,
    },
    {
      title: 'Subprocessors',
      content: `
        <p>Reflo Hub Ltd. may use outside subprocessors for platform, analytics, or infrastructure tasks, such as:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Cloud hosting: Google Cloud Platform (GCP) and Amazon Web Services (AWS)</li>
          <li>Payment processors: Wise (just for subscriptions), PayPal, and Stripe</li>
          <li>Email/Communication: SendGrid, Intercom, Mailgun</li>
        </ul>
        <p>Written agreements guaranteeing equal data protection obligations apply to all subprocessors. Before adding new subprocessors, Reflo Hub Ltd. must give at least ten days' notice by email or platform notification. You can contact <a href="mailto:privacy@reflohubltd.com" class="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohubltd.com</a> to object on reasonable grounds.</p>
      `,
    },
    {
      title: 'Transfers Abroad',
      content: `
        <p>Due to Reflo Hub Ltd.'s international operations, data may be processed and sent to nations other than the user's home country, such as the US and Canada.</p>
        <p>Reflo Hub Ltd. depends on the following for transfers involving the European Economic Area (EEA):</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>The European Commission-approved Standard Contractual Clauses (SCCs)</li>
          <li>The European Commission's adequacy rulings for Canada</li>
          <li>Industry-standard access restrictions and encryption</li>
        </ul>
      `,
    },
    {
      title: 'Safety Procedures',
      content: `
        <p>In compliance with Article 32 of the GDPR and comparable frameworks, Reflo Hub Ltd employs the following organisational and technical measures:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>All data in transit is encrypted using TLS.</li>
          <li>AES-256 at-rest encryption</li>
          <li>Intrusion detection systems and firewalls</li>
          <li>Frequent penetration tests and vulnerability assessments</li>
          <li>Audit logs and role-based access controls</li>
          <li>For internal systems, two-factor authentication (2FA)</li>
        </ul>
      `,
    },
    {
      title: 'Confidentiality',
      content: `
        <p>All personnel and subprocessors who handle personal data are subject to confidentiality agreements. Reflo Hub Ltd makes sure they only access the bare minimum of data required to carry out their responsibilities and that they undergo frequent training on data protection.</p>
      `,
    },
    {
      title: 'Notification of Data Breach',
      content: `
        <p>If there is a breach involving personal data, Reflo Hub Ltd will:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Give the user notice as soon as possible (within 72 hours of learning about it).</li>
          <li>Offer information on the breach and appropriate cooperation.</li>
          <li>Help with effect mitigation and regulatory reporting requirements</li>
        </ul>
      `,
    },
    {
      title: 'Retention and Erasure of Data',
      content: `
        <p>When the main agreement expires or is terminated:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Unless the law requires it, Reflo Hub Ltd will erase or anonymise all personal data within 30 days.</li>
          <li>Users can submit a written request to export data before it is deleted.</li>
        </ul>
      `,
    },
    {
      title: 'Rights of Audit',
      content: `
        <p>With a minimum of 14 days' notice and a reasonable request, users may:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Ask for summary audit results, such as ISO certifications and SOC 2.</li>
          <li>Perform an audit once a year or as required by law, subject to confidentiality.</li>
        </ul>
        <p>All audits must be undertaken at the user's expense, have a restricted scope, and not interfere excessively with Reflo Hub Ltd operations.</p>
      `,
    },
    {
      title: 'Indemnity & Liability',
      content: `
        <p>Each party is responsible for adhering to the relevant data protection laws. Reflo Hub Ltd. is indemnified by the user against lawsuits resulting from:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Misuse of the platform by users</li>
          <li>Submission of unauthorised or sensitive data</li>
          <li>Failure to adhere to the Main Agreement</li>
        </ul>
      `,
    },
    {
      title: 'Jurisdiction and Governing Law',
      content: `
        <p>The laws of Canada apply to this DPA, regardless of conflict-of-law principles. Any disagreements resulting from or pertaining to this agreement will be settled in [Province], Canada's courts.</p>
      `,
    },
    {
      title: 'Amendments',
      content: `
        <p>Reflo Hub Ltd. maintains the right to make periodic updates to this DPA. Emails or dashboard notifications will be used to notify users of significant changes.</p>
      `,
    },
    {
      title: 'Contact Details',
      content: `
        <p>Please get in touch if you have any queries or worries regarding this DPA or your data protection.</p>
        <p><strong>Officer of Data Protection</strong></p>
        <p><strong>Email:</strong> <a href="mailto:privacy@reflohubltd.com" class="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohubltd.com</a></p>
        <p><strong>Address:</strong> [Insert Address]</p>
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
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Data Processing Agreement</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.7)] animate-[pulse_3s_ease_infinite]">
            Global Data Processing Agreement
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            This agreement governs the processing of personal data provided to or gathered through the Reflo Hub Ltd platform and services.
          </p>
        </motion.div>

        {/* DPA Sections */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          <p className="text-gray-500 dark:text-gray-400 mb-6">Last Updated: 2025-07-01</p>
          {dpaSections.map((section, index) => (
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
            Contact our Data Protection Officer for any inquiries about our data processing agreement.
          </p>
          <motion.a
            href="mailto:privacy@reflohubltd.com"
            variants={{ hover: { scale: 1.05, boxShadow: '0 0 40px rgba(255, 165, 0, 0.5)' }, tap: { scale: 0.95 } }}
            whileHover="hover"
            whileTap="tap"
            className="group inline-flex px-8 py-4 text-white bg-gradient-to-r from-sky-500 to-orange-300 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Contact Data Protection Officer
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </motion.a>
        </motion.div>

        {/* SEO Metadata */}
        <motion.div className="hidden">
          <meta name="title" content="Reflo Hub Ltd – Global Data Processing Agreement" />
          <meta
            name="description"
            content="Review the Global Data Processing Agreement for Reflo Hub Ltd, governing the processing of personal data in compliance with GDPR, CCPA, PIPEDA, and other applicable laws."
          />
          <meta
            name="keywords"
            content="Reflo Hub Ltd data processing agreement, GDPR compliance, CCPA compliance, PIPEDA compliance, data protection, SaaS platform privacy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DataProcessingAgreement;