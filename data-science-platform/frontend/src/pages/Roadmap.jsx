import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useHistory } from "react-router-dom";
import roleSkillsData from "../utils/roleSkillsData";
import "./Roadmap.css";

const Roadmap = () => {
  const { roleSlug } = useParams();
  const history = useHistory();
  const [roleData, setRoleData] = useState(null);
  const [skillsProgress, setSkillsProgress] = useState({});
  const [showCelebration, setShowCelebration] = useState(false);
  const [completedSkill, setCompletedSkill] = useState(null);

  // Get all skills in a flat array for the roadmap
  const getAllSkills = (roleData) => {
    if (!roleData) return [];
    const allSkills = [];
    Object.entries(roleData.skills).forEach(([category, skills]) => {
      skills.forEach((skill, index) => {
        allSkills.push({
          ...skill,
          category,
          id: `${category}-${index}`,
          categoryIndex: index
        });
      });
    });
    return allSkills;
  };

  const allSkills = getAllSkills(roleData);
  const completedCount = Object.values(skillsProgress).filter(Boolean).length;
  const airplanePosition = allSkills.length > 0 ? (completedCount / allSkills.length) * 90 + 5 : 5;

  useEffect(() => {
    if (roleSlug && roleSkillsData[roleSlug]) {
      const data = roleSkillsData[roleSlug];
      setRoleData(data);
      
      // Load progress from localStorage
      const savedProgress = localStorage.getItem(`roadmap-progress-${roleSlug}`);
      if (savedProgress) {
        try {
          setSkillsProgress(JSON.parse(savedProgress));
        } catch (e) {
          console.error("Error loading progress:", e);
        }
      }
    }
  }, [roleSlug]);

  useEffect(() => {
    // Save progress to localStorage
    if (roleSlug) {
      localStorage.setItem(`roadmap-progress-${roleSlug}`, JSON.stringify(skillsProgress));
    }
  }, [skillsProgress, roleSlug]);

  const completeSkill = (skillId) => {
    if (skillsProgress[skillId]) return; // Already completed

    const newProgress = { ...skillsProgress, [skillId]: true };
    setSkillsProgress(newProgress);
    setCompletedSkill(skillId);
    setShowCelebration(true);

    // Hide celebration after 3 seconds
    setTimeout(() => {
      setShowCelebration(false);
      setCompletedSkill(null);
    }, 3000);
  };

  const resetProgress = () => {
    setSkillsProgress({});
    localStorage.removeItem(`roadmap-progress-${roleSlug}`);
  };

  const handleSkillClick = (skill) => {
    const skillId = skill.id;
    const isCompleted = skillsProgress[skillId];
    const isNext = !isCompleted && allSkills.findIndex(s => s.id === skillId) === completedCount;
    const isLocked = allSkills.findIndex(s => s.id === skillId) > completedCount;

    if (isLocked) return;

    if (!isCompleted) {
      completeSkill(skillId);
    }
  };

  // Get skill icon based on category and name
  const getSkillIcon = (skill) => {
    const name = skill.name.toLowerCase();
    
    if (name.includes('sql')) return '🗄️';
    if (name.includes('python')) return '🐍';
    if (name.includes('data cleaning')) return '🧹';
    if (name.includes('visualization')) return '📊';
    if (name.includes('statistics')) return '📈';
    if (name.includes('machine learning')) return '🤖';
    if (name.includes('deep learning')) return '🧠';
    if (name.includes('analytics')) return '🔍';
    if (name.includes('business')) return '💼';
    if (name.includes('communication')) return '💬';
    if (name.includes('cloud')) return '☁️';
    if (name.includes('big data')) return '🗃️';
    if (name.includes('react')) return '⚛️';
    if (name.includes('matlab')) return '🔢';
    if (name.includes('risk')) return '📉';
    if (name.includes('stochastic')) return '🎲';
    if (name.includes('linear')) return '📐';
    if (name.includes('financial')) return '💰';
    if (name.includes('optimization')) return '⚡';
    
    return '🎯'; // Default
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

  const getSkillColor = (skill, isCompleted) => {
    if (isCompleted) return '#10b981'; // Green for completed
    if (skill.importance === 'Essential') return '#ef4444'; // Red for essential
    if (skill.importance === 'Important') return '#f59e0b'; // Orange for important
    return '#6b7280'; // Gray for useful
  };

  // If no roleSlug, show default page
  if (!roleSlug) {
    return (
      <div className="roadmap-default-container">
        <div className="roadmap-default-content">
          <h1>🛩️</h1>
          <h2>Choose Your Learning Path</h2>
          <p>Select a data science role from the home page to start your personalized learning journey with our interactive roadmap.</p>
          <button onClick={() => window.location.href = '/home'}>
            Explore Roles
          </button>
        </div>
      </div>
    );
  }

  // Loading state
  if (!roleData) {
    return (
      <div className="roadmap-loading">
        <div className="roadmap-loading-spinner"></div>
        <p>Loading roadmap...</p>
      </div>
    );
  }

  // Main roadmap interface
  return (
    <div 
      className="village-roadmap-container"
      style={{
        '--role-color': roleData.color,
        '--role-gradient': roleData.gradient
      }}
    >
      {/* Header */}
      <motion.div 
        className="village-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="village-header-content">
          <div className="village-title-section">
            <div className="village-icon" style={{ background: roleData.gradient }}>
              {roleData.icon}
            </div>
            <div className="village-title-info">
              <h1>{roleData.title} Village</h1>
              <p>Complete your journey through the Data Science Village</p>
            </div>
          </div>
          
          <div className="village-progress-stats">
            <div className="progress-stat">
              <div className="progress-number">{allSkills.length}</div>
              <div className="progress-label">Houses</div>
            </div>
            <div className="progress-stat">
              <div className="progress-number">{completedCount}</div>
              <div className="progress-label">Completed</div>
            </div>
            <div className="progress-stat">
              <div className="progress-number">
                {Math.round((completedCount / allSkills.length) * 100) || 0}%
              </div>
              <div className="progress-label">Journey</div>
            </div>
          </div>

          <div className="village-controls">
            <button 
              className="back-button"
              onClick={() => history.goBack()}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Skills
            </button>
            <button 
              className="reset-button"
              onClick={resetProgress}
            >
              🔄 Reset Journey
            </button>
          </div>
        </div>
      </motion.div>

      {/* Village Visualization */}
      <motion.div 
        className="village-landscape"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Simplified Village Background */}
        <div className="village-background">
          <div className="village-ground"></div>
        </div>

        {/* Perfect Road Connection Lines - All Skills Connected */}
        <svg className="roadmap-connections" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }}>
          {allSkills.map((skill, index) => {
            // Connect every skill to the next one (no gaps)
            if (index >= allSkills.length - 1) return null;
            
            const skillsPerRow = 4;
            const currentRow = Math.floor(index / skillsPerRow);
            const currentCol = index % skillsPerRow;
            const nextIndex = index + 1;
            const nextRow = Math.floor(nextIndex / skillsPerRow);
            const nextCol = nextIndex % skillsPerRow;
            
            // Current skill position with alternating pattern
            const x1 = 150 + currentCol * 300;
            const baseY1 = 250 + currentRow * 350;
            const yOffset1 = currentCol % 2 === 0 ? -40 : 40;
            const y1 = baseY1 + yOffset1;
            
            // Next skill position with alternating pattern  
            const x2 = 150 + nextCol * 300;
            const baseY2 = 250 + nextRow * 350;
            const yOffset2 = nextCol % 2 === 0 ? -40 : 40;
            const y2 = baseY2 + yOffset2;
            
            const isCompleted = skillsProgress[skill.id];
            const isNext = !isCompleted && index === completedCount;
            
            // Create perfect connection path for all skills
            let pathData;
            if (currentRow === nextRow) {
              // Same row - smooth horizontal curve
              const midX = (x1 + x2) / 2;
              const curveOffset = y1 < y2 ? -50 : 50; // Curve direction based on height difference
              const curveY = Math.min(y1, y2) + curveOffset;
              pathData = `M ${x1} ${y1} Q ${midX} ${curveY} ${x2} ${y2}`;
            } else {
              // Different row - smooth S-curve connection
              if (nextCol === 0) {
                // End of row to start of next row - special wraparound curve
                const controlX1 = x1 + 100;
                const controlY1 = y1;
                const controlX2 = x2 - 100;
                const controlY2 = y2;
                pathData = `M ${x1} ${y1} C ${controlX1} ${controlY1} ${controlX2} ${controlY2} ${x2} ${y2}`;
              } else {
                // Normal next skill in sequence
                const midX = (x1 + x2) / 2;
                const midY = (y1 + y2) / 2;
                pathData = `M ${x1} ${y1} C ${x1 + 80} ${y1} ${midX - 80} ${midY} ${midX} ${midY} C ${midX + 80} ${midY} ${x2 - 80} ${y2} ${x2} ${y2}`;
              }
            }
            
            return (
              <g key={`connection-${index}`}>
                {/* Road base - visible for all connections */}
                <motion.path
                  d={pathData}
                  stroke="#cbd5e1"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                />
                {/* Progress line - shows completion status */}
                <motion.path
                  d={pathData}
                  stroke={isCompleted ? "#10b981" : isNext ? "#3b82f6" : "#94a3b8"}
                  strokeWidth="3"
                  strokeDasharray={isCompleted ? "none" : isNext ? "8,4" : "4,8"}
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: isCompleted ? 1 : isNext ? 0.7 : 0.4 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
                {/* Animated dots for next skill */}
                {isNext && (
                  <motion.path
                    d={pathData}
                    stroke="#60a5fa"
                    strokeWidth="2"
                    strokeDasharray="4,12"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, strokeDashoffset: 0 }}
                    animate={{ 
                      pathLength: 1,
                      strokeDashoffset: [0, -16]
                    }}
                    transition={{ 
                      pathLength: { duration: 1 },
                      strokeDashoffset: { duration: 2, repeat: Infinity, ease: "linear" }
                    }}
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Progress Bar for Completed Sections */}
        {Math.floor(completedCount / 4) > 0 && (
          <div className="section-progress-container">
            <div className="section-progress-bar">
              <div 
                className="section-progress-fill"
                style={{ width: `${(Math.floor(completedCount / 4) / Math.ceil(allSkills.length / 4)) * 100}%` }}
              />
            </div>
            <div className="section-progress-text">
              Section {Math.floor(completedCount / 4)} of {Math.ceil(allSkills.length / 4)} Complete
            </div>
          </div>
        )}

        {/* Village Houses (Skills) */}
        <div className="village-houses">
          {allSkills.map((skill, index) => {
            const isCompleted = skillsProgress[skill.id];
            const isNext = !isCompleted && index === completedCount;
            const isLocked = index > completedCount;
            
            // Calculate position with better spacing and alternating pattern
            const skillsPerRow = 4;
            const row = Math.floor(index / skillsPerRow);
            const col = index % skillsPerRow;
            const x = 150 + col * 300; // Increased horizontal spacing
            // Alternating pattern: up, down, up, down for each skill in row
            const baseY = 250 + row * 350; // Increased vertical spacing
            const yOffset = col % 2 === 0 ? -40 : 40; // More pronounced alternating
            const y = baseY + yOffset;
            
            return (
              <motion.div
                key={skill.id}
                className={`village-house ${
                  isCompleted ? 'completed' : 
                  isNext ? 'next' : 
                  isLocked ? 'locked' : 'available'
                }`}
                style={{
                  position: 'absolute',
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: isNext ? [1, 1.05, 1] : 1, 
                  opacity: 1 
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  scale: {
                    duration: 2,
                    repeat: isNext ? Infinity : 0,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ 
                  scale: isLocked ? 1 : 1.1, 
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                onClick={() => !isLocked && handleSkillClick(skill)}
              >
                {/* Skill Card Structure - Consistent with SkillPage */}
                <div className="skill-card-container">
                  <div className="skill-icon-wrapper">
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                  </div>
                </div>

                {/* House Label */}
                <div className="house-label">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-level">{skill.level}</div>
                </div>

                {/* Status Indicators */}
                {isNext && (
                  <motion.div 
                    className="next-pulse"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ✨
                  </motion.div>
                )}
                
                {isLocked && (
                  <div className="locked-overlay">
                    <div className="lock-icon">🔒</div>
                  </div>
                )}
                
                {isCompleted && (
                  <motion.div 
                    className="completion-stars"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="star star-1">⭐</div>
                    <div className="star star-2">⭐</div>
                    <div className="star star-3">⭐</div>
                  </motion.div>
                )}

                {/* House Tooltip */}
                <div className="house-tooltip">
                  <div className="tooltip-content">
                    <h4>{skill.name}</h4>
                    <p>{skill.description}</p>
                    <div className="tooltip-badges">
                      <span className="level-badge" style={{ backgroundColor: getLevelColor(skill.level) }}>
                        {skill.level}
                      </span>
                      <span className="importance-badge" style={{ backgroundColor: getImportanceColor(skill.importance) }}>
                        {skill.importance}
                      </span>
                    </div>
                    {!isCompleted && !isLocked && (
                      <div className="tooltip-action">
                        {isNext ? '🎯 Start Learning!' : '📚 Click to Learn'}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Progress Summary */}
      <motion.div
        className="roadmap-summary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="summary-card">
          <h3>Learning Progress by Category</h3>
          <div className="categories-progress">
            {Object.entries(roleData.skills).map(([category, skills]) => {
              const categoryCompleted = skills.filter((skill, skillIndex) => 
                skillsProgress[`${category}-${skillIndex}`]
              ).length;
              const categoryProgress = (categoryCompleted / skills.length) * 100;
              
              return (
                <div key={category} className="category-progress-item">
                  <div className="category-progress-header">
                    <h4>{category}</h4>
                    <span>{categoryCompleted}/{skills.length}</span>
                  </div>
                  <div className="category-progress-bar">
                    <div
                      className="category-progress-fill"
                      style={{
                        width: `${categoryProgress}%`,
                        background: roleData.gradient
                      }}
                    />
                  </div>
                  <div className="category-progress-text">
                    {Math.round(categoryProgress)}% complete
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Village Celebration Modal */}
      <AnimatePresence>
        {showCelebration && completedSkill && (
          <motion.div
            className="village-celebration-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="celebration-house"
              initial={{ scale: 0.3, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.3, opacity: 0, y: 100 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 20,
                duration: 0.8
              }}
            >
              {/* Celebration Fireworks */}
              <div className="celebration-fireworks">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`firework firework-${i + 1}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1.5, 0], 
                      opacity: [0, 1, 0],
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      duration: 2, 
                      delay: i * 0.2,
                      repeat: 2
                    }}
                  >
                    {i % 2 === 0 ? '🎆' : '✨'}
                  </motion.div>
                ))}
              </div>

              {/* Celebration Content */}
              <div className="celebration-content">
                <motion.div 
                  className="celebration-icon"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: 3 }}
                >
                  🏆
                </motion.div>
                
                <h3>House Completed!</h3>
                <p>
                  Congratulations! You've mastered{' '}
                  <span className="completed-skill-name">
                    {allSkills.find(s => s.id === completedSkill)?.name}
                  </span>
                  !
                </p>
                
                <div className="village-progress">
                  <div className="progress-houses">
                    <span>🏠 {completedCount} of {allSkills.length} houses completed</span>
                  </div>
                  <div className="village-progress-bar">
                    <motion.div
                      className="village-progress-fill"
                      style={{
                        background: roleData.gradient
                      }}
                      initial={{ width: `${((completedCount - 1) / allSkills.length) * 100}%` }}
                      animate={{ width: `${(completedCount / allSkills.length) * 100}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>

                {/* Next Skill Preview */}
                {completedCount < allSkills.length && (
                  <div className="next-skill-preview">
                    <div className="next-skill-house">🏠</div>
                    <p>Next house: <strong>{allSkills[completedCount]?.name}</strong></p>
                  </div>
                )}

                <div className="celebration-buttons">
                  {completedCount < allSkills.length ? (
                    <button 
                      className="lets-start-btn"
                      onClick={() => setShowCelebration(false)}
                      style={{ background: roleData.gradient }}
                    >
                      🚀 Let's Get Started!
                    </button>
                  ) : (
                    <button 
                      className="journey-complete-btn"
                      onClick={() => setShowCelebration(false)}
                      style={{ background: roleData.gradient }}
                    >
                      🎉 Journey Complete!
                    </button>
                  )}
                  
                  <button 
                    className="continue-exploring-btn"
                    onClick={() => setShowCelebration(false)}
                  >
                    Continue Exploring
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Roadmap;