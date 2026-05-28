import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "../assets/logo.png";
import "../styles/WhyCloudPI.css";

gsap.registerPlugin(ScrollTrigger);

/* ── Cloned Animating SVG Icon Components from FeaturesGridSection ───────── */

const CRMIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animated-svg icon-crm">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path className="user-2" d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path className="user-2" d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const HandshakeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animated-svg icon-handshake">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <circle cx="9" cy="7" r="1.5" className="collab-pulse" />
    </svg>
);

const ChartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animated-svg icon-chart">
        <path d="M3 3v18h18" />
        <path className="chart-line" d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
    </svg>
);

const SecurityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animated-svg icon-security">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <rect x="9" y="11" width="6" height="5" rx="1" className="lock-body" />
        <path className="lock-loop" d="M10 11V9a2 2 0 0 1 4 0v2" />
    </svg>
);

const WorkflowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animated-svg icon-workflow">
        <path d="M4 7h11" className="workflow-line" />
        <path d="M4 17h11" className="workflow-line" />
        <path d="M15 7l5 5-5 5" className="workflow-arrow" />
    </svg>
);

const CloudIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animated-svg icon-cloud">
        <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" className="cloud-main" />
        <path d="M8 16h8" className="cloud-line" />
        <path d="M8 20h8" className="cloud-line" />
    </svg>
);

const RocketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animated-svg icon-rocket">
        <path d="M4.5 16.5c-1.5 1.5-2 4.5-2 4.5s3-.5 4.5-2l2-2-2.5-2.5-2 2z" />
        <path d="M14 10l-4-4" />
        <path d="M16 8c1.5-1.5 2-4.5 2-4.5S15 4 13.5 5.5L10 9l5 5 1-1z" />
        <path d="M9 15l-4 4" />
    </svg>
);

/* ── Rows Dataset ────────────────────────────────────────────────────────── */

const rows = [
    {
        feature: "Day-one allocation",
        icon: <CRMIcon />,
        typical: { text: "Requires tags — 3-6 months", type: "badge-red" },
        cloudpi: { text: "85% with zero tags", type: "badge-blue" }
    },
    {
        feature: "Savings approach",
        icon: <ChartIcon />,
        typical: { text: "Recommendations only", type: "text-neutral" },
        cloudpi: { text: "Recommendations + automated execution", type: "text-blue" }
    },
    {
        feature: "Execution rate",
        icon: <WorkflowIcon />,
        typical: { text: "15-25% (manual follow-up)", type: "badge-red" },
        cloudpi: { text: "85-90% automated pipeline", type: "badge-blue" }
    },
    {
        feature: "Savings proof",
        icon: <SecurityIcon />,
        typical: { text: '"Potential savings" estimates', type: "badge-red" },
        cloudpi: { text: "Billing-verified TRUE Savings", type: "badge-blue" }
    },
    {
        feature: "Remediation control",
        icon: <HandshakeIcon />,
        typical: { text: "One-size-fits-all or nothing", type: "text-neutral" },
        cloudpi: { text: "Autonomous / Approval-Gated / Ticket+Context", type: "text-blue" }
    },
    {
        feature: "Tagging dependency",
        icon: <CloudIcon />,
        typical: { text: "Prerequisite for everything", type: "badge-red" },
        cloudpi: { text: "One signal among many — not a gate", type: "badge-blue" }
    },
    {
        feature: "Time to value",
        icon: <RocketIcon />,
        typical: { text: "Months", type: "badge-red" },
        cloudpi: { text: "One afternoon", type: "badge-blue" }
    }
];

const WhyCloudPI = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const tableRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading scroll fade-up
            gsap.fromTo(
                headingRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top 90%",
                    }
                }
            );

            // Table scroll fade-up
            gsap.fromTo(
                tableRef.current,
                { opacity: 0, y: 25 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: tableRef.current,
                        start: "top 88%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="wcp-section" ref={sectionRef}>
            <div className="container">
                {/* ── Header ───────────────────────────────────────────── */}
                <div className="wcp-header-block text-center" ref={headingRef}>
                    <div className="wcp-badge">
                        <span className="wcp-badge-dot" />
                        WHY CLOUDPI
                    </div>

                    <h2 className="wcp-title">
                        Not just another cloud cost tool.<br />
                        An execution platform with <span className="wcp-title-accent">billing-verified</span> proof.
                    </h2>
                </div>

                {/* ── Comparison Table Card Wrapper ─────────────────────── */}
                <div className="wcp-table-scroll" ref={tableRef}>
                    <div className="wcp-table-card">

                        {/* ── Header Row (Grid columns) ── */}
                        <div className="wcp-grid-row wcp-grid-header">
                            {/* Empty Corner */}
                            <div className="wcp-cell wcp-cell-header-empty" />

                            {/* Typical FinOps Column Header */}
                            <div className="wcp-cell wcp-cell-header-typical">
                                <div className="wcp-hdr-badge-typical">
                                    <i className="bi bi-file-earmark-bar-graph-fill wcp-hdr-icon-typical" />
                                    <span>TYPICAL FINOPS TOOL</span>
                                </div>
                            </div>

                            {/* CloudPI Column Header */}
                            <div className="wcp-cell wcp-cell-header-cloudpi">
                                <div className="wcp-hdr-cloudpi-content">
                                    <img src={Logo} alt="CloudPI Logo" className="wcp-cloudpi-logo-img" />
                                </div>
                            </div>
                        </div>

                        {/* ── Data Rows ── */}
                        {rows.map((row, idx) => (
                            <div className="wcp-grid-row wcp-data-row" key={idx}>
                                {/* Feature Descriptor Column */}
                                <div className="wcp-cell wcp-cell-feature">
                                    <div className="wcp-feat-icon-container">
                                        {row.icon}
                                    </div>
                                    <span className="wcp-feat-text">{row.feature}</span>
                                </div>

                                {/* Typical FinOps Column */}
                                <div className="wcp-cell wcp-cell-typical">
                                    {row.typical.type === "badge-red" ? (
                                        <span className="wcp-badge wcp-badge-red">{row.typical.text}</span>
                                    ) : (
                                        <span className="wcp-text-neutral">{row.typical.text}</span>
                                    )}
                                </div>

                                {/* CloudPI Column */}
                                <div className="wcp-cell wcp-cell-cloudpi">
                                    <div className="wcp-cloudpi-value-wrap">
                                        <div className="wcp-cloudpi-svg-wrap">
                                            {row.icon}
                                        </div>
                                        {row.cloudpi.type === "badge-blue" ? (
                                            <span className="wcp-badge wcp-badge-blue">{row.cloudpi.text}</span>
                                        ) : (
                                            <span className="wcp-text-blue">{row.cloudpi.text}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyCloudPI;
