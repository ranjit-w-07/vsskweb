import React, { memo, useState } from 'react';
import { fallbackNews, featuredNewsData } from './Data';

// Helper function to format dates in Marathi
function formatMarathiDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('mr-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const News = memo(() => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedArticles, setExpandedArticles] = useState([]);
  const [isFeaturedExpanded, setIsFeaturedExpanded] = useState(false);

  // ✅ Combine all news for unified sorting and display
  const allNews = [...fallbackNews, ...featuredNewsData];

  // ✅ Sort all news items by date (prefer publishedAt, fallback to date)
  const latestNews = [...allNews]
    .filter((news) => news.date || news.publishedAt)
    .sort((a, b) => {
      const dateA = new Date(a.date || a.publishedAt).getTime();
      const dateB = new Date(b.date || b.publishedAt).getTime();
      return dateB - dateA; // latest first
    });

  // ✅ Select the most recent item as featured
  const featuredArticle = latestNews[0];

  // ✅ Filter only non-featured news for regular grid
  const regularNews = fallbackNews.filter((news) => !news.featured);

  // ✅ Dynamic category counts
  const categoriesWithCounts = [
    { id: 'all', name: 'सर्व बातम्या', count: regularNews.length },
    ...Array.from(
      regularNews.reduce((map, news) => {
        const cat = news.category;
        map.set(cat, (map.get(cat) || 0) + 1);
        return map;
      }, new Map())
    ).map(([id, count]) => ({
      id,
      name: id,
      count,
    })),
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const filteredNews =
    activeCategory === 'all'
      ? regularNews
      : regularNews.filter((news) => news.category === activeCategory);

  const toggleArticleExpansion = (id) => {
    setExpandedArticles((prevExpanded) =>
      prevExpanded.includes(id)
        ? prevExpanded.filter((itemId) => itemId !== id)
        : [...prevExpanded, id]
    );
  };

  return (
    <div className="news-page">
      {/* Header */}
      <section
        className="hero-section py-5"
        style={{
          background: 'linear-gradient(135deg,rgb(20, 151, 226) 0%,rgb(26, 131, 218) 100%)',
          color: 'white',
        }}
      >
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3">बातम्या</h1>
          <p className="lead">कारखान्याच्या नवीनतम बातम्या आणि घडामोडी</p>
        </div>
      </section>

      {/* Featured News */}
      {featuredArticle && (
        <section className="featured-news py-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="featured-article bg-white rounded shadow-lg overflow-hidden">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <img
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="img-fluid h-100"
                        style={{ objectFit: 'cover', minHeight: '300px' }}
                      />
                    </div>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="d-flex align-items-center mb-3">
                          <span className="badge bg-primary me-2">{featuredArticle.category}</span>
                          <span className="text-muted">
                            {formatMarathiDate(featuredArticle.date || featuredArticle.publishedAt)}
                          </span>
                        </div>
                        <h2 className="mb-3 fs-4 fw-bold text-wrap">{featuredArticle.title}</h2>
                        <p className="lead text-muted mb-4">
                          {isFeaturedExpanded
                            ? featuredArticle.content
                            : featuredArticle.excerpt || featuredArticle.summary}
                        </p>
                        <button
                          className="btn btn-primary"
                          onClick={() => setIsFeaturedExpanded(!isFeaturedExpanded)}
                        >
                          {isFeaturedExpanded ? 'कमी वाचा' : 'संपूर्ण बातमी वाचा'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Filter + Articles */}
      <section className="news-section py-5 bg-light">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3 mb-4">
              <div className="categories-sidebar bg-white p-4 rounded shadow-sm">
                <h5 className="mb-4">बातम्यांचे प्रकार</h5>
                <ul className="list-unstyled">
                  {categoriesWithCounts.map((category) => (
                    <li key={category.id} className="mb-2">
                      <button
                        onClick={() => handleCategoryClick(category.id)}
                        className={`d-flex justify-content-between align-items-center text-decoration-none p-2 rounded border-0 w-100 ${
                          activeCategory === category.id
                            ? 'bg-primary text-white'
                            : 'text-dark bg-light'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span
                          className={`badge ${activeCategory === category.id ? 'bg-light text-dark' : 'bg-primary text-white'}`}
                        >
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent News */}
              <div className="latest-news bg-white p-4 rounded shadow-sm mt-4">
                <h6 className="mb-3">अलीकडील बातम्या</h6>
                {latestNews.slice(0, 3).map((article, index) => (
                  <div
                    key={article.id || index}
                    className={`latest-item ${index < 2 ? 'border-bottom pb-2 mb-2' : ''}`}
                  >
                    <small className="text-muted">
                      {formatMarathiDate(article.date || article.publishedAt)}
                    </small>

                    <p className="small mb-0">{article.title.substring(0, 40)}...</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Articles */}
            <div className="col-lg-9">
              <div className="news-grid">
                <div className="row g-4">
                  {filteredNews.length > 0 ? (
                    filteredNews.map((article, index) => (
                      <div key={article.id || index} className="col-lg-6">
                        <div className="news-card h-100 bg-white rounded shadow-sm overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="card-img-top rounded-top img-fluid"
                            style={{
                              height: '100vh',
                              width: '100%',
                              objectFit: 'cover',
                              objectPosition: 'top center',
                            }}
                          />
                          <div className="card-body p-4">
                            <div className="d-flex align-items-center mb-3">
                              <span className="badge bg-secondary me-2">{article.category}</span>
                              <small className="text-muted">
                                {formatMarathiDate(article.date || article.publishedAt)}
                              </small>
                            </div>
                            <h5 className="card-title mb-3">{article.title}</h5>
                            <p className="card-text text-muted mb-3">
                              {expandedArticles.includes(article.id)
                                ? article.content || article.summary
                                : `${article.summary.slice(0, 100)}...`}
                            </p>
                            <button
                              className="btn btn-outline-primary btn-sm"
                              onClick={() => toggleArticleExpansion(article.id)}
                            >
                              {expandedArticles.includes(article.id) ? 'कमी वाचा' : 'अधिक वाचा'}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center text-muted py-5">
                      <p>या प्रकारात सध्या कोणतीही बातमी उपलब्ध नाही.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Pagination */}
              <div className="d-flex justify-content-center mt-5">
                <nav aria-label="News pagination">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <span className="page-link">मागील</span>
                    </li>
                    <li className="page-item active">
                      <span className="page-link">१</span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        २
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        ३
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        पुढील
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

News.displayName = 'News';
export default News;
