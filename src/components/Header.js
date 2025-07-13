import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleDropdownMouseEnter = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  const handleDropdownMouseLeave = () => {
    setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  // Updated navigation items with new pages
  const navigationItems = [
    { key: 'home', path: '/', label: 'Home' },
    {
      key: 'about',
      path: '/about',
      label: 'About',
      hasDropdown: true,
      dropdownItems: [
        { key: 'team', path: '/team', label: 'Team' },
        { key: 'philosophy', path: '/philosophy', label: 'Philosophy' },
      ]
    },
    {
      key: 'services',
      path: '/services',
      label: 'Services',
      hasDropdown: true,
      dropdownItems: [
        { key: 'medical', path: '/medical-services', label: t('nav.medical') },
        { key: 'surgery', path: '/minor-surgery', label: t('nav.surgery') },
        { key: 'nutrition', path: '/nutrition', label: t('nav.nutrition') },
        { key: 'workshops', path: '/workshops', label: t('nav.workshops') },
      ]
    },
    {
      key: 'patient-info',
      path: '/patient-info',
      label: 'Patient Info',
      hasDropdown: true,
      dropdownItems: [
        { key: 'accessibility', path: '/accessibility', label: 'Accessibility' },
        { key: 'testimonials', path: '/testimonials', label: 'Testimonials' },
        { key: 'info', path: '/useful-info', label: t('nav.info') },
      ]
    },
    { key: 'events', path: '/events', label: 'Events' },
    {
      key: 'contact',
      path: '/contact',
      label: 'Contact',
      hasDropdown: true,
      dropdownItems: [
        { key: 'contact-form', path: '/contact-form', label: 'Contact Form' },
        { key: 'map', path: '/map', label: t('nav.map') },
      ]
    },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          {/* Logo */}
          <Link to="/" className="header__logo">
            <div className="header__logo-icon">
              🏥
            </div>
            <h1>Hausarzt Nord</h1>
          </Link>

          {/* Navigation */}
          <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
            <ul className="header__nav-list">
              {navigationItems.map((item) => (
                <li 
                  key={item.key} 
                  className={`header__nav-item ${item.hasDropdown ? 'header__nav-item--has-subnav' : ''}`}
                  onMouseEnter={item.hasDropdown ? () => handleDropdownMouseEnter(item.key) : undefined}
                  onMouseLeave={item.hasDropdown ? handleDropdownMouseLeave : undefined}
                >
                  {item.hasDropdown ? (
                    <>
                      <button
                        className={`header__nav-link header__nav-link--dropdown ${isActive(item.path) ? 'header__nav-link--active' : ''}`}
                        onClick={() => toggleDropdown(item.key)}
                        aria-expanded={activeDropdown === item.key}
                      >
                        {item.label}
                        <span className="header__nav-caret">▼</span>
                      </button>
                      <ul className={`header__subnav ${activeDropdown === item.key ? 'header__subnav--open' : ''}`}>
                        {item.dropdownItems.map((dropdownItem) => (
                          <li key={dropdownItem.key} className="header__subnav-item">
                            <Link
                              to={dropdownItem.path}
                              className={`header__subnav-link ${isActive(dropdownItem.path) ? 'header__nav-link--active' : ''}`}
                            >
                              {dropdownItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`header__nav-link ${isActive(item.path) ? 'header__nav-link--active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Language Switcher */}
            <div className="header__lang-switcher">
              <button
                className={`lang-btn ${i18n.language === 'en' ? 'lang-btn--active' : ''}`}
                onClick={() => i18n.changeLanguage('en')}
                aria-label="Switch to English"
              >
                {t('lang.en')}
              </button>
              <button
                className={`lang-btn ${i18n.language === 'de' ? 'lang-btn--active' : ''}`}
                onClick={() => i18n.changeLanguage('de')}
                aria-label="Switch to German"
              >
                {t('lang.de')}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`header__menu-toggle ${isMenuOpen ? 'header__menu-toggle--open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="header__menu-toggle-line"></span>
            <span className="header__menu-toggle-line"></span>
            <span className="header__menu-toggle-line"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 