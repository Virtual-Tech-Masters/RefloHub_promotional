import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, X, BookOpen, ChevronLeft } from 'lucide-react';
import { useState, useEffect } from 'react';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [flipped, setFlipped] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Reset flip state when closing modal
  useEffect(() => {
    if (!selectedPost) {
      setFlipped(false);
    }
  }, [selectedPost]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20, rotateX: 10 },
    animate: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6 } },
    hover: { 
      scale: 1.03, 
      rotateY: 5, 
      boxShadow: '0 0 40px rgba(255, 165, 0, 0.4)',
      transition: { duration: 0.3 }
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 }
  };

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Lead Generation: Reflo Hub’s Vision',
      excerpt: 'Explore how Reflo Hub’s transparent, commission-free platform is redefining lead generation for freelancers and businesses worldwide.',
      date: 'June 20, 2025',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      content: `
        <p>In the rapidly evolving world of digital marketing, Reflo Hub is pioneering a new approach to lead generation. By eliminating traditional commissions and fostering direct connections, we're creating a more equitable ecosystem for both freelancers and businesses.</p>
        
        <h3>Transparency as a Core Value</h3>
        <p>Traditional lead generation platforms often obscure the true value of connections, taking substantial cuts from both parties. Reflo Hub's model ensures that 100% of the value goes to the service provider, while businesses gain access to higher quality leads.</p>
        
        <h3>Global Talent Network</h3>
        <p>Our platform connects businesses with vetted freelancers from over 120 countries, ensuring that companies can find the perfect match for their specific needs, regardless of geographical boundaries.</p>
        
        <h3>AI-Powered Matching</h3>
        <p>Leveraging advanced algorithms, Reflo Hub matches businesses with freelancers based on project requirements, skillsets, and historical success rates, dramatically improving conversion rates.</p>
      `
    },
    {
      id: 2,
      title: 'How Freelancers Thrive with Reflo Hub',
      excerpt: 'Follow Anika’s journey from part-time freelancer to earning steady commissions by connecting businesses with leads on Reflo Hub.',
      date: 'June 12, 2025',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      content: `
        <p>Anika Patel, a digital marketing specialist from Mumbai, shares her success story with Reflo Hub and how it transformed her freelance career.</p>
        
        <h3>The Early Struggles</h3>
        <p>"When I started freelancing two years ago, I spent more time finding clients than actually doing the work I loved. Platforms took 20-30% commissions, making it hard to earn a living wage."</p>
        
        <h3>Discovering Reflo Hub</h3>
        <p>"Reflo Hub changed everything. By connecting me directly with businesses needing my specific skills, I reduced my client acquisition time by 70%. The commission-free model meant I could finally charge what my services were worth."</p>
        
        <h3>Building a Sustainable Business</h3>
        <p>"Within six months, I went from struggling to find one client a month to maintaining a roster of 8-10 regular clients. The quality of leads through Reflo Hub is consistently higher, and the direct relationships allow me to deliver better results."</p>
        
        <h3>Tips for Success</h3>
        <p>Anika's advice for new freelancers: "Complete your profile thoroughly, showcase your best work, and respond quickly to leads. The transparency of Reflo Hub means your reputation is everything."</p>
      `
    },
    {
      id: 3,
      title: 'Unlocking Business Growth with Freelancer Leads',
      excerpt: 'Discover strategies to scale your business with high-quality leads from Reflo Hub’s global network of vetted freelancers.',
      date: 'June 8, 2025',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      content: `
        <p>Businesses of all sizes are discovering the power of leveraging freelancer networks for sustainable growth. Here's how innovative companies are using Reflo Hub to transform their operations.</p>
        
        <h3>The New Talent Economy</h3>
        <p>With 47% of the workforce projected to be freelancers by 2027, businesses that master the art of collaborating with independent professionals gain significant competitive advantages.</p>
        
        <h3>Case Study: TechStart Inc.</h3>
        <p>This SaaS startup used Reflo Hub to build their entire marketing team with specialized freelancers:</p>
        <ul>
          <li>Reduced hiring costs by 60% compared to full-time employees</li>
          <li>Decreased time-to-hire from 45 days to just 3 days</li>
          <li>Scaled marketing efforts 3x faster than competitors</li>
        </ul>
        
        <h3>Strategies for Success</h3>
        <p>1. <strong>Specialized Search:</strong> Use Reflo Hub's filtering to find freelancers with niche expertise</p>
        <p>2. <strong>Project-based Engagement:</strong> Start with smaller projects to test fit before committing to larger initiatives</p>
        <p>3. <strong>Relationship Building:</strong> Invest in long-term relationships with top-performing freelancers</p>
        
        <h3>The Future of Work</h3>
        <p>"The most successful companies will be those that seamlessly integrate full-time teams with specialized freelance talent," says Reflo Hub CEO Marcus Johnson. "This hybrid model offers unprecedented flexibility and access to global expertise."</p>
      `
    },
  ];

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedPost(null);
      setIsClosing(false);
      setFlipped(false);
    }, 300);
  };

  return (
    <section className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 dark:from-gray-950 via-gray-200 dark:via-gray-900 to-gray-100 dark:to-gray-950">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-orange-300/10 dark:from-sky-500/10 dark:to-orange-300/10 animate-[gradient-shift_20s_ease_infinite] bg-[length:200%_200%]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-300/30 dark:bg-orange-300/30 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              x: Math.random() * 50 - 25,
              y: Math.random() * 50 - 25,
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: true,
              repeatType: 'reverse',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-100/60 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-full px-5 py-2 mb-6 shadow-[0_0_20px_rgba(255,165,0,0.2)]"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 165, 0, 0.3)' }}
          >
            <Sparkles className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-100">Reflo Hub Insights</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_20px_rgba(255,165,0,0.3)]">
            Cosmic Chronicles
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Dive into the stories, strategies, and successes powering Reflo Hub’s global ecosystem of freelancers and businesses.
          </p>
        </motion.div>

        {/* Blog Posts */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="relative bg-gradient-to-b from-gray-100/60 dark:from-white/5 to-gray-50/20 dark:to-white/2 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,165,0,0.1)] min-h-[380px] flex flex-col cursor-pointer"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                custom={index}
                transition={{ delay: index * 0.2 }}
                onClick={() => setSelectedPost(post)}
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 relative z-10 flex flex-col flex-grow">
                  <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                  <h2 className="text-xl font-bold text-black dark:text-white mb-3 line-clamp-2">{post.title}</h2>
                  <p className="text-black dark:text-gray-300 text-sm mb-4 flex-grow line-clamp-3">{post.excerpt}</p>
                  <div className="group inline-flex items-center text-orange-400 dark:text-orange-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200">
                    Read More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Book Page Popup Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 dark:bg-black/90 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-full max-w-4xl h-[80vh] mx-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Flip Container */}
              <motion.div 
                className="relative w-full h-full"
                style={{ perspective: '1200px' }}
              >
                {/* Book Cover (Front) */}
                <motion.div
                  className={`absolute inset-0 w-full h-full bg-cover bg-center rounded-xl shadow-2xl cursor-pointer ${!flipped ? 'z-20' : 'z-10'}`}
                  style={{ 
                    backgroundImage: `url(${selectedPost.image})`,
                    backfaceVisibility: 'hidden'
                  }}
                  animate={flipped ? "back" : "front"}
                  variants={flipVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  onClick={() => setFlipped(true)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center justify-end p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="text-orange-400" />
                      <span className="text-orange-400 font-medium">Click to open</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white text-center">{selectedPost.title}</h2>
                    <p className="text-gray-300 text-center mt-2">{selectedPost.date}</p>
                  </div>
                </motion.div>

                {/* Book Content (Back) */}
                <motion.div
                  className={`absolute inset-0 w-full h-full bg-gradient-to-b from-gray-100 dark:from-gray-950 to-gray-50 dark:to-gray-950 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden p-8 shadow-2xl ${flipped ? 'z-20' : 'z-10'}`}
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                  animate={flipped ? "front" : "back"}
                  variants={flipVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      className="text-gray-700 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-300 transition-colors"
                      onClick={() => setFlipped(false)}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      className="text-gray-700 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-300 transition-colors"
                      onClick={closeModal}
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <div className="h-full overflow-y-auto pr-4 custom-scrollbar">
                    <div className="max-w-2xl mx-auto">
                      <div className="flex items-center gap-2 text-orange-400 dark:text-orange-300 mb-4">
                        <BookOpen className="w-5 h-5" />
                        <span className="font-medium">Blog Post</span>
                      </div>
                      <h2 className="text-3xl font-bold text-black dark:text-white mb-2">{selectedPost.title}</h2>
                      <p className="text-black dark:text-gray-300 mb-8">{selectedPost.date}</p>
                      
                      <div 
                        className="prose prose-invert prose-lg"
                        dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                      />
                      
                      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-between">
                        <button
                          className="flex items-center text-orange-400 dark:text-orange-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                          onClick={() => setFlipped(false)}
                        >
                          <ChevronLeft className="w-5 h-5 mr-2" />
                          Back to Cover
                        </button>
                        <button
                          className="flex items-center text-orange-400 dark:text-orange-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                          onClick={closeModal}
                        >
                          Close Article
                          <X className="w-5 h-5 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div className="relative z-10 py-12 text-center border-t border-gray-200 dark:border-gray-800 mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-gray-100/60 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-full px-5 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-100">Reflo Hub</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Connecting businesses with the world's top freelance talent through transparent, commission-free lead generation.
          </p>
          <p className="text-gray-500 dark:text-gray-500 mt-4 text-sm">
            © 2025 Reflo Hub. All rights reserved. Cosmic Chronicles Blog.
          </p>
        </div>
      </div>
      
      <style jsx global>{`
        .prose-invert h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #000000;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .prose-invert p {
          margin-bottom: 1rem;
          line-height: 1.7;
          color: #000000;
        }
        .prose-invert ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
          color: #000000;
        }
        .prose-invert li {
          margin-bottom: 0.5rem;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 165, 0, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 165, 0, 0.8);
        }
      `}</style>
    </section>
  );
};

export default Blog;