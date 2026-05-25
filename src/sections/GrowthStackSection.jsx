// GrowthStackSection.jsx

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    FiPieChart,
    FiBarChart2,
    FiCheckSquare,
} from "react-icons/fi";

import "../styles/GrowthStackSection.css";
import BadgeIcon from "../assets/favicon.png"
import GrowthOne from "../assets/images/dashboard-1.png"
import GrowthTwo from "../assets/images/dashboard-3.png"
import GrowthThree from "../assets/images/dashboard-4.png"

gsap.registerPlugin(ScrollTrigger);

const tabs = [
    {
        id: 1,
        title: "Cost Assignment Based on Rules",
        icon: <FiPieChart />,
        image:
            GrowthOne,
    },
    {
        id: 2,
        title: "Business Hierarchy Mapping",
        icon: <FiBarChart2 />,
        image:
            GrowthTwo,
    },
    {
        id: 3,
        title: "TRUE Automated Savings",
        icon: <FiCheckSquare />,
        image:
            GrowthThree,
    },
];

const GrowthStackSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            /* ENTRANCE ANIMATIONS */

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            });

            tl.from(".growth-badge", {
                y: -20,
                opacity: 0,
                duration: 0.6,
            })
                .from(".growth-title", {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                }, "-=0.4")
                .from(".growth-description", {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                }, "-=0.6")
                // .from(".tab-button", {
                //     y: 20,
                //     opacity: 0,
                //     stagger: 0.15,
                //     duration: 0.6,
                // }, "-=0.6")
                .from(".dashboard-wrapper", {
                    scale: 0.92,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                }, "-=0.4");

            /* BACKGROUND CONTINUOUS MOVE */

            gsap.to(".animated-bg", {
                backgroundPosition: "-1200px 0px",
                duration: 18,
                repeat: -1,
                ease: "linear",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    /* IMAGE CHANGE ANIMATION */

    useEffect(() => {
        gsap.fromTo(
            imageRef.current,
            {
                opacity: 0,
                y: 30,
                scale: 0.96,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
            }
        );
    }, [activeTab]);

    return (
        <section className="growth-stack-section" ref={sectionRef}>
            <div className="container">
                {/* TOP CONTENT */}

                <div className="text-center growth-top-content">
                    <div className="sales-badge">
                        <img src={BadgeIcon} alt="CloudPi Badge" />
                        Growth Engine by CloudPi
                    </div>

                    <h2 className="growth-title gradient-text">
                        AI-Powered growth stack
                    </h2>

                    <p className="growth-description">
                        Qarin brings intelligence, automation, and customer
                        management together giving your team everything to close
                        deals faster and grow smarter.
                    </p>
                </div>

                {/* DASHBOARD */}

                <div className="dashboard-container animated-bg">
                    {/* TABS */}

                    <div className="tabs-wrapper">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab.id}
                                className={`tab-button ${activeTab === index ? "active" : ""
                                    }`}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab.icon}
                                <span>{tab.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* IMAGE */}

                    <div className="dashboard-wrapper">
                        <img
                            ref={imageRef}
                            src={tabs[activeTab].image}
                            alt="dashboard"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GrowthStackSection;