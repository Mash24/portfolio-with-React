export const EXPERIENCES = [
  {
    id: 'nelimac',
    title: 'Lead Full-Stack Engineer',
    company: 'Nelimac Learning',
    location: 'Remote',
    start: 'Aug 2025',
    end: 'Present',
    isCurrent: true,
    description:
      'Leading engineering for a cloud-based Learning Management Platform serving 1,000+ active users.',
    achievements: [
      'Architected a modular component library, improving developer efficiency by 40%',
      'Designed multi-tenant backend with CI/CD (GitHub Actions + Docker), cutting deploy time by 60%',
      'Implemented JWT auth and role-based dashboards for secure learning operations',
      'Collaborated cross-functionally on UX optimization and API integration',
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'Prisma',
      'TailwindCSS',
      'Docker',
      'GitHub Actions',
    ],
    metrics: ['1,000+ users', '60% faster deploys', 'Multi-tenant'],
    projectTitle: 'Nelimac Learning',
  },
  {
    id: 'trainswise',
    title: 'Full-Stack Developer',
    company: 'Trainswise-AI',
    companyNote: 'formerly Nexus Loop AI',
    location: 'Remote',
    start: 'May 2024',
    end: 'Jul 2025',
    isCurrent: false,
    description:
      'Led full-stack development for an AI-driven task management platform with a scalable monorepo architecture.',
    achievements: [
      'Built backend modules with Prisma ORM (PostgreSQL), schema validation, and real-time sync',
      'Automated builds and deployments via GitHub Actions + Docker CI/CD pipeline',
      'Improved load performance and accessibility, boosting global performance scores by 35%',
      'Established Turborepo monorepo with linting, tests, and preview environments',
    ],
    techStack: [
      'React',
      'Next.js 14',
      'NestJS',
      'Prisma',
      'Turborepo',
      'TypeScript',
      'Docker',
    ],
    metrics: ['70% faster deploys', 'Multi-tenant', 'Real-time sync'],
    projectTitle: 'Trainswise-AI',
  },
  {
    id: 'job-connect',
    title: 'Cloud & Frontend Developer',
    company: 'Job Connect Platform',
    location: 'Remote',
    start: 'Jan 2023',
    end: 'Dec 2024',
    isCurrent: false,
    description:
      'Developed role-based dashboards and chat interfaces serving 15,000+ active users.',
    achievements: [
      'Integrated AWS S3 for media management and automated deployments with GitHub Actions',
      'Reduced page load times by 35% with code-splitting and caching strategies',
      'Built real-time job-matching features with Firebase Functions backend',
      'Maintained zero-downtime deployments across staging and production',
    ],
    techStack: [
      'React',
      'Firebase',
      'AWS S3',
      'GitHub Actions',
      'TailwindCSS',
      'JavaScript',
    ],
    metrics: ['15,000+ users', '35% faster load', 'Zero downtime'],
    projectTitle: 'Job Connect Platform',
  },
  {
    id: 'charity-connect',
    title: 'Frontend Developer',
    company: 'Charity Connect',
    location: 'Remote',
    start: 'Apr 2024',
    end: 'Dec 2024',
    isCurrent: false,
    employmentType: 'Volunteer',
    description:
      'Built a responsive donation platform scaling to 1,000+ users across 5+ countries.',
    achievements: [
      'Created admin dashboards with donor analytics, fraud detection, and reporting',
      'Built serverless backend with Firebase Functions for real-time donations',
      'Automated CI/CD with GitHub Actions and Vercel for zero-downtime releases',
      'Reduced production bug reports by 40% with staging preview workflows',
    ],
    techStack: ['Next.js', 'Firebase', 'Vercel', 'GitHub Actions', 'TailwindCSS'],
    metrics: ['1,000+ users', '5+ countries', 'Fraud detection'],
    projectTitle: 'Charity Connect',
  },
];

export const getCompanyInitials = (company) =>
  company
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

export const formatDuration = (start, end) => `${start} – ${end}`;
