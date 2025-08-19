import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import roleSkillsData from '../utils/roleSkillsData';
import './SkillPage.css';

const SkillPage = () => {
  const { roleSlug } = useParams();
  const history = useHistory();
  const [roleData, setRoleData] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const data = roleSkillsData[roleSlug];
    if (data) {
      setRoleData(data);
      setActiveCategory(Object.keys(data.skills)[0]);
    }
  }, [roleSlug]);

  if (!roleData) {
    return (
      <div className="skill-page-loading">
        <div className="loading-spinner"></div>
        <p>Loading skills...</p>
      </div>
    );
  }

  const getImportanceColor = (importance) => {
    switch (importance) {
      case 'Essential':
        return '#ef4444';
      case 'Important':
        return '#f59e0b';
      case 'Useful':
        return '#10b981';
      default:
        return '#6b7280';
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Advanced':
        return '#8b5cf6';
      case 'Intermediate':
        return '#06b6d4';
      case 'Beginner':
        return '#10b981';
      default:
        return '#6b7280';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const handleStartLearningPath = () => {
    history.push(`/roadmap/${roleSlug}`);
  };

  return (
    <div 
      className="skill-page"
      style={{
        '--role-color': roleData.color,
        '--role-gradient': roleData.gradient
      }}
    >
      {/* Compact Header Section */}
      <motion.div 
        className="skill-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="skill-header-content">
          <div className="role-info">
            <div className="role-icon-large">{roleData.icon}</div>
            <div className="role-details">
              <h1 className="role-title">{roleData.title}</h1>
              <p className="role-description">{roleData.description}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Skills Content */}
      <div className="skills-content">
        <div className="skills-container">
          {/* Categories Sidebar */}
          <motion.div 
            className="categories-sidebar"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="sidebar-title">Skill Categories</h3>
            <div className="category-list">
              {Object.keys(roleData.skills).map((category, index) => (
                <button
                  key={category}
                  className={`category-item ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                  style={{
                    borderLeftColor: activeCategory === category ? roleData.color : 'transparent'
                  }}
                >
                  <span className="category-name">{category}</span>
                  <span className="skill-count">{roleData.skills[category].length}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Skills Display */}
          <motion.div 
            className="skills-display"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {activeCategory && (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="category-content"
              >
                <div className="category-header">
                  <h2 className="category-title">{activeCategory}</h2>
                  <p className="category-description">
                    Master these skills to excel as a {roleData.title}
                  </p>
                </div>

                <motion.div 
                  className="skills-grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {roleData.skills[activeCategory].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="skill-card"
                      variants={itemVariants}
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="skill-header">
                        <div className="skill-icon">{skill.icon}</div>
                        <div className="skill-info">
                          <h3 className="skill-name">{skill.name}</h3>
                          <div className="skill-badges">
                            <span 
                              className="level-badge"
                              style={{ backgroundColor: getLevelColor(skill.level) }}
                            >
                              {skill.level}
                            </span>
                            <span 
                              className="importance-badge"
                              style={{ backgroundColor: getImportanceColor(skill.importance) }}
                            >
                              {skill.importance}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="skill-description">{skill.description}</p>
                      
                      <div className="skill-progress">
                        <div className="progress-bar">
                          <div 
                            className="progress-fill"
                            style={{ 
                              width: skill.level === 'Advanced' ? '90%' : 
                                     skill.level === 'Intermediate' ? '60%' : '30%',
                              background: roleData.gradient
                            }}
                          ></div>
                        </div>
                        <span className="progress-text">
                          {skill.level === 'Advanced' ? 'Expert Level' : 
                           skill.level === 'Intermediate' ? 'Proficient' : 'Learning'}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Bottom Section with Back Button and Summary */}
        <motion.div 
          className="bottom-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="skills-summary">
            <div className="summary-content">
              <h3>Skills Summary</h3>
              <div className="summary-stats">
                <div className="stat-item">
                  <span className="stat-number">
                    {Object.values(roleData.skills).flat().length}
                  </span>
                  <span className="stat-label">Total Skills</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">
                    {Object.values(roleData.skills).flat().filter(s => s.importance === 'Essential').length}
                  </span>
                  <span className="stat-label">Essential Skills</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">
                    {Object.values(roleData.skills).flat().filter(s => s.level === 'Advanced').length}
                  </span>
                  <span className="stat-label">Advanced Level</span>
                </div>
              </div>
              
              <div className="action-buttons">
                <button 
                  className="primary-action-btn"
                  style={{ background: roleData.gradient }}
                  onClick={handleStartLearningPath}
                >
                  Start Learning Path
                </button>
                <button className="secondary-action-btn">
                  Download Skills List
                </button>
              </div>
            </div>
          </div>

          <button 
            className="back-button bottom-back-button"
            onClick={() => history.goBack()}
            aria-label="Go back"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Roles
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillPage;