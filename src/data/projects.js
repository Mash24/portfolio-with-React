export const PROJECT_CATEGORIES = ['All', 'Full-Stack', 'Frontend', 'DevOps', 'Tools'];

export const STATUS_STYLES = {
  Live: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
  'Open Source': 'bg-violet-500/10 text-violet-700 dark:text-violet-400',
  Private: 'bg-amber-500/10 text-amber-700 dark:text-amber-400',
};

export const PROJECTS = [
  {
    slug: 'nelimac-learning',
    title: 'Nelimac Learning',
    excerpt:
      'Cloud-based LMS with multi-tenant architecture, modular UI library, and automated CI/CD.',
    description:
      'Cloud-based Learning Management Platform supporting 1,000+ active users with modular architecture and reusable UI library. Designed secure multi-tenant backend with CI/CD automation.',
    image: '/images/work-1.jpg',
    liveLink: 'https://nelimac-learning.vercel.app',
    githubLink: 'https://github.com/Mash24/nelimac-learning',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Prisma', 'TailwindCSS', 'Docker', 'GitHub Actions'],
    metrics: ['1,000+ users', '60% faster deploys', 'Multi-tenant'],
    category: 'Full-Stack',
    status: 'Live',
    featured: true,
    impact: 'Educational platform serving students and instructors globally.',
    problem:
      'The client needed a scalable LMS that could support multiple schools on one platform without compromising data isolation or deployment speed.',
    solution:
      'Built a Next.js + Supabase multi-tenant system with Prisma, role-based dashboards, and GitHub Actions pipelines that cut deployment time by 60%.',
    highlights: [
      'Modular component library improved developer velocity by 40%',
      'JWT authentication with role-based access for admins, instructors, and students',
      'Dockerized deployments with staging and production environments',
    ],
    role: 'Lead Full-Stack Engineer',
  },
  {
    slug: 'trainswise-ai',
    title: 'Trainswise-AI',
    excerpt:
      'AI task-training platform with multi-role dashboards and Turborepo monorepo architecture.',
    description:
      'AI task training platform with multi-role dashboards and scalable monorepo architecture. Built modular backend with NestJS and Prisma for secure role-based access.',
    image: '/images/work-2.jpg',
    liveLink: 'https://trainswise-ai.vercel.app',
    githubLink: 'https://github.com/Mash24/trainswise-ai',
    techStack: ['React', 'Next.js 14', 'NestJS', 'Prisma', 'Turborepo', 'TypeScript'],
    metrics: ['70% faster deploys', 'Multi-tenant', 'Real-time sync'],
    category: 'Full-Stack',
    status: 'Live',
    featured: true,
    impact: 'AI-powered task management for distributed teams.',
    problem:
      'Teams needed a platform to orchestrate AI-assisted training workflows with real-time sync and strict role separation.',
    solution:
      'Delivered a Turborepo monorepo with NestJS backend, Prisma on PostgreSQL, and preview environments for every pull request.',
    highlights: [
      'Monorepo with shared packages for UI, config, and API clients',
      'Real-time task sync with schema validation via Prisma',
      'CI/CD with automated lint, test, and deploy stages',
    ],
    role: 'Full-Stack Developer',
  },
  {
    slug: 'job-connect',
    title: 'Job Connect Platform',
    excerpt:
      'Real-time job-matching platform serving 15,000+ users with role-based dashboards and chat.',
    description:
      'Real-time job-matching platform with role-based dashboards and chat interfaces serving 15,000+ users. Integrated AWS S3 and GitHub Actions for media and deployments.',
    image: '/images/work-3.jpg',
    liveLink: 'https://jobconnect-platform.vercel.app',
    githubLink: 'https://github.com/Mash24/job-connect',
    techStack: ['React', 'Firebase', 'AWS S3', 'GitHub Actions', 'TailwindCSS'],
    metrics: ['15,000+ users', '35% faster load', 'Zero downtime'],
    category: 'Full-Stack',
    status: 'Live',
    featured: true,
    impact: 'Connecting job seekers with opportunities across multiple industries.',
    problem:
      'Job seekers and employers needed a fast, reliable matching experience with real-time messaging at scale.',
    solution:
      'Built role-based dashboards on React + Firebase with S3 media storage, code-splitting, and zero-downtime GitHub Actions deploys.',
    highlights: [
      'Reduced page load times by 35% through lazy loading and caching',
      'Real-time chat and notifications via Firebase',
      'Automated multi-environment deployment pipeline',
    ],
    role: 'Cloud & Frontend Developer',
  },
  {
    slug: 'charity-connect',
    title: 'Charity Connect',
    excerpt:
      'Donation platform with fraud detection scaling to 1,000+ users across 5+ countries.',
    description:
      'Donation platform with admin dashboards and fraud detection, scaling to 1,000+ users across 5+ countries. Built with Next.js and Firebase Functions.',
    image: '/images/work-4.jpg',
    liveLink: 'https://charity-connect.vercel.app',
    githubLink: 'https://github.com/Mash24/charity-connect',
    techStack: ['Next.js', 'Firebase', 'TailwindCSS', 'Vercel', 'GitHub Actions'],
    metrics: ['1,000+ users', '5+ countries', 'Fraud detection'],
    category: 'Frontend',
    status: 'Live',
    featured: false,
    impact: 'Enabling secure charitable giving across borders.',
    problem:
      'Charities required a trustworthy donation flow with admin analytics and fraud safeguards.',
    solution:
      'Shipped a responsive Next.js app with Firebase Functions backend and CI/CD through Vercel + GitHub Actions.',
    highlights: [
      'Admin dashboards with donor analytics and reporting',
      'Fraud detection modules for suspicious transactions',
      'Staging preview workflows reduced production bugs by 40%',
    ],
    role: 'Frontend Developer (Volunteer)',
  },
  {
    slug: 'cicd-automation-demo',
    title: 'CI/CD Automation Demo',
    excerpt:
      'Reusable GitHub Actions workflows with matrix builds and zero-downtime deployments.',
    description:
      'Automated deployment pipeline with matrix builds, secret management, and zero-downtime deployments for React applications.',
    image: '/images/work-5.jpg',
    liveLink: null,
    githubLink: 'https://github.com/Mash24/cicd-automation-demo',
    techStack: ['GitHub Actions', 'Docker', 'Firebase CLI', 'Matrix Builds'],
    metrics: ['90% fewer errors', 'Zero downtime', 'Automated'],
    category: 'DevOps',
    status: 'Open Source',
    featured: false,
    impact: 'Template for teams implementing robust CI/CD pipelines.',
    problem:
      'Many teams lack a production-ready CI/CD template with testing, staging, and safe rollbacks.',
    solution:
      'Published open-source workflows demonstrating matrix builds, secret management, and automated deploy gates.',
    highlights: [
      'Reusable workflow templates for React apps',
      'Environment-specific deployments with approval gates',
      'Documented setup for fast team adoption',
    ],
    role: 'Creator & Maintainer',
  },
  {
    slug: 'ai-dev-workflow',
    title: 'AI Dev Workflow',
    excerpt:
      'AI-assisted development patterns for documentation, validation, and faster shipping.',
    description:
      'Integrated AI tools for automated documentation, code validation, and accelerated development workflows using Copilot and ChatGPT patterns.',
    image: '/images/work-6.jpg',
    liveLink: null,
    githubLink: 'https://github.com/Mash24/ai-dev-workflow',
    techStack: ['GitHub Copilot', 'ChatGPT', 'VS Code', 'Automation', 'Documentation'],
    metrics: ['40% faster dev', 'AI-assisted', 'Automated docs'],
    category: 'Tools',
    status: 'Open Source',
    featured: false,
    impact: 'Improving developer productivity through responsible AI use.',
    problem:
      'Developers adopt AI tools ad hoc without consistent patterns for quality and documentation.',
    solution:
      'Curated prompts, checklists, and automation scripts for AI-assisted development workflows.',
    highlights: [
      'Documentation generation templates',
      'Code review checklists for AI-generated code',
      'VS Code workflow integrations',
    ],
    role: 'Creator & Maintainer',
  },
];

export const getProjectBySlug = (slug) => PROJECTS.find((p) => p.slug === slug);

export const getFeaturedProjects = () => PROJECTS.filter((p) => p.featured);

export const getProjectInitials = (title) =>
  title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
