import React from 'react';

const projects = [
  { title: "Job Connect Web App", desc: "ReactJS • Firebase • TailwindCSS", image: "/images/work-1.jpg" },
  { title: "Personal Portfolio Site", desc: "HTML • CSS • Bootstrap", image: "/images/work-2.jpg" },
  { title: "Landing Page Templates", desc: "Responsive Design • SEO-Friendly", image: "/images/work-3.jpg" },
  { title: "Firebase Auth Demo", desc: "Login • Register • Role-based Routing", image: "/images/work-4.jpg" },
  { title: "Realtime Chat UI", desc: "React • Firestore • Message Bubbles", image: "/images/work-5.jpg" },
  { title: "Mobile-First Resume Page", desc: "HTML • Tailwind • PDF Download", image: "/images/work-6.jpg" },
  { title: "Admin Dashboard UI", desc: "React • Grid Layout • Firebase", image: "/images/work-7.jpg" },
  { title: "Form Wizard & Multi-Step Setup", desc: "React • Validation • Firestore", image: "/images/work-8.jpg" },
];

const Projects = () => {
  return (
    <section className="py-16 bg-white" id='projects-section'>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        <div className="text-center mb-12">
          <span className="text-lime-600 uppercase tracking-widest font-semibold">Projects</span>
          <h2 className="text-4xl font-bold mb-4">Things I've Built</h2>
          <p className="text-gray-500 max-w-3xl mx-auto">
            Here are some of the projects I've worked on—from frontend interfaces to full web applications. More on <a href="https://github.com/Mash24?tab=repositories" className="text-lime-600 hover:underline">GitHub</a>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-60 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                  <span className="text-sm">{project.desc}</span>
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
