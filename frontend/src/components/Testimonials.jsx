import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Freelance Marketing Consultant',
      location: 'Toronto, Canada',
      content: 'Reflo Hub has completely transformed my freelance business. I\'ve earned over $15,000 in commissions in just 6 months!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Michael Chen',
      role: 'CEO, TechStart Solutions',
      location: 'San Francisco, USA',
      content: 'The lead quality is exceptional. We\'ve closed 40% more deals since partnering with Reflo Hub. Highly recommended!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Business Development Manager',
      location: 'Madrid, Spain',
      content: 'The platform is intuitive and the support team is outstanding. Our lead conversion rate increased by 60%.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'James Wilson',
      role: 'Freelance Sales Specialist',
      location: 'London, UK',
      content: 'I love how easy it is to submit leads and track my earnings. The commission structure is fair and transparent.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Priya Patel',
      role: 'Founder, Digital Growth Agency',
      location: 'Mumbai, India',
      content: 'Reflo Hub connected us with high-quality leads that actually convert. Our ROI has improved significantly.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Ahmed Al-Hassan',
      role: 'Business Consultant',
      location: 'Dubai, UAE',
      content: 'The platform\'s analytics help me understand lead performance better. It\'s a game-changer for my consulting business.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-100 dark:from-gray-950 to-gray-200 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-orange-400/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Success <span className="bg-gradient-to-r from-sky-500 to-orange-400 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from our community of successful freelancers and businesses who are thriving with Reflo Hub.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8 text-center hover:border-orange-400/30 dark:hover:border-orange-300/30 transition-all duration-300"
                  >
                    <Quote className="w-12 h-12 text-sky-500 mx-auto mb-6 opacity-50" />

                    <p className="text-lg md:text-xl text-gray-900 dark:text-white mb-8 leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-sky-400/30 dark:border-orange-300/30"
                      />
                      <div className="text-left">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                        <p className="text-sm text-orange-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-orange-400 scale-125'
                    : 'bg-gray-400/50 dark:bg-white/30 hover:bg-gray-500/50 dark:hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: '98%', label: 'Client Satisfaction' },
            { number: '4.9/5', label: 'Average Rating' },
            { number: '$2.5M+', label: 'Commissions Paid' },
            { number: '15K+', label: 'Success Stories' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
