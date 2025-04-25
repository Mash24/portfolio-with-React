import React from 'react';

const projects = [
  { title: "Job Connect Web App", desc: "ReactJS • Firebase • Firestore • Auth • CI/CD", image: "/images/work-1.jpg" },
  { title: "Cloud Portfolio Site", desc: "React • TailwindCSS • GitHub Pages", image: "/images/work-2.jpg" },
  { title: "Landing Page Templates", desc: "Mobile-First • SEO-Friendly • Firebase Hosting", image: "/images/work-3.jpg" },
  { title: "Firebase Auth Demo", desc: "Email Login • Role Routing • Protected Routes", image: "/images/work-4.jpg" },
  { title: "Realtime Chat UI", desc: "React • Firestore • Live Messaging", image: "/images/work-5.jpg" },
  { title: "Resume Page with PDF Export", desc: "Tailwind • HTML to PDF • Print Styling", image: "/images/work-6.jpg" },
  { title: "Admin Dashboard UI", desc: "React • Grid Layout • Role-Based Components", image: "/images/work-7.jpg" },
  { title: "Multi-Step Setup Wizard", desc: "Firestore • Validation • Dynamic Inputs", image: "/images/work-8.jpg" },
];

const Projects = () => {
  return (
    <section className="py-16 bg-white" id='projects-section'>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">

        <div className="text-center mb-12">
          <span className="text-lime-600 uppercase tracking-widest font-semibold text-sm">Projects</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Cloud-Powered Builds</h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-sm sm:text-base">
            A showcase of apps and interfaces I’ve developed — from cloud-hosted platforms to real-time Firebase apps. View source code on <a href="https://github.com/Mash24?tab=repositories" className="text-lime-600 hover:underline">GitHub</a>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-60 sm:h-64 md:h-56 lg:h-60 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center text-white px-3">
                  <h3 className="text-sm sm:text-base font-semibold mb-1">{project.title}</h3>
                  <span className="text-xs sm:text-sm">{project.desc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
