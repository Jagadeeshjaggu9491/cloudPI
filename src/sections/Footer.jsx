import { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import {
  RiTwitterXLine,
} from "react-icons/ri";

import {
  FaTelegramPlane,
} from "react-icons/fa";

import footerLogo from "../assets/logo-white.png";

import "../styles/Footer.css";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

  const footerRef = useRef(null);

  const topContentRef = useRef(null);

  const linksRef = useRef([]);

  const bottomRef = useRef(null);

  const handleFooterMouseMove = useCallback((event) => {
    const footer = footerRef.current;
    if (!footer) return;

    const rect = footer.getBoundingClientRect();
    footer.style.setProperty("--footer-glow-x", `${event.clientX - rect.left}px`);
    footer.style.setProperty("--footer-glow-y", `${event.clientY - rect.top}px`);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a single unified timeline for the footer
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%", // Safely triggers when footer enters the viewport
          toggleActions: "play none none none",
        },
      });

      // 1. Fade/slide in the overall footer background
      tl.from(footerRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.0,
        ease: "power3.out",
      });

      // 2. Stagger top content (brand description and newsletter form)
      if (topContentRef.current) {
        tl.from(topContentRef.current.children, {
          opacity: 0,
          y: 35,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
        }, "-=0.6");
      }

      // 3. Stagger the link columns
      const validLinks = linksRef.current.filter(Boolean);
      if (validLinks.length > 0) {
        tl.from(validLinks, {
          opacity: 0,
          y: 25,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
        }, "-=0.5");
      }

      // 4. Stagger the bottom copyright and social icons
      if (bottomRef.current) {
        tl.from(bottomRef.current.children, {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
        }, "-=0.5");
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      className="footer-section"
      ref={footerRef}
      onMouseMove={handleFooterMouseMove}
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

              <h5 className="gradient-text">PLATFORM</h5>

              <ul>

                <li>Platform Capabilities</li>
                <li>Integrations</li>
                <li>Intelligent Workflows</li>
                <li>Cloud Cost Analytics</li>
                <li>Policy Engine</li>
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

              <h5 className="gradient-text">COMPANY</h5>

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

              <h5 className="gradient-text">RESOURCES</h5>

              <ul>

                <li>User Guide</li>
                <li>Press Releases</li>
                <li>FAQ</li>
                <li>Case Studies</li>
                <li>Blog</li>
                <li>Events</li>
                <li>Webinars</li>

              </ul>

            </div>

            {/* COLUMN 4 */}
            <div
              className="col-md-3"
              ref={(el) =>
                (linksRef.current[3] = el)
              }
            >

              <h5 className="gradient-text">COMPARE</h5>

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

              <a href="https://www.instagram.com/cloudpi_ai/" target="_blank">
                <FaInstagram />
              </a>

              <a href="#">
                <RiTwitterXLine />
              </a>

              <a href="https://www.youtube.com/@cloudpiai" target="_blank">
                <FaYoutube />
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
