import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BadgeIcon from "../assets/favicon.png"
import rightCardImg from "../assets/images/home-cloud-cost.png";
import WhiteFavIcon from "../assets/cloudpi-favicon-white.png"
import AnimatedHeading from "../components/AnimatedHeading";

import "../styles/SalesSection.css";

gsap.registerPlugin(ScrollTrigger);

const SalesSection = () => {

    const sectionRef = useRef(null);

    const headingRef = useRef(null);

    const cardsRef = useRef([]);

    const statsRef = useRef(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            // HEADING
            gsap.from(headingRef.current.children, {
                opacity: 0,
                y: 50,
                stagger: 0.15,
                duration: 1,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 80%",
                },
            });

            // CARDS
            cardsRef.current.forEach((card, index) => {

                gsap.from(card, {
                    opacity: 0,
                    y: 100,
                    scale: 0.95,
                    duration: 1.2,
                    ease: "expo.out",

                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    },

                    delay: index * 0.15,
                });

                // FLOATING EFFECT
                const image =
                    card.querySelector(".sales-card-image");

                gsap.to(image, {
                    y: 12,
                    duration: 4,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });

            });

            // STATS SECTION
            gsap.from(statsRef.current.children, {
                opacity: 0,
                y: 50,
                stagger: 0.12,
                duration: 1,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: statsRef.current,
                    start: "top 85%",
                },
            });

        }, sectionRef);

        return () => ctx.revert();

    }, []);

    return (
        <section
            className="sales-section"
            ref={sectionRef}
        >

            <div className="container">

                {/* HEADING */}
                <div
                    className="sales-heading text-center"
                    ref={headingRef}
                >

                    <div className="sales-badge">
                        <img src={BadgeIcon} alt="CloudPi Badge" />
                        THE SOLUTION
                    </div>

                    <AnimatedHeading
                        text={"Everything you need to\nmanage and grow sales"}
                        className="sales-title"
                    />

                    <p className="sales-subtitle">
                        CloudPi provides intelligent visibility and automation to help organizations control cloud spending across AWS, Azure, and Google Cloud. Instead of manually analyzing complex billing reports, CloudPi continuously monitors infrastructure usage and recommends cost-saving optimizations.
                    </p>

                </div>

                <div className="row g-3 sales-grid align-items-center">

                    {/* LEFT COLUMN */}
                    <div className="col-lg-6">

                        <div className="sales-card large-compact-card">

                            <div className="sales-card-content">

                                <h3>Real-time sales statistics</h3>

                                <p>
                                    Monitor active deals and revenue trends
                                    in real time, so you always know where
                                    your pipeline stands and what needs
                                    attention next.
                                </p>

                            </div>

                            <div className="sales-card-image-wrap large-image">

                                <img
                                    src={rightCardImg}
                                    alt=""
                                    className="img-fluid sales-card-image"
                                />

                            </div>

                        </div>

                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="col-lg-6">

                        <div className="cloud-feature-grid">

                            {/* CARD 1 */}
                            <div className="cloud-feature-card">

                                <div className="feature-icon">
                                    <i className="bi bi-search"></i>
                                </div>

                                <div className="feature-content">
                                    <h3>Unified Cloud Visibility</h3>

                                    <p>
                                        Get a single dashboard for AWS, Azure,
                                        and GCP spending.
                                    </p>
                                </div>

                            </div>

                            {/* CARD 2 */}
                            <div className="cloud-feature-card">

                                <div className="feature-icon">
                                    <i className="bi bi-lightning-charge-fill"></i>
                                </div>

                                <div className="feature-content">
                                    <h3>True Automated Savings</h3>

                                    <p>
                                        Automatically detect idle resources
                                        and oversized workloads.
                                    </p>
                                </div>

                            </div>

                            {/* CARD 3 */}
                            <div className="cloud-feature-card">

                                <div className="feature-icon">
                                    <i className="bi bi-bar-chart-fill"></i>
                                </div>

                                <div className="feature-content">
                                    <h3>Cost Allocation & Accountability</h3>

                                    <p>
                                        Track assigned vs unassigned costs
                                        across teams and cloud services.
                                    </p>
                                </div>

                            </div>

                            {/* CARD 4 */}
                            <div className="cloud-feature-card">

                                <div className="feature-icon">
                                    <i className="bi bi-gear-fill"></i>
                                </div>

                                <div className="feature-content">
                                    <h3>Automated Governance</h3>

                                    <p>
                                        Set budgets, alerts, and policies
                                        to prevent overspending.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>


                </div>

                {/* STATS */}
                <div className="sales-stats" ref={statsRef}>
                    <img src={WhiteFavIcon} alt="CloudPi Icon" className="stats-icon" />

                    <div className="sales-stat-item">
                        <h2>#1</h2>
                        <p>
                            Leading CRM platform for
                            modern teams
                        </p>
                    </div>

                    <div className="sales-stat-item">
                        <h2>7.3M+</h2>
                        <p>
                            Customer interactions
                            handled worldwide
                        </p>
                    </div>

                    <div className="sales-stat-item">
                        <h2>250k+</h2>
                        <p>
                            Businesses grow yearly
                            with Qarin
                        </p>
                    </div>

                    <div className="sales-stat-item">
                        <h2>70k+</h2>
                        <p>
                            Sales teams trust Qarin
                            to close more deals
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default SalesSection;
