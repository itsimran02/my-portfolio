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
      // Ensure initial state is set before animating
      gsap.set(textRef.current.children, { y: 50, opacity: 0 });
      
      tl.to(textRef.current.children, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        delay: 0.5,
      });
    }
  }, { scope: containerRef });

  return (
    <section id="hero" ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Scene />
      
      {/* Aurora Background (Fallback/Overlay) */}
      <div className="aurora-bg z-0 opacity-50">
        <div className="aurora-blob top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-500/30 blur-[100px]" />
        <div className="aurora-blob top-[10%] right-[20%] w-[400px] h-[400px] bg-cyan-500/30 blur-[100px] animation-delay-2000" />
        <div className="aurora-blob bottom-[-10%] left-[40%] w-[600px] h-[600px] bg-cyan-500/20 blur-[120px] animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center pointer-events-none">
        <div ref={textRef} className="max-w-5xl mx-auto flex flex-col items-center pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Available for new projects</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 tracking-tight mix-blend-overlay text-white">
            <TextScramble duration={1500}>Crafting digital</TextScramble> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">experiences</span> that matter.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
            I build premium digital experiences at <span className="text-white font-semibold">AI speed</span>. 
            Leveraging next-gen tools to reduce costs and delivery times without compromising quality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Magnetic>
              <Link
                href="#contact"
                className="relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden group flex items-center justify-center min-w-[160px]"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Start a Project</span>
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
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
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-10">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-1 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
