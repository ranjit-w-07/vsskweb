import React, { memo } from 'react';

import { fallbackAbout, fallbackHistory } from './Data';

const About = memo(() => {
  // Use API data or fallback to static data
  const aboutData = fallbackAbout;
  const historyData = fallbackHistory;

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section
        className="hero-section py-5"
        style={{
          background: 'linear-gradient(135deg,rgb(20, 151, 226) 0%,rgb(26, 131, 218) 100%)',
          color: 'white',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold mb-3">वाटचाल</h1>
              <p className="lead">श्री विठ्ठल सहकारी साखर कारखाना लि., वेणुनगर / गुरसाळे</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="content-card bg-white p-4 rounded shadow-sm">
                <h2 className="mb-4">{aboutData.title}</h2>

                {aboutData.sections?.map((section, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="text-primary mb-3">{section.title}</h4>
                    <p className="text-muted">{section.content}</p>
                  </div>
                ))}

                {/* Vision Mission Section */}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="info-card bg-light p-4 rounded">
                <h4 className="mb-3">संपर्क माहिती</h4>
                <div className="mb-3">
                  <i className="fas fa-map-marker-alt text-primary me-2"></i>
                  <span>{aboutData.contact?.address}</span>
                </div>
                <div className="mb-3">
                  <i className="fas fa-phone text-primary me-2"></i>
                  <span>{aboutData.contact?.phone}</span>
                </div>
                <div className="mb-3">
                  <i className="fas fa-envelope text-primary me-2"></i>
                  <span>{aboutData.contact?.email}</span>
                </div>
              </div>

              <div className="timeline-card bg-white p-4 rounded shadow-sm mt-4">
                <h4 className="mb-3">महत्वाचे वर्ष</h4>
                <div className="timeline">
                  {historyData.map((item, index) => (
                    <div key={item.year || index} className="timeline-item mb-3">
                      <strong className="text-primary">{item.year}</strong>
                      <p className="mb-0 small text-muted">{item.event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

About.displayName = 'About';

export default About;
