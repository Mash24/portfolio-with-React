import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaReact, 
  FaAws, 
  FaNodeJs, 
  FaCloud, 
  FaCogs, 
  FaDatabase,
  FaRocket,
  FaShieldAlt,
  FaCode,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
  FaDownload
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const projectTypes = [
    'SaaS Platform Development',
    'Full-Stack Web Application',
    'Cloud Architecture & DevOps',
    'CI/CD Pipeline Setup',
    'Technical Consulting',
    'Code Review & Optimization',
    'Team Training & Mentoring',
    'Other'
  ];

  const budgetRanges = [
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
    'Let\'s discuss'
  ];

  const timelineOptions = [
    'ASAP (Rush project)',
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3+ months',
    'Flexible'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
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
            <FaEnvelope className="w-4 h-4" />
            Let's Work Together
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Build Something Amazing?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss your project requirements and create a solution that scales with your business. 
            I'm available for freelance projects, consulting, and full-time opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Start Your Project</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              {/* Company */}
              <div className="relative">
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Company/Organization (Optional)"
                />
              </div>

              {/* Project Type */}
              <div className="relative">
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                  required
                >
                  <option value="" className="bg-gray-800">Select Project Type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-gray-800">{type}</option>
                  ))}
                </select>
              </div>

              {/* Budget and Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                    required
                  >
                    <option value="" className="bg-gray-800">Budget Range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-gray-800">{range}</option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                    required
                  >
                    <option value="" className="bg-gray-800">Project Timeline</option>
                    {timelineOptions.map((timeline) => (
                      <option key={timeline} value={timeline} className="bg-gray-800">{timeline}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <FaRocket className="w-5 h-5" />
                Send Project Inquiry
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center"
                >
                  <FaCheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <p className="text-green-400 font-semibold">Thank you! I'll get back to you within 24 hours.</p>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            
            {/* Quick Contact */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <a
                  href="mailto:jackmwakano@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email Me</p>
                    <p className="text-gray-400 text-sm">jackmwakano@gmail.com</p>
                  </div>
                  <FaArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-blue-400 transition-colors" />
                </a>

                <a
                  href="tel:+66952819402"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <FaPhone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Call Me</p>
                    <p className="text-gray-400 text-sm">+66 95 281 9402</p>
                  </div>
                  <FaArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-green-400 transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/jackson-macharia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <FaLinkedin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">LinkedIn</p>
                    <p className="text-gray-400 text-sm">Connect professionally</p>
                  </div>
                  <FaArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-blue-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold text-white">Currently Available</h3>
              </div>
              <p className="text-gray-300 mb-6">
                I'm actively taking on new projects and consulting opportunities. 
                Response time: <span className="text-green-400 font-semibold">within 24 hours</span>
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <FaClock className="w-4 h-4 text-blue-400" />
                  <span>Flexible Hours</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <FaMapMarkerAlt className="w-4 h-4 text-blue-400" />
                  <span>Chiang Mai, Thailand</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <FaCalendarAlt className="w-4 h-4 text-blue-400" />
                  <span>Remote & On-site</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <FaRocket className="w-4 h-4 text-blue-400" />
                  <span>Quick Start</span>
                </div>
              </div>
            </div>

            {/* Download Resume */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Get My Resume</h3>
              <p className="text-gray-300 mb-6">
                Download my latest resume with detailed experience and project portfolio.
              </p>
              <a
                href="/resume.pdf"
                download="Jackson_Macharia_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaDownload className="w-4 h-4" />
                Download Resume
              </a>
            </div>

          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something That Matters</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you're a startup looking to build your MVP or an enterprise needing to scale your platform, 
              I'm here to help you achieve your goals with production-ready solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <FaCode className="w-5 h-5" />
                View Services
              </a>
              <a
                href="#projects"
                className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaRocket className="w-5 h-5" />
                See My Work
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact; 