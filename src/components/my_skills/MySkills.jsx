import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Layout,
  Server,
  Cloud,
  Code2,
  Wrench,
  GraduationCap,
  Award,
  ArrowRight,
} from 'lucide-react';
import {
  SKILL_CATEGORIES,
  SKILL_FILTERS,
  PROFICIENCY,
  EDUCATION,
  CERTIFICATIONS,
} from '../../data/skills';

const CATEGORY_ICONS = {
  frontend: Layout,
  backend: Server,
  devops: Cloud,
  languages: Code2,
  tools: Wrench,
};

const accentBorder = {
  blue: 'border-blue-500',
  violet: 'border-violet-500',
};

const certStatusStyle = {
  completed: 'bg-emerald-500',
  'in-progress': 'bg-blue-500 animate-pulse',
};

const SkillRow = ({ name, level }) => {
  const prof = PROFICIENCY[level];

  return (
    <li className="flex items-center justify-between gap-3 py-2 border-b border-gray-100 last:border-0 dark:border-gray-800">
      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{name}</span>
      <span
        className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${prof.className}`}
      >
        {prof.label}
      </span>
    </li>
  );
};

const MySkills = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const reducedMotion = useReducedMotion();

  const visibleCategories =
    activeFilter === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeFilter);

  return (
    <section className="py-20 lg:py-24 bg-white dark:bg-gray-950" id="skills-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-10 lg:mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Technical Expertise
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Skills &amp; Technologies
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            A full-stack toolkit for building modern, scalable applications — from UI to
            infrastructure.
          </p>
        </motion.div>

        {/* Proficiency legend */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap items-center gap-3"
        >
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mr-1">
            Proficiency:
          </span>
          {Object.entries(PROFICIENCY).map(([key, { label, className }]) => (
            <span
              key={key}
              className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${className}`}
            >
              {label}
            </span>
          ))}
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap gap-2"
        >
          {SKILL_FILTERS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveFilter(id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeFilter === id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'border border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-600'
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {visibleCategories.map((category, index) => {
            const Icon = CATEGORY_ICONS[category.id] ?? Code2;
            return (
              <motion.div
                key={category.id}
                layout={!reducedMotion}
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50/50 p-6 dark:border-gray-800 dark:bg-gray-900/50"
              >
                <div className="mb-5 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                <ul className="flex-1">
                  {category.skills.map((skill) => (
                    <SkillRow key={skill.name} {...skill} />
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Education & Certifications */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50/80 to-violet-50/50 p-6 sm:p-8 dark:border-gray-800 dark:from-blue-950/30 dark:to-violet-950/20"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 text-center sm:text-left">
            Education &amp; Certifications
          </h3>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-5 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Education</h4>
              </div>
              <div className="space-y-5">
                {EDUCATION.map((edu) => (
                  <div
                    key={edu.degree}
                    className={`border-l-4 pl-4 ${accentBorder[edu.accent]}`}
                  >
                    <h5 className="font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{edu.school}</p>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                      {edu.period} · {edu.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-5 flex items-center gap-2">
                <Award className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Certifications
                </h4>
              </div>
              <div className="space-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.title}
                    className="flex items-start gap-3 rounded-lg border border-gray-100 bg-gray-50/80 p-3 dark:border-gray-800 dark:bg-gray-800/50"
                  >
                    <span
                      className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${certStatusStyle[cert.status]}`}
                    />
                    <div>
                      <h5 className="font-semibold text-sm text-gray-900 dark:text-white">
                        {cert.title}
                      </h5>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {cert.issuer} · {cert.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Need these skills on your next project?
          </p>
          <a
            href="#contact-section"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:from-blue-500 hover:to-violet-500 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
          >
            Start a Project
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
