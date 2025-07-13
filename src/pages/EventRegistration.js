import React, { useState } from 'react';
import './EventRegistration.css';

const EventRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event: '',
    attendees: '1',
    specialRequirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const events = [
    { value: '', label: 'Select an event' },
    { value: 'health-wellness', label: 'Health & Wellness Workshop - July 15, 2024' },
    { value: 'nutrition', label: 'Nutrition Seminar - July 22, 2024' },
    { value: 'first-aid', label: 'First Aid Training - August 5, 2024' },
    { value: 'mental-health', label: 'Mental Health Awareness - August 12, 2024' },
    { value: 'diabetes', label: 'Diabetes Management - August 19, 2024' },
    { value: 'womens-health', label: 'Women\'s Health Forum - August 26, 2024' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Event registration submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        event: '',
        attendees: '1',
        specialRequirements: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="main-content">
      <section className="section">
        <div className="container">
          <div className="registration-header" data-aos="fade-up">
            <h1>Event Registration</h1>
            <p>
              Register for our upcoming events and workshops. Please fill out the form below 
              to secure your spot. We'll confirm your registration via email.
            </p>
          </div>

          <div className="registration-content">
            <div className="registration-form-section" data-aos="fade-right">
              <h2>Register for an Event</h2>
              <form onSubmit={handleSubmit} className="registration-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="event" className="form-label">Select Event *</label>
                  <select
                    id="event"
                    name="event"
                    value={formData.event}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    {events.map(event => (
                      <option key={event.value} value={event.value}>
                        {event.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="attendees" className="form-label">Number of Attendees</label>
                  <select
                    id="attendees"
                    name="attendees"
                    value={formData.attendees}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="specialRequirements" className="form-label">Special Requirements</label>
                  <textarea
                    id="specialRequirements"
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows="3"
                    placeholder="Any dietary restrictions, accessibility needs, or other special requirements..."
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="success">
                    Thank you for your registration! We'll send you a confirmation email with event details.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="error">
                    Sorry, there was an error processing your registration. Please try again.
                  </div>
                )}

                <button 
                  type="submit" 
                  className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Register for Event'}
                </button>
              </form>
            </div>

            <div className="registration-info" data-aos="fade-left">
              <h2>Registration Information</h2>
              
              <div className="registration-details">
                <div className="registration-detail">
                  <h3>📅 Event Details</h3>
                  <p>All events are held at our facility unless otherwise noted. Please arrive 15 minutes early.</p>
                </div>

                <div className="registration-detail">
                  <h3>💰 Cost</h3>
                  <p>Most events are free of charge. Some specialized training sessions may have a nominal fee.</p>
                </div>

                <div className="registration-detail">
                  <h3>📧 Confirmation</h3>
                  <p>You'll receive a confirmation email within 24 hours of registration.</p>
                </div>

                <div className="registration-detail">
                  <h3>❓ Questions?</h3>
                  <p>Contact us if you have any questions about our events or registration process.</p>
                </div>
              </div>

              <div className="registration-contact">
                <a href="/contact" className="btn btn-outline">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventRegistration; 