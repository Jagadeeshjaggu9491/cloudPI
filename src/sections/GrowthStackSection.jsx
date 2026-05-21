// GrowthStackSection.jsx

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiPieChart,
  FiBarChart2,
  FiCheckSquare,
} from "react-icons/fi";

import "../styles/GrowthStackSection.css";

gsap.registerPlugin(ScrollTrigger);

const tabs = [
  {
    id: 1,
    title: "Cost Breakdown",
    icon: <FiPieChart />,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Reports & Insights",
    icon: <FiBarChart2 />,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Task Management",
    icon: <FiCheckSquare />,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
  },
];

const GrowthStackSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* SECTION ENTRANCE */

      gsap.from(".growth-badge", {
        y: -20,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(".growth-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      });

      gsap.from(".growth-description", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
      });

      gsap.from(".tab-button", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        delay: 0.5,
      });

      gsap.from(".dashboard-wrapper", {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      /* CONTINUOUS BACKGROUND SLIDE */

      gsap.fromTo(
        ".animated-bg",
        {
          backgroundPosition: "600px 0px",
        },
        {
          backgroundPosition: "-600px 0px",
          duration: 15,
          repeat: -1,
          ease: "linear",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* IMAGE CHANGE ANIMATION */

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        y: 30,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, [activeTab]);

  return (
    <section className="growth-stack-section" ref={sectionRef}>
      <div className="container">
        {/* TOP CONTENT */}

        <div className="text-center growth-top-content">
          <div className="growth-badge">
            <span>Growth Engine by Qarin</span>
          </div>

          <h2 className="growth-title">AI-Powered growth stack</h2>

          <p className="growth-description">
            Qarin brings intelligence, automation, and customer management
            together giving your team everything to close deals faster and
            grow smarter.
          </p>
        </div>

        {/* DASHBOARD AREA */}

        <div className="dashboard-container animated-bg">
          {/* TAB BUTTONS */}

          <div className="tabs-wrapper">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`tab-button ${
                  activeTab === index ? "active" : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.icon}
                <span>{tab.title}</span>
              </button>
            ))}
          </div>

          {/* DASHBOARD IMAGE */}

          <div className="dashboard-wrapper">
            <img
              ref={imageRef}
              src={tabs[activeTab].image}
              alt="dashboard"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthStackSection;