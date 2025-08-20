import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useHistory } from "react-router-dom";
import roleSkillsData from "../utils/roleSkillsData";
// import confetti from "canvas-confetti";

const EnhancedRoadmapAirplane = () => {
  const { roleSlug } = useParams();
  const history = useHistory();
  const [roleData, setRoleData] = useState(null);
  const [skillsProgress, setSkillsProgress] = useState({});
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
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
  const airplanePosition = allSkills.length > 0 ? (completedCount / allSkills.length) * 100 : 0;

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

    // Confetti animation (commented out for now)
    // confetti({
    //   particleCount: 100,
    //   spread: 70,
    //   origin: { y: 0.6 },
    //   colors: ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b']
    // });

    // Hide celebration after 3 seconds
    setTimeout(() => {
      setShowCelebration(false);
      setCompletedSkill(null);
    }, 3000);

    // Find next incomplete skill
    const currentIndex = allSkills.findIndex(skill => skill.id === skillId);
    const nextIncompleteSkill = allSkills.slice(currentIndex + 1).find(skill => !newProgress[skill.id]);
    
    if (nextIncompleteSkill) {
      setTimeout(() => {
        setCurrentSkillIndex(allSkills.findIndex(skill => skill.id === nextIncompleteSkill.id));
      }, 1000);
    }
  };

  const resetProgress = () => {
    setSkillsProgress({});
    setCurrentSkillIndex(0);
    localStorage.removeItem(`roadmap-progress-${roleSlug}`);
  };

  const getSkillColor = (skill, isCompleted) => {
    if (isCompleted) return '#10b981'; // Green for completed
    if (skill.importance === 'Essential') return '#ef4444'; // Red for essential
    if (skill.importance === 'Important') return '#f59e0b'; // Orange for important
    return '#6b7280'; // Gray for useful
  };

  const getSkillIcon = (skill, isCompleted) => {
    if (isCompleted) return '✅';
    return skill.icon || '📚';
  };

  if (!roleData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading roadmap...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      {/* Header */}
      <motion.div 
        className="max-w-6xl mx-auto mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mr-4"
              style={{ background: roleData.gradient }}
            >
              {roleData.icon}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {roleData.title} Learning Path
              </h1>
              <p className="text-gray-600 text-lg">{roleData.description}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{allSkills.length}</div>
              <div className="text-gray-500">Total Skills</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{completedCount}</div>
              <div className="text-gray-500">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {Math.round((completedCount / allSkills.length) * 100) || 0}%
              </div>
              <div className="text-gray-500">Progress</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => history.goBack()}
            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            ← Back to Skills
          </button>
          <button
            onClick={resetProgress}
            className="px-6 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
          >
            Reset Progress
          </button>
        </div>
      </motion.div>

      {/* Roadmap Container */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="relative"
          style={{ minHeight: '600px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Road Path */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1000 600"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#e5e7eb', stopOpacity: 1 }} />
                <stop offset={`${airplanePosition}%`} style={{ stopColor: '#10b981', stopOpacity: 1 }} />
                <stop offset={`${airplanePosition}%`} style={{ stopColor: '#e5e7eb', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#e5e7eb', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            
            {/* Main road path */}
            <path
              d="M50 300 Q250 200 450 300 T850 300 Q900 300 950 280"
              stroke="url(#roadGradient)"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
            />
            
            {/* Road markings */}
            <path
              d="M50 300 Q250 200 450 300 T850 300 Q900 300 950 280"
              stroke="#ffffff"
              strokeWidth="2"
              fill="none"
              strokeDasharray="20,15"
              strokeLinecap="round"
              opacity="0.7"
            />
          </svg>

          {/* Airplane */}
          <motion.div
            className="absolute z-20"
            style={{
              left: `${Math.min(airplanePosition, 95)}%`,
              top: '45%',
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              x: [0, 5, 0, -5, 0],
              y: [0, -3, 0, 3, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="relative">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg border-4 border-white"
                style={{ background: roleData.gradient }}
              >
                ✈️
              </div>
              {/* Airplane trail */}
              <motion.div
                className="absolute top-1/2 right-full w-20 h-1 bg-gradient-to-r from-transparent to-blue-300 rounded-full"
                style={{ transform: 'translateY(-50%)' }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Skills as Houses/Landmarks */}
          {allSkills.map((skill, index) => {
            const isCompleted = skillsProgress[skill.id];
            const position = (index / (allSkills.length - 1)) * 90 + 5; // 5% to 95%
            const yOffset = Math.sin(index * 0.5) * 50 + 250; // Vary height along the path
            
            return (
              <motion.div
                key={skill.id}
                className="absolute cursor-pointer"
                style={{
                  left: `${position}%`,
                  top: `${(yOffset / 600) * 100}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                onClick={() => !isCompleted && completeSkill(skill.id)}
              >
                {/* Skill House */}
                <div className="relative group">
                  {/* House Body */}
                  <div
                    className={`w-12 h-8 rounded-t-lg transition-all duration-300 ${
                      isCompleted 
                        ? 'bg-green-400 shadow-lg shadow-green-200' 
                        : 'bg-orange-400 shadow-md hover:shadow-lg'
                    }`}
                    style={{
                      backgroundColor: isCompleted ? '#10b981' : getSkillColor(skill, isCompleted)
                    }}
                  >
                    {/* House Roof */}
                    <div
                      className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-6 border-transparent"
                      style={{
                        borderBottomColor: isCompleted ? '#059669' : '#c2410c'
                      }}
                    />
                    
                    {/* Skill Icon */}
                    <div className="absolute inset-0 flex items-center justify-center text-white text-xs">
                      {getSkillIcon(skill, isCompleted)}
                    </div>
                  </div>
                  
                  {/* Skill Label */}
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <div className={`text-xs font-semibold px-2 py-1 rounded ${
                      isCompleted ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {skill.name}
                    </div>
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-30">
                    <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap max-w-48">
                      <div className="font-semibold">{skill.name}</div>
                      <div className="text-gray-300">{skill.category}</div>
                      <div className="text-gray-400 text-xs mt-1">{skill.description}</div>
                      <div className="flex items-center mt-1 space-x-2">
                        <span className={`px-2 py-0.5 rounded text-xs ${
                          skill.level === 'Advanced' ? 'bg-purple-600' :
                          skill.level === 'Intermediate' ? 'bg-blue-600' : 'bg-green-600'
                        }`}>
                          {skill.level}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-xs ${
                          skill.importance === 'Essential' ? 'bg-red-600' :
                          skill.importance === 'Important' ? 'bg-orange-600' : 'bg-gray-600'
                        }`}>
                          {skill.importance}
                        </span>
                      </div>
                      {!isCompleted && (
                        <div className="text-xs text-gray-400 mt-1">Click to complete!</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Completion Effect */}
                <AnimatePresence>
                  {completedSkill === skill.id && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 2, opacity: 1 }}
                      exit={{ scale: 3, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="w-full h-full rounded-full bg-green-400 opacity-30"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          {/* Clouds */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-white opacity-20 text-4xl pointer-events-none"
              style={{
                left: `${20 + i * 20}%`,
                top: `${10 + (i % 2) * 15}%`
              }}
              animate={{
                x: [0, 30, 0],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              ☁️
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Celebration Modal */}
      <AnimatePresence>
        {showCelebration && completedSkill && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 text-center max-w-md mx-4"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Skill Completed!</h3>
              <p className="text-gray-600 mb-4">
                Great job completing{' '}
                <span className="font-semibold">
                  {allSkills.find(s => s.id === completedSkill)?.name}
                </span>
                !
              </p>
              <div className="text-sm text-gray-500">
                {completedCount} of {allSkills.length} skills completed
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                <div
                  className="h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${(completedCount / allSkills.length) * 100}%`,
                    background: roleData.gradient
                  }}
                ></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Summary */}
      <motion.div
        className="max-w-6xl mx-auto mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Learning Progress by Category</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(roleData.skills).map(([category, skills]) => {
              const categoryCompleted = skills.filter(skill => 
                skillsProgress[`${category}-${skills.indexOf(skill)}`]
              ).length;
              const categoryProgress = (categoryCompleted / skills.length) * 100;
              
              return (
                <div key={category} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-gray-800">{category}</h4>
                    <span className="text-sm text-gray-600">
                      {categoryCompleted}/{skills.length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-500"
                      style={{
                        width: `${categoryProgress}%`,
                        background: roleData.gradient
                      }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {Math.round(categoryProgress)}% complete
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EnhancedRoadmapAirplane;
