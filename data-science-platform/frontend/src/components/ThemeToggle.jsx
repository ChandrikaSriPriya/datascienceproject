import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="theme-toggle-track"
        animate={{
          backgroundColor: isDarkMode ? '#4f46e5' : '#e2e8f0'
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="theme-toggle-thumb"
          animate={{
            x: isDarkMode ? 24 : 0,
            rotate: isDarkMode ? 180 : 0
          }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 30 
          }}
        >
          <span className="theme-icon">
            {isDarkMode ? '🌙' : '☀️'}
          </span>
        </motion.div>
      </motion.div>
      <span className="theme-label">
        {isDarkMode ? 'Dark' : 'Light'}
      </span>
    </motion.button>
  );
};

export default ThemeToggle;
