import React from "react";
import { FaPaintBrush, FaCode, FaServer, FaRocket, FaFigma, FaChartLine, FaMobileAlt, FaSearch } from "react-icons/fa";

const services = [
  {
    icon: <FaPaintBrush className="text-white text-2xl" />,
    title: "Web Design",
    description:
      "I craft clean, intuitive UI designs that are mobile-friendly, accessible, and visually engaging.",
  },
  {
    icon: <FaCode className="text-white text-2xl" />,
    title: "Web Applications",
    description:
      "From dashboards to job platforms, I build fully functional apps using ReactJS and Firebase.",
  },
  {
    icon: <FaMobileAlt className="text-white text-2xl" />,
    title: "Frontend Development",
    description:
      "I write scalable, responsive code using HTML, CSS, JavaScript, and React. TailwindCSS is my go-to for styling.",
  },
  {
    icon: <FaServer className="text-white text-2xl" />,
    title: "Brand Identity",
    description:
      "I help create a consistent digital brand look through UI styling, custom landing pages, and banners.",
  },
  {
    icon: <FaRocket className="text-white text-2xl" />,
    title: "Performance Optimization",
    description:
      "I optimize websites for fast load times, accessibility, and smooth user interaction on all devices.",
  },
  {
    icon: <FaChartLine className="text-white text-2xl" />,
    title: "Firebase Integration",
    description:
      "Authentication, Firestore, storage, and real-time updates—fully integrated into your React app.",
  },
  {
    icon: <FaFigma className="text-white text-2xl" />,
    title: "UI Prototyping",
    description:
      "I create wireframes and mockups with Figma to plan and test layouts before development begins.",
  },
  {
    icon: <FaSearch className="text-white text-2xl" />,
    title: "SEO Basics",
    description:
      "I implement semantic markup and performance best practices that help improve search visibility.",
  },
];

const Projects = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="text-lime-600 uppercase tracking-widest font-semibold">What I Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Services I Offer</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            I create modern, responsive websites and web applications that solve real problems and deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative bg-white rounded-lg shadow-md p-6 pt-12 text-center group hover:shadow-xl transition duration-300">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-lime-600 w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
