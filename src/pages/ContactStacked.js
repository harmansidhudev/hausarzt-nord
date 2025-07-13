import React from 'react';
import './Home.css';
import Contact from './Contact';
import Map from './Map';

const ContactStacked = () => (
  <div id="main-content">
    <section className="section">
      <div className="container">
        <h1 className="section-title" data-aos="fade-up">Contact & Location</h1>
      </div>
    </section>
    <Contact />
    <Map />
  </div>
);

export default ContactStacked; 