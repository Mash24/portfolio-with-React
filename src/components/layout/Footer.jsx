import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Twitter,
  Facebook,
  Instagram,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Let’s Connect</h3>
          <p className="text-sm mb-4">
            I’m open to new projects, freelance gigs, internships, or full-time
            roles. If you think I could be a good fit, let’s talk!
          </p>
          <a
            href="#contact"
            className="inline-block mt-2 bg-gray-400 text-white text-sm font-medium px-4 py-2 rounded hover:bg-lime-700"
          >
            Get in Touch
          </a>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}-section`}
                  className="flex items-center gap-2 hover:text-white"
                >
                  <ChevronRight size={14} />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">What I Offer</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <ChevronRight size={14} /> Responsive Web Design
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight size={14} /> React & Firebase Development
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight size={14} /> Portfolio & Landing Pages
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight size={14} /> Custom Web Applications
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight size={14} /> Job-Matching Platforms
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-1 text-lime-400" />
              Tha Sala, Chiang Mai, Thailand
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-5 h-5 mt-1 text-lime-400" />
              <a href="tel:+66952819402" className="hover:text-white">
                +66 95-281-9402
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-5 h-5 mt-1 text-lime-400" />
              <a
                href="mailto:jackmwakano@gmail.com"
                className="hover:text-white"
              >
                jackmwakano@gmail.com
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-gray-400">
            <a href="#" className="hover:text-white">
              <Twitter />
            </a>
            <a href="#" className="hover:text-white">
              <Facebook />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-400 mt-10">
        <p>
          &copy; {new Date().getFullYear()} Jackson Mwakano | Portfolio Project.
        </p>
        <p className="mt-2">
          Inspired by{" "}
          <a
            href="https://colorlib.com"
            className="underline-none text-sm hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            Colorlib
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;