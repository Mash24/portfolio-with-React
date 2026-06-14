import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { STATUS_STYLES } from '../../data/projects';
import ProjectImage from './ProjectImage';

const ProjectCard = ({ project, variant = 'default', index = 0 }) => {
  const isLarge = variant === 'featured-large';
  const isCompact = variant === 'compact';

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:border-blue-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800/50 ${
        isLarge ? 'lg:row-span-2' : ''
      }`}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="relative block overflow-hidden"
        aria-label={`View case study: ${project.title}`}
      >
        <ProjectImage
          project={project}
          gradientIndex={index}
          className={`w-full transition duration-500 group-hover:scale-105 motion-reduce:group-hover:scale-100 ${
            isLarge ? 'h-56 sm:h-72 lg:h-full lg:min-h-[320px]' : isCompact ? 'h-44' : 'h-48 sm:h-52'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
          <div className="mb-2 flex flex-wrap gap-2">
            <span
              className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${STATUS_STYLES[project.status]}`}
            >
              {project.status}
            </span>
            <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur-sm">
              {project.category}
            </span>
          </div>
          <h3
            className={`font-bold text-white ${isLarge ? 'text-xl sm:text-2xl' : 'text-lg'}`}
          >
            {project.title}
          </h3>
          {!isCompact && (
            <p className="mt-1 line-clamp-2 text-sm text-gray-200">{project.excerpt}</p>
          )}
        </div>
        <span className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </Link>

      <div className={`flex flex-1 flex-col ${isCompact ? 'p-4' : 'p-5 sm:p-6'}`}>
        {!isLarge && !isCompact && (
          <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {project.description}
          </p>
        )}

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.metrics.slice(0, 3).map((metric) => (
            <span
              key={metric}
              className="rounded-full bg-violet-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-violet-700 dark:text-violet-300"
            >
              {metric}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 border-t border-gray-100 pt-4 dark:border-gray-800">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Github className="h-3.5 w-3.5" />
              {project.liveLink ? 'GitHub' : 'View repo'}
            </a>
          )}
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-300 ml-auto"
          >
            Case study
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
