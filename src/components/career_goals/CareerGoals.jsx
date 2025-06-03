import React from 'react';

const CareerGoals = () => {
  return (
    <section className="py-16 bg-white" id='career-goals-section'>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-lime-600 uppercase tracking-widest font-semibold text-sm">Goals</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Career Goals</h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-sm sm:text-base">
            My aspirations and the direction I am heading in my career journey.
          </p>
        </div>

        {/* Career Goals Content */}
        <div className="max-w-3xl mx-auto text-center text-gray-700 text-lg leading-relaxed">
          <p>
            I aim to become a **Mid-Level Cloud Support Engineer or DevOps Engineer** within the next 6–12 months. I'm building a strong foundation in cloud infrastructure, CI/CD, monitoring, and system troubleshooting, while also strengthening my full-stack capabilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerGoals; 