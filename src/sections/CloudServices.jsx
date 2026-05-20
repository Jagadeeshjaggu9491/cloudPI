import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCloud, FaMicrochip, FaCodeBranch, FaServer, FaShieldAlt, FaChartBar } from 'react-icons/fa';
import '../styles/CloudServices.css';

gsap.registerPlugin(ScrollTrigger);

export default function CloudServices() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const services = [
    {
      title: 'Cloud Hosting',
      description: 'Ultra-fast scalable cloud nodes with isolated resources, custom scaling scripts, and fully dedicated CPUs.',
      icon: <FaCloud size={24} />,
      colorClass: 'blue'
    },
    {
      title: 'AI Automation',
      description: 'Model container orchestration enabling seamless AI pipelines to fire workloads on precise triggers.',
      icon: <FaMicrochip size={24} />,
      colorClass: 'purple'
    },
    {
      title: 'DevOps Pipelines',
      description: 'Continuous validation, isolated testing sandboxes, and instant rollbacks for robust deployment confidence.',
      icon: <FaCodeBranch size={24} />,
      colorClass: 'pink'
    },
    {
      title: 'Managed Server Arrays',
      description: 'Continuous systems orchestration handling updates, backups, replication, and node load balances.',
      icon: <FaServer size={24} />,
      colorClass: 'purple'
    },
    {
      title: 'Zero Trust Cyber Security',
      description: 'Next-level protection configurations, active threat scanning engines, and isolated server gateways.',
      icon: <FaShieldAlt size={24} />,
      colorClass: 'blue'
    },
    {
      title: 'Deep Analytics Engine',
      description: 'Microsecond billing calculations, resource load insights, and immediate alerts for cloud spending anomalies.',
      icon: <FaChartBar size={24} />,
      colorClass: 'pink'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.from('.services-header > *', {
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
    <section className="services-section section-padding" ref={sectionRef}>
      {/* Decorative Light Blobs */}
      <div className="glow-blob blob-purple" style={{ top: '20%', right: '5%' }}></div>
      <div className="glow-blob blob-blue" style={{ bottom: '10%', left: '5%' }}></div>

      <div className="container">
        <div className="services-header text-center mb-5 pb-lg-3">
          <span className="section-subtitle">Premium Cloud Solutions</span>
          <h2 className="section-title text-gradient-primary">
            Engineered for <span className="text-gradient-accent">Scale & Speed</span>
          </h2>
          <p className="section-desc mx-auto">
            Experience absolute control over computing power. Run next-generation workflows securely without configuration overhead.
          </p>
        </div>

        <div className="row g-4" ref={gridRef}>
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="glass-card service-card">
                <div className={`service-icon-box ${service.colorClass}`}>
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <div className="service-hover-indicator"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
