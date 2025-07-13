import React from 'react';
import './Home.css';

const Accessibility = () => (
  <div id="main-content">
    <section className="section access-section">
      <div className="container">
        <h1 className="section-title" data-aos="fade-up">Accessibility & Directions</h1>
        <div className="access-grid">
          <div className="access-card" data-aos="fade-up">
            <div className="access-icon" aria-label="Parking">🅿️</div>
            <h3 className="access-title">Parking</h3>
            <p className="access-desc">Paid parking available directly behind the building.</p>
          </div>
          <div className="access-card" data-aos="fade-up" data-aos-delay="100">
            <div className="access-icon" aria-label="Public Transport">🚋</div>
            <h3 className="access-title">Public Transport</h3>
            <p className="access-desc">Tram: 30, 31 | S-Bahn: S3, S4 | Bus: 228, 420, 426, 431 (Stop: Brünner Straße)</p>
          </div>
          <div className="access-card" data-aos="fade-up" data-aos-delay="200">
            <div className="access-icon" aria-label="Accessibility">♿</div>
            <h3 className="access-title">Accessible Practice</h3>
            <p className="access-desc">Step-free access, elevator, accessible restroom, and assistance available.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Accessibility; 