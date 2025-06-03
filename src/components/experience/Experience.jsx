import React from 'react';

const Experience = () => {
  return (
    <section className="py-16 bg-white" id='experience-section'>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-lime-600 uppercase tracking-widest font-semibold text-sm">Experience</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Journey</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base">
            Highlights of my professional journey, showcasing my diverse skills and continuous growth.
          </p>
        </div>

        {/* Experience Items */}
        <div className="space-y-10">
          {/* Computer Science Teacher */}
          <div className="flex flex-col md:flex-row items-start gap-6 pb-8 border-b border-gray-200 last:border-b-0">
            <div className="md:w-1/4 flex-shrink-0">
              <h3 className="text-xl font-semibold text-gray-900">Computer Science Teacher</h3>
              <p className="text-gray-600 text-sm">Thailand (Current)</p>
            </div>
            <div className="md:w-3/4 text-gray-700">
              <p className="mb-3 leading-relaxed">
                Educated high school students (ages 14–18) in computer science principles and applications. <span className="font-semibold text-gray-800">Developed and implemented</span> engaging, real-world problem-solving activities and project-based assessments. <span className="font-semibold text-gray-800">Honed skills</span> in breaking down complex technical concepts, adapting communication for diverse audiences, and managing multiple concurrent projects to successful completion.
              </p>
              <p className="text-sm font-semibold text-lime-700">Transferable Skills: Technical Communication, Complex Problem Solving, Project Planning & Management, Mentoring, Curriculum Development</p>
            </div>
          </div>

          {/* Freelance Full Stack Developer */}
          <div className="flex flex-col md:flex-row items-start gap-6 pb-8 border-b border-gray-200 last:border-b-0">
             <div className="md:w-1/4 flex-shrink-0">
              <h3 className="text-xl font-semibold text-gray-900">Freelance Full Stack Developer</h3>
              {/* <p className="text-gray-600 text-sm">Dates/Duration if available</p> */}
            </div>
            <div className="md:w-3/4 text-gray-700">
              <p className="mb-3 leading-relaxed">
                <span className="font-semibold text-gray-800">Designed and delivered</span> responsive, full-stack web applications and landing pages for small businesses. <span className="font-semibold text-gray-800">Utilized a range of technologies</span> including React and Tailwind CSS for dynamic frontends, and implemented backend solutions using Node.js and Firebase for data management, APIs, and hosting. Successfully <span className="font-semibold text-gray-800">managed client relationships</span> and project timelines from concept to deployment, ensuring client satisfaction.
              </p>
              <p className="text-sm font-semibold text-lime-700">Skills Demonstrated: Full Stack Development (React, Node.js, Firebase), API Design, Client Management, UI/UX Implementation, Project Delivery</p>
            </div>
          </div>

          {/* Add other experience items as needed */}
        </div>
      </div>
    </section>
  );
};

export default Experience; 