import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Data Science Platform. All rights reserved.</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a>|
          <a href="/terms-of-service">Terms of Service</a>
        </p>
        <div className="footer-actions">
          <a className="btn-outline" href="/signin">Sign In</a>
          <a className="btn-nav" href="/signup">Sign Up</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;