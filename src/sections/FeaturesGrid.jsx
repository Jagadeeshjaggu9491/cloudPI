import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaNetworkWired, FaServer, FaChartPie, FaGlobe, FaSlidersH, FaShieldAlt } from 'react-icons/fa';
import '../styles/FeaturesGrid.css';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesGrid() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const features = [
    {
      icon: <FaNetworkWired />,
      title: 'Isolated Enclaves',
      desc: 'Secure VPC environments shielding your databases and model instances from external internet sniffers.',
      colorClass: 'purple'
    },
    {
      icon: <FaServer />,
      title: 'Bare-Metal Nodes',
      desc: 'Raw processing capabilities running directly on high-compute GPU frameworks without VM overhead.',
      colorClass: 'blue'
    },
    {
      icon: <FaChartPie />,
      title: 'Cost Allocation',
      desc: 'Map every byte and thread allocation to exact departments automatically with high accuracy.',
      colorClass: 'pink'
    },
    {
      icon: <FaGlobe />,
      title: 'Global Replication',
      desc: 'Edge caches keeping latency down and data replicated within standard regulatory boundaries.',
      colorClass: 'purple'
    },
    {
      icon: <FaSlidersH />,
      title: 'Dynamic Rightsizing',
      desc: 'Scale down idle node clusters dynamically to secure budget headroom automatically.',
      colorClass: 'blue'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Active DDoS Shield',
      desc: 'Immediate volume attack interception and payload drop configurations.',
      colorClass: 'pink'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Reveal
      gsap.from('.features-header > *', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      // Cards staggered reveal
      gsap.from(gridRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="features-section section-padding" ref={sectionRef}>
      {/* Background soft glow blobs */}
      <div className="glow-blob blob-blue" style={{ top: '15%', left: '10%' }}></div>
      <div className="glow-blob blob-purple" style={{ bottom: '15%', right: '10%' }}></div>

      <div className="container">
        <div className="features-header text-center mb-5 pb-lg-3">
          <span className="section-subtitle">Core Infrastructure Features</span>
          <h2 className="section-title text-gradient-primary">
            Built for High-Scale <span className="text-gradient-accent">Compute Grids</span>
          </h2>
          <p className="section-desc mx-auto">
            Secure bare-metal nodes, sub-millisecond edge routes, and real-time cost-controls tailored to enterprise requirements.
          </p>
        </div>

        <div className="row g-4" ref={gridRef}>
          {features.map((feat, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="glass-card feature-grid-card">
                <div className={`feature-icon-wrapper ${feat.colorClass} mb-4`}>
                  {feat.icon}
                </div>
                <h4 className="feature-grid-title">{feat.title}</h4>
                <p className="feature-grid-desc">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
