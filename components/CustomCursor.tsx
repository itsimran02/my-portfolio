"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Set initial position off-screen
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, x: -100, y: -100 });

    const xDotTo = gsap.quickTo(dot, "x", { duration: 0.05, ease: "power3.out" });
    const yDotTo = gsap.quickTo(dot, "y", { duration: 0.05, ease: "power3.out" });

    const xRingTo = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3.out" });
    const yRingTo = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3.out" });

    const moveCursor = (e: MouseEvent) => {
      xDotTo(e.clientX);
      yDotTo(e.clientY);
      xRingTo(e.clientX);
      yRingTo(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    const onMouseEnter = () => {
      gsap.to(dot, { scale: 0.5, duration: 0.2 });
      gsap.to(ring, { 
        scale: 1.5, 
        backgroundColor: "rgba(255, 255, 255, 0.08)", 
        borderColor: "rgba(255, 255, 255, 0.4)",
        duration: 0.2 
      });
    };

    const onMouseLeave = () => {
      gsap.to(dot, { scale: 1, duration: 0.2 });
      gsap.to(ring, { 
        scale: 1, 
        backgroundColor: "transparent", 
        borderColor: "rgba(255, 255, 255, 1)",
        duration: 0.2 
      });
    };

    const attachListeners = () => {
      const interactives = document.querySelectorAll(
        "a, button, select, input, textarea, [role='button'], .project-card, .service-item, .faq-item"
      );
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnter);
        el.addEventListener("mouseleave", onMouseLeave);
      });
    };

    attachListeners();

    // Watch for DOM changes to attach to dynamic elements
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
      
      const interactives = document.querySelectorAll(
        "a, button, select, input, textarea, [role='button'], .project-card, .service-item, .faq-item"
      );
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
