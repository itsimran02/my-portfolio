"use client";

import { useGSAP } from "@/lib/gsap";
import { gsap } from "@/lib/gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "AI-Powered Strategy",
    description: "We use data-driven AI tools to analyze your market and define the most efficient path to success.",
  },
  {
    number: "02",
    title: "Generative Design",
    description: "Rapid iteration using generative AI to explore multiple design directions in record time.",
  },
  {
    number: "03",
    title: "Accelerated Dev",
    description: "Coding with AI copilots to write clean, bug-free code at unprecedented speeds.",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description: "Deploying on auto-scaling infrastructure that grows with your business effortlessly.",
  },
];

export default function Process() {
  const containerRef = useRef(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sliderRef.current) return;

    const totalWidth = sliderRef.current.scrollWidth;
    const windowWidth = window.innerWidth;
    const scrollAmount = totalWidth - windowWidth + 100; // Add some padding

    gsap.to(sliderRef.current, {
      x: -scrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${scrollAmount}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section id="process" ref={containerRef} className="relative h-screen overflow-hidden bg-black">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full pl-20">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">How I Work</h2>
          <p className="text-gray-400 max-w-xl text-lg">
            A transparent, collaborative process designed to deliver exceptional results.
          </p>
        </div>

        <div ref={sliderRef} className="flex gap-12 w-max">
          {steps.map((step, index) => (
            <div key={index} className="w-[400px] md:w-[500px] glass-card p-10 rounded-3xl border border-white/10 flex flex-col justify-between shrink-0 hover:bg-white/5 transition-colors duration-300">
              <div>
                <div className="text-6xl font-bold text-white/10 mb-8">{step.number}</div>
                <h3 className="text-3xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
          {/* Spacer for end of scroll */}
          <div className="w-[20vw]" /> 
        </div>
      </div>
    </section>
  );
}
