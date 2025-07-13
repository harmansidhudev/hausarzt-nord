import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// i18n
import './i18n';

// Accessibility testing
import { runAccessibilityTests, logAccessibilityIssues } from './utils/accessibilityTest';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import MedicalServices from './pages/MedicalServices';
import MinorSurgery from './pages/MinorSurgery';
import Nutrition from './pages/Nutrition';
import Workshops from './pages/Workshops';
import Events from './pages/Events';
import EventRegistration from './pages/EventRegistration';
import UsefulInfo from './pages/UsefulInfo';
import Contact from './pages/Contact';
import Map from './pages/Map';
import Imprint from './pages/Imprint';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Team from './pages/Team';
import Philosophy from './pages/Philosophy';
import Accessibility from './pages/Accessibility';
import Testimonials from './pages/Testimonials';
import About from './pages/About';
import Services from './pages/Services';
import PatientInfo from './pages/PatientInfo';
import ContactStacked from './pages/ContactStacked';

// Styles
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });

    // Run accessibility tests after component mounts
    setTimeout(() => {
      const issues = runAccessibilityTests();
      logAccessibilityIssues(issues);
    }, 2000);
  }, []);

  return (
    <Router>
      <div className="App">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/services" element={<Services />} />
            <Route path="/medical-services" element={<MedicalServices />} />
            <Route path="/minor-surgery" element={<MinorSurgery />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/patient-info" element={<PatientInfo />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/useful-info" element={<UsefulInfo />} />
            <Route path="/events" element={<Events />} />
            <Route path="/event-registration" element={<EventRegistration />} />
            <Route path="/contact" element={<ContactStacked />} />
            <Route path="/contact-form" element={<Contact />} />
            <Route path="/map" element={<Map />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
