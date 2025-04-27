import React, { useEffect, useState } from 'react';

/**
 * Navbar component for the portfolio site.
 * Features:
 * - Sticky navigation bar that changes style on scroll
 * - Responsive design with desktop menu and mobile dropdown menu
 */
const Navbar = () => {
  // State to manage mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);
  // State to manage navbar background change on scroll
  const [scrolled, setScrolled] = useState(false);

  // Detects scroll event to toggle navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo Section */}
          <div className="text-xl sm:text-2xl font-extrabold uppercase leading-tight tracking-wider text-gray-900">
            JACKSON <br className="hidden sm:block" />
            <span className="text-green-500">
              MWAKANO<span className="text-red-500">.</span>
            </span>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm uppercase font-semibold text-gray-700 tracking-wide">
            <a href="#home-section" className="hover:text-green-600 transition">Home</a>
            <a href="#about-section" className="hover:text-green-600 transition">About</a>
            <a href="#skills-section" className="hover:text-green-600 transition">Skills</a>
            <a href="#services-section" className="hover:text-green-600 transition">Services</a>
            <a href="#projects-section" className="hover:text-green-600 transition">Projects</a>
            <a href="#blog-section" className="hover:text-green-600 transition">Blog</a>
            <a href="#contact-section" className="hover:text-green-600 transition">Contact</a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-green-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  // X icon when menu is open
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Hamburger icon when menu is closed
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col px-4 pb-4 pt-2 space-y-2 text-sm font-semibold uppercase tracking-wide text-gray-800 bg-white/90 backdrop-blur-md shadow">
            <a href="#home-section" onClick={() => setIsOpen(false)} className="hover:text-green-600">Home</a>
            <a href="#about-section" onClick={() => setIsOpen(false)} className="hover:text-green-600">About</a>
            <a href="#skills-section" onClick={() => setIsOpen(false)} className="hover:text-green-600">Skills</a>
            <a href="#services-section" onClick={() => setIsOpen(false)} className="hover:text-green-600">Services</a>
            <a href="#projects-section" onClick={() => setIsOpen(false)} className="hover:text-green-600">Projects</a>
            <a href="#blog-section" onClick={() => setIsOpen(false)} className="hover:text-green-600">Blog</a>
            <a href="#contact-section" onClick={() => setIsOpen(false)} className="hover:text-green-600">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;