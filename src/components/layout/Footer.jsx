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
        <div className="text-center lg:text-left">
          <h3 className="text-white font-bold text-lg mb-4">Let’s Connect</h3>
          <p className="text-sm mb-4">
            Open to freelance projects and contractual roles, DevOps setups, internships,
            or remote engineering roles. Let’s build something impactful together!
          </p>
          <a
            href="#contact"
            className="inline-block mt-2 bg-lime-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-lime-700 transition"
          >
            Get in Touch
          </a>
        </div>

        {/* Column 2 */}
        <div className="text-center lg:text-left">
          <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
          <ul className="flex flex-wrap justify-center gap-4 text-sm lg:flex-col lg:space-y-2">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}-section`}
                  className="flex items-center gap-2 hover:text-white"
                >
                  {/* Show ChevronRight ONLY on large screens */}
                  <span className="hidden lg:inline-flex">
                    <ChevronRight size={14} />
                  </span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div className="text-center lg:text-left">
          <h3 className="text-white font-bold text-lg mb-4">What I Offer</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Cloud Infrastructure (AWS)",
              "CI/CD Pipeline Automation",
              "DevOps & Containerization",
              "Web Applications",
              "Cloud Security Best Practices",
            ].map((service, idx) => (
              <li key={idx} className="flex items-center gap-2 justify-center lg:justify-start">
                <ChevronRight size={14} /> {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div className="text-center lg:text-left">
          <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
          <ul className="flex flex-wrap justify-center gap-4 text-sm lg:flex-col lg:space-y-3">
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-lime-400" />
              Chiang Mai, Thailand
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-lime-400" />
              <a href="tel:+66952819402" className="hover:text-white">
                +66 95-281-9402
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-lime-400" />
              <a href="mailto:jackmwakano@gmail.com" className="hover:text-white">
                jackmwakano@gmail.com
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-gray-400 justify-center lg:justify-start">
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
        
      </div>
    </footer>
  );
};

export default Footer;
