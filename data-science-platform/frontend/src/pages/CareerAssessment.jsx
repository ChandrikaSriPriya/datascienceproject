import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import { assessmentQuestions, calculateRoleScores } from '../utils/enhancedCareerAssessmentData';
import './CareerAssessment.css';

const CareerAssessment = () => {
  const history = useHistory();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const question = assessmentQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100;

  useEffect(() => {
    // Reset selected options when question changes
    setSelectedOptions([]);
  }, [currentQuestion]);

  const handleOptionSelect = (optionId) => {
    if (question.type === 'single') {
      setSelectedOptions([optionId]);
    } else if (question.type === 'multiple') {
      const maxSelections = question.maxSelections || 3;
      if (selectedOptions.includes(optionId)) {
        setSelectedOptions(selectedOptions.filter(id => id !== optionId));
      } else if (selectedOptions.length < maxSelections) {
        setSelectedOptions([...selectedOptions, optionId]);
      }
    }
  };

  const handleNext = () => {
    if (selectedOptions.length === 0) return;

    const newAnswer = {
      questionId: question.id,
      category: question.category,
      selectedOptions: [...selectedOptions]
    };

    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);

    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Assessment completed
      setIsCompleted(true);
      const calculatedResults = calculateRoleScores(updatedAnswers);
      setResults(calculatedResults);
      
      // Save results to localStorage
      localStorage.setItem('careerAssessmentResults', JSON.stringify({
        results: calculatedResults,
        answers: updatedAnswers,
        completedAt: new Date().toISOString()
      }));
      
      setTimeout(() => setShowResults(true), 1000);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      // Remove the last answer
      setAnswers(answers.slice(0, -1));
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedOptions([]);
    setIsCompleted(false);
    setResults(null);
    setShowResults(false);
  };

  const handleViewRole = (roleSlug) => {
    history.push(`/skills/${roleSlug}`);
  };

  const handleTakeAnotherAssessment = () => {
    handleRestart();
  };

  if (isCompleted && showResults && results) {
    return (
      <div className="assessment-results-container">
        <motion.div 
          className="results-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Results Header */}
          <div className="results-header">
            <motion.div 
              className="results-icon"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              🎯
            </motion.div>
            <h1>Your Career Assessment Results</h1>
            <p>Based on your responses, here are the data science roles that best match your interests and skills.</p>
          </div>

          {/* Top 3 Recommendations */}
          <div className="top-recommendations">
            <h3>🏆 Your Top 3 Career Matches</h3>
            <div className="top-recommendations-grid">
              {results.slice(0, 3).map((result, index) => (
                <motion.div
                  key={result.role}
                  className="top-role-card"
                  style={{ 
                    '--role-color': result.color,
                    '--role-gradient': result.gradient 
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className={`rank-badge rank-${index + 1}`}>{index + 1}</div>
                  <div className="role-icon-large">{result.icon}</div>
                  <h4 className="role-title-large">{result.title}</h4>
                  <div className="role-match-score">{result.percentage}%</div>
                  <p className="role-description-short">{result.description}</p>
                  <button 
                    className="explore-button"
                    onClick={() => handleViewRole(result.slug)}
                  >
                    Explore Learning Path
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* All Results */}
          <div className="all-roles-section">
            <h3>📊 Complete Compatibility Scores</h3>
            <div className="all-roles-grid">
              {results.map((result, index) => (
                <motion.div
                  key={result.role}
                  className="role-score-card"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                >
                  <div className="role-icon-small" style={{ '--role-gradient': result.gradient }}>
                    {result.icon}
                  </div>
                  <div className="role-info">
                    <div className="role-name">{result.title}</div>
                    <div className="role-score" style={{ '--role-gradient': result.gradient }}>
                      {result.percentage}%
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="results-actions">
            <button 
              className="primary-action-btn"
              onClick={() => handleViewRole(results[0].slug)}
            >
              Start with {results[0].title}
            </button>
            <button 
              className="secondary-action-btn"
              onClick={handleTakeAnotherAssessment}
            >
              Take Assessment Again
            </button>
            <button 
              className="tertiary-action-btn"
              onClick={() => history.push('/home')}
            >
              Explore All Roles
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (isCompleted && !showResults) {
    return (
      <div className="assessment-processing">
        <motion.div 
          className="processing-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div 
            className="processing-spinner"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            🧠
          </motion.div>
          <h2>Analyzing Your Responses...</h2>
          <p>We're calculating your career compatibility scores</p>
          <div className="processing-steps">
            <div className="step completed">✓ Analyzing technical interests</div>
            <div className="step completed">✓ Evaluating skill preferences</div>
            <div className="step completed">✓ Matching career goals</div>
            <div className="step active">🔄 Generating recommendations</div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="career-assessment-container">
      {/* Header */}
      <div className="assessment-header">
        <motion.div 
          className="header-content"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="assessment-icon">🎯</div>
          <h1>Data Science Career Assessment</h1>
          <p>Discover which data science role matches your interests, skills, and career goals</p>
          
          {/* Progress Bar */}
          <div className="progress-container">
            <div className="progress-info">
              <span>Question {currentQuestion + 1} of {assessmentQuestions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="progress-bar">
              <motion.div 
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Question Content */}
      <div className="question-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            className="question-content"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <div className="question-header">
              <div 
                className="question-category"
                style={{ background: question.gradient || 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' }}
              >
                <span className="category-icon">{question.icon}</span>
                {question.category}
              </div>
              <h2 className="question-text">{question.question}</h2>
              {question.description && (
                <p className="question-description">{question.description}</p>
              )}
              {question.type === 'multiple' && (
                <p className="question-instruction">
                  <span className="instruction-icon">✨</span>
                  Select up to {question.maxSelections || 3} options that best describe you
                </p>
              )}
            </div>

            <div className="options-container">
              {question.options.map((option, index) => (
                <motion.div
                  key={option.id}
                  className={`option-card ${selectedOptions.includes(option.id) ? 'selected' : ''}`}
                  style={{ 
                    '--option-color': option.color || '#6366f1',
                    '--option-gradient': `linear-gradient(135deg, ${option.color || '#6366f1'} 0%, ${option.color || '#8b5cf6'} 100%)`
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleOptionSelect(option.id)}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="option-emoji">{option.emoji}</div>
                  <div className="option-content">
                    <div className="option-text">{option.text}</div>
                    {option.subtext && (
                      <div className="option-subtext">{option.subtext}</div>
                    )}
                  </div>
                  <div className="option-checkbox">
                    {selectedOptions.includes(option.id) && (
                      <motion.div
                        className="checkbox-check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        ✓
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="assessment-navigation">
        <button 
          className="nav-button secondary"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Previous
        </button>

        <div className="question-dots">
          {assessmentQuestions.map((_, index) => (
            <div
              key={index}
              className={`question-dot ${index <= currentQuestion ? 'completed' : ''} ${index === currentQuestion ? 'current' : ''}`}
            />
          ))}
        </div>

        <button 
          className="nav-button primary"
          onClick={handleNext}
          disabled={selectedOptions.length === 0}
        >
          {currentQuestion === assessmentQuestions.length - 1 ? 'Get Results' : 'Next'}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CareerAssessment;
