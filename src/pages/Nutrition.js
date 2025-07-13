import React from 'react';
import { Link } from 'react-router-dom';
import './Nutrition.css';

const Nutrition = () => {
  const services = [
    {
      title: 'Personalized Nutrition Plans',
      description: 'Customized meal plans tailored to your health goals and dietary preferences.',
      icon: '📋'
    },
    {
      title: 'Weight Management',
      description: 'Comprehensive programs for healthy weight loss and maintenance.',
      icon: '⚖️'
    },
    {
      title: 'Medical Nutrition Therapy',
      description: 'Specialized nutrition support for diabetes, heart disease, and other conditions.',
      icon: '💊'
    },
    {
      title: 'Sports Nutrition',
      description: 'Performance-focused nutrition guidance for athletes and active individuals.',
      icon: '🏃‍♂️'
    }
  ];

  return (
    <div id="main-content">
      <section className="section">
        <div className="container">
          <div className="nutrition-header" data-aos="fade-up">
            <h1>Nutrition Counseling</h1>
            <p>
              Our nutrition services help you develop healthy eating habits and achieve 
              your health goals through personalized guidance and evidence-based recommendations.
            </p>
          </div>

          <div className="nutrition-content">
            <div className="nutrition-info" data-aos="fade-right">
              <h2>Comprehensive Nutrition Support</h2>
              <p>
                Our registered dietitians provide expert nutrition counseling to help you 
                make informed food choices that support your health and wellness goals.
              </p>
              <p>
                Whether you're looking to manage a medical condition, improve your athletic 
                performance, or simply adopt healthier eating habits, we're here to guide you.
              </p>
            </div>

            <div className="nutrition-image" data-aos="fade-left">
              <div className="nutrition-image__placeholder">
                <span>🥗</span>
                <p>Healthy Nutrition</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="nutrition-services" data-aos="fade-up">
            <h2 className="section-title">Our Nutrition Services</h2>
            <div className="nutrition-services__grid">
              {services.map((service, index) => (
                <div key={service.title} className="nutrition-service-card" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="nutrition-service-card__icon">{service.icon}</div>
                  <h3 className="nutrition-service-card__title">{service.title}</h3>
                  <p className="nutrition-service-card__description">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="nutrition-cta" data-aos="fade-up">
            <div className="nutrition-cta__content">
              <h2>Start Your Nutrition Journey</h2>
              <p>
                Contact us to schedule a nutrition consultation and take the first step 
                toward better health through improved nutrition.
              </p>
              <div className="nutrition-cta__buttons">
                <Link to="/contact" className="btn btn-primary">
                  Schedule Consultation
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nutrition; 