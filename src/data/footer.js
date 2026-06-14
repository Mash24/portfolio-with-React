import { NAV_LINKS } from './navigation';
import { SERVICES } from './services';
import { AVAILABILITY, CONTACT_CHANNELS, CONTACT_EMAIL } from './contact';

export const FOOTER_EXTRA_LINKS = [
  { id: 'impact-section', label: 'Impact' },
  { id: 'services-section', label: 'Services' },
  { id: 'blog-section', label: 'Blog' },
];

export const FOOTER_NAV_LINKS = [...NAV_LINKS, ...FOOTER_EXTRA_LINKS];

export const FOOTER_SERVICES = SERVICES.map((service) => ({
  label: service.title,
  sectionId: 'services-section',
}));

export const SOCIAL_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/Mash24',
    ariaLabel: 'Jackson Macharia on GitHub',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jackson-macharia/',
    ariaLabel: 'Jackson Macharia on LinkedIn',
  },
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${CONTACT_EMAIL}`,
    ariaLabel: 'Email Jackson Macharia',
  },
];

export const FOOTER_CONTACT = {
  location: AVAILABILITY.location,
  phone: CONTACT_CHANNELS.find((c) => c.id === 'phone'),
  email: CONTACT_CHANNELS.find((c) => c.id === 'email'),
};
