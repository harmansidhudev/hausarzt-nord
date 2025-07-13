import React from 'react';
import { Link } from 'react-router-dom';
import './Events.css';

const Events = () => {
  const events = [
    {
      title: 'Health & Wellness Workshop',
      date: 'July 15, 2024',
      time: '2:00 PM - 4:00 PM',
      description: 'Join us for an informative session on maintaining a healthy lifestyle through proper nutrition, exercise, and stress management.',
      category: 'Workshop',
      icon: '🏥'
    },
    {
      title: 'Nutrition Seminar',
      date: 'July 22, 2024',
      time: '6:00 PM - 7:30 PM',
      description: 'Learn about balanced nutrition and dietary recommendations for optimal health.',
      category: 'Seminar',
      icon: '🥗'
    },
    {
      title: 'First Aid Training',
      date: 'August 5, 2024',
      time: '10:00 AM - 2:00 PM',
      description: 'Essential first aid skills for emergencies, including CPR and basic life support techniques.',
      category: 'Training',
      icon: '🆘'
    },
    {
      title: 'Mental Health Awareness',
      date: 'August 12, 2024',
      time: '3:00 PM - 5:00 PM',
      description: 'Understanding mental health, stress management, and building resilience in daily life.',
      category: 'Workshop',
      icon: '🧠'
    },
    {
      title: 'Diabetes Management',
      date: 'August 19, 2024',
      time: '1:00 PM - 3:00 PM',
      description: 'Comprehensive guide to managing diabetes through diet, exercise, and medication.',
      category: 'Educational',
      icon: '💊'
    },
    {
      title: 'Women\'s Health Forum',
      date: 'August 26, 2024',
      time: '6:00 PM - 8:00 PM',
      description: 'Open discussion on women\'s health topics and preventive care strategies.',
      category: 'Forum',
      icon: '👩‍⚕️'
    }
  ];

  return (
    <div id="main-content">
      <section className="section">
        <div className="container">
          <div className="events-header" data-aos="fade-up">
            <h1>Events</h1>
            <p>
              Stay updated with our upcoming events, workshops, and community health programs. 
              Join us for educational sessions and networking opportunities.
            </p>
          </div>

          <div className="events-grid">
            {events.map((event, index) => (
              <div key={event.title} className="event-item" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="event-item__header">
                  <div className="event-item__icon">{event.icon}</div>
                  <div className="event-item__meta">
                    <span className="event-item__category">{event.category}</span>
                    <div className="event-item__date">
                      <span className="event-item__date-text">{event.date}</span>
                      <span className="event-item__time">{event.time}</span>
                    </div>
                  </div>
                </div>
                <h3 className="event-item__title">{event.title}</h3>
                <p className="event-item__description">{event.description}</p>
                <Link to="/event-registration" className="btn btn-primary">
                  Register Now
                </Link>
              </div>
            ))}
          </div>

          <div className="events-cta" data-aos="fade-up">
            <div className="events-cta__content">
              <h2>Don't Miss Out!</h2>
              <p>
                Register early to secure your spot in our upcoming events. Space is limited 
                to ensure a quality learning experience for all participants.
              </p>
              <div className="events-cta__buttons">
                <Link to="/event-registration" className="btn btn-primary">
                  Register for Events
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

export default Events; 