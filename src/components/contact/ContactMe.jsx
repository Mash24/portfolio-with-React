import React from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const ContactMe = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-12" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="uppercase text-sm text-lime-700 font-semibold tracking-wider">Contact Me</span>
          <h2 className="text-4xl font-bold mt-2 text-gray-900">Have a Project or Opportunity?</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            I’m always open to discussing new ideas, freelance work, collaborations, or full-time roles.
            Let’s connect and bring your vision to life.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <form className="bg-white rounded-lg shadow p-8 space-y-6 lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-lime-400 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-lime-400 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-lime-400 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full border border-lime-400 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-lime-600 text-white py-3 px-6 rounded hover:bg-lime-700 transition-all font-semibold shadow"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-lime-600 w-6 h-6 mt-1" />
              <div>
                <p className="font-semibold text-gray-700">Location:</p>
                <p className="text-gray-600">Tha Sala, Mueang Chiang Mai, Thailand</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-lime-600 w-6 h-6 mt-1" />
              <div>
                <p className="font-semibold text-gray-700">Phone:</p>
                <a href="tel:+66952819402" className="text-lime-700 hover:underline">+66 95-281-9402</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-lime-600 w-6 h-6 mt-1" />
              <div>
                <p className="font-semibold text-gray-700">Email:</p>
                <a href="mailto:jackmwakano@gmail.com" className="text-lime-700 hover:underline">jackmwakano@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Globe className="text-lime-600 w-6 h-6 mt-1" />
              <div>
                <p className="font-semibold text-gray-700">Website:</p>
                <a href="https://iamjackson.netlify.app" target="_blank" rel="noopener noreferrer" className="text-lime-700 hover:underline">
                  https://iamjackson.netlify.app
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