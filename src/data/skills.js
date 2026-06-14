export const PROFICIENCY = {
  expert: {
    label: 'Expert',
    className:
      'bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400',
  },
  proficient: {
    label: 'Proficient',
    className: 'bg-blue-500/10 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400',
  },
  familiar: {
    label: 'Familiar',
    className: 'bg-gray-500/10 text-gray-600 dark:bg-gray-500/15 dark:text-gray-400',
  },
};

export const SKILL_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'devops', label: 'Cloud & DevOps' },
  { id: 'languages', label: 'Languages' },
  { id: 'tools', label: 'Tools & Practices' },
];

export const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Interfaces, design systems, and client-side performance.',
    skills: [
      { name: 'React', level: 'expert' },
      { name: 'Next.js', level: 'expert' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'TailwindCSS', level: 'proficient' },
      { name: 'JavaScript (ES6+)', level: 'expert' },
      { name: 'HTML & CSS', level: 'proficient' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'APIs, databases, and server-side architecture.',
    skills: [
      { name: 'Node.js', level: 'proficient' },
      { name: 'NestJS', level: 'proficient' },
      { name: 'PostgreSQL', level: 'expert' },
      { name: 'Prisma ORM', level: 'expert' },
      { name: 'Supabase', level: 'proficient' },
      { name: 'REST APIs', level: 'expert' },
    ],
  },
  {
    id: 'devops',
    title: 'Cloud & DevOps',
    description: 'Infrastructure, deployment, and reliability.',
    skills: [
      { name: 'AWS (EC2, S3, IAM)', level: 'proficient' },
      { name: 'Docker', level: 'proficient' },
      { name: 'GitHub Actions', level: 'expert' },
      { name: 'Vercel', level: 'expert' },
      { name: 'Firebase', level: 'proficient' },
      { name: 'CI/CD Pipelines', level: 'expert' },
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    description: 'Core languages for full-stack development.',
    skills: [
      { name: 'TypeScript', level: 'expert' },
      { name: 'JavaScript', level: 'expert' },
      { name: 'SQL', level: 'proficient' },
      { name: 'Python', level: 'familiar' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Practices',
    description: 'Workflow, quality, and team collaboration.',
    skills: [
      { name: 'GitHub Copilot', level: 'proficient' },
      { name: 'VS Code', level: 'expert' },
      { name: 'Postman', level: 'proficient' },
      { name: 'Linux CLI', level: 'proficient' },
      { name: 'Agile / Scrum', level: 'proficient' },
      { name: 'Code Review', level: 'expert' },
      { name: 'Performance Optimization', level: 'proficient' },
      { name: 'Security Best Practices', level: 'proficient' },
    ],
  },
];

export const EDUCATION = [
  {
    degree: 'BSc. Computer Science',
    school: 'University of the People, USA',
    period: 'Expected 2026',
    detail: 'GPA: 3.81 / 4.0',
    accent: 'blue',
  },
  {
    degree: 'BSc. Statistics',
    school: 'Meru University of Science & Technology, Kenya',
    period: '2018 – 2022',
    detail: 'GPA: 3.11 / 4.0',
    accent: 'violet',
  },
];

export const CERTIFICATIONS = [
  {
    title: 'Meta Full-Stack Web Development',
    issuer: 'Coursera',
    date: '2025',
    status: 'completed',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'In progress',
    status: 'in-progress',
  },
  {
    title: 'CI/CD with GitHub Actions',
    issuer: 'Professional development',
    date: '2025',
    status: 'completed',
  },
];
