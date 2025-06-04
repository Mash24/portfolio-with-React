import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

/**
 * About Component
 * - Displays personal biography, professional background, and contact information
 * - Split into two sections: Left (image) and Right (text content)
 */
const About = () => {
  return (
    <section className="py-16 bg-white" id="about-section">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
          {/* Left Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="hidden md:flex md:w-5/12 bg-gray-100 rounded-xl justify-center items-center p-6 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-lime-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src="/images/about_1-3.jpg"
              alt="About Jackson"
              className="object-contain w-full h-full max-h-[600px] rounded-lg transform group-hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Right Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-7/12"
          >
            {/* Section Heading */}
            <span className="uppercase tracking-widest text-sm font-semibold text-lime-600">
              Who I Am
            </span>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-gray-600">
              <p>
                Passionate about technology, education, and solving real-world problems. With a background in Statistics and Computer Science, I bring both analytical thinking and technical execution to the table. I'm currently leading development at <span className="text-lime-600 font-semibold">Nexus Loop AI</span> while also developing full-stack web apps using React, Firebase, Next.js, and AWS.
              </p>
              <p>
                I'm currently pursuing my second degree in Computer Science at the University of the People (USA), while building production-grade cloud applications like <span className="text-lime-600 font-semibold">Job Connect</span> — a full-featured platform with role-based dashboards, authentication, real-time messaging, and GitHub-integrated CI/CD deployment.
              </p>
            </div>

            {/* Personal Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Personal Info</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><span className="font-medium">Name:</span> Jackson Mwakano Macharia</li>
                  <li><span className="font-medium">Age:</span> 28</li>
                  <li><span className="font-medium">Nationality:</span> Kenyan</li>
                  <li><span className="font-medium">Location:</span> Chiang Mai, Thailand</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Contact Info</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><span className="font-medium">Email:</span> jackmwakano@gmail.com</li>
                  <li><span className="font-medium">Phone:</span> +66-95-281-9402</li>
                  <li><span className="font-medium">Address:</span> Chiang Mai, Thailand</li>
                  <li><span className="font-medium">Zip:</span> 50000</li>
                </ul>
              </div>
            </div>

            {/* Interests Section */}
            <div className="mt-8">
              <h3 className="font-semibold text-gray-900 mb-4">Interests & Activities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { icon: '🧑‍🏫', text: 'Teaching & Mentoring' },
                  { icon: '💻', text: 'Building Real-World Apps' },
                  { icon: '☁️', text: 'Cloud Architecture' },
                  { icon: '🏋️', text: 'Gym and Fitness' },
                  { icon: '📈', text: 'Business Automation' },
                  { icon: '✈️', text: 'Aviation (Past)' }
                ].map((interest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <span className="text-xl">{interest.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{interest.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <a
                href="/your-cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-lime-600 text-white rounded-lg font-semibold hover:bg-lime-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FaDownload />
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
