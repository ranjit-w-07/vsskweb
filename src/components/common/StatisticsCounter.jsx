import React, { useState, useEffect, useRef, memo, useCallback } from 'react';

const StatisticsCounter = memo(({ statistics = [] }) => {
  const [counters, setCounters] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // ✅ Use useCallback to define stable reference
  const startCounters = useCallback(() => {
    const marathiToEnglishDigits = (str) => {
      const map = {
        '०': '0',
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
      };
      return str.replace(/[०-९]/g, (d) => map[d] || d);
    };

    statistics.forEach((stat) => {
      const plain = marathiToEnglishDigits(stat.number);
      const targetNumber =
        typeof plain === 'string' ? parseInt(plain.replace(/[^\d]/g, '')) : plain;

      animateCounter(stat.id, targetNumber);
    });
  }, [statistics]);

  const animateCounter = (id, target) => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCounters((prev) => ({
        ...prev,
        [id]: Math.floor(current),
      }));
    }, duration / steps);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible, startCounters]); // ✅ Fixed missing dependency warning

  if (statistics.length === 0) {
    return (
      <section className="statistics-section py-5 bg-primary">
        <div className="container">
          <div className="text-center text-white">
            <p>Loading statistics...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="statistics-section py-5"
      style={{
        background: 'linear-gradient(135deg,rgb(20, 151, 226) 0%,rgb(26, 131, 218) 100%)', // ✅ color updated
        color: 'white',
      }}
    >
      <div className="container">
        <div className="row g-4">
          {statistics.map((stat) => (
            <div key={stat.id} className="col-lg-3 col-md-6 col-sm-6">
              <div className="text-center">
                <div className="mb-3">
                  <i className={`fas ${stat.icon} fa-3x text-white`}></i>
                </div>
                <div className="counter-wrapper">
                  <h2 className="counter-number fw-bold mb-0 text-white">
                    {counters[stat.id] || 0}
                    {stat.number && stat.number.includes('+') && '+'}
                  </h2>
                  <p className="counter-text mt-2 mb-0 text-white-50">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default StatisticsCounter;
