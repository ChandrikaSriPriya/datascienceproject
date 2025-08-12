import React from 'react';
import { Link } from 'react-router-dom';

const HomeFooter = () => {
  return (
    <footer className="site-footer home-footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Data Science Platform.</p>
        <div className="footer-actions">
          <a className="btn-outline" href="/support">Support</a>
          <a className="btn-outline" href="/feedback">Feedback</a>
          <a className="btn-outline" href="/contact">Contact Us</a>
        </div>
        <p className="footer-quicklinks">
          <Link to="/dashboard">Dashboard</Link> · <Link to="/roadmap">Learning Paths</Link> · <Link to="/projects">Projects</Link>
        </p>
      </div>
    </footer>
  );
};

export default HomeFooter;
