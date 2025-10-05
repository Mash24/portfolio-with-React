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
    <section className="py-16 bg-white dark:bg-gray-900" id="about-section">
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
            <span className="uppercase tracking-widest text-sm font-semibold text-blue-600">
              My Story
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>

            {/* Bio Paragraphs */}
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a <span className="text-blue-600 font-semibold">full-stack engineer</span> based in Thailand with 3+ years of hands-on experience building real-time, production-grade SaaS systems. I specialize in TypeScript, React, and CI/CD automation, with a proven track record of delivering scalable solutions that serve thousands of users.
              </p>
              <p className="text-lg leading-relaxed">
                I've led engineering for <span className="text-blue-600 font-semibold">Nelimac Learning</span> — a multi-tenant LMS — and contributed to <span className="text-blue-600 font-semibold">Trainswise-AI</span> and <span className="text-blue-600 font-semibold">Job Connect</span>, platforms serving over 15,000 users globally. My backend experience translates seamlessly to .NET ecosystems, and I leverage AI tools responsibly to ship faster.
              </p>
              <p className="text-lg leading-relaxed">
                My engineering edge lies in <span className="text-purple-600 font-semibold">system architecture</span>, <span className="text-purple-600 font-semibold">performance optimization</span>, and <span className="text-purple-600 font-semibold">CI/CD automation</span>. I build systems that scale, deploy reliably, and maintain high performance under load. I'm passionate about developer experience and creating tools that empower teams to move fast without breaking things.
              </p>
            </div>

            {/* Personal Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Personal Info</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><span className="font-medium">Name:</span> Jackson Mwakano Macharia</li>
                  <li><span className="font-medium">Location:</span> Chiang Mai, Thailand</li>
                  <li><span className="font-medium">Portfolio:</span> iamjackson.vercel.app</li>
                  <li><span className="font-medium">GitHub:</span> github.com/Mash24</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Contact Info</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><span className="font-medium">Email:</span> jackmwakano@gmail.com</li>
                  <li><span className="font-medium">Phone:</span> +66 95-281-9402</li>
                  <li><span className="font-medium">LinkedIn:</span> linkedin.com/in/jackson-macharia</li>
                  <li><span className="font-medium">Status:</span> Available for opportunities</li>
                </ul>
              </div>
            </div>

            {/* Tech Stack Section */}
            <div className="mt-8">
              <h3 className="font-semibold text-gray-900 mb-4">Core Tech Stack</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { icon: '⚛️', text: 'React & Next.js' },
                  { icon: '🔷', text: 'TypeScript' },
                  { icon: '🗄️', text: 'PostgreSQL & Prisma' },
                  { icon: '☁️', text: 'Supabase & AWS' },
                  { icon: '⚡', text: 'CI/CD & Docker' },
                  { icon: '🎨', text: 'TailwindCSS' },
                  { icon: '🤖', text: 'AI-Assisted Dev' },
                  { icon: '📊', text: 'Performance Optimization' }
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg hover:from-blue-100 hover:to-purple-100 transition-all duration-300 border border-blue-100"
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{tech.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Professional Focus Section */}
            <div className="mt-8">
              <h3 className="font-semibold text-gray-900 mb-4">What Sets Me Apart</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '🏗️', title: 'System Architecture', desc: 'Design scalable, maintainable systems' },
                  { icon: '⚡', title: 'CI/CD Automation', desc: 'Reduce deployment time by 60%+' },
                  { icon: '📊', title: 'Performance Optimization', desc: '35% faster load times' },
                  { icon: '🔒', title: 'Security & Scalability', desc: 'Multi-tenant SaaS expertise' }
                ].map((focus, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{focus.icon}</span>
                      <h4 className="font-semibold text-gray-900">{focus.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{focus.desc}</p>
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
                href="/resume.pdf"
                download="Jackson_Macharia_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FaDownload />
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
