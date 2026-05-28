import { useLocation, Link } from 'react-router-dom';
import './PageHero.css';

/* ─────────────────────────────────────────────────────────────
   Route → { category, title } map
   Mirrors the route list in App.jsx
───────────────────────────────────────────────────────────── */
const ROUTE_META = {
  /* Platform */
  '/platform/platform-capabilities': { category: 'Platform', title: 'Platform Capabilities' },
  '/platform/integrations':          { category: 'Platform', title: 'Integrations' },
  '/platform/workflow-automation':   { category: 'Platform', title: 'Intelligent Workflows' },
  '/platform/cloud-cost-analytics':  { category: 'Platform', title: 'Multi Cloud Cost' },
  '/platform/governance':            { category: 'Platform', title: 'Policy Engine' },
  '/platform/cost-allocation':       { category: 'Platform', title: 'Cost Allocation' },
  '/platform/billing-analysis':      { category: 'Platform', title: 'Billing Analysis' },
  '/platform/rightsizing':           { category: 'Platform', title: 'Rightsizing' },
  '/platform/dashboards-reports':    { category: 'Platform', title: 'Dashboards & Reports' },

  /* Solutions */
  '/solutions/by-role':              { category: 'Solutions', title: 'Solutions by Role' },
  '/solutions/by-persona':           { category: 'Solutions', title: 'Solutions by Persona' },
  '/solutions/why-cloudpi':          { category: 'Solutions', title: 'Why CloudPi' },

  /* Company */
  '/company/about-us':               { category: 'Company', title: 'About Us' },
  '/company/careers':                { category: 'Company', title: 'Careers' },
  '/company/contact-us':             { category: 'Company', title: 'Contact Us' },
  '/company/features':               { category: 'Company', title: 'Features' },
  '/company/security':               { category: 'Company', title: 'Security' },

  /* Pricing */
  '/pricing':                        { category: null, title: 'Pricing' },

  /* Resources */
  '/resources/user-guide':           { category: 'Resources', title: 'Documentation' },
  '/resources/press-releases':       { category: 'Resources', title: 'Videos' },
  '/resources/faqs':                 { category: 'Resources', title: 'FAQ' },
  '/resources/case-studies':         { category: 'Resources', title: 'Case Studies' },
  '/resources/blogs':                { category: 'Resources', title: 'Blogs' },

  /* Shared aliases */
  '/contact':                        { category: 'Company', title: 'Contact Us' },
  '/get-started':                    { category: null,      title: 'Get Started' },
};

export default function PageHero() {
  const { pathname } = useLocation();
  const meta = ROUTE_META[pathname];

  /* Don't render on Home or unknown routes */
  if (!meta) return null;

  const { category, title } = meta;

  return (
    <section className="page-hero" aria-label={`${title} page header`}>

      {/* Decorative blobs */}
      <span className="page-hero__blob page-hero__blob--1" aria-hidden="true" />
      <span className="page-hero__blob page-hero__blob--2" aria-hidden="true" />
      <span className="page-hero__blob page-hero__blob--3" aria-hidden="true" />

      <div className="page-hero__inner">

        {/* ── Breadcrumb ── */}
        <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
          <Link to="/" className="page-hero__crumb">Home</Link>

          {category && (
            <>
              <span className="page-hero__sep" aria-hidden="true">/</span>
              <span className="page-hero__crumb page-hero__crumb--cat">{category}</span>
            </>
          )}

          <span className="page-hero__sep" aria-hidden="true">/</span>
          <span className="page-hero__crumb page-hero__crumb--current" aria-current="page">
            {title}
          </span>
        </nav>

        {/* ── Page Title ── */}
        <h1 className="page-hero__title">{title}</h1>

        {/* ── Subtle decorative line ── */}
        <div className="page-hero__line" aria-hidden="true" />

      </div>
    </section>
  );
}
