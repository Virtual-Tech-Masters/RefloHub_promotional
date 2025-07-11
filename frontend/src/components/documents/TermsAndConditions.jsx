import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const TermsAndConditions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const termsSections = [
    {
      title: 'Company Details',
      content: `
        <p><strong>Reflo Hub FZ LLC</strong></p>
        <p>IFZA Business Park, (DDP)</p>
        <p>PO Box 342001, Dubai, United Arab Emirates</p>
        <p><strong>Email:</strong> <a href="mailto:privacy@reflohub.com" class="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a></p>
        <p><strong>Tel:</strong> 1-855-220-0505</p>
        <p>Reflo Hub is incorporated as a private limited company under the Dubai Integrated Economic Zones Implementing Regulations 2023. We do not maintain an establishment or appointed representative in the EU/EEA, Canada, or the United States.</p>
      `,
    },
    {
      title: 'Definitions',
      content: `
        <ul class="space-y-2">
          <li><strong>Freelancer:</strong> A User who submits leads to Businesses via the Services in exchange for referral fees.</li>
          <li><strong>Business:</strong> A User who lists products or services and pays referral fees to Freelancers when leads convert.</li>
          <li><strong>Lead:</strong> Contact information or other qualifying data relating to a prospective customer submitted through the platform.</li>
          <li><strong>Coin:</strong> A virtual credit used by Freelancers to submit one Lead. Coins have no monetary value outside the platform and are non-transferable.</li>
          <li><strong>Subscription:</strong> A recurring paid plan (e.g., Freelancer Pro Referrer, Basic, Standard, Premium) or coin pack purchase.</li>
          <li><strong>Premium Exclusivity:</strong> The feature that grants a Business exclusive access to a selected category within a 50 km radius of a chosen city. Availability is first come, first served and subject to Reflo Hub approval.</li>
        </ul>
      `,
    },
    {
      title: 'Eligibility',
      content: `
        <p>You must be at least 18 years old and have the legal capacity to enter into contracts. You warrant that all information you provide is truthful, accurate, and complete. Reflo Hub may deny or terminate accounts at its sole discretion.</p>
      `,
    },
    {
      title: 'Account Registration & Security',
      content: `
        <ul class="list-disc pl-5 space-y-2">
          <li>You are responsible for maintaining the confidentiality of your login credentials and for all activities occurring under your account.</li>
          <li>Notify us immediately of any unauthorised use or security breach.</li>
          <li>You may create only one Freelancer account and/or one Business account per legal entity unless expressly authorised by Reflo Hub.</li>
        </ul>
      `,
    },
    {
      title: 'Subscription Fees, Coin Packs & Payment Terms',
      content: `
        <h4 class="font-semibold">4.1 Fees</h4>
        <table class="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr class="bg-gray-100 dark:bg-gray-800">
              <th class="border border-gray-300 dark:border-gray-600 p-2">User Type</th>
              <th class="border border-gray-300 dark:border-gray-600 p-2">Plan</th>
              <th class="border border-gray-300 dark:border-gray-600 p-2">Price (USD)</th>
              <th class="border border-gray-300 dark:border-gray-600 p-2">Billing Cycle</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-gray-300 dark:border-gray-600 p-2">Freelancer</td><td>Pro Referrer</td><td>9.99 / month (was 14.99)</td><td>Monthly</td></tr>
            <tr><td class="border border-gray-300 dark:border-gray-600 p-2">Freelancer</td><td>Starter Coin Pack</td><td>5 (10 Coins)</td><td>One time</td></tr>
            <tr><td class="border border-gray-300 dark:border-gray-600 p-2">Freelancer</td><td>Growth Coin Pack</td><td>10 (20 Coins)</td><td>One time</td></tr>
            <tr><td class="border border-gray-300 dark:border-gray-600 p-2">Business (Global)</td><td>Basic</td><td>249 setup + 79 / month</td><td>One time + Monthly</td></tr>
            <tr><td class="border border-gray-300 dark:border-gray-600 p-2">Business (Global)</td><td>Standard</td><td>349 setup + 99 / month</td><td>One time + Monthly</td></tr>
            <tr><td class="border border-gray-300 dark:border-gray-600 p-2">Business (Global)</td><td>Premium</td><td>Price on call</td><td>Custom</td></tr>
           
          </tbody>
        </table>
        <p class="mt-4">All fees are exclusive of taxes unless stated otherwise. Applicable taxes (e.g., VAT, GST/HST, UAE VAT) are charged based on your billing address.</p>
        <h4 class="font-semibold mt-4">4.2 Billing & Renewals</h4>
        <p>Subscriptions renew automatically at the end of each billing cycle unless cancelled before renewal. You authorise Reflo Hub to charge your payment method on file. Failed payments may result in suspension.</p>
        <h4 class="font-semibold mt-4">4.3 Upgrades, Downgrades & Cancellations</h4>
        <p>You may change plans in your dashboard. Upgrades apply immediately with a pro-rated charge; downgrades apply at the next billing cycle. Setup fees are non-refundable. Monthly fees are non-refundable once charged, except as required by law.</p>
      `,
    },
    {
      title: 'Lead Submission & Referral Fees',
      content: `
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Lead Quality:</strong> Freelancers must submit accurate, permission-based data. Providing false or harvested information is prohibited.</li>
          <li><strong>Validation:</strong> Reflo Hub applies AI and manual checks. Leads failing quality standards are rejected; the Coin is refunded.</li>
          <li><strong>Conversion & Payout:</strong> When a Business marks a Lead “Converted,” the referral fee set by the Business becomes payable to the Freelancer. Payouts are processed via Stripe Connect, PayPal, or bank transfer, subject to a minimum balance and applicable processing fees.</li>
          <li><strong>Disputes:</strong> If a Business disputes a lead’s validity, both parties must attempt resolution via Reflo Hub’s in-app Dispute Centre. Our decision is final.</li>
        </ul>
      `,
    },
    {
      title: 'User Obligations & Prohibited Conduct',
      content: `
        <p>You agree not to:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Violate any applicable law, regulation, or third-party right (including privacy and anti-spam laws).</li>
          <li>Upload viruses, malware, or engage in phishing or other malicious activity.</li>
          <li>Reverse engineer, decompile, or attempt to derive the source code of the Services.</li>
          <li>Use bots, scripts, or automated means to access or overload the platform.</li>
          <li>Abuse referral systems or attempt to manipulate payouts.</li>
          <li>Submit personal data of a minor without verifiable parental consent.</li>
        </ul>
      `,
    },
    {
      title: 'Intellectual Property',
      content: `
        <p>The Services, including all content, logos, trademarks, and software code, are owned by Reflo Hub or its licensors and are protected by UAE and international intellectual property laws. Subject to these Terms, Reflo Hub grants you a limited, non-exclusive, non-transferable, revocable licence to access and use the Services for your internal business purposes.</p>
      `,
    },
    {
      title: 'User Content Licence',
      content: `
        <p>You retain ownership of Leads and any content you submit (“User Content”). You grant Reflo Hub a worldwide, royalty-free, sublicensable licence to use, reproduce, distribute, and display User Content solely for operating and improving the Services.</p>
      `,
    },
    {
      title: 'Privacy & Data Protection',
      content: `
        <p>Reflo Hub processes personal data in accordance with our Privacy Policy, GDPR Compliance Statement, CCPA Notice, PIPEDA Statement, and Cookie Policy. By using the Services, you consent to such processing.</p>
      `,
    },
    {
      title: 'Warranties & Disclaimers',
      content: `
        <p>The Services are provided “as is” and “as available.” To the maximum extent permitted by law, Reflo Hub disclaims all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that the Services will be uninterrupted, error-free, or free of harmful components, or that any Lead will convert.</p>
      `,
    },
    {
      title: 'Limitation of Liability',
      content: `
        <p>To the fullest extent permitted by law, Reflo Hub, its directors, employees, and suppliers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for loss of profits, data, or goodwill. Reflo Hub’s aggregate liability under these Terms shall not exceed the greater of (a) USD 100 or (b) the total Subscription fees paid by you to Reflo Hub in the 12 months preceding the claim.</p>
      `,
    },
    {
      title: 'Indemnification',
      content: `
        <p>You agree to indemnify and hold harmless Reflo Hub and its affiliates from any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising from: (a) your misuse of the Services; (b) your violation of these Terms; or (c) your infringement of any third-party right.</p>
      `,
    },
    {
      title: 'Suspension & Termination',
      content: `
        <p>Reflo Hub may suspend or terminate your account immediately upon notice if you breach these Terms, fail to pay fees, or engage in conduct that harms Reflo Hub or other Users. Upon termination, all licences cease, outstanding balances become due, and User Content may be deleted.</p>
      `,
    },
    {
      title: 'Governing Law & Dispute Resolution',
      content: `
        <h4 class="font-semibold">14.1 Governing Law</h4>
        <p>These Terms and any dispute arising hereunder shall be governed by the laws of the Dubai International Financial Centre (DIFC), without regard to conflict of law provisions.</p>
        <h4 class="font-semibold mt-4">14.2 Arbitration</h4>
        <p>Any dispute, controversy, or claim arising out of or relating to these Terms shall be referred to and finally resolved by arbitration under the DIFC-LCIA Arbitration Rules. The seat of arbitration shall be the DIFC, Dubai. The tribunal shall consist of one arbitrator. The language of arbitration shall be English.</p>
        <h4 class="font-semibold mt-4">14.3 Injunctive Relief</h4>
        <p>Nothing in this section prevents either party from seeking urgent injunctive relief in any competent court to protect intellectual property or confidential information.</p>
      `,
    },
    {
      title: 'Changes to the Terms',
      content: `
        <p>We may update these Terms from time to time. Material changes will be notified via email or in-app notice at least 14 days before they take effect. Continued use of the Services after the effective date constitutes acceptance of the revised Terms.</p>
      `,
    },
    {
      title: 'Other Legal Terms',
      content: `
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and Reflo Hub and supersede any prior agreements.</li>
          <li><strong>Severability:</strong> If any provision is held unenforceable, the remaining provisions remain in full force.</li>
          <li><strong>Assignment:</strong> You may not assign or transfer your rights under these Terms without our consent. Reflo Hub may assign these Terms at its discretion.</li>
          <li><strong>Force Majeure:</strong> Reflo Hub is not liable for delays or failures due to events beyond its reasonable control (e.g., natural disasters, Internet outages, government actions).</li>
          <li><strong>No Waiver:</strong> A party’s failure to enforce a provision does not constitute a waiver of future enforcement.</li>
        </ul>
      `,
    },
    {
      title: 'Contact',
      content: `
        <p>Questions about these Terms? Please contact:</p>
        <p><strong>Legal Department</strong></p>
        <p>Reflo Hub FZ LLC</p>
        <p>IFZA Business Park, DDP</p>
        <p>PO Box 342001, Dubai, United Arab Emirates</p>
        <p><strong>Email:</strong> <a href="mailto:support@reflohub.com" class="text-orange-400 dark:text-orange-300 hover:underline">support@reflohub.com</a></p>
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
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Terms & Conditions</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.7)] animate-[pulse_3s_ease_infinite]">
            Terms and Conditions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Welcome to Reflo Hub. By using our platform, you agree to these terms and conditions governing our SaaS-based referral network.
          </p>
        </motion.div>

        {/* Terms Sections */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          <p className="text-gray-500 dark:text-gray-400 mb-6">Effective Date: 2025-07-07 | Last Updated: 2025-07-07</p>
          {termsSections.map((section, index) => (
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
            Contact our support team for any inquiries about our terms and conditions.
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
          <meta name="title" content="Reflo Hub – Global SaaS Lead Referral Platform Terms & Conditions" />
          <meta
            name="description"
            content="Go over the terms and conditions for using Reflo Hub, the SaaS platform that connects businesses and freelancers worldwide with no commission."
          />
          <meta
            name="keywords"
            content="freelancer terms and conditions, SaaS referral terms, platform usage agreement, global lead generation SaaS, zero-commission platform, Reflo Hub terms"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TermsAndConditions;