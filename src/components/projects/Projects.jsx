import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  PROJECTS,
  PROJECT_CATEGORIES,
  getFeaturedProjects,
} from '../../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const reducedMotion = useReducedMotion();

  const featured = getFeaturedProjects();
  const filtered =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const gridProjects =
    activeFilter === 'All'
      ? PROJECTS.filter((p) => !p.featured)
      : filtered;

  const showFeatured = activeFilter === 'All';

  return (
    <section className="py-20 lg:py-24 bg-gray-50 dark:bg-gray-900/40" id="projects-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-10 lg:mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Portfolio
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Production-ready applications across SaaS, AI, and DevOps — with live demos,
            open-source repos, and detailed case studies.{' '}
            <a
              href="https://github.com/Mash24?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              All repos on GitHub
            </a>
            .
          </p>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap gap-2"
        >
          {PROJECT_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'border border-gray-200 bg-white text-gray-700 hover:border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {showFeatured && (
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 grid gap-5 lg:grid-cols-2 lg:grid-rows-2"
          >
            <ProjectCard project={featured[0]} variant="featured-large" index={0} />
            <ProjectCard project={featured[1]} variant="compact" index={1} />
            <ProjectCard project={featured[2]} variant="compact" index={2} />
          </motion.div>
        )}

        {gridProjects.length > 0 && (
          <>
            <h3 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
              {showFeatured ? 'More projects' : `${activeFilter} projects`}
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {gridProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <ProjectCard project={project} index={index + 3} />
                </motion.div>
              ))}
            </div>
          </>
        )}

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 py-12">
            No projects in this category yet.
          </p>
        )}

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <a
            href="#contact-section"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:from-blue-500 hover:to-violet-500"
          >
            Have a project in mind?
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
