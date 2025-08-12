import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <span className="brand-mark">DSP</span>
            <span className="brand-text">Data Science Platform</span>
          </Link>
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

        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li><Link className="btn-outline" to="/signin" onClick={() => setIsOpen(false)}>Sign In</Link></li>
          <li><Link className="btn-nav" to="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;