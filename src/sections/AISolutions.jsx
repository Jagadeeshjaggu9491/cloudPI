import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCheckCircle, FaBrain, FaRegCompass, FaBolt } from 'react-icons/fa';
import AnimatedHeading from '../components/AnimatedHeading';
import '../styles/AISolutions.css';

gsap.registerPlugin(ScrollTrigger);

export default function AISolutions() {
  const sectionRef = useRef(null);
  const graphRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal visual graph
      gsap.from(graphRef.current, {
        x: -60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

      // Reveal text block items
      gsap.from(textRef.current.children, {
        x: 60,
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
    <section className="ai-solutions-section section-padding" ref={sectionRef}>
      {/* Decorative Blob */}
      <div className="glow-blob blob-pink" style={{ top: '25%', left: '10%' }}></div>

      <div className="container">
        <div className="row align-items-center justify-content-between">
          
          {/* Left Column - Graphic SVG mesh connections */}
          <div className="col-lg-6 mb-5 mb-lg-0" ref={graphRef}>
            <div className="ai-graph-container relative flex items-center justify-center">
              
              {/* Radial connecting graph background */}
              <svg className="graph-svg-canvas w-full h-full absolute" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="var(--accent-secondary)" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                {/* Connecting paths */}
                <path d="M 80,120 L 200,200" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 320,120 L 200,200" stroke="url(#line-grad)" strokeWidth="2" />
                <path d="M 80,280 L 200,200" stroke="url(#line-grad)" strokeWidth="2.5" />
                <path d="M 320,280 L 200,200" stroke="url(#line-grad)" strokeWidth="1.5" strokeDasharray="3 3" />
                
                {/* Connecting pulses */}
                <circle cx="140" cy="160" r="4" fill="var(--accent-secondary)">
                  <animate attributeName="cx" from="80" to="200" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="cy" from="120" to="200" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>

              {/* Pulsing Nodes */}
              <div className="graph-node node-center glass-panel">
                <FaBrain className="node-icon text-purple" />
              </div>
              
              <div className="graph-node node-top-left glass-card micro-node">
                <FaBolt className="node-icon text-cyan" />
              </div>

              <div className="graph-node node-top-right glass-card micro-node">
                <span className="node-stat-num">99.8%</span>
              </div>

              <div className="graph-node node-bottom-left glass-card micro-node">
                <FaRegCompass className="node-icon text-pink" />
              </div>

              <div className="graph-node node-bottom-right glass-card micro-node">
                <span className="node-stat-num">0.1ms</span>
              </div>

            </div>
          </div>

          {/* Right Column - Text parameters */}
          <div className="col-lg-5" ref={textRef}>
            <span className="section-subtitle">Cognitive Cloud Controls</span>
            <AnimatedHeading className="section-title text-gradient-primary">
              Orchestrate High-Performance <span className="text-gradient-accent">AI Infrastructures</span>
            </AnimatedHeading>
            <p className="ai-solutions-desc mb-4">
              Our automated cognitive engine intercepts multi-tenant servers, adjusting active CPU scaling properties and storage nodes based on live predictive traffic patterns.
            </p>

            <ul className="ai-features-list flex flex-col gap-3">
              {[
                'Self-tuning network latency algorithms.',
                'Predictive autoscaling matching model compute requirements.',
                'Automatic instance enclaves memory purge on termination.'
              ].map((feat, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <FaCheckCircle className="check-icon text-indigo" />
                  <span className="ai-feature-txt">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
