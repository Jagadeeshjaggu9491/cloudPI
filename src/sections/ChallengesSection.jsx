// ChallengesSection.jsx

import React, { useState } from "react";
import "../styles/ChallengesSection.css";
import { FaBolt } from "react-icons/fa";
import AnimatedHeading from "../components/AnimatedHeading";

import { BarChart3, PiggyBank, Shield, Cloud } from "lucide-react";
import dashboard1 from "../assets/images/dashboard-1.png";
import dashboard2 from "../assets/images/dashboard-2.png";
import dashboard3 from "../assets/images/dashboard-3.png";
import { number } from "motion";

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

const ChallengesSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="challenge-section">
            <div className="container">
                {/* Top */}
                <div className="row align-items-start mb-5">
                    <div className="col-lg-6">
                        <div className="challenge-badge">
                            <FaBolt className="challenge-badge-icon" />

                            <span>Business Impact</span>
                        </div>

                        <AnimatedHeading
                            text={"Cloud Cost Optimization\nMade Simple"}
                            className="challenge-title gradient-text"
                        />
                    </div>

                    <div className="col-lg-5 offset-lg-1">
                        <p className="challenge-description">
                            CloudPi enables engineering and FinOps teams to gain complete visibility into cloud spending, optimize infrastructure usage, and enforce governance policies across AWS, Azure, and Google Cloud environments.
                        </p>
                    </div>
                </div>

                {/* Main Card */}
                <div className="challenge-main-card">
                    <div className="row g-0">
                        {/* Left Side */}
                        <div className="col-lg-5">
                            <div className="challenge-left">
                                {tabs.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className={`challenge-item ${activeTab === index ? "active" : ""
                                            }`}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        <div className="challenge-metric">{item.number}</div>
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
                            <div className="challenge-image-wrapper">
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
