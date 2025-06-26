import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const { isLoading } = useSelector((state) => state.ui);

  return (
    <div id="page" className="min-vh-100 d-flex flex-column">
      {/* Loading Spinner */}
      {isLoading && (
        <div
          id="load"
          className="position-fixed w-100 h-100 d-flex align-items-center justify-content-center bg-white"
          style={{ zIndex: 9999 }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <Header />
      <main id="main" className="flex-grow-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
