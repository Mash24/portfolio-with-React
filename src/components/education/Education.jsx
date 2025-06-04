import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaBook } from 'react-icons/fa';

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of the People (USA)",
    period: "2023 - Present",
    gpa: "3.8/4.0",
    description: "Focusing on advanced programming concepts, data structures, algorithms, and software engineering principles.",
    courses: ["Data Structures", "Algorithms", "Software Engineering", "Database Systems"]
  },
  {
    degree: "Bachelor of Science in Statistics",
    school: "Meru University",
    period: "2018 - 2022",
    gpa: "3.11/4.0",
    description: "Specialized in statistical analysis, data modeling, and quantitative methods.",
    courses: ["Statistical Analysis", "Data Modeling", "Probability Theory", "Research Methods"]
  }
];

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    icon: "☁️"
  },
  {
    title: "Google Cloud Fundamentals",
    issuer: "Google Cloud",
    date: "2023",
    icon: "🌐"
  },
  {
    title: "Full Stack Web Development",
    issuer: "Meta",
    date: "2023",
    icon: "💻"
  }
];

const Education = () => {
  return (
    <section className="py-16 bg-white" id="education-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-lime-600 uppercase tracking-widest font-semibold text-sm">Education</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Academic Background</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            My educational journey and professional certifications
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-lime-100 p-3 rounded-lg">
                  <FaGraduationCap className="w-6 h-6 text-lime-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                  <p className="text-lime-600 font-semibold mb-2">{edu.school}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>{edu.period}</span>
                    <span>•</span>
                    <span>GPA: {edu.gpa}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-lime-100 text-lime-800 text-xs rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold mb-8">Professional Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h4>
                <p className="text-gray-600 mb-2">{cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 