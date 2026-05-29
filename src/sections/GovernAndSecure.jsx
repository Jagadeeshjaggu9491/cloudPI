// GovernAndSecure.jsx
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaShieldAlt, FaArrowRight } from "react-icons/fa";
import AnimatedHeading from "../components/AnimatedHeading";
import "../styles/FeaturesGridSection.css"; // Reuse the premium dark features grid style directly

gsap.registerPlugin(ScrollTrigger);

const GovernAndSecure = () => {
    const sectionRef = useRef(null);

    // Cloned Animated SVG Icons from FeaturesGridSection
    const ChartIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animated-svg icon-chart">
            <path d="M3 3v18h18" />
            <path className="chart-line" d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
        </svg>
    );

    const HandshakeIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animated-svg icon-handshake">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            <circle cx="9" cy="7" r="1.5" className="collab-pulse" />
        </svg>
    );

    const SecurityIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animated-svg icon-security">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <rect x="9" y="11" width="6" height="5" rx="1" className="lock-body" />
            <path className="lock-loop" d="M10 11V9a2 2 0 0 1 4 0v2" />
        </svg>
    );

    const BellIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animated-svg icon-bell">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path className="bell-clapper" d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
    );

    const WorkflowIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animated-svg icon-workflow">
            <path d="M4 7h11" className="workflow-line" />
            <path d="M4 17h11" className="workflow-line" />
            <path d="M15 7l5 5-5 5" className="workflow-arrow" />
        </svg>
    );

    const CPUIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animated-svg icon-cpu">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="9" y="9" width="6" height="6" rx="1" className="cpu-center" />
            <line x1="9" y1="1" x2="9" y2="4" />
            <line x1="15" y1="1" x2="15" y2="4" />
            <line x1="9" y1="20" x2="9" y2="23" />
            <line x1="15" y1="20" x2="15" y2="23" />
            <line x1="20" y1="9" x2="23" y2="9" />
            <line x1="20" y1="15" x2="23" y2="15" />
            <line x1="1" y1="9" x2="4" y2="9" />
            <line x1="1" y1="15" x2="4" y2="15" />
        </svg>
    );

    const features = [
        {
            icon: <ChartIcon />,
            title: "Budget & Forecast",
            description:
                "Set budgets at any level — org, BU, team, or account. Early warnings at 70%, 85%, 95%. Daily spend forecasting with variance analysis.",
        },
        {
            icon: <WorkflowIcon />,
            title: "Tag Governance",
            description:
                "Track tag compliance, enforce tagging policies, and surface untagged resources. Tag coverage improves without blocking cost visibility.",
        },
        {
            icon: <BellIcon />,
            title: "Anomaly Detection",
            description:
                "Policy-based anomaly detection on daily, weekly, and monthly cadences. Catch cost spikes before they become surprises at month-end.",
        },
        {
            icon: <SecurityIcon />,
            title: "Role-Based Access",
            description:
                "Seven built-in roles, hierarchy-scoped. A BU Admin sees only their BU. SSO via Okta, Azure AD, SAML 2.0, OIDC. SCIM provisioning.",
        },
        {
            icon: <HandshakeIcon />,
            title: "Approval Workflows",
            description:
                "Savings actions, budget changes, and policy modifications require sign-off. Configurable approvers and approval tiers per team or environment.",
        },
        {
            icon: <CPUIcon />,
            title: "Immutable Audit Trail",
            description:
                "Every action logged, immutable, searchable, and exportable. SOC 2 audit questions answered in seconds, not hours.",
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Section Scale & Translate Entrance Animation (Linked to Scroll Scrub)
            gsap.fromTo(sectionRef.current,
                {
                    scale: 0.6,
                    y: 40,
                    transformOrigin: "center top",
                    transformPerspective: 1200,
                    rotateX: 5,
                },
                {
                    scale: 1,
                    y: 0,
                    rotateX: 0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",      // starts when the top of the section enters the bottom of the viewport
                        end: "top 35%",          // completes when 25% of the viewport height contains the section
                        scrub: 2,                // Luxurious, butter-smooth scroll inertia lag
                    }
                }
            );
            // Header Animation
            const headerTl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            });

            headerTl.from(".feature-badge", { opacity: 0, y: -20, duration: 0.6 })
                .from(".feature-heading", { opacity: 0, y: 30, duration: 0.8 }, "-=0.4")
                .from(".feature-description", { opacity: 0, y: 30, duration: 0.8 }, "-=0.6");

            // Cards Animation
            gsap.from(".feature-card", {
                opacity: 0,
                y: 80,
                stagger: 0.12,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="features-grid-section position-relative" ref={sectionRef}>
            <div className="noise-overlay"></div>

            <div className="container position-relative">
                {/* Header */}
                <div className="text-center features-top-content">
                    <div className="feature-badge">
                        <FaShieldAlt className="feature-icon" />
                        <span>Govern & Secure</span>
                    </div>
                    <AnimatedHeading
                        text={"Enterprise-Grade Cloud Cost Governance at Every Layer"}
                        className="feature-heading display-5 fw-semibold"
                    />
                    <p className="feature-description">
                        Set guardrails before costs spiral. Budget controls, tag policies, approval
                        workflows, and role-based access — purpose-built for enterprise cloud
                        cost management at scale.
                    </p>
                    {/* CTA / Action */}
                    <div className="navbar-actions d-none d-lg-flex justify-content-center gap-3 my-4">
                        <Link to="/get-started" className="btn-premium btn-premium-primary">
                            <span>Book Demo <FaArrowRight size={11} /></span>
                        </Link>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="row g-4">
                    {features.map((item, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="feature-card">
                                <div className="feature-icon">
                                    {item.icon}
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <div className="feature-glow"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GovernAndSecure;
