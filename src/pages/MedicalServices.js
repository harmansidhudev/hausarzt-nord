import React from 'react';
import { Link } from 'react-router-dom';
import './MedicalServices.css';

const MedicalServices = () => {
  const services = [
    {
      category: 'General Medical Care',
      items: [
        {
          title: 'Preventive Care',
          description: 'Regular check-ups, vaccinations, and health screenings to maintain your well-being.',
          icon: '🩺'
        },
        {
          title: 'Diagnostic Services',
          description: 'Comprehensive diagnostic testing including blood work, imaging, and specialized tests.',
          icon: '🔬'
        },
        {
          title: 'Chronic Disease Management',
          description: 'Ongoing care and treatment for chronic conditions like diabetes, hypertension, and more.',
          icon: '💊'
        }
      ]
    },
    {
      category: 'Specialized Services',
      items: [
        {
          title: 'Cardiology',
          description: 'Heart health assessments, ECG monitoring, and cardiovascular disease management.',
          icon: '❤️'
        },
        {
          title: 'Dermatology',
          description: 'Skin condition diagnosis and treatment, including mole checks and skin cancer screening.',
          icon: '🩹'
        },
        {
          title: 'Gynecology',
          description: 'Women\'s health services including annual exams, family planning, and gynecological care.',
          icon: '👩‍⚕️'
        },
        {
          title: 'Pediatrics',
          description: 'Comprehensive healthcare for children from birth through adolescence.',
          icon: '👶'
        }
      ]
    },
    {
      category: 'Private Health Services',
      items: [
        {
          title: 'Executive Health Screenings',
          description: 'Comprehensive health assessments designed for busy professionals.',
          icon: '💼'
        },
        {
          title: 'Travel Medicine',
          description: 'Pre-travel consultations, vaccinations, and health advice for international travel.',
          icon: '✈️'
        },
        {
          title: 'Sports Medicine',
          description: 'Injury prevention, treatment, and rehabilitation for athletes and active individuals.',
          icon: '🏃‍♂️'
        }
      ]
    }
  ];

  const additionalServices = [
    {
      title: 'Minor Surgery',
      description: 'Professional minor surgical procedures in our state-of-the-art facility.',
      path: '/minor-surgery',
      icon: '⚕️'
    },
    {
      title: 'Nutrition Counseling',
      description: 'Personalized nutrition guidance to support your health goals.',
      path: '/nutrition',
      icon: '🥗'
    },
    {
      title: 'Workshops & Trainings',
      description: 'Educational programs to help you take control of your health.',
      path: '/workshops',
      icon: '📚'
    }
  ];

  return (
    <div id="main-content">
      <section className="section">
        <div className="container">
          <div className="services-header" data-aos="fade-up">
            <h1>Medical & Private Services</h1>
            <p>
              We offer comprehensive medical care and specialized private health services 
              to meet all your healthcare needs. Our experienced team is committed to 
              providing personalized, high-quality care in a comfortable environment.
            </p>
          </div>

          {/* Service Categories */}
          {services.map((category, categoryIndex) => (
            <div key={category.category} className="service-category" data-aos="fade-up" data-aos-delay={categoryIndex * 100}>
              <h2 className="service-category__title">{category.category}</h2>
              <div className="service-category__grid">
                {category.items.map((service, serviceIndex) => (
                  <div key={service.title} className="service-item" data-aos="fade-up" data-aos-delay={serviceIndex * 50}>
                    <div className="service-item__icon">{service.icon}</div>
                    <h3 className="service-item__title">{service.title}</h3>
                    <p className="service-item__description">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Additional Services */}
          <div className="additional-services" data-aos="fade-up">
            <h2 className="section-title">Additional Services</h2>
            <div className="additional-services__grid">
              {additionalServices.map((service, index) => (
                <div key={service.path} className="additional-service-card" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="additional-service-card__icon">{service.icon}</div>
                  <h3 className="additional-service-card__title">{service.title}</h3>
                  <p className="additional-service-card__description">{service.description}</p>
                  <Link to={service.path} className="btn btn-outline">
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="services-cta" data-aos="fade-up">
            <div className="services-cta__content">
              <h2>Ready to Schedule an Appointment?</h2>
              <p>
                Contact us today to book your appointment or learn more about our services. 
                We're here to help you achieve optimal health and wellness.
              </p>
              <div className="services-cta__buttons">
                <Link to="/contact" className="btn btn-primary">
                  Book Appointment
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

export default MedicalServices; 