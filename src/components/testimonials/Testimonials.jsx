import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { TrendingUp, ArrowRight, Linkedin } from 'lucide-react';
import { IMPACT_STORIES, IMPACT_TOTALS } from '../../data/impact';

const Testimonials = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden py-20 lg:py-24 bg-[#070b14]"
      id="impact-section"
      aria-label="Project impact and results"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0f1423] to-[#1a1033]" />
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-blue-600/15 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 mb-4">
            <TrendingUp className="h-4 w-4" />
            Measurable outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Impact &amp;{' '}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Results
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            Real metrics from production systems — not vanity numbers. Every outcome maps to a
            project you can explore in detail.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {IMPACT_STORIES.map((story, index) => (
            <motion.article
              key={story.slug}
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition hover:border-blue-500/30 hover:bg-white/[0.06]"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-blue-400">{story.project}</p>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-bold tabular-nums text-white">
                      {story.metric}
                    </span>
                    <span className="text-sm text-gray-400">{story.metricLabel}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-gray-400 flex-1">{story.summary}</p>

              <ul className="mt-4 space-y-1.5">
                {story.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-center gap-2 text-xs text-gray-500"
                  >
                    <span className="h-1 w-1 rounded-full bg-emerald-400 shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>

              <Link
                to={`/projects/${story.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 transition group-hover:text-blue-300"
              >
                View case study
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {IMPACT_TOTALS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold tabular-nums text-white">
                {stat.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600/10 to-violet-600/10 p-6 sm:p-8 md:flex md:items-center md:justify-between md:gap-8"
        >
          <div className="md:max-w-xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Want to be the next success story?
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              I bring the same engineering rigor to every engagement. Connect on LinkedIn for
              recommendations, or reach out to discuss your project.
            </p>
          </div>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 md:mt-0 shrink-0">
            <a
              href="https://www.linkedin.com/in/jackson-macharia/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="#contact-section"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:from-blue-500 hover:to-violet-500"
            >
              Start a project
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
