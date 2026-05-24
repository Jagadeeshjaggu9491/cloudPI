// IntegrationsSection.jsx
import NetworkLines from '../assets/images/NetworkLines.png'
import "../styles/IntegrationsSection.css";
import CenterLogo from "../assets/images/connect-logos/cloudPI.png";
import Jira from "../assets/images/connect-logos/jira-logo.png";
import Azure from "../assets/images/connect-logos/azure-logo.png";
import ServiceNow from "../assets/images/connect-logos/servicenow-logo.png";
import OutLook from "../assets/images/connect-logos/outlook-logo.png";
import OpenID from "../assets/images/connect-logos/openid-logo.png";
import Okta from "../assets/images/connect-logos/okta-logo.png";
import Gmail from "../assets/images/connect-logos/gmail-logo.png";
import Logo3 from "../assets/images/connect-logos/logo-3.png";

const leftIcons = [
    {
        image: Jira,
        className: "left-1",
    },
    {
        image: Azure,
        className: "left-2",
    },
    {
        image: ServiceNow,
        className: "left-3",
    },
    {
        image: OutLook,
        className: "left-4",
    },
    {
        image: OpenID,
        className: "left-5",
    },
];

const rightIcons = [
    {
        image: Okta,
        className: "right-1",
    },
    {
        image: Gmail,
        className: "right-2",
    },
    {
        image: Logo3,
        className: "right-3",
    },
    {
        image: Azure,
        className: "right-4",
    },
    {
        image: OutLook,
        className: "right-5",
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

                    <h2 className="gradient-text">
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
                                src={CenterLogo}
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