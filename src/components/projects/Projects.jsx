import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaReact, FaNodeJs, FaAws, FaDocker, FaPython, FaDatabase, FaExternalLinkAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiJenkins, SiTerraform, SiKubernetes, SiVercel, SiPostman, SiTypescript, SiPrisma, SiGithubactions } from 'react-icons/si';

const techIcons = {
  'React': <FaReact className="text-sky-500" />, 'Next.js 14': <SiNextdotjs className="text-black" />, 'Next.js': <SiNextdotjs className="text-black" />, 'TailwindCSS': <SiTailwindcss className="text-teal-400" />, 'Node.js': <FaNodeJs className="text-green-600" />, 'AWS': <FaAws className="text-yellow-500" />, 'Docker': <FaDocker className="text-blue-400" />, 'Python': <FaPython className="text-yellow-400" />, 'PostgreSQL': <FaDatabase className="text-blue-700" />, 'Prisma': <SiPrisma className="text-gray-800" />, 'TypeScript': <SiTypescript className="text-blue-500" />, 'Firebase': <SiFirebase className="text-yellow-400" />, 'GitHub Actions': <SiGithubactions className="text-blue-600" />, 'Vercel': <SiVercel className="text-black" />, 'Turborepo': <SiJenkins className="text-orange-500" />, 'shadcn/ui': <SiTailwindcss className="text-teal-400" />, 'Render': <SiVercel className="text-black" />, 'Firestore': <SiFirebase className="text-yellow-400" />
};

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
    githubLink: "https://github.com/Mash24/Trainswise-AI",
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
    githubLink: "https://github.com/Mash24/GiveAid",
    techStack: ["Next.js", "Firebase", "TailwindCSS", "Vercel"]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: "spring", bounce: 0.3 },
  }),
};

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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
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
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(181,187,141,0.18)" }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col group hover:shadow-2xl transition-shadow duration-300 border border-lime-50 cursor-pointer"
            >
              {/* Project Thumbnail Image - Clickable to Live Demo */}
              <div className="relative group/image">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-48 sm:h-56 transition-transform duration-300 group-hover/image:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover/image:bg-opacity-30 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-all duration-300">
                    <FaExternalLinkAlt className="text-white text-3xl" />
                  </div>
                </a>
              </div>
              {/* Project Info and Links */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-lime-700 mb-2 group-hover:text-lime-600 transition-colors duration-300">
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
                      className="px-2 py-1 bg-lime-100 text-lime-800 text-xs rounded-full flex items-center gap-1 font-semibold shadow-sm"
                    >
                      {techIcons[tech] && <span>{techIcons[tech]}</span>}
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
                      <FaExternalLinkAlt className="mr-1 group-hover/link:translate-x-1 transition-transform duration-300" />
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
