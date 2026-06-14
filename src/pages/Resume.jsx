import { Link } from 'react-router-dom';
import { ArrowLeft, Printer } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { RESUME } from '../data/resume';

const Resume = () => {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-white text-gray-900 print:bg-white">
      <div className="print:hidden">
        <Navbar />
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-24 print:max-w-none print:py-0 print:px-0 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
          <Link
            to="/#about-section"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            <Printer className="h-4 w-4" />
            Print / Save as PDF
          </button>
        </div>

        <article className="resume-print space-y-8 print:space-y-6">
          <header className="border-b border-gray-200 pb-6 print:pb-4">
            <h1 className="text-3xl font-bold tracking-tight">{RESUME.name}</h1>
            <p className="mt-1 text-lg text-gray-700">{RESUME.title}</p>
            <p className="mt-3 text-sm text-gray-600">{RESUME.location}</p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-blue-700 print:text-blue-800">
              {RESUME.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:underline">
                    {link.label}: {link.value}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-gray-700">{RESUME.summary}</p>
          </header>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-4">
              Experience
            </h2>
            <ul className="space-y-5">
              {RESUME.experience.map((job) => (
                <li key={job.id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-gray-900">{job.title}</h3>
                    <span className="text-sm text-gray-500">{job.period}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    {job.company}
                    {job.location ? ` · ${job.location}` : ''}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">{job.description}</p>
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-gray-700">
                    {job.achievements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="mt-2 text-xs text-gray-500">{job.techStack.join(' · ')}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-4">
              Skills
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {RESUME.skills.map((group) => (
                <li key={group.label}>
                  <span className="font-semibold text-gray-900">{group.label}:</span>{' '}
                  {group.items.join(', ')}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-4">
              Education
            </h2>
            <ul className="space-y-3 text-sm">
              {RESUME.education.map((edu) => (
                <li key={edu.degree}>
                  <p className="font-semibold text-gray-900">{edu.degree}</p>
                  <p className="text-gray-700">{edu.school}</p>
                  <p className="text-gray-500">
                    {edu.period}
                    {edu.detail ? ` · ${edu.detail}` : ''}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-4">
              Certifications
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {RESUME.certifications.map((cert) => (
                <li key={cert.title}>
                  <span className="font-medium text-gray-900">{cert.title}</span>
                  {' — '}
                  {cert.issuer} ({cert.date})
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default Resume;
