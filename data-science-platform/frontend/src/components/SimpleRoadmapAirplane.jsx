import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import roleSkillsData from "../utils/roleSkillsData";

const SimpleRoadmapAirplane = () => {
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

  const getSkillColor = (skill, isCompleted) => {
    if (isCompleted) return '#10b981'; // Green for completed
    if (skill.importance === 'Essential') return '#ef4444'; // Red for essential
    if (skill.importance === 'Important') return '#f59e0b'; // Orange for important
    return '#6b7280'; // Gray for useful
  };

  if (!roleData) {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '48px',
            height: '48px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #3498db',
            borderRadius: '50%',
            animation: 'spin 2s linear infinite',
            margin: '0 auto 16px'
          }}></div>
          <p style={{ color: '#666' }}>Loading roadmap...</p>
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #faf5ff 100%)',
      padding: '32px 16px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Header */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: roleData.gradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              marginRight: '16px'
            }}>
              {roleData.icon}
            </div>
            <div>
              <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1f2937', margin: '0 0 8px 0' }}>
                {roleData.title} Learning Path
              </h1>
              <p style={{ color: '#6b7280', fontSize: '18px', margin: 0 }}>{roleData.description}</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px', fontSize: '14px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2563eb' }}>{allSkills.length}</div>
              <div style={{ color: '#6b7280' }}>Total Skills</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#059669' }}>{completedCount}</div>
              <div style={{ color: '#6b7280' }}>Completed</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#7c3aed' }}>
                {Math.round((completedCount / allSkills.length) * 100) || 0}%
              </div>
              <div style={{ color: '#6b7280' }}>Progress</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <button
            onClick={() => history.goBack()}
            style={{
              padding: '8px 24px',
              background: '#f3f4f6',
              color: '#374151',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            ← Back to Skills
          </button>
          <button
            onClick={resetProgress}
            style={{
              padding: '8px 24px',
              background: '#fef2f2',
              color: '#dc2626',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Reset Progress
          </button>
        </div>
      </div>

      {/* Roadmap Container */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ position: 'relative', minHeight: '400px', background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
          {/* Road Path */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '5%',
            right: '5%',
            height: '8px',
            background: `linear-gradient(to right, #10b981 0%, #10b981 ${(completedCount / allSkills.length) * 100}%, #e5e7eb ${(completedCount / allSkills.length) * 100}%, #e5e7eb 100%)`,
            borderRadius: '4px',
            transform: 'translateY(-50%)'
          }} />

          {/* Airplane */}
          <div style={{
            position: 'absolute',
            left: `${airplanePosition}%`,
            top: '50%',
            transform: 'translate(-50%, -80%)',
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: roleData.gradient,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
            border: '4px solid white',
            transition: 'left 0.8s ease-in-out'
          }}>
            ✈️
          </div>

          {/* Skills as Houses */}
          {allSkills.map((skill, index) => {
            const isCompleted = skillsProgress[skill.id];
            const position = (index / (allSkills.length - 1)) * 90 + 5;
            
            return (
              <div
                key={skill.id}
                style={{
                  position: 'absolute',
                  left: `${position}%`,
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  cursor: isCompleted ? 'default' : 'pointer',
                  textAlign: 'center'
                }}
                onClick={() => !isCompleted && completeSkill(skill.id)}
                title={`${skill.name} - ${skill.category} (${skill.level}, ${skill.importance})`}
              >
                {/* House Body */}
                <div style={{
                  width: '48px',
                  height: '32px',
                  background: getSkillColor(skill, isCompleted),
                  borderRadius: '8px 8px 0 0',
                  position: 'relative',
                  margin: '0 auto',
                  transition: 'all 0.3s ease',
                  boxShadow: isCompleted ? '0 4px 8px rgba(16, 185, 129, 0.3)' : '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}>
                  {/* House Roof */}
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '0',
                    height: '0',
                    borderLeft: '24px solid transparent',
                    borderRight: '24px solid transparent',
                    borderBottom: `16px solid ${isCompleted ? '#059669' : '#b45309'}`
                  }} />
                  
                  {/* Skill Icon */}
                  <div style={{
                    position: 'absolute',
                    inset: '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '12px'
                  }}>
                    {isCompleted ? '✅' : skill.icon || '📚'}
                  </div>
                </div>
                
                {/* Skill Label */}
                <div style={{
                  marginTop: '8px',
                  fontSize: '10px',
                  fontWeight: '600',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  background: isCompleted ? '#d1fae5' : '#f3f4f6',
                  color: isCompleted ? '#065f46' : '#374151',
                  whiteSpace: 'nowrap',
                  maxWidth: '80px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {skill.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Celebration Modal */}
      {showCelebration && completedSkill && (
        <div style={{
          position: 'fixed',
          inset: '0',
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: '50'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            textAlign: 'center',
            maxWidth: '400px',
            margin: '16px'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>🎉</div>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>
              Skill Completed!
            </h3>
            <p style={{ color: '#6b7280', marginBottom: '16px' }}>
              Great job completing{' '}
              <span style={{ fontWeight: '600' }}>
                {allSkills.find(s => s.id === completedSkill)?.name}
              </span>
              !
            </p>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>
              {completedCount} of {allSkills.length} skills completed
            </div>
            <div style={{
              width: '100%',
              background: '#e5e7eb',
              borderRadius: '9999px',
              height: '8px',
              marginTop: '16px'
            }}>
              <div style={{
                height: '8px',
                borderRadius: '9999px',
                background: roleData.gradient,
                width: `${(completedCount / allSkills.length) * 100}%`,
                transition: 'width 0.5s ease'
              }} />
            </div>
          </div>
        </div>
      )}

      {/* Progress Summary */}
      <div style={{ maxWidth: '1200px', margin: '48px auto 0' }}>
        <div style={{ background: 'white', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', padding: '24px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>
            Learning Progress by Category
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            {Object.entries(roleData.skills).map(([category, skills]) => {
              const categoryCompleted = skills.filter(skill => 
                skillsProgress[`${category}-${skills.indexOf(skill)}`]
              ).length;
              const categoryProgress = (categoryCompleted / skills.length) * 100;
              
              return (
                <div key={category} style={{ background: '#f9fafb', borderRadius: '8px', padding: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <h4 style={{ fontWeight: '600', color: '#1f2937', margin: 0 }}>{category}</h4>
                    <span style={{ fontSize: '14px', color: '#6b7280' }}>
                      {categoryCompleted}/{skills.length}
                    </span>
                  </div>
                  <div style={{ width: '100%', background: '#e5e7eb', borderRadius: '9999px', height: '8px' }}>
                    <div style={{
                      height: '8px',
                      borderRadius: '9999px',
                      background: roleData.gradient,
                      width: `${categoryProgress}%`,
                      transition: 'width 0.5s ease'
                    }} />
                  </div>
                  <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
                    {Math.round(categoryProgress)}% complete
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleRoadmapAirplane;
