import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.body.className = theme + '-theme';
  }, [theme]);
  
  const history = useHistory();
  
  const handleStartLearning = () => {
    history.push('/signup');
  };
  
  const handleGetStarted = () => {
    history.push('/signup');
  };
  
  const handleSignIn = () => {
    history.push('/signin');
  };
  
  const handleSignUp = () => {
    history.push('/signup');
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      } 
    }
  };

  const features = [
    {
      icon: "📊",
      title: "Interactive Learning",
      description: "Hands-on projects and real-world datasets to practice with"
    },
    {
      icon: "🎯",
      title: "Personalized Paths",
      description: "Customized learning journeys based on your goals"
    },
    {
      icon: "🏆",
      title: "Certification",
      description: "Earn recognized certificates upon completion"
    },
    {
      icon: "🤝",
      title: "Community",
      description: "Connect with peers and experts in our forums"
    }
  ];

  return (
    <div className={`landing-page ${theme}-theme`}>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <div className="logo-container">
              <div className="logo-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" fillOpacity="0.1" stroke="url(#logoGradient)" strokeWidth="2"/>
                  <path d="M12 16L20 24L28 16" stroke="url(#logoGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="15" cy="12" r="2" fill="url(#logoGradient)"/>
                  <circle cx="25" cy="12" r="2" fill="url(#logoGradient)"/>
                  <circle cx="20" cy="28" r="2" fill="url(#logoGradient)"/>
                  <path d="M8 20H12M28 20H32" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="logo-text">
                <span className="logo-name">PR LEARNINGS</span>
                <span className="logo-tagline">Platform</span>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="navbar-buttons">
            <button className="nav-button theme-toggle-btn" onClick={toggleTheme}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button className="nav-button signin-btn" onClick={handleSignIn}>
              Sign In
            </button>
            <button className="nav-button signup-btn" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Unique Design */}
      <section className="hero-section">
        {/* Animated Background Elements */}
        <div className="hero-background">
          <div className="geometric-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
          </div>
          <div className="particle-system">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
        </div>
        
        <div className="hero-content-container">
          <motion.div 
            className="hero-content" 
            initial="hidden" 
            animate="visible" 
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="hero-badge">
              <span className="badge-icon">🚀</span>
              <span className="badge-text">Transform Your Career Today</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="hero-title">
              Master the Future of
              <span className="gradient-text"> Data Science</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="hero-subtitle">
              Join thousands of learners who have unlocked their potential in AI, Machine Learning, and Data Analytics. 
              Start your journey from beginner to expert with our comprehensive learning platform.
            </motion.p>
            
            <motion.div variants={itemVariants} className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50K+</span>
                <span className="stat-label">Students</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">Success Rate</span>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="hero-cta">
              <button className="primary-button" onClick={handleStartLearning}>
                <span>Start Learning Free</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="secondary-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M10 8L16 12L10 16V8Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Watch Success Stories
              </button>
            </motion.div>
          </motion.div>
          
          <div className="hero-visual">
            <div className="roadmap-container">
              {/* Simple Roadmap Header */}
              <div className="roadmap-header">
                <h3>Your Learning Journey</h3>
                <div className="journey-stats">
                  <span>⏱️ 6 months</span>
                  <span>📚 12 courses</span>
                  <span>🎯 95% success</span>
                </div>
              </div>

              {/* Clean Roadmap */}
              <div className="roadmap-visual">
                <div className="roadmap-path">
                  <div className="path-step start-step">
                    <div className="step-icon">🚀</div>
                    <div className="step-content">
                      <h4>Beginner</h4>
                      <p>Start your journey</p>
                    </div>
                  </div>
                  
                  <div className="path-connector"></div>
                  
                  <div className="path-step">
                    <div className="step-icon">📊</div>
                    <div className="step-content">
                      <h4>Data Analysis</h4>
                      <p>Learn Python & SQL</p>
                    </div>
                  </div>
                  
                  <div className="path-connector"></div>
                  
                  <div className="path-step">
                    <div className="step-icon">🧠</div>
                    <div className="step-content">
                      <h4>Machine Learning</h4>
                      <p>Build ML models</p>
                    </div>
                  </div>
                  
                  <div className="path-connector"></div>
                  
                  <div className="path-step end-step">
                    <div className="step-icon">🎯</div>
                    <div className="step-content">
                      <h4>Data Scientist</h4>
                      <p>Land your dream job</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Progress */}
              <div className="progress-section">
                <div className="progress-header">
                  <h4>Current Progress</h4>
                  <span className="progress-percentage">25%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '25%'}}></div>
                </div>
                <div className="current-course">
                  <span className="course-badge">📚</span>
                  <span className="course-name">Python Fundamentals</span>
                  <span className="course-status">In Progress</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="quick-actions">
                <button className="action-btn primary">
                  <span>Continue Learning</span>
                  <span>→</span>
                </button>
                <button className="action-btn secondary">
                  <span>View Full Path</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <h2 className="section-title">Why Learn With Us</h2>
          <p className="section-subtitle">
            We combine the best of structured education with practical applications
          </p>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" role="region" aria-label={feature.title}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <h2>Ready to Start Your Data Science Journey?</h2>
          <p>Join thousands of students who have transformed their careers with our platform.</p>
          <button className="primary-button large" onClick={handleGetStarted}>Get Started Now</button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;