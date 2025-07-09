import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';

const AllCategoryPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants = {
    hover: { scale: 1.05, boxShadow: '0 0 30px rgba(255, 165, 0, 0.3)' },
  };

  const categories = [
    'Real Estate Agents (Residential)',
    'Commercial Property Brokers',
    'Mortgage Brokers Residential',
    'Personal Finance Advisors',
    'Business Loan Consultants',
    'Superannuation & Retirement Planners',
    'Insurance Brokers (Life, Home, Auto)',
    'Tax Accountants',
    'Chartered Accountants for SMEs',
    'Conveyancers',
    'Immigration Lawyers',
    'Commercial Litigation Lawyers',
    'Cosmetic Surgeons',
    'Dentists (General & Cosmetic)',
    'Fertility Clinics (IVF)',
    'Laser Eye Clinics (LASIK)',
    'Wedding & Honeymoon Planners',
    'Destination Wedding Planners',
    'Custom Home Builders',
    'Interior Designers',
    'Landscape Architects',
    'Roofing Contractors',
    'Window & Door Installers',
    'High-End Flooring Contractors',
    'New & Luxury Car Dealerships',
    'Caravan & RV Dealers',
    'VTM',
    'Business Automation Consultants',
    'Cybersecurity Consultants',
    'Private Tutoring Services (VCE, HSC, etc.)',
    'IELTS/PTE/TOEFL Coaching Centres',
    'Online Certification Providers',
    'Business Mentorship Programs',
    'Builders & General Contractors',
    'Concrete & Driveway Specialists',
    'Fencing & Retaining Wall Services',
    'HVAC Installation & Maintenance',
    'Plumbing & Electrical Contractors (Commercial)',
    'Franchise & Business Opportunity Brokers',
    'Tattoo Artist',
    'Furniture Shops',
    'Truck Driving Schools',
    'Skin & Aesthetic Clinics (Botox, fillers, etc.)',
    'Vocational Training Centers (plumbing, electrician, etc.)',
    'Recruitment & Executive Search Firms',
    'Will & Estate Planning Services',
    'Hair Transplant Clinic',
    'Modular Kitchen Designers',
    'Premium Watch Dealers',
    'Personal Stylists & Image Consultants',
    'Weight Loss Clinic',
    'Travel Agencies',
    'Software Development Services',
    'Cloud Computing Consultants',
    'Web Development Agencies',
    'Mobile App Developers',
    'IT Support & Managed Services',
    'Data Analytics Services',
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-sky-500 to-orange-400 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.3)]">
            Categories in USA
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore a wide range of professional services and businesses available in the USA.
          </p>
        </motion.div>

        <motion.div
          className="mb-12 flex justify-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full py-3 pl-12 pr-4 text-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </motion.div>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 flex items-center justify-between"
                variants={cardVariants}
                whileHover="hover"
              >
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-100">{category}</h4>
                <ArrowRight className="w-5 h-5 text-orange-400" />
              </motion.div>
            ))}
          </div>
          {filteredCategories.length === 0 && (
            <p className="text-center text-gray-600 dark:text-gray-300 mt-8">
              No categories found matching your search.
            </p>
          )}
        </motion.section>

        <motion.section
          className="mt-16 text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Can't find your category?{' '}
            <a
              href="mailto:support@reflohub.com"
              className="text-orange-400 hover:underline font-semibold"
            >
              Contact us at support@reflohub.com
            </a>{' '}
            to discuss your needs.
          </p>
        </motion.section>
      </div>
    </section>
  );
};

export default AllCategoryPage;