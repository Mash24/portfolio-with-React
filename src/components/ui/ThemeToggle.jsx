import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = ({ onDarkBackground = false }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative h-10 w-10 rounded-xl flex items-center justify-center transition-colors duration-300 backdrop-blur-sm border ${
        onDarkBackground
          ? 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
          : 'bg-black/10 dark:bg-white/10 hover:bg-black/15 dark:hover:bg-white/15 border-black/5 dark:border-white/10 text-gray-700 dark:text-gray-200'
      }`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'light' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? (
          <FaSun className="w-4 h-4" />
        ) : (
          <FaMoon className="w-4 h-4" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
