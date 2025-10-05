import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaPython, FaDatabase, FaCode, FaCloud, FaCog, FaRocket } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiTypescript, SiPrisma, SiGithubactions, SiVercel, SiSupabase, SiNestjs, SiPostgresql } from 'react-icons/si';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaReact className="text-blue-500" />,
    skills: [
      { name: "React", level: 95, icon: <FaReact className="text-blue-500" /> },
      { name: "Next.js", level: 90, icon: <SiNextdotjs className="text-black" /> },
      { name: "TypeScript", level: 92, icon: <SiTypescript className="text-blue-600" /> },
      { name: "TailwindCSS", level: 88, icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "JavaScript (ES6+)", level: 95, icon: <FaCode className="text-yellow-500" /> },
      { name: "HTML5 & CSS3", level: 90, icon: <FaCode className="text-orange-500" /> }
    ]
  },
  {
    title: "Backend Development",
    icon: <FaNodeJs className="text-green-600" />,
    skills: [
      { name: "Node.js", level: 88, icon: <FaNodeJs className="text-green-600" /> },
      { name: "NestJS", level: 85, icon: <SiNestjs className="text-red-500" /> },
      { name: "PostgreSQL", level: 90, icon: <SiPostgresql className="text-blue-700" /> },
      { name: "Prisma ORM", level: 92, icon: <SiPrisma className="text-gray-800" /> },
      { name: "Supabase", level: 88, icon: <SiSupabase className="text-green-500" /> },
      { name: "REST APIs", level: 90, icon: <FaCode className="text-purple-500" /> }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: <FaCloud className="text-blue-400" />,
    skills: [
      { name: "AWS (EC2, S3, IAM)", level: 85, icon: <FaAws className="text-yellow-500" /> },
      { name: "Docker", level: 88, icon: <FaDocker className="text-blue-400" /> },
      { name: "GitHub Actions", level: 92, icon: <SiGithubactions className="text-blue-600" /> },
      { name: "Vercel", level: 90, icon: <SiVercel className="text-black" /> },
      { name: "Firebase", level: 85, icon: <SiFirebase className="text-yellow-400" /> },
      { name: "CI/CD Pipelines", level: 95, icon: <FaCog className="text-gray-600" /> }
    ]
  },
  {
    title: "Programming Languages",
    icon: <FaCode className="text-purple-500" />,
    skills: [
      { name: "TypeScript", level: 92, icon: <SiTypescript className="text-blue-600" /> },
      { name: "JavaScript", level: 95, icon: <FaCode className="text-yellow-500" /> },
      { name: "Python", level: 75, icon: <FaPython className="text-yellow-400" /> },
      { name: "SQL", level: 88, icon: <FaDatabase className="text-blue-700" /> },
      { name: "HTML/CSS", level: 90, icon: <FaCode className="text-orange-500" /> }
    ]
  },
  {
    title: "AI & Development Tools",
    icon: <FaRocket className="text-pink-500" />,
    skills: [
      { name: "GitHub Copilot", level: 90, icon: <FaCode className="text-gray-600" /> },
      { name: "ChatGPT Integration", level: 85, icon: <FaRocket className="text-green-500" /> },
      { name: "VSCode", level: 95, icon: <FaCode className="text-blue-500" /> },
      { name: "Figma (Collaboration)", level: 80, icon: <FaCode className="text-purple-500" /> },
      { name: "Postman", level: 85, icon: <FaCode className="text-orange-500" /> },
      { name: "Linux CLI", level: 80, icon: <FaCode className="text-gray-600" /> }
    ]
  },
  {
    title: "Methodologies & Practices",
    icon: <FaCog className="text-gray-600" />,
    skills: [
      { name: "Agile/Scrum", level: 90, icon: <FaCog className="text-green-500" /> },
      { name: "Test-Driven Development", level: 85, icon: <FaCog className="text-blue-500" /> },
      { name: "Code Review", level: 92, icon: <FaCog className="text-purple-500" /> },
      { name: "Performance Optimization", level: 88, icon: <FaCog className="text-orange-500" /> },
      { name: "Security Best Practices", level: 85, icon: <FaCog className="text-red-500" /> },
      { name: "Documentation", level: 90, icon: <FaCog className="text-gray-500" /> }
    ]
  }
];

const SkillBar = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="font-medium text-gray-700">{skill.name}</span>
        </div>
        <span className="text-sm font-semibold text-gray-600">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="py-16 bg-white" id="skills-section">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-purple-600 uppercase tracking-widest font-semibold text-sm">
            Technical Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base">
            A comprehensive toolkit for building modern, scalable applications. From frontend frameworks to cloud infrastructure.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Certifications & Education</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-bold text-lg text-gray-900 mb-4">Education</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-semibold text-gray-800">BSc. Computer Science</h5>
                  <p className="text-gray-600">University of the People, USA</p>
                  <p className="text-sm text-gray-500">Expected 2026 • GPA: 3.81/4.0</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-semibold text-gray-800">BSc. Statistics</h5>
                  <p className="text-gray-600">Meru University of Science & Technology, Kenya</p>
                  <p className="text-sm text-gray-500">2018-2022 • GPA: 3.11/4.0</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-bold text-lg text-gray-900 mb-4">Certifications</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Meta Full-Stack Web Development</h5>
                    <p className="text-sm text-gray-600">Coursera • 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <div>
                    <h5 className="font-semibold text-gray-800">AWS Certified Cloud Practitioner</h5>
                    <p className="text-sm text-gray-600">In Progress • Expected July 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div>
                    <h5 className="font-semibold text-gray-800">CI/CD Deployment - GitHub Actions</h5>
                    <p className="text-sm text-gray-600">Custom Certification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Need someone with these skills for your next project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <FaRocket className="w-4 h-4" />
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;