// CTASection.jsx

import "../styles/CTASection.css";

import BgImage from "../assets/images/backgrounds/cta-bg.png";
import LeftCard from "../assets/images/cta/left-card.png";
import RightCard from "../assets/images/cta/left-card.png";

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

                        <h2>
                            Ready to simplify your
                            <br />
                            financial life?
                        </h2>

                        <p>
                            Join thousands of users who trust Findays
                            to achieve their financial goals.
                        </p>

                        <button className="cta-btn">

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