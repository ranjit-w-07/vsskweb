import React, { useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentSlide } from '../../store/slices/uiSlice';

const HeroSlider = memo(({ slides = [] }) => {
  const dispatch = useDispatch();
  const { currentSlide } = useSelector((state) => state.ui);

  const handleSlideChange = (index) => {
    dispatch(setCurrentSlide(index));
  };

  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      dispatch(setCurrentSlide(nextSlide));
    }, 8000);

    return () => clearInterval(interval);
  }, [currentSlide, dispatch, slides.length]);

  if (slides.length === 0) {
    return (
      <section className="hero-slider">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: '400px' }}
        >
          <div className="text-center">
            <i className="fas fa-spinner fa-spin fa-3x text-primary mb-3"></i>
            <p>Loading slides...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="hero-slider">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="false">
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === currentSlide ? 'active' : ''}
              aria-current={index === currentSlide ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              onClick={() => handleSlideChange(index)}
            ></button>
          ))}
        </div>

        {/* Carousel Inner */}
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="position-relative w-100 h-100">
                {/* Background Blurred Image */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(25px) brightness(0.5)',
                    zIndex: 1,
                  }}
                ></div>

                {/* Foreground Image */}
                <img
                  src={slide.image}
                  className="position-relative mx-auto d-block"
                  alt={slide.title}
                  style={{
                    height: '100vh',
                    maxHeight: '100vh',
                    objectFit: 'contain',
                    position: 'relative',
                    zIndex: 2,
                  }}
                />

                {/* Caption */}
                <div className="carousel-caption d-none d-md-block" style={{ zIndex: 3 }}>
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 text-center">
                        <h2 className="display-4 fw-bold text-white mb-3 slide-title">
                          {slide.title}
                        </h2>
                        {slide.subtitle && <h4 className="text-white-50 mb-3">{slide.subtitle}</h4>}
                        {slide.description && (
                          <p className="lead text-white">{slide.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          onClick={() => handleSlideChange((currentSlide - 1 + slides.length) % slides.length)}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={() => handleSlideChange((currentSlide + 1) % slides.length)}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
});

export default HeroSlider;
