import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedHeading from "../../../components/AnimatedHeading";
import "./PlatformCapabilities.css";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
    {
        icon: "bi bi-check2-square",
        title: "True Savings",
        desc: "Every dollar verified against your actual bill — not estimates.",
        color: "green",
    },
    {
        icon: "bi bi-tags-fill",
        title: "Zero Tagging",
        desc: "85% cost allocation from day one. No tag compliance required.",
        color: "blue",
    },
    {
        icon: "bi bi-lightning-charge-fill",
        title: "Intelligent Savings",
        desc: "Three execution modes that adapt to risk — autonomous to gated.",
        color: "purple",
    },
];

const PlatformCapabilities = () => {

    const sectionRef = useRef(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.set(".blur-reveal", {
                opacity: 0,
                y: 80,
                filter: "blur(25px)",
            });

            gsap.to(".blur-reveal", {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1.2,
                stagger: 0.18,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
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
                        <div className="platform-badge blur-reveal">

                            <span className="badge-dot"></span>

                            GOVERNED FINOPS AT ENTERPRISE SCALE

                        </div>

                        {/* TITLE */}
                        <div className="blur-reveal">
                            <AnimatedHeading
                                text={"Allocate.\nOptimize.\nProve."}
                                className="platform-title gradient-text"
                                tag="h1"
                            />
                        </div>

                        {/* DESCRIPTION */}
                        <p className="platform-description blur-reveal">

                            CloudPi gives enterprise teams complete cloud
                            cost control — with 85% allocation from day one,
                            intelligent savings execution, and billing-verified
                            proof that finance can trust.

                        </p>

                        {/* BUTTONS */}
                        <div className="platform-buttons blur-reveal">

                            <button className="primary-platform-btn">

                                Book a Demo

                            </button>

                            <button className="secondary-platform-btn">

                                Start Free Trial

                            </button>

                        </div>

                    </div>

                </div>

                {/* FEATURE CARDS */}
                <div className="row g-4 capability-cards-wrapper">

                    {capabilities.map((item, index) => (

                        <div
                            className="col-lg-4 col-md-6"
                            key={index}
                        >

                            <div className="capability-card blur-reveal">

                                <div
                                    className={`capability-icon ${item.color}`}
                                >

                                    <i className={item.icon}></i>

                                </div>

                                <AnimatedHeading
                                    text={item.title}
                                    className="capability-card-title gradient-text"
                                    tag="h3"
                                    delay={18}
                                    duration={0.85}
                                />

                                <p>{item.desc}</p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default PlatformCapabilities;
