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
  { title: 'Platform Capabilities', icon: <FaBolt />, desc: 'Full-stack cloud control layer', path: '/platform/platform-capabilities' },
  { title: 'Integrations', icon: <FaProjectDiagram />, desc: 'Connect 200+ cloud services', path: '/platform/integrations' },
  { title: 'Intelligent Workflows', icon: <FaLayerGroup />, desc: 'Event-driven task scheduling', path: '/platform/workflow-automation' },
  { title: 'Multi Cloud Cost', icon: <FaCloud />, desc: 'Unified cost visibility', path: '/platform/cloud-cost-analytics' },
  { title: 'Policy Engine', icon: <FaShieldAlt />, desc: 'Compliance at enterprise scale', path: '/platform/governance' },
  { title: 'Cost Allocation', icon: <FaDollarSign />, desc: 'Tag-based allocation & chargeback', path: '/platform/cost-allocation' },
  { title: 'Billing Analysis', icon: <FaChartBar />, desc: 'Deep-dive usage anomalies', path: '/platform/billing-analysis' },
  { title: 'Rightsizing', icon: <FaCrop />, desc: 'AI-powered resource sizing', path: '/platform/rightsizing' },
  { title: 'Dashboards & Reports', icon: <FaChartPie />, desc: 'Real-time custom reporting', path: '/platform/dashboards-reports' },
];

const SOLUTION_ITEMS = [
  { title: 'Solutions by Role', icon: <FaUserTie />, desc: 'Custom tools designed for FinOps, Engineering, and Finance.', path: '/solutions/by-role' },
  { title: 'Solutions by Persona', icon: <FaUsers />, desc: 'Aligned with executives, managers, and system operators.', path: '/solutions/by-persona' },
  { title: 'Why CloudPi', icon: <FaQuestion />, desc: 'Four core challenges, four answers, one governed system.', path: '/solutions/why-cloudpi' },
];

const COMPANY_ITEMS = [
  { title: 'About', icon: <FaBuilding />, desc: 'Our mission, vision & core team.', path: '/company/about-us' },
  { title: 'Book Demo', icon: <FaCalendarCheck />, desc: 'Schedule a custom walkthrough.', path: '/company/contact-us' },
  { title: 'Security', icon: <FaLock />, desc: 'Zero-trust enterprise protection.', path: '/company/security' },
  { title: 'Features', icon: <FaStar />, desc: 'Deep dive platform capabilities.', path: '/company/features' },
];

const RESOURCE_ITEMS = [
  { title: 'Documentation', icon: <FaBook />, desc: 'User guides, configurations, and reference manuals.', path: '/resources/user-guide' },
  { title: 'FAQ', icon: <FaQuestion />, desc: 'Frequently asked questions and support notes.', path: '/resources/faqs' },
  { title: 'Videos', icon: <FaVideo />, desc: 'Walkthroughs, demos, and feature highlight videos.', path: '/resources/press-releases' },
  { title: 'AWS S3 Cost Surge', icon: <FaFileAlt />, desc: 'A deep-dive cost reduction case study.', path: '/resources/case-studies' },
  { title: 'Freight Manufacturer', icon: <FaBriefcase />, desc: 'Enterprise scaling and infrastructure savings.', path: '/resources/case-studies' },
  { title: 'API Cost Tracking', icon: <FaChartBar />, desc: 'Anomaly detection and tracking cost leakages.', path: '/resources/blogs' },
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
                          <Link to={item.path} key={idx} className="mega-link-item">
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
                        <Link to="/platform/platform-capabilities" className="hero-btn-primary mt-3">
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
                  <div className="mega-menu">
                    <div className="mega-menu-content">

                      {/* Grid of solutions items */}
                      <div className="mega-menu-links grid-2">
                        {SOLUTION_ITEMS.map((item, idx) => (
                          <Link to={item.path} key={idx} className="mega-link-item">
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
                          <FaStar size={12} /> Core Outcomes
                        </div>
                        <h4 className="mega-panel-title">Solutions Value</h4>
                        <p className="mega-panel-desc">
                          Empower your finance, engineering, and FinOps teams to govern cloud operations collaboratively with absolute precision.
                        </p>
                        <div className="mega-panel-stat">
                          <div className="mega-panel-stat-row">
                            <span>Cost Efficiency Boost</span>
                            <span className="stat-badge">+55% Savings</span>
                          </div>
                          <div className="mega-progress">
                            <div className="mega-progress-fill" style={{ width: '85%' }} />
                          </div>
                        </div>
                        <div className="mega-panel-stat mt-3">
                          <div className="mega-panel-stat-row">
                            <span>Time-to-Value</span>
                            <span className="stat-badge green">Instant Day-1</span>
                          </div>
                          <div className="mega-progress">
                            <div className="mega-progress-fill green" style={{ width: '95%' }} />
                          </div>
                        </div>
                        <Link to="/solutions/by-role" className="hero-btn-primary mt-3">
                          Explore Solutions <FaArrowRight size={10} />
                        </Link>
                      </div>

                    </div>
                  </div>
                </li>

                {/* ── Company Mega Menu ── */}
                <li className="nav-item has-dropdown">
                  <button className="nav-link nav-btn">
                    Company <FaChevronDown className="arrow-icon" size={10} />
                  </button>
                  <div className="mega-menu">
                    <div className="mega-menu-content">

                      {/* Grid of company items */}
                      <div className="mega-menu-links grid-2">
                        {COMPANY_ITEMS.map((item, idx) => (
                          <Link to={item.path} key={idx} className="mega-link-item">
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
                          <FaBuilding size={12} /> Trust & Uptime
                        </div>
                        <h4 className="mega-panel-title">About CloudPi</h4>
                        <p className="mega-panel-desc">
                          We are building the future of autonomous cost optimization to help modern enterprise cloud control rooms run efficiently.
                        </p>
                        <div className="mega-panel-stat">
                          <div className="mega-panel-stat-row">
                            <span>Enterprise Trust Score</span>
                            <span className="stat-badge">100% Secure</span>
                          </div>
                          <div className="mega-progress">
                            <div className="mega-progress-fill" style={{ width: '100%' }} />
                          </div>
                        </div>
                        <div className="mega-panel-stat mt-3">
                          <div className="mega-panel-stat-row">
                            <span>Standard SLA</span>
                            <span className="stat-badge green">99.99%</span>
                          </div>
                          <div className="mega-progress">
                            <div className="mega-progress-fill green" style={{ width: '99%' }} />
                          </div>
                        </div>
                        <Link to="/company/about-us" className="hero-btn-primary mt-3">
                          Learn More<FaArrowRight size={10} />
                        </Link>
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
                  <div className="mega-menu">
                    <div className="mega-menu-content">

                      {/* Grid of resources items */}
                      <div className="mega-menu-links grid-2">
                        {RESOURCE_ITEMS.map((item, idx) => (
                          <Link to={item.path} key={idx} className="mega-link-item">
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
                          <FaBook size={12} /> Resources Hub
                        </div>
                        <h4 className="mega-panel-title">Learn & Grow</h4>
                        <p className="mega-panel-desc">
                          Explore our collection of detailed guides, video walkthroughs, and case studies to supercharge cost controls.
                        </p>
                        <div className="mega-panel-stat">
                          <div className="mega-panel-stat-row">
                            <span>Guides & Tutorials</span>
                            <span className="stat-badge">50+ Articles</span>
                          </div>
                          <div className="mega-progress">
                            <div className="mega-progress-fill" style={{ width: '80%' }} />
                          </div>
                        </div>
                        <div className="mega-panel-stat mt-3">
                          <div className="mega-panel-stat-row">
                            <span>Demo Video Views</span>
                            <span className="stat-badge green">10K+ Watched</span>
                          </div>
                          <div className="mega-progress">
                            <div className="mega-progress-fill green" style={{ width: '92%' }} />
                          </div>
                        </div>
                        <Link to="/resources/user-guide" className="hero-btn-primary mt-3">
                          Visit Learn Center <FaArrowRight size={10} />
                        </Link>
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
                <span>BOOK DEMO <FaArrowRight size={11} /></span>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button className="mobile-toggle-btn d-lg-none" onClick={() => setMobileMenuOpen(true)}>
              <FaBars size={20} />
            </button>
          </div>
        </div>
      </header>
      <div className="navbar-backdrop" />

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
              { label: 'Platform', idx: 1, links: PLATFORM_ITEMS.map((item) => ({ label: item.title, to: item.path })) },
              { label: 'Solutions', idx: 2, links: SOLUTION_ITEMS.map((item) => ({ label: item.title, to: item.path })) },
              { label: 'Company', idx: 3, links: COMPANY_ITEMS.map((item) => ({ label: item.title, to: item.path })) },
              { label: 'Resources', idx: 4, links: RESOURCE_ITEMS.map((item) => ({ label: item.title, to: item.path })) },
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
              <span>Get Started <FaArrowRight size={11} /></span>
            </Link>
            <Link to="/contact" className="btn-premium btn-premium-secondary text-center" onClick={() => setMobileMenuOpen(false)}>
              <span>Contact Sales</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
