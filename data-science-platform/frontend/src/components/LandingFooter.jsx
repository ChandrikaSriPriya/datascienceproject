import React from 'react';

const LandingFooter = () => {
  return (
    <footer className="site-footer landing-footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Data Science Platform. All rights reserved.</p>
        <p>
          <a href="#about">About</a>|
          <a href="#contact">Contact</a>|
          <a href="/privacy-policy">Privacy Policy</a>|
          <a href="/terms-of-service">Terms & Conditions</a>
        </p>
        <div className="footer-social">
          <a href="#" aria-label="Twitter">🐦</a>
          <a href="#" aria-label="LinkedIn">🔗</a>
          <a href="#" aria-label="GitHub">🐙</a>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
