import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detect iOS for map link
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));
  }, []);

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
      
      // Here you would normally send the data to your API
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openInMaps = () => {
    const address = encodeURIComponent('Nordstraße 123, 1234 Vienna, Austria');
    const mapUrl = isIOS 
      ? `https://maps.apple.com/?q=${address}`
      : `https://www.google.com/maps/search/?api=1&query=${address}`;
    
    window.open(mapUrl, '_blank');
  };

  const subjectOptions = [
    { value: '', label: 'Select a subject' },
    { value: 'appointment', label: 'Book Appointment' },
    { value: 'general', label: 'General Inquiry' },
    { value: 'services', label: 'Services Information' },
    { value: 'events', label: 'Events & Workshops' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div id="main-content">
      <section className="section">
        <div className="container">
          <div className="contact-header" data-aos="fade-up">
            <h1>Contact Us</h1>
            <p>
              Get in touch with us for appointments, inquiries, or any questions you may have. 
              We're here to help you with your healthcare needs.
            </p>
          </div>

          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section" data-aos="fade-right">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    aria-describedby="name-help"
                  />
                  <div id="name-help" className="sr-only">Please enter your full name</div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    aria-describedby="email-help"
                  />
                  <div id="email-help" className="sr-only">Please enter a valid email address</div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    aria-describedby="phone-help"
                  />
                  <div id="phone-help" className="sr-only">Please enter your phone number (optional)</div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                    aria-describedby="subject-help"
                  >
                    {subjectOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div id="subject-help" className="sr-only">Please select a subject for your message</div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows="5"
                    required
                    aria-describedby="message-help"
                  ></textarea>
                  <div id="message-help" className="sr-only">Please enter your message</div>
                </div>

                {submitStatus === 'success' && (
                  <div className="success">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="error">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}

                <button 
                  type="submit" 
                  className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section" data-aos="fade-left">
              <h2>Get in Touch</h2>
              
              <div className="contact-info">
                <div className="contact-info__item">
                  <div className="contact-info__icon">📍</div>
                  <div className="contact-info__content">
                    <h3>Address</h3>
                    <p>Nordstraße 123<br />1234 Vienna, Austria</p>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__icon">📞</div>
                  <div className="contact-info__content">
                    <h3>Phone</h3>
                    <p><a href="tel:+43123456789">+43 1 234 56 789</a></p>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__icon">✉️</div>
                  <div className="contact-info__content">
                    <h3>Email</h3>
                    <p><a href="mailto:info@hausarzt-nord.at">info@hausarzt-nord.at</a></p>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__icon">🕒</div>
                  <div className="contact-info__content">
                    <h3>Opening Hours</h3>
                    <p>
                      <strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM<br />
                      <strong>Saturday:</strong> 9:00 AM - 12:00 PM<br />
                      <strong>Sunday:</strong> Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-actions">
                <button onClick={openInMaps} className="btn btn-outline">
                  Open in {isIOS ? 'Apple Maps' : 'Google Maps'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section section--light">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Find Our Location</h2>
          <div className="map-container" data-aos="fade-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.1234567890123!2d16.12345678901234!3d48.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDA3JzM0LjQiTiAxNsKwMDcnMzQuNCJF!5e0!3m2!1sen!2sat!4v1234567890123"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hausarzt Nord Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 