import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaReact, FaAws, FaNodeJs, FaCloud, FaCogs, FaDatabase } from 'react-icons/fa';

const skills = [
  { icon: <FaReact className="text-sky-500" />, label: 'React.js' },
  { icon: <FaNodeJs className="text-green-600" />, label: 'Node.js' },
  { icon: <FaAws className="text-yellow-500" />, label: 'AWS' },
  { icon: <FaCloud className="text-blue-400" />, label: 'Cloud' },
  { icon: <FaCogs className="text-gray-700" />, label: 'CI/CD' },
  { icon: <FaDatabase className="text-indigo-500" />, label: 'Databases' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-section" className="py-20 bg-gradient-to-br from-[#f8f9fa] to-[#e8f0fe] min-h-[80vh]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-lime-600 uppercase tracking-widest font-semibold text-sm">Contact Me</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Collaborate or Chat</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Got a project, DevOps challenge, or just want to network? I'm open to freelance gigs, mentorship, or full-time roles in Cloud and Engineering.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* Left Card: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl p-10 flex flex-col justify-center border border-lime-50"
          >
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-colors duration-300 bg-transparent placeholder-transparent"
                  placeholder="Your Name"
                  required
                />
                <label htmlFor="name" className="absolute left-4 top-2 text-gray-500 text-sm transition-all duration-200 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-lime-600 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 bg-white px-1 pointer-events-none">Your Name</label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-colors duration-300 bg-transparent placeholder-transparent"
                  placeholder="Your Email"
                  required
                />
                <label htmlFor="email" className="absolute left-4 top-2 text-gray-500 text-sm transition-all duration-200 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-lime-600 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 bg-white px-1 pointer-events-none">Your Email</label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-colors duration-300 bg-transparent placeholder-transparent"
                  placeholder="Subject"
                  required
                />
                <label htmlFor="subject" className="absolute left-4 top-2 text-gray-500 text-sm transition-all duration-200 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-lime-600 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 bg-white px-1 pointer-events-none">Subject</label>
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-colors duration-300 bg-transparent placeholder-transparent resize-none"
                  placeholder="Message"
                  required
                ></textarea>
                <label htmlFor="message" className="absolute left-4 top-2 text-gray-500 text-sm transition-all duration-200 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-lime-600 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 bg-white px-1 pointer-events-none">Message</label>
              </div>
              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.04, backgroundColor: '#a3e635', color: '#222' }}
                className="w-full px-6 py-3 bg-lime-600 text-white rounded-lg font-semibold hover:bg-lime-700 transition-all duration-300 shadow-lg hover:shadow-xl transform"
              >
                Send Message
              </motion.button>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="text-center text-lime-700 font-semibold mt-4"
                >
                  Thank you! Your message has been sent.
                </motion.div>
              )}
            </form>
          </motion.div>
          {/* Right Card: Info & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl p-10 flex flex-col justify-between border border-lime-50"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img src="/images/about_1-3.jpg" alt="Jackson Macharia" className="w-16 h-16 rounded-full object-cover border-4 border-lime-100 shadow" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Jackson Macharia</h3>
                  <p className="text-lime-600 font-semibold">Full-Stack Developer & Cloud Technologist</p>
                  <div className="flex items-center gap-2 text-gray-500 mt-1 text-sm">
                    <FaMapMarkerAlt /> Chiang Mai, Thailand (Open to remote or relocation)
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">What I Can Help With</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, i) => (
                    <span key={i} className="flex items-center gap-2 px-3 py-1 bg-lime-50 text-lime-800 rounded-full text-sm font-medium shadow-sm">
                      {skill.icon} {skill.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Contact Info</h4>
                <div className="space-y-2 text-gray-700 text-sm">
                  <div className="flex items-center gap-2"><FaEnvelope className="text-lime-600" /> <a href="mailto:jackmwakano@gmail.com" className="hover:underline">jackmwakano@gmail.com</a></div>
                  <div className="flex items-center gap-2"><FaPhone className="text-lime-600" /> <a href="tel:+66952819402" className="hover:underline">+66 95 281 9402</a></div>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Connect With Me</h4>
                <div className="flex gap-4 mt-2">
                  <a href="https://github.com/Mash24" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-lg text-gray-600 hover:bg-lime-100 hover:text-lime-600 transition-all duration-300 shadow-md hover:scale-110">
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/jackson-macharia/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-lg text-gray-600 hover:bg-lime-100 hover:text-lime-600 transition-all duration-300 shadow-md hover:scale-110">
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a href="https://twitter.com/macharia5" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-lg text-gray-600 hover:bg-lime-100 hover:text-lime-600 transition-all duration-300 shadow-md hover:scale-110">
                    <FaTwitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="text-gray-500 text-sm mt-4 border-t pt-4">
                Open to freelance projects and contractual roles, DevOps setups, internships, or remote engineering roles. Let's build something impactful together!
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 