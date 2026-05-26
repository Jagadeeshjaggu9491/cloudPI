// WhyChooseSection.jsx

import React, { useState, useEffect, useRef } from "react";
import "../styles/WhyChooseSection.css";
import {
    HiArrowSmRight,
    HiPlus,
    HiMinus,
} from "react-icons/hi";
import {
    HiOutlineSparkles,
} from "react-icons/hi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedHeading from "../components/AnimatedHeading";

import { 
    AlertTriangle, 
    CheckCircle2, 
    ChevronsRight, 
    TrendingUp, 
    Bot, 
    ShieldCheck, 
    Ticket, 
    Building2, 
    Users2, 
    FolderGit2, 
    Signal, 
    Zap, 
    RefreshCw, 
    DollarSign, 
    Percent, 
    Shield 
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const items = [
    {
        number: "01",
        title: (
            <>
                Improve your cost optimization execution rate by <span className="why-purple-text">300%</span>
            </>
        ),
        subtitle: (
            <>
                From <span className="why-purple-text">insight to action</span> — three execution modes matched to risk, so savings actually reach the bill.
            </>
        ),
        challengeHeader: "Everybody gets insights. Nobody takes action.",
        challengeBody: "Recommendations stay trapped in Slack threads and forgotten tickets. Savings never reach the bill — and your CFO stops trusting the number.",
        solutionHeader: "Workflows that execute, not just recommend",
        solutionBody: "Three execution modes matched to risk: Autonomous for low-risk resources, Approval-Gated for production, and Ticket-Driven for complex changes.",
        outcome: "70% execution rate vs 18% industry average",
        subItems: [
            {
                title: "Autonomous",
                desc: "Low-risk resources",
                icon: <Bot size={18} />,
                color: "green",
            },
            {
                title: "Approval-Gated",
                desc: "Production",
                icon: <ShieldCheck size={18} />,
                color: "purple",
            },
            {
                title: "Ticket-Driven",
                desc: "Complex changes",
                icon: <Ticket size={18} />,
                color: "blue",
            },
        ],
    },
    {
        number: "02",
        title: (
            <>
                Improve accountability at scale across your <span className="why-purple-text">entire organization</span>
            </>
        ),
        subtitle: (
            <>
                From <span className="why-purple-text">shared and unowned</span> to <span className="why-purple-text">mapped and accountable</span> — every resource tied to a real team.
            </>
        ),
        challengeHeader: "Shared infrastructure has no owner. Costs grow unchecked.",
        challengeBody: "Resources accumulate with no team claiming them. Nobody fixes what nobody owns.",
        solutionHeader: "Business Hierarchy that maps ownership to every resource",
        solutionBody: "CloudPi maps cloud accounts to your real org — business unit, team, project, environment. Every resource has a rightful owner. Every team sees its spend.",
        outcome: "Clear ownership from day one",
        subItems: [
            {
                title: "Business Unit",
                desc: "Department level",
                icon: <Building2 size={18} />,
                color: "purple",
            },
            {
                title: "Team",
                desc: "Engineering & Product",
                icon: <Users2 size={18} />,
                color: "blue",
            },
            {
                title: "Project",
                desc: "App & Microservice",
                icon: <FolderGit2 size={18} />,
                color: "green",
            },
        ],
    },
    {
        number: "03",
        title: (
            <>
                Achieve <span className="why-purple-text">day-one cost allocation</span> — even without tagging
            </>
        ),
        subtitle: (
            <>
                From <span className="why-purple-text">"we'll fix tagging first"</span> to <span className="why-purple-text">85% allocated in day one</span> using non-tag signals.
            </>
        ),
        challengeHeader: "We can't allocate costs until we fix tagging.",
        challengeBody: "Finance needs allocation now. Engineering will get to tagging next quarter. So you wait — and FinOps can't prove value.",
        solutionHeader: "Zero tagging prerequisite — 85% allocation in day one",
        solutionBody: "CloudPi allocates 85% of cloud costs on day one using five non-tag signals. Tags improve precision later — they don't gate the process.",
        outcome: "85% cost allocation in day 1, no tags required",
        subItems: [
            {
                title: "Non-Tag Signals",
                desc: "Account & Region",
                icon: <Signal size={18} />,
                color: "blue",
            },
            {
                title: "Day-One Allocation",
                desc: "85% out-of-the-box",
                icon: <Zap size={18} />,
                color: "green",
            },
            {
                title: "Auto-Updates",
                desc: "Zero tag upkeep",
                icon: <RefreshCw size={18} />,
                color: "purple",
            },
        ],
    },
    {
        number: "04",
        title: (
            <>
                Achieve <span className="why-purple-text">TRUE Savings</span> — verified against your actual bill
            </>
        ),
        subtitle: (
            <>
                From <span className="why-purple-text">dashboard estimates</span> to <span className="why-purple-text">billing-verified outcomes</span> — three tiers, every dollar attributed.
            </>
        ),
        challengeHeader: "Your dashboard says $400K saved. Your CFO doesn't believe it.",
        challengeBody: "Most savings numbers count recommendations never acted on and use list prices instead of contracted rates. Looks good on a dashboard, means nothing on the bill.",
        solutionHeader: "TRUE Savings — billing-verified and auditable",
        solutionBody: "Every claim is compared against actual billing data, reported in three tiers: Hard (bill went down), Rate (lower contracted price), and Avoidance (cost prevented).",
        outcome: "Verified against actual billing data — not estimates",
        subItems: [
            {
                title: "Hard Savings",
                desc: "Actual bill reduction",
                icon: <DollarSign size={18} />,
                color: "green",
            },
            {
                title: "Rate Savings",
                desc: "Contracted discounts",
                icon: <Percent size={18} />,
                color: "purple",
            },
            {
                title: "Cost Avoidance",
                desc: "Pre-empted charges",
                icon: <Shield size={18} />,
                color: "blue",
            },
        ],
    },
];

const WhyChooseSection = () => {

    const [active, setActive] = useState(0);
    const sectionRef = useRef(null);
    const whyListRef = useRef(null);

    useEffect(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 992px)", () => {
            // Stacked Cards Pinning Timeline on Desktop
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top -40%",      // Pin once section is near top of viewport
                    end: "+=2800",          // Scroll distance for the entire stacking process
                    scrub: 1,               // Smooth linking to scroll
                    pin: true,              // Pin the section
                    anticipatePin: 1,
                }
            });

            // Gather all the stackable card elements
            const cards = gsap.utils.toArray(".why-card-column");

            // Set initial state for subsequent cards offscreen to the right
            cards.forEach((card, index) => {
                if (index > 0) {
                    gsap.set(card, {
                        xPercent: 130,
                        rotate: 3,
                        transformOrigin: "center center"
                    });
                }
            });

            // Create staggered overlapping tweens
            cards.forEach((card, index) => {
                if (index > 0) {
                    // Slide in the next card from the right
                    tl.to(card, {
                        xPercent: 0,
                        rotate: 0,
                        duration: 1,
                        ease: "power2.out"
                    });

                    // Layer and shrink/fade the previous card to show depth
                    tl.to(cards[index - 1], {
                        scale: 0.94,
                        opacity: 0.75,
                        y: -30,
                        duration: 0.7,
                        ease: "power1.inOut"
                    }, "-=1.0"); // Overlaps perfectly for a simultaneous sliding and sinking look
                }
            });
        });

        mm.add("(max-width: 991px)", () => {
            // Simple slide-up stagger entries on Mobile
            gsap.from(".why-badge, .why-top-left h2, .why-top-right p", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            if (whyListRef.current) {
                gsap.from(whyListRef.current.children, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: whyListRef.current,
                        start: "top 85%",
                    }
                });
            }
        });

        return () => mm.revert();
    }, []);

    return (
        <section className="why-section" ref={sectionRef}>

            <div className="container">

                <div className="why-container-wrapper">

                    {/* TOP (Sticky Left on Desktop) */}

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

                                    <AnimatedHeading
                                        text={"Four challenges.\nFour answers.\nOne governed system."}
                                        className="gradient-text"
                                    />

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

                    {/* ACCORDION (Stacking Cards on Desktop) */}

                    <div className="why-list">

                        <div className="row g-4" ref={whyListRef}>

                            {items.map((item, index) => {

                                const isActive = active === index;

                                return (

                                    <div
                                        className="col-lg-12 why-card-column"
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

                                                    <div className="why-title-group">
                                                        <h3>
                                                            {item.title}
                                                        </h3>
                                                        <p className="why-subtitle">
                                                            {item.subtitle}
                                                        </p>
                                                    </div>

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

                                                        <div className="why-block challenge-block">

                                                            <div className="why-block-header">
                                                                <div className="why-header-icon-circle challenge-icon-bg">
                                                                    <AlertTriangle size={14} />
                                                                </div>
                                                                <span>Challenge</span>
                                                                <div className="why-header-line"></div>
                                                            </div>

                                                            <h4>{item.challengeHeader}</h4>

                                                            <p>
                                                                {item.challengeBody}
                                                            </p>

                                                            <div className="why-outcome-badge">
                                                                <div className="why-outcome-icon-circle">
                                                                    <TrendingUp size={14} />
                                                                </div>
                                                                <span className="mb-0">
                                                                    {item.outcome}
                                                                </span>
                                                            </div>

                                                        </div>

                                                        <div className="why-arrow-separator">
                                                            <ChevronsRight size={22} />
                                                        </div>

                                                        <div className="why-block solution-block">

                                                            <div className="why-block-header">
                                                                <div className="why-header-icon-circle solution-icon-bg">
                                                                    <CheckCircle2 size={14} />
                                                                </div>
                                                                <span>Solution</span>
                                                                <div className="why-header-line"></div>
                                                            </div>

                                                            <h4>{item.solutionHeader}</h4>

                                                            <p>
                                                                {item.solutionBody}
                                                            </p>

                                                            <div className="why-subitems-row">
                                                                {item.subItems?.map((sub, i) => (
                                                                    <div className="why-subitem-col" key={i}>
                                                                        <div className={`why-subitem-icon-circle ${sub.color}`}>
                                                                            {sub.icon}
                                                                        </div>
                                                                        <div className="why-subitem-text">
                                                                            <h6>{sub.title}</h6>
                                                                            <span>{sub.desc}</span>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>

                                                        </div>

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

            </div>

        </section>
    );
};

export default WhyChooseSection;
