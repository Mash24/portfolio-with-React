import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

/**
 * Featured Projects data
 * - Each project includes a title, description, image path, live demo link, and GitHub link
 */
const projects = [
  {
    title: "Nexus Loop AI",
    desc: "Production-grade AI training and task management platform with real-time workflows. Built with a monorepo architecture using Turborepo, featuring role-based access control, JWT auth, and PostgreSQL database workflows.",
    image: "/images/work-1.jpg",
    liveLink: "https://nexusloop.ai",
    githubLink: "https://github.com/Mash24/nexus-loop-ai",
    techStack: ["Next.js 14", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Docker", "Turborepo", "TailwindCSS", "shadcn/ui"]
  },
  {
    title: "Job Connect Platform",
    desc: "Full-featured job-matching platform with real-time chat, role-based dashboards, and AWS integration. Features include user onboarding flows, dynamic job postings, and secure file uploads.",
    image: "/images/work-2.jpg",
    liveLink: "https://jobconnect.vercel.app",
    githubLink: "https://github.com/Mash24/job-connect",
    techStack: ["React", "Firebase", "AWS", "TailwindCSS", "GitHub Actions"]
  },
  {
    title: "Charity Connect",
    desc: "Global donation platform for material and cash donations. Features include role-based access, real-time data sync, secure authentication, and an admin dashboard.",
    image: "/images/work-3.jpg",
    liveLink: "https://charityconnect.vercel.app",
    githubLink: "https://github.com/Mash24/charity-connect",
    techStack: ["Next.js", "Firebase", "TailwindCSS", "Vercel"]
  }
];

/**
 * Projects Component (Portfolio Showcase)
 * - Displays a grid of featured projects with links to live demos and GitHub repositories
 */
const Projects = () => {
  return (
    <section className="py-16 bg-white" id='projects-section'>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-lime-600 uppercase tracking-widest font-semibold text-sm">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base">
            Here are some of my key projects that showcase my skills in full stack development and cloud technologies.
            View all repositories on <a href="https://github.com/Mash24?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-lime-600 hover:underline">GitHub</a>.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Thumbnail Image */}
              <div className="relative overflow-hidden">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FiExternalLink className="text-white text-4xl" />
                  </div>
                </a>
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-lime-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-base mb-4 flex-grow">
                  {project.desc}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-lime-100 text-lime-800 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4 mt-4">
                  {project.liveLink !== "#" && (
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-lime-600 hover:text-lime-800 transition-colors duration-300 font-medium text-sm group/link"
                    >
                      <FiExternalLink className="mr-1 group-hover/link:translate-x-1 transition-transform duration-300" /> 
                      Live Demo
                    </a>
                  )}
                  {project.githubLink !== "#" && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-300 font-medium text-sm group/link"
                    >
                      <FaGithub className="mr-1 group-hover/link:translate-x-1 transition-transform duration-300" /> 
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
