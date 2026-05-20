import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import {
  RiTwitterXLine,
} from "react-icons/ri";

import {
  FaTelegramPlane,
} from "react-icons/fa";

    import footerLogo from "../assets/logo.png";

import "../styles/Footer.css";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

  const footerRef = useRef(null);

  const topContentRef = useRef(null);

  const linksRef = useRef([]);

  const bottomRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      // FOOTER FADE IN
      gsap.from(footerRef.current, {
        opacity: 0,
        y: 120,
        duration: 1.4,
        ease: "power4.out",

        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });

      // TOP CONTENT
      gsap.from(topContentRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: topContentRef.current,
          start: "top 85%",
        },
      });

      // FOOTER LINKS
      linksRef.current.forEach((item, index) => {

        gsap.from(item, {
          opacity: 0,
          y: 40,
          duration: 1,
          delay: index * 0.12,
          ease: "power3.out",

          scrollTrigger: {
            trigger: item,
            start: "top 92%",
          },
        });

      });

      // BOTTOM AREA
      gsap.from(bottomRef.current.children, {
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: bottomRef.current,
          start: "top 95%",
        },
      });

    }, footerRef);

    return () => ctx.revert();

  }, []);

  return (
    <footer
      className="footer-section"
      ref={footerRef}
    >

      <div className="container">

        <div className="footer-wrapper">

          {/* TOP AREA */}
          <div
            className="row footer-top"
            ref={topContentRef}
          >

            {/* LEFT */}
            <div className="col-lg-6">

              <div className="footer-brand">

                <img
                  src={footerLogo}
                  alt="logo"
                  className="footer-logo"
                />

                <p className="footer-description">
                  CloudPi helps organizations gain visibility
                  into multi-cloud spending, optimize
                  infrastructure costs, and enforce governance
                  across AWS, Azure, and Google Cloud
                  environments.
                </p>

              </div>

            </div>

            {/* RIGHT */}
            <div className="col-lg-6">

              <div className="newsletter-box">

                <h4>
                  Subscribe to our newsletter
                  for the latest offers.
                </h4>

                <form className="newsletter-form">

                  <input
                    type="email"
                    placeholder="Enter your email"
                  />

                  <button type="submit">
                    Subscribe
                  </button>

                </form>

              </div>

            </div>

          </div>

          {/* LINKS */}
          <div className="row footer-links">

            {/* COLUMN 1 */}
            <div
              className="col-md-3"
              ref={(el) =>
                (linksRef.current[0] = el)
              }
            >

              <h5>PLATFORM</h5>

              <ul>

                <li>Platform Capabilities</li>
                <li>Integrations</li>
                <li>Workflow Automations</li>
                <li>Cloud Cost Analytics</li>
                <li>Governance</li>
                <li>Pricing</li>

              </ul>

            </div>

            {/* COLUMN 2 */}
            <div
              className="col-md-3"
              ref={(el) =>
                (linksRef.current[1] = el)
              }
            >

              <h5>COMPANY</h5>

              <ul>

                <li>About Us</li>
                <li>Features</li>
                <li>Contact Us</li>
                <li>Careers</li>
                <li>Security</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>

              </ul>

            </div>

            {/* COLUMN 3 */}
            <div
              className="col-md-3"
              ref={(el) =>
                (linksRef.current[2] = el)
              }
            >

              <h5>RESOURCES</h5>

              <ul>

                <li>User Guide</li>
                <li>Videos</li>
                <li>FAQ</li>
                <li>Case Studies</li>
                <li>Blog</li>

              </ul>

            </div>

            {/* COLUMN 4 */}
            <div
              className="col-md-3"
              ref={(el) =>
                (linksRef.current[3] = el)
              }
            >

              <h5>COMPARE</h5>

              <ul>

                <li>vs. Finout</li>
                <li>vs. CloudZero</li>
                <li>vs. Apptio Cloudability</li>
                <li>vs. PointFive</li>
                <li>vs. ProsperOps</li>
                <li>vs. Harness</li>

              </ul>

            </div>

          </div>

          {/* BOTTOM */}
          <div
            className="footer-bottom"
            ref={bottomRef}
          >

            <p>
              © 2026 CloudPi. All rights reserved.
            </p>

            <div className="footer-socials">

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <RiTwitterXLine />
              </a>

              <a href="#">
                <FaTelegramPlane />
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;