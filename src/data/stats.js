import { Users, Zap, GitBranch, Rocket } from 'lucide-react';

export const IMPACT_STATS = [
  {
    icon: Users,
    end: 15,
    suffix: 'K+',
    label: 'Users served',
    separator: '',
  },
  {
    icon: Zap,
    end: 60,
    suffix: '%',
    label: 'Faster deployments',
    separator: '',
  },
  {
    icon: GitBranch,
    end: 8,
    suffix: '+',
    label: 'CI/CD pipelines built',
    separator: '',
  },
  {
    icon: Rocket,
    end: 35,
    suffix: '%',
    label: 'Performance gains',
    separator: '',
  },
];
