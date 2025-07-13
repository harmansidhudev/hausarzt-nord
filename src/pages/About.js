import React from 'react';
import './Home.css';

const About = () => (
  <div id="main-content">
    {/* Team Section */}
    <section className="section team-section">
      <div className="container">
        <h1 className="section-title" data-aos="fade-up">Meet the Team</h1>
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

    {/* Philosophy Section */}
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
  </div>
);

export default About; 