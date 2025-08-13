import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Check, Shield, Globe, Star, BarChart, Coins, UserCheck, MessageSquare, CreditCard, TrendingUp,CheckCircle } from 'lucide-react';
import { useRef } from 'react';

// Reusable Card Component
const Card = ({ title, description, icon: Icon, index, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 ${className}`}
  >
    {Icon && <Icon className="w-6 h-6 text-orange-300 mb-4 mx-auto" aria-hidden="true" />}
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

const Freelancer = () => {
    const categories = [
    'Real Estate',
    'Mortgage Brokers',
    'Immigration Consultants',
    'Legal Services',
    'Website Development & Digital Marketing',
    'Tours & Travel',
    'Auto Sales and Parts',
    'Home Services & HVAC',
    'Tuition and Coaching Centres',
    'Skincare & Beauty Clinics',
    'Event Venues & Party Halls',
    'Fencing and Landscaping',
    'Concrete & Driveways',
    'Insurance Providers',
    'And More',
  ];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacityBg = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden bg-white dark:bg-gray-950 text-gray-900 dark:text-white font-sans">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-100 dark:from-gray-950 via-gray-200 dark:via-gray-900 to-gray-100 dark:to-gray-950"
        style={{ y: yBg, opacity: opacityBg }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-orange-300/10 dark:from-sky-500/10 dark:to-orange-300/10 animate-[gradient-shift_20s_ease_infinite] bg-[length:200%_200%]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </motion.div>

      {/* Floating Particles (Reduced to 30 for performance) */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => {
          const size = Math.random() * 4 + 1;
          const delay = Math.random() * 5;
          const duration = Math.random() * 10 + 10;
          const x = Math.random() * 100;
          const y = Math.random() * 100;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: i % 3 === 0 ? 'rgba(255, 165, 0, 0.3)' : i % 2 === 0 ? 'rgba(14, 165, 233, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                boxShadow: `0 0 ${size * 2}px ${size}px ${i % 3 === 0 ? 'rgba(255, 165, 0, 0.1)' : i % 2 === 0 ? 'rgba(14, 165, 233, 0.1)' : 'rgba(255, 255, 255, 0.05)'}`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [(Math.random() - 0.5) * 50, 0, (Math.random() - 0.5) * 50],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <section className="pt-12 pb-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-12 text-center">
            <motion.div
              className="inline-flex items-center space-x-2 bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full px-4 py-1.5 mb-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-4 h-4 text-orange-300" aria-hidden="true" />
              {/* <span className="text-sm text-gray-700 dark:text-gray-100">Last Updated: July 01, 2025</span> */}
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              🚀 <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Earn Passive Income</span> with Reflo Hub
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Simply refer leads from your network to earn money! No selling, no cold calling, no closing deals. Choose from 50+ high commision  categories like real estate, education, finance, healthcare, and more. 
              <br /> 
            No middlemen. No cuts. Freelancers keep 100% of what they earn.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              {[
                { icon: Check, text: 'No Selling Required' },
                { icon: Globe, text: 'Global Opportunities' },
                { icon: TrendingUp, text: 'Recurring Commissions' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex items-center bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full px-4 py-2"
                >
                  <item.icon className="w-4 h-4 text-orange-300 mr-2" aria-hidden="true" />
                  <span className="text-sm">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Why Join Reflo Hub */}
        <section className="py-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            🌟 Why Freelancers Choose <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Reflo Hub</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: '✅ Simple, Stress-Free Income',
                description: 'No cold calling, no selling, no closing. Choose from 50+ high commision income categories—businesses take care of the rest; you just supply the leads.',
              },
              {
                title: '🌎 Local Simplicity, Global Opportunity',
                description: 'Refer leads from your city or somewhere else in the world to earn money. There are no geographical restrictions on your profits.',
              },
              {
                title: '💸 Recurring Monthly Commissions',
                description: 'Through exclusive alliances with our esteemed partners, Fly Fares, VTM (Virtual Tech Masters), and Tech Diamonds, you can earn monthly recurring commissions.',
              },
            ].map((item, index) => (
              <Card key={index} title={item.title} description={item.description} index={index} />
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            💡 How <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">It Works</span> in 4 Simple Steps
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: UserCheck, title: '1. Sign Up & Verify', description: 'Fast registration with live photo verification for secure profiles.' },
              { icon: Coins, title: '2. Submit Leads', description: 'Select from 50+ business sectors and submit confirmed leads using your monthly coins.' },
              { icon: MessageSquare, title: '3. Track & Communicate', description: 'Monitor lead status and discuss commissions directly with businesses.' },
              { icon: CreditCard, title: '4. Get Paid Directly', description: 'Receive payments via PayPal, Wise, or bank transfer for successful conversions.' },
            ].map((item, index) => (
              <Card key={index} title={item.title} description={item.description} icon={item.icon} index={index} className="text-center" />
            ))}
          </div>
        </section>

        {/* Special Earning Opportunities */}
        <section className="py-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            💼 Special <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Earning Opportunities</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: '🚀 Virtual Tech Masters (VTM)',
                description: 'Web development and digital marketing services',
                url: 'https://www.virtualtechmasters.com/',
                items: [
                  '10% recurring monthly commission for ongoing service packages',
                  'Ideal for freelancers with startup, small business, or entrepreneur connections',
                ],
              },
              {
                icon: Globe,
                title: 'Tech Diamonds',
                description: 'Web development and digital marketing services in India',
                url: 'https://www.techdiamonds.net/',
                items: [
                  '10% recurring monthly commission for ongoing service packages',
                  'Ideal for freelancers with startup, small business, or entrepreneur connections in India',
                ],
              },
              {
                icon: Globe,
                title: '🌍 Fly Fares',
                description: 'Comprehensive travel services',
                url: 'https://flyfares.net/',
                items: [
                  'Ongoing commissions for every travel service booked',
                  'Perfect for freelancers with corporate clients, families, or frequent travelers in their network',
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-orange-300/50 rounded-xl p-8"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-lg mr-4">
                    <item.icon className="w-6 h-6 text-orange-300" aria-hidden="true" />
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold hover:text-orange-400 transition-colors duration-200"
                  >
                    {item.title}
                  </a>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                <ul className="space-y-3">
                  {item.items.map((text, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-4 h-4 text-orange-300 mt-1 mr-2 flex-shrink-0" aria-hidden="true" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Dashboard Features */}
        <section className="py-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            📋 Freelancer <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Dashboard Features</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Coins, title: 'Coin Balance', description: 'View available coins for submitting leads' },
              { icon: MessageSquare, title: 'Lead Submission', description: 'Easy-to-use form for entering client details' },
              { icon: BarChart, title: 'Lead Tracker', description: 'Real-time updates on your submitted leads' },
              { icon: TrendingUp, title: 'Earnings Overview', description: 'Track earnings history and pending payments' },
              { icon: UserCheck, title: 'Chat Interface', description: 'Communicate directly with businesses' },
              { icon: Star, title: 'Leaderboard & Ratings', description: 'Showcase reliability to attract more business' },
            ].map((item, index) => (
              <Card key={index} title={item.title} description={item.description} icon={item.icon} index={index} />
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            📦 <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Pricing</span> and Subscription
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-orange-300/50 rounded-xl p-8 text-center relative"
            >
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
                <span className="inline-flex font-bold items-center gap-1 px-4 py-2 rounded-full text-xs bg-gradient-to-br from-sky-500/90 to-orange-300/90 text-white shadow-xl ring-2 ring-white dark:ring-gray-950 animate-bounce-slow">
                  <svg className="w-4 h-4 text-white opacity-80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 2v2m6.364 1.636l-1.414 1.414M22 12h-2m-1.636 6.364l-1.414-1.414M12 22v-2m-6.364-1.636l1.414-1.414M2 12h2m1.636-6.364l1.414 1.414" />
                  </svg>
                  50% OFF
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-2">🌟 Freelancer Subscription</h3>
              <div className="flex justify-center items-end mb-4">
                <span className="text-4xl font-bold">$9.99</span>
                <span className="text-lg text-gray-600 dark:text-gray-300 ml-1">/month</span>
              </div>
              <p className="text-md text-sky-500 mb-2 font-bold">(was $19.98) </p>
              <p className="text-md text-orange-300 mb-6 font-bold">Limited Time Offer </p>


              <ul className="space-y-3 mb-8 text-left">
                {[
                  'Full dashboard access',
                  '5 submission coins each month',
                  'Access to premium businesses',
                  'Special partner opportunities',
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="w-4 h-4 text-orange-300 mr-2" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="/signup"
                role="button"
                aria-label="Sign up for Freelancer Subscription"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block w-full bg-gradient-to-r from-sky-500 to-orange-300 text-white font-medium rounded-lg py-3 px-6 transition-all duration-300 hover:shadow-lg hover:shadow-orange-300/20"
              >
                Get Started
              </motion.a>

              <p className="text-sm text-gray-500 font-bold dark:text-gray-400 mt-4">Additional <span className='text-sky-500 font-bold'>30%</span> discount for students with valid ID</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-orange-300 dark:border-white/10 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-6">💰 Buy Extra Coins</h3>

              <div className="space-y-4 mb-8">
                {[
                  { price: '$5', coins: '10 coins' },
                  { price: '$10', coins: '20 coins' },
                ].map((item, i) => (
                  <div key={i} className="border border-orange-300 dark:bg-white/10 rounded-lg p-4">
                    <div className="text-xl font-bold mb-4">{item.price}</div>
                    <div className="text-gray-600 dark:text-gray-300">{item.coins}</div>
                  </div>
                ))}
              </div>

              <motion.a
                href="/buy-coins"
                role="button"
                aria-label="Purchase additional coins"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block w-full bg-gradient-to-r from-sky-500 to-orange-300 text-white mt-9 dark:bg-white/10 hover:bg-gray-300/60 dark:hover:bg-white/20 border border-gray-300 dark:border-white/10 rounded-lg py-3 px-6 transition-colors duration-300"
              >
                Purchase Coins
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Top Niches */}
        <section className="py-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            🏅 50+ Top <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Niches</span> for Higher Income
          </motion.h2>

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                className="p-4 bg-gray-100/60 dark:bg-gray-800/50 rounded-lg flex items-center gap-3 border border-sky-500/20 dark:border-sky-400/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(14,165,233,0.5)' }}
              >
                <CheckCircle className="w-5 h-5 text-sky-500" />
                <span className="text-gray-900 dark:text-white">{category}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            💬 Freelancer <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Testimonials</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: 'I never imagined that network referrals could be that lucrative. It was easy and risk-free thanks to Reflo Hub. By just submitting leads, I’ve established a consistent monthly income.',
                author: 'Priya S., Toronto freelancer',
                rating: 4,
              },
              {
                quote: 'The monthly recurring commission from VTM is the best feature of Reflo Hub. With just one successful referral, I make a consistent monthly income.',
                author: 'Jake M., New York-based digital marketer',
                rating: 4,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="text-lg italic mb-6">{item.quote}</blockquote>
                <div className="font-semibold">{item.author}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              📈 Ready to <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Start Earning</span> Today?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
              Create an account, get verified, and turn your network into steady passive income. No hidden fees, no selling required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/get-started"
                rel="noopener noreferrer"
                role="button"
                aria-label="Sign up as a freelancer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(255, 165, 0, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex px-8 py-4 bg-gradient-to-r from-sky-500 to-orange-300 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  👉 Sign Up as a Freelancer
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              <motion.a
                href="mailto:support@reflohubltd.com"
                role="button"
                aria-label="Contact support for help"
                whileHover={{ y: -3 }}
                className="group relative inline-flex px-8 py-4 bg-gradient-to-r from-sky-500 to-orange-300  dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 text-white dark:text-white rounded-xl font-semibold text-lg hover:bg-gray-200/60 dark:hover:bg-white/10 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">Need Help Getting Started?</span>
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* SEO Metadata */}
        <motion.div className="hidden">
          <meta name="title" content="Reflo Hub – Freelancer Opportunities" />
          <meta
            name="description"
            content="Join Reflo Hub as a freelancer to earn passive income by referring leads in 50+ categories like real estate, finance, and travel. No selling required."
          />
          <meta
            name="keywords"
            content="Reflo Hub freelancer, passive income, lead generation, referral program, earn money online, global opportunities, freelancer platform"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Freelancer;
