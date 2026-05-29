import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/MultiCloudSection.css";

import AnimatedHeading from "../components/AnimatedHeading";

// Logos 
import AwsLogo from '../assets/images/partners/logo-06.svg';
import AzureLogo from '../assets/images/partners/logo-05.svg';
import GcpLogo from '../assets/images/partners/google-cloud-logo.png';

gsap.registerPlugin(ScrollTrigger);

const providers = [
    {
        id: "aws",
        name: "Amazon Web Services",
        logoUrl: AwsLogo,
        altText: "Amazon Web Services",
        features: [
            { icon: "bi bi-bar-chart-line-fill", label: "Cost & Usage Reports" },
            { icon: "bi bi-people-fill", label: "AWS Organizations" },
            { icon: "bi bi-server", label: "EC2, RDS, ECS" },
            { icon: "bi bi-database-fill", label: "EBS, RDS, S3 savings" },
        ],
        accentColor: "#FF9900",
        borderColor: "rgba(255, 153, 0, 0.2)",
    },
    {
        id: "azure",
        name: "Microsoft Azure",
        logoUrl: AzureLogo,
        altText: "Microsoft Azure",
        features: [
            { icon: "bi bi-file-earmark-text-fill", label: "EA / MCA / CSP" },
            { icon: "bi bi-people-fill", label: "Management Groups" },
            { icon: "bi bi-cpu-fill", label: "VMs, SQL, AKS" },
            { icon: "bi bi-database-fill", label: "Disks, SQL savings" },
        ],
        accentColor: "#0078D4",
        borderColor: "rgba(0, 120, 212, 0.2)",
    },
    {
        id: "gcp",
        name: "Google Cloud",
        logoUrl: GcpLogo,
        altText: "Google Cloud",
        features: [
            { icon: "bi bi-file-earmark-ruled-fill", label: "Billing Export" },
            { icon: "bi bi-people-fill", label: "GCP Organizations" },
            { icon: "bi bi-cpu-fill", label: "Compute, SQL, GKE" },
            { icon: "bi bi-database-fill", label: "Compute, Disk savings" },
        ],
        accentColor: "#34A853",
        borderColor: "rgba(52, 168, 83, 0.2)",
    },
];

const MultiCloudSection = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef(null);
    const bannerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading fade-up
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
                    },
                }
            );

            // Cards stagger
            gsap.fromTo(
                cardsRef.current.children,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                    duration: 1.0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 85%",
                    },
                }
            );

            // Banner fade-up
            gsap.fromTo(
                bannerRef.current,
                { opacity: 0, y: 15 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: bannerRef.current,
                        start: "top 92%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="mc-section" ref={sectionRef}>
            <div className="container">
                {/* ── Header ───────────────────────────────────────────── */}
                <div className="mc-header text-center" ref={headingRef}>
                    <div className="mc-badge">
                        <span className="mc-badge-dot" />
                        MULTI-CLOUD
                    </div>

                    <AnimatedHeading
                        tag="h2"
                        className="platform-title display-5 fw-semibold"
                        display="block"
                        delay={30}
                        duration={1.0}
                        from={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                        to={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    >
                        AWS. Azure. GCP.{" "} <br />
                        <span className="gradient-text">One Cloud Cost Tool.</span>
                    </AnimatedHeading>

                    <p className="mc-subtitle">
                        All capabilities — allocation, anomaly detection, savings execution, budgets,
                        and RBAC — work consistently across providers. One hierarchy.
                        One dashboard. Built so engineering teams don't manage separate tools per cloud.
                    </p>
                </div>

                {/* ── Provider Cards & Connectors Wrapper ───────────────── */}
                <div className="mc-cards-outer">
                    <div className="mc-cards-wrapper" ref={cardsRef}>
                        {providers.map((provider) => (
                            <div
                                className="mc-provider-card"
                                key={provider.id}
                                style={{
                                    "--card-accent-color": provider.accentColor,
                                    "--card-border-color": provider.borderColor,
                                }}
                            >
                                {/* Logo */}
                                <div className="mc-provider-logo-wrap">
                                    <img
                                        src={provider.logoUrl}
                                        alt={provider.altText}
                                        className="mc-cloud-logo"
                                    />
                                </div>

                                {/* Name */}
                                <h3 className="mc-provider-name">{provider.name}</h3>

                                {/* Feature grid (2×2) */}
                                <div className="mc-feature-grid">
                                    {provider.features.map((feat, fIdx) => (
                                        <div className="mc-feature-item" key={fIdx}>
                                            <i className={`${feat.icon} mc-feat-icon`} />
                                            <span className="mc-feat-label">{feat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* ── Horizontal connector lines between cards (Desktop only) ── */}
                        <div className="mc-connector-h mc-conn-1-2" aria-hidden="true">
                            <div className="mc-line-left mc-line-purple" />
                            <span className="mc-dot-between mc-dot-purple" />
                            <div className="mc-line-right mc-line-blue" />
                        </div>
                        <div className="mc-connector-h mc-conn-2-3" aria-hidden="true">
                            <div className="mc-line-left mc-line-blue" />
                            <span className="mc-dot-between mc-dot-blue" />
                            <div className="mc-line-right mc-line-green" />
                        </div>
                    </div>
                </div>

                {/* ── Bottom Branching Connector (Desktop only) ──────────── */}
                <div className="mc-bottom-connector" aria-hidden="true">
                    <div className="mc-branch-aws" />
                    <div className="mc-branch-azure" />
                    <div className="mc-branch-gcp" />
                    <div className="mc-node-center" />
                    <div className="mc-drop-line" />
                    <div className="mc-node-banner" />
                </div>

                {/* ── Bottom Banner ─────────────────────────────────────── */}
                <div className="mc-banner" ref={bannerRef}>
                    <div className="mc-banner-icon">
                        <svg className="mc-shield-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <path d="M9 12l2 2 4-4" className="mc-checkmark-path" stroke="#3b82f6" />
                        </svg>
                    </div>
                    <div className="mc-banner-text">
                        <h4 className="mc-banner-title">One set of rules. One hierarchy. One dashboard.</h4>
                        <p className="mc-banner-sub">No duplicate configuration per cloud.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MultiCloudSection;
