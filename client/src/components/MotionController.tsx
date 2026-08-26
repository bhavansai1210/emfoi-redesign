import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function MotionController() {
  useEffect(() => {
    // Initialize AOS with civic precision settings
    AOS.init({
      duration: 800,
      easing: "ease-out-quart",
      once: true,
      offset: 50,
      delay: 50,
    });

    // Set GSAP global defaults
    gsap.defaults({
      ease: "power3.out",
      duration: 0.8,
    });
  }, []);

  return null;
}
