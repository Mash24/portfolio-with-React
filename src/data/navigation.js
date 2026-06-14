export const NAV_LINKS = [
  { id: 'home-section', label: 'Home' },
  { id: 'about-section', label: 'About' },
  { id: 'experience-section', label: 'Experience' },
  { id: 'skills-section', label: 'Skills' },
  { id: 'projects-section', label: 'Projects' },
  { id: 'contact-section', label: 'Contact' },
];

export const SECTION_IDS = NAV_LINKS.map((link) => link.id);

/** Works from home and detail routes (e.g. /blog/:slug). */
export const sectionPath = (sectionId) => `/#${sectionId}`;
