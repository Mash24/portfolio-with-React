import React from 'react';

/**
 * About Component
 * - Displays personal biography, professional background, and contact information
 * - Split into two sections: Left (image) and Right (text content)
 */
const About = () => {
  return (
    <section className="py-16 bg-white" id="about-section">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">

          {/* Left Image Section */}
          {/* You might want to add a relevant image here */}
          <div className="hidden md:flex md:w-5/12 bg-gray-100 rounded-xl justify-center items-center p-6">
            {/* Placeholder for image. Replace with your actual image path */}
            <img
              src="/images/about_1-3.jpg" // Replace with your actual image path
              alt="About Jackson"
              className="object-contain w-full h-full max-h-[600px] rounded-lg"
            />
          </div>

          {/* Right Text Section */}
          <div className="w-full md:w-7/12">
            {/* Section Heading */}
            <span className="uppercase tracking-widest text-sm font-semibold text-lime-600">
              Who I Am
            </span>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>

            {/* Bio Paragraphs */}
            <p className="text-gray-600 mb-4">
              Passionate about technology, education, and solving real-world problems. With a background in Statistics and Computer Science, I bring both analytical thinking and technical execution to the table. I'm currently transitioning into Cloud Computing and DevOps while also developing full-stack web apps using React, Firebase, Next.js, and AWS. I thrive in self-directed environments, build real-world apps, and enjoy teaching and mentoring young learners.
            </p>
            <p className="text-gray-600 mb-6">
              I'm currently pursuing my second degree in Computer Science at the University of the People (USA), while also building production-grade cloud applications like <strong>Job Connect</strong> — a full-featured platform with role-based dashboards, authentication, real-time messaging, and GitHub-integrated CI/CD deployment. I'm passionate about solving real-world problems using scalable, secure technologies. Whether it's building intuitive UIs or deploying serverless infrastructure, I'm driven by the impact of what I build.
            </p>

            {/* Personal Information List */}
            <ul className="space-y-2 text-gray-800 font-medium">
              <li><strong>Name:</strong> <span className="text-lime-600">Jackson Mwakano Macharia</span></li>
              <li><strong>Age:</strong> <span className="text-lime-600">28</span></li>
              <li><strong>Nationality:</strong> <span className="text-lime-600">Kenyan</span></li>
              <li><strong>Current Location:</strong> <span className="text-lime-600">Thailand</span></li>
              <li><strong>Date of birth:</strong> <span className="text-lime-600">October 15, 1996</span></li>
              <li><strong>Address:</strong> <span className="text-lime-600">Chiang Mai, Thailand</span></li>
              <li><strong>Zip code:</strong> <span className="text-lime-600">50000</span></li>
              <li><strong>Email:</strong> <span className="text-lime-600">jackmwakano@gmail.com</span></li>
              <li><strong>Phone:</strong> <span className="text-lime-600">+66-95-281-9402</span></li>
            </ul>

            {/* Interests Section */}
            <div className="flex gap-4 justify-center md:justify-start mt-6 flex-wrap">
              {/* Updated interests based on outline */}
              <div className="flex items-center gap-1">
                <span className="bg-lime-600 text-white rounded-full w-8 h-8 flex justify-center items-center text-sm">🧑‍🏫</span> {/* Teacher emoji */}
                <span className="font-medium text-sm">Teaching & Mentoring Students</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="bg-lime-600 text-white rounded-full w-8 h-8 flex justify-center items-center text-sm">💻</span> {/* Laptop emoji */}
                <span className="font-medium text-sm">Building Real-World Apps</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="bg-lime-600 text-white rounded-full w-8 h-8 flex justify-center items-center text-sm">☁️</span> {/* Cloud emoji */}
                <span className="font-medium text-sm">Exploring Cloud Architecture</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="bg-lime-600 text-white rounded-full w-8 h-8 flex justify-center items-center text-sm">🏋️</span> {/* Weightlifting emoji */}
                <span className="font-medium text-sm">Gym and Fitness</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="bg-lime-600 text-white rounded-full w-8 h-8 flex justify-center items-center text-sm">📈</span> {/* Chart emoji */}
                <span className="font-medium text-sm">Exploring Automation Businesses</span>
              </div>
               <div className="flex items-center gap-1">
                <span className="bg-lime-600 text-white rounded-full w-8 h-8 flex justify-center items-center text-sm">✈️</span> {/* Airplane emoji */}
                <span className="font-medium text-sm">Aviation Career Exploration (Past)</span>
              </div>
            </div>

            {/* Add a Download CV button here */}
            <div className="mt-8">
              {/* Replace href with actual path to your CV */}
              <a
                href="/your-cv.pdf"
                download
                className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
