import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { path: '/medical-services', label: 'Medical & Private Services' },
      { path: '/minor-surgery', label: 'Minor Surgery' },
      { path: '/nutrition', label: 'Nutrition' },
      { path: '/workshops', label: 'Workshops & Trainings' }
    ],
    information: [
      { path: '/events', label: 'Events' },
      { path: '/useful-info', label: 'Useful Info' },
      { path: '/contact', label: 'Contact' },
      { path: '/map', label: 'Map' }
    ],
    legal: [
      { path: '/imprint', label: 'Imprint' },
      { path: '/privacy-policy', label: 'Privacy Policy' }
    ]
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Contact Information */}
          <div className="footer__section">
            <h3 className="footer__title">Hausarzt Nord</h3>
            <div className="footer__contact">
              <p>
                <strong>Address:</strong><br />
                Nordstraße 123<br />
                1234 Vienna, Austria
              </p>
              <p>
                <strong>Phone:</strong><br />
                <a href="tel:+43123456789">+43 1 234 56 789</a>
              </p>
              <p>
                <strong>Email:</strong><br />
                <a href="mailto:info@hausarzt-nord.at">info@hausarzt-nord.at</a>
              </p>
              <p>
                <strong>Opening Hours:</strong><br />
                Mon-Fri: 8:00 AM - 6:00 PM<br />
                Sat: 9:00 AM - 12:00 PM<br />
                Sun: Closed
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="footer__section">
            <h3 className="footer__title">Services</h3>
            <ul className="footer__links">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="footer__section">
            <h3 className="footer__title">Information</h3>
            <ul className="footer__links">
              {footerLinks.information.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="footer__section">
            <h3 className="footer__title">Legal</h3>
            <ul className="footer__links">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © {currentYear} Hausarzt Nord. All rights reserved.
            </p>
            <div className="footer__social">
              {/* Social media links can be added here */}
              <button aria-label="Facebook" className="footer__social-link">
                <span className="sr-only">Facebook</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button aria-label="Instagram" className="footer__social-link">
                <span className="sr-only">Instagram</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 