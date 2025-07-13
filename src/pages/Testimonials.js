import React from 'react';
import './Home.css';

const Testimonials = () => (
  <div id="main-content">
    <section className="section testimonials-section">
      <div className="container">
        <h1 className="section-title" data-aos="fade-up">What Our Patients Say</h1>
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
  </div>
);

export default Testimonials; 