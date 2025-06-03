import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

/**
 * Featured Projects data
 * - Each project includes a title, description, image path, live demo link, and GitHub link
 */
const projects = [
  {
    title: "Job Connect Web App",
    desc: "Full-featured job-matching platform with real-time chat and role-based dashboards.",
    image: "/images/work-1.jpg", // Replace with actual image path
    liveLink: "#", // Replace with actual live demo URL
    githubLink: "https://github.com/Mash24/job-connect", // Replace with actual GitHub repo URL
  },
  {
    title: "Charity Connect",
    desc: "Donation platform allowing users to give money or material support to children.",
    image: "/images/work-3.jpg", // Replace with actual image path
    liveLink: "#", // Replace with actual live demo URL
    githubLink: "https://github.com/Mash24/charity-connect", // Replace with actual GitHub repo URL
  },
  {
    title: "Personal Portfolio Website (This Site)",
    desc: "Built with React, Tailwind CSS, and Framer Motion to showcase skills and projects.",
    image: "/images/work-2.jpg", // Replace with actual image path
    liveLink: "#", // Replace with actual live demo URL
    githubLink: "https://github.com/Mash24/my_porfolio", // Replace with actual GitHub repo URL
  },
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
        <div className="text-center mb-12">
          <span className="text-lime-600 uppercase tracking-widest font-semibold text-sm">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base">
            Here are some of my key projects that showcase my skills in full stack development and cloud technologies.
            View all repositories on <a href="https://github.com/Mash24?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-lime-600 hover:underline">GitHub</a>.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
            >
              {/* Project Thumbnail Image - Clickable to Live Demo */}
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="group block relative flex-shrink-0">
                 <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-48 sm:h-56 transition-transform duration-300 group-hover:scale-105"
                 />
                 {/* Optional: Add a small overlay icon on hover for live demo */}
                 <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <FiExternalLink className="text-white text-4xl" />
                 </div>
              </a>

              {/* Project Info and Links */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-700 text-base mb-4 flex-grow">{project.desc}</p>

                {/* Project Links */}
                <div className="flex gap-4 mt-4">
                  {project.liveLink !== "#" && (
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-lime-600 hover:text-lime-800 transition-colors duration-300 font-medium text-sm"
                    >
                      <FiExternalLink className="mr-1" /> Live Demo
                    </a>
                  )}
                   {project.githubLink !== "#" && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-300 font-medium text-sm"
                    >
                      <FaGithub className="mr-1" /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
