import {
    HiOutlineBuildingOffice2,
    HiOutlineHashtag,
    HiOutlineUsers,
    HiOutlineCircleStack,
    HiOutlineTag,
    HiSparkles,
    HiBolt,
} from "react-icons/hi2";
import AnimatedHeading from "../components/AnimatedHeading";
import AllocateImage from "../assets/images/platform-allocate.avif";
import "../styles/AllocateSection.css";

const allocationItems = [
    {
        icon: <HiOutlineBuildingOffice2 />,
        title: "Account Structure",
        desc: "Map AWS accounts, Azure subscriptions, GCP projects to business units instantly.",
    },
    {
        icon: <HiOutlineHashtag />,
        title: "Resource Naming Patterns",
        desc: "Wildcard and regex matching covers untagged resources across every service.",
    },
    {
        icon: <HiOutlineUsers />,
        title: "Service-Level Ownership",
        desc: "Dedicate shared services to owning teams without tag dependencies.",
    },
    {
        icon: <HiOutlineCircleStack />,
        title: "IAM & Usage Metadata",
        desc: "Infer ownership from who created and actively uses each resource.",
    },
    {
        icon: <HiOutlineTag />,
        title: "Tags (when available)",
        desc: "Layer tag-based rules on top to refine precision further.",
    },
];

const AllocateSection = () => (
    <section className="allocate-section">
        <div className="container">
            <div className="row align-items-center gy-5">

                {/* ── LEFT ─────────────────────────────── */}
                <div className="col-xl-6">

                    {/* BADGE */}
                    <div className="allocate-badge">
                        <HiSparkles />
                        ALLOCATE
                    </div>

                    {/* TITLE */}
                    <AnimatedHeading
                        tag="h2"
                        className="platform-title display-5 fw-semibold"
                        display="block"
                        delay={22}
                        duration={0.9}
                        from={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                        to={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    >
                        85% Cloud Cost Allocation
                        on Day One.
                        <span className="gradient-text"> Zero Tags Required.</span>
                    </AnimatedHeading>

                    {/* DESC */}
                    <p className="allocate-description">
                        Most enterprise cloud cost management tools require months
                        of tagging compliance before allocation begins. CloudPi
                        allocates the majority of your cloud spend on day one —
                        using five non-tag signals that don't require a single
                        engineering ticket from your DevOps team.
                    </p>

                    {/* LIST */}
                    <div className="allocate-list">
                        {allocationItems.map((item, index) => (
                            <div className={`allocate-list-card`} key={index}>

                                <div className="allocate-list-icon">
                                    {item.icon}
                                </div>

                                <div className="allocate-list-content">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className="my-4">
                        <button className="hero-btn-primary"> Explore Cost Allocation <span>→</span></button>
                    </div>

                </div>

                {/* ── RIGHT ────────────────────────────── */}
                <div className="col-xl-6">
                    <div className="allocate-result-card">

                        {/* TOP */}
                        <div className="result-top">
                            <span className="result-label">DAY-ONE RESULT</span>
                        </div>

                        {/* HERO ROW — number + cloud image side by side */}
                        <div className="result-hero">
                            <div className="result-main-number">
                                <span>85</span><span>%</span>
                            </div>
                            <div className="result-cloud">
                                <img
                                    src={AllocateImage}
                                    alt="Allocate"
                                    className="cloud-float"
                                />
                            </div>
                        </div>

                        <p className="result-main-text">
                            Cost allocation — first afternoon, no tags
                        </p>

                        {/* INFO CARDS */}
                        <div className="result-info-list">

                            <div className="result-info-card green">
                                <div className="result-info-icon">
                                    <HiSparkles />
                                </div>
                                <div>
                                    <span className="info-badge green">FACT</span>
                                    <h4>Allocation first, tagging second</h4>
                                    <p>
                                        Teams reach 90% tag compliance
                                        <span> 40% faster </span>
                                        when they can already see their costs.
                                    </p>
                                </div>
                            </div>

                            <div className="result-info-card blue">
                                <div className="result-info-icon">⊕</div>
                                <div>
                                    <span className="info-badge blue">RESULT</span>
                                    <h4>
                                        100% coverage,
                                        <span> 85% </span>
                                        direct attribution
                                    </h4>
                                    <p>
                                        Remaining spend allocated via shared-cost
                                        split rules — nothing left unassigned.
                                    </p>
                                </div>
                            </div>

                            <div className="result-info-card purple">
                                <div className="result-info-icon">
                                    <HiBolt />
                                </div>
                                <div>
                                    <span className="info-badge purple">SPEED</span>
                                    <h4>One afternoon to full visibility</h4>
                                    <p>
                                        Not three to six months waiting for a
                                        tagging programme to mature.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

export default AllocateSection;