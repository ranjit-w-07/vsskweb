import React, { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMobileMenu, setActiveNavItem } from '../../store/slices/uiSlice';
import { contactInfo, siteData, navigationData } from './HeaderData';

const Header = memo(() => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isMobileMenuOpen } = useSelector((state) => state.ui);

  const handleMenuToggle = () => {
    dispatch(toggleMobileMenu());
  };

  const handleNavClick = (path) => {
    dispatch(setActiveNavItem(path));
    if (isMobileMenuOpen) {
      dispatch(toggleMobileMenu());
    }
  };

  return (
    <header className="masthead shadow-sm">
      {/* Top Bar */}
      <div
        className="top-bar py-2"
        style={{
          background: 'linear-gradient(135deg, rgb(20, 151, 226) 0%, rgb(26, 131, 218) 100%)',
        }}
      >
        <div className="row">
          <div
            className="col-12"
            style={{
              background: 'linear-gradient(135deg, rgb(20, 151, 226) 0%, rgb(26, 131, 218) 100%)',
              color: 'white',
            }}
          >
            <div className="d-flex justify-content-start align-items-center px-3 py-1 flex-wrap">
              <span className="me-4 ">
                {' '}
                {/*//<span className="me-4 d-none d-md-inline remove // */}
                <i className="fas fa-phone me-2"></i>
                {contactInfo.phone}
              </span>
              <span>
                {' '}
                {/*<span className="d-none d-md-inline"> */}
                <i className="fas fa-envelope me-2"></i>
                {contactInfo.email}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-bar bg-white py-3">
        <div className="d-flex align-items-center justify-content-between flex-wrap w-100 px-3">
          {/* LEFT SIDE */}
          <div className="d-flex align-items-center flex-shrink-1" style={{ maxWidth: '65%' }}>
            {/* Logo */}
            <img
              src={siteData.logoUrl}
              alt={siteData.title}
              className="img-fluid d-none d-md-block me-3"
              style={{ maxHeight: '80px' }}
            />

            {/* Title */}
            <div className="d-flex flex-column justify-content-center">
              <h6 className="mb-0 fw-bold text-dark" style={{ whiteSpace: 'nowrap' }}>
                श्री विठ्ठल सहकारी साखर कारखाना लि.
              </h6>
              <small className="text-muted" style={{ whiteSpace: 'nowrap' }}>
                वेणुनगर / गुरसाळे
              </small>
            </div>

            {/* Vitthal Image */}
            <img
              src="/assets/images/vitthal.jpg"
              alt="Vitthal"
              className="img-fluid d-none d-md-block ms-3"
              style={{ maxHeight: '60px' }}
            />
          </div>

          {/* 🟧 HAMBURGER BUTTON (MOBILE ONLY) */}
          <button
            className="btn btn-outline-primary d-md-none ms-auto"
            onClick={handleMenuToggle}
            style={{ fontSize: '1.5rem' }}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* RIGHT SIDE DESKTOP NAV */}
          <nav className="d-none d-md-block ms-auto" style={{ maxWidth: '40%' }}>
            <ul className="navbar-nav d-flex flex-row justify-content-end align-items-center">
              {navigationData.map((item) => (
                <li key={item._id} className="nav-item mx-1">
                  <Link
                    to={item.path}
                    className="nav-link px-3 py-2 rounded-5"
                    style={{
                      whiteSpace: 'nowrap',
                      background: location.pathname === item.path ? '#e06805' : 'white',
                      color: location.pathname === item.path ? 'white' : 'black',
                    }}
                    onClick={() => handleNavClick(item.path)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-menu bg-white border-top d-md-none">
          <div className="container">
            <nav className="navbar-nav py-3">
              {navigationData.map((item) => (
                <Link
                  key={item._id}
                  to={item.path}
                  className={`nav-link py-2 border-bottom ${
                    location.pathname === item.path ? 'active text-primary fw-bold' : 'text-dark'
                  }`}
                  onClick={() => handleNavClick(item.path)}
                >
                  {item.title}
                </Link>
              ))}

              {/* Mobile Contact Info */}
              <div className="mt-3 pt-3 border-top">
                <div className="text-muted small">
                  <div className="mb-2">
                    <i className="fas fa-phone me-2"></i>
                    {contactInfo.phone}
                  </div>
                  <div>
                    <i className="fas fa-envelope me-2"></i>
                    {contactInfo.email}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
