import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import { useTheme } from '../../contexts/ThemeContext';
import { useActiveSection } from '../../hooks/useActiveSection';
import { NAV_LINKS, SECTION_IDS, sectionPath } from '../../data/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const activeSection = useActiveSection(SECTION_IDS);

  const isOverHero = !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  const navSurface = scrolled
    ? theme === 'dark'
      ? 'bg-gray-950/80 border-b border-white/10 shadow-lg shadow-black/20'
      : 'bg-white/85 border-b border-gray-200/80 shadow-sm'
    : 'bg-transparent border-b border-transparent';

  const logoText = isOverHero && !isOpen
    ? 'text-white'
    : theme === 'dark'
      ? 'text-white'
      : 'text-gray-900';

  const linkBase = isOverHero && !isOpen
    ? 'text-white/80 hover:text-white'
    : theme === 'dark'
      ? 'text-gray-300 hover:text-white'
      : 'text-gray-600 hover:text-gray-900';

  const linkActive = isOverHero && !isOpen
    ? 'text-white'
    : 'text-blue-600 dark:text-blue-400';

  const menuButtonClass = isOverHero && !isOpen
    ? 'text-white hover:bg-white/10'
    : theme === 'dark'
      ? 'text-white hover:bg-white/10'
      : 'text-gray-800 hover:bg-gray-100';

  return (
    <>
      <a
        href={sectionPath('main-content')}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 backdrop-blur-xl ${navSurface}`}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
            {/* Logo */}
            <Link
              to={sectionPath('home-section')}
              onClick={closeMenu}
              className={`group flex items-center gap-2.5 font-bold tracking-tight transition-colors ${logoText}`}
              aria-label="Jackson Macharia — back to top"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-extrabold text-white shadow-lg shadow-blue-500/25 transition-transform group-hover:scale-105">
                JM
              </span>
              <span className="hidden sm:flex flex-col leading-none">
                <span className="text-base lg:text-lg">Jackson Macharia</span>
                <span className={`text-[10px] font-medium uppercase tracking-[0.2em] mt-1 ${
                  isOverHero && !isOpen ? 'text-blue-200' : 'text-blue-600 dark:text-blue-400'
                }`}>
                  Full-Stack Engineer
                </span>
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map(({ id, label }) => {
                const isActive = activeSection === id;
                return (
                  <Link
                    key={id}
                    to={sectionPath(id)}
                    className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      isActive ? linkActive : linkBase
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle onDarkBackground={isOverHero && !isOpen} />
              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className={`lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${menuButtonClass}`}
                aria-expanded={isOpen}
                aria-controls="mobile-nav"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              aria-label="Close menu"
              onClick={closeMenu}
            />

            <motion.div
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm shadow-2xl lg:hidden ${
                theme === 'dark' ? 'bg-gray-950' : 'bg-white'
              }`}
            >
              <div className="flex flex-col h-full pt-20 px-6 pb-8">
                <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  Navigate
                </p>

                <div className="flex flex-col gap-1">
                  {NAV_LINKS.map(({ id, label }, index) => {
                    const isActive = activeSection === id;
                    return (
                      <motion.div
                        key={id}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={sectionPath(id)}
                          onClick={closeMenu}
                          className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                            isActive
                              ? 'bg-blue-600/10 text-blue-600 dark:text-blue-400'
                              : theme === 'dark'
                                ? 'text-gray-200 hover:bg-white/5'
                                : 'text-gray-800 hover:bg-gray-50'
                          }`}
                          aria-current={isActive ? 'page' : undefined}
                        >
                          {label}
                          {isActive && (
                            <span className="h-2 w-2 rounded-full bg-blue-500" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <div className={`mt-auto pt-8 border-t ${
                  theme === 'dark' ? 'border-white/10' : 'border-gray-200'
                }`}>
                  <Link
                    to={sectionPath('contact-section')}
                    onClick={closeMenu}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:from-blue-700 hover:to-purple-700 transition-all"
                  >
                    Let&apos;s Work Together
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
