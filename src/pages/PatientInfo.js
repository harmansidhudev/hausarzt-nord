import React from 'react';
import './Home.css';
import Accessibility from './Accessibility';
import Testimonials from './Testimonials';
import UsefulInfo from './UsefulInfo';

const PatientInfo = () => (
  <div id="main-content">
    <section className="section">
      <div className="container">
        <h1 className="section-title" data-aos="fade-up">Patient Information</h1>
      </div>
    </section>
    <Accessibility />
    <Testimonials />
    <UsefulInfo />
  </div>
);

export default PatientInfo; 