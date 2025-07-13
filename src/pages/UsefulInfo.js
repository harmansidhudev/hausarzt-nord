import React from 'react';
import './UsefulInfo.css';

const UsefulInfo = () => {
  const downloads = [
    {
      title: 'Patient Information Form',
      description: 'Complete this form before your first visit to save time.',
      type: 'PDF',
      size: '245 KB'
    },
    {
      title: 'Medical History Template',
      description: 'Template to help you organize your medical history.',
      type: 'PDF',
      size: '180 KB'
    },
    {
      title: 'Insurance Information',
      description: 'Information about accepted insurance providers and coverage.',
      type: 'PDF',
      size: '320 KB'
    }
  ];

  const links = [
    {
      title: 'Austrian Health Portal',
      description: 'Official health information and services portal.',
      url: 'https://www.gesundheit.gv.at',
      category: 'Government'
    },
    {
      title: 'Vienna Health Services',
      description: 'Local health services and emergency information.',
      url: 'https://www.wien.gv.at/gesundheit',
      category: 'Local'
    },
    {
      title: 'WHO Health Information',
      description: 'World Health Organization health guidelines and information.',
      url: 'https://www.who.int',
      category: 'International'
    }
  ];

  const resources = [
    {
      title: 'Emergency Numbers',
      description: 'Important emergency contact numbers for Vienna and Austria.',
      icon: '🚨'
    },
    {
      title: 'Pharmacy Locator',
      description: 'Find nearby pharmacies and their opening hours.',
      icon: '💊'
    },
    {
      title: 'Health Insurance Guide',
      description: 'Understanding health insurance coverage in Austria.',
      icon: '📋'
    }
  ];

  return (
    <div id="main-content">
      <section className="section">
        <div className="container">
          <div className="useful-info-header" data-aos="fade-up">
            <h1>Useful Information</h1>
            <p>
              Find helpful resources, forms, and links to support your healthcare journey. 
              We've compiled useful information to make your experience with us as smooth as possible.
            </p>
          </div>

          {/* Downloads */}
          <div className="downloads-section" data-aos="fade-up">
            <h2 className="section-title">Downloads</h2>
            <div className="downloads-grid">
              {downloads.map((download, index) => (
                <div key={download.title} className="download-card" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="download-card__icon">📄</div>
                  <h3 className="download-card__title">{download.title}</h3>
                  <p className="download-card__description">{download.description}</p>
                  <div className="download-card__meta">
                    <span className="download-card__type">{download.type}</span>
                    <span className="download-card__size">{download.size}</span>
                  </div>
                  <button className="btn btn-primary">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div className="links-section section--light" data-aos="fade-up">
            <div className="container">
              <h2 className="section-title">Useful Links</h2>
              <div className="links-grid">
                {links.map((link, index) => (
                  <div key={link.title} className="link-card" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="link-card__header">
                      <h3 className="link-card__title">{link.title}</h3>
                      <span className="link-card__category">{link.category}</span>
                    </div>
                    <p className="link-card__description">{link.description}</p>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                      Visit Site
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="resources-section" data-aos="fade-up">
            <h2 className="section-title">Additional Resources</h2>
            <div className="resources-grid">
              {resources.map((resource, index) => (
                <div key={resource.title} className="resource-card" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="resource-card__icon">{resource.icon}</div>
                  <h3 className="resource-card__title">{resource.title}</h3>
                  <p className="resource-card__description">{resource.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="useful-info-cta" data-aos="fade-up">
            <div className="useful-info-cta__content">
              <h2>Need More Information?</h2>
              <p>
                Can't find what you're looking for? Contact us and we'll be happy to help 
                you find the information you need.
              </p>
              <a href="/contact" className="btn btn-primary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsefulInfo; 