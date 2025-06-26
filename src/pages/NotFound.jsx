import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h1 className="display-1 fw-bold text-primary">404</h1>
            <h2 className="mb-4">पान सापडले नाही</h2>
            <p className="lead mb-4">माफ करा, आपण शोधत असलेले पान अस्तित्वात नाही.</p>
            <Link to="/" className="btn btn-primary px-4 py-2">
              मुख्य पानावर परत जा
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
