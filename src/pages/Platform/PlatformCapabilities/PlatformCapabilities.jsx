import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./PlatformCapabilities.css";
import TrueSavings from "../../../assets/images/icons/true-savings.svg";
import ZeroTagging from "../../../assets/images/icons/zero-tagging.svg";
import IntelligentSavings from "../../../assets/images/icons/intelligent-savings.svg";


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

const PlatformCapabilities = () => {

    const sectionRef = useRef(null);

    const badgeRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const buttonsRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {

        const ctx = gsap.context(() => {

            /* ==================================================
               INITIAL STATES
            ================================================== */

            gsap.set(
                [
                    badgeRef.current,
                    titleRef.current,
                    descRef.current,
                    buttonsRef.current,
                ],
                {
                    opacity: 0,
                    y: 40,
                    filter: "blur(12px)",
                }
            );

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
                    titleRef.current,
                    {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        duration: 0.95,
                    },
                    "-=0.45"
                )

                .to(
                    descRef.current,
                    {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        duration: 0.85,
                    },
                    "-=0.55"
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
                );

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

    return (

        <section
            className="platform-capabilities-section"
            ref={sectionRef}
        >

            <div className="container">

                <div className="row">

                    <div className="col-xl-7 col-lg-8">

                        {/* BADGE */}
                        <div
                            className="platform-badge"
                            ref={badgeRef}
                        >

                            <span className="badge-dot"></span>

                            GOVERNED FINOPS AT ENTERPRISE SCALE

                        </div>

                        {/* TITLE */}
                        <h1
                            className="platform-title"
                            ref={titleRef}
                        >

                            Allocate.
                            <span className="gradient-text"> Optimize.</span>

                            <br />

                            Prove.

                        </h1>

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

                            <button className="primary-platform-btn">

                                Book a Demo

                            </button>

                            <button className="secondary-platform-btn">

                                Start Free Trial

                            </button>

                        </div>

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

                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>

                                        </div>

                                        {/* ICON */}
                                        <div className="premium-icon-wrap">

                                            <div
                                                className={`premium-icon ${item.color}`}
                                            >

                                                <i className={item.icon}></i>

                                            </div>

                                        </div>

                                        {/* CONTENT */}
                                        <div className="premium-card-content">

                                            <h3>{item.title}</h3>

                                            <div className="title-line"></div>

                                            <p>{item.desc}</p>

                                        </div>

                                        {/* BOTTOM IMAGE */}
                                        <div className="premium-bottom-visual">

                                            {index === 0 && (

                                                <img
                                                    src={item.image}
                                                    alt=""
                                                    className="img-fluid"
                                                />

                                            )}

                                            {index === 1 && (

                                                <img
                                                    src={item.image}
                                                    alt=""
                                                    className="img-fluid"
                                                />

                                            )}

                                            {index === 2 && (

                                                <img
                                                    src={item.image}
                                                    alt=""
                                                    className="img-fluid"
                                                />

                                            )}

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>

            </div>

        </section>
    );
};

export default PlatformCapabilities;