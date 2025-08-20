import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const HomeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const handleLogout = () => {
    try { localStorage.removeItem('token'); } catch (e) {}
    setIsOpen(false);
    history.push('/');
  };

  return (
    <nav className="navbar-home">
      <div className="navbar-inner tri-layout">
        <div className="nav-left">
          <div className="navbar-brand">
            <Link to="/home" onClick={() => setIsOpen(false)}>
              <span className="brand-mark">DSP</span>
              <span className="brand-text">Data Science Platform</span>
            </Link>
          </div>
        </div>

        <div className="nav-center">
          <ul className="navbar-links">
            <li><Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link></li>
            <li><Link to="/career-assessment" onClick={() => setIsOpen(false)}>Career Assessment</Link></li>
            <li><Link to="/roadmap" onClick={() => setIsOpen(false)}>Learning Paths</Link></li>
            <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link to="/resources" onClick={() => setIsOpen(false)}>Resources</Link></li>
            <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
          </ul>
        </div>

        <div className="nav-right">
          <div className="actions">
            <Link to="/profile" className="btn-outline" onClick={() => setIsOpen(false)}>Profile</Link>
            <button className="btn-outline" onClick={handleLogout}>Logout</button>
          </div>

          <button
            className={`navbar-toggle ${isOpen ? 'active' : ''}`}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link></li>
          <li><Link to="/career-assessment" onClick={() => setIsOpen(false)}>Career Assessment</Link></li>
          <li><Link to="/roadmap" onClick={() => setIsOpen(false)}>Learning Paths</Link></li>
          <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="/resources" onClick={() => setIsOpen(false)}>Resources</Link></li>
          <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
          <li><Link to="/profile" onClick={() => setIsOpen(false)}>Profile</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default HomeNavbar;
