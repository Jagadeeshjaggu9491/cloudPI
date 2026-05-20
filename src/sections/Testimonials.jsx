import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/Testimonials.css';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "CloudPi's H100 bare-metal GPU enclaves reduced our model training cycle by 45%. The multi-tenant tenant isolation layer gave us absolute confidence to run fine-tuning on extremely sensitive clinical datasets.",
      author: "Dr. Elena Rostova",
      role: "Chief of AI Research",
      company: "BioMed Analytics",
      initials: "ER",
      gradient: "linear-gradient(135deg, #4A2C86 0%, #5BB4CC 100%)"
    },
    {
      quote: "Scaling our web application infrastructure used to require deep Kubernetes domain knowledge. With CloudPi's automated cluster array, our sandboxes launch instantly on trigger, saving our DevOps team hours of manual script orchestration.",
      author: "Marcus Vance",
      role: "VP of Engineering",
      company: "SaaSify Global",
      initials: "MV",
      gradient: "linear-gradient(135deg, #AC3DC7 0%, #E172CC 100%)"
    },
    {
      quote: "Our AWS S3 and API hosting bills were surging uncontrollably. CloudPi's Deep Analytics cost-controls and dynamic node rightsizing detected and terminated idle pods, reducing our monthly infrastructure billing by 38% in under 3 weeks.",
      author: "Sarah Jenkins",
      role: "Director of Operations",
      company: "Fintech Grid",
      initials: "SJ",
      gradient: "linear-gradient(135deg, #5BB4CC 0%, #AC3DC7 100%)"
    }
  ];

  // Auto loop through testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="testimonials-section section-padding">
      <div className="glow-blob blob-purple" style={{ top: '10%', right: '15%' }}></div>

      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="section-subtitle">Client Success</span>
            <h2 className="section-title text-gradient-primary">
              Validated by <span className="text-gradient-accent">Industry Leaders</span>
            </h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9 relative">
            
            {/* Active Testimonial Card */}
            <div className="testimonial-slider-container">
              {testimonials.map((test, index) => (
                <div 
                  key={index} 
                  className={`testimonial-slide glass-card ${index === activeIndex ? 'active' : ''}`}
                >
                  <FaQuoteLeft className="quote-icon" />
                  <p className="testimonial-quote">{test.quote}</p>
                  
                  <div className="client-info-box flex items-center gap-3">
                    <div 
                      className="client-avatar flex items-center justify-center" 
                      style={{ background: test.gradient }}
                    >
                      {test.initials}
                    </div>
                    <div>
                      <h5 className="client-name">{test.author}</h5>
                      <span className="client-role">{test.role}, <span className="text-slate-500">{test.company}</span></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Navigation Arrows */}
            <div className="slider-nav-btns flex justify-center gap-4 mt-4">
              <button className="slider-arrow-btn" onClick={handlePrev}>
                <FaChevronLeft size={12} />
              </button>
              
              {/* Slider dots */}
              <div className="slider-dots flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button 
                    key={idx} 
                    className={`slider-dot ${idx === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(idx)}
                  ></button>
                ))}
              </div>

              <button className="slider-arrow-btn" onClick={handleNext}>
                <FaChevronRight size={12} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
