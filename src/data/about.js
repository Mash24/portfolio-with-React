import { Layers, Workflow, Gauge, ShieldCheck } from 'lucide-react';

export const ABOUT_BIO = [
  `I'm a full-stack engineer based in Thailand with 3+ years building production-grade SaaS systems. I specialize in TypeScript, React, and CI/CD automation — shipping scalable platforms that serve thousands of users without sacrificing developer experience.`,
  `I've led engineering for Nelimac Learning (multi-tenant LMS) and contributed to Trainswise-AI and Job Connect — 15,000+ users globally. I care about system architecture, performance under load, and pipelines that deploy reliably every time.`,
];

export const ABOUT_HIGHLIGHTS = [
  'Multi-tenant SaaS & real-time systems',
  'CI/CD automation with GitHub Actions & Docker',
  'TypeScript, React, Next.js, Supabase, PostgreSQL',
  'Available for full-time & contract roles',
];

export const ABOUT_CONTACT = {
  personal: [
    { label: 'Name', value: 'Jackson Macharia', href: null },
    { label: 'Location', value: 'Chiang Mai, Thailand', href: null },
    {
      label: 'Portfolio',
      value: 'iamjackson.vercel.app',
      href: 'https://iamjackson.vercel.app',
    },
    {
      label: 'GitHub',
      value: 'github.com/Mash24',
      href: 'https://github.com/Mash24',
    },
  ],
  contact: [
    {
      label: 'Email',
      value: 'jackmwakano@gmail.com',
      href: 'mailto:jackmwakano@gmail.com',
    },
    { label: 'Phone', value: '+66 95-281-9402', href: 'tel:+66952819402' },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/jackson-macharia',
      href: 'https://www.linkedin.com/in/jackson-macharia/',
    },
    { label: 'Status', value: 'Open to opportunities', href: null },
  ],
};

export const ABOUT_TECH = [
  'React & Next.js',
  'TypeScript',
  'PostgreSQL & Prisma',
  'Supabase & AWS',
  'CI/CD & Docker',
  'TailwindCSS',
];

export const ABOUT_STRENGTHS = [
  {
    icon: Layers,
    title: 'System Architecture',
    desc: 'Design scalable, maintainable multi-tenant systems.',
  },
  {
    icon: Workflow,
    title: 'CI/CD Automation',
    desc: 'Cut deployment time by 60%+ with reliable pipelines.',
  },
  {
    icon: Gauge,
    title: 'Performance',
    desc: 'Deliver 35% faster load times through optimization.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Scale',
    desc: 'JWT auth, RBAC, and SaaS-grade data isolation.',
  },
];
