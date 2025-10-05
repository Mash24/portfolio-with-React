import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const experiences = [
  {
    title: "Lead Full-Stack Engineer",
    company: "Nelimac Learning",
    location: "Remote",
    duration: "Aug 2025 – Present",
    type: "Current",
    description: "Leading engineering for a cloud-based Learning Management Platform serving 1,000+ active users.",
    achievements: [
      "Architected modular, reusable component library improving developer efficiency by 40%",
      "Designed multi-tenant backend with CI/CD (GitHub Actions + Docker), cutting deployment time by 60%",
      "Implemented JWT auth and role-based dashboards for secure, scalable learning operations",
      "Collaborated cross-functionally on UX optimization and API integration"
    ],
    techStack: ["Next.js", "TypeScript", "Supabase", "Prisma", "TailwindCSS", "Docker", "GitHub Actions"],
    metrics: ["1,000+ users", "60% faster deployments", "Multi-tenant architecture"]
  },
  {
    title: "Full-Stack Developer",
    company: "Trainswise-AI (formerly Nexus Loop AI)",
    location: "Remote",
    duration: "May 2024 – Present",
    type: "Current",
    description: "Led frontend development for AI-driven task management platform with scalable monorepo architecture.",
    achievements: [
      "Developed backend modules using Prisma ORM (PostgreSQL) with schema validation and real-time sync",
      "Automated builds and deployments via CI/CD pipeline (GitHub Actions + Docker)",
      "Optimized load performance and accessibility, increasing global performance scores by 35%",
      "Built Turborepo-powered monorepo with integrated linting, tests, and preview environments"
    ],
    techStack: ["React", "Next.js 14", "NestJS", "Prisma", "Turborepo", "TypeScript", "Docker"],
    metrics: ["70% faster deploys", "Multi-tenant", "Real-time sync"]
  },
  {
    title: "Cloud & Frontend Developer",
    company: "Job Connect Platform",
    location: "Remote",
    duration: "Jan 2023 – Dec 2024",
    type: "Previous",
    description: "Developed role-based dashboards and chat interfaces serving 15,000+ active users.",
    achievements: [
      "Integrated AWS S3 for media management and automated deployments with GitHub Actions",
      "Reduced page load times by 35% and enhanced system stability with code-splitting and caching",
      "Built real-time job-matching platform with Firebase Functions backend",
      "Maintained zero-downtime deployments across multiple environments"
    ],
    techStack: ["React", "Firebase", "AWS S3", "GitHub Actions", "TailwindCSS", "JavaScript"],
    metrics: ["15,000+ users", "35% faster load", "Zero downtime"]
  },
  {
    title: "Frontend Developer (Volunteer)",
    company: "Charity Connect",
    location: "Remote",
    duration: "Apr 2024 – Dec 2024",
    type: "Previous",
    description: "Built responsive donation platform scaling to 1,000+ users across 5+ countries.",
    achievements: [
      "Created admin dashboards with donor analytics, fraud detection, and dynamic reporting modules",
      "Built serverless backend with Firebase Functions for real-time donations and user onboarding",
      "Automated end-to-end CI/CD using GitHub Actions and Vercel CLI for zero-downtime pushes",
      "Reduced production bug reports by 40% by introducing staging preview workflows"
    ],
    techStack: ["Next.js", "Firebase", "Responsive Design", "Vercel", "GitHub Actions"],
    metrics: ["1,000+ users", "5+ countries", "Fraud detection"]
  }
];

const Experience = () => {
  return (
    <section className="py-16 bg-gray-50" id="experience-section">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-blue-600 uppercase tracking-widest font-semibold text-sm">
            Professional Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience Timeline</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base">
            A track record of building scalable systems and leading engineering teams across multiple industries.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-0.5"></div>

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full transform -translate-x-2 md:-translate-x-2 z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            exp.type === 'Current' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center gap-1">
                            <FaMapMarkerAlt className="w-3 h-3" />
                            <span className="font-semibold text-blue-600">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaCalendarAlt className="w-3 h-3" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">{exp.description}</p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-4">
                      {exp.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-lg font-bold text-purple-600">{metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Ready to bring this experience to your team?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;