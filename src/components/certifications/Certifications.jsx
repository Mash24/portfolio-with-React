import React from 'react';

const certifications = [
  {
    name: 'AWS Cloud Practitioner',
    status: '(planned 2025)',
  },
  {
    name: 'Jenkins + Docker Deployment Projects',
    status: '(in progress)',
  },
  {
    name: 'Frontend Development Certificate',
    status: '(self-study)',
  },
  {
    name: 'CS Courses: Information Retrieval, Operating Systems, Big Data',
    status: '',
  },
];

const Certifications = () => {
  return (
    <section className="py-16 bg-gray-50" id='certifications-section'>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-lime-600 uppercase tracking-widest font-semibold text-sm">Certifications & Courses</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education & Training</h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-sm sm:text-base">
            A list of my completed and in-progress certifications and relevant coursework.
          </p>
        </div>

        {/* Certifications List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
              {/* You can add an icon here if desired */}
              <div className="flex-shrink-0">
                 <span className="text-2xl text-lime-600">🎓</span> {/* Graduation cap emoji as placeholder */}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{cert.name}</h3>
                {cert.status && <p className="text-gray-600 text-sm">{cert.status}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 