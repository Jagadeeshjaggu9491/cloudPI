import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import dashboardImgOne from "../assets/images/dashboard-1.png";
import dashboardImgTwo from "../assets/images/dashboard-2.png";
import dashboardImgThree from "../assets/images/dashboard-3.png";
import dashboardImgFour from "../assets/images/dashboard-4.png";
import "../styles/Hero.css";

gsap.registerPlugin(ScrollTrigger);

const slideData = [
  {
    badge: "Cloud Cost Challenge ↗",
    title: "Reduce Your Cloud Costs\nUp to 30%",
    subtitle: "Automatically detect waste, optimize resources, and reduce cloud spending across AWS, Azure, and GCP.",
    primary: "Book a Demo",
    secondary: "Start Your Trail ↗",
    image: dashboardImgOne,
  },

  {
    badge: "Cost Remediations ↗",
    title: "Workflow-Based\nCost Remediations",
    subtitle: "Automate cloud cost optimizations with workflow-driven remediations — rightsize resources, eliminate idle usage, and enforce cost-saving policies seamlessly.",
    primary: "Book a Demo",
    secondary: "Start Your Trail ↗",
    image: dashboardImgThree,
  },
  {
    badge: "Zero Pre-requisites ↗",
    title: "Zero Tagging Pre-requisite",
    subtitle: "Get meaningful cloud cost visibility from day one without waiting for perfect resource tags. CloudPi maps spend across AWS, Azure, and GCP using billing, usage, and metadata signals so teams can allocate and act faster.",
    primary: "Book a Demo",
    secondary: "Start Your Trail ↗",
    image: dashboardImgFour,
  },
  {
    badge: "Automated Savings ↗",
    title: "TRUE Automated Savings",
    subtitle: "Automatically identify optimization opportunities, eliminate idle resources, and implement cost-saving actions across AWS, Azure, and GCP — without manual effort.",
    primary: "Book a Demo",
    secondary: "Start Your Trail ↗",
    image: dashboardImgTwo,
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);

  const textContainerRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const isTransitioning = useRef(false);

  // 1. Initial Entrance Animations (runs once on load)
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Sequential staggered entrance transitions: blur to normal, down to up
    tl.fromTo(
      badgeRef.current,
      { y: 25, opacity: 0, filter: "blur(8px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8 }
    )
      .fromTo(
        titleRef.current,
        { y: 35, opacity: 0, filter: "blur(12px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.9 },
        "-=0.55"
      )
      .fromTo(
        subtitleRef.current,
        { y: 25, opacity: 0, filter: "blur(10px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8 },
        "-=0.55"
      )
      .fromTo(
        buttonsRef.current,
        { y: 20, opacity: 0, filter: "blur(8px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.7 },
        "-=0.55"
      )
      .fromTo(
        containerRef.current,
        { y: 45, opacity: 0, filter: "blur(15px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.1 },
        "-=0.55"
      );

    // 2. 3D ScrollTrigger Tilt Animation on the wrapper
    // The entire wrapper tilts back ("sleeps") and flattens out completely within 500px of scrolling down
    gsap.set(wrapperRef.current, {
      transformPerspective: 1200,
      rotateX: 25,
      scale: 0.9,
      transformOrigin: "top center",
    });

    const scrollAnim = gsap.to(wrapperRef.current, {
      rotateX: 0,
      scale: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",      // begins when top of page hits top of viewport
        end: "+=500",          // flattens out completely after 500px of scrolling down
        scrub: 1.2,            // links animation progress directly to scroll
      },
    });

    return () => {
      scrollAnim.scrollTrigger?.kill();
      scrollAnim.kill();
    };
  }, []);

  // 3. Premium Text Cross-fade Transition
  const changeSlide = (newIndex) => {
    if (isTransitioning.current || newIndex === activeIndex) return;
    isTransitioning.current = true;

    // Fade out current text slightly upwards
    gsap.to(textContainerRef.current, {
      opacity: 0,
      y: -15,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        // Switch indices
        setActiveIndex(newIndex);
        setDisplayIndex(newIndex);

        // Slide in and fade in the next text from below
        gsap.fromTo(
          textContainerRef.current,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            onComplete: () => {
              isTransitioning.current = false;
            },
          }
        );
      },
    });
  };

  // 4. Auto-play Slide Interval (6 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      const next = (activeIndex + 1) % slideData.length;
      changeSlide(next);
    }, 6000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const currentSlide = slideData[displayIndex];

  return (
    <section className="hero-section">
      <div className="container hero-container text-center">
        {/* Animated Text Block */}
        <div ref={textContainerRef} className="hero-text-block">
          {/* Eyebrow Badge */}
          <div ref={badgeRef} className="hero-badge">
            {currentSlide.badge}
          </div>

          {/* Title */}
          <h1 ref={titleRef} className="hero-title">
            {currentSlide.title.split("\n").map((line, idx) => (
              <span key={idx}>
                {line}
                {idx < currentSlide.title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p ref={subtitleRef} className="hero-subtitle">
            {currentSlide.subtitle}
          </p>

          {/* Buttons */}
          <div ref={buttonsRef} className="hero-buttons py-3">
            <button className="hero-btn-primary"><span>{currentSlide.primary}</span></button>
            <button className="hero-btn-secondary"><span>{currentSlide.secondary}</span></button>
          </div>
        </div>

        {/* Dashboard Image with Glowing Backdrop Container */}
        <div ref={containerRef} className="dashboard-glow-container">
          {/* Glassmorphic Navigation Buttons (Moved outside dashboard-wrapper) */}
          <button
            className="slider-nav-btn prev-btn text-white"
            onClick={() => changeSlide((activeIndex - 1 + slideData.length) % slideData.length)}
            aria-label="Previous Slide"
          >
            <HiOutlineChevronLeft />
          </button>

          <div ref={wrapperRef} className="dashboard-wrapper">
            {slideData.map((slide, idx) => (
              <img
                key={idx}
                src={slide.image}
                alt={`dashboard mockup ${idx + 1}`}
                className={`img-fluid dashboard-image ${idx === displayIndex ? "relative active" : "absolute"}`}
              />
            ))}
          </div>

          <button
            className="slider-nav-btn next-btn text-white"
            onClick={() => changeSlide((activeIndex + 1) % slideData.length)}
            aria-label="Next Slide"
          >
            <HiOutlineChevronRight />
          </button>
        </div>

        {/* Carousel Navigation dots (Moved to bottom of image) */}
        <div className="hero-carousel-dots">
          {slideData.map((_, idx) => (
            <button
              key={idx}
              className={`hero-dot ${idx === activeIndex ? "active" : ""}`}
              onClick={() => changeSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;