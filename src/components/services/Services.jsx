import React from "react";
import { FaServer, FaCode, FaCogs, FaCloud, FaTools, FaChartLine, FaDatabase, FaLock } from "react-icons/fa";

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
  },
  {
    icon: <FaCode className="text-white text-2xl" />,
    title: "Frontend Engineering",
    description:
      "Crafting dynamic, responsive user interfaces using ReactJS, HTML, CSS, TailwindCSS, and JavaScript.",
  },
  {
    icon: <FaDatabase className="text-white text-2xl" />,
    title: "Firebase Integration",
    description:
      "Implementing Firebase Authentication, Firestore, and Hosting to power real-time and secure web applications.",
  },
  {
    icon: <FaCogs className="text-white text-2xl" />,
    title: "CI/CD Pipelines",
    description:
      "Automating deployments with GitHub Actions for consistent delivery, testing, and version control.",
  },
  {
    icon: <FaServer className="text-white text-2xl" />,
    title: "Serverless Deployments",
    description:
      "Hosting fast, scalable apps on Firebase and S3, optimizing for cost-efficiency and performance.",
  },
  {
    icon: <FaTools className="text-white text-2xl" />,
    title: "Infrastructure Troubleshooting",
    description:
      "Debugging, logging, and maintaining app uptime with basic CLI, AWS CloudWatch, and real-time monitoring tools.",
  },
  {
    icon: <FaLock className="text-white text-2xl" />,
    title: "Authentication & Security",
    description:
      "Setting up secure auth flows with Firebase and IAM policies for protected, role-based access control.",
  },
  {
    icon: <FaChartLine className="text-white text-2xl" />,
    title: "Performance Monitoring",
    description:
      "Tracking app performance and user activity to ensure a seamless and optimized experience across devices.",
  },
];

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
        <div className="text-center mb-12">
          <p className="text-lime-600 uppercase tracking-widest font-semibold">What I Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Services I Offer</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            I build and support reliable, cloud-native web applications using modern frontend tools and real-time cloud infrastructure.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative bg-white rounded-lg shadow-md p-6 pt-12 text-center group hover:shadow-xl transition duration-300"
            >
              {/* Service Icon */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-lime-600 w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">{service.title}</h3>

              {/* Service Description */}
              <p className="text-gray-500 text-sm sm:text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
