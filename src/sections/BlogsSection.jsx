// BlogsSection.jsx

import { useEffect, useRef } from "react";
import "../styles/BlogsSection.css";
import { FaArrowRight, FaRegFileAlt } from "react-icons/fa";
import blogs from "../data/blogs.json";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BlogsSection() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                    once: true,
                },
            })
                .from(".blogs-heading", {
                    opacity: 0,
                    y: 40,
                    duration: 0.8,
                    ease: "power3.out",
                    immediateRender: false,
                })
                .from(
                    cardsRef.current.filter(Boolean),
                    {
                        opacity: 0,
                        y: 30,
                        scale: 0.98,
                        stagger: 0.18,
                        duration: 0.7,
                        ease: "power3.out",
                        immediateRender: false,
                    },
                    "-=0.4"
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="blogs-section" ref={sectionRef}>
            <div className="container">
                {/* Heading */}
                <div className="blogs-heading text-center">
                    <div className="blogs-badge">
                        <FaRegFileAlt />
                        <span>Blogs</span>
                    </div>

                    <h2 className="gradient-text">
                        From the <span>CloudPi</span> Blog
                    </h2>
                </div>

                {/* Blog Cards */}
                <div className="row gy-4 justify-content-center">
                    {blogs.map((blog) => (
                        <div className="col-lg-4 col-md-6" key={blog.id}>
                            <a href={blog.url || "/"} className="blog-card">

                                {/* Image */}
                                <div className="blog-image">
                                    <img src={blog.image} alt={blog.title} />

                                    {/* Hover Button */}
                                    <div className="blog-hover-btn">
                                        <FaArrowRight />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="blog-content">

                                    <div className="blog-meta">
                                        <span>{blog.author}</span>

                                        <div className="divider"></div>

                                        <span>{blog.date}</span>
                                    </div>

                                    <h3>{blog.title}</h3>

                                    <div className="read-more">
                                        Read article
                                        <span className="greater-icon">›</span>
                                    </div>

                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}