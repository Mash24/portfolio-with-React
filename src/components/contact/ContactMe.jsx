import React from "react";
import { MapPin, Phone, Mail, Globe, Send } from "lucide-react";

/**
 * ContactMe Component
 * - Displays a contact form alongside direct contact information
 * - Users can fill out the form or use provided details to reach out
 */
const ContactMe = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-12" id="contact">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="uppercase text-sm text-lime-700 font-semibold tracking-wider">Contact Me</span>
          <h2 className="text-4xl font-bold mt-2 text-gray-900">Let’s Collaborate or Chat</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            <span className="text-green-600">Got a project?</span> DevOps challenge, or just want to network? 
            I'm open to freelance gigs, mentorship, or full-time roles in Cloud and Engineering.
          </p>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Contact Form */}
          <form className="bg-white rounded-xl shadow-md p-8 space-y-6 lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Full Name Input */}
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
              />

              {/* Email Address Input */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>

            {/* Subject Input */}
            <input
              type="text"
              placeholder="Subject (e.g. Cloud Support Inquiry)"
              className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
            />

            {/* Message Textarea */}
            <textarea
              placeholder="Your message..."
              rows="4"
              className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 resize-none"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-lime-600 text-white py-3 px-6 rounded hover:bg-lime-700 transition-all font-semibold shadow text-sm"
            >
              <Send size={16} /> Send Message
            </button>
          </form>

          {/* Contact Information Panel */}
          <div className="bg-white rounded-xl shadow-md p-8 space-y-8">
            {/* Location */}
            <div className="flex items-start gap-4">
              <MapPin className="text-lime-600 w-6 h-6 mt-1" />
              <div>
                <p className="font-semibold text-gray-700">Location</p>
                <p className="text-gray-600 text-sm">Chiang Mai, Thailand</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <Phone className="text-lime-600 w-6 h-6 mt-1" />
              <div>
                <p className="font-semibold text-gray-700">Phone</p>
                <a href="tel:+66952819402" className="text-lime-700 text-sm hover:underline">
                  +66 95-281-9402
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="text-lime-600 w-6 h-6 mt-1" />
              <div>
                <p className="font-semibold text-gray-700">Email</p>
                <a href="mailto:jackmwakano@gmail.com" className="text-lime-700 text-sm hover:underline">
                  jackmwakano@gmail.com
                </a>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-start gap-4">
              <Globe className="text-lime-600 w-6 h-6 mt-1" />
              <div>
                <p className="font-semibold text-gray-700">Website</p>
                <a
                  href="https://iamjackson.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lime-700 text-sm hover:underline"
                >
                  iamjackson.netlify.app
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactMe;