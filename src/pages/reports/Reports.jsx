// src/Reports.jsx
import React, { useState, useEffect, memo } from 'react';
import { fallbackReports, categories } from './Data';
import { getFileMeta } from '../../utils/getFileMeta'; // ✅ make sure this path is correct

const Reports = memo(() => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [reportsWithMeta, setReportsWithMeta] = useState([]);

  useEffect(() => {
    const fetchMetadata = async () => {
      const updated = await Promise.all(
        fallbackReports.map(async (report) => {
          const meta = await getFileMeta(report.downloadUrl);
          return { ...report, ...meta };
        })
      );
      setReportsWithMeta(updated);
    };

    fetchMetadata();
  }, []);

  const filteredReports = selectedCategory
    ? reportsWithMeta.filter((report) => report.category === selectedCategory)
    : reportsWithMeta;

  return (
    <div className="reports-page">
      {/* Category Section */}
      <section className="categories-section py-5 bg-light">
        <div className="container">
          <div className="row mb-5 text-center">
            <div className="col-12">
              <h2 className="mb-3">अहवाल प्रकार</h2>
              <p className="text-muted">आमचे विविध प्रकारचे अहवाल उपलब्ध आहेत</p>
            </div>
          </div>

          <div className="row g-4">
            {categories.map((category, index) => {
              const reportCount = reportsWithMeta.filter(
                (r) => r.category === category.name
              ).length;

              return (
                <div key={index} className="col-lg-3 col-md-6">
                  <div className="category-card text-center p-4 bg-white rounded shadow-sm border h-100">
                    <div className="category-icon mb-3">
                      <i className={`fas ${category.icon} fa-3x text-${category.color}`}></i>
                    </div>
                    <h5 className="mb-2">{category.name}</h5>
                    <p className="text-muted mb-3">{reportCount} अहवाल उपलब्ध</p>
                    <button
                      className={`btn btn-${category.color} btn-sm`}
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      पाहा
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clear Filter Button */}
      {selectedCategory && (
        <div className="text-center mt-4">
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => setSelectedCategory(null)}
          >
            सर्व अहवाल दाखवा
          </button>
        </div>
      )}

      {/* Recent Reports Section */}
      <section className="reports-section py-5 bg-light">
        <div className="container">
          <div className="row mb-5 text-center">
            <div className="col-12">
              <h2 className="mb-3">अलीकडील अहवाल</h2>
              <p className="text-muted">नवीनतम अहवाल डाउनलोड करा</p>
            </div>
          </div>

          <div className="row g-4">
            {filteredReports.map((report) => (
              <div key={report.id} className="col-lg-4 col-md-6">
                <div className="report-card h-100 bg-white rounded shadow-sm border">
                  <div className="card-body p-4">
                    <div className="report-header d-flex align-items-start mb-3">
                      <div className="report-icon me-3">
                        <i className={`fas ${report.icon} fa-2x`}></i>
                      </div>
                      <div className="report-info flex-grow-1">
                        <span className="badge bg-light text-dark mb-2">{report.category}</span>
                        <h6 className="report-title mb-2">{report.title}</h6>
                      </div>
                    </div>

                    <div className="report-meta mb-3">
                      <div className="meta-item d-flex justify-content-between">
                        <span className="text-muted">दिनांक:</span>
                        <span className="fw-bold">{report.date}</span>
                      </div>
                      <div className="meta-item d-flex justify-content-between">
                        <span className="text-muted">आकार:</span>
                        <span className="fw-bold">{report.fileSize}</span>
                      </div>
                    </div>

                    <div className="report-actions">
                      <a href={report.downloadUrl} className="btn btn-primary btn-sm me-2" download>
                        <i className="fas fa-download me-1"></i>
                        डाउनलोड
                      </a>
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => window.open(report.downloadUrl, '_blank')}
                      >
                        <i className="fas fa-eye me-1"></i>
                        पूर्वावलोकन
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});

export default Reports;
