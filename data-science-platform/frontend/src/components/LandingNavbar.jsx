import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-landing">
      <div className="navbar-inner tri-layout">
        <div className="nav-left">
          <div className="navbar-brand">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <span className="brand-mark">DSP</span>
              <span className="brand-text">Data Science Platform</span>
            </Link>
          </div>
        </div>

        <div className="nav-center">
          <ul className="navbar-links">
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#features" onClick={() => setIsOpen(false)}>Features</a></li>
            <li><a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>

        <div className="nav-right">
          <div className="actions">
            <Link className="btn-outline" to="/signin" onClick={() => setIsOpen(false)}>Sign In</Link>
            <Link className="btn-nav" to="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link>
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
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#features" onClick={() => setIsOpen(false)}>Features</a></li>
          <li><a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li><Link to="/signin" onClick={() => setIsOpen(false)}>Sign In</Link></li>
          <li><Link to="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default LandingNavbar;
