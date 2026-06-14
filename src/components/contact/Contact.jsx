import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  Loader2,
  Mail,
  MapPin,
  Send,
  AlertCircle,
} from 'lucide-react';
import { getPrefillFromParams } from '../../data/services';
import {
  AVAILABILITY,
  BUDGET_RANGES,
  CONTACT_CHANNELS,
  FORMSPREE_ENDPOINT,
  INITIAL_FORM_STATE,
  PROJECT_TYPES,
  TIMELINE_OPTIONS,
  submitContactForm,
} from '../../data/contact';

const inputClass =
  'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500';

const Contact = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const prefill = getPrefillFromParams(searchParams);
    if (!prefill) return;

    setFormData((prev) => ({
      ...prev,
      projectType: prefill.projectType || prev.projectType,
      budget: prefill.budget || prev.budget,
      timeline: prefill.timeline || prev.timeline,
      message: prefill.message || prev.message,
    }));

    if (searchParams.has('plan') || searchParams.has('hire') || searchParams.has('type')) {
      setSearchParams({}, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const result = await submitContactForm(formData);
      setStatus('success');
      if (result.method === 'formspree') {
        setFormData(INITIAL_FORM_STATE);
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please email directly.');
    }
  };

  return (
    <section
      id="contact-section"
      className="py-20 lg:py-24 bg-gray-50 dark:bg-gray-900/40"
      aria-label="Contact"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-10 lg:mb-12"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            <Mail className="h-4 w-4" />
            Contact
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Let&apos;s work together
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Full-time roles, contract work, or scoped projects — tell me what you&apos;re building
            and I&apos;ll reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                Send a message
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                {FORMSPREE_ENDPOINT
                  ? 'Delivered securely via Formspree.'
                  : 'Opens your email client — add VITE_FORMSPREE_FORM_ID for in-page delivery.'}
              </p>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center dark:border-emerald-500/30 dark:bg-emerald-500/10"
                  role="status"
                >
                  <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600 dark:text-emerald-400 mb-3" />
                  <p className="font-semibold text-emerald-800 dark:text-emerald-300">
                    Message sent — thank you!
                  </p>
                  <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-400/90">
                    I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-sm font-medium text-emerald-700 underline hover:no-underline dark:text-emerald-400"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="sr-only">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Your name *"
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Email address *"
                        required
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="sr-only">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Company (optional)"
                      autoComplete="organization"
                    />
                  </div>

                  <fieldset className="rounded-xl border border-gray-100 p-4 dark:border-gray-800">
                    <legend className="px-1 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Project details (optional)
                    </legend>
                    <div className="mt-3 space-y-4">
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Project type</option>
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Budget range</option>
                          {BUDGET_RANGES.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Timeline</option>
                          {TIMELINE_OPTIONS.map((timeline) => (
                            <option key={timeline} value={timeline}>
                              {timeline}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </fieldset>

                  <div>
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell me about your project, role, or goals *"
                      required
                    />
                  </div>

                  {status === 'error' && (
                    <div
                      className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-400"
                      role="alert"
                    >
                      <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.aside
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-6 dark:border-emerald-500/30 dark:bg-emerald-500/10">
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="font-semibold text-emerald-800 dark:text-emerald-300">
                  {AVAILABILITY.status}
                </span>
              </div>
              <p className="text-sm text-emerald-900/80 dark:text-emerald-400/90 mb-4">
                Response time:{' '}
                <strong className="font-semibold">{AVAILABILITY.responseTime}</strong>
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs text-emerald-800/90 dark:text-emerald-400/80">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  {AVAILABILITY.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  Flexible hours
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {AVAILABILITY.modes.join(' · ')}
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                Direct contact
              </h3>
              <ul className="space-y-3">
                {CONTACT_CHANNELS.map((channel) => (
                  <li key={channel.id}>
                    <a
                      href={channel.href}
                      target={channel.href.startsWith('http') ? '_blank' : undefined}
                      rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-3 rounded-xl border border-transparent p-3 transition hover:border-gray-200 hover:bg-gray-50 dark:hover:border-gray-700 dark:hover:bg-gray-800/50"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {channel.label}
                        </p>
                        <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                          {channel.value}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-gray-400 transition group-hover:translate-x-0.5 group-hover:text-blue-500" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-gray-900">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Resume</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Print-friendly page — save as PDF from your browser.
              </p>
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:border-blue-300 hover:text-blue-600 dark:border-gray-700 dark:text-white dark:hover:border-blue-500/40 dark:hover:text-blue-400"
              >
                <Download className="h-4 w-4" />
                View resume
              </Link>
            </div>

            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              Explore{' '}
              <a href="#services-section" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
                services
              </a>{' '}
              or{' '}
              <a href="#projects-section" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
                projects
              </a>{' '}
              before reaching out.
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
