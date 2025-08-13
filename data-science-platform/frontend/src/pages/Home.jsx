import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
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

  const dsRoles = [
    {
      id: 1,
      title: "Data Scientist",
      slug: "data-scientist",
      category: "Machine Learning",
      color: "#6366f1",
      gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
      icon: "🧠",
      shortDescription: "Build predictive models and extract insights from complex datasets to drive business decisions.",
      backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      title: "Data Analyst",
      slug: "data-analyst",
      category: "Business Intelligence",
      color: "#06b6d4",
      gradient: "linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)",
      icon: "📈",
      shortDescription: "Transform raw data into actionable insights through visualization and statistical analysis.",
      backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      title: "ML Engineer",
      slug: "ml-engineer",
      category: "Artificial Intelligence",
      color: "#ec4899",
      gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
      icon: "🤖",
      shortDescription: "Design, build, and deploy machine learning models at scale in production environments.",
      backgroundImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 4,
      title: "Data Engineer",
      slug: "data-engineer",
      category: "Big Data",
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
      icon: "⚙️",
      shortDescription: "Design and maintain data infrastructure and pipelines for efficient data processing.",
      backgroundImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 5,
      title: "BI Developer",
      slug: "bi-developer",
      category: "Analytics",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      icon: "📊",
      shortDescription: "Create business intelligence solutions and dashboards to help organizations make data-driven decisions.",
      backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 6,
      title: "AI Researcher",
      slug: "ai-researcher",
      category: "Deep Learning",
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
      icon: "🔍",
      shortDescription: "Push the boundaries of artificial intelligence through cutting-edge research and experimentation.",
      backgroundImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 7,
      title: "Data Architect",
      slug: "data-architect",
      category: "Database",
      color: "#3b82f6",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
      icon: "🏗️",
      shortDescription: "Design and implement complex data systems and architectures for large-scale applications.",
      backgroundImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 8,
      title: "Statistician",
      slug: "statistician",
      category: "Mathematics",
      color: "#ef4444",
      gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
      icon: "🧮",
      shortDescription: "Apply statistical theories and methods to solve real-world problems across various industries.",
      backgroundImage: "https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 9,
      title: "Data Visualization",
      slug: "data-visualization",
      category: "Design",
      color: "#d946ef",
      gradient: "linear-gradient(135deg, #d946ef 0%, #a21caf 100%)",
      icon: "🎨",
      shortDescription: "Create compelling visual representations of complex data to communicate insights effectively.",
      backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 10,
      title: "Quantitative Analyst",
      slug: "quant-analyst",
      category: "Finance",
      color: "#14b8a6",
      gradient: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
      icon: "💰",
      shortDescription: "Develop complex mathematical models to analyze financial markets and assess risk.",
      backgroundImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 11,
      title: "NLP Engineer",
      slug: "nlp-engineer",
      category: "Linguistics",
      color: "#f97316",
      gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
      icon: "🗣️",
      shortDescription: "Develop systems that can understand, interpret, and generate human language.",
      backgroundImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 12,
      title: "Computer Vision",
      slug: "computer-vision",
      category: "Image Processing",
      color: "#6366f1",
      gradient: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
      icon: "👁️",
      shortDescription: "Build systems that can interpret and understand visual information from the world.",
      backgroundImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
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

      {/* Roles Section */}
      <section className="roles-section">
        <div className="section-container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Discover Your Path
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Select a role to explore tailored learning journeys designed by industry experts
          </motion.p>

          <motion.div 
            className="roles-grid"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {dsRoles.map((role) => (
              <motion.div 
                key={role.id} 
                className="role-card" 
                style={{ 
                  '--role-color': role.color, 
                  '--role-gradient': role.gradient,
                  '--role-bg-image': `url(${role.backgroundImage})`
                }}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="role-header">
                  <div className="role-icon">{role.icon}</div>
                  <h3 className="role-title">{role.title}</h3>
                  <p className="role-category">{role.category}</p>
                </div>
                
                <div className="role-content">
                  <p className="role-description">{role.shortDescription}</p>
                  <button 
                    className="view-details-btn"
                    onClick={() => goToRole(role)}
                    aria-label={`View details for ${role.title}`}
                    onMouseEnter={(e) => {
                      e.target.style.background = role.color;
                      e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'white';
                      e.target.style.color = role.color;
                    }}
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="section-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>Not sure which career path is right for you?</p>
            <button className="outline-button">Take Career Assessment</button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;