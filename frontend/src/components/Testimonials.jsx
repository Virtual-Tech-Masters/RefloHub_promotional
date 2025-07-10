import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Jessica Reed',
      role: 'Freelancer',
      location: 'Virtual Tech Masters',
      content: 'I earn $1500–$2000 monthly through Reflo Hub just by referring clients. No risk, no investment—it\'s a genuine and rewarding platform!',
      rating: 5,
      avatar: 'JR',
    },
    {
      name: 'Aman Verma',
      role: 'Freelancer',
      location: 'Virtual Tech Masters',
      content: 'Reflo Hub changed the game for me. I now earn around $2000/month just by sharing business leads. It\'s simple and legit!',
      rating: 5,
      avatar: 'AV',
    },
    {
      name: 'Deepak Sharma',
      role: 'Referral Partner',
      location: 'Virtual Tech Masters',
      content: 'No cold calling, no paid ads—just referrals. Reflo Hub helps me earn over $1800 a month consistently!',
      rating: 5,
      avatar: 'DS',
    },
    {
      name: 'Meena Arora',
      role: 'Founder',
      location: 'CraftNest',
      content: 'Reflo Hub gave us quality leads from global freelancers. Cost-effective and result-driven!',
      rating: 5,
      avatar: 'MA',
    },
    {
      name: 'Sandeep Yadav',
      role: 'CEO',
      location: 'TechWave Solutions',
      content: 'We stopped wasting money on ads. Reflo Hub brought us serious clients through referrals.',
      rating: 5,
      avatar: 'SY',
    },
    {
      name: 'Rachel Adams',
      role: 'CEO',
      location: 'Overseas Travels Ltd.',
      content: 'Reflo Hub connected us with freelancers who helped boost our travel bookings. Their referrals brought genuine clients, and we saw real growth without wasting money on ads.',
      rating: 5,
      avatar: 'RA',
    },
    {
      name: 'Aman Singh',
      role: 'Freelancer',
      location: 'Overseas Travels Ltd.',
      content: 'Thanks to Reflo Hub, I referred clients to Overseas Travels Ltd. and earned steady commissions. The process is simple, and payments are always on time.',
      rating: 5,
      avatar: 'AS',
    },
    {
      name: 'Sophie Roy',
      role: 'AJ Attire',
      location: 'AJ Attire',
      content: 'Reflo Hub connected us with talented freelancers who helped grow our brand fast and affordably.',
      rating: 5,
      avatar: 'SR',
    },
    {
      name: 'Karan Verma',
      role: 'Graphic Designer',
      location: 'AJ Attire',
      content: 'Working with AJ Attire through Reflo Hub has been fantastic. The projects are clear, payments are timely, and the team is very professional. A great experience for freelancers!',
      rating: 5,
      avatar: 'KV',
    },
    {
      name: 'Emily Carter',
      role: 'Freelance Marketer',
      location: 'AJ Attire',
      content: 'Reflo Hub connected me with AJ Attire for content and marketing work. The experience was smooth, and I got paid on time. Great platform for freelancers!',
      rating: 5,
      avatar: 'EC',
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
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-sky-500 to-orange-400 flex items-center justify-center text-white font-bold text-lg border-2 border-sky-400/30 dark:border-orange-300/30">
                        {testimonial.avatar}
                      </div>
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
            { number: '$500k+', label: 'Commissions Paid' },
            { number: '500+', label: 'Success Stories' },
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
