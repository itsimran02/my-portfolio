"use client";

import { useGSAP } from "@/lib/gsap";
import { gsap } from "@/lib/gsap";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Strategic Planning",
    description:
      "We analyze your market and define the most efficient path to success.",
  },
  {
    number: "02",
    title: "Rapid Prototyping",
    description:
      "Exploring multiple design directions quickly to find the perfect fit.",
  },
  {
    number: "03",
    title: "Efficient Development",
    description:
      "Using modern tools and AI copilots to write clean code at unprecedented speeds.",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description:
      "Deploying on auto-scaling infrastructure that grows with your business effortlessly.",
  },
];

export default function Process() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(".process-step", { y: 40, opacity: 0 });

      gsap.to(".process-step", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Animate the connecting line
      gsap.set(".process-line", { scaleY: 0 });

      gsap.to(".process-line", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 50%",
          scrub: 1,
        },
        scaleY: 1,
        ease: "none",
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="process" ref={containerRef} className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Work</h2>
          <div className="h-px w-full bg-white/10" />
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Vertical connecting line (desktop) */}
          <div className="hidden md:block absolute left-[calc(50%-0.5px)] top-0 bottom-0 w-px">
            <div className="process-line h-full w-full bg-gradient-to-b from-blue-500/40 via-cyan-500/30 to-transparent origin-top" />
          </div>

          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="process-step relative"
                >
                  <div
                    className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                      isEven ? "" : "md:direction-rtl"
                    }`}
                  >
                    {/* Content side */}
                    <div
                      className={`${
                        isEven
                          ? "md:text-right md:pr-16"
                          : "md:text-left md:pl-16 md:order-2"
                      }`}
                    >
                      <span className="text-7xl md:text-8xl font-bold text-white/[0.04] leading-none select-none block mb-4">
                        {step.number}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-lg max-w-md inline-block">
                        {step.description}
                      </p>
                    </div>

                    {/* Dot + empty side */}
                    <div
                      className={`hidden md:flex items-center ${
                        isEven ? "justify-start md:pl-16" : "justify-end md:pr-16 md:order-1"
                      }`}
                    >
                      <div className="relative">
                        {/* Glow ring */}
                        <div className="absolute inset-0 w-4 h-4 rounded-full bg-blue-500/20 animate-ping" />
                        {/* Dot */}
                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-[#0a0a0a] relative z-10" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
