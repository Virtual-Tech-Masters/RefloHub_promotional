import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const PrivacyPolicy = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const policySections = [
    {
      title: 'Information We Collect',
      content: `
        <h4 class="font-semibold">Personal Data:</h4>
        <p>When you register, we immediately get personal information from you, such as:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>The nation and the city where you live</li>
          <li>Identification documents (for validation)</li>
          <li>A live snapshot captured straight through our platform for KYC verification</li>
        </ul>
        <h4 class="font-semibold mt-4">Details of the Account and Payment:</h4>
        <p>In order to sign up for Reflo Hub services, we gather billing data:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Credit/debit card information (securely handled by Stripe and other third-party payment gateways)</li>
          <li>Contact information and billing address</li>
        </ul>
        <p><strong>Note:</strong> Sensitive credit card information is not kept on our systems. Certified payment gateways securely handle and encrypt payment information.</p>
        <h4 class="font-semibold mt-4">Lead Data (provided by independent contractors):</h4>
        <ul class="list-disc pl-5 space-y-2">
          <li>Contact information for the client (name, phone, email, and city)</li>
          <li>Details of the requested service</li>
        </ul>
        <p>In order to effectively match businesses and freelancers, we securely keep this information.</p>
        <h4 class="font-semibold mt-4">Automatic Information (Tracking and Cookies):</h4>
        <p>Non-personal information such as IP address, device kind, browser information, page interactions, and navigation history may be automatically gathered by us. Cookies enable us to optimise the functionality of our website and improve your user experience.</p>
      `,
    },
    {
      title: 'How We Use Your Information',
      content: `
        <p>We use your personal information to deliver and enhance Reflo Hub. services. In particular, we utilize data to:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Create and manage your user account.</li>
          <li>Use a live photo to confirm your identity (fraud prevention).</li>
          <li>Assist in connecting corporations with independent contractors.</li>
          <li>Safely handle subscription fee processing.</li>
          <li>Enhance platform performance (research and analytics).</li>
          <li>Share special deals, platform upgrades, or service modifications.</li>
          <li>Quickly address your support requests.</li>
        </ul>
      `,
    },
    {
      title: 'How We Share Your Information',
      content: `
        <p>We restrict data sharing and uphold strict confidentiality. Only the following circumstances will result in the sharing of your personal information:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>When working with businesses and freelancers, just the information that is necessary to enable lead exchange and direct payments—such as name, city, and contact—is given.</li>
          <li>Third-party service providers include cloud hosting companies, analytics services like Google Analytics, payment processors like Stripe and PayPal, and communication tools like SendGrid and MailChimp.</li>
          <li><strong>Legal Compliance:</strong> We provide information to adhere to legal procedures or enforce platform regulations as mandated by law or requested by authorities.</li>
        </ul>
        <p><strong>Important:</strong> Reflo Hub. does not manage or mediate financial transactions between businesses and freelancers; as a result, our systems do not keep or process any financial information related to these transactions.</p>
      `,
    },
    {
      title: 'Security of Data',
      content: `
        <p>We put industry-standard security measures first, such as:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>SSL encryption to protect your data while it's being transmitted.</li>
          <li>Use AWS or other trustworthy suppliers for secure cloud storage.</li>
          <li>Frequent software updates and security audits.</li>
          <li>Tight restrictions on access to private information.</li>
        </ul>
        <p>Despite our strong security measures, no data transmission method is completely safe. Any security issues should be reported right away to <a href="mailto:support@reflohub.com" class="text-orange-400 dark:text-orange-300 hover:underline">support@reflohub.com</a>.</p>
      `,
    },
    {
      title: 'International Transfers of Data',
      content: `
        <p>Your data may be processed and kept in the US, Canada, and other countries as part of Reflo Hub.'s global operations. We guarantee adherence to relevant international data transfer regulations and safeguards (such as GDPR-compliant processors).</p>
      `,
    },
    {
      title: 'Your Rights to Data Privacy',
      content: `
        <p>You are in complete control of your data:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Right of access:</strong> Ask for copies of the personal information that is kept about you.</li>
          <li><strong>Correction right:</strong> Modify or amend your account information right on your profile page.</li>
          <li><strong>Right to deletion:</strong> Ask that your account and all related data be deleted.</li>
          <li><strong>Consent can be withdrawn</strong> at any time by closing your account or unsubscribing from marketing.</li>
        </ul>
        <p>Contact us to exercise these rights at <a href="mailto:privacy@reflohub.com" class="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a>.</p>
      `,
    },
    {
      title: 'Compliance with Global Privacy Regulations',
      content: `
        <p>Reflo Hub. conforms with the following frameworks and legislation pertaining to data protection:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>GDPR (Europe):</strong> We handle data in a transparent and legal manner; residents of Europe can ask questions about compliance by contacting our EU representative ([Insert EU Contact Details]).</li>
          <li><strong>CCPA (California, USA):</strong> California residents may request access, deletion, and opt-out of data sales (we do not sell your data).</li>
          <li><strong>PIPEDA (Canada):</strong> We closely follow Canadian privacy laws and standards that regulate the use of personal information.</li>
        </ul>
      `,
    },
    {
      title: 'Cookies and Analytics',
      content: `
        <p>Cookies are used for:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Customising your experience with Reflo Hub.</li>
          <li>Examining platform trends and performance.</li>
          <li>Improving user verification and security.</li>
          <li>Overseeing advertising or promotion efforts.</li>
        </ul>
        <p>Your Reflo Hub experience may be limited if you choose to disable cookies in your browser's settings.</p>
      `,
    },
    {
      title: 'Third-Party Links',
      content: `
        <p>Reflo Hub. might have links to other websites (payment gateways, listed businesses, etc.). The content or privacy policies of third-party websites are not our responsibility.</p>
      `,
    },
    {
      title: "Children's Privacy",
      content: `
        <p>Reflo Hub. services are not meant for anyone under the age of 18. We don't intentionally gather or use information from children. We promptly remove any personal information we find belonging to a minor.</p>
      `,
    },
    {
      title: 'Updates to the Privacy Policy',
      content: `
        <p>This policy is updated on a regular basis to take into account modifications to our procedures or relevant legal requirements. When there are major changes, we let people know via email or clearly display it on our website. Please review frequently.</p>
      `,
    },
    {
      title: 'Contact Us',
      content: `
        <p>Questions or concerns? We’re here to help.</p>
        <p><strong>Reflo Hub Privacy Team</strong></p>
        <p><strong>Email:</strong> <a href="mailto:privacy@reflohub.com" class="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a></p>
        <p><strong>Address:</strong> Reflo Hub FZ LLC<br />
          IFZA Business Park, DDP<br />
          PO Box 342001, Dubai, United Arab Emirates</p>
        <p><strong>Phone:</strong>1-855-220-0505</p>
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
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Privacy Policy</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.7)] animate-[pulse_3s_ease_infinite]">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Reflo Hub is committed to protecting your privacy. Learn how we collect, use, and safeguard your personal data.
          </p>
        </motion.div>

        {/* Policy Sections */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          <p className="text-gray-500 dark:text-gray-400 mb-6">Last Updated: 2025-07-01</p>
          {policySections.map((section, index) => (
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
            Contact our privacy team for any inquiries about our data protection practices.
          </p>
          <motion.a
            href="mailto:privacy@reflohub.com"
            variants={{ hover: { scale: 1.05, boxShadow: '0 0 40px rgba(255, 165, 0, 0.5)' }, tap: { scale: 0.95 } }}
            whileHover="hover"
            whileTap="tap"
            className="group inline-flex px-8 py-4 text-white bg-gradient-to-r from-sky-500 to-orange-300 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Contact Privacy Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </motion.a>
        </motion.div>

        {/* SEO Metadata */}
        <motion.div className="hidden">
          <meta name="title" content="Reflo Hub – Privacy Policy" />
          <meta
            name="description"
            content="Review the Privacy Policy for Reflo Hub, outlining how we collect, use, and safeguard your personal data in compliance with GDPR, CCPA, PIPEDA, and other applicable laws."
          />
          <meta
            name="keywords"
            content="Reflo Hub privacy policy, GDPR compliance, CCPA compliance, PIPEDA compliance, data protection, SaaS platform privacy, personal data security"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;