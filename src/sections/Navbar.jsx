import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaBars, FaTimes, FaChevronDown, FaArrowRight,
  FaBolt, FaLayerGroup, FaProjectDiagram, FaCloud, FaShieldAlt,
  FaChartBar, FaDollarSign, FaCrop, FaChartPie,
  FaUserTie, FaUsers, FaQuestion, FaVideo, FaPlayCircle,
  FaBook, FaFileAlt, FaBriefcase, FaBuilding, FaCalendarCheck,
  FaStar, FaLock, FaRocket
} from 'react-icons/fa';
import '../styles/Navbar.css';
import Logo from '../assets/logo.png'

const PLATFORM_ITEMS = [
  { title: 'Platform Capabilities', icon: <FaBolt />, desc: 'Full-stack cloud control layer' },
  { title: 'Integrations', icon: <FaProjectDiagram />, desc: 'Connect 200+ cloud services' },
  { title: 'Intelligent Workflows', icon: <FaLayerGroup />, desc: 'Event-driven task scheduling' },
  { title: 'Multi Cloud Cost', icon: <FaCloud />, desc: 'Unified cost visibility' },
  { title: 'Policy Engine', icon: <FaShieldAlt />, desc: 'Compliance at enterprise scale' },
  { title: 'Cost Allocation', icon: <FaDollarSign />, desc: 'Tag-based allocation & chargeback' },
  { title: 'Billing Analysis', icon: <FaChartBar />, desc: 'Deep-dive usage anomalies' },
  { title: 'Rightsizing', icon: <FaCrop />, desc: 'AI-powered resource sizing' },
  { title: 'Dashboards & Reports', icon: <FaChartPie />, desc: 'Real-time custom reporting' },
];

const SOLUTION_ITEMS = ['Solutions by Role', 'Solutions by Persona', 'Why CloudPi'];
const SOLUTION_ICONS = [<FaUserTie />, <FaUsers />, <FaQuestion />];

const COMPANY_ITEMS = [
  { title: 'About', icon: <FaBuilding />, desc: 'Our mission, vision & core team.' },
  { title: 'Book Demo', icon: <FaCalendarCheck />, desc: 'Schedule a custom walkthrough.' },
  { title: 'Security', icon: <FaLock />, desc: 'Zero-trust enterprise protection.' },
  { title: 'Features', icon: <FaStar />, desc: 'Deep dive platform capabilities.' },
];

const LEARN_ITEMS = [
  { label: 'Documentation', icon: <FaBook /> },
  { label: 'FAQ', icon: <FaQuestion /> },
  { label: 'Videos', icon: <FaVideo /> },
];

const CASE_STUDY_ITEMS = [
  { label: 'AWS S3 Cost Surge', icon: <FaFileAlt /> },
  { label: 'Freight Manufacturer', icon: <FaBriefcase /> },
  { label: 'API Cost Tracking', icon: <FaChartBar /> },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (index) =>
    setActiveDropdown(activeDropdown === index ? null : index);

  return (
    <>
      <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-fluid px-md-4">
          <div className="navbar-wrapper">

            {/* Logo */}
            <Link to="/" className="navbar-logo">
              {/* <div className="logo-icon" />
              <span>CloudPi<span>.ai</span></span> */}
              <img src={Logo} alt="Logo" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav d-none d-lg-flex">
              <ul className="nav-list">

                <li className="nav-item">
                  <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                </li>

                {/* ── Platform Mega Menu ── */}
                <li className="nav-item has-dropdown">
                  <button className="nav-link nav-btn">
                    Platform <FaChevronDown className="arrow-icon" size={10} />
                  </button>
                  <div className="mega-menu">
                    <div className="mega-menu-content">

                      {/* Grid of platform items */}
                      <div className="mega-menu-links grid-3">
                        {PLATFORM_ITEMS.map((item, idx) => (
                          <Link to="/services" key={idx} className="mega-link-item">
                            <div className="icon-box">{item.icon}</div>
                            <div>
                              <h4>{item.title}</h4>
                              <p>{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Right Visual Panel */}
                      <div className="mega-panel-right">
                        <div className="mega-panel-badge">
                          <FaRocket size={12} /> Platform Preview
                        </div>
                        <h4 className="mega-panel-title">CloudPi Platform</h4>
                        <p className="mega-panel-desc">
                          Govern and optimize multi-cloud spending with absolute precision using neural anomaly calculations.
                        </p>
                        <div className="mega-panel-stat">
                          <div className="mega-panel-stat-row">
                            <span>Cost Optimization</span>
                            <span className="stat-badge">+40% ROI</span>
                          </div>
                          <div className="mega-progress">
                            <div className="mega-progress-fill" style={{ width: '75%' }} />
                          </div>
                        </div>
                        <div className="mega-panel-stat mt-3">
                          <div className="mega-panel-stat-row">
                            <span>Security Score</span>
                            <span className="stat-badge green">99.9%</span>
                          </div>
                          <div className="mega-progress">
                            <div className="mega-progress-fill green" style={{ width: '90%' }} />
                          </div>
                        </div>
                        <Link to="/services" className="mega-cta-btn">
                          Explore Platform <FaArrowRight size={10} />
                        </Link>
                      </div>

                    </div>
                  </div>
                </li>

                {/* ── Solutions Mega Menu ── */}
                <li className="nav-item has-dropdown">
                  <button className="nav-link nav-btn">
                    Solutions <FaChevronDown className="arrow-icon" size={10} />
                  </button>
                  <div className="mega-menu mega-sm">
                    <div className="mega-menu-content">
                      <div className="mega-col">
                        <span className="mega-col-label">Our Solutions</span>
                        <ul className="mega-simple-list">
                          {SOLUTION_ITEMS.map((item, idx) => (
                            <li key={idx}>
                              <Link to="/solutions" className="mega-simple-link">
                                <span className="simple-icon">{SOLUTION_ICONS[idx]}</span>
                                {item}
                                <FaArrowRight size={10} className="ml-auto link-arrow" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mega-divider" />
                      <div className="mega-col">
                        <span className="mega-col-label">Why Choose Us</span>
                        <div className="value-prop-card">
                          <h4>Value Proposition</h4>
                          <p>Govern and optimize multi-cloud spending with absolute precision using neural anomaly calculations.</p>
                          <Link to="/solutions" className="mega-cta-link">
                            Explore Platform Value <FaArrowRight size={10} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* ── Company Mega Menu ── */}
                <li className="nav-item has-dropdown">
                  <button className="nav-link nav-btn">
                    Company <FaChevronDown className="arrow-icon" size={10} />
                  </button>
                  <div className="mega-menu mega-sm">
                    <div className="mega-menu-content">
                      <div className="mega-menu-links grid-2 full-width">
                        {COMPANY_ITEMS.map((item, idx) => (
                          <Link to="/about" key={idx} className="mega-link-item">
                            <div className="icon-box">{item.icon}</div>
                            <div>
                              <h4>{item.title}</h4>
                              <p>{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>

                {/* Pricing */}
                <li className="nav-item">
                  <Link to="/pricing" className="nav-link">Pricing</Link>
                </li>

                {/* ── Resources Mega Menu ── */}
                <li className="nav-item has-dropdown">
                  <button className="nav-link nav-btn">
                    Resources <FaChevronDown className="arrow-icon" size={10} />
                  </button>
                  <div className="mega-menu mega-sm">
                    <div className="mega-menu-content">
                      <div className="mega-col">
                        <span className="mega-col-label">Learn</span>
                        <ul className="mega-simple-list">
                          {LEARN_ITEMS.map((item, idx) => (
                            <li key={idx}>
                              <Link to="/docs" className="mega-simple-link">
                                <span className="simple-icon">{item.icon}</span>
                                {item.label}
                                <FaArrowRight size={10} className="ml-auto link-arrow" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mega-divider" />
                      <div className="mega-col">
                        <span className="mega-col-label">Case Studies</span>
                        <ul className="mega-simple-list">
                          {CASE_STUDY_ITEMS.map((item, idx) => (
                            <li key={idx}>
                              <Link to="/docs" className="mega-simple-link">
                                <span className="simple-icon">{item.icon}</span>
                                {item.label}
                                <FaArrowRight size={10} className="ml-auto link-arrow" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

              </ul>
            </nav>

            {/* CTA / Action */}
            <div className="navbar-actions d-none d-lg-flex">
              {/* <Link to="/contact" className="btn-contact">Contact Sales</Link> */}
              <Link to="/get-started" className="btn-premium btn-premium-primary">
                Get Started <FaArrowRight size={11} />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button className="mobile-toggle-btn d-lg-none" onClick={() => setMobileMenuOpen(true)}>
              <FaBars size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <Link to="/" className="navbar-logo" onClick={() => setMobileMenuOpen(false)}>
            <div className="logo-icon" />
            <span>CloudPi<span>.ai</span></span>
          </Link>
          <button className="close-btn" onClick={() => setMobileMenuOpen(false)}>
            <FaTimes size={18} />
          </button>
        </div>
        <div className="mobile-menu-body">
          <ul className="mobile-nav-list">
            <li>
              <Link to="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            </li>
            {[
              { label: 'Platform', idx: 1, links: [{ label: 'Platform Capabilities', to: '/services' }, { label: 'Integrations', to: '/services' }, { label: 'Intelligent Workflows', to: '/services' }, { label: 'Multi Cloud Cost', to: '/services' }] },
              { label: 'Solutions', idx: 2, links: [{ label: 'Solutions by Role', to: '/solutions' }, { label: 'Solutions by Persona', to: '/solutions' }, { label: 'Why CloudPi', to: '/solutions' }] },
              { label: 'Company', idx: 3, links: [{ label: 'About', to: '/about' }, { label: 'Book Demo', to: '/about' }, { label: 'Security', to: '/about' }] },
              { label: 'Resources', idx: 4, links: [{ label: 'Documentation', to: '/docs' }, { label: 'FAQ', to: '/docs' }, { label: 'Case Studies', to: '/docs' }] },
            ].map(({ label, idx, links }) => (
              <li key={idx}>
                <button className="mobile-nav-link" onClick={() => toggleDropdown(idx)}>
                  {label}
                  <FaChevronDown size={13} style={{ transform: activeDropdown === idx ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                </button>
                <div className={`mobile-submenu ${activeDropdown === idx ? 'expanded' : ''}`}>
                  {links.map((link, lIdx) => (
                    <Link key={lIdx} to={link.to} onClick={() => setMobileMenuOpen(false)}>{link.label}</Link>
                  ))}
                </div>
              </li>
            ))}
            <li>
              <Link to="/pricing" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            </li>
          </ul>
          <div className="mobile-actions mt-5 flex flex-col gap-3">
            <Link to="/get-started" className="btn-premium btn-premium-primary text-center" onClick={() => setMobileMenuOpen(false)}>
              Get Started <FaArrowRight size={11} />
            </Link>
            <Link to="/contact" className="btn-premium btn-premium-secondary text-center" onClick={() => setMobileMenuOpen(false)}>
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
