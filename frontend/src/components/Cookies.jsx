import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Cookies = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const cookieSections = [
    {
      title: 'What Are Cookies?',
      content: `
        <p>Cookies are small text files placed on your device when you visit a website. They enable the site to recognise your browser, remember preferences, and perform certain functions. Cookies may be "session" (deleted when you close your browser) or "persistent" (stored until they expire or you delete them).</p>
        <p class="mt-4">We also use:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Local Storage:</strong> Browser-based storage for larger data items (e.g., user settings).</li>
          <li><strong>Pixels & SDKs:</strong> Tiny graphics or code snippets that track interactions (e.g., marketing emails, mobile web wrappers).</li>
        </ul>
      `,
    },
    {
      title: 'Why We Use Cookies',
      content: `
        <table class="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr class="bg-gray-100 dark:bg-gray-800">
              <th class="border border-gray-300 dark:border-gray-600 p-2">Purpose</th>
              <th class="border border-gray-300 dark:border-gray-600 p-2">Description</th>
              <th class="border border-gray-300 dark:border-gray-600 p-2">Cookie Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Strictly Necessary</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Enable core platform functions such as authentication, security, and payment processing. Without these cookies, the site would not function.</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2">reflo_session, csrf_token, stripe_sid</td>
            </tr>
            <tr>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Preferences & Functionality</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Remember user choices (e.g., language, dark mode, dismissed banners) and enhance user experience.</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2">locale, theme_pref, cookie_consent</td>
            </tr>
            <tr>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Analytics & Performance</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Collect pseudonymised data on site usage to improve features and debug issues.</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2">_ga, _gid (Google Analytics), mixpanel_id</td>
            </tr>
            <tr>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Advertising & Marketing</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Track referrals, measure campaign performance, and (with consent) display contextual ads about Reflo Hub. We do not use third-party retargeting or cross-context behavioural ads.</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2">utm_source, fbp (Facebook pixel – disabled by default until consent)</td>
            </tr>
            <tr>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Fraud Prevention</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Detect suspicious activity and protect against bot attacks.</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2">h_captcha_session, ip_hash</td>
            </tr>
          </tbody>
        </table>
      `,
    },
    {
      title: 'Third-Party Cookies & SDKs',
      content: `
        <p>Reflo Hub may integrate with trusted third parties. When their services are loaded, they may set cookies or use SDKs subject to their own policies.</p>
        <table class="w-full border-collapse border border-gray-300 dark:border-gray-600 mt-4">
          <thead>
            <tr class="bg-gray-100 dark:bg-gray-800">
              <th class="border border-gray-300 dark:border-gray-600 p-2">Provider</th>
              <th class="border border-gray-300 dark:border-gray-600 p-2">Purpose</th>
              <th class="border border-gray-300 dark:border-gray-600 p-2">Opt-Out Resource</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Stripe</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Secure payment processing</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Managed via Reflo Hub settings; essential cookie cannot be disabled.</td>
            </tr>
            <tr>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Google Analytics</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Site analytics and performance</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2"><a href="https://tools.google.com/dlpage/gaoptout" class="text-orange-400 dark:text-orange-300 hover:underline">https://tools.google.com/dlpage/gaoptout</a></td>
            </tr>
            <tr>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Mixpanel</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Product analytics & event tracking</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2"><a href="https://mixpanel.com/optout/" class="text-orange-400 dark:text-orange-300 hover:underline">https://mixpanel.com/optout/</a></td>
            </tr>
            <tr>
              <td class="border border-gray-300 dark:border-gray-600 p-2">HubSpot</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Optional live chat & CRM widget (business users)</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Cookie banner toggle; <a href="https://hubspot.com/legal/privacy-policy" class="text-orange-400 dark:text-orange-300 hover:underline">hubspot.com/legal/privacy-policy</a></td>
            </tr>
          </tbody>
        </table>
        <p class="mt-4">We require all third-party vendors to process data in compliance with applicable privacy laws (GDPR, CCPA, PIPEDA) and standard contractual clauses.</p>
      `,
    },
    {
      title: 'Cookie Consent & Management',
      content: `
        <ul class="list-decimal pl-5 space-y-2">
          <li><strong>Banner & Preference Centre:</strong> On first visit from the EEA, UK, or any jurisdiction requiring consent, you will see a banner that allows you to:
            <ul class="list-disc pl-5 mt-2 space-y-1">
              <li>Accept all cookies</li>
              <li>Reject all optional cookies</li>
              <li>Customise categories (toggle Analytics, Advertising, etc.)</li>
            </ul>
          </li>
          <li><strong>Continued Browsing:</strong> In regions where implied consent is permitted (e.g., Canada), continued use signifies agreement to our cookie practices, subject to browser controls.</li>
          <li><strong>Change Settings:</strong> Access the preference centre anytime via “Cookie Settings” in the website footer. Your choices are stored in the cookie_consent cookie for 12 months.</li>
          <li><strong>Browser Controls:</strong> Most browsers let you delete or block cookies. Disabling strictly necessary cookies may break site functionality.</li>
        </ul>
      `,
    },
    {
      title: 'Duration & Retention',
      content: `
        <table class="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr class="bg-gray-100 dark:bg-gray-800">
              <th class="border border-gray-300 dark:border-gray-600 p-2">Cookie Type</th>
              <th class="border border-gray-300 dark:border-gray-600 p-2">Default Lifetime</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Strictly Necessary</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Session or up to 7 days</td>
            </tr>
            <tr>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Preferences</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2">6 months to 1 year</td>
            </tr>
            <tr>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Analytics</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2">13 months (per GDPR max)</td>
            </tr>
            <tr>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Marketing</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2">90 days</td>
            </tr>
          </tbody>
        </table>
        <p class="mt-4">Persistent cookies automatically expire after the periods above or sooner if you delete them.</p>
      `,
    },
    {
      title: 'Do Not Track (DNT)',
      content: `
        <p>Reflo Hub honours browser DNT signals by disabling analytics and marketing cookies unless you explicitly override the preference in the Cookie Settings centre.</p>
      `,
    },
    {
      title: 'Children’s Privacy',
      content: `
        <p>We do not knowingly place cookies on devices belonging to users under 16. If you believe this has occurred, contact us at <a href="mailto:privacy@reflohub.com" class="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a>.</p>
      `,
    },
    {
      title: 'Updates to This Cookie Policy',
      content: `
        <p>We may update this policy to reflect changes in technology or regulations. Material changes will be announced via the cookie banner or in-app notice. Check the “Last updated” date to see when the policy was last revised.</p>
      `,
    },
    {
      title: 'Contact Us',
      content: `
        <p>For questions about our cookie practices or this policy, please reach out to:</p>
        <p><strong>Privacy Team – Cookies</strong></p>
        <p>Reflo Hub FZ LLC</p>
        <p>IFZA Business Park, DDP</p>
        <p>PO Box 342001, Dubai, United Arab Emirates</p>
        <p><strong>Email:</strong> <a href="mailto:privacy@reflohub.com" class="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a></p>
        <p><strong>Tel:</strong> 1-855-220-0505</p>
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
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Cookie Policy</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.7)] animate-[pulse_3s_ease_infinite]">
            Cookie Policy & User Guidelines
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Reflo Hub uses cookies to enhance your experience on our SaaS platform. Learn how we use them and manage your preferences below.
          </p>
        </motion.div>

        {/* Company Details */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto mb-16">
          <p className="text-gray-600 dark:text-gray-300">
            <strong>Head Office:</strong><br />
            IFZA Business Park, Dubai Digital Park (DDP)<br />
            PO Box 342001, Dubai, United Arab Emirates<br />
            <strong>Email:</strong> <a href="mailto:privacy@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a><br />
            Reflo Hub does not maintain a representative for cookie-related regulations in the EU/EEA or elsewhere; we manage all compliance obligations directly.
          </p>
        </motion.div>

        {/* Cookie Sections */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          <p className="text-gray-500 dark:text-gray-400 mb-6">Last Updated: 2025-07-07</p>
          {cookieSections.map((section, index) => (
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
            Contact our Privacy Team for any inquiries about our cookie practices or this policy.
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
          <meta name="title" content="Reflo Hub – Cookie Policy & User Guidelines" />
          <meta
            name="description"
            content="Learn about Reflo Hub’s Cookie Policy, including how we use cookies, third-party integrations, and your consent options for our SaaS platform."
          />
          <meta
            name="keywords"
            content="Reflo Hub cookie policy, website cookies, privacy policy, GDPR compliance, CCPA compliance, PIPEDA, cookie consent, third-party cookies"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Cookies;