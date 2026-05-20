import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaGithub, FaDiscord, FaArrowRight, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="footer-section">
      <div className="container">
        
        {/* Top Footer Layout */}
        <div className="row g-5 mb-5 pb-5 border-b border-indigo-50/20">
          
          {/* Company Brand Column */}
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="navbar-logo mb-4">
              <div className="logo-icon"></div>
              <span>CloudPi<span>.ai</span></span>
            </Link>
            <p className="footer-desc mb-4">
              Next-generation cloud infrastructure built for high-compute AI models, scalable bare-metal nodes, and real-time billing anomalies cost controls.
            </p>
            {/* Social Icons */}
            <div className="social-links-box flex items-center gap-3">
              {[
                { icon: <FaTwitter />, link: '#' },
                { icon: <FaGithub />, link: '#' },
                { icon: <FaDiscord />, link: '#' }
              ].map((soc, idx) => (
                <a key={idx} href={soc.link} className="social-circle-btn">
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="footer-title">Platform</h5>
            <ul className="footer-links-list flex flex-col gap-3">
              <li><Link to="/services">Platform Capabilities</Link></li>
              <li><Link to="/services">Integrations</Link></li>
              <li><Link to="/services">Workflow Auto</Link></li>
              <li><Link to="/services">Multi Cloud Cost</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="footer-title">Resources</h5>
            <ul className="footer-links-list flex flex-col gap-3">
              <li><Link to="/docs">Documentation</Link></li>
              <li><Link to="/docs">FAQ</Link></li>
              <li><Link to="/docs">Videos Hub</Link></li>
              <li><Link to="/about">Security Audits</Link></li>
            </ul>
          </div>

          {/* Contact / Newsletter Column */}
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-title">Subscribe to Updates</h5>
            <p className="footer-desc mb-4">
              Get next-generation bare-metal releases, API optimization strategies, and system logs direct to your inbox.
            </p>
            {subscribed ? (
              <div className="glass-card sub-success-box text-center py-3">
                <span className="success-txt">✓ Thank you for subscribing!</span>
              </div>
            ) : (
              <form className="newsletter-form flex items-center relative" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  className="newsletter-input w-full"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="newsletter-submit-btn">
                  <FaArrowRight size={12} />
                </button>
              </form>
            )}

            {/* Direct Support */}
            <div className="footer-contact-details mt-4 flex flex-col gap-2">
              <span className="flex items-center gap-2 text-sm text-slate-500">
                <FaEnvelope size={12} className="text-accent-blue" style={{ color: 'var(--accent-primary)' }} /> sales@cloudpi.ai
              </span>
              <span className="flex items-center gap-2 text-sm text-slate-500">
                <FaMapMarkerAlt size={12} className="text-accent-purple" style={{ color: 'var(--accent-secondary)' }} /> San Francisco, CA
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Footer Layout */}
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <span className="copyright-txt">
              &copy; {new Date().getFullYear()} CloudPi.ai Technologies Inc. All rights reserved.
            </span>
          </div>
          <div className="col-md-6">
            <div className="bottom-links flex items-center justify-center justify-content-md-end gap-4">
              <Link to="/terms">Terms of Service</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
