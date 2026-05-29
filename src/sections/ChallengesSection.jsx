// ChallengesSection.jsx

import React, { useState, useEffect, useRef } from "react";
import "../styles/ChallengesSection.css";
import { FaBolt } from "react-icons/fa";
import AnimatedHeading from "../components/AnimatedHeading";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { BarChart3, PiggyBank, Shield, Cloud } from "lucide-react";
import dashboard1 from "../assets/images/dashboard-1.png";
import dashboard2 from "../assets/images/dashboard-2.png";
import dashboard3 from "../assets/images/dashboard-3.png";
import { number } from "motion";

gsap.registerPlugin(ScrollTrigger);

const tabs = [
    {
        id: 1,
        number: "3x",
        title: "Faster Cost Visibility",
        desc: "Real-time dashboards provide instant visibility into cloud costs.",
        icon: <BarChart3 size={24} />,
        image: dashboard1,
    },
    {
        id: 2,
        number: "50%",
        title: "Higher Savings Realization",
        desc: "Automation helps teams capture more recommended savings before waste grows.",
        icon: <PiggyBank size={24} />,
        image: dashboard2,
    },
    {
        id: 3,
        number: "50+",
        title: "Governance Policies",
        desc: "Automated policies prevent anomalies and unexpected cost spikes.",
        icon: <Shield size={24} />,
        image: dashboard3,
    },
    {
        id: 4,
        number: "100%",
        title: "Multi-Cloud Coverage",
        desc: "Unified cost visibility across AWS, Azure,Google Cloud and DataBricks.",
        icon: <Cloud size={24} />,
        image: dashboard3,
    },
];

const CountUpMetric = ({ value }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        // Parse numeric value and suffix (e.g. 50% -> value: 50, suffix: %)
        const match = value.trim().match(/^(\d+)(.*)$/);
        if (!match) return;

        const targetVal = parseInt(match[1], 10);
        const suffix = match[2];

        const obj = { val: 0 };
        
        const tl = gsap.to(obj, {
            val: targetVal,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: elementRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
            },
            onUpdate: () => {
                if (elementRef.current) {
                    elementRef.current.textContent = Math.round(obj.val) + suffix;
                }
            }
        });

        return () => {
            tl.kill();
        };
    }, [value]);

    return <span ref={elementRef}>0{value.trim().replace(/^\d+/, "")}</span>;
};

const ChallengesSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    const sectionRef = useRef(null);
    const badgeRef = useRef(null);
    const descRef = useRef(null);
    const mainCardRef = useRef(null);
    const itemsContainerRef = useRef(null);
    const imageWrapperRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set 3D perspective on section container for realistic depth
            gsap.set(sectionRef.current, { perspective: 1200 });

            // Badge fade-in & back-spring
            gsap.fromTo(
                badgeRef.current,
                { opacity: 0, scale: 0.85, y: 25, filter: "blur(10px)" },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1.0,
                    ease: "back.out(1.6)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 88%",
                    }
                }
            );

            // Description sleek blur reveal
            gsap.fromTo(
                descRef.current,
                { opacity: 0, y: 35, filter: "blur(12px)" },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1.4,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 83%",
                    }
                }
            );

            // Main Card premium 3D Tilt & Glide
            gsap.fromTo(
                mainCardRef.current,
                { 
                    opacity: 0, 
                    y: 90, 
                    scale: 0.95, 
                    rotationX: -12, 
                    rotationY: 2, 
                    filter: "blur(16px)" 
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotationX: 0,
                    rotationY: 0,
                    filter: "blur(0px)",
                    duration: 1.8,
                    ease: "power4.out",
                    transformOrigin: "center top",
                    scrollTrigger: {
                        trigger: mainCardRef.current,
                        start: "top 85%",
                    }
                }
            );

            // Staggered list items 3D cascade
            if (itemsContainerRef.current) {
                gsap.fromTo(
                    itemsContainerRef.current.children,
                    { 
                        opacity: 0, 
                        x: -50, 
                        rotationY: 15, 
                        scale: 0.95, 
                        filter: "blur(8px)" 
                    },
                    {
                        opacity: 1,
                        x: 0,
                        rotationY: 0,
                        scale: 1,
                        filter: "blur(0px)",
                        stagger: 0.12,
                        duration: 1.4,
                        ease: "power3.out",
                        transformOrigin: "left center",
                        scrollTrigger: {
                            trigger: mainCardRef.current,
                            start: "top 78%",
                        }
                    }
                );
            }

            // Image Wrapper sleek zoom-in reveal
            gsap.fromTo(
                imageWrapperRef.current,
                { 
                    opacity: 0, 
                    x: 60, 
                    scale: 0.92, 
                    rotationY: -15, 
                    filter: "blur(20px)" 
                },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    rotationY: 0,
                    filter: "blur(0px)",
                    duration: 1.8,
                    ease: "power4.out",
                    transformOrigin: "right center",
                    scrollTrigger: {
                        trigger: mainCardRef.current,
                        start: "top 78%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="challenge-section" ref={sectionRef}>
            <div className="container">
                {/* Top */}
                <div className="row align-items-start mb-5">
                    <div className="col-lg-6">
                        <div className="challenge-badge" ref={badgeRef}>
                            <FaBolt className="challenge-badge-icon" />

                            <span>Business Impact</span>
                        </div>

                        <AnimatedHeading
                            text={"Cloud Cost Optimization\nMade Simple"}
                            className="challenge-title gradient-text"
                        />
                    </div>

                    <div className="col-lg-5 offset-lg-1">
                        <p className="challenge-description" ref={descRef}>
                            CloudPi enables engineering and FinOps teams to gain complete visibility into cloud spending, optimize infrastructure usage, and enforce governance policies across AWS, Azure, and Google Cloud environments.
                        </p>
                    </div>
                </div>

                {/* Main Card */}
                <div className="challenge-main-card" ref={mainCardRef}>
                    <div className="row g-0">
                        {/* Left Side */}
                        <div className="col-lg-5">
                            <div className="challenge-left" ref={itemsContainerRef}>
                                {tabs.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className={`challenge-item ${activeTab === index ? "active" : ""
                                            }`}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        <div className="challenge-metric">
                                            <CountUpMetric value={item.number} />
                                        </div>
                                        <div className="challenge-divider"></div>
                                        
                                        <div className="challenge-content">
                                            <h5>{item.title}</h5>
                                            <p>{item.desc}</p>
                                        </div>

                                        <div className="challenge-icon-circle">{item.icon}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="col-lg-7">
                            <div className="challenge-image-wrapper" ref={imageWrapperRef}>
                                <img
                                    key={activeTab}
                                    src={tabs[activeTab].image}
                                    alt="dashboard"
                                    className="img-fluid challenge-dashboard-image fade-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChallengesSection;
