// VisibilitySection.jsx

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiCheck } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import "../styles/VisibilitySection.css";
import AnimatedHeading from "../components/AnimatedHeading";
import VisibilityChart from "../assets/images/home-cloud-cost-challange.png";
import VisibilityImg from "../assets/images/visibility-img.jpg";
import BadgeIcon from "../assets/favicon.png"


gsap.registerPlugin(ScrollTrigger);

const features = [
    "Manual cloud cost optimization leads to errors, inefficiencies, and wasted engineering time.",
    "Cloud cost tools stop at recommendations, not execution.",
    "Cost-saving recommendations remain stuck in dashboards without execution.",
    "Optimization is manual — there’s no automated way to enforce cost savings."
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
                    <div className="col-lg-6">
                        <div className="visibility-left">
                            <div className="sales-badge">
                                <img src={BadgeIcon} alt="CloudPi Badge" />
                                CLOUD COST CHALLENGE
                            </div>
                            <AnimatedHeading
                                text={"Cloud Cost Optimization\nStops at Insights — Not Execution"}
                                className="gradient-text"
                            />

                            <p>
                                Cloud spending is increasing rapidly as organizations scale across AWS, Azure, and GCP. While cost optimization tools provide recommendations, most organizations struggle to actually implement them — leading to continuous waste and missed savings.
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
                            {/* CTA / Action */}
                            <div className="navbar-actions d-none d-lg-flex justify-content-start gap-3 my-4">
                                {/* <Link to="/contact" className="btn-contact">Contact Sales</Link> */}
                                <Link to="/get-started" className="btn-premium btn-premium-primary">
                                    <span>See How CloudPi Automates Savings <FaArrowRight size={11} /></span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-lg-6">
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
                                    <h3>Only 15–25%</h3>

                                    <p>
                                        of cost-saving recommendations are actually implemented by engineering teams — leaving most savings unrealized.
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
