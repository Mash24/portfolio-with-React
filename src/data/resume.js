import { ABOUT_BIO } from './about';
import { CONTACT_EMAIL } from './contact';
import { EXPERIENCES } from './experience';
import { SKILL_CATEGORIES, EDUCATION, CERTIFICATIONS } from './skills';

export const RESUME = {
  name: 'Jackson Macharia',
  title: 'Full-Stack Engineer',
  location: 'Chiang Mai, Thailand · Open to remote',
  summary: ABOUT_BIO.join(' '),
  links: [
    { label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    { label: 'Portfolio', value: 'iamjackson.vercel.app', href: 'https://iamjackson.vercel.app' },
    { label: 'GitHub', value: 'github.com/Mash24', href: 'https://github.com/Mash24' },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/jackson-macharia',
      href: 'https://www.linkedin.com/in/jackson-macharia/',
    },
    { label: 'Phone', value: '+66 95-281-9402', href: 'tel:+66952819402' },
  ],
  experience: EXPERIENCES.map((job) => ({
    id: job.id,
    title: job.title,
    company: job.company,
    location: job.location,
    period: `${job.start} – ${job.end}`,
    description: job.description,
    achievements: job.achievements,
    techStack: job.techStack,
  })),
  skills: SKILL_CATEGORIES.map((cat) => ({
    label: cat.title,
    items: cat.skills.map((s) => s.name),
  })),
  education: EDUCATION,
  certifications: CERTIFICATIONS,
};
