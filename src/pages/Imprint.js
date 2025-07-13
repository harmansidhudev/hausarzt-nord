import React from 'react';
import './Imprint.css';

const Imprint = () => {
  return (
    <div id="main-content">
      <section className="section">
        <div className="container">
          <div className="imprint-header" data-aos="fade-up">
            <h1>Imprint</h1>
            <p>Legal information and contact details for Hausarzt Nord.</p>
          </div>

          <div className="imprint-content" data-aos="fade-up">
            <div className="imprint-section">
              <h2>Practice Information</h2>
              <div className="imprint-details">
                <div className="imprint-item">
                  <strong>Practice Name:</strong>
                  <p>Hausarzt Nord</p>
                </div>
                <div className="imprint-item">
                  <strong>Address:</strong>
                  <p>Nordstraße 123<br />1234 Vienna, Austria</p>
                </div>
                <div className="imprint-item">
                  <strong>Phone:</strong>
                  <p><a href="tel:+43123456789">+43 1 234 56 789</a></p>
                </div>
                <div className="imprint-item">
                  <strong>Email:</strong>
                  <p><a href="mailto:info@hausarzt-nord.at">info@hausarzt-nord.at</a></p>
                </div>
                <div className="imprint-item">
                  <strong>Website:</strong>
                  <p><a href="https://hausarzt-nord.at">https://hausarzt-nord.at</a></p>
                </div>
              </div>
            </div>

            <div className="imprint-section">
              <h2>Medical License</h2>
              <div className="imprint-details">
                <div className="imprint-item">
                  <strong>Medical License Number:</strong>
                  <p>AT-123456789</p>
                </div>
                <div className="imprint-item">
                  <strong>Chamber:</strong>
                  <p>Ärztekammer für Wien</p>
                </div>
                <div className="imprint-item">
                  <strong>Specialization:</strong>
                  <p>General Practice / Family Medicine</p>
                </div>
              </div>
            </div>

            <div className="imprint-section">
              <h2>Legal Information</h2>
              <div className="imprint-details">
                <div className="imprint-item">
                  <strong>Business Registration:</strong>
                  <p>Registered with the Vienna Commercial Court</p>
                </div>
                <div className="imprint-item">
                  <strong>VAT Number:</strong>
                  <p>ATU12345678</p>
                </div>
                <div className="imprint-item">
                  <strong>Professional Liability Insurance:</strong>
                  <p>Covered by Ärztekammer für Wien</p>
                </div>
              </div>
            </div>

            <div className="imprint-section">
              <h2>Disclaimer</h2>
              <p>
                The information provided on this website is for general informational purposes only. 
                It is not intended as medical advice and should not be relied upon as a substitute 
                for professional medical consultation, diagnosis, or treatment.
              </p>
              <p>
                Always seek the advice of your physician or other qualified health provider with 
                any questions you may have regarding a medical condition. Never disregard professional 
                medical advice or delay in seeking it because of something you have read on this website.
              </p>
            </div>

            <div className="imprint-section">
              <h2>Copyright</h2>
              <p>
                © 2024 Hausarzt Nord. All rights reserved. The content of this website is protected 
                by copyright law. Reproduction or distribution of any content without written permission 
                is prohibited.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Imprint; 