import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const featuredServices = [
    {
      title: t('nav.medical'),
      description: 'Comprehensive medical care and private health services tailored to your needs.',
      path: '/medical-services',
      icon: '🏥'
    },
    {
      title: t('nav.surgery'),
      description: 'Professional minor surgical procedures in a safe and comfortable environment.',
      path: '/minor-surgery',
      icon: '⚕️'
    },
    {
      title: t('nav.nutrition'),
      description: 'Expert nutritional guidance to support your health and wellness journey.',
      path: '/nutrition',
      icon: '🥗'
    },
    {
      title: t('nav.workshops'),
      description: 'Educational workshops and training sessions for better health awareness.',
      path: '/workshops',
      icon: '📚'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Health & Wellness Workshop', // TODO: Add translation key if needed
      date: 'July 15, 2024',
      time: '2:00 PM - 4:00 PM',
      description: 'Join us for an informative session on maintaining a healthy lifestyle.',
      path: '/events'
    },
    {
      title: 'Nutrition Seminar', // TODO: Add translation key if needed
      date: 'July 22, 2024',
      time: '6:00 PM - 7:30 PM',
      description: 'Learn about balanced nutrition and dietary recommendations.',
      path: '/events'
    }
  ];

  return (
    <div id="main-content">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero__content" data-aos="fade-up">
            <h1 className="hero__title">{t('hero.welcome')}</h1>
            <p className="hero__subtitle">{t('hero.subtitle')}</p>
            <div className="hero__buttons">
              <Link to="/contact" className="btn btn-primary">
                {t('hero.book')}
              </Link>
              <Link to="/medical-services" className="btn btn-outline">
                {t('hero.services')}
              </Link>
              <Link to="/about" className="btn btn-tertiary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Meet the Team</h2>
          <div className="team-grid">
            <div className="team-card" data-aos="fade-up">
              <div className="team-avatar" aria-label="Dr. Sidhu, General Practitioner">👨‍⚕️</div>
              <h3 className="team-name">Dr. Sidhu</h3>
              <div className="team-role">General Practitioner</div>
              <div className="team-languages">Languages: Deutsch, English, Punjabi, Hindi, Urdu, Russian</div>
              <p className="team-bio">"As your family doctor, I am your first point of contact for all health concerns. I look forward to building a respectful, trusting relationship with you."</p>
            </div>
            <div className="team-card" data-aos="fade-up" data-aos-delay="100">
              <div className="team-avatar" aria-label="Dr. Khatra, General Practitioner">👩‍⚕️</div>
              <h3 className="team-name">Dr. Khatra</h3>
              <div className="team-role">General Practitioner</div>
              <div className="team-languages">Languages: Deutsch, English, Hindi, Panjabi, Urdu, Russian</div>
              <p className="team-bio">"With years of experience in general and specialized medicine, I am dedicated to your health and well-being."</p>
            </div>
            <div className="team-card" data-aos="fade-up" data-aos-delay="200">
              <div className="team-avatar" aria-label="Melanie, Practice Manager">👩‍💼</div>
              <h3 className="team-name">Melanie</h3>
              <div className="team-role">Practice Manager</div>
              <div className="team-languages">Languages: Deutsch, English</div>
              <p className="team-bio">"I am here to make your visit as pleasant as possible and help with all organizational matters."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="section philosophy-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Our Philosophy</h2>
          <div className="philosophy-content" data-aos="fade-up">
            <p>
              Your health is your most valuable asset. We accompany you on your therapy journey and offer you the best possible treatment. Helping you is both our profession and our calling. We are always committed to making your visit as pleasant as possible, supporting you with respect and empathy.
            </p>
          </div>
        </div>
      </section>

      {/* Accessibility & Directions Section */}
      <section className="section access-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Accessibility & Directions</h2>
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

      {/* Patient Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">What Our Patients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card" data-aos="fade-up">
              <div className="testimonial-avatar" aria-label="Patient">🧑‍🦱</div>
              <blockquote className="testimonial-quote">“The doctors and staff are so caring and attentive. I always feel listened to and well taken care of.”</blockquote>
              <div className="testimonial-name">— Anna S.</div>
            </div>
            <div className="testimonial-card" data-aos="fade-up" data-aos-delay="100">
              <div className="testimonial-avatar" aria-label="Patient">🧑‍🦰</div>
              <blockquote className="testimonial-quote">“Modern practice, friendly team, and great accessibility. Highly recommended!”</blockquote>
              <div className="testimonial-name">— Markus L.</div>
            </div>
            <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
              <div className="testimonial-avatar" aria-label="Patient">🧑‍🦳</div>
              <blockquote className="testimonial-quote">“I appreciate the multilingual team and the respectful, warm atmosphere.”</blockquote>
              <div className="testimonial-name">— Elena R.</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content" data-aos="fade-right">
              <h2>About Hausarzt Nord</h2>
              <p>
                At Hausarzt Nord, we are committed to providing high-quality healthcare 
                services in a welcoming and professional environment. Our team of experienced 
                medical professionals is dedicated to your health and well-being.
              </p>
              <p>
                We offer a comprehensive range of medical services, from routine check-ups 
                to specialized treatments, all designed to meet your individual healthcare needs.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="about-image" data-aos="fade-left">
              <div className="about-image__placeholder">
                <span>🏥</span>
                <p>Modern Medical Facility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section section--light">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Our Services</h2>
          <div className="services-grid">
            {featuredServices.map((service, index) => (
              <div key={service.path} className="service-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="service-card__icon">{service.icon}</div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
                <Link to={service.path} className="btn btn-outline">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Upcoming Events</h2>
          <div className="events-grid">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="event-card__header">
                  <h3 className="event-card__title">{event.title}</h3>
                  <div className="event-card__date">
                    <span className="event-card__date-text">{event.date}</span>
                    <span className="event-card__time">{event.time}</span>
                  </div>
                </div>
                <p className="event-card__description">{event.description}</p>
                <Link to={event.path} className="btn btn-primary">
                  Register Now
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/events" className="btn btn-outline">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section section--accent">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>Ready to Get Started?</h2>
            <p>
              Contact us today to schedule an appointment or learn more about our services. 
              We're here to help you achieve optimal health and wellness.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link to="/map" className="btn btn-outline">
                Find Our Location
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 