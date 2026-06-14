import CountUp from 'react-countup';
import { motion, useReducedMotion } from 'framer-motion';
import { IMPACT_STATS } from '../../data/stats';

const CounterSection = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section
      className="relative border-y border-gray-200/80 bg-gray-50/80 py-10 dark:border-white/10 dark:bg-gray-900/50"
      id="impact-section"
      aria-label="Impact metrics"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {IMPACT_STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left sm:gap-4 lg:flex-col lg:text-center lg:gap-0"
              >
                <div className="mb-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/10 to-violet-600/10 text-blue-600 dark:from-blue-500/20 dark:to-violet-500/20 dark:text-blue-400 sm:mb-0 lg:mb-3 lg:mx-auto">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>

                <div>
                  <p className="text-2xl sm:text-3xl font-bold tabular-nums text-gray-900 dark:text-white">
                    <CountUp
                      end={stat.end}
                      duration={2}
                      enableScrollSpy
                      scrollSpyOnce
                      separator={stat.separator}
                    />
                    {stat.suffix}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
