export const CONTACT_EMAIL = 'jackmwakano@gmail.com';

export const CONTACT_CHANNELS = [
  {
    id: 'email',
    label: 'Email',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    description: 'Best for detailed inquiries',
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+66 95-281-9402',
    href: 'tel:+66952819402',
    description: 'WhatsApp or call',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/jackson-macharia',
    href: 'https://www.linkedin.com/in/jackson-macharia/',
    description: 'Connect professionally',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/Mash24',
    href: 'https://github.com/Mash24',
    description: 'View code & repos',
  },
];

export const PROJECT_TYPES = [
  'SaaS Platform Development',
  'Full-Stack Web Application',
  'Cloud Architecture & DevOps',
  'CI/CD Pipeline Setup',
  'Technical Consulting',
  'Code Review & Optimization',
  'Team Training & Mentoring',
  'Other',
];

export const BUDGET_RANGES = [
  '$2,500 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000+',
  "Let's discuss",
];

export const TIMELINE_OPTIONS = [
  'ASAP (Rush project)',
  '1-2 weeks',
  '1 month',
  '2-3 months',
  '3+ months',
  'Flexible',
];

export const AVAILABILITY = {
  status: 'Open to opportunities',
  responseTime: 'Within 24 hours',
  location: 'Chiang Mai, Thailand',
  modes: ['Remote', 'Contract', 'Full-time'],
};

export const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_FORM_ID}`
  : null;

const buildMailtoBody = (data) => {
  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.company ? `Company: ${data.company}` : null,
    data.projectType ? `Project type: ${data.projectType}` : null,
    data.budget ? `Budget: ${data.budget}` : null,
    data.timeline ? `Timeline: ${data.timeline}` : null,
    '',
    data.message,
  ].filter(Boolean);

  return lines.join('\n');
};

/** Submit via Formspree when configured, otherwise open mailto fallback. */
export async function submitContactForm(data) {
  if (FORMSPREE_ENDPOINT) {
    const payload = {
      name: data.name,
      email: data.email,
      company: data.company || '',
      projectType: data.projectType || '',
      budget: data.budget || '',
      timeline: data.timeline || '',
      message: data.message,
      _subject: `Portfolio inquiry from ${data.name}`,
    };

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.error || 'Unable to send message. Please try email instead.');
    }

    return { method: 'formspree' };
  }

  const subject = encodeURIComponent(`Portfolio inquiry from ${data.name}`);
  const body = encodeURIComponent(buildMailtoBody(data));
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

  return { method: 'mailto' };
};

export const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  timeline: '',
  message: '',
};
