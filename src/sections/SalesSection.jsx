import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BadgeIcon from "../assets/favicon.png"
import topCardImg from "../assets/images/dashboard-1.png";
import leftBottomImg from "../assets/images/dashboard-1.png";
import rightCardImg from "../assets/images/about-realtime.png";
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
                        Meet CloudPi
                    </div>

                    {/* <AnimatedHeading
                        text={"Everything you need to\nmanage and grow sales"}
                        className="sales-title"
                    /> */}

                    <AnimatedHeading
                        text={"Everything you need to\nmanage and grow sales"}
                        className="challenge-title gradient-text"
                    />

                    <p className="sales-subtitle">
                        Qarin brings analytics, activity tracking,
                        and deal insights into one unified dashboard,
                        helping teams understand performance,
                        spot opportunities, and move faster
                        with confidence.
                    </p>

                </div>

                <div className="row g-3 sales-grid">

                    {/* LEFT COLUMN */}
                    <div className="col-lg-6 d-flex flex-column gap-3">

                        {/* CARD 1 */}
                        <div className="sales-card compact-card">
                            <div className="row g-0 align-items-center">

                                <div className="col-7 sales-card-content">

                                    <h3>Time tracking breakdown</h3>

                                    <p>
                                        Track how time is spent across meetings,
                                        calls, and tasks to understand productivity
                                        and improve sales performance.
                                    </p>

                                </div>

                                <div className="col-5 sales-card-image-wrap top-image">

                                    <img
                                        src={topCardImg}
                                        alt=""
                                        className="img-fluid sales-card-image"
                                    />

                                </div>

                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="sales-card compact-card">
                            <div className="row g-2 align-items-center">

                                <div className="col-7 sales-card-content">

                                    <h3>Activity tracking & insights</h3>

                                    <p>
                                        Visualize when sales activity is strongest
                                        with clear insights that help teams focus
                                        on the moments that matter most.
                                    </p>

                                </div>

                                <div className="col-5 sales-card-image-wrap small-bottom-image">

                                    <img
                                        src={leftBottomImg}
                                        alt=""
                                        className="img-fluid sales-card-image"
                                    />

                                </div>

                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN */}
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
