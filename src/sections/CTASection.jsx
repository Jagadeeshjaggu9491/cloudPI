// CTASection.jsx

import "../styles/CTASection.css";

import BgImage from "../assets/images/backgrounds/cta-bg.png";
import NoiseImage from "../assets/images/backgrounds/bg-noise.webp";
import LeftCard from "../assets/images/cta/left-card.png";
import RightCard from "../assets/images/cta/left-card.png";
import AnimatedHeading from "../components/AnimatedHeading";

// import { ArrowUpRight } from "lucide-react";
import { FaArrowRight, FaRegFileAlt } from "react-icons/fa";

const CTASection = () => {
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

                        <img
                            src={LeftCard}
                            alt="Analytics"
                        />

                    </div>

                    {/* RIGHT FLOAT CARD */}
                    <div className="cta-card right-card">

                        <img
                            src={RightCard}
                            alt="Saving Goal"
                        />

                    </div>

                    {/* CONTENT */}
                    <div className="cta-content text-center">

                        <AnimatedHeading text={"Take Control of Your\nCloud Costs"} />

                        <p>
                            Join thousands of users who trust Findays
                            to achieve their financial goals.
                        </p>

                        <button className="hero-btn-secondary">

                            Get Started Now

                            <span>
                                <FaArrowRight />
                            </span>

                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default CTASection;
