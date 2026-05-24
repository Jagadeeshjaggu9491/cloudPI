// VisibilitySection.jsx

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiCheck } from "react-icons/fi";
import "../styles/VisibilitySection.css";
import VisibilityChart from "../assets/images/visibility-chart.png";
import VisibilityImg from "../assets/images/visibility-img.jpg";

gsap.registerPlugin(ScrollTrigger);

const features = [
    "Track activity patterns across your entire sales workflow",
    "Connect effort, timing, and outcomes in one view",
    "Make data-informed decisions without manual reporting",
];

const VisibilitySection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".visibility-left", {
                x: -80,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            gsap.from(".card-photo", {
                y: 80,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });

            gsap.from(".card-purple", {
                y: 80,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });

            gsap.from(".chart-card", {
                x: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });

            gsap.from(".feature-item", {
                opacity: 0,
                y: 20,
                stagger: 0.2,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
            });

            gsap.to(".progress-ring", {
                rotate: 360,
                duration: 18,
                repeat: -1,
                ease: "linear",
                transformOrigin: "center center",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="visibility-section" ref={sectionRef}>
            <div className="container">
                <div className="row align-items-center gy-5">
                    {/* LEFT CONTENT */}
                    <div className="col-lg-5">
                        <div className="visibility-left">
                            <h2 className="gradient-text">
                                Visibility into every <br />
                                sales action
                            </h2>

                            <p>
                                Qarin highlights when and where sales activity is most
                                effective, giving teams the context they need to improve
                                efficiency and drive consistent results.
                            </p>

                            <div className="features-wrapper">
                                {features.map((item, index) => (
                                    <div className="feature-item" key={index}>
                                        <div className="feature-icon">
                                            <FiCheck />
                                        </div>

                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-lg-7">
                        <div className="row align-items-center gy-4">
                            <div className="col-6">
                                {/* IMAGE CARD */}
                                <div className="card-photo mb-2">
                                    <img
                                        src={VisibilityImg}
                                        alt="team"
                                    />
                                </div>

                                {/* PURPLE CARD */}
                                <div className="card-purple">
                                    <h3>72% Increase in operational efficiency</h3>

                                    <p>
                                        From customers who used Qarin for at least 12 months.
                                    </p>
                                </div>
                            </div>
                            <div className="col-6">
                                {/* CHART CARD */}
                                <div className="chart-card d-flex align-items-center justify-content-center">
                                   <img src={VisibilityChart} alt="chart" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END RIGHT */}
                </div>
            </div>
        </section>
    );
};

export default VisibilitySection;