import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const AboutSection = memo(({ aboutData }) => {
  if (!aboutData) {
    return (
      <section className="about-section py-5">
        <div className="container">
          <div className="text-center">
            <p>Loading about section...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Text Content */}
          <div className="col-lg-6">
            <div className="about-content">
              <h2 className="mb-4">{aboutData.title}</h2>
              <div className="about-text mb-4">
                <p className="mb-3 text-muted">{aboutData.description}</p>
              </div>

              {aboutData.features && (
                <ul className="list-unstyled mb-4">
                  {aboutData.features.map((feature, index) => (
                    <li key={index} className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              <div className="about-button">
                <Link to="/about" className="btn btn-primary px-4 py-2">
                  अधिक वाचा b
                </Link>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="col-lg-6">
            <div className="about-image">
              <img
                src={aboutData.image}
                alt="कारखाना दृश्य"
                className="img-fluid rounded shadow"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
