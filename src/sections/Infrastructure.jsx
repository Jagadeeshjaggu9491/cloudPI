import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaServer, FaMicrochip, FaDatabase } from 'react-icons/fa';
import '../styles/Infrastructure.css';

gsap.registerPlugin(ScrollTrigger);

export default function Infrastructure() {
  const [load, setLoad] = useState(48.2);
  const [activeNodes, setActiveNodes] = useState(148);
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  // Simulate active load fluctuations
  useEffect(() => {
    const timer = setInterval(() => {
      setLoad((prev) => {
        const delta = (Math.random() - 0.5) * 4;
        return parseFloat(Math.max(30, Math.min(95, prev + delta)).toFixed(1));
      });
      setActiveNodes((prev) => {
        const delta = Math.random() > 0.6 ? (Math.random() > 0.5 ? 1 : -1) : 0;
        return Math.max(120, Math.min(200, prev + delta));
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left side content reveal
      gsap.from(leftRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

      // Right side dashboard reveal
      gsap.from(rightRef.current, {
        x: 60,
        opacity: 0,
        duration: 1.2,
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
    <section className="infra-section section-padding" ref={sectionRef}>
      <div className="glow-blob blob-purple" style={{ top: '15%', left: '5%' }}></div>
      <div className="glow-blob blob-blue" style={{ bottom: '15%', right: '5%' }}></div>

      <div className="container">
        <div className="row align-items-center justify-content-between">
          
          {/* Left Column - Content */}
          <div className="col-lg-5 mb-5 mb-lg-0" ref={leftRef}>
            <span className="section-subtitle">Bare-Metal Orchestrator</span>
            <h2 className="section-title text-gradient-primary">
              Global Bare-Metal <span className="text-gradient-accent">GPU Infrastructure</span>
            </h2>
            <p className="infra-desc mb-4">
              Our isolated nodes communicate over private optical mesh systems, delivering pure physical bare-metal computing resources without hypervisor layers.
            </p>

            <div className="infra-stats flex flex-col gap-4">
              {[
                { title: 'Sub-Millisecond Connections', desc: 'Direct optical dark fibers routing traffic to exact server pools instantly.' },
                { title: 'AES-256 Memory Encapsulation', desc: 'Secure computing pipelines preventing side-channel memory sniffers.' },
                { title: 'Autonomous Auto-Failover', desc: 'Automatic workload shifting to active nodes during high-load peaks.' }
              ].map((item, idx) => (
                <div key={idx} className="infra-stat-box flex gap-3">
                  <div className="infra-bullet">0{idx + 1}</div>
                  <div>
                    <h6>{item.title}</h6>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Dashboard visualization */}
          <div className="col-lg-6" ref={rightRef}>
            <div className="infra-dashboard-mockup glass-card relative">
              
              {/* Top Bar Header */}
              <div className="dash-header flex items-center justify-between mb-4 pb-3 border-b border-indigo-50/20">
                <span className="dash-title">ORCHESTRATOR LIVE LOGS</span>
                <div className="flex items-center gap-2">
                  <span className="pulse-green-dot"></span>
                  <span className="dash-status">ACTIVE CLUSTER CONNECTED</span>
                </div>
              </div>

              {/* Progress and Live Parameters */}
              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <div className="param-card glass-panel flex flex-col gap-1 p-3">
                    <span className="param-label flex items-center gap-2">
                      <FaServer className="text-indigo" /> Node Array Load
                    </span>
                    <span className="param-value">{load}%</span>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mt-2">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-1000"
                        style={{ width: `${load}%`, height: '100%', background: 'linear-gradient(90deg, var(--accent-secondary), var(--accent-primary))' }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="param-card glass-panel flex flex-col gap-1 p-3">
                    <span className="param-label flex items-center gap-2">
                      <FaMicrochip className="text-pink" /> Active Nodes
                    </span>
                    <span className="param-value">{activeNodes}</span>
                    <span className="param-subtext">Online Threads: 4.6K</span>
                  </div>
                </div>
              </div>

              {/* Radar visualization */}
              <div className="radar-canvas-mock flex items-center justify-center relative p-5 bg-indigo-50/20 rounded-xl border border-indigo-50/20">
                <div className="radar-circle circle-1"></div>
                <div className="radar-circle circle-2"></div>
                <div className="radar-circle circle-3"></div>
                <div className="radar-sweeper"></div>
                <FaDatabase size={32} className="radar-center-icon text-indigo" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
