import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
  { name: 'CSS', percentage: 85, desc: 'Proficient in responsive styling using CSS3, with hands-on experience in Tailwind CSS and Bootstrap frameworks.' },
  { name: 'HTML', percentage: 98, desc: 'Expert in writing clean, semantic HTML5 to build accessible and well-structured layouts.' },
  { name: 'JavaScript', percentage: 70, desc: 'Proficient in clean, functional JavaScript for both vanilla and React-based applications.' },
  { name: 'ReactJS', percentage: 80, desc: 'Building modern, responsive web apps with clean components and dynamic user interfaces.' },
  { name: 'Java', percentage: 35, desc: 'Building a strong foundation in object-oriented programming and backend systems.' },
  { name: 'Python', percentage: 20, desc: 'Currently learning Python for backend development and data analysis.' },
];

const MySkills = () => {
  return (
    <section className="py-16 bg-gray-50" id='skills-section'>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <span className="text-lime-600 uppercase tracking-widest font-semibold">Skills</span>
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-gray-500 max-w-3xl mx-auto">
            I specialize in modern frontend development using HTML, CSS, JavaScript, and ReactJS. I'm also expanding my full-stack capabilities by learning Python and Java. Below is a snapshot of my current skill levels:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center transform hover:scale-105 transition duration-500 ease-in-out"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900">{skill.name}</h3>

              <div className="w-32 h-32 mb-4">
                <CircularProgressbar
                  value={skill.percentage}
                  text={`${skill.percentage}%`}
                  strokeWidth = {2}
                  styles={buildStyles({
                    pathColor: '#a3e635',
                    textColor: '#111827',
                    trailColor: '#d1d5db',
                    textSize: '20px',
                  })}
                />
              </div>

              <p className="text-sm text-gray-600">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
