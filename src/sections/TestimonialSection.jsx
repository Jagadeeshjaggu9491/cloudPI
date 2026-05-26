// TestimonialSection.jsx

import { useEffect, useRef } from "react";
import "../styles/TestimonialSection.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedHeading from "../components/AnimatedHeading";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    quote:
      "Automation helped us enforce governance policies across all our cloud environments.",
    name: "Akki Vishnu Vardhan",
    role: "Marketing Lead",
    company: "Foresight",
    revenue: "364%",
    efficiency: "21X",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    quote:
      "We gained complete visibility into AWS and Azure costs within days of implementing CloudPi.",
    name: "Maria Lopez",
    role: "Cloud Engineer",
    company: "swift",
    revenue: "248%",
    efficiency: "15X",
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const animateNumber = (element, targetValue) => {
    if (!element || element.dataset.animated) return;
    element.dataset.animated = "true";

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

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 992px)", () => {
      // Desktop: Pin testimonials section and stack/slide cards in sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top -5%",      // Pin once section is near top of viewport
          end: "+=1000",         // Scroll distance for the cards overlap
          scrub: 1,              // Link animation to scroll position
          pin: true,             // Pin the container
          anticipatePin: 1,
        }
      });

      const cards = cardsRef.current.filter(Boolean);

      // Initial state: subsequent cards are offscreen below
      cards.forEach((card, index) => {
        if (index > 0) {
          gsap.set(card, {
            yPercent: 130,
            rotate: 0,
            transformOrigin: "center center"
          });
        }
      });

      // Animate first card's counters when section enters the screen
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          const firstCard = cards[0];
          if (firstCard) {
            const revenueEl = firstCard.querySelector(".revenue-count");
            const efficiencyEl = firstCard.querySelector(".efficiency-count");
            if (revenueEl) animateNumber(revenueEl, revenueEl.dataset.target);
            if (efficiencyEl) animateNumber(efficiencyEl, efficiencyEl.dataset.target);
          }
        }
      });

      // Build overlapping stack timelines
      cards.forEach((card, index) => {
        if (index > 0) {
          // Slide in subsequent cards from the bottom
          tl.to(card, {
            yPercent: 0,
            rotate: 0,
            duration: 1,
            ease: "power2.out",
            onStart: () => {
              const revenueEl = card.querySelector(".revenue-count");
              const efficiencyEl = card.querySelector(".efficiency-count");
              if (revenueEl) animateNumber(revenueEl, revenueEl.dataset.target);
              if (efficiencyEl) animateNumber(efficiencyEl, efficiencyEl.dataset.target);
            }
          });

          // Layer and scale/fade down previous card to convey depth
          tl.to(cards[index - 1], {
            scale: 0.94,
            opacity: 0.75,
            y: -30,
            duration: 0.7,
            ease: "power1.inOut"
          }, "-=1.0");
        }
      });
    });

    mm.add("(max-width: 991px)", () => {
      // Mobile: Standard slide-up entry animations
      const cards = cardsRef.current.filter(Boolean);

      cards.forEach((card) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          }
        });

        // Trigger counters when each card enters viewport on mobile
        ScrollTrigger.create({
          trigger: card,
          start: "top 80%",
          onEnter: () => {
            const revenueEl = card.querySelector(".revenue-count");
            const efficiencyEl = card.querySelector(".efficiency-count");
            if (revenueEl) animateNumber(revenueEl, revenueEl.dataset.target);
            if (efficiencyEl) animateNumber(efficiencyEl, efficiencyEl.dataset.target);
          }
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="testimonials-section" ref={sectionRef}>
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

          <AnimatedHeading
            text="Loved by Cloud & FinOps Teams"
            className="main-heading gradient-text"
          />
        </div>

        {/* Cards */}
        <div className="testimonial-wrapper">
          {testimonials.map((item, index) => (
            <div
              className="testimonial-card"
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
            >
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
