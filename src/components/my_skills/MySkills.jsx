import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
  { name: 'AWS Cloud', percentage: 40, desc: 'Hands-on with core AWS services including EC2, S3, IAM, and serverless app deployment via AWS Free Tier.' },
  { name: 'Firebase', percentage: 75, desc: 'Integrated real-time databases, authentication, and cloud hosting in production apps using Firebase.' },
  { name: 'GitHub Actions (CI/CD)', percentage: 50, desc: 'Configuring deployment pipelines using GitHub Actions for continuous integration and delivery.' },
  { name: 'ReactJS', percentage: 80, desc: 'Building modern, responsive web apps with clean components and dynamic user interfaces.' },
  { name: 'HTML', percentage: 95, desc: 'Expert in writing clean, semantic HTML5 to build accessible and well-structured layouts.' },
  { name: 'CSS | TailwindCSS', percentage: 85, desc: 'Proficient in responsive styling using CSS3, with hands-on experience in Tailwind and Bootstrap frameworks.' },
  { name: 'JavaScript', percentage: 70, desc: 'Proficient in clean, functional JavaScript for both vanilla and React-based applications.' },
  { name: 'Linux | CLI Tools', percentage: 30, desc: 'Basic command-line skills for navigating and managing cloud servers and deployment environments.' },
  { name: 'Python', percentage: 25, desc: 'Currently learning Python for scripting, backend development, and cloud automation.' }
];

const MySkills = () => {
  return (
    <section className="py-16 bg-gray-50" id='skills-section'>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <span className="text-lime-600 uppercase tracking-widest font-semibold text-sm sm:text-base">Skills</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-sm sm:text-base">
            I specialize in frontend and cloud development, using tools like ReactJS, Firebase, AWS, and GitHub Actions to build scalable, secure, and user-focused applications. Below is a snapshot of my evolving skill set as I transition into Cloud Support Engineering:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-900">{skill.name}</h3>

              <div className="w-24 h-24 sm:w-28 sm:h-28 mb-4">
                <CircularProgressbar
                  value={skill.percentage}
                  text={`${skill.percentage}%`}
                  strokeWidth={5}
                  styles={buildStyles({
                    pathColor: '#a3e635',
                    textColor: '#111827',
                    trailColor: '#d1d5db',
                    textSize: '18px',
                  })}
                />
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
