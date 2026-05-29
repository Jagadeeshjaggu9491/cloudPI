import {
    HiBolt,
    HiSparkles,
    HiShieldCheck,
    HiCpuChip,
    HiClipboardDocumentList,
    HiArrowPath,
} from "react-icons/hi2";
import AnimatedHeading from "../components/AnimatedHeading";
import IntelligentImage from "../assets/images/platform-intelligent.avif";
import "../styles/IntelligentSection.css";

const executionModes = [
    {
        icon: <HiBolt />,
        badge: "AUTONOMOUS",
        badgeColor: "green",
        title: "Dev & non-critical",
        desc: "Idle instances, orphaned snapshots, unattached disks. Logged and reversible.",
    },
    {
        icon: <HiShieldCheck />,
        badge: "APPROVAL-GATED",
        badgeColor: "blue",
        title: "Staging & production",
        desc: "Rightsizing, RI purchases. Ticket → human sign-off → automated execution.",
    },
    {
        icon: <HiClipboardDocumentList />,
        badge: "TICKET + CONTEXT",
        badgeColor: "purple",
        title: "CAB-gated & partner environments",
        desc: "Full playbook, deep links, and savings data — engineer acts on their schedule.",
    },
];

const modeDetails = [
    {
        icon: <HiBolt />,
        color: "green",
        title: "Autonomous",
        desc: "CloudPi acts instantly. No human in the loop. Best for idle dev instances, orphaned snapshots, unattached volumes.",
    },
    {
        icon: <HiShieldCheck />,
        color: "blue",
        title: "Approval-Gated",
        desc: "Auto-creates a ticket in Jira, ADO, or ServiceNow. Human approves. CloudPi executes. Best for production rightsizing and Savings Plan purchases.",
    },
    {
        icon: <HiClipboardDocumentList />,
        color: "purple",
        title: "Ticket + Enriched Context",
        desc: "Ticket auto-created with resource ID, cost, savings estimate, playbook, and deep links. Engineer acts on their own timeline — with full context. Best for CAB-gated and partner-managed environments.",
    },
];

const IntelligentSection = () => (
    <section className="intelligent-section">
        <div className="container">
            <div className="row align-items-center gy-5">

                {/* ── LEFT — dark card ───────────────────── */}
                <div className="col-xl-6 order-xl-1 order-2">
                    <div className="intelligent-result-card">

                        {/* TOP */}
                        <div className="intelligent-result-top">
                            <span className="intelligent-result-label">EXECUTION RATE</span>
                        </div>

                        {/* HERO ROW — number + image side by side */}
                        <div className="intelligent-result-hero">
                            <div className="intelligent-result-main-number">
                                <span>70</span><span>%</span>
                            </div>
                            <div className="intelligent-result-cloud">
                                <img
                                    src={IntelligentImage}
                                    alt="Intelligent Savings"
                                    className="intelligent-cloud-float"
                                />
                            </div>
                        </div>

                        <p className="intelligent-result-main-text">
                            vs 18% industry average (manual follow-up)
                        </p>

                        {/* EXECUTION MODE CARDS */}
                        <div className="intelligent-mode-list">
                            {executionModes.map((mode, index) => (
                                <div className={`intelligent-mode-card`} key={index}>
                                    <div className={`intelligent-mode-icon ${mode.badgeColor}`}>
                                        {mode.icon}
                                    </div>
                                    <div className="intelligent-mode-content">
                                        <span className={`intelligent-mode-badge ${mode.badgeColor}`}>
                                            {mode.badge}
                                        </span>
                                        <h4>{mode.title}</h4>
                                        <p>{mode.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* ── RIGHT — text ───────────────────────── */}
                <div className="col-xl-6 order-xl-2 order-1">

                    {/* BADGE */}
                    <div className="intelligent-badge">
                        <HiSparkles />
                        INTELLIGENT SAVINGS
                    </div>

                    {/* TITLE */}
                    <AnimatedHeading
                        tag="h2"
                        className="platform-title display-6 fw-semibold"
                        display="block"
                        delay={22}
                        duration={0.9}
                        from={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                        to={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    >
                        Three Execution Modes.  <br />
                        <span className="gradient-text"> One Policy Engine.</span>
                        <br />
                        You Control the Risk Level.
                    </AnimatedHeading>

                    {/* DESC */}
                    <p className="intelligent-description">
                        The most effective DevOps cloud cost management doesn't force a
                        choice between fully automated or fully manual. CloudPi's policy
                        engine adapts execution to the risk level of each action and
                        environment — so your engineering teams stay in control without
                        slowing down.
                    </p>

                    {/* MODE DETAIL CARDS */}
                    <div className="intelligent-detail-list">
                        {modeDetails.map((mode, index) => (
                            <div className="intelligent-detail-card" key={index}>
                                <div className={`intelligent-detail-icon ${mode.color}`}>
                                    {mode.icon}
                                </div>
                                <div className="intelligent-detail-content">
                                    <h4>{mode.title}</h4>
                                    <p>{mode.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="my-4">
                        <button className="hero-btn-primary">
                            Explore Workflow Automations <span>→</span>
                        </button>
                    </div>

                </div>

            </div>
        </div>
    </section>
);

export default IntelligentSection;
