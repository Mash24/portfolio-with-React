import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaDownload, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import ProfileAvatar from '../ui/ProfileAvatar';
import {
  ABOUT_BIO,
  ABOUT_HIGHLIGHTS,
  ABOUT_CONTACT,
  ABOUT_TECH,
  ABOUT_STRENGTHS,
} from '../../data/about';

const fadeIn = (delay = 0, reduced = false) =>
  reduced
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.5, delay },
      };

const InfoList = ({ title, items }) => (
  <div className="rounded-xl border border-gray-200 bg-gray-50/80 p-5 dark:border-gray-700 dark:bg-gray-800/60">
    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
      {title}
    </h3>
    <ul className="space-y-2.5 text-sm">
      {items.map(({ label, value, href }) => (
        <li key={label} className="flex flex-wrap gap-x-2 gap-y-0.5">
          <span className="font-medium text-gray-500 dark:text-gray-400 shrink-0">
            {label}:
          </span>
          {href ? (
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-blue-600 dark:text-blue-400 break-all hover:underline"
            >
              {value}
            </a>
          ) : (
            <span className="text-gray-700 dark:text-gray-300 break-words">{value}</span>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const About = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-24 bg-white dark:bg-gray-950" id="about-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div {...fadeIn(0, reducedMotion)} className="max-w-2xl mb-12 lg:mb-16">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            My Story
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Engineer, builder, and problem-solver focused on shipping software that scales.
          </p>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 xl:gap-20">
          {/* Profile — visible on all breakpoints */}
          <motion.div
            {...fadeIn(0.05, reducedMotion)}
            className="relative mx-auto w-full max-w-sm lg:max-w-none lg:mx-0"
          >
            <div
              className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-transparent blur-xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-900">
              <ProfileAvatar
                src="/images/about_1-3.jpg"
                alt="Jackson Macharia — Full-Stack Engineer"
                className="aspect-[4/5] w-full object-cover object-top"
                initials="JM"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-transparent p-5 pt-16">
                <p className="text-lg font-semibold text-white">Jackson Macharia</p>
                <p className="text-sm text-gray-300">Full-Stack Engineer · Chiang Mai, TH</p>
              </div>
            </div>
          </motion.div>

          {/* Bio + info */}
          <div>
            <motion.div {...fadeIn(0.1, reducedMotion)} className="space-y-5">
              {ABOUT_BIO.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.ul
              {...fadeIn(0.15, reducedMotion)}
              className="mt-6 grid gap-2 sm:grid-cols-2"
            >
              {ABOUT_HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  <FaCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              {...fadeIn(0.2, reducedMotion)}
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              <InfoList title="Personal" items={ABOUT_CONTACT.personal} />
              <InfoList title="Contact" items={ABOUT_CONTACT.contact} />
            </motion.div>
          </div>
        </div>

        {/* Tech highlights — compact pills (detailed skills live in Skills section) */}
        <motion.div {...fadeIn(0.1, reducedMotion)} className="mt-16">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Core Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {ABOUT_TECH.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-blue-200/80 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800 dark:border-blue-800/50 dark:bg-blue-950/40 dark:text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Strengths */}
        <motion.div {...fadeIn(0.15, reducedMotion)} className="mt-12">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-5">
            What Sets Me Apart
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_STRENGTHS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...fadeIn(0.05 * index, reducedMotion)}
                  className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800/50"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white leading-snug">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          {...fadeIn(0.2, reducedMotion)}
          className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3"
        >
          <Link
            to="/resume"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
          >
            <FaDownload className="h-4 w-4" />
            View Resume
          </Link>
          <a
            href="#experience-section"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            View Experience
            <FaArrowRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
