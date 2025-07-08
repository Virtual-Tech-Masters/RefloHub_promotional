import { motion } from 'framer-motion';
import { Sparkles, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Career = () => {
  const [openTeam, setOpenTeam] = useState(null);

  const teams = [
    {
      name: 'Engineering',
      roles: [
        'Full Stack Developer',
        'Front End Engineer',
        'DevOps / SRE',
        'QA Automation',
      ],
    },
    {
      name: 'Product & Design',
      roles: [
        'Product Manager',
        'UX / UI Designer',
        'Data Analyst',
      ],
    },
    {
      name: 'Sales & Growth',
      roles: [
        'Account Executive',
        'Growth Marketer',
        'Partnerships Manager',
      ],
    },
    {
      name: 'Customer Success & Community',
      roles: [
        'Customer Success Manager',
        'Community Lead',
        'Onboarding Specialist',
      ],
    },
    {
      name: 'Operations & People',
      roles: [
        'Finance Analyst',
        'People Ops Partner',
        'Legal & Compliance Counsel',
      ],
    },
    {
      name: 'Internships & Co-ops',
      roles: [
        'Students and recent grads are encouraged to apply across all departments.',
      ],
    },
  ];

  const toggleTeam = (index) => {
    setOpenTeam(openTeam === index ? null : index);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const listVariants = {
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
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Careers</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.7)] animate-[pulse_3s_ease_infinite]">
            Build the Future of Lead Sharing With Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Join a global team that’s rewriting the playbook on how freelancers and businesses connect. Your ideas will power a platform where everyone wins—and your career will grow just as fast.
          </p>
          <motion.a
            href="#open-positions"
            variants={{ hover: { scale: 1.05, boxShadow: '0 0 40px rgba(255, 165, 0, 0.5)' }, tap: { scale: 0.95 } }}
            whileHover="hover"
            whileTap="tap"
            className="group inline-flex px-8 py-4 text-white bg-gradient-to-r from-sky-500 to-orange-300 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              View Open Roles
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </motion.a>
        </motion.div>

        {/* Mission & Story */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-orange-400 dark:text-orange-300 mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            To unlock opportunity for freelancers and deliver risk-free growth for businesses through a transparent, ethical lead-sharing ecosystem.
          </p>
          <h2 className="text-3xl font-bold text-orange-400 dark:text-orange-300 mb-4">Our Story</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Reflo Hub began with one simple insight: the best leads don’t come from ads—they come from people. What started as a small experiment in Canada has become a rapidly scaling SaaS platform trusted by entrepreneurs around the world. We’re proud to be bootstrapped, profitable, and obsessed with customer success.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-orange-400 dark:text-orange-300 mb-6">Core Values</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Integrity First', desc: 'We earn trust through radical transparency and fair rewards.' },
              { title: 'Customer Champions', desc: 'We solve real problems and measure success by customer wins.' },
              { title: 'One Team, Many Voices', desc: 'Diversity of thought fuels better products and happier people.' },
              { title: 'Iterate & Elevate', desc: 'We ship quickly, learn relentlessly, and celebrate progress.' },
              { title: 'Ownership Mindset', desc: 'Everyone is empowered to act like an owner—because you are.' },
            ].map((value, index) => (
              <motion.li
                key={index}
                className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-orange-300/40 rounded-lg p-4"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.desc}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Life at Reflo Hub */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-orange-400 dark:text-orange-300 mb-6">Life at Reflo Hub</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We’re a remote-friendly, async-by-default company with collaborative hubs in Winnipeg and Edmonton. Whether you work from home, a co-working space, or one of our offices, you’ll find:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Weekly 15-minute all-hands (no marathon meetings!)</li>
            <li>Quarterly in-person “Reflo Retreats” for strategy, team building, and fun</li>
            <li>A culture of honest feedback, open calendars, and clear documentation</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">Why You’ll Love Working Here</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Competitive Compensation & Equity</li>
            <li>Flexible Hours & Unlimited PTO</li>
            <li>Annual learning budget (courses, conferences, coaching)</li>
            <li>Home office or co-working stipend</li>
            <li>Paid volunteer day each quarter</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">How We Work</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Agile squads with two-week sprints and Friday demo days</li>
            <li>GitHub, Linear, Figma, Slack, and Notion are our daily toolkit</li>
            <li>Data-driven decisions backed by user research and experimentation</li>
            <li>Inclusive documentation—everything lives in Notion so knowledge is shared, not siloed</li>
          </ul>
        </motion.div>

        {/* Diversity & Inclusion */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-orange-400 dark:text-orange-300 mb-6">Diversity & Inclusion</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Open platforms thrive on diverse networks—and so do we. Reflo Hub welcomes teammates of every race, gender, age, religion, identity, and background. If you’re smart, kind, and driven to make a positive impact, you belong here.
          </p>
        </motion.div>

        {/* Growth & Development */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-orange-400 dark:text-orange-300 mb-6">Growth & Development</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Your growth is our growth. From mentorship pairings to a dedicated yearly development budget, we invest in pathways that help you level up your craft and your career.
          </p>
        </motion.div>

        {/* Open Positions */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto mb-16" id="open-positions">
          <h2 className="text-3xl font-bold text-orange-400 dark:text-orange-300 mb-6">Open Positions</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We’re hiring across multiple disciplines. Click a team to explore current openings:
          </p>
          {teams.map((team, index) => (
            <div
              key={index}
              className="mb-4 bg-gray-100/60 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-orange-300/40 rounded-lg overflow-hidden"
            >
              <motion.button
                className="w-full px-6 py-4 text-left flex justify-between items-center text-lg font-semibold text-gray-900 dark:text-white hover:bg-orange-300/10 transition-all duration-300"
                onClick={() => toggleTeam(index)}
                whileHover={{ scale: 1.01 }}
              >
                <span>{team.name}</span>
                <ChevronRight
                  className={`w-5 h-5 transform transition-transform duration-300 ${openTeam === index ? 'rotate-90' : ''}`}
                />
              </motion.button>
              <motion.div
                variants={listVariants}
                initial="hidden"
                animate={openTeam === index ? 'visible' : 'hidden'}
                className="px-6 py-4 text-gray-600 dark:text-gray-300"
              >
                <ul className="list-disc pl-5 space-y-2">
                  {team.roles.map((role, i) => (
                    <li key={i}>{role}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
          <p className="text-gray-600 dark:text-gray-300 mt-6">
            Don’t see the perfect role? Send your resume and a short note to{' '}
            <a href="mailto:careers@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">
              careers@reflohub.com
            </a>. We love meeting proactive talent.
          </p>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-orange-400 dark:text-orange-300 mb-4">Ready to Join Us?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Be part of a team that’s building the future of lead sharing. Explore our open roles or reach out directly.
          </p>
          <motion.a
            href="mailto:careers@reflohub.com"
            variants={{ hover: { scale: 1.05, boxShadow: '0 0 40px rgba(255, 165, 0, 0.5)' }, tap: { scale: 0.95 } }}
            whileHover="hover"
            whileTap="tap"
            className="group inline-flex px-8 py-4 text-white bg-gradient-to-r from-sky-600 to-blue-400 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Contact Careers
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </motion.a>
        </motion.div>

        {/* SEO Metadata */}
        <motion.div className="hidden">
          <meta name="title" content="Reflo Hub – Careers at Global SaaS Lead Referral Platform" />
          <meta
            name="description"
            content="Join Reflo Hub's remote-friendly team to build the future of lead sharing. Explore open roles, competitive benefits, and a culture of growth and inclusion."
          />
          <meta
            name="keywords"
            content="Reflo Tech careers, SaaS jobs, remote work, tech jobs Canada, engineering roles, product design jobs, sales jobs, customer success careers, diversity hiring"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Career;