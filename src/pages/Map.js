import React, { useEffect, useState } from 'react';
import './Map.css';

const Map = () => {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detect iOS for map link
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));
  }, []);

  const openInMaps = () => {
    const address = encodeURIComponent('Nordstraße 123, 1234 Vienna, Austria');
    const mapUrl = isIOS 
      ? `https://maps.apple.com/?q=${address}`
      : `https://www.google.com/maps/search/?api=1&query=${address}`;
    
    window.open(mapUrl, '_blank');
  };

  return (
    <div id="main-content">
      <section className="section">
        <div className="container">
          <div className="map-header" data-aos="fade-up">
            <h1>Find Our Location</h1>
            <p>
              Visit us at our convenient location in Vienna. We're easily accessible 
              and provide ample parking for our patients.
            </p>
          </div>

          <div className="map-content">
            <div className="map-info" data-aos="fade-right">
              <div className="map-info__card">
                <h2>Hausarzt Nord</h2>
                <div className="map-info__details">
                  <div className="map-info__item">
                    <strong>Address:</strong>
                    <p>Nordstraße 123<br />1234 Vienna, Austria</p>
                  </div>
                  
                  <div className="map-info__item">
                    <strong>Phone:</strong>
                    <p><a href="tel:+43123456789">+43 1 234 56 789</a></p>
                  </div>
                  
                  <div className="map-info__item">
                    <strong>Email:</strong>
                    <p><a href="mailto:info@hausarzt-nord.at">info@hausarzt-nord.at</a></p>
                  </div>
                  
                  <div className="map-info__item">
                    <strong>Opening Hours:</strong>
                    <p>
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 12:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="map-actions">
                  <button onClick={openInMaps} className="btn btn-primary">
                    Open in {isIOS ? 'Apple Maps' : 'Google Maps'}
                  </button>
                  <a href="/contact" className="btn btn-outline">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            <div className="map-container" data-aos="fade-left">
              <div className="map-overlay">
                <button onClick={openInMaps} className="map-overlay__button">
                  Open in {isIOS ? 'Apple Maps' : 'Google Maps'}
                </button>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.1234567890123!2d16.12345678901234!3d48.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDA3JzM0LjQiTiAxNsKwMDcnMzQuNCJF!5e0!3m2!1sen!2sat!4v1234567890123"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hausarzt Nord Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="section section--light">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">How to Get Here</h2>
          <div className="directions-grid">
            <div className="direction-card" data-aos="fade-up" data-aos-delay="100">
              <div className="direction-card__icon">🚇</div>
              <h3>By Public Transport</h3>
              <p>
                Take the U-Bahn (subway) to Nordstraße station. We're located just 
                a 2-minute walk from the station exit.
              </p>
            </div>

            <div className="direction-card" data-aos="fade-up" data-aos-delay="200">
              <div className="direction-card__icon">🚌</div>
              <h3>By Bus</h3>
              <p>
                Bus lines 13A and 14A stop directly in front of our building. 
                The stop is called "Nordstraße Medical Center".
              </p>
            </div>

            <div className="direction-card" data-aos="fade-up" data-aos-delay="300">
              <div className="direction-card__icon">🚗</div>
              <h3>By Car</h3>
              <p>
                Free parking is available in our underground garage. Enter from 
                Nordstraße and follow the signs to "Medical Center Parking".
              </p>
            </div>

            <div className="direction-card" data-aos="fade-up" data-aos-delay="400">
              <div className="direction-card__icon">🚶</div>
              <h3>Walking</h3>
              <p>
                We're located in the heart of Vienna's medical district, easily 
                accessible on foot from surrounding neighborhoods.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Map; 