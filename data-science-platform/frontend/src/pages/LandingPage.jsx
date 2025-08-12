import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="landing-page">
      <section className="landing-container" id="home">
        <div className="background-shapes">
          <motion.div
            className="shape shape-blue"
            animate={{ x: [0, 30, 0], y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div
            className="shape shape-teal"
            animate={{ x: [0, -25, 0], y: [0, 25, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", delay: 3 }}
          />
          <motion.div
            className="shape shape-purple"
            animate={{ x: [0, 15, -10, 0], y: [0, 10, -10, 0], rotate: [0, 8, -4, 0] }}
            transition={{ duration: 22, repeat: Infinity, repeatType: "reverse", delay: 1.5 }}
          />
        </div>

        <motion.div className="hero-content" initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div className="eyebrow" variants={itemVariants}>Become Job-Ready</motion.div>
          <motion.h1 className="hero-title" variants={itemVariants}>
            Master Data Science with a Guided, Interactive Roadmap
          </motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants}>
            Learn the right skills, in the right order. Track progress, practice with hands‑on projects, and land your dream role.
          </motion.p>

          <motion.div className="button-group" variants={itemVariants}>
            <Link className="btn btn-primary btn-animate" to="/signup" aria-label="Get Started">
              Get Started
            </Link>
            <a className="btn btn-secondary" href="#features" aria-label="View Features">
              View Features
            </a>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div>
              <span className="stat-value">10k+</span>
              <span className="stat-label">Learners</span>
            </div>
            <div>
              <span className="stat-value">120+</span>
              <span className="stat-label">Topics</span>
            </div>
            <div>
              <span className="stat-value">40+</span>
              <span className="stat-label">Projects</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="lp-section about-section">
        <div className="lp-container">
          <h2>About the Platform</h2>
          <p>
            We help learners master data science with practical, curated paths. Progress tracking, hands‑on projects,
            and community support keep you motivated from fundamentals to advanced topics.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <motion.div className="features" initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon">📈</div>
            <h3>Guided Learning</h3>
            <p>Follow curated paths from fundamentals to advanced ML, without getting lost.</p>
          </motion.div>
          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon">🧪</div>
            <h3>Hands‑on Projects</h3>
            <p>Build a portfolio with real‑world datasets and industry‑style challenges.</p>
          </motion.div>
          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon">🎯</div>
            <h3>Track Progress</h3>
            <p>Stay motivated with milestones, streaks, and personalized recommendations.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="lp-section pricing-section">
        <div className="lp-container pricing-grid">
          <div className="pricing-card">
            <h3>Free</h3>
            <p>Explore basics with limited access.</p>
            <ul>
              <li>Community access</li>
              <li>Intro courses</li>
              <li>Basic projects</li>
            </ul>
            <a href="#contact" className="btn btn-secondary">Get Started</a>
          </div>
          <div className="pricing-card popular">
            <div className="badge">Popular</div>
            <h3>Pro</h3>
            <p>Full paths, projects, and certificates.</p>
            <ul>
              <li>All learning paths</li>
              <li>Capstone projects</li>
              <li>Completion certificates</li>
            </ul>
            <a href="#contact" className="btn btn-primary">Go Pro</a>
          </div>
          <div className="pricing-card">
            <h3>Teams</h3>
            <p>Upskill your team with analytics and ML.</p>
            <ul>
              <li>Team dashboards</li>
              <li>Custom tracks</li>
              <li>Dedicated support</li>
            </ul>
            <a href="#contact" className="btn btn-secondary">Contact Sales</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="lp-section contact-section">
        <div className="lp-container contact-card">
          <h2>Contact Us</h2>
          <p>Have questions? Reach out and we’ll get back to you shortly.</p>
          <a href="mailto:support@example.com" className="btn btn-primary">Email Support</a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
