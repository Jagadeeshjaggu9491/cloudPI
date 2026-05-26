// FeaturesGridSection.jsx
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaRocket, FaArrowRight } from "react-icons/fa";
import AnimatedHeading from "../components/AnimatedHeading";
import "../styles/FeaturesGridSection.css";

gsap.registerPlugin(ScrollTrigger);

const FeaturesGridSection = () => {
    const sectionRef = useRef(null);

    // Animated SVG Icons
    const CRMIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animated-svg icon-crm">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path className="user-2" d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path className="user-2" d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );

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

    const AnalyticsIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animated-svg icon-analytics">
            <path d="M3 3v18h18" />
            <rect x="7" y="12" width="3" height="6" rx="1" className="bar bar-1" />
            <rect x="12" y="8" width="3" height="10" rx="1" className="bar bar-2" />
            <rect x="17" y="5" width="3" height="13" rx="1" className="bar bar-3" />
        </svg>
    );

    const WorkflowIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animated-svg icon-workflow">
            <path d="M4 7h11" className="workflow-line" />
            <path d="M4 17h11" className="workflow-line" />
            <path d="M15 7l5 5-5 5" className="workflow-arrow" />
        </svg>
    );

    const CloudIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animated-svg icon-cloud">
            <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" className="cloud-main" />
            <path d="M8 16h8" className="cloud-line" />
            <path d="M8 20h8" className="cloud-line" />
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

    const RocketIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animated-svg icon-rocket"
        >
            <path d="M4.5 16.5c-1.5 1.5-2 4.5-2 4.5s3-.5 4.5-2l2-2-2.5-2.5-2 2z" />
            <path d="M14 10l-4-4" />
            <path d="M16 8c1.5-1.5 2-4.5 2-4.5S15 4 13.5 5.5L10 9l5 5 1-1z" />
            <path d="M9 15l-4 4" />
        </svg>
    );

    const features = [
        {
            icon: <HandshakeIcon />,
            title: "Business Hierarchy",
            description:
                "Organize your cloud into structured units so every team owns and manages their spend. Map spend to business units, portfolios, and cost centers.",
        },

        {
            icon: <RocketIcon />,
            title: "Cost Assignment",
            description:
                "Assign every cloud dollar to the right project using rule-based mappings. Assign spend to projects, teams, or cost centers.",
        },

        {
            icon: <ChartIcon />,
            title: "Financial Planning",
            description:
                "ML-driven models compare projected vs actual spend. Surface variance trends before overruns occur.",
        },

        {
            icon: <SecurityIcon />,
            title: "Zero Tagging",
            description:
                "Allocate cloud costs accurately even when resource tags are missing. Map spend to projects accurately without relying on tags.",
        },

        {
            icon: <AnalyticsIcon />,
            title: "Billing Analysis",
            description:
                "Break down cloud spend into clear, actionable insights across your entire estate. Analyze costs across AWS, Azure, and GCP.",
        },

        {
            icon: <WorkflowIcon />,
            title: "Workflow Automations",
            description:
                "Automate optimization and governance actions with event-driven precision based on policies and cost signals.",
        },

        {
            icon: <CPUIcon />,
            title: "Dashboards & FinOps KPIs",
            description:
                "Monitor real-time performance with executive-ready dashboards built around industry-standard KPIs.",
        },

        {
            icon: <ChartIcon />,
            title: "Tag Governance & Security",
            description:
                "Maintain data integrity and platform security with automated policies and robust access controls.",
        },

        {
            icon: <CloudIcon />,
            title: "Cloud & Enterprise Integrations",
            description:
                "Seamlessly connect your entire cloud ecosystem for unified visibility and automation across systems.",
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
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
                        <FaRocket className="feature-icon" />
                        <span>Key Features</span>
                    </div>
                    <AnimatedHeading
                        // text={"Core features that power\nyour workflow"}
                        text={"CloudPi FEATURES"}
                        className="feature-heading"
                    />
                    <p className="feature-description">
                        Everything you need to organize, allocate, optimize and control cloud costs.
                    </p>
                    {/* CTA / Action */}
                    <div className="navbar-actions d-none d-lg-flex justify-content-center gap-3 my-4">
                        {/* <Link to="/contact" className="btn-contact">Contact Sales</Link> */}
                        <Link to="/get-started" className="btn-premium btn-premium-primary">
                            <span>Get Started <FaArrowRight size={11} /></span>
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

export default FeaturesGridSection;
