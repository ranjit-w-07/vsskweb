import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Layout from './components/layout/Layout';
import './App.css';

// Lazy load all pages
const Home = React.lazy(() => import('./pages/home/Home'));
const About = React.lazy(() => import('./pages/about/About'));
const Projects = React.lazy(() => import('./pages/projects/Projects'));
const Awards = React.lazy(() => import('./pages/awards/Awards'));
const Management = React.lazy(() => import('./pages/management/Management'));
// const EAuction = React.lazy(() => import('./pages/eauction/EAuction'));
const Contact = React.lazy(() => import('./pages/contact/Contact'));
const Reports = React.lazy(() => import('./pages/reports/Reports'));
const News = React.lazy(() => import('./pages/news/News'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Loading component
const PageLoader = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
    <div className="text-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mt-3 text-muted">पान लोड होत आहे...</p>
    </div>
  </div>
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/management" element={<Management />} />
              {/* <Route path="/e-auction" element={<EAuction />} /> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/news" element={<News />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
