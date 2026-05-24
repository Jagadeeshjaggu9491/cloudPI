// IntegrationsSection.jsx
import NetworkLines from '../assets/images/NetworkLines.png'
import "../styles/IntegrationsSection.css";

const leftIcons = [
    {
        image: "/images/jira.png",
        className: "left-1",
    },
    {
        image: "/images/slack.png",
        className: "left-2",
    },
    {
        image: "/images/azure.png",
        className: "left-3",
    },
];

const rightIcons = [
    {
        image: "/images/gmail.png",
        className: "right-1",
    },
    {
        image: "/images/outlook.png",
        className: "right-2",
    },
    {
        image: "/images/aws.png",
        className: "right-3",
    },
];

const IntegrationsSection = () => {
    return (
        <section className="integrations-section">

            <div className="container">

                {/* TOP CONTENT */}
                <div className="integration-top text-center">

                    <div className="integration-badge">
                        <span className="badge-dot"></span>
                        Integrations
                    </div>

                    <h2>
                        Connect CloudPi to the tools your
                        <br />
                        teams already use.
                    </h2>

                    <p>
                        CloudPi integrations are built to turn cloud cost
                        visibility into secure action: ticketing for
                        accountability, email for alerts, and SSO for
                        controlled access.
                    </p>

                    <button className="integration-btn">
                        Explore all integration
                    </button>

                </div>

                {/* NETWORK */}
                <div className="integration-network">

                    {/* LINE IMAGE */}
                    <div className="network-lines">

                        <img
                            src={NetworkLines}
                            alt="Lines"
                        />

                    </div>

                    {/* CENTER LOGO */}
                    <div className="center-logo">

                        <div className="center-logo-inner">

                            <img
                                src="/images/cloudpi-logo.png"
                                alt="CloudPi"
                            />

                        </div>

                    </div>

                    {/* LEFT ICONS */}
                    {leftIcons.map((item, index) => (
                        <div
                            key={index}
                            className={`integration-icon ${item.className}`}
                        >
                            <div className="icon-card">

                                <img
                                    src={item.image}
                                    alt=""
                                />

                            </div>
                        </div>
                    ))}

                    {/* RIGHT ICONS */}
                    {rightIcons.map((item, index) => (
                        <div
                            key={index}
                            className={`integration-icon ${item.className}`}
                        >
                            <div className="icon-card">

                                <img
                                    src={item.image}
                                    alt=""
                                />

                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default IntegrationsSection;