import React, { useState } from 'react';
import { contactInfo } from '../../data/navigationData';
import { fallbackDepartments } from './Data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('संदेश पाठवला गेला! आम्ही लवकरच आपल्याशी संपर्क साधू.');
  };

  return (
    <div className="contact-page">
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
              <h1 className="display-4 fw-bold mb-3">संपर्क</h1>
              <p className="lead">आमच्याशी संपर्क साधा - आम्ही आपल्या सेवेत आहोत</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="contact-card text-center p-4 bg-white rounded shadow-sm border h-100">
                <div className="contact-icon mb-3">
                  <i className="fas fa-phone fa-3x text-primary"></i>
                </div>
                <h5 className="mb-3">फोन</h5>
                <p className="mb-0">
                  <a href={`tel:${contactInfo.phone}`} className="text-decoration-none">
                    {contactInfo.phone}
                  </a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-card text-center p-4 bg-white rounded shadow-sm border h-100">
                <div className="contact-icon mb-3">
                  <i className="fas fa-envelope fa-3x text-primary"></i>
                </div>
                <h5 className="mb-3">ईमेल</h5>
                <p className="mb-0">
                  <a href={`mailto:${contactInfo.email}`} className="text-decoration-none">
                    {contactInfo.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="contact-card text-center p-4 bg-white rounded shadow-sm border h-100">
                <div className="contact-icon mb-3">
                  <i className="fas fa-map-marker-alt fa-3x text-primary"></i>
                </div>
                <h5 className="mb-3">पत्ता</h5>
                <p className="mb-0">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="contact-form-section py-5 bg-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="contact-form bg-white p-4 rounded shadow-sm">
                <h3 className="mb-4">संदेश पाठवा</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">
                        नाव *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">
                        फोन
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        ई-मेल *
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="subject" className="form-label">
                        विषय *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">
                        संदेश *
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary px-4 py-2">
                        संदेश पाठवा
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="location-info bg-white p-4 rounded shadow-sm h-100">
                <h3 className="mb-4">आमचे स्थान</h3>
                <div
                  className="map-container mb-4"
                  style={{ height: '300px', borderRadius: '8px', overflow: 'hidden' }}
                >
                  <iframe
                    title="Shrivitthal Sugar Location"
                    src="https://maps.google.com/maps?q=17.739287,75.321365&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="location-details">
                  <h5 className="mb-3">कार्यालयीन वेळ</h5>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between">
                      <span>सोमवार - शनिवार:</span>
                      <span>सकाळी ९:३० - संध्याकाळी ५:३०</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>रविवार:</span>
                      <span>बंद</span>
                    </div>
                  </div>
                  <h5 className="mb-3">अतिरिक्त माहिती</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>निःशुल्क सल्ला उपलब्ध
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>शेतकरी सेवा केंद्र
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>तांत्रिक मार्गदर्शन
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Department Section */}
            <div className="col-12 mt-5">
              <div className="departments bg-white p-4 rounded shadow-sm">
                <h3 className="mb-4">प्रमुख विभाग</h3>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                  {fallbackDepartments.map((dept, index) => (
                    <div key={index} className="col">
                      <div className="p-3 border rounded h-100">
                        <div className="d-flex align-items-center mb-3">
                          <i className={`fas ${dept.icon} fa-2x text-primary me-3`}></i>
                          <div>
                            <h5 className="mb-1">{dept.name}</h5>
                            <small className="text-muted">{dept.head}</small>
                          </div>
                        </div>
                        <p className="mb-0">{dept.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Stats */}
      <section className="contact-stats py-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <i className="fas fa-phone fa-2x text-primary mb-3"></i>
                <h4 className="fw-bold">२४/७</h4>
                <p className="text-muted">आपत्कालीन सेवा</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <i className="fas fa-clock fa-2x text-success mb-3"></i>
                <h4 className="fw-bold">२४ तास</h4>
                <p className="text-muted">प्रतिसाद वेळ</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <i className="fas fa-users fa-2x text-warning mb-3"></i>
                <h4 className="fw-bold">२०,०००+</h4>
                <p className="text-muted">संतुष्ट ग्राहक</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <i className="fas fa-headset fa-2x text-info mb-3"></i>
                <h4 className="fw-bold">१००%</h4>
                <p className="text-muted">ग्राहक समाधान</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
