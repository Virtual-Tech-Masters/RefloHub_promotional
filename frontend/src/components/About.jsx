import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Globe, Shield, Users, Zap } from 'lucide-react';

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants = {
    hover: { scale: 1.05, boxShadow: '0 0 30px rgba(255, 165, 0, 0.3)' },
  };

  const features = [
    { icon: Zap, title: 'Zero Commission', desc: 'A straightforward subscription fee ensures consistent and equitable pricing.' },
    { icon: Globe, title: 'Global Reach', desc: 'Submit leads across cities, states, and nations for global impact.' },
    { icon: Shield, title: 'Transparent Payments', desc: 'Direct payments to freelancers with no middleman or no cuts and keep 100% earnings.' },
    { icon: Users, title: 'Verified Trust', desc: 'Live-photo KYC verification ensures a safe and reliable platform.' },
  ];

  const partners = [
    { name: 'Virtual Tech Masters (VTM)', desc: 'Your partner for software solutions, web development, and digital marketing, offering freelancers monthly recurring commissions.' },
    { name: 'Fly Fares.', desc: 'International travel specialists helping freelancers earn on hotels, flights, vacation packages, and visas.' },
    { name: 'Tech Diamonds', desc: 'Your Trusted Indian Partner for Software Solutions, Web Development & Digital Marketing.' },
  ];

  const keyFeatures = [
    { title: 'Real-time Analytics', desc: 'Monitor activity logs, leads, and earnings.' },
    { title: 'Internal Chat', desc: 'Direct communication between businesses and freelancers.' },
    { title: 'Anti-fraud Tools', desc: 'Dispute resolution, IP logging, and live photo verification.' },
    { title: 'Coin-based Submission', desc: 'Simplifies lead management for freelancers.' },
    { title: 'Campaign Promotion', desc: 'Targeted ads to boost business visibility.' },
    { title: 'Lock in your territory', desc: 'secure city-wide exclusivity and be the only business in your niche to receive leads from Reflo Hub.' },
  ];
 

  const values = [
    { title: 'Integrity', desc: 'Open communication and transparent policies.' },
    { title: 'Innovation', desc: 'Advancing our SaaS platform globally.' },
    { title: 'Inclusivity', desc: 'Equal opportunities for all.' },
    { title: 'Reliability', desc: 'Stable and secure platform functionality.' },
  ];

  return (
    <section className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 dark:from-gray-950 via-gray-200 dark:via-gray-900 to-gray-100 dark:to-gray-950">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-orange-400/10 dark:from-sky-500/10 dark:to-orange-400/10 animate-[gradient-shift_20s_ease_infinite] bg-[length:200%_200%]"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/30 dark:bg-orange-300/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'loop',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full px-4 py-1 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-100">Connecting the World</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-sky-500 to-orange-400 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.3)]">
            About Reflo Hub
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Connecting Freelancers and Operators Worldwide—Fair and Transparently
          </p>
        </motion.div>

        <motion.section className="mb-20" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-center mb-8">🚀 Our Story</h2>
          <div className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Reflo Hub was founded on a single, potent principle: referrals have to be straightforward,
              universal, and equitable. We were founded in UAE with the goal of transforming the lead
              generation sector by providing a transparent, commission-free SaaS platform that equitably
              enables enterprises and independent contractors.

            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We created Reflo Hub as a software solution since we were fed up with commission-heavy
              models and limited global reach. This technology enables businesses to expand without risk
              and freelancers to make money without selling.
              Today, we are pleased to assist customers across a variety of industries, offering businesses a
              consistent flow of validated, high-quality leads and assisting freelancers in making money off of
              their networks
            </p>

          </div>
        </motion.section>

        <motion.section className="mb-20" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gradient-to-br from-sky-200/30 dark:from-sky-500/10 to-orange-200/30 dark:to-orange-400/10 border border-gray-200 dark:border-white/10 rounded-xl p-8"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Globe className="w-6 h-6 text-orange-400" /> Our Mission
              </h3>
              <p className="text-gray-700 dark:text-gray-300">

To provide the most transparent, globally scalable referral lead exchange platform that creates genuine value for freelancers and businesses—without commission or geographic limits. Reflo Hub aims to revolutionise lead generation through fairness, simplicity, and trust. We help companies grow their clientele and freelancers turn relationships into steady income.

              </p>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-orange-200/30 dark:from-orange-400/10 to-sky-200/30 dark:to-sky-500/10 border border-gray-200 dark:border-white/10 rounded-xl p-8"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-sky-400" /> Our Vision
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Become the world's leading SaaS referral ecosystem—where everyone benefits, everyone
                earns, and everyone trusts.
                Our goal is to make Reflo Hub the go-to worldwide platform for freelancing referrals,
                establishing new benchmarks for openness, safety, and cooperation.

              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section className="mb-20" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-center mb-8">🔑 Why Choose Reflo Hub?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 text-center"
                variants={cardVariants}
                whileHover="hover"
              >
                <item.icon className="w-8 h-8 text-orange-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="mb-20" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-center mb-8">🏆 Our Valued Partners</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-sky-200/30 dark:from-sky-500/10 to-orange-200/30 dark:to-orange-400/10 border border-gray-200 dark:border-white/10 rounded-xl p-6"
                variants={cardVariants}
                whileHover="hover"
              >
                <h4 className="text-xl font-semibold mb-2">{partner.name}</h4>
                <p className="text-gray-600 dark:text-gray-300">{partner.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="mb-20" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-center mb-8">🌟 Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 text-center"
                variants={cardVariants}
                whileHover="hover"
              >
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="mb-20" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-center mb-8">🤝 Our Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-sky-200/30 dark:from-sky-500/10 to-orange-200/30 dark:to-orange-400/10 border border-gray-200 dark:border-white/10 rounded-xl p-6 text-center"
                variants={cardVariants}
                whileHover="hover"
              >
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="mb-20" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-center mb-8">📍 Serving the World from UAE</h2>
          <div className="bg-gradient-to-r from-sky-200/30 dark:from-sky-500/10 to-orange-200/30 dark:to-orange-400/10 border border-gray-200 dark:border-white/10 rounded-xl p-8 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300">
             Reflo Hub operates under the UAE’s open, business-friendly policies and is proudly based in the Emirates. Our SaaS architecture enables seamless operations across 100+ countries while ensuring full global compliance.
            </p>
          </div>
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">📈 Our Dedication to Development</h2>
          <div className="bg-gradient-to-r from-sky-200/30 dark:from-sky-500/10 to-orange-200/30 dark:to-orange-400/10 border border-gray-200 dark:border-white/10 rounded-xl p-8 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We're committed to continuous growth and innovation, driven by feedback from both businesses and freelancers. Upcoming features include advanced analytics, smart ad targeting, performance dashboards, and streamlined lead tracking to better serve the needs of our users.
            </p>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default About;
