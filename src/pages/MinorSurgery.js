import React from 'react';
import { Link } from 'react-router-dom';
import './MinorSurgery.css';

const MinorSurgery = () => {
  const procedures = [
    {
      title: 'Skin Lesion Removal',
      description: 'Safe removal of moles, warts, and other skin growths with minimal scarring.',
      icon: '🩹'
    },
    {
      title: 'Cyst Excision',
      description: 'Professional removal of cysts and lipomas under local anesthesia.',
      icon: '⚕️'
    },
    {
      title: 'Joint Injections',
      description: 'Therapeutic injections for joint pain and inflammation management.',
      icon: '💉'
    },
    {
      title: 'Wound Care',
      description: 'Expert treatment of cuts, burns, and other minor injuries.',
      icon: '🩺'
    }
  ];

  const facilities = [
    {
      title: 'Sterile Environment',
      description: 'State-of-the-art surgical suite with strict sterilization protocols.',
      icon: '🏥'
    },
    {
      title: 'Local Anesthesia',
      description: 'Comfortable procedures with effective local anesthesia options.',
      icon: '💊'
    },
    {
      title: 'Post-Procedure Care',
      description: 'Comprehensive follow-up care and wound management instructions.',
      icon: '📋'
    }
  ];

  return (
    <div id="main-content">
      <section className="section">
        <div className="container">
          <div className="surgery-header" data-aos="fade-up">
            <h1>Minor Surgery</h1>
            <p>
              Our minor surgery services are performed in a safe, sterile environment 
              by experienced medical professionals. We use the latest techniques and 
              equipment to ensure optimal outcomes and patient comfort.
            </p>
          </div>

          <div className="surgery-content">
            <div className="surgery-info" data-aos="fade-right">
              <h2>Our Surgical Services</h2>
              <p>
                We offer a range of minor surgical procedures that can be performed 
                in our office setting. All procedures are conducted under strict 
                medical protocols to ensure your safety and comfort.
              </p>
              <p>
                Our surgical team is experienced in various minor procedures and 
                uses modern techniques to minimize discomfort and promote quick recovery.
              </p>
            </div>

            <div className="surgery-image" data-aos="fade-left">
              <div className="surgery-image__placeholder">
                <span>🏥</span>
                <p>Modern Surgical Suite</p>
              </div>
            </div>
          </div>

          {/* Procedures */}
          <div className="procedures-section" data-aos="fade-up">
            <h2 className="section-title">Available Procedures</h2>
            <div className="procedures-grid">
              {procedures.map((procedure, index) => (
                <div key={procedure.title} className="procedure-card" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="procedure-card__icon">{procedure.icon}</div>
                  <h3 className="procedure-card__title">{procedure.title}</h3>
                  <p className="procedure-card__description">{procedure.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Facilities */}
          <div className="facilities-section section--light" data-aos="fade-up">
            <div className="container">
              <h2 className="section-title">Our Facilities</h2>
              <div className="facilities-grid">
                {facilities.map((facility, index) => (
                  <div key={facility.title} className="facility-card" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="facility-card__icon">{facility.icon}</div>
                    <h3 className="facility-card__title">{facility.title}</h3>
                    <p className="facility-card__description">{facility.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="surgery-cta" data-aos="fade-up">
            <div className="surgery-cta__content">
              <h2>Ready to Schedule Your Procedure?</h2>
              <p>
                Contact us to discuss your surgical needs and schedule a consultation. 
                We'll provide you with detailed information about the procedure and 
                answer any questions you may have.
              </p>
              <div className="surgery-cta__buttons">
                <Link to="/contact" className="btn btn-primary">
                  Schedule Consultation
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MinorSurgery; 