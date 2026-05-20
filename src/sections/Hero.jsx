// HeroSection.jsx

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import dashboardImgOne from "../assets/images/dashboard-1.png";
import dashboardImgTwo from "../assets/images/dashboard-2.png";
import dashboardImgThree from "../assets/images/dashboard-3.png";
import dashboardImgFour from "../assets/images/dashboard-4.png";
import gradientBg from "../assets/images/backgrounds/hero-gradient-bg.png";

import "../styles/Hero.css";

gsap.registerPlugin(ScrollTrigger);

const slideData = [
  {
    badge: "Cloud Cost Challenge ↗",
    titleTop: "Reduce Your Cloud Costs",
    titleBottom: "Up to 30%",
    subtitle:
      "Automatically detect waste, optimize resources, and reduce cloud spending across AWS, Azure, and GCP.",
    primary: "Book a Demo",
    secondary: "Start Your Trial ↗",
    image: dashboardImgOne,
  },

  {
    badge: "AI Optimization ↗",
    titleTop: "Manage Your Sales Process",
    titleBottom: "With Clarity and Control",
    subtitle:
      "Get real-time recommendations, rightsizing, and predictable savings across all cloud providers.",
    primary: "See Savings",
    secondary: "Start Free Trial ↗",
    image: dashboardImgTwo,
  },

  {
    badge: "Smart Forecasting ↗",
    titleTop: "Unify Budgets, Usage",
    titleBottom: "and Forecasting",
    subtitle:
      "Monitor every expense in one pane with AI alerts for anomalies and usage drift.",
    primary: "View Demo",
    secondary: "Begin Trial ↗",
    image: dashboardImgThree,
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideRefs = useRef([]);
  const dashboardRefs = useRef([]);

  const isTransitioning = useRef(false);

  // PREMIUM RIGHT TO LEFT SLIDE
  const goToIndex = (nextIndex) => {
    const normalizedIndex =
      (nextIndex + slideData.length) % slideData.length;

    if (
      normalizedIndex === activeIndex ||
      isTransitioning.current
    )
      return;

    isTransitioning.current = true;

    const currentSlide =
      slideRefs.current[activeIndex];

    const nextSlide =
      slideRefs.current[normalizedIndex];

    // NEXT START POSITION
    gsap.set(nextSlide, {
      xPercent: 100,
      opacity: 1,
      zIndex: 3,
    });

    gsap.timeline({
      defaults: {
        duration: 1.2,
        ease: "power4.inOut",
      },

      onComplete: () => {
        setActiveIndex(normalizedIndex);
        isTransitioning.current = false;
      },
    })

      // CURRENT OUT LEFT
      .to(
        currentSlide,
        {
          xPercent: -30,
          opacity: 0,
          scale: 0.96,
          filter: "blur(6px)",
        },
        0
      )

      // NEXT ENTER FROM RIGHT
      .to(
        nextSlide,
        {
          xPercent: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        },
        0
      );
  };

  useEffect(() => {

    // INITIAL STATES
    gsap.set(slideRefs.current, {
      opacity: 0,
      xPercent: 100,
    });

    gsap.set(slideRefs.current[0], {
      opacity: 1,
      xPercent: 0,
    });

    // FLOATING EFFECT
    const floatAnim = gsap.to(".dashboard-image", {
      y: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 5,
    });

    // SCROLL SCALE EFFECT
    dashboardRefs.current.forEach((dashboard) => {
      gsap.to(dashboard, {
        scale: 1,

        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });

    return () => {
      floatAnim.kill();

      ScrollTrigger.getAll().forEach((trigger) =>
        trigger.kill()
      );
    };
  }, []);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      goToIndex(activeIndex + 1);
    }, 7000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="hero-section">

      <div className="container hero-bg">

        <div className="hero-slider">

          {slideData.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${
                index === activeIndex ? "active" : ""
              }`}
              ref={(el) =>
                (slideRefs.current[index] = el)
              }
            >
              {/* HERO CONTENT */}
              <div className="hero-content text-center">

                <div className="hero-badge">
                  {slide.badge}
                </div>

                <h1 className="hero-title">
                  {slide.titleTop}
                  <br />
                  {slide.titleBottom}
                </h1>

                <p className="hero-subtitle">
                  {slide.subtitle}
                </p>

                <div className="hero-buttons">

                  <button className="hero-btn-primary">
                    {slide.primary}
                  </button>

                  <button className="hero-btn-secondary">
                    {slide.secondary}
                  </button>

                </div>
              </div>

              {/* DASHBOARD */}
              <div className="dashboard-wrapper">

                <img
                  ref={(el) =>
                    (dashboardRefs.current[index] = el)
                  }
                  src={slide.image}
                  alt="dashboard"
                  className="img-fluid dashboard-image"
                />

              </div>
            </div>
          ))}

          {/* CONTROLS */}
          <div className="slider-controls">

            <button
              className="slider-arrow"
              onClick={() =>
                goToIndex(activeIndex - 1)
              }
            >
              ‹
            </button>

            <button
              className="slider-arrow"
              onClick={() =>
                goToIndex(activeIndex + 1)
              }
            >
              ›
            </button>

          </div>

        </div>
      </div>

      {/* BACKGROUND IMAGE */}
      {/* <div className="hero-gradient-bg">
        <img
          src={gradientBg}
          alt="gradient-background"
        />
      </div> */}

    </section>
  );
};

export default HeroSection;