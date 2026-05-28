// CTASection.jsx — reusable CTA component
// Props:
//   badge        {string}   — optional label shown above the title (omit to hide)
//   title        {string|ReactNode} — required heading text (supports \n for line breaks)
//   description  {string}   — required subtitle / body copy
//   primaryBtn   {object}   — { label, onClick, href }  required
//   secondaryBtn {object}   — { label, onClick, href }  optional (omit to show one button)

import "../styles/CTASection.css";

import BgImage from "../assets/images/backgrounds/cta-bg.png";
import NoiseImage from "../assets/images/backgrounds/bg-noise.webp";
import LeftCard from "../assets/images/cta/left-card.png";
import RightCard from "../assets/images/cta/left-card.png";
import AnimatedHeading from "../components/AnimatedHeading";

import { FaArrowRight } from "react-icons/fa";

const CTASection = ({
    badge,
    title,
    description,
    primaryBtn,
    secondaryBtn,
}) => {
    const renderBtn = (btn, variant = "primary") => {
        const Tag = btn.href ? "a" : "button";
        const props = btn.href
            ? { href: btn.href }
            : { onClick: btn.onClick, type: "button" };

        const className = btn.className
            ? btn.className
            : `cta-action-btn cta-action-btn--${variant}`;

        return (
            <Tag
                className={className}
                {...props}
            >
                {btn.label}
                {!btn.className && variant === "primary" && (
                    <span className="cta-action-btn__icon">
                        <FaArrowRight />
                    </span>
                )}
            </Tag>
        );
    };

    return (
        <section className="cta-section">

            <div className="container">

                <div
                    className="cta-wrapper"
                    style={{
                        backgroundImage: `url(${BgImage})`,
                        "--cta-noise-image": `url(${NoiseImage})`,
                    }}
                >

                    {/* LEFT FLOAT CARD */}
                    <div className="cta-card left-card">
                        <img src={LeftCard} alt="" aria-hidden="true" />
                    </div>

                    {/* RIGHT FLOAT CARD */}
                    <div className="cta-card right-card">
                        <img src={RightCard} alt="" aria-hidden="true" />
                    </div>

                    {/* CONTENT */}
                    <div className="cta-content text-center">

                        {/* Optional badge */}
                        {badge && (
                            <span className="cta-badge">{badge}</span>
                        )}

                        {/* Title */}
                        <AnimatedHeading
                            tag="h2"
                            text={title}
                            className="cta-heading"
                            display="block"
                            textAlign="center"
                        />

                        {/* Description */}
                        <p className="cta-desc">{description}</p>

                        {/* Buttons */}
                        <div className="cta-actions">
                            {primaryBtn && renderBtn(primaryBtn, "primary")}
                            {secondaryBtn && renderBtn(secondaryBtn, "secondary")}
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default CTASection;
