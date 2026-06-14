import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  ChevronDown,
  ArrowRight,
  Briefcase,
} from 'lucide-react';
import {
  EXPERIENCES,
  getCompanyInitials,
  formatDuration,
} from '../../data/experience';

const ExperienceCard = ({ exp, index, isExpanded, onToggle, reducedMotion }) => {
  const duration = formatDuration(exp.start, exp.end);

  const details = (
    <>
      <ul className="mt-3 space-y-2">
        {exp.achievements.map((item) => (
          <li
            key={item}
            className="flex gap-2.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {exp.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {exp.projectTitle && (
        <a
          href="#projects-section"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View {exp.projectTitle} in portfolio
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      )}
    </>
  );

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="relative pl-8 sm:pl-10"
    >
      <span
        className={`absolute left-0 top-6 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-white dark:border-gray-950 shadow-sm ${
          exp.isCurrent
            ? 'bg-emerald-500 ring-4 ring-emerald-500/20'
            : 'bg-blue-600 ring-4 ring-blue-600/15'
        }`}
        aria-hidden="true"
      />

      <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800/50">
        <div className="flex gap-4">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-bold text-white shadow-md shadow-blue-600/20"
            aria-hidden="true"
          >
            {getCompanyInitials(exp.company)}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {exp.title}
              </h3>
              {exp.isCurrent && (
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  Current
                </span>
              )}
              {exp.employmentType && (
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                  {exp.employmentType}
                </span>
              )}
            </div>

            <p className="mt-0.5 font-semibold text-blue-600 dark:text-blue-400">
              {exp.company}
              {exp.companyNote && (
                <span className="font-normal text-gray-500 dark:text-gray-400">
                  {' '}
                  · {exp.companyNote}
                </span>
              )}
            </p>

            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 shrink-0" />
                {duration}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                {exp.location}
              </span>
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">
          {exp.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {exp.metrics.map((metric) => (
            <span
              key={metric}
              className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-700 dark:text-violet-300"
            >
              {metric}
            </span>
          ))}
        </div>

        <div className="mt-4 border-t border-gray-100 pt-4 dark:border-gray-800">
          <button
            type="button"
            onClick={() => onToggle(index)}
            className="flex w-full items-center justify-between text-left md:hidden"
            aria-expanded={isExpanded}
            aria-controls={`exp-details-${exp.id}`}
          >
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Key achievements
            </span>
            <ChevronDown
              className={`h-4 w-4 text-gray-500 transition-transform ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>

          <p className="hidden md:block text-sm font-semibold text-gray-900 dark:text-white">
            Key achievements
          </p>

          <div
            id={`exp-details-${exp.id}`}
            className={`${isExpanded ? 'block' : 'hidden'} md:block`}
          >
            {details}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Experience = () => {
  const reducedMotion = useReducedMotion();
  const [expandedCards, setExpandedCards] = useState(() => new Set([0]));

  const toggleCard = (index) => {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section
      className="py-20 lg:py-24 bg-gray-50 dark:bg-gray-900/40"
      id="experience-section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12 lg:mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Professional Journey
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Experience
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Building scalable SaaS products across ed-tech, AI, and social impact — with
            measurable outcomes at every step.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 via-violet-500 to-gray-300 dark:to-gray-700"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                index={index}
                isExpanded={expandedCards.has(index)}
                onToggle={toggleCard}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-14 max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-gray-900 sm:p-8"
        >
          <Briefcase className="mx-auto h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
          <p className="text-gray-600 dark:text-gray-400 mb-5">
            Ready to bring this experience to your team?
          </p>
          <a
            href="#contact-section"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:from-blue-500 hover:to-violet-500 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
          >
            Let&apos;s Work Together
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
