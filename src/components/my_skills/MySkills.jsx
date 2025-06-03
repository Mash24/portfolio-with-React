import React from 'react';

/**
 * Categorized Technical Skills
 */
const skills = {
  Frontend: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
  Backend: ['Firebase', 'Node.js (learning)', 'Python (learning)'],
  'Cloud & DevOps': ['AWS (EC2, VPC, S3, IAM)', 'Jenkins', 'GitHub Actions'],
  Database: ['Firestore', 'SQLite'],
  'Tools & Platforms': ['Vercel', 'GitHub', 'VS Code', 'Linux terminal', 'Postman'],
  Other: ['Responsive Design', 'REST APIs', 'CI/CD basics', 'WebSockets'],
  'Currently Learning': ['Terraform', 'Docker', 'Kubernetes (planned next)'],
};

/**
 * MySkills Component
 * - Displays a categorized list of technical skills
 */
const MySkills = () => {
  return (
    <section className="py-16 bg-gray-50" id='skills-section'>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-lime-600 uppercase tracking-widest font-semibold text-sm sm:text-base">Skills</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-sm sm:text-base">
            Here is a comprehensive list of my technical skills, covering various domains including frontend, backend, cloud, and DevOps tools.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">{category}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {skillList.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;