import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaShieldAlt, FaLayerGroup, FaChartBar, FaBolt, FaGavel, FaLock } from "react-icons/fa";
import AnimatedHeading from "../../../components/AnimatedHeading";
import "./PlatformCapabilities.css";
import "../../../styles/SalesSection.css";
import "../../../styles/IndustryInsights.css";
import TrueSavings from "../../../assets/images/icons/true-savings.svg";
import ZeroTagging from "../../../assets/images/icons/zero-tagging.svg";
import IntelligentSavings from "../../../assets/images/icons/intelligent-savings.svg";
import AllocateDashboard from '../../../assets/images/cap-allocate-dash.avif';
import BadgeIcon from '../../../assets/favicon.png';
import WhiteFavIcon from '../../../assets/cloudpi-favicon-white.png';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
    {
        title: "True Savings",
        desc: "Every dollar verified against your actual bill — not estimates.",
        color: "green",
        icon: "bi bi-check2-square",
        image: TrueSavings,
    },
    {
        title: "Zero Tagging",
        desc: "85% cost allocation from day one. No tag compliance required.",
        color: "blue",
        icon: "bi bi-tags-fill",
        image: ZeroTagging,
    },
    {
        title: "Intelligent Savings",
        desc: "Three execution modes that adapt to risk — autonomous to gated.",
        color: "purple",
        icon: "bi bi-lightning-charge-fill",
        image: IntelligentSavings,
    },
];

const stats = [
    {
        title: "Allocate",
        description: "Assign costs to teams and BUs — without tags",
        icon: FaLayerGroup,
    },
    {
        title: "Analyze",
        description: "Anomaly detection, KPIs, billing trends",
        icon: FaChartBar,
    },
    {
        title: "Optimize",
        description: "Execute savings across three workflow modes",
        icon: FaBolt,
    },
    {
        title: "Govern",
        description: "Budgets, tag policies, approval workflows",
        icon: FaGavel,
    },
    {
        title: "Secure",
        description: "RBAC, SSO, and immutable audit trails",
        icon: FaLock,
    },
];

const formatStatValue = ({ prefix = "", value, suffix = "" }) => `${prefix}${value}${suffix}`;

const PlatformCapabilities = () => {

    const sectionRef = useRef(null);

    const badgeRef = useRef(null);
    const descRef = useRef(null);
    const buttonsRef = useRef(null);
    const dashboardRef = useRef(null);
    const cardsRef = useRef([]);
    const statsRef = useRef(null);
    const insightsSectionRef = useRef(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            /* ==================================================
               INITIAL STATES
            ================================================== */

            gsap.set(
                [
                    badgeRef.current,
                    descRef.current,
                    buttonsRef.current,
                ],
                {
                    opacity: 0,
                    y: 40,
                    filter: "blur(12px)",
                }
            );

            /* Dashboard image — starts off-screen right, tilted */
            gsap.set(dashboardRef.current, {
                opacity: 0,
                x: 80,
                y: 30,
                rotateY: 14,
                rotateX: 6,
                scale: 0.92,
                filter: "blur(16px)",
                transformPerspective: 1400,
                transformOrigin: "left center",
            });

            gsap.set(cardsRef.current, {
                opacity: 0,
                y: 70,
                scale: 0.92,
                rotateX: 12,
                filter: "blur(18px)",
                transformPerspective: 1200,
                transformOrigin: "top center",
            });

            /* ==================================================
               HERO CONTENT ENTRANCE
            ================================================== */

            const heroTl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 78%",
                },
                defaults: {
                    ease: "power3.out",
                },
            });

            heroTl

                .to(badgeRef.current, {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 0.8,
                })

                .to(
                    descRef.current,
                    {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        duration: 0.85,
                    },
                    "-=0.45"
                )

                .to(
                    buttonsRef.current,
                    {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        duration: 0.75,
                    },
                    "-=0.55"
                )

                /* Dashboard slides in from the right in sync with buttons */
                .to(
                    dashboardRef.current,
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        rotateY: 0,
                        rotateX: 0,
                        scale: 1,
                        filter: "blur(0px)",
                        duration: 1.1,
                        ease: "power3.out",
                    },
                    "-=0.9"
                );

            /* ==================================================
               DASHBOARD FLOATING LOOP
            ================================================== */

            gsap.to(dashboardRef.current, {
                y: -14,
                rotateX: 2,
                rotateY: -2,
                duration: 3.6,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                transformPerspective: 1400,
                delay: 1.4, /* starts after entrance finishes */
            });

            /* ==================================================
               CARDS ENTRANCE ANIMATION
            ================================================== */

            gsap.to(cardsRef.current, {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
                filter: "blur(0px)",
                duration: 1.1,
                stagger: 0.18,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".capability-cards-wrapper",
                    start: "top 82%",
                },
            });

            /* ==================================================
               3D SCROLL TILT EFFECT
            ================================================== */

            cardsRef.current.forEach((card) => {

                gsap.to(card, {
                    rotateX: 0,
                    y: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom",
                        end: "top center",
                        scrub: 1.2,
                    },
                });

            });

        }, sectionRef);

        return () => ctx.revert();

    }, []);

    /* ==================================================
       INDUSTRY INSIGHTS — counter + entrance animation
    ================================================== */
    useEffect(() => {
        if (!statsRef.current) return;

        const countItems = gsap.utils.toArray(".insight-count");

        // Reset displayed values to 0
        countItems.forEach((item) => {
            item.textContent = formatStatValue({
                prefix: item.dataset.prefix,
                value: 0,
                suffix: item.dataset.suffix,
            });
        });

        // Fade-in stagger for stat cards
        gsap.fromTo(
            statsRef.current.children,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.12,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: statsRef.current,
                    start: "top 85%",
                },
            }
        );

        // Count-up numbers on scroll
        const st = ScrollTrigger.create({
            trigger: statsRef.current,
            start: "top 85%",
            once: true,
            onEnter: () => {
                countItems.forEach((item) => {
                    const target = Number(item.dataset.target) || 0;
                    const counter = { value: 0 };
                    gsap.to(counter, {
                        value: target,
                        duration: 1.4,
                        ease: "power3.out",
                        onUpdate: () => {
                            item.textContent = formatStatValue({
                                prefix: item.dataset.prefix,
                                value: Math.round(counter.value),
                                suffix: item.dataset.suffix,
                            });
                        },
                    });
                });
            },
        });

        return () => st.kill();
    }, []);

    return (
        <>
            {/* Allocate Section */}
            <section
                className="platform-capabilities-section"
                ref={sectionRef}
            >

                <div className="container">

                    <div className="row">

                        <div className="col-lg-6">

                            {/* BADGE */}
                            <div
                                className="platform-badge"
                                ref={badgeRef}
                            >

                                <span className="badge-icon"><FaShieldAlt /></span>

                                GOVERNED FINOPS AT ENTERPRISE SCALE

                            </div>

                            {/* TITLE */}
                            <AnimatedHeading
                                tag="h1"
                                className="platform-title"
                                display="block"
                                delay={30}
                                duration={1.0}
                                from={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                                to={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            >
                                Allocate.
                                <span className="gradient-text"> Optimize.</span>
                                <br />
                                Prove.
                            </AnimatedHeading>

                            {/* DESCRIPTION */}
                            <p
                                className="platform-description"
                                ref={descRef}
                            >

                                CloudPi gives enterprise teams complete cloud
                                cost control — with 85% allocation from day one,
                                intelligent savings execution, and billing-verified
                                proof that finance can trust.

                            </p>

                            {/* BUTTONS */}
                            <div
                                className="platform-buttons"
                                ref={buttonsRef}
                            >

                                <button className="hero-btn-primary">

                                    Book a Demo

                                </button>

                                <button className="hero-btn-secondary">

                                    Start Free Trial

                                </button>

                            </div>

                        </div>

                        <div className="col-lg-6 d-flex align-items-center">
                            <img
                                src={AllocateDashboard}
                                className="img-fluid allocate-dashboard"
                                alt="AllocateDashboard"
                                ref={dashboardRef}
                            />
                        </div>

                    </div>

                    {/* =====================================================
   PREMIUM FEATURE CARDS SECTION
===================================================== */}

                    <section className="premium-feature-section">

                        <div className="container">

                            <div className="row g-4 justify-content-center">

                                {capabilities.map((item, index) => (

                                    <div
                                        className="col-xl-4 col-md-6"
                                        key={index}
                                    >

                                        <div
                                            className={`premium-feature-card ${item.color}`}
                                            ref={(el) =>
                                                (cardsRef.current[index] = el)
                                            }
                                        >

                                            {/* TOP RIGHT DOTS */}
                                            <div className="card-dots">

                                                {Array.from({ length: 9 }).map((_, i) => (

                                                    <span key={i}></span>

                                                ))}

                                            </div>

                                            {/* PREMIUM TOP SVG */}
                                            <div className="premium-top-visual">

                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="img-fluid"
                                                />

                                            </div>

                                            {/* CONTENT */}
                                            <div className="premium-card-content">

                                                <h3>{item.title}</h3>

                                                <div className="title-line"></div>

                                                <p>{item.desc}</p>

                                            </div>

                                            {/* BOTTOM WAVE */}
                                            <div className="premium-card-wave">

                                                <svg
                                                    width="500"
                                                    height="140"
                                                    viewBox="0 0 500 140"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >

                                                    <path
                                                        d="M0 92C58 56 118 46 176 72C232 98 294 130 354 112C414 94 452 54 500 34V140H0V92Z"
                                                        fill={`url(#paint0_linear_${index})`}
                                                        fillOpacity="0.65"
                                                    />

                                                    <path
                                                        d="M0 112C64 84 132 70 198 92C256 112 320 134 384 118C434 106 470 78 500 60V140H0V112Z"
                                                        fill={`url(#paint1_linear_${index})`}
                                                        fillOpacity="0.45"
                                                    />

                                                    <defs>

                                                        <linearGradient
                                                            id={`paint0_linear_${index}`}
                                                            x1="0"
                                                            y1="70"
                                                            x2="500"
                                                            y2="120"
                                                            gradientUnits="userSpaceOnUse"
                                                        >

                                                            <stop stopColor="#F3E8FF" />

                                                            <stop
                                                                offset="1"
                                                                stopColor="#C084FC"
                                                            />

                                                        </linearGradient>

                                                        <linearGradient
                                                            id={`paint1_linear_${index}`}
                                                            x1="0"
                                                            y1="90"
                                                            x2="500"
                                                            y2="140"
                                                            gradientUnits="userSpaceOnUse"
                                                        >

                                                            <stop stopColor="#FFFFFF" />

                                                            <stop
                                                                offset="1"
                                                                stopColor="#E9D5FF"
                                                            />

                                                        </linearGradient>

                                                    </defs>

                                                </svg>

                                            </div>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </section>

                </div>

            </section>

            {/* The Cloud Cost Section */}
            <section className="industry-insights-section" ref={insightsSectionRef}>
                <div className="container">
                    {/* Header */}
                    <div className="insights-header text-center">
                        <div className="sales-badge">
                            <img src={BadgeIcon} alt="CloudPi Badge" />
                            Platform Overview
                        </div>

                        <AnimatedHeading
                            text={"The Cloud Cost Tool\nBuilt for Enterprise Engineering Teams"}
                            className="insights-title gradient-text"
                        />

                        <p className="insights-subtitle">
                            Five capability areas. One closed loop. Allocate accurately, analyze spend, optimize with automation, govern with policy, and secure with enterprise-grade access controls — all in one platform.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="insight-stats-grid sales-stats" ref={statsRef}>

                        {stats.map((stat, index) => {
                            const IconComp = stat.icon;
                            return (
                                <div className="cap-stat-card" key={index}>
                                    <div className="cap-stat-icon">
                                        <IconComp />
                                    </div>
                                    <h4 className="cap-stat-title">{stat.title}</h4>
                                    <p className="cap-stat-desc">{stat.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>


    );
};

export default PlatformCapabilities;