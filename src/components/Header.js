import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.nav-menu') && !event.target.closest('.hamburger')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e, type, target) => {
    if (type === 'section') {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      
      if (location.pathname !== '/') {
        window.location.href = `/#${target}`;
      } else {
        const section = document.getElementById(target);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header>
      <div className="container header-container">
        <Link to="/" className="logo">
          <i className="fas fa-university"></i>
          VS <span>Finance</span>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link 
                to="/finance-types" 
                className={isActive('/finance-types') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="fas fa-chart-pie"></i> Finance Types
              </Link>
            </li>
            
            <li>
              <a 
                href="#services"
                className={location.pathname === '/' && window.location.hash === '#services' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'section', 'services')}
              >
                <i className="fas fa-hand-holding-usd"></i> Services
              </a>
            </li>
            <li>
              <a 
                href="#security"
                className={location.pathname === '/' && window.location.hash === '#security' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'section', 'security')}
              >
                <i className="fas fa-shield-alt"></i> Security
              </a>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={isActive('/contact') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="fas fa-envelope"></i> Contact
              </Link>
            </li>
            
            {/* Mobile-only login button */}
            <li className="mobile-login">
              <Link 
                to="/client-login" 
                className="cta-button mobile"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="fas fa-user"></i> Client Login
              </Link>
            </li>

            {/* Mobile-only open account button */}
            <li className="mobile-open-account">
              <Link 
                to="/open-account" 
                className="cta-button secondary mobile"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="fas fa-plus"></i> Open Account
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="header-actions">
          <Link to="/open-account" className="cta-button secondary">
            <i className="fas fa-plus"></i> Open Account
          </Link>
          <Link to="/client-login" className="cta-button">
            <i className="fas fa-user"></i> Client Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}></div>
    </header>
  );
};

export default Header;