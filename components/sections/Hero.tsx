"use client";

import { useGSAP } from "@/lib/gsap";
import { gsap } from "@/lib/gsap";
import Link from "next/link";
import { useRef } from "react";

import Scene from "@/components/Scene";
import Magnetic from "@/components/Magnetic";
import TextScramble from "@/components/TextScramble";

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (textRef.current) {
      gsap.set(textRef.current.children, { y: 40, opacity: 0 });

      tl.to(textRef.current.children, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        delay: 0.3,
      });
    }
  }, { scope: containerRef });

  return (
    <section id="hero" ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <Scene />

      <div className="aurora-bg z-0 opacity-50">
        <div className="aurora-blob top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-500/30 blur-[100px]" />
        <div className="aurora-blob top-[10%] right-[20%] w-[400px] h-[400px] bg-cyan-500/30 blur-[100px] animation-delay-2000" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center pointer-events-none">
        <div ref={textRef} className="max-w-4xl mx-auto flex flex-col items-center pointer-events-auto">

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-[1.05] mb-8 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-400">
              <TextScramble duration={1500}>We Build.</TextScramble>
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              You Scale.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-lg leading-relaxed">
            Full stack platforms & Shopify stores built to convert, designed to last.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Magnetic>
              <Link
                href="#contact"
                className="relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden group flex items-center justify-center min-w-[160px]"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Start a Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </Link>
            </Magnetic>

            <Magnetic>
              <Link
                href="#projects"
                className="relative px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold rounded-full overflow-hidden group flex items-center justify-center min-w-[160px]"
              >
                <span className="relative z-10">View Work</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30 z-10">
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-0.5 h-1.5 bg-white/40 rounded-full" />
        </div>
      </div>
    </section>
  );
}
