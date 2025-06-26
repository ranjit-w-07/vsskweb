import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = memo(({ services = [] }) => {
  if (services.length === 0) {
    return (
      <section className="services-section py-5 bg-light">
        <div className="container">
          <div className="text-center">
            <p>Loading services...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="services-section py-5 bg-light">
      <div className="container">
        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6">
              <div className="service-card h-100 bg-white p-4 rounded shadow-sm text-center">
                <div className="service-icon mb-4">
                  <i className={`fas ${service.icon} fa-4x text-primary`}></i>
                </div>

                <h4 className="service-title mb-3 fw-bold">{service.title}</h4>

                <p className="service-description text-muted mb-4">{service.description}</p>

                {service.link && (
                  <div className="service-button">
                    <Link to={service.link} className="btn btn-primary btn-sm px-4 py-2">
                      अधिक माहिती
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ServicesSection;
