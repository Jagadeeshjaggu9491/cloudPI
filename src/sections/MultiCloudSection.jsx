import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BadgeIcon from "../assets/favicon.png";
import AnimatedHeading from "../components/AnimatedHeading";
import "../styles/MultiCloudSection.css";

gsap.registerPlugin(ScrollTrigger);

/* ── Cloud provider data ─────────────────────────────────────────────────── */
const providers = [
    {
        id: "aws",
        name: "Amazon Web Services",
        logo: (
            <svg viewBox="0 0 120 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="mc-cloud-logo">
                <text x="10" y="32" fontFamily="'Amazon Ember', 'Helvetica Neue', Arial, sans-serif" fontWeight="700" fontSize="30" fill="#FF9900">aws</text>
                <path d="M18 40 Q35 45 52 40" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </svg>
        ),
        features: [
            { icon: "bi bi-bar-chart-line-fill", label: "Cost & Usage Reports" },
            { icon: "bi bi-people-fill", label: "AWS Organizations" },
            { icon: "bi bi-server", label: "EC2, RDS, ECS" },
            { icon: "bi bi-database-fill", label: "EBS, RDS, S3 savings" },
        ],
        accentColor: "#FF9900",
        bgGradient: "linear-gradient(135deg, rgba(255,153,0,0.06) 0%, rgba(255,153,0,0.02) 100%)",
        borderColor: "rgba(255,153,0,0.2)",
    },
    {
        id: "azure",
        name: "Microsoft Azure",
        logo: (
            <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="mc-cloud-logo">
                <path d="M28 6L10 44H34L44 24L28 6Z" fill="#0078D4" />
                <path d="M32 14L46 50H70L52 14H32Z" fill="#50E6FF" opacity="0.85" />
                <path d="M10 44L34 44L44 24L28 6L10 44Z" fill="#0078D4" opacity="0.7" />
            </svg>
        ),
        features: [
            { icon: "bi bi-building", label: "EA / MCA / CSP" },
            { icon: "bi bi-people-fill", label: "Management Groups" },
            { icon: "bi bi-display", label: "VMs, SQL, AKS" },
            { icon: "bi bi-database-fill", label: "Disks, SQL savings" },
        ],
        accentColor: "#0078D4",
        bgGradient: "linear-gradient(135deg, rgba(0,120,212,0.06) 0%, rgba(80,230,255,0.03) 100%)",
        borderColor: "rgba(0,120,212,0.2)",
    },
    {
        id: "gcp",
        name: "Google Cloud",
        logo: (
            <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="mc-cloud-logo">
                {/* Cloud shape */}
                <path d="M55 18C54 14 50 11 46 11C44 7 40 5 36 5C29 5 23 11 23 18H21C16 18 12 22 12 27C12 32 16 36 21 36H55C60 36 64 32 64 27C64 22 60 18 55 18Z" fill="white" />
                {/* Red segment */}
                <path d="M23 18H37V36H21C16 36 12 32 12 27C12 22 16 18 21 18H23Z" fill="#EA4335" />
                {/* Blue segment */}
                <path d="M37 18H55C57 18 59 19 61 20L51 36H37V18Z" fill="#4285F4" />
                {/* Yellow segment */}
                <path d="M61 20C63 22 64 24.5 64 27C64 32 60 36 55 36H51L61 20Z" fill="#FBBC05" />
                {/* Green segment */}
                <path d="M37 18V36H51L61 20C59 19 57 18 55 18H37Z" fill="#34A853" opacity="0.0" />
                {/* Bottom colored bars */}
                <rect x="20" y="38" width="8" height="5" rx="2.5" fill="#EA4335" />
                <rect x="32" y="38" width="8" height="5" rx="2.5" fill="#FBBC05" />
                <rect x="44" y="38" width="8" height="5" rx="2.5" fill="#34A853" />
                <rect x="56" y="38" width="8" height="5" rx="2.5" fill="#4285F4" />
            </svg>
        ),
        features: [
            { icon: "bi bi-receipt", label: "Billing Export" },
            { icon: "bi bi-people-fill", label: "GCP Organizations" },
            { icon: "bi bi-cpu", label: "Compute, SQL, GKE" },
            { icon: "bi bi-hdd-stack-fill", label: "Compute, Disk savings" },
        ],
        accentColor: "#34A853",
        bgGradient: "linear-gradient(135deg, rgba(52,168,83,0.06) 0%, rgba(66,133,244,0.03) 100%)",
        borderColor: "rgba(66,133,244,0.2)",
    },
];

/* ── Component ───────────────────────────────────────────────────────────── */
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
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top 85%",
                    },
                }
            );

            // Cards stagger
            gsap.fromTo(
                cardsRef.current.children,
                { opacity: 0, y: 50, scale: 0.96 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 85%",
                    },
                }
            );

            // Banner fade-up
            gsap.fromTo(
                bannerRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: bannerRef.current,
                        start: "top 90%",
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

                    <h2 className="mc-title">
                        AWS. Azure. GCP.{" "}
                        <span className="mc-title-accent">One Cloud Cost Tool.</span>
                    </h2>

                    <p className="mc-subtitle">
                        All capabilities — allocation, anomaly detection, savings execution, budgets,
                        <br />
                        and RBAC — work consistently across providers. One hierarchy.
                        <br />
                        One dashboard. Built so engineering teams don't manage separate tools per cloud.
                    </p>
                </div>

                {/* ── Provider Cards ────────────────────────────────────── */}
                <div className="mc-cards-wrapper" ref={cardsRef}>
                    {providers.map((provider, idx) => (
                        <div
                            className="mc-provider-card"
                            key={provider.id}
                            style={{
                                "--card-accent": provider.accentColor,
                                "--card-bg": provider.bgGradient,
                                "--card-border": provider.borderColor,
                            }}
                        >
                            {/* Logo */}
                            <div className="mc-provider-logo-wrap">
                                {provider.logo}
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

                            {/* Connector dot (between cards) */}
                            {idx < providers.length - 1 && (
                                <div className="mc-connector">
                                    <span className="mc-connector-dot" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Dashed connector line */}
                <div className="mc-connector-line-wrap">
                    <div className="mc-connector-line" />
                    <div className="mc-connector-node" />
                </div>

                {/* ── Bottom Banner ─────────────────────────────────────── */}
                <div className="mc-banner" ref={bannerRef}>
                    <div className="mc-banner-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <path d="M9 12l2 2 4-4" />
                        </svg>
                    </div>
                    <div className="mc-banner-text">
                        <p className="mc-banner-title">One set of rules. One hierarchy. One dashboard.</p>
                        <p className="mc-banner-sub">No duplicate configuration per cloud.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MultiCloudSection;
