import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    closeMobileMenu();

    if (location.pathname !== '/') {
      // If not on home page, navigate to home page first with hash
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // If already on home page, scroll to section
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // Scroll to section after navigation (if coming from section click)
  useEffect(() => {
    if (location.state?.scrollTo && location.pathname === '/') {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
        // Clear the state to prevent repeated scrolling
        window.history.replaceState({}, document.title);
      }, 500);
    }
  }, [location]);

  return (
    <header>
      <div className="container">
        <div className="header-container">
          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            <i className="fas fa-university"></i>
            VS <span>Finance</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <div className="nav-menu">
              <ul>
                <li>
                  <Link 
                    to="/finance-types" 
                    className={isActive('/finance-types') ? 'active' : ''}
                  >
                    <i className="fas fa-chart-pie"></i>
                    Finance Types
                  </Link>
                </li>
                
                <li>
                  <a 
                    href="#services"
                    onClick={(e) => handleSectionClick(e, 'services')}
                    className={location.pathname === '/' && window.location.hash === '#services' ? 'active' : ''}
                  >
                    <i className="fas fa-hand-holding-usd"></i>
                    Services
                  </a>
                </li>
                
                <li>
                  <a 
                    href="#security"
                    onClick={(e) => handleSectionClick(e, 'security')}
                    className={location.pathname === '/' && window.location.hash === '#security' ? 'active' : ''}
                  >
                    <i className="fas fa-shield-alt"></i>
                    Security
                  </a>
                </li>
                
                <li>
                  <Link 
                    to="/contact" 
                    className={isActive('/contact') ? 'active' : ''}
                  >
                    <i className="fas fa-envelope"></i>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Desktop Header Actions */}
            <div className="header-actions">
              <Link to="/open-account" className="cta-button secondary">
                <i className="fas fa-plus"></i>
                Open Account
              </Link>
              <Link to="/client-login" className="cta-button">
                <i className="fas fa-user"></i>
                Client Login
              </Link>
            </div>
          </nav>

          {/* Hamburger Menu Button */}
          <button 
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        {/* Mobile Nav Header */}
        <div className="mobile-nav-header">
          <div className="mobile-logo">
            <i className="fas fa-university"></i>
            VS <span>Finance</span>
          </div>
          <button 
            className="mobile-close-btn"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Mobile Nav Content */}
        <div className="mobile-nav-content">
          <ul>
            <li>
              <Link 
                to="/finance-types" 
                className={isActive('/finance-types') ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                <i className="fas fa-chart-pie"></i>
                Finance Types
              </Link>
            </li>
            
            <li>
              <a 
                href="#services"
                onClick={(e) => handleSectionClick(e, 'services')}
                className={location.pathname === '/' && window.location.hash === '#services' ? 'active' : ''}
              >
                <i className="fas fa-hand-holding-usd"></i>
                Services
              </a>
            </li>
            
            <li>
              <a 
                href="#security"
                onClick={(e) => handleSectionClick(e, 'security')}
                className={location.pathname === '/' && window.location.hash === '#security' ? 'active' : ''}
              >
                <i className="fas fa-shield-alt"></i>
                Security
              </a>
            </li>
            
            <li>
              <Link 
                to="/contact" 
                className={isActive('/contact') ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                <i className="fas fa-envelope"></i>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Nav Actions */}
        <div className="mobile-nav-actions">
          <Link 
            to="/client-login" 
            className="cta-button mobile"
            onClick={closeMobileMenu}
          >
            <i className="fas fa-user"></i>
            Client Login
          </Link>
          <Link 
            to="/open-account" 
            className="cta-button secondary mobile"
            onClick={closeMobileMenu}
          >
            <i className="fas fa-plus"></i>
            Open Account
          </Link>
        </div>

        {/* Mobile Contact Info */}
        <div className="mobile-contact-info">
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span>1-800-FINANCE</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>support@vsfinance.com</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-clock"></i>
            <span>Mon-Fri: 9AM-6PM</span>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div 
        className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>
    </header>
  );
};

export default Header;