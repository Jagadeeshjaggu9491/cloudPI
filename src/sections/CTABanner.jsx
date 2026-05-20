import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import '../styles/CTABanner.css';

gsap.registerPlugin(ScrollTrigger);

export default function CTABanner() {
  const bannerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scale-up glow container on scroll
      gsap.from(bannerRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: bannerRef.current,
          start: 'top 85%',
        }
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="cta-section section-padding">
      <div className="container">
        <div className="cta-banner-wrapper glass-panel text-center" ref={bannerRef}>
          {/* Neon Gradient Glow overlays */}
          <div className="cta-glow glow-1"></div>
          <div className="cta-glow glow-2"></div>

          <span className="section-subtitle text-gradient-accent">LAUNCH TODAY</span>
          <h2 className="cta-title">
            Supercharge Your Cloud <br />
            <span>Compute Operations</span>
          </h2>
          <p className="cta-subtitle">
            Get H100 GPUs instances running inside secure enclaves within minutes. Scalable pricing with absolute billing cost protections.
          </p>

          <div className="cta-actions flex items-center justify-center gap-4">
            <button className="btn-premium btn-premium-primary">
              Deploy Instance <FaArrowRight size={12} />
            </button>
            <button className="btn-premium btn-premium-secondary">
              <FaCalendarAlt size={12} style={{ marginRight: '6px' }} /> Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
