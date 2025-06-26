import React, { memo, Suspense } from 'react';
import {
  fallbackHeroSlides,
  fallbackAboutSection,
  fallbackServices,
  fallbackStatistics,
} from './HomeData';
// Lazy load components
const HeroSlider = React.lazy(() => import('../../components/common/HeroSlider'));
const StatisticsCounter = React.lazy(() => import('../../components/common/StatisticsCounter'));

const Home = memo(() => {
  // Use API data or fallback to static data
  const heroSlides = fallbackHeroSlides;
  const statistics = fallbackStatistics;
  const aboutSection = fallbackAboutSection; // Can be added to API later
  const services = fallbackServices;

  return (
    <div className="home-page">
      {/* Hero Section */}
      <Suspense fallback={<div className="text-center p-5">Loading...</div>}>
        <HeroSlider slides={heroSlides} />
      </Suspense>

      {/* About Section */}
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-4">{aboutSection.title}</h2>
              <p className="lead mb-4">{aboutSection.description}</p>
              <ul className="list-unstyled">
                {aboutSection.features.map((feature, index) => (
                  <li key={index} className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="/about" className="btn btn-primary mt-3">
                अधिक वाचा
              </a>
            </div>
            <div className="col-lg-6">
              <img src={aboutSection.image} alt="About Us" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <Suspense fallback={<div className="text-center p-3">Loading statistics...</div>}>
        <StatisticsCounter statistics={statistics} />
      </Suspense>

      {/* Services Section */}
      <section className="services-section py-5 bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="mb-3">आमच्या सेवा</h2>
              <p className="text-muted">शेतकऱ्यांच्या सेवेत आम्ही नेहमी तत्पर</p>
            </div>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div key={service.id || index} className="col-lg-3 col-md-6">
                <div className="service-card text-center p-4 bg-white rounded shadow-sm h-100">
                  <div className="service-icon mb-3">
                    <i className={`fas ${service.icon} fa-3x text-primary`}></i>
                  </div>
                  <h5 className="service-title mb-3">{service.title}</h5>
                  <p className="service-description text-muted">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;
