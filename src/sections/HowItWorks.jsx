// HowItWorks.jsx

import React from "react";
import "../styles/HowItWorks.css";
import { HiOutlineLightningBolt } from "react-icons/hi";
import AnimatedHeading from "../components/AnimatedHeading";
import HowItWorks1 from "../assets/images/how-1.png";
import HowItWorks2 from "../assets/images/how-2.png";
import HowItWorks3 from "../assets/images/how-3.png";

const HowItWorks = () => {
    return (
        <section className="how-section">

            <div className="container">

                {/* TOP CONTENT */}
                <div className="how-top text-center">

                    <div className="how-badge">
                        <HiOutlineLightningBolt className="badge-icon" />
                        <span>How it works</span>
                    </div>

                    <AnimatedHeading
                        text={"How CloudPi Solves\nThese Challenges"}
                        className="gradient-text"
                    />

                    <p>
                        CloudPi brings structure, visibility, and automation
                        to cloud cost management across your organization.
                    </p>

                </div>

                {/* CONNECTOR */}
                <div className="flow-wrapper">

                    <div className="flow-line">

                        <div className="flow-center-line"></div>

                        <div className="flow-glow"></div>

                    </div>

                </div>

                {/* CARDS */}
                <div className="row g-lg-5 g-4">

                    {/* CARD 1 */}
                    <div className="col-lg-4">

                        <div className="work-card">

                            <div className="work-image">
                                <img
                                    src={HowItWorks1}
                                    alt="Work"
                                />
                            </div>

                            <div className="work-content">

                                <h4>
                                    Start with instant setup
                                </h4>

                                <p>
                                    Connect your contacts and import leads
                                    to create a clear, ready-to-use pipeline
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* CARD 2 */}
                    <div className="col-lg-4">

                        <div className="work-card">

                            <div className="work-image">
                                <img
                                    src={HowItWorks2}
                                    alt="Work"
                                />
                            </div>

                            <div className="work-content">

                                <h4>
                                    Manage every deal seamlessly
                                </h4>

                                <p>
                                    Track conversations, assign tasks,
                                    and follow up on time, all from
                                    one organized workspace.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* CARD 3 */}
                    <div className="col-lg-4">

                        <div className="work-card">

                            <div className="work-image">
                                <img
                                    src={HowItWorks3}
                                    alt="Work"
                                />
                            </div>

                            <div className="work-content">

                                <h4>
                                    Review, close, and repeat
                                </h4>

                                <p>
                                    Measure results, learn from insights,
                                    and keep improving your sales process
                                    with every cycle.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default HowItWorks;
