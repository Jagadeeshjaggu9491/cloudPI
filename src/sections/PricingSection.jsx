// PricingSection.jsx

import { useEffect, useRef, useState } from "react";
import "../styles/PricingSection.css";
import AnimatedHeading from "../components/AnimatedHeading";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCheck, FaRegCreditCard } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function PricingSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const [yearly, setYearly] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPlan(null);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // In a real app, submit form data to the server here.
    console.log("Plan inquiry submitted:", selectedPlan?.name, formData);
    closeModal();
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      timeline
        .from(sectionRef.current, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
          immediateRender: false,
        })
        .from(
          [".pricing-badge", ".pricing-title", ".pricing-toggle"],
          {
            opacity: 0,
            y: 20,
            stagger: 0.12,
            duration: 0.6,
            ease: "power3.out",
            immediateRender: false,
          },
          "-=0.4"
        )
        .from(
          cardsRef.current.filter(Boolean),
          {
            opacity: 0,
            y: 30,
            scale: 0.98,
            stagger: 0.15,
            duration: 0.6,
            ease: "power3.out",
            immediateRender: false,
          },
          "-=0.25"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const plans = [
    {
      name: "Starter",
      monthly: 10.99,
      yearly: 8.79,
      users: "Up to 10 users",
      tasks: "5 Tasks & Projects",
      dark: false,
    },
    {
      name: "Growth",
      monthly: 19.99,
      yearly: 15.99,
      users: "Up to 20 users",
      tasks: "20 Tasks & Projects",
      dark: true,
      popular: true,
    },
    {
      name: "Professional",
      monthly: 49.99,
      yearly: 39.99,
      users: "Unlimited users",
      tasks: "Unlimited Tasks & Projects",
      dark: false,
    },
  ];

  return (
    <section className="pricing-section" ref={sectionRef}>
      <div className="container">
        {/* Heading */}
        <div className="text-center">
          <div className="pricing-badge">
            <FaRegCreditCard />
            <span>Pricing</span>
          </div>

          <AnimatedHeading
            text="Simple plans. Smarter growth."
            className="pricing-title"
          />

          {/* Toggle */}
          <div className="pricing-toggle">
            <button
              className={!yearly ? "active" : ""}
              onClick={() => setYearly(false)}
            >
              Pay Monthly
            </button>

            <button
              className={yearly ? "active" : ""}
              onClick={() => setYearly(true)}
            >
              Pay Yearly <span>(-20%)</span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="row justify-content-center gy-4 pricing-row">
          {plans.map((plan, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                ref={(el) => (cardsRef.current[index] = el)}
                className={`pricing-card ${plan.dark ? "dark-card" : ""
                  }`}
              >
                {plan.popular && (
                  <div className="popular-badge">
                    Most Popular
                  </div>
                )}

                <h4>{plan.name}</h4>

                <div className="price-wrap">
                  <h2 className="gradient-text" >
                    $
                    {yearly
                      ? plan.yearly.toFixed(2)
                      : plan.monthly.toFixed(2)}
                  </h2>

                  <span>/ billed monthly</span>
                </div>

                <p className="plan-desc">
                  Our plan is designed for teams ready to scale.
                </p>

                <button className="plan-btn" onClick={() => openModal(plan)}>
                  Select Plan
                </button>

                <ul className="feature-list">
                  <li>
                    <FaCheck />
                    {plan.users}
                  </li>

                  <li>
                    <FaCheck />
                    {plan.tasks}
                  </li>

                  <li>
                    <FaCheck />
                    Task and project tracking
                  </li>

                  <li>
                    <FaCheck />
                    Basic Task Board & Calendar View
                  </li>

                  <li>
                    <FaCheck />
                    Real-Time Notifications
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="pricing-modal-overlay" onClick={closeModal}>
          <div className="pricing-modal" onClick={(event) => event.stopPropagation()}>
            <button className="pricing-modal-close" onClick={closeModal}>
              ×
            </button>

            <div className="pricing-modal-header">
              <h3>{selectedPlan?.name || "Plan"} Inquiry</h3>
              <p>Share your details and we’ll reach out to help you get started.</p>
            </div>

            <form className="pricing-modal-form" onSubmit={handleSubmit}>
              <label>
                Your Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you need"
                  required
                />
              </label>

              <button type="submit">Send Inquiry</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
