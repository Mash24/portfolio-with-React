import React from "react";
import { motion } from "framer-motion";
import { FaServer, FaCode, FaCogs, FaCloud, FaTools, FaChartLine, FaDatabase, FaLock, FaAws, FaReact, FaGithub, FaFire, FaBolt, FaUserShield } from "react-icons/fa";

/**
 * Services data
 * - Each service includes an icon, a title, and a short description
 */
const services = [
  {
    icon: <FaCloud className="text-white text-2xl" />,
    title: "Cloud Support",
    description:
      "Assisting with the deployment and monitoring of applications across AWS and Firebase with a focus on stability, security, and scale.",
    badges: ["AWS", "Firebase", "CloudWatch"]
  },
  {
    icon: <FaCode className="text-white text-2xl" />,
    title: "Frontend Engineering",
    description:
      "Crafting dynamic, responsive user interfaces using ReactJS, HTML, CSS, TailwindCSS, and JavaScript.",
    badges: ["React", "TailwindCSS", "HTML", "CSS", "JavaScript"]
  },
  {
    icon: <FaDatabase className="text-white text-2xl" />,
    title: "Firebase Integration",
    description:
      "Implementing Firebase Authentication, Firestore, and Hosting to power real-time and secure web applications.",
    badges: ["Firebase", "Firestore", "Auth"]
  },
  {
    icon: <FaCogs className="text-white text-2xl" />,
    title: "CI/CD Pipelines",
    description:
      "Automating deployments with GitHub Actions for consistent delivery, testing, and version control.",
    badges: ["GitHub Actions", "CI/CD", "Automation"]
  },
  {
    icon: <FaServer className="text-white text-2xl" />,
    title: "Serverless Deployments",
    description:
      "Hosting fast, scalable apps on Firebase and S3, optimizing for cost-efficiency and performance.",
    badges: ["Serverless", "S3", "Firebase"]
  },
  {
    icon: <FaTools className="text-white text-2xl" />,
    title: "Infrastructure Troubleshooting",
    description:
      "Debugging, logging, and maintaining app uptime with basic CLI, AWS CloudWatch, and real-time monitoring tools.",
    badges: ["CloudWatch", "CLI", "Monitoring"]
  },
  {
    icon: <FaLock className="text-white text-2xl" />,
    title: "Authentication & Security",
    description:
      "Setting up secure auth flows with Firebase and IAM policies for protected, role-based access control.",
    badges: ["IAM", "Firebase Auth", "Security"]
  },
  {
    icon: <FaChartLine className="text-white text-2xl" />,
    title: "Performance Monitoring",
    description:
      "Tracking app performance and user activity to ensure a seamless and optimized experience across devices.",
    badges: ["Performance", "Analytics", "Monitoring"]
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, type: "spring", bounce: 0.3 },
  }),
};

/**
 * Projects Component (Services Section)
 * - Displays a grid of services offered
 * - Each service card features an icon, title, and description
 */
const Services = () => {
  return (
    <section id="services-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-lime-600 uppercase tracking-widest font-semibold">What I Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Services I Offer</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            I build and support reliable, cloud-native web applications using modern frontend tools and real-time cloud infrastructure.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 rgba(181,187,141,0.18)" }}
              className="relative bg-white rounded-xl shadow-lg p-6 pt-14 text-center group hover:shadow-2xl transition duration-300 border border-lime-50 cursor-pointer overflow-hidden"
            >
              {/* Service Icon with animated background */}
              <motion.div
                className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-lime-500 to-lime-400 w-14 h-14 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                whileHover={{ rotate: 12, scale: 1.15 }}
              >
                {service.icon}
              </motion.div>

              {/* Service Title */}
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 mt-2">{service.title}</h3>

              {/* Service Description */}
              <p className="text-gray-500 text-sm sm:text-sm leading-relaxed mb-4">{service.description}</p>

              {/* Skill Badges */}
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {service.badges.map((badge, i) => (
                  <span key={i} className="px-2 py-1 bg-lime-100 text-lime-800 text-xs rounded-full font-semibold shadow-sm">
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
