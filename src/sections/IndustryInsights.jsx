import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BadgeIcon from "../assets/favicon.png";
import WhiteFavIcon from "../assets/cloudpi-favicon-white.png";
import AnimatedHeading from "../components/AnimatedHeading";
import "../styles/SalesSection.css";
import "../styles/IndustryInsights.css";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    {
        value: 32,
        suffix: "%",
        description: "Average cloud spend wastage",
    },
    {
        value: 40,
        suffix: "%",
        description: "Potential savings through cost optimization",
    },
    {
        value: 3,
        suffix: "x",
        description: "Faster cost visibility with unified monitoring",
    },
    {
        value: 500,
        prefix: "$",
        suffix: "B+",
        description: "Global enterprise cloud spending",
    },
];

const formatStatValue = ({ prefix = "", value, suffix = "" }) => `${prefix}${value}${suffix}`;

const IndustryInsights = () => {
    const sectionRef = useRef(null);
    const statsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const countItems = gsap.utils.toArray(".insight-count");

            countItems.forEach((item) => {
                item.textContent = formatStatValue({
                    prefix: item.dataset.prefix,
                    value: 0,
                    suffix: item.dataset.suffix,
                });
            });

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

            ScrollTrigger.create({
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
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="industry-insights-section" ref={sectionRef}>
            <div className="container">
                {/* Header */}
                <div className="insights-header text-center">
                    <div className="sales-badge">
                        <img src={BadgeIcon} alt="CloudPi Badge" />
                        INDUSTRY INSIGHTS
                    </div>

                    <AnimatedHeading
                        text={"Cloud Waste is Costing Companies\nMillions Every Year"}
                        className="insights-title display-5 fw-semibold gradient-text"
                    />

                    <p className="insights-subtitle">
                        As organizations move rapidly to the cloud, maintaining cost visibility
                        has become a major challenge. Without proper governance and optimization,
                        a significant percentage of cloud spending goes unused.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="insight-stats-grid sales-stats" ref={statsRef}>
                    <img src={WhiteFavIcon} alt="CloudPi Icon" className="stats-icon" />

                    {stats.map((stat, index) => (
                        <div className="sales-stat-item" key={index}>
                            <h2>
                                <span
                                    className="insight-count"
                                    data-prefix={stat.prefix || ""}
                                    data-target={stat.value}
                                    data-suffix={stat.suffix || ""}
                                >
                                    {formatStatValue(stat)}
                                </span>
                            </h2>
                            <p>{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustryInsights;
