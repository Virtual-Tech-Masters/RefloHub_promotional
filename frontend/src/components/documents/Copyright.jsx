import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Copyright = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const copyrightSections = [
    {
      title: 'Introduction',
      content: `
        <p>Welcome to the "Site" that is Reflo Hub Ltd. Our rights with regard to intellectual property (IP) and the safeguarding of content on our platform are spelled out in detail in our copyright policy. You confirm that you have read and will abide by this policy by using Reflo Hub Ltd.</p>
      `,
    },
    {
      title: 'Ownership of Copyright',
      content: `
        <p>International copyright and intellectual property laws protect all content displayed or made available through Reflo Hub Ltd., including but not limited to text, images, graphics, logos, software code, platform design, user interfaces, databases, and downloadable materials ("Content"). Reflo Hub Ltd., its licensors, or designated third-party content providers are the sole owners of this content.</p>
      `,
    },
    {
      title: 'Permitted Use',
      content: `
        <p>Reflo Hub Ltd. users are allowed to:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>The content may be viewed and used for non-commercial, personal purposes.</li>
          <li>As long as all copyright notices and trademarks are upheld, you may download or print documents for your own use or in relation to Reflo Hub Ltd.'s services.</li>
        </ul>
        <p>No more licenses or rights are given, either expressly or implicitly.</p>
      `,
    },
    {
      title: 'Activities Prohibited',
      content: `
        <p>You are specifically not allowed to:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Redistributing or republishing any content, in whole or in part, without Reflo Hub Ltd.'s full written approval.</li>
          <li>Copying, changing, or adapting our work for profit or for distribution, publication, or public display.</li>
          <li>Reproducing or extracting content from the platform by automated bots, data mining, scraping, or other methods.</li>
          <li>Using Reflo Hub Ltd.'s proprietary technology, structure, or content to create derivative works or services without express consent.</li>
          <li>Eliminating or changing any trademarks, proprietary rights indications, or copyright notices.</li>
        </ul>
      `,
    },
    {
      title: 'Notice of Trademarks',
      content: `
        <p>Reflo Hub Ltd is the only owner of all registered and unregistered trademarks pertaining to the names "Reflo Hub Ltd", "PayPerRef", and any associated logos, designs, graphics, slogans, and trade names that are shown on the website. It is extremely forbidden to use these trademarks without permission.</p>
      `,
    },
    {
      title: 'User-generated Content',
      content: `
        <p>Content, including text, images, reviews, comments, and communications, can be uploaded or submitted by users ("User Content"). In addition to granting Reflo Hub Ltd a non-exclusive, royalty-free licence to use, reproduce, adapt, and publicly display such user content within the platform and related promotional activities, users guarantee that they own or control all rights to such user content.</p>
        <p>Users agree to hold Reflo Hub Ltd harmless from any claims resulting from alleged infringement of their contributed user content.</p>
      `,
    },
    {
      title: 'Reporting Copyright Infringement (DMCA/Notice)',
      content: `
        <p>Intellectual property rights are respected by Reflo Hub Ltd. Please contact us straight away at: <a href="mailto:legal@reflohubltd.com" class="text-orange-400 dark:text-orange-300 hover:underline">legal@reflohubltd.com</a> if you think your copyrighted material has been misused or violated on our site.</p>
        <p>You must include the following in your notification:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Identification of the allegedly infringed copyrighted work.</li>
          <li>The content that is allegedly infringing is identified, together with any obvious references or linkages.</li>
          <li>Your address, phone number, and email address.</li>
          <li>A declaration of good faith regarding unapproved use.</li>
          <li>A declaration attesting to your power to act and accuracy under penalty of perjury.</li>
          <li>Your signature, either digital or tangible.</li>
        </ul>
        <p>If necessary, we will suspend user accounts or remove content as part of our investigation and swift response.</p>
      `,
    },
    {
      title: 'The Counter-Notice Process',
      content: `
        <p>You can send a counter-notification to the email address above if any of the content you submitted was accidentally or incorrectly removed. Your counter-notice needs to contain:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Identification of the deleted material.</li>
          <li>If you believe that removal was an error or misidentification, you must state this under penalty of perjury.</li>
          <li>Your complete name, email, phone number, and address.</li>
          <li>Accept service of process from the person who filed the first infringement notification, and consent to the jurisdiction where you live.</li>
          <li>Your signature, either digital or tangible.</li>
        </ul>
      `,
    },
    {
      title: 'Warranty Disclaimer',
      content: `
        <p>All content on Reflo Hub Ltd. is provided "as is" and "as available" only. The information and resources on this website are not guaranteed to be correct, comprehensive, dependable, up-to-date, or error-free.</p>
      `,
    },
    {
      title: 'Liability Limitations',
      content: `
        <p>Even if informed of the potential for such damages, Reflo Hub Ltd., its directors, employees, affiliates, or partners will never be held responsible for indirect, special, incidental, or consequential damages resulting from the use or inability to utilize the materials on this platform.</p>
      `,
    },
    {
      title: 'Amendments and Updates',
      content: `
        <p>This copyright policy may be changed at any time and without previous notification by Reflo Hub Ltd. On this page, updates will be prominently displayed. Regular review of this page is encouraged.</p>
      `,
    },
    {
      title: 'Contact Information',
      content: `
        <p>For questions about this copyright policy, get in touch with:</p>
        <p><strong>Email:</strong> <a href="mailto:legal@reflohubltd.com" class="text-orange-400 dark:text-orange-300 hover:underline">legal@reflohubltd.com</a></p>
        <p><strong>Address:</strong> [Enter Your Business Address in Canada]</p>
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
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Copyright Policy</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.7)] animate-[pulse_3s_ease_infinite]">
            Copyright Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Welcome to Reflo Hub Ltd. This policy outlines our rights regarding intellectual property and the protection of content on our platform.
          </p>
        </motion.div>

        {/* Copyright Sections */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          <p className="text-gray-500 dark:text-gray-400 mb-6">Last Updated: 2025-07-01</p>
          {copyrightSections.map((section, index) => (
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
            Contact our support team for any inquiries about our copyright policy.
          </p>
          <motion.a
            href="mailto:legal@reflohubltd.com"
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
          <meta name="title" content="Reflo Hub Ltd – Copyright Policy" />
          <meta
            name="description"
            content="Review the copyright policy for Reflo Hub Ltd, outlining intellectual property rights, permitted use, and procedures for reporting infringement."
          />
          <meta
            name="keywords"
            content="Reflo Hub Ltd copyright policy, intellectual property, DMCA notice, user-generated content, trademark protection, SaaS platform copyright"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Copyright;