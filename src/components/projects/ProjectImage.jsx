import { useState } from 'react';
import { getProjectInitials } from '../../data/projects';

const GRADIENTS = [
  'from-blue-600 to-violet-700',
  'from-violet-600 to-fuchsia-700',
  'from-emerald-600 to-teal-700',
  'from-amber-600 to-orange-700',
  'from-rose-600 to-pink-700',
  'from-cyan-600 to-blue-700',
];

const ProjectImage = ({ project, className = '', gradientIndex = 0 }) => {
  const [failed, setFailed] = useState(false);
  const gradient = GRADIENTS[gradientIndex % GRADIENTS.length];

  if (failed || !project.image) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br ${gradient} ${className}`}
        aria-hidden="true"
      >
        <span className="text-3xl font-bold text-white/90 sm:text-4xl">
          {getProjectInitials(project.title)}
        </span>
      </div>
    );
  }

  return (
    <img
      src={project.image}
      alt={project.title}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
};

export default ProjectImage;
