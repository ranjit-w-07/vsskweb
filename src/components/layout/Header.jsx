// Updated Header.jsx (only updated parts shown for clarity)
// Step-by-step changes to make it responsive across mobile and tablet

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
      <div className="top-bar py-2 bg-primary text-white">
        <div className="container-fluid px-3">
          <div className="d-flex justify-content-start flex-wrap">
            <span className="me-4">
              <i className="fas fa-phone me-2"></i>
              {contactInfo.phone}
            </span>
            <span>
              <i className="fas fa-envelope me-2"></i>
              {contactInfo.email}
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-bar bg-white py-3 border-bottom">
        <div className="container-fluid px-3 d-flex justify-content-between align-items-center flex-wrap">

          {/* LEFT SIDE */}
          <div className="d-flex align-items-center gap-2 flex-wrap" style={{ maxWidth: '70%' }}>
            <img
              src={siteData.logoUrl}
              alt={siteData.title}
              className="img-fluid"
              style={{ maxHeight: '60px', width: 'auto' }}
            />
            <div className="d-flex flex-column">
              <h6 className="mb-0 fw-bold text-dark small-text-title">
                श्री विठ्ठल सहकारी साखर कारखाना लि.
              </h6>
              <small className="text-muted">वेणुनगर / गुरसाळे</small>
            </div>
            <img
              src="/assets/images/vitthal.jpg"
              alt="Vitthal"
              className="img-fluid d-none d-md-block"
              style={{ maxHeight: '50px', width: 'auto' }}
            />
          </div>

          {/* HAMBURGER (MOBILE) */}
          <button
            className="btn btn-outline-primary d-md-none"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* NAVIGATION LINKS (DESKTOP ONLY) */}
          <nav className="d-none d-md-block">
            <ul className="navbar-nav d-flex flex-row flex-wrap align-items-center gap-2">
              {navigationData.map((item) => (
                <li key={item._id} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link px-3 py-2 rounded-5 ${
                      location.pathname === item.path ? 'bg-warning text-white' : 'text-dark'
                    }`}
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

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="mobile-menu bg-white d-md-none border-top">
          <div className="p-3">
            {navigationData.map((item) => (
              <Link
                key={item._id}
                to={item.path}
                className={`d-block py-2 border-bottom ${
                  location.pathname === item.path ? 'fw-bold text-primary' : 'text-dark'
                }`}
                onClick={() => handleNavClick(item.path)}
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-3 mt-3 border-top small text-muted">
              <div><i className="fas fa-phone me-2"></i>{contactInfo.phone}</div>
              <div><i className="fas fa-envelope me-2"></i>{contactInfo.email}</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
