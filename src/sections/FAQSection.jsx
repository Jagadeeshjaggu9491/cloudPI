// FAQSection.jsx

import { useState } from "react";
import "../styles/FAQSection.css";
import AnimatedHeading from "../components/AnimatedHeading";

import {
    FaChevronDown,
    FaArrowRight,
    FaQuestionCircle,
} from "react-icons/fa";

const faqs = [
    {
        question: "Who typically uses CloudPi?",
        answer:
            "CloudPi is built for startups, enterprises, DevOps teams, finance departments, and organizations looking to optimize cloud operations and automate workflows.",
    },
    {
        question: "Is CloudPi only for cost reporting?",
        answer:
            "No. CloudPi combines cost intelligence, automation, governance, analytics, and operational visibility into one unified platform.",
    },
    {
        question: "What kinds of AWS actions can teams automate?",
        answer:
            "Teams can automate approvals, infrastructure scaling, tagging, security workflows, instance scheduling, and operational actions.",
    },
    {
        question:
            "Can CloudPi support approval-gated AWS workflows?",
        answer:
            "Yes. CloudPi supports approval chains, permission-based workflows, governance policies, and audit-ready automation systems.",
    },
    {
        question: "How does onboarding usually begin?",
        answer:
            "Onboarding starts with infrastructure discovery, cloud integration setup, workflow mapping, and team enablement sessions.",
    },
    {
        question: "How does onboarding usually begin?",
        answer:
            "Onboarding starts with infrastructure discovery, cloud integration setup, workflow mapping, and team enablement sessions.",
    },
    {
        question: "How does onboarding usually begin?",
        answer:
            "Onboarding starts with infrastructure discovery, cloud integration setup, workflow mapping, and team enablement sessions.",
    },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className="faq-section">
            <div className="container">
                <div className="row gy-5 align-items-start">

                    {/* LEFT SIDE */}

                    <div className="col-lg-5">
                        <div className="faq-left-content">

                            {/* Badge */}
                            <div className="why-badge">

                                <span className="why-badge-icon me-2">
                                    <FaQuestionCircle />
                                </span>

                                <span>
                                    FAQs
                                </span>

                            </div>

                            {/* Heading */}

                            <AnimatedHeading text="Got Questions?" className="gradient-text" />

                            {/* Description */}

                            <p>
                                Everything you need to know about using
                                CloudPi, from plans and integrations to
                                AI-powered features.
                            </p>

                            {/* Support Card */}

                            <div className="faq-support-card">
                                <img
                                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop"
                                    alt="Support"
                                />

                                <div className="faq-support-overlay"></div>

                                <div className="faq-support-content">
                                    <p>
                                        Still have questions or need help
                                        setting up? Our support team is always
                                        ready to help you set up, learn, and
                                        grow with CloudPi.
                                    </p>

                                    <a href="/">
                                        Contact us
                                        <FaArrowRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}

                    <div className="col-lg-7">
                        <div className="faq-wrapper">

                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`faq-item ${activeIndex === index
                                        ? "active"
                                        : ""
                                        }`}
                                >

                                    {/* QUESTION */}

                                    <button
                                        className="faq-question"
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        <span>{faq.question}</span>

                                        <div
                                            className={`faq-icon ${activeIndex === index
                                                ? "rotate"
                                                : ""
                                                }`}
                                        >
                                            <FaChevronDown />
                                        </div>
                                    </button>

                                    {/* ANSWER */}

                                    <div
                                        className={`faq-answer ${activeIndex === index
                                            ? "show"
                                            : ""
                                            }`}
                                    >
                                        <div className="faq-answer-inner">
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
