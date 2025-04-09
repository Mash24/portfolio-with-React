import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo Section */}
          <div className="text-xl sm:text-2xl font-extrabold uppercase leading-tight tracking-wider text-gray-900">
            JACKSON <br className="hidden sm:block" />
            <span className="text-green-500">MWAKANO<span className="text-red-500">.</span></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm uppercase font-semibold text-gray-700 tracking-wide">
            <Link to="/" className="hover:text-green-600 transition duration-200">Home</Link>
            <Link to="/about" className="hover:text-green-600 transition duration-200">About</Link>
            <Link to="/skills" className="hover:text-green-600 transition duration-200">Skills</Link>
            <Link to="/services" className="hover:text-green-600 transition duration-200">Services</Link>
            <Link to="/projects" className="hover:text-green-600 transition duration-200">Projects</Link>
            <Link to="/blog" className="hover:text-green-600 transition duration-200">Blog</Link>
            <Link to="/contact" className="hover:text-green-600 transition duration-200">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-green-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col px-4 pb-4 pt-2 space-y-2 text-sm font-semibold uppercase tracking-wide text-gray-800">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-green-600">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-green-600">About</Link>
            <Link to="/skills" onClick={() => setIsOpen(false)} className="hover:text-green-600">Skills</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-green-600">Services</Link>
            <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-green-600">Projects</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="hover:text-green-600">Blog</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-green-600">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;