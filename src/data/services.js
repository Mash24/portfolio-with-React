export const SERVICES = [
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    description:
      'End-to-end web applications with React, Next.js, TypeScript, and production-grade backends.',
    features: ['Custom SaaS platforms', 'API design', 'Database architecture', 'Auth systems'],
    contactType: 'Full-Stack Web Application',
  },
  {
    id: 'cloud',
    title: 'Cloud Architecture',
    description:
      'Scalable cloud-native systems on AWS, Firebase, and Supabase with performance in mind.',
    features: ['Multi-tenant design', 'Auto-scaling patterns', 'Cloud migration', 'Cost optimization'],
    contactType: 'Cloud Architecture & DevOps',
  },
  {
    id: 'cicd',
    title: 'CI/CD Automation',
    description:
      'Deployment pipelines that ship faster with fewer errors and zero-downtime releases.',
    features: ['GitHub Actions', 'Docker workflows', 'Automated testing', 'Environment strategy'],
    contactType: 'CI/CD Pipeline Setup',
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    description:
      'Architecture reviews, stack decisions, and hands-on guidance for growing engineering teams.',
    features: ['System design', 'Code reviews', 'Performance audits', 'Team mentoring'],
    contactType: 'Technical Consulting',
  },
];

export const ENGAGEMENT_MODELS = [
  {
    id: 'mvp',
    name: 'MVP Sprint',
    price: 'From $2,500',
    duration: '2–3 weeks',
    description: 'Validate your idea fast with a production-ready MVP.',
    features: [
      'React / Next.js application',
      'Responsive UI & core auth',
      'Database + API setup',
      'Deploy + CI/CD pipeline',
      '2 weeks post-launch support',
    ],
    popular: false,
    cta: 'Start MVP Sprint',
    prefill: {
      projectType: 'Full-Stack Web Application',
      budget: '$2,500 - $5,000',
      timeline: '1-2 weeks',
    },
  },
  {
    id: 'saas',
    name: 'SaaS Build',
    price: 'From $5,000',
    duration: '4–6 weeks',
    description: 'Full-stack SaaS platform with multi-tenant architecture and admin tooling.',
    features: [
      'Multi-tenant architecture',
      'RBAC & advanced auth',
      'Real-time features',
      'Admin dashboard & analytics',
      'Cloud infra + performance tuning',
      '1 month post-launch support',
    ],
    popular: true,
    cta: 'Build SaaS Platform',
    prefill: {
      projectType: 'SaaS Platform Development',
      budget: '$5,000 - $10,000',
      timeline: '2-3 months',
    },
  },
  {
    id: 'enterprise',
    name: 'Enterprise / Custom',
    price: 'Custom quote',
    duration: '8–12+ weeks',
    description: 'Complex platforms, integrations, and long-term engineering partnership.',
    features: [
      'Enterprise-grade architecture',
      'Custom integrations & APIs',
      'Security & compliance focus',
      'Team training & documentation',
      'Ongoing support options',
    ],
    popular: false,
    cta: 'Discuss Custom Scope',
    prefill: {
      projectType: 'SaaS Platform Development',
      budget: '$25,000+',
      timeline: '3+ months',
    },
  },
];

export const HIRE_OPTIONS = [
  {
    id: 'fulltime',
    title: 'Full-Time Role',
    description: 'Open to remote full-time engineering positions with SaaS-focused teams.',
    cta: 'Discuss full-time',
    prefill: {
      projectType: 'Other',
      budget: "Let's discuss",
      timeline: 'Flexible',
      messagePrefix: 'Interested in a full-time engineering role.',
    },
  },
  {
    id: 'contract',
    title: 'Contract / Freelance',
    description: 'Short or long-term contract work — architecture, features, or DevOps sprints.',
    cta: 'Discuss contract work',
    prefill: {
      projectType: 'Technical Consulting',
      budget: "Let's discuss",
      timeline: 'Flexible',
      messagePrefix: 'Interested in contract / freelance engagement.',
    },
  },
];

export const WORK_PROCESS = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Goals, constraints, users, and technical requirements.',
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Architecture, stack, milestones, and success metrics.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Agile delivery with demos, PRs, and transparent progress.',
  },
  {
    step: '04',
    title: 'Launch',
    description: 'Deploy, monitor, hand off docs, and support the transition.',
  },
];

/** Build contact URL with optional plan or hire prefill */
export const getContactUrl = ({ plan, hire, serviceType } = {}) => {
  const params = new URLSearchParams();
  if (plan) params.set('plan', plan);
  if (hire) params.set('hire', hire);
  if (serviceType) params.set('type', serviceType);
  const query = params.toString();
  return query ? `/?${query}#contact-section` : '/#contact-section';
};

export const getPrefillFromParams = (searchParams) => {
  const planId = searchParams.get('plan');
  const hireId = searchParams.get('hire');
  const serviceType = searchParams.get('type');

  if (planId) {
    const plan = ENGAGEMENT_MODELS.find((p) => p.id === planId);
    if (plan) {
      return {
        ...plan.prefill,
        message: `Hi Jackson, I'm interested in the ${plan.name} engagement (${plan.price}).`,
      };
    }
  }

  if (hireId) {
    const option = HIRE_OPTIONS.find((h) => h.id === hireId);
    if (option) {
      return {
        projectType: option.prefill.projectType,
        budget: option.prefill.budget,
        timeline: option.prefill.timeline,
        message: option.prefill.messagePrefix,
      };
    }
  }

  if (serviceType) {
    const service = SERVICES.find((s) => s.id === serviceType);
    if (service) {
      return {
        projectType: service.contactType,
        message: `Hi Jackson, I'd like to discuss ${service.title.toLowerCase()}.`,
      };
    }
  }

  return null;
};
