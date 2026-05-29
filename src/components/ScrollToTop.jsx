import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Instantaneously scroll window to the top-left corner
        window.scrollTo(0, 0);

        // Allow DOM content rendering/paint to complete, then refresh ScrollTrigger offsets
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
