// WhyChooseSection.jsx

import React, { useState } from "react";
import "../styles/WhyChooseSection.css";
import {
    HiArrowSmRight,
    HiPlus,
    HiMinus,
} from "react-icons/hi";
import {
    HiOutlineSparkles,
} from "react-icons/hi";

const items = [
    {
        number: "01",
        title: "Improve your cost optimization execution rate by 300%",
        challenge:
            "Recommendations stay trapped in Slack threads and forgotten tickets. Savings never reach the bill.",
        solution:
            "Three execution modes matched to risk: Autonomous, Approval-Gated, and Ticket-Driven.",
        outcome:
            "70% execution rate vs 18% industry average",
    },
    {
        number: "02",
        title: "Improve accountability at scale across your organization",
        challenge:
            "Resources accumulate with no team claiming them. Nobody fixes what nobody owns.",
        solution:
            "CloudPi maps cloud accounts to your real org structure and assigns ownership automatically.",
        outcome:
            "Clear ownership from day one",
    },
    {
        number: "03",
        title: "Achieve day-one cost allocation — even without tagging",
        challenge:
            "Finance needs allocation now. Engineering will get to tagging later.",
        solution:
            "CloudPi allocates 85% of costs using non-tag signals from day one.",
        outcome:
            "85% cost allocation in day 1",
    },
    {
        number: "04",
        title: "Achieve TRUE Savings — verified against your actual bill",
        challenge:
            "Most dashboards count estimated savings that never impact billing.",
        solution:
            "Every savings claim is verified directly against billing data.",
        outcome:
            "Billing-verified savings reporting",
    },
];

const WhyChooseSection = () => {

    const [active, setActive] = useState(0);

    return (
        <section className="why-section">

            <div className="container">

                {/* TOP */}

                <div className="why-top">

                    <div className="row align-items-end gy-4">

                        {/* LEFT */}

                        <div className="col-lg-8">

                            <div className="why-top-left">

                                <div className="why-badge">

                                    <span className="why-badge-icon">
                                        <HiOutlineSparkles />
                                    </span>

                                    <span>
                                        Why CloudPi
                                    </span>

                                </div>

                                <h2 className="gradient-text">
                                    Four challenges.
                                    <br />

                                    Four answers.
                                    <br />

                                    One governed system.
                                </h2>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="col-lg-4">

                            <div className="why-top-right">

                                <p>
                                    The problems keeping enterprise cloud costs uncontrolled —
                                    and how CloudPi solves each.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* ACCORDION */}

                <div className="why-list">


                    <div className="row g-4">

                        {items.map((item, index) => {

                            const isActive = active === index;

                            return (

                                <div
                                    className="col-lg-6"
                                    key={index}
                                >

                                    <div
                                        className={`why-item ${isActive ? "active" : ""}`}
                                    >

                                        {/* TOP ROW */}

                                        <div
                                            className="why-row"
                                            onClick={() => setActive(isActive ? null : index)}
                                        >

                                            <div className="why-left">

                                                <div className="why-number">
                                                    {item.number}
                                                </div>

                                                <h3>
                                                    {item.title}
                                                </h3>

                                            </div>

                                            <div className="why-action">

                                                {isActive ? (
                                                    <HiMinus />
                                                ) : (
                                                    <HiPlus />
                                                )}

                                            </div>

                                        </div>

                                        {/* CONTENT */}

                                        <div className="why-content">

                                            <div className="why-content-inner">

                                                <div className="why-grid">

                                                    <div className="why-block">

                                                        <span>
                                                            Challenge
                                                        </span>

                                                        <p>
                                                            {item.challenge}
                                                        </p>

                                                    </div>

                                                    <div className="why-block">

                                                        <span>
                                                            Solution
                                                        </span>

                                                        <p>
                                                            {item.solution}
                                                        </p>

                                                    </div>

                                                </div>

                                                <div className="why-outcome mb-3">

                                                    <HiArrowSmRight />

                                                    <p className="mb-0">
                                                        {item.outcome}
                                                    </p>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            );
                        })}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default WhyChooseSection;