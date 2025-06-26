import React, { memo, useState } from 'react';

import { fallbackAuctions } from './Data';

// ✅ Status-based styles (badge, button, label, action)
const statusStyles = {
  active: {
    badge: 'bg-success',
    button: 'btn-success',
    label: 'लाइव्ह',
    action: 'बिड करा',
  },
  upcoming: {
    badge: 'bg-warning',
    button: 'btn-warning',
    label: 'आगामी',
    action: 'नोंदणी करा',
  },
  complete: {
    badge: 'bg-secondary',
    button: 'btn-secondary',
    label: 'पूर्ण',
    action: 'पूर्ण झाले',
  },
};

const EAuction = memo(() => {
  const auctionsData = fallbackAuctions;
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  const categories = [...new Set(auctionsData.map((item) => item.category))];
  const filteredAuctions = selectedCategory
    ? auctionsData.filter((item) => item.category === selectedCategory)
    : auctionsData;

  return (
    <div className="e-auction-page">
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
              <h1 className="display-4 fw-bold mb-3">E-Auction</h1>
              <p className="lead">ऑनलाइन लिलाव - पारदर्शक आणि न्याय्य व्यवहार</p>
            </div>
          </div>
        </div>
      </section>

      {/* Auctions List */}
      <section className="auctions-section py-5">
        <div className="container">
          {/* Title */}
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="mb-3">सध्याचे लिलाव</h2>
              <p className="text-muted">आमच्या उत्पादनांच्या ऑनलाइन लिलावात भाग घ्या</p>
            </div>
          </div>
          <div className="row">
            {/* Sidebar (Left) */}
            <div className="col-md-3 mb-4">
              {/* Toggle Button for Mobile */}
              <div className="d-md-none mb-3 text-end">
                <button
                  className="btn btn-outline-primary btn-sm"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#categoryCollapse"
                  aria-expanded="false"
                  aria-controls="categoryCollapse"
                >
                  🔽 श्रेणी फिल्टर
                </button>
              </div>

              <div className="collapse d-md-block show" id="categoryCollapse">
                <div className="bg-light p-3 rounded shadow-sm">
                  <h5 className="mb-3">श्रेणी</h5>
                  <ul className="list-unstyled">
                    {categories.map((cat) => {
                      const count = auctionsData.filter((item) => item.category === cat).length;
                      return (
                        <li key={cat} className="mb-2">
                          <button
                            className={`btn btn-sm w-100 text-start ${
                              selectedCategory === cat
                                ? 'btn-primary text-white'
                                : 'btn-outline-primary'
                            }`}
                            onClick={() => setSelectedCategory(cat)}
                          >
                            {cat} ({count})
                          </button>
                        </li>
                      );
                    })}
                    <li>
                      <button
                        className="btn btn-sm w-100 btn-outline-secondary mt-2"
                        onClick={() => setSelectedCategory(null)}
                      >
                        सर्व लिलाव दाखवा
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Auction Cards (Right) */}
            <div className="col-md-9">
              <div className="row g-4">
                {filteredAuctions.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                    <div className="auction-card h-100 bg-white rounded shadow-sm border">
                      <div className="card-header bg-light p-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="auction-icon">
                            <i className={`fas ${item.icon || 'fa-gavel'} fa-2x text-primary`}></i>
                          </div>
                          <span
                            className={`badge ${statusStyles[item.status]?.badge || 'bg-secondary'}`}
                          >
                            {statusStyles[item.status]?.label || 'अज्ञात'}
                          </span>
                        </div>
                      </div>

                      <div className="card-body p-3">
                        <h5 className="card-title mb-3">{item.title}</h5>
                        <div className="auction-details">
                          <div className="detail-item d-flex justify-content-between mb-2">
                            <span className="text-muted">प्रमाण:</span>
                            <span className="fw-bold">{item.quantity || '---'}</span>
                          </div>
                          <div className="detail-item d-flex justify-content-between mb-2">
                            <span className="text-muted">प्रारंभिक किंमत:</span>
                            <span className="fw-bold text-success">{item.basePrice}</span>
                          </div>
                          <div className="detail-item d-flex justify-content-between mb-3">
                            <span className="text-muted">शेवटची तारीख:</span>
                            <span className="fw-bold text-danger">{item.endDate}</span>
                          </div>
                        </div>

                        <div className="auction-actions text-center">
                          <button
                            className={`btn px-4 py-2 ${statusStyles[item.status]?.button || 'btn-secondary'}`}
                            disabled={item.status === 'complete'}
                          >
                            {statusStyles[item.status]?.action || 'क्रिया'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>{' '}
            {/* End col-md-9 */}
          </div>{' '}
          {/* End row */}
        </div>
      </section>

      {/* Remaining sections (How it works, Benefits) stay unchanged... */}
    </div>
  );
});

export default EAuction;
