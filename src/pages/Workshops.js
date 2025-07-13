import React from 'react';
import { Link } from 'react-router-dom';
import './Workshops.css';

const Workshops = () => {
  const workshops = [
    {
      title: 'Health & Wellness Workshop',
      date: 'July 15, 2024',
      time: '2:00 PM - 4:00 PM',
      description: 'Learn about maintaining a healthy lifestyle through proper nutrition, exercise, and stress management.',
      icon: '🏥'
    },
    {
      title: 'Nutrition Seminar',
      date: 'July 22, 2024',
      time: '6:00 PM - 7:30 PM',
      description: 'Discover the fundamentals of balanced nutrition and how to make healthier food choices.',
      icon: '🥗'
    },
    {
      title: 'First Aid Training',
      date: 'August 5, 2024',
      time: '10:00 AM - 2:00 PM',
      description: 'Essential first aid skills for emergencies, including CPR and basic life support.',
      icon: '🆘'
    },
    {
      title: 'Mental Health Awareness',
      date: 'August 12, 2024',
      time: '3:00 PM - 5:00 PM',
      description: 'Understanding mental health, stress management, and building resilience.',
      icon: '🧠'
    }
  ];

  return (
    <div id="main-content">
      <section className="section">
        <div className="container">
          <div className="workshops-header" data-aos="fade-up">
            <h1>Workshops & Trainings</h1>
            <p>
              Join our educational workshops and training sessions designed to help you 
              take control of your health and well-being. Our programs are led by 
              experienced healthcare professionals.
            </p>
          </div>

          <div className="workshops-grid">
            {workshops.map((workshop, index) => (
              <div key={workshop.title} className="workshop-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="workshop-card__icon">{workshop.icon}</div>
                <h3 className="workshop-card__title">{workshop.title}</h3>
                <div className="workshop-card__date">
                  <span className="workshop-card__date-text">{workshop.date}</span>
                  <span className="workshop-card__time">{workshop.time}</span>
                </div>
                <p className="workshop-card__description">{workshop.description}</p>
                <Link to="/event-registration" className="btn btn-primary">
                  Register Now
                </Link>
              </div>
            ))}
          </div>

          <div className="workshops-cta" data-aos="fade-up">
            <div className="workshops-cta__content">
              <h2>Interested in Our Workshops?</h2>
              <p>
                Contact us to learn more about upcoming workshops or to request a 
                custom training session for your group or organization.
              </p>
              <div className="workshops-cta__buttons">
                <Link to="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
                <Link to="/events" className="btn btn-outline">
                  View All Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshops; 