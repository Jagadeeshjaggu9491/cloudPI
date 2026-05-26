import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaShieldAlt, FaKey, FaLock, FaGlobe } from 'react-icons/fa';
import AnimatedHeading from '../components/AnimatedHeading';
import '../styles/Security.css';

gsap.registerPlugin(ScrollTrigger);

export default function Security() {
  const sectionRef = useRef(null);
  const visualRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left side visual reveal
      gsap.from(visualRef.current, {
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

      // Right side content stagger reveal
      gsap.from(textRef.current.children, {
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="security-section section-padding" ref={sectionRef}>
      {/* Background blobs */}
      <div className="glow-blob blob-purple" style={{ top: '20%', left: '10%' }}></div>
      <div className="glow-blob blob-blue" style={{ bottom: '15%', right: '15%' }}></div>

      <div className="container">
        <div className="row align-items-center justify-content-between">
          
          {/* Left Column - Active Shield Visual */}
          <div className="col-lg-6 mb-5 mb-lg-0" ref={visualRef}>
            <div className="security-visual-wrapper flex items-center justify-center relative">
              {/* Radar rings */}
              <div className="shield-ring ring-1"></div>
              <div className="shield-ring ring-2"></div>
              <div className="shield-ring ring-3"></div>

              {/* Core Shield Display */}
              <div className="core-shield-box glass-panel flex items-center justify-center">
                <FaShieldAlt className="shield-glow-icon" />
              </div>

              {/* Floating micro stats */}
              <div className="glass-card micro-sec-stat card-top">
                <FaLock className="sec-stat-icon purple" />
                <div>
                  <span className="sec-label">Data Privacy</span>
                  <span className="sec-val">AES-256 Enabled</span>
                </div>
              </div>
              <div className="glass-card micro-sec-stat card-bottom">
                <FaGlobe className="sec-stat-icon blue" />
                <div>
                  <span className="sec-label">DDoS Shield</span>
                  <span className="sec-val">Active Auto Mitigation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Security Text */}
          <div className="col-lg-5" ref={textRef}>
            <span className="section-subtitle">Zero Trust Framework</span>
            <AnimatedHeading className="section-title text-gradient-primary">
              Hardened Enterprise <span className="text-gradient-accent">Security Shield</span>
            </AnimatedHeading>
            <p className="security-desc mb-4">
              Your company data remains fully encrypted at rest, in transit, and during compute execution. We adhere to rigorous ISO 27001, SOC 2 Type II, and GDPR compliance architectures.
            </p>

            <div className="sec-items flex flex-col gap-4">
              {[
                { title: 'End-to-End Cryptographic Enclaves', desc: 'Secure computing enclaves run model instances strictly without host memory access.' },
                { title: 'Advanced Cloud WAF Shield', desc: 'Dynamic firewall protocols detect and block volumetric attack payloads instantly.' },
                { title: 'Continuous Vulnerability Scanners', desc: 'Automatic file systems and containers audits detect dependency risks automatically.' }
              ].map((item, idx) => (
                <div key={idx} className="sec-item-box flex items-start gap-3">
                  <div className="sec-bullet">
                    <FaKey size={12} />
                  </div>
                  <div>
                    <h6>{item.title}</h6>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
