import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import RoleCard from '../components/RoleCard';
import dsRoles from '../utils/dsRoles';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

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

  const goToRole = (role) => {
    history.push(`/role/${role.slug}`);
  };

  const stats = [
    { value: "10K+", label: "Active Learners" },
    { value: "500+", label: "Learning Paths" },
    { value: "50+", label: "Expert Mentors" },
    { value: "24/7", label: "Support Available" }
  ];

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
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="gradient-circle blue"></div>
          <div className="gradient-circle teal"></div>
          <div className="gradient-circle purple"></div>
        </div>
        
        <div className="hero-content-container">
          <motion.div 
            className="hero-content" 
            initial="hidden" 
            animate="visible" 
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="badge">
              <span>New</span> Updated learning paths for 2024
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="hero-title">
              Launch Your <span>Data Science</span> Career
            </motion.h1>
            
            <motion.p variants={itemVariants} className="hero-subtitle">
              Master in-demand skills through structured learning paths designed by industry experts.
            </motion.p>
            
            <motion.div variants={itemVariants} className="hero-cta">
              <button className="primary-button">Explore All Paths</button>
              <button className="secondary-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M10 8L16 12L10 16V8Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Watch Demo
              </button>
            </motion.div>
          </motion.div>
          
          <div className="hero-visual">
            <div className="data-visualization">
              <div className="chart-container">
                <div className="chart-bar" style={{ height: '70%', background: 'linear-gradient(to top, #6366f1, #8b5cf6)' }}></div>
                <div className="chart-bar" style={{ height: '50%', background: 'linear-gradient(to top, #06b6d4, #0ea5e9)' }}></div>
                <div className="chart-bar" style={{ height: '90%', background: 'linear-gradient(to top, #ec4899, #f43f5e)' }}></div>
                <div className="chart-bar" style={{ height: '40%', background: 'linear-gradient(to top, #f59e0b, #f97316)' }}></div>
              </div>
              <div className="chart-labels">
                <span>Python</span>
                <span>SQL</span>
                <span>ML</span>
                <span>Stats</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - SIMPLIFIED */}
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


      {/* Roles Section - SIMPLIFIED */}
      <section className="roles-section">
  <div className="section-container">
    <h2 className="section-title">Discover Your Path</h2>
    <p className="section-subtitle">
      Select a role to explore tailored learning journeys
    </p>

    <div className="roles-grid">
      {dsRoles.map((role) => (
        <RoleCard 
          key={role.id} 
          role={role} 
          onClick={() => goToRole(role)} 
        />
      ))}
    </div>

    <div className="section-footer">
      <p>Not sure where to start?</p>
      <button className="outline-button">Take Career Quiz</button>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;