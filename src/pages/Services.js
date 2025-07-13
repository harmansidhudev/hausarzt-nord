import React from 'react';
import './Home.css';
import MedicalServices from './MedicalServices';
import MinorSurgery from './MinorSurgery';
import Nutrition from './Nutrition';
import Workshops from './Workshops';

const Services = () => (
  <div id="main-content">
    <section className="section">
      <div className="container">
        <h1 className="section-title" data-aos="fade-up">Our Services</h1>
      </div>
    </section>
    <MedicalServices />
    <MinorSurgery />
    <Nutrition />
    <Workshops />
  </div>
);

export default Services; 