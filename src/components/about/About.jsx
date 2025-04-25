import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-white" id="about-section">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">

          {/* Left Image Section */}
          {/* <!______________________________________________________________________________________> */}
          <div className="hidden md:flex md:w-5/12 bg-gray-100 rounded-xl justify-center items-center p-6">
            <img
              src="/images/about_1-3.jpg"
              alt="About Jackson"
              className="object-contain w-full h-full max-h-[600px] rounded-lg"
            />
          </div>

          {/* Right Text Section */}
          <div className="w-full md:w-7/12">
            <span className="uppercase tracking-widest text-sm font-semibold text-lime-600">
              Who I Am
            </span>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>

            <p className="text-gray-600 mb-4">
              Hello! I'm Jackson M Macharia — a dedicated Junior - Cloud Support Engineer and full-stack developer with a strong foundation in HTML, CSS, JavaScript, and ReactJS. While I started my journey in frontend development, I’m now actively transitioning into Cloud Infrastructure and DevOps, with hands-on experience in AWS, Firebase, CI/CD pipelines, and cloud-native deployments.
            </p>
            <p className="text-gray-600 mb-6">
              I'm currently pursuing my second degree in Computer Science at the University of the People (USA), while also building production-grade cloud applications like <strong>Job Connect</strong> — a full-featured platform with role-based dashboards, authentication, real-time messaging, and GitHub-integrated CI/CD deployment. I'm passionate about solving real-world problems using scalable, secure technologies. Whether it’s building intuitive UIs or deploying serverless infrastructure, I’m driven by the impact of what I build.
            </p>

            <ul className="space-y-2 text-gray-800 font-medium">
              <li><strong>Name:</strong> <span className="text-lime-600">Jackson M Macharia</span></li>
              <li><strong>Date of birth:</strong> <span className="text-lime-600">October 15, 1996</span></li>
              <li><strong>Address:</strong> <span className="text-lime-600">Chiang Mai, Thailand</span></li>
              <li><strong>Zip code:</strong> <span className="text-lime-600">50000</span></li>
              <li><strong>Email:</strong> <span className="text-lime-600">jackmwakano@gmail.com</span></li>
              <li><strong>Phone:</strong> <span className="text-lime-600">+66-95-281-9402</span></li>
            </ul>

            <div className="flex gap-2 justify-center md:justify-start mt-6 flex-nowwrap overflow-x-auto whitespace-nowrap">
              <div className="flex items-center gap-1">
                <span className="bg-lime-600 text-white rounded-full w-8 h-8 flex justify-center items-center text-sm">🎧</span>
                <span className="font-medium text-sm">Music</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="bg-lime-600 text-white rounded-full w-8 h-8 flex justify-center items-center text-sm">✈️</span>
                <span className="font-medium text-sm">Travel</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="bg-lime-600 text-white rounded-full w-8 h-8 flex justify-center items-center text-sm">🎬</span>
                <span className="font-medium text-sm">Movies</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="bg-lime-600 text-white rounded-full w-8 h-8 flex justify-center items-center text-sm">⚽</span>
                <span className="font-medium text-sm">Sports</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
