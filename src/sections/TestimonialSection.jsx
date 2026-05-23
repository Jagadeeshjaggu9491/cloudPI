// Testimonials.jsx

import { useEffect, useRef } from "react";
import "../styles/TestimonialSection.css";

const testimonials = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    quote:
      "Qarin keeps our growing team aligned and productive. From task tracking to smart insights, everything just works, it feels like the future of sales",
    name: "David Lee",
    role: "Head of Operations",
    company: "Foresight",
    revenue: "364%",
    efficiency: "21X",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    quote:
      "Qarin completely transformed how our small firm operates. After implementing the platform, our sales grew by 30%.",
    name: "Stefan Persson",
    role: "Product Manager",
    company: "swift",
    revenue: "248%",
    efficiency: "15X",
  },
];

export default function Testimonials() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const animateNumber = (element, targetValue) => {
      const numericTarget = parseInt(targetValue.replace(/\D/g, ""), 10) || 0;
      const suffix = targetValue.replace(/\d/g, "");
      const duration = 900;
      const startTime = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const current = Math.floor(progress * numericTarget);
        element.textContent = `${current}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          element.textContent = `${numericTarget}${suffix}`;
        }
      };

      requestAnimationFrame(tick);
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          const revenueEl = entry.target.querySelector(".revenue-count");
          const efficiencyEl = entry.target.querySelector(".efficiency-count");

          if (revenueEl) {
            animateNumber(revenueEl, revenueEl.dataset.target);
          }
          if (efficiencyEl) {
            animateNumber(efficiencyEl, efficiencyEl.dataset.target);
          }

          entry.target.dataset.animated = "true";
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.4,
    });

    cardsRef.current.filter(Boolean).forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="testimonials-section">
      <div className="container">
        {/* Top Content */}
        <div className="text-center top-content">
          <div className="trustpilot-wrap">
            <span className="excellent-text">Excellent</span>

            <div className="stars">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>

          <p className="review-text">
            4.9/5 Average Rating from 120+ Cloud Engineers
          </p>

          <h2 className="main-heading gradient-text">
            Loved by Cloud & FinOps Teams
          </h2>
        </div>

        {/* Cards */}
        <div className="testimonial-wrapper">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={item.id} ref={(el) => (cardsRef.current[index] = el)}>
              <div className="row g-0 align-items-stretch h-100">
                {/* Image */}
                <div className="col-lg-3">
                  <div className="image-box">
                    <img src={item.image} alt={item.name} />
                  </div>
                </div>

                {/* Content */}
                <div className="col-lg-5">
                  <div className="content-box">
                    <p className="quote">“{item.quote}”</p>

                    <div className="bottom-content">
                      <div>
                        <h5>{item.name}</h5>
                        <span>{item.role}</span>
                      </div>

                      <div className="company-logo">
                        {item.company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="col-lg-4">
                  <div className="stats-box">
                    <div className="stat-item">
                      <h2>
                        <span className="revenue-count" data-target={item.revenue}>
                          {item.revenue}
                        </span>
                      </h2>
                      <p>
                        Revenue Boost in Last
                        <br />
                        30 Days
                      </p>
                    </div>

                    <div className="stat-item">
                      <h2>
                        <span className="efficiency-count" data-target={item.efficiency}>
                          {item.efficiency}
                        </span>
                      </h2>
                      <p>Team Efficiency</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}