// FeaturesGridSection.jsx

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles/FeaturesGridSection.css";

gsap.registerPlugin(ScrollTrigger);

/* =========================================
   ICONS
========================================= */

const CRMIcon = () => (
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
        className="animated-svg icon-crm"
    >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path className="user-2" d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path className="user-2" d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const ChartIcon = () => (
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
        className="animated-svg icon-chart"
    >
        <path d="M3 3v18h18" />
        <path className="chart-line" d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
    </svg>
);

const HandshakeIcon = () => (
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
        className="animated-svg icon-handshake"
    >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <circle cx="9" cy="7" r="1.5" className="collab-pulse" />
    </svg>
);

const SecurityIcon = () => (
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
        className="animated-svg icon-security"
    >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <rect x="9" y="11" width="6" height="5" rx="1" className="lock-body" />
        <path className="lock-loop" d="M10 11V9a2 2 0 0 1 4 0v2" />
    </svg>
);

const BellIcon = () => (
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
        className="animated-svg icon-bell"
    >
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path className="bell-clapper" d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
);

const CPUIcon = () => (
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
        className="animated-svg icon-cpu"
    >
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

const AnalyticsIcon = () => (
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
        className="animated-svg icon-analytics"
    >
        <path d="M3 3v18h18" />

        <rect className="bar-1" x="7" y="12" width="3" height="6" rx="1" />

        <rect className="bar-2" x="12" y="8" width="3" height="10" rx="1" />

        <rect className="bar-3" x="17" y="5" width="3" height="13" rx="1" />
    </svg>
);

const WorkflowIcon = () => (
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
        className="animated-svg icon-workflow"
    >
        <path d="M4 7h11" />
        <path d="M4 17h11" />

        <path className="workflow-arrow" d="M15 7l5 5-5 5" />
    </svg>
);

const CloudIcon = () => (
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
        className="animated-svg icon-cloud"
    >
        <path
            className="cloud-shape"
            d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"
        />

        <path className="cloud-line-1" d="M8 16h8" />
        <path className="cloud-line-2" d="M8 20h8" />
    </svg>
);

/* =========================================
   FEATURES
========================================= */

const features = [
    {
        icon: <CRMIcon />,
        title: "Smart contact management",
        description:
            "Leads are spread across spreadsheets, notes, and inboxes making it impossible to track the full customer journey.",
    },
    {
        icon: <ChartIcon />,
        title: "AI sales forecasting",
        description:
            "Predict future revenue with AI-driven insights using advanced forecasting models and smart reporting.",
    },
    {
        icon: <HandshakeIcon />,
        title: "Team collaboration tools",
        description:
            "Assign tasks, collaborate with teammates, and centralize communication for faster execution.",
    },
    {
        icon: <SecurityIcon />,
        title: "Data security & permissions",
        description:
            "Enterprise-grade protection with advanced encryption, user permissions, and detailed activity logs.",
    },
    {
        icon: <BellIcon />,
        title: "Real-time notifications",
        description:
            "Instant updates and alerts help your team stay informed about important customer activity.",
    },
    {
        icon: <CPUIcon />,
        title: "AI-powered insights",
        description:
            "Uncover growth opportunities and optimize performance using intelligent recommendations.",
    },
    {
        icon: <AnalyticsIcon />,
        title: "Advanced analytics dashboard",
        description:
            "Monitor performance metrics, sales growth, and conversion rates through visual dashboards.",
    },
    {
        icon: <WorkflowIcon />,
        title: "Workflow automation",
        description:
            "Automate repetitive tasks, approvals, and follow-ups to improve efficiency and save time.",
    },
    {
        icon: <CloudIcon />,
        title: "Cloud integrations",
        description:
            "Connect with Slack, Google Workspace, Salesforce, HubSpot, and more enterprise tools.",
    },
];

/* =========================================
   COMPONENT
========================================= */

const FeaturesGridSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from(".feature-card", {
                opacity: 0,
                y: 80,
                stagger: 0.15,
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
        <section
            className="features-grid-section position-relative"
            ref={sectionRef}
        >
            <div className="container">

                <div className="text-center features-top-content">
                    <div className="feature-badge">
                        <span>Key Features</span>
                    </div>

                    <h2 className="feature-heading">
                        Core features that power <br />
                        your workflow
                    </h2>

                    <p className="feature-description">
                        Qarin combines AI, automation, and CRM tools into one
                        intelligent platform helping teams scale faster.
                    </p>
                </div>

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