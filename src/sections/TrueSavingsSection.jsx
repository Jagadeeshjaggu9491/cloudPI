import {
    HiOutlineDocumentArrowDown,
    HiOutlineCreditCard,
    HiOutlineShieldCheck,
    HiShieldCheck,
    HiSparkles,
} from "react-icons/hi2";
import AnimatedHeading from "../components/AnimatedHeading";
import "../styles/TrueSavingsSection.css";

const tiers = [
    {
        number: "01",
        icon: <HiOutlineDocumentArrowDown />,
        color: "green",
        title: "Hard Savings",
        subtitle: "The bill went down.",
        desc: "Rightsizing, scheduling, terminations.",
    },
    {
        number: "02",
        icon: <HiOutlineCreditCard />,
        color: "blue",
        title: "Rate Savings",
        subtitle: "Same resources, lower rate.",
        desc: "RIs, Savings Plans, EDP commitments.",
    },
    {
        number: "03",
        icon: <HiOutlineShieldCheck />,
        color: "purple",
        title: "Cost Avoidance",
        subtitle: "Prevented spend.",
        desc: "Guardrails, auto-scaling, shutdown policies.",
    },
];

const TrueSavingsSection = () => (
    <section className="true-savings-section">
        <div className="container">

            {/* ── HEADER ─────────────────────────────────── */}
            <div className="ts-header">

                {/* BADGE */}
                <div className="ts-badge">
                    <span className="ts-badge-dot"></span>
                    TRUE SAVINGS
                </div>

                {/* TITLE */}
                <AnimatedHeading
                    tag="h2"
                    className="ts-title display-5 fw-bold"
                    display="block"
                    delay={20}
                    duration={0.9}
                    from={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                    to={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                >
                    Prove Every Dollar Saved.
                    <br />
                    Against the{" "}
                    <span className="ts-gradient-text">Actual Bill.</span>
                </AnimatedHeading>

                {/* UNDERLINE */}
                <div className="ts-title-underline"></div>

                {/* DESC */}
                <p className="ts-description">
                    Most CTO cloud cost tools report "potential savings" — the theoretical value if every
                    recommendation were implemented. CloudPi reports{" "}
                    <span className="ts-highlight">TRUE Savings:</span> verified by
                    comparing actual billing data before and after each action,
                    <br />
                    with a full evidence chain your CFO can audit.
                </p>

                <p className="ts-sub-desc">
                    Three tiers, always reported separately. No mixing, no inflated totals.
                </p>

                {/* CTA */}
                <button className="ts-cta-btn">
                    See the methodology &nbsp;→
                </button>

            </div>

            {/* ── TIER CARDS ─────────────────────────────── */}
            <div className="ts-cards-grid">
                {tiers.map((tier, index) => (
                    <div className={`ts-card ts-card--${tier.color}`} key={index}>

                        {/* NUMBER */}
                        <span className={`ts-card-number ts-num--${tier.color}`}>
                            {tier.number}
                        </span>

                        {/* ICON */}
                        <div className={`ts-card-icon-wrap ts-icon--${tier.color}`}>
                            {tier.icon}
                        </div>

                        {/* CONTENT */}
                        <h3 className={`ts-card-title ts-title--${tier.color}`}>
                            {tier.title}
                        </h3>
                        <p className="ts-card-subtitle">{tier.subtitle}</p>
                        <p className="ts-card-desc">{tier.desc}</p>

                        {/* WAVE BG */}
                        <div className="ts-card-wave-bg"></div>

                    </div>
                ))}
            </div>

            {/* ── FOOTER BANNER ──────────────────────────── */}
            <div className="ts-footer-banner">

                <div className="ts-footer-dot-grid">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <span key={i}></span>
                    ))}
                </div>

                <div className="ts-footer-icon-wrap">
                    <HiShieldCheck />
                </div>

                <p className="ts-footer-text">
                    Every savings claim is{" "}
                    <span className="ts-footer-highlight">billing-verified</span>{" "}
                    and attributed
                    <br />
                    to the specific policy, team, and engineer who drove it.
                </p>

                <div className="ts-footer-dot-grid ts-footer-dot-grid--right">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <span key={i}></span>
                    ))}
                </div>

            </div>

        </div>
    </section>
);

export default TrueSavingsSection;
