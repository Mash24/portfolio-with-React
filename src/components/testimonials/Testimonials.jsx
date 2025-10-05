import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Quote, Star, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Professional Testimonials data
 * - Each testimonial includes feedback text, client name, role, company, and rating
 */
const testimonials = [
  {
    text: "Jackson consistently delivers production-ready solutions fast. His CI/CD expertise made our deployments seamless and reduced our deployment time by 60%. He's a true full-stack engineer who understands both frontend and backend architecture.",
    name: "Sarah Chen",
    role: "CTO",
    company: "Nelimac Learning",
    rating: 5,
    image: "/images/person_1.jpg",
    highlight: "60% faster deployments"
  },
  {
    text: "Working with Jackson was exceptional. He architected our multi-tenant SaaS platform from scratch, handling 1,000+ concurrent users without breaking a sweat. His TypeScript and React expertise is top-tier, and he delivered ahead of schedule.",
    name: "Michael Rodriguez",
    role: "Engineering Lead",
    company: "Trainswise-AI",
    rating: 5,
    image: "/images/person_2.jpg",
    highlight: "1,000+ concurrent users"
  },
  {
    text: "Jackson built our job-matching platform that now serves 15,000+ users globally. His ability to scale systems and implement real-time features is impressive. The platform has 35% faster load times and zero downtime since launch.",
    name: "Jennifer Park",
    role: "Product Manager",
    company: "Job Connect",
    rating: 5,
    image: "/images/person_4.jpg",
    highlight: "15,000+ users globally"
  },
  {
    text: "Jackson's cloud-native approach and AI-assisted development workflow increased our team's productivity by 40%. He's not just a developer - he's a technical leader who mentors the team and drives innovation.",
    name: "David Thompson",
    role: "VP Engineering",
    company: "TechCorp",
    rating: 5,
    image: "/images/person_5.jpg",
    highlight: "40% productivity increase"
  },
  {
    text: "The charity platform Jackson built scaled to 1,000+ users across 5 countries with fraud detection and real-time analytics. His attention to security and performance optimization is outstanding.",
    name: "Maria Santos",
    role: "Operations Director",
    company: "Charity Connect",
    rating: 5,
    image: null,
    highlight: "5 countries, fraud detection"
  },
  {
    text: "Jackson's CI/CD automation reduced our deployment errors by 90% and eliminated downtime. His GitHub Actions workflows are production-ready and his documentation is excellent. Highly recommend for any SaaS project.",
    name: "Alex Kumar",
    role: "DevOps Engineer",
    company: "CloudScale Inc",
    rating: 5,
    image: null,
    highlight: "90% fewer errors"
  }
];

/**
 * Enhanced Testimonials Component
 * - Displays professional client testimonials with ratings and highlights
 * - Modern design with animations and better visual hierarchy
 */
const Testimonials = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden" id="testimonials">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            Client Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            What <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real feedback from clients who've experienced the impact of scalable SaaS platforms and production-grade solutions.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full min-h-[400px] flex flex-col hover:bg-white/15 transition-all duration-300"
                >
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote Icon */}
                  <Quote className="text-blue-400 w-8 h-8 mb-4" />

                  {/* Testimonial Text */}
                  <p className="text-gray-200 text-lg leading-relaxed mb-6 flex-grow">
                    "{testimonial.text}"
                  </p>

                  {/* Highlight Badge */}
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                      {testimonial.highlight}
                    </span>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-blue-400/50"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold flex items-center justify-center">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <p className="text-white font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-blue-300 text-sm">{testimonial.role}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "100%", label: "Client Satisfaction" },
              { number: "5.0", label: "Average Rating" },
              { number: "15K+", label: "Users Impacted" },
              { number: "6+", label: "Projects Delivered" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join These Success Stories?</h3>
            <p className="text-gray-300 mb-6">Let's discuss how I can help scale your next project.</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Star className="w-5 h-5" />
              Start Your Project
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;

