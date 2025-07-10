import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    // Freelancer Testimonials
    {
      name: 'Amandeep Kaur',
      role: 'Freelancer',
      location: 'Toronto, Canada',
      content: 'Reflo Hub gave me a real shot at earning from home. I just referred two construction businesses from my uncle\'s network and made more in one week than I did in a whole month at my old job. I now earn consistently and feel empowered!',
      rating: 5,
      avatar: 'AK',
    },
    {
      name: 'Tyrell Jackson',
      role: 'Freelancer',
      location: 'Atlanta, USA',
      content: 'I never thought sharing contacts from my barbershop circle would turn into income. Reflo Hub made it real. I\'ve already earned $1,400 just from a few verified referrals. It\'s legit, fast, and all mine—100% commission kept!',
      rating: 5,
      avatar: 'TJ',
    },
    {
      name: 'Manpreet Singh',
      role: 'Freelancer',
      location: 'Ludhiana, India',
      content: 'I don\'t speak English fluently, but Reflo Hub made it easy. I referred two local clients to Fly Fares and one to a travel agency in Canada. I get paid every month now. This platform is a blessing for people like me.',
      rating: 5,
      avatar: 'MS',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Freelancer',
      location: 'Calgary, Canada',
      content: 'I\'m a stay-at-home mom, and Reflo Hub helped me turn my network into income. Within two months, I earned $2,100 just by connecting realtors with my contacts. No technical skills needed!',
      rating: 5,
      avatar: 'SM',
    },
    {
      name: 'Rizwan Ahmed',
      role: 'Freelancer',
      location: 'New Jersey, USA',
      content: 'Reflo Hub changed the game for me. I introduced two leads to VTM and one to a dentist listed on the platform. Every lead got accepted, and I got paid instantly. Zero fees taken from my earnings!',
      rating: 5,
      avatar: 'RA',
    },
    {
      name: 'Harpreet Bains',
      role: 'Freelancer',
      location: 'Surrey, Canada',
      content: 'I\'m earning extra income every month by just referring truckers and immigration clients I already knew. I never imagined my connections would turn into real, steady income through Reflo Hub.',
      rating: 5,
      avatar: 'HB',
    },
    {
      name: 'Kiran Patel',
      role: 'Freelancer',
      location: 'Ahmedabad, India',
      content: 'I refer leads to Fly Fares and Overseas Travels regularly. It\'s now a side hustle that gives me monthly earnings without investment. I love that freelancers keep 100% of the earnings!',
      rating: 5,
      avatar: 'KP',
    },
    {
      name: 'Jason Roberts',
      role: 'Freelancer',
      location: 'Detroit, USA',
      content: 'Reflo Hub is like Uber for referrals. I just share business leads from my community, and I get paid once they convert. I\'ve never seen a platform this honest and direct about payouts!',
      rating: 5,
      avatar: 'JR',
    },
    {
      name: 'Mohammed Iqbal',
      role: 'Freelancer',
      location: 'Hyderabad, India',
      content: 'I\'ve built a small team of referrers under me, and now we regularly share leads to travel and marketing businesses on Reflo Hub. We\'ve built a steady monthly income without even leaving home.',
      rating: 5,
      avatar: 'MI',
    },
    {
      name: 'Brittany White',
      role: 'Freelancer',
      location: 'Chicago, USA',
      content: 'I used to hustle on multiple side gigs, but now I focus on Reflo Hub. It\'s the only platform where I keep 100% commission, and the leads I give actually help real businesses grow.',
      rating: 5,
      avatar: 'BW',
    },
    // Freelancers Earning from VTM, Tech Diamond, and Fly Fares
    {
      name: 'Jasmeet Gill',
      role: 'Freelancer',
      location: 'Edmonton, Canada',
      content: 'I\'ve been referring digital marketing clients to VTM and now earn a monthly commission from three recurring clients. It\'s like building my own passive income stream.',
      rating: 5,
      avatar: 'JG',
    },
    {
      name: 'Shawn Greene',
      role: 'Freelancer',
      location: 'Miami, USA',
      content: 'Tech Diamond pays well through Reflo. I referred two app development clients and one e-commerce business. I now earn monthly from both — no cut, no hassle.',
      rating: 5,
      avatar: 'SG',
    },
    {
      name: 'Ritika Sharma',
      role: 'Freelancer',
      location: 'Delhi, India',
      content: 'Fly Fares has been a consistent source of monthly income. Every client I referred who booked through them gave me repeat commissions. I now refer travel leads every week!',
      rating: 5,
      avatar: 'RS',
    },
    {
      name: 'Navdeep Sekhon',
      role: 'Freelancer',
      location: 'Brampton, Canada',
      content: 'I didn\'t know how powerful referrals could be until I started sharing leads to VTM and Fly Fares. Their conversion rates are high, and I get paid each month without chasing anyone.',
      rating: 5,
      avatar: 'NS',
    },
    // Business Testimonials
    {
      name: 'Patti Construction',
      role: 'Business Owner',
      location: 'New York, USA',
      content: 'We\'ve stopped wasting money on overpriced ads. With Reflo Hub, we now get high-quality leads from people who know our niche. The ROI is amazing, and it feels more personal.',
      rating: 5,
      avatar: 'PC',
    },
    {
      name: 'AJ Attire',
      role: 'Fashion Brand',
      location: 'Canada',
      content: 'As a fashion brand, finding loyal buyers was hard. Through Reflo Hub, freelancers referred influencers and boutique clients we could never reach on our own. Our sales spiked by 35%!',
      rating: 5,
      avatar: 'AA',
    },
    {
      name: 'Overseas Travels',
      role: 'Travel Agency',
      location: 'Edmonton, Canada',
      content: 'Most of our new walk-in and online bookings are coming through Reflo Hub leads now. We pay no agency cut, just reward the referrer. It\'s cheaper and more effective than ads!',
      rating: 5,
      avatar: 'OT',
    },
    {
      name: 'Fly Fares',
      role: 'Travel Company',
      location: 'India',
      content: 'Since joining Reflo Hub, we\'ve received a steady stream of verified clients from freelancers across India and Canada. It\'s low-risk and high-conversion. We\'re growing faster and smarter.',
      rating: 5,
      avatar: 'FF',
    },
    {
      name: 'Singh Builders',
      role: 'Construction Company',
      location: 'California, USA',
      content: 'The leads we get through Reflo are already warm. Freelancers refer clients who actually need our services, so our conversion rate has doubled. It\'s become our go-to growth channel.',
      rating: 5,
      avatar: 'SB',
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
