import React from "react";
import CountUp from "react-countup";
import { Briefcase, Cloud, Rocket, Users, Globe, GitBranch, Zap, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Statistics data for the counter section
 * - Each object contains an icon, a value to count up to, and a label
 */
const stats = [
  {
    icon: <Briefcase size={28} />, value: 12, label: "Technologies Mastered", suffix: "+"
  },
  {
    icon: <Cloud size={28} />, value: 3, label: "Cloud Platforms Used"
  },
  {
    icon: <Rocket size={28} />, value: 18, label: "Production Deployments", suffix: "+"
  },
  {
    icon: <Users size={28} />, value: 15000, label: "Users Impacted", suffix: "+"
  },
  {
    icon: <GitBranch size={28} />, value: 7, label: "Automated CI/CD Pipelines"
  },
  {
    icon: <Globe size={28} />, value: 10, label: "Countries Reached", suffix: "+"
  },
  {
    icon: <Zap size={28} />, value: 5, label: "Team Projects Led", suffix: "+"
  },
  {
    icon: <Award size={28} />, value: 3, label: "Years in Tech"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.13, duration: 0.7, type: "spring", bounce: 0.4 },
  }),
};

const iconVariants = {
  hidden: { scale: 0, rotate: -90 },
  visible: { scale: 1, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 15 } }
};

const numberVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: [1.2, 1], opacity: 1, transition: { duration: 0.5, type: "spring", stiffness: 300 } }
};

const sparkleVariants = {
  initial: { opacity: 0, y: 0, scale: 0.8 },
  animate: { opacity: [0, 1, 0], y: [0, -10, 0], scale: [0.8, 1.2, 0.8], transition: { duration: 1.2, repeat: Infinity, repeatDelay: 2, delay: 0.2 } }
};

/**
 * CounterSection Component
 * - Displays animated counters for projects, clients, coffee cups, and experience
 * - Scrollable on mobile and grid layout on desktop
 */
const CounterSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#f8f9fa] to-[#e8f0fe] py-14" id="section-counter">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatePresence>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
                whileHover={{ rotate: -2 + index % 2 * 4, scale: 1.06, boxShadow: "0 8px 32px 0 rgba(181,187,141,0.18)" }}
                className="flex flex-col items-center text-center space-y-3 bg-white rounded-2xl shadow-xl py-8 px-4 md:py-10 md:px-6 transition-transform duration-300 group relative overflow-hidden cursor-pointer"
              >
                {/* Animated Icon Background */}
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-2 text-white shadow-lg relative z-10"
                  animate={{ boxShadow: [
                    "0 0 0 0 #b5bb8d80",
                    "0 0 0 12px #b5bb8d20",
                    "0 0 0 0 #b5bb8d80"
                  ] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ background: "linear-gradient(135deg, #b5bb8d 60%, #a3c9f9 100%)" }}
                  initial="hidden"
                  whileInView="visible"
                  variants={iconVariants}
                >
                  {stat.icon}
                </motion.div>

                {/* Animated number counter with pop */}
                <motion.h3
                  className="text-4xl font-extrabold text-gray-800 drop-shadow-lg flex items-baseline justify-center gap-1"
                  variants={numberVariants}
                  initial="initial"
                  whileInView="animate"
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <CountUp end={stat.value} duration={2} />
                  {stat.suffix && <span className="text-2xl font-bold text-lime-500">{stat.suffix}</span>}
                </motion.h3>

                {/* Label text */}
                <p className="text-[15px] font-semibold uppercase tracking-wide text-[#b5bb8d]">
                  {stat.label}
                </p>

                {/* Animated Sparkle effect on hover */}
                <motion.span
                  className="absolute left-2 top-2 text-yellow-300 text-xl select-none pointer-events-none"
                  variants={sparkleVariants}
                  initial="initial"
                  animate="animate"
                >✦</motion.span>
                <motion.span
                  className="absolute right-3 bottom-3 text-blue-200 text-lg select-none pointer-events-none"
                  variants={sparkleVariants}
                  initial="initial"
                  animate="animate"
                >✦</motion.span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;