import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Nexus Loop AI",
    period: "May 2025 – Present",
    location: "Remote",
    description: [
      "Designed and built a production-grade AI training and task management platform with real-time workflows and scalable architecture.",
      "Led development using a monorepo architecture powered by Turborepo, with modular packages for API, DB, UI, and configuration.",
      "Built a secure backend with NestJS, featuring role-based access control, JWT auth, Prisma ORM, caching, and validation.",
      "Developed the frontend using Next.js 14, TailwindCSS, shadcn/ui, and schema-safe forms with react-hook-form and zod.",
      "Deployed services via Vercel, Docker, and Render, and configured CI/CD pipelines for automated testing and deployment.",
      "Implemented PostgreSQL database workflows with Prisma Migrate, Studio, and shared schema via @nexusloop/db.",
      "Created reusable design systems and shared types across the stack to ensure consistency and type safety."
    ],
    techStack: ["Next.js 14", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Docker", "Turborepo", "TailwindCSS", "shadcn/ui", "Render", "Vercel", "GitHub Actions"]
  },
  {
    title: "Full-Stack Developer",
    company: "Charity Connect",
    period: "April 2025 – Present",
    location: "Remote",
    description: [
      "Building a donation platform using Next.js, Firebase, and Vercel for global material and cash donations.",
      "Implementing role-based access, real-time data sync, and secure authentication.",
      "Scaling backend features and admin dashboard with modular UI components and Firestore."
    ],
    techStack: ["Next.js", "Firebase", "TailwindCSS", "Vercel"]
  },
  {
    title: "DevOps Support Engineer",
    company: "Job Connect",
    period: "Jan 2025 – Present",
    location: "Remote",
    description: [
      "Developed a job-matching platform with role-based dashboards, real-time messaging, and Firebase Auth.",
      "Integrated AWS services: S3 for file uploads, CloudWatch for logging, and IAM for secure roles.",
      "CI/CD pipeline setup using GitHub Actions for automated Firebase deployments."
    ],
    techStack: ["React", "Firebase", "AWS", "TailwindCSS", "GitHub Actions"]
  },
  {
    title: "Frontend Developer",
    company: "Aboa Vidas",
    period: "Nov 2023 – Nov 2024",
    location: "Remote",
    description: [
      "Delivered a clean, responsive company website using HTML, CSS, Bootstrap, and JavaScript.",
      "Focused on mobile-first design, SEO optimization, and client collaboration.",
      "Deployed project to Netlify with post-launch updates."
    ],
    techStack: ["HTML", "CSS", "Bootstrap", "JavaScript", "Netlify"]
  }
];

const Experience = () => {
  return (
    <section className="py-16 bg-gray-50" id="experience-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-lime-600 uppercase tracking-widest font-semibold text-sm">Experience</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            My professional journey in software development and cloud technologies
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200" />

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-lime-500 border-4 border-white shadow-lg" />

                {/* Experience Card */}
                <div className="w-full md:w-1/2 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-lime-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <FaCalendarAlt />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 mb-4">
                    <FaMapMarkerAlt />
                    <span className="text-sm">{exp.location}</span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <span className="text-lime-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-lime-100 text-lime-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 