import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Code2,
  Cloud,
  Workflow,
  Lightbulb,
  Check,
  Clock,
  ArrowRight,
  Briefcase,
  Handshake,
} from 'lucide-react';
import {
  SERVICES,
  ENGAGEMENT_MODELS,
  HIRE_OPTIONS,
  WORK_PROCESS,
  getContactUrl,
} from '../../data/services';

const SERVICE_ICONS = {
  fullstack: Code2,
  cloud: Cloud,
  cicd: Workflow,
  consulting: Lightbulb,
};

const Services = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section
      className="py-20 lg:py-24 bg-white dark:bg-gray-950 relative overflow-hidden"
      id="services-section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-12 lg:mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Services
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            How I can help
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Available for full-time roles, contract work, and scoped project engagements —
            from MVP sprints to enterprise SaaS builds.
          </p>
        </motion.div>

        {/* Service offerings */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.id] ?? Code2;
            return (
              <motion.div
                key={service.id}
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50/50 p-6 dark:border-gray-800 dark:bg-gray-900/50"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400 flex-1">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400"
                    >
                      <Check className="h-3 w-3 text-emerald-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to={getContactUrl({ serviceType: service.id })}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
                >
                  Discuss this
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Hire options */}
        <div className="mb-16 grid gap-4 sm:grid-cols-2">
          {HIRE_OPTIONS.map((option, index) => {
            const Icon = option.id === 'fulltime' ? Briefcase : Handshake;
            return (
              <motion.div
                key={option.id}
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-blue-200/80 bg-blue-50/50 p-6 dark:border-blue-800/40 dark:bg-blue-950/20"
              >
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{option.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {option.description}
                    </p>
                  </div>
                </div>
                <Link
                  to={getContactUrl({ hire: option.id })}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-blue-600 px-5 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white"
                >
                  {option.cta}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Engagement models */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Project engagements
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            Transparent starting points for scoped work. Final quotes depend on scope — all
            engagements include source code and documentation.
          </p>

          <div className="grid gap-6 lg:grid-cols-3">
            {ENGAGEMENT_MODELS.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 ${
                  plan.popular
                    ? 'border-blue-500 bg-white shadow-lg shadow-blue-500/10 dark:bg-gray-900 lg:scale-[1.02]'
                    : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                )}

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {plan.name}
                  </h4>
                  <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="h-3.5 w-3.5" />
                    {plan.duration}
                  </div>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                    {plan.description}
                  </p>
                </div>

                <ul className="mb-8 flex-1 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={getContactUrl({ plan: plan.id })}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold transition ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/20 hover:from-blue-500 hover:to-violet-500'
                      : 'border border-gray-300 text-gray-800 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-8 sm:p-10 text-white"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">How we work together</h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {WORK_PROCESS.map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-lg font-bold">
                  {item.step}
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to={getContactUrl()}
            className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
          >
            Get a free consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
