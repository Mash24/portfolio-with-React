import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaReact, FaNodeJs, FaAws, FaDocker, FaPython, FaDatabase, FaExternalLinkAlt, FaEye, FaCode } from 'react-icons/fa';
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
    title: "Nelimac Learning",
    desc: "Cloud-based Learning Management Platform supporting 1,000+ active users with modular architecture and reusable UI library. Designed secure multi-tenant backend with CI/CD automation.",
    image: "/images/work-1.jpg",
    liveLink: "https://nelimac-learning.vercel.app",
    githubLink: "https://github.com/Mash24/nelimac-learning",
    techStack: ["Next.js", "Supabase", "Prisma", "TailwindCSS", "Docker", "GitHub Actions"],
    metrics: ["1,000+ users", "60% faster deployments", "Multi-tenant"],
    category: "Full-Stack",
    status: "Live",
    impact: "Educational platform serving students and instructors globally"
  },
  {
    title: "Trainswise-AI",
    desc: "AI task training platform with multi-role dashboards and scalable monorepo architecture. Built modular backend infrastructure with NestJS and Prisma, supporting task orchestration and secure role-based access.",
    image: "/images/work-2.jpg",
    liveLink: "https://trainswise-ai.vercel.app",
    githubLink: "https://github.com/Mash24/trainswise-ai",
    techStack: ["React", "Next.js 14", "NestJS", "Prisma", "Turborepo", "TypeScript"],
    metrics: ["70% faster deploys", "Multi-tenant", "Real-time sync"],
    category: "Full-Stack",
    status: "Live",
    impact: "AI-powered task management for distributed teams"
  },
  {
    title: "Job Connect Platform",
    desc: "Real-time job-matching platform with role-based dashboards and chat interfaces serving 15,000+ users. Integrated AWS S3 for media management and automated deployments with GitHub Actions.",
    image: "/images/work-3.jpg",
    liveLink: "https://jobconnect-platform.vercel.app",
    githubLink: "https://github.com/Mash24/job-connect",
    techStack: ["React", "Firebase", "AWS S3", "GitHub Actions", "TailwindCSS"],
    metrics: ["15,000+ users", "35% faster load", "Zero downtime"],
    category: "Full-Stack",
    status: "Live",
    impact: "Connecting job seekers with opportunities across multiple industries"
  },
  {
    title: "Charity Connect",
    desc: "Donation platform with admin dashboards and fraud detection, scaling to 1,000+ users across 5+ countries. Built responsive platform using Next.js and Firebase Functions with automated CI/CD.",
    image: "/images/work-4.jpg",
    liveLink: "https://charity-connect.vercel.app",
    githubLink: "https://github.com/Mash24/charity-connect",
    techStack: ["Next.js", "Firebase", "Responsive Design", "Vercel"],
    metrics: ["1,000+ users", "5+ countries", "Fraud detection"],
    category: "Frontend",
    status: "Live",
    impact: "Enabling charitable giving across multiple countries with secure transactions"
  },
  {
    title: "CI/CD Automation Demo",
    desc: "Automated deployment pipeline with matrix builds, secret management, and zero-downtime deployments. Set up reusable GitHub Actions workflows for React apps with automated testing and staging.",
    image: "/images/work-5.jpg",
    liveLink: "https://github.com/Mash24/cicd-automation-demo",
    githubLink: "https://github.com/Mash24/cicd-automation-demo",
    techStack: ["GitHub Actions", "Docker", "Firebase CLI", "Matrix Builds"],
    metrics: ["90% fewer errors", "Zero downtime", "Automated"],
    category: "DevOps",
    status: "Open Source",
    impact: "Template for teams to implement robust CI/CD pipelines"
  },
  {
    title: "AI Dev Workflow",
    desc: "Integrated AI tools for automated documentation, code validation, and accelerated development workflows. Leveraging GitHub Copilot, ChatGPT integration, and AI-assisted development patterns.",
    image: "/images/work-6.jpg",
    liveLink: "https://github.com/Mash24/ai-dev-workflow",
    githubLink: "https://github.com/Mash24/ai-dev-workflow",
    techStack: ["Copilot", "ChatGPT", "VSCode", "Automation", "Documentation"],
    metrics: ["40% faster dev", "AI-assisted", "Automated docs"],
    category: "Tools",
    status: "Open Source",
    impact: "Improving developer productivity through AI-assisted workflows"
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
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'Full-Stack', 'Frontend', 'DevOps', 'Tools'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
          <span className="text-blue-600 uppercase tracking-widest font-semibold text-sm">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base">
            Production-ready applications that demonstrate my expertise in full-stack development, cloud architecture, and DevOps automation.
            View all repositories on <a href="https://github.com/Mash24?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(59,130,246,0.18)" }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col group hover:shadow-2xl transition-shadow duration-300 border border-blue-50 cursor-pointer"
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
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-blue-700 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      project.status === 'Live' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {project.status}
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-base mb-4 flex-grow">
                  {project.desc}
                </p>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 font-medium mb-2">Impact:</p>
                  <p className="text-sm text-gray-700">{project.impact}</p>
                </div>
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full flex items-center gap-1 font-semibold shadow-sm"
                    >
                      {techIcons[tech] && <span>{techIcons[tech]}</span>}
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <span
                        key={metricIndex}
                        className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full font-medium"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Project Links */}
                <div className="flex gap-4 mt-auto">
                  {project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 font-medium text-sm group/link"
                    >
                      <FaEye className="mr-1 group-hover/link:translate-x-1 transition-transform duration-300" />
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
