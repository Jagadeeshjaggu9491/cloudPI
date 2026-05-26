// IntegrationsSection.jsx
import NetworkLines from '../assets/images/NetworkLines.png'
import "../styles/IntegrationsSection.css";
import AnimatedHeading from "../components/AnimatedHeading";
import CenterLogo from "../assets/images/connect-logos/cloudPI.png";
import Jira from "../assets/images/connect-logos/jira-logo.png";
import Azure from "../assets/images/connect-logos/azure-logo.png";
import AzureDevOps from "../assets/images/connect-logos/azure-dev.png";
import ServiceNow from "../assets/images/connect-logos/servicenow-logo.png";
import OpenID from "../assets/images/connect-logos/openid-logo.png";
import Okta from "../assets/images/connect-logos/okta-logo.png";
import SMTP from "../assets/images/connect-logos/smtp.png";
import SAML from "../assets/images/connect-logos/saml.png";
import OAuth from "../assets/images/connect-logos/oauth.png";

const leftIcons = [
    {
        image: ServiceNow,
        title: "ServiceNow",
        className: "left-1",
    },
    {
        image: Jira,
        title: "Jira",
        className: "left-2",
    },
    {
        image: AzureDevOps,
        title: "Azure DevOps",
        className: "left-3",
    },
    {
        image: SMTP,
        title: "SMTP",
        className: "left-4",
    }
];

const rightIcons = [
    {
        image: Okta,
        title: "Okta",
        className: "right-1",
    },
    {
        image: Azure,
        title: "Azure AD",
        className: "right-2",
    },
    {
        image: SAML,
        title: "SAML",
        className: "right-3",
    },
    {
        image: OAuth,
        title: "OAuth",
        className: "right-4",
    },
    {
        image: OpenID,
        title: "OpenID Connect",
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

                    <AnimatedHeading
                        text={"Connect CloudPi to the tools your\nteams already use."}
                        className="gradient-text"
                    />

                    <p>
                        CloudPi integrations are built to turn cloud cost
                        visibility into secure action: ticketing for
                        accountability, email for alerts, and SSO for
                        controlled access.
                    </p>

                    <button className="hero-btn-primary">
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
                                    alt={item.title}
                                />

                            </div>
                            <span className="integration-icon-title">{item.title}</span>
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
                                    alt={item.title}
                                />

                            </div>
                            <span className="integration-icon-title">{item.title}</span>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default IntegrationsSection;
