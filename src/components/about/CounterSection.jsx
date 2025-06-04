import React from "react";
import CountUp from "react-countup";
import { Briefcase, Smile, Coffee, Calendar } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Statistics data for the counter section
 * - Each object contains an icon, a value to count up to, and a label
 */
const stats = [
  { icon: <Briefcase size={28} />, value: 4, label: "Project Complete" },
  { icon: <Smile size={28} />, value: 3, label: "Happy Clients" },
  { icon: <Coffee size={28} />, value: 8, label: "Cups of Coffee" },
  { icon: <Calendar size={28} />, value: 2, label: "Years Experienced" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: "spring", bounce: 0.3 },
  }),
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
        {/* Flex container for mobile (horizontal scroll), grid for desktop */}
        <div className="flex md:grid md:grid-cols-4 gap-8 overflow-x-auto md:overflow-visible scrollbar-hide">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              className="min-w-[60%] flex-shrink-0 md:min-w-0 flex flex-col items-center text-center space-y-3 bg-white rounded-2xl shadow-xl py-8 px-4 md:py-10 md:px-6 transition-transform duration-300 hover:scale-105 group relative overflow-hidden"
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
              >
                {stat.icon}
              </motion.div>

              {/* Animated number counter with pop */}
              <motion.h3
                className="text-4xl font-extrabold text-gray-800 drop-shadow-lg"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 + index * 0.1 }}
              >
                <CountUp end={stat.value} duration={2} />
              </motion.h3>

              {/* Label text */}
              <p className="text-[15px] font-semibold uppercase tracking-wide text-[#b5bb8d]">
                {stat.label}
              </p>

              {/* Sparkle effect on hover */}
              <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 left-2 top-2 text-yellow-300 text-xl animate-pulse select-none pointer-events-none">✦</span>
              <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 right-3 bottom-3 text-blue-200 text-lg animate-ping select-none pointer-events-none">✦</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;