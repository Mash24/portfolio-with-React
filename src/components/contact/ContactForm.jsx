import React from 'react';
import { Link } from 'react-router-dom';
import { MailIcon } from 'lucide-react';

/**
 * ContactForm Component
 * - Call-to-action section encouraging users to initiate contact
 * - Includes text, a contact button, and an accompanying image
 */
const ContactForm = () => {
  return (
    <section className="bg-lime-200/70 py-2" id='contact-section'>

      {/* Outer Rounded Wrapper */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">

          {/* LEFT TEXT CONTENT */}
          <div className="md:w-2/3 text-center md:text-left">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Got a project or idea? Let's build <br /> something <span className="text-white">awesome</span>.
            </h2>

            {/* Subtext / Description */}
            <p className="text-gray-800 text-sm sm:text-base mb-6 leading-relaxed">
              I help individuals and businesses turn ideas into real, user-focused websites and cloud-powered applications.
              Whether it's a dynamic frontend, Firebase-powered backend, or full CI/CD integration, I'm ready to deliver scalable, production-grade solutions.
            </p>

            {/* Response Time Note */}
            <div className="flex items-center gap-3 justify-center md:justify-start text-gray-700 mb-4">
              <MailIcon className="w-5 h-5 text-lime-700" />
              <p className="text-sm font-medium">Reach out — I usually respond within 24 hours!</p>
            </div>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="inline-block bg-white text-lime-700 border border-white rounded px-6 py-3 font-semibold shadow hover:bg-white/90 transition"
            >
              Contact Me
            </Link>
          </div>

          {/* RIGHT IMAGE SECTION */}
          {/* <!______________________________________________________________________________________> */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <img
              src="/images/bg_13-8.png"
              alt="Jackson"
              className="w-[250px] md:w-[300px] lg:w-[350px] object-contain"
            />
          </div>

        </div>
      </div>

    </section>
  );
};

export default ContactForm;