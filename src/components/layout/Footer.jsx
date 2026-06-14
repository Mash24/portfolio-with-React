import { Link } from 'react-router-dom';
import { ArrowUp, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import {
  FOOTER_NAV_LINKS,
  FOOTER_SERVICES,
  FOOTER_CONTACT,
  SOCIAL_LINKS,
} from '../../data/footer';
import { sectionPath } from '../../data/navigation';

const SOCIAL_ICONS = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-gray-950 text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link
              to={sectionPath('home-section')}
              className="inline-flex items-center gap-2.5 group"
              aria-label="Jackson Macharia — back to home"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white transition group-hover:bg-blue-500">
                JM
              </span>
              <span className="text-lg font-bold text-white">Jackson Macharia</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Full-stack engineer building scalable SaaS, cloud infrastructure, and CI/CD
              pipelines. Open to full-time, contract, and project work.
            </p>
            <Link
              to={sectionPath('contact-section')}
              className="mt-5 inline-flex items-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Get in touch
            </Link>
          </div>

          {/* Navigation */}
          <nav className="lg:col-span-2" aria-label="Footer navigation">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Navigate
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_NAV_LINKS.map(({ id, label }) => (
                <li key={id}>
                  <Link
                    to={sectionPath(id)}
                    className="transition hover:text-white hover:underline underline-offset-4"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_SERVICES.map((service) => (
                <li key={service.label}>
                  <Link
                    to={sectionPath(service.sectionId)}
                    className="transition hover:text-white hover:underline underline-offset-4"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + social */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                <span>{FOOTER_CONTACT.location}</span>
              </li>
              {FOOTER_CONTACT.phone && (
                <li>
                  <a
                    href={FOOTER_CONTACT.phone.href}
                    className="flex items-center gap-2.5 transition hover:text-white"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                    {FOOTER_CONTACT.phone.value}
                  </a>
                </li>
              )}
              {FOOTER_CONTACT.email && (
                <li>
                  <a
                    href={FOOTER_CONTACT.email.href}
                    className="flex items-center gap-2.5 transition hover:text-white break-all"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                    {FOOTER_CONTACT.email.value}
                  </a>
                </li>
              )}
            </ul>

            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.id];
                const isExternal = social.href.startsWith('http');
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    aria-label={social.ariaLabel}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400"
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm">
            &copy; {year} Jackson Macharia. All rights reserved.
          </p>
          <Link
            to={sectionPath('home-section')}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition hover:text-white"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
