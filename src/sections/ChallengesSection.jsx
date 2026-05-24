// ChallengesSection.jsx

import React, { useState } from "react";
import "../styles/ChallengesSection.css";

import {
    HiOutlineChartBar,
    HiOutlineSpeakerphone,
    HiOutlineSquares2X2,
} from "react-icons/hi2";

import dashboard1 from "../assets/images/dashboard-1.png";
import dashboard2 from "../assets/images/dashboard-2.png";
import dashboard3 from "../assets/images/dashboard-3.png";

const tabs = [
    {
        id: 1,
        title: "Business Hierarchy Mapping",
        desc: "CloudPi structures your cloud environment into a clear hierarchy of organizations, business units, and projects — enabling complete ownership visibility.",
        icon: <HiOutlineChartBar />,
        image: dashboard1,
    },
    {
        id: 2,
        title: "Cost Assignment Based on Rules",
        desc: "Automatically assign cloud costs using intelligent rules, tags, and metadata — ensuring accurate cost allocation without manual effort.",
        icon: <HiOutlineSpeakerphone />,
        image: dashboard2,
    },
    {
        id: 3,
        title: "TRUE Automated Savings",
        desc: "CloudPi continuously monitors usage and applies automation to optimize costs in real-time — turning insights into actual savings.",
        icon: <HiOutlineSquares2X2 />,
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
                        <span className="challenge-badge">Power Pack</span>

                        <h2 className="challenge-title">
                            How CloudPi Solves
                            <br />
                            These Challenges
                        </h2>
                    </div>

                    <div className="col-lg-5 offset-lg-1">
                        <p className="challenge-description">
                            CloudPi brings structure, visibility, and automation to cloud
                            cost management across your organization.
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
                                        <div className="challenge-icon">{item.icon}</div>

                                        <div className="challenge-content">
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
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