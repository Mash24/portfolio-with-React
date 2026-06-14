export const IMPACT_STORIES = [
  {
    project: 'Nelimac Learning',
    slug: 'nelimac-learning',
    metric: '60%',
    metricLabel: 'faster deployments',
    summary:
      'Multi-tenant LMS with modular UI library, JWT auth, and Dockerized CI/CD serving 1,000+ active users.',
    outcomes: ['Multi-tenant architecture', '40% dev efficiency gain', 'Production CI/CD pipeline'],
  },
  {
    project: 'Trainswise-AI',
    slug: 'trainswise-ai',
    metric: '70%',
    metricLabel: 'faster deploys',
    summary:
      'Turborepo monorepo with NestJS + Prisma backend, real-time sync, and preview environments per PR.',
    outcomes: ['Monorepo architecture', 'Real-time task sync', 'Automated test & deploy gates'],
  },
  {
    project: 'Job Connect',
    slug: 'job-connect',
    metric: '15K+',
    metricLabel: 'users served',
    summary:
      'Real-time job-matching platform with role-based dashboards, chat, and zero-downtime releases.',
    outcomes: ['35% faster load times', 'AWS S3 media pipeline', 'Zero-downtime deploys'],
  },
  {
    project: 'Charity Connect',
    slug: 'charity-connect',
    metric: '5+',
    metricLabel: 'countries reached',
    summary:
      'Donation platform with fraud detection, admin analytics, and serverless Firebase backend.',
    outcomes: ['1,000+ users onboarded', 'Fraud detection module', '40% fewer prod bugs'],
  },
  {
    project: 'CI/CD Automation',
    slug: 'cicd-automation-demo',
    metric: '90%',
    metricLabel: 'fewer deploy errors',
    summary:
      'Open-source GitHub Actions templates with matrix builds, secrets management, and rollback gates.',
    outcomes: ['Reusable workflows', 'Zero-downtime pattern', 'Team-ready documentation'],
  },
  {
    project: 'AI Dev Workflow',
    slug: 'ai-dev-workflow',
    metric: '40%',
    metricLabel: 'faster development',
    summary:
      'Curated AI-assisted patterns for documentation, code review, and responsible Copilot usage.',
    outcomes: ['Doc automation templates', 'Review checklists', 'VS Code integrations'],
  },
];

export const IMPACT_TOTALS = [
  { value: '15K+', label: 'Users impacted' },
  { value: '6', label: 'Projects shipped' },
  { value: '8+', label: 'CI/CD pipelines' },
  { value: '5+', label: 'Countries reached' },
];
