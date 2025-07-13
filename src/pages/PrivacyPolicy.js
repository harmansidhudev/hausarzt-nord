import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div id="main-content">
      <section className="section">
        <div className="container">
          <div className="privacy-header" data-aos="fade-up">
            <h1>Privacy Policy</h1>
            <p>How we collect, use, and protect your personal information.</p>
          </div>

          <div className="privacy-content" data-aos="fade-up">
            <div className="privacy-section">
              <h2>Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, such as when you:
              </p>
              <ul>
                <li>Schedule an appointment</li>
                <li>Fill out patient forms</li>
                <li>Contact us via email or phone</li>
                <li>Register for events or workshops</li>
                <li>Use our website contact forms</li>
              </ul>
              <p>
                This information may include your name, email address, phone number, 
                medical history, and other relevant health information.
              </p>
            </div>

            <div className="privacy-section">
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide medical services and care</li>
                <li>Schedule and manage appointments</li>
                <li>Communicate with you about your health</li>
                <li>Send appointment reminders and updates</li>
                <li>Process event registrations</li>
                <li>Improve our services and website</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information 
                to third parties without your consent, except in the following circumstances:
              </p>
              <ul>
                <li>With your explicit consent</li>
                <li>To other healthcare providers involved in your care</li>
                <li>To comply with legal obligations</li>
                <li>To protect your health and safety in emergencies</li>
                <li>To insurance companies for billing purposes (with your consent)</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect 
                your personal information against unauthorized access, alteration, disclosure, 
                or destruction. These measures include:
              </p>
              <ul>
                <li>Encryption of sensitive data</li>
                <li>Secure servers and networks</li>
                <li>Regular security assessments</li>
                <li>Staff training on data protection</li>
                <li>Access controls and authentication</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>Cookies and Website Analytics</h2>
              <p>
                Our website uses cookies and similar technologies to improve your browsing 
                experience and analyze website usage. You can control cookie settings through 
                your browser preferences.
              </p>
            </div>

            <div className="privacy-section">
              <h2>Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide 
                our services and comply with legal obligations. Medical records are retained 
                in accordance with Austrian healthcare regulations.
              </p>
            </div>

            <div className="privacy-section">
              <h2>Contact Information</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="privacy-contact">
                <p><strong>Email:</strong> <a href="mailto:privacy@hausarzt-nord.at">privacy@hausarzt-nord.at</a></p>
                <p><strong>Phone:</strong> <a href="tel:+43123456789">+43 1 234 56 789</a></p>
                <p><strong>Address:</strong> Nordstraße 123, 1234 Vienna, Austria</p>
              </div>
            </div>

            <div className="privacy-section">
              <h2>Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you 
                of any material changes by posting the new policy on our website and 
                updating the "Last Updated" date.
              </p>
              <p><strong>Last Updated:</strong> July 12, 2024</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy; 