"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function Preloader() {
  const [counter, setCounter] = useState(0);
  const containerRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Counter Animation
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 20);

    // Reveal Animation
    if (counter === 100) {
      tl.to(counterRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
      })
      .to(containerRef.current, {
        y: "-100%",
        duration: 1.2,
        ease: "power4.inOut",
      });
    }

    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center text-white"
    >
      <div ref={counterRef} className="text-9xl font-bold font-mono tracking-tighter">
        {counter}%
      </div>
    </div>
  );
}
