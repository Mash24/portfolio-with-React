import React from 'react';
// Tech stack icons import
import { FaReact, FaNodeJs, FaPython, FaAws, FaGithub, FaDocker } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiJenkins, SiTerraform, SiKubernetes, SiVercel, SiPostman, SiVisualstudiocode, SiSqlite, SiLinux } from 'react-icons/si';
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io5';

const techStack = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'HTML5', icon: IoLogoHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: IoLogoCss3, color: '#1572B6' },
  { name: 'JavaScript', icon: IoLogoJavascript, color: '#F7DF1E' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'AWS', icon: FaAws, color: '#232F3E' },
  { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
  { name: 'GitHub Actions', icon: FaGithub, color: '#2088FF' }, // Using GitHub icon
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Firestore', icon: SiFirebase, color: '#FFCA28' }, // Using Firebase icon
  { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
  { name: 'VS Code', icon: SiVisualstudiocode, color: '#007ACC' },
  { name: 'Linux', icon: SiLinux, color: '#FCC624' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Terraform', icon: SiTerraform, color: '#7B42BC' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
];

const TechStack = () => {
  return (
    <section className="py-16 bg-white" id='tech-stack-section'>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-lime-600 uppercase tracking-widest font-semibold text-sm">Skills</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Tech Stack</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base">
            Technologies and tools I work with to build modern web applications and cloud infrastructure.
          </p>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 justify-items-center items-center">
          {techStack.map((tech, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center group">
              <div className="text-5xl md:text-6xl text-gray-800 group-hover:text-lime-600 transition-colors duration-300" style={{ color: tech.color }}>
                <tech.icon />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack; 