import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCheck } from 'react-icons/fa';
import '../styles/PricingPreview.css';

gsap.registerPlugin(ScrollTrigger);

export default function PricingPreview() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'annual'
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  const plans = [
    {
      name: 'Starter Node',
      priceMonthly: 49,
      priceAnnual: 39,
      desc: 'Perfect for developers exploring prototype models or scaling small projects.',
      features: [
        'Dedicated CPU (1 Core)',
        '10GB High Speed Storage',
        'Shared GPU Access',
        'Standard Edge Syncing',
        '24h Email Support'
      ],
      highlight: false,
      btnText: 'Launch Instance'
    },
    {
      name: 'Professional Cluster',
      priceMonthly: 199,
      priceAnnual: 159,
      desc: 'Ideal for scaling production web APIs, automated AI systems and database nodes.',
      features: [
        'Dedicated CPU (4 Cores)',
        '50GB NVMe SSD Storage',
        'Dedicated GPU (1x H100)',
        'Global Edge Replication',
        '24/7 Priority SLA Channels',
        'Anomalies Billing Alerting'
      ],
      highlight: true,
      btnText: 'Start Free Trial'
    },
    {
      name: 'Enterprise Array',
      priceMonthly: 499,
      priceAnnual: 399,
      desc: 'Custom bare-metal deployments built for heavy training runs and huge compute grids.',
      features: [
        'Custom CPU/GPU Allocations',
        '1TB+ High Speed NVMe Arrays',
        'Multi-Tenant Tenant Isolation',
        'Unlimited Edge Edge Nodes',
        'Dedicated SLA Engineer',
        'Custom Contract Billing'
      ],
      highlight: false,
      btnText: 'Contact Sales'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered cards entry
      gsap.from(cardsRef.current.children, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="pricing-section section-padding" ref={sectionRef}>
      {/* Decorative Blob */}
      <div className="glow-blob blob-blue" style={{ top: '25%', left: '10%' }}></div>
      <div className="glow-blob blob-purple" style={{ bottom: '15%', right: '10%' }}></div>

      <div className="container">
        <div className="pricing-header text-center mb-5">
          <span className="section-subtitle">Predictable Costing</span>
          <h2 className="section-title text-gradient-primary">
            Flexible Plans Built for <span className="text-gradient-accent">Scale</span>
          </h2>
          <p className="section-desc mx-auto mb-4">
            Zero configuration overhead. Autoscale compute capacities seamlessly and control billing surges dynamically.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="billing-toggle-wrapper flex items-center justify-center gap-3">
            <span className={`billing-label ${billingCycle === 'monthly' ? 'active' : ''}`}>Monthly</span>
            <button 
              className={`pricing-switch ${billingCycle === 'annual' ? 'switched' : ''}`}
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
            >
              <div className="switch-dot"></div>
            </button>
            <span className={`billing-label flex items-center gap-2 ${billingCycle === 'annual' ? 'active' : ''}`}>
              Annual <span className="save-badge">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="row g-4 justify-content-center align-items-stretch" ref={cardsRef}>
          {plans.map((plan, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className={`pricing-card glass-card ${plan.highlight ? 'popular' : ''}`}>
                {plan.highlight && <div className="popular-badge">MOST POPULAR</div>}
                
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-desc">{plan.desc}</p>

                <div className="price-display flex items-baseline gap-2 mb-4">
                  <span className="currency">$</span>
                  <span className="price text-gradient-primary">
                    {billingCycle === 'monthly' ? plan.priceMonthly : plan.priceAnnual}
                  </span>
                  <span className="period">/month</span>
                </div>

                <ul className="plan-features flex flex-col gap-3 mb-5">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="feature-check">
                        <FaCheck size={10} />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button className={`btn-pricing w-full ${plan.highlight ? 'btn-popular' : 'btn-normal'}`}>
                  {plan.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
