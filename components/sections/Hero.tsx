"use client";

import { useGSAP } from "@/lib/gsap";
import { gsap } from "@/lib/gsap";
import Link from "next/link";
import { useRef, MouseEvent, useState } from "react";
import Scene from "@/components/Scene";
import Magnetic from "@/components/Magnetic";
import TextScramble from "@/components/TextScramble";
import { Code2, ShoppingBag, Activity, Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const leftWidgetRef = useRef<HTMLDivElement>(null);
  const rightWidgetRef = useRef<HTMLDivElement>(null);

  // Mouse movement parallax for widgets
  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - width / 2) / (width / 2); // -1 to 1
    const y = (e.clientY - height / 2) / (height / 2); // -1 to 1

    if (leftWidgetRef.current) {
      gsap.to(leftWidgetRef.current, {
        x: x * -25,
        y: y * -25,
        rotationX: y * -10,
        rotationY: x * 10,
        duration: 0.8,
        ease: "power2.out",
      });
    }

    if (rightWidgetRef.current) {
      gsap.to(rightWidgetRef.current, {
        x: x * 25,
        y: y * 25,
        rotationX: y * 10,
        rotationY: x * -10,
        duration: 0.8,
        ease: "power2.out",
      });
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (textRef.current) {
      gsap.set(textRef.current.children, { y: 40, opacity: 0 });
      tl.to(textRef.current.children, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        delay: 0.2,
      });
    }

    // Fade in widgets
    gsap.set([leftWidgetRef.current, rightWidgetRef.current], { opacity: 0, scale: 0.9 });
    gsap.to([leftWidgetRef.current, rightWidgetRef.current], {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      delay: 0.6,
      ease: "power4.out",
    });
  }, { scope: containerRef });

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
      style={{ perspective: 1000 }}
    >
      {/* 3D Background */}
      <Scene />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Aurora Background (Fallback/Overlay) */}
      <div className="aurora-bg z-0 opacity-50">
        <div className="aurora-blob top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-500/20 blur-[120px]" />
        <div className="aurora-blob bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] animation-delay-2000" />
      </div>

      {/* Interactive Floating Widgets (Desktop Only) */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden">
        {/* Left Widget: Next.js Platform Info */}
        <div
          ref={leftWidgetRef}
          className="absolute left-[8%] top-[30%] w-72 glass-card p-5 rounded-2xl border border-white/10 shadow-2xl flex flex-col gap-3 pointer-events-auto transform transition-shadow hover:shadow-blue-500/10 hover:border-white/20 duration-300"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Code2 size={16} />
              </div>
              <span className="text-xs font-semibold text-white/90">Web Platform</span>
            </div>
            <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">Next.js</span>
          </div>
          <div className="h-[1px] w-full bg-white/5" />
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Core Vitals</span>
            <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
              <Activity size={12} /> 100% Score
            </span>
          </div>
        </div>

        {/* Right Widget: Shopify Conversion */}
        <div
          ref={rightWidgetRef}
          className="absolute right-[8%] bottom-[28%] w-72 glass-card p-5 rounded-2xl border border-white/10 shadow-2xl flex flex-col gap-3 pointer-events-auto transform transition-shadow hover:shadow-emerald-500/10 hover:border-white/20 duration-300"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <ShoppingBag size={16} />
              </div>
              <span className="text-xs font-semibold text-white/90">E-Commerce Store</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Shopify</span>
          </div>
          <div className="h-[1px] w-full bg-white/5" />
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Conversions</span>
            <span className="text-xs font-bold text-white flex items-center gap-1">
              <Sparkles size={12} className="text-amber-400 animate-pulse" /> Optimized
            </span>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10 text-center pointer-events-none">
        <div ref={textRef} className="max-w-4xl mx-auto flex flex-col items-center pointer-events-auto">
          
          {/* Subtle Tagline */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-sm mb-6 text-xs text-gray-500 font-mono tracking-wide uppercase">
            <span>Next.js</span>
            <span className="text-gray-700">·</span>
            <span>Shopify Expert Duo</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold leading-[1.05] mb-8 tracking-tight select-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60">
              <TextScramble duration={1500}>We Build.</TextScramble>
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              You Scale.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-lg leading-relaxed font-normal">
            High-performance full stack platforms and optimized Shopify stores designed to drive real growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Magnetic>
              <Link
                href="#contact"
                className="relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden group flex items-center justify-center min-w-[160px] text-sm tracking-wide"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-1">
                  Start a Project <ArrowRight size={14} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </Link>
            </Magnetic>

            <Magnetic>
              <Link
                href="#projects"
                className="relative px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold rounded-full overflow-hidden group flex items-center justify-center min-w-[160px] text-sm tracking-wide"
              >
                <span className="relative z-10">View Work</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30 z-10">
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-0.5 h-1.5 bg-white/40 rounded-full" />
        </div>
      </div>
    </section>
  );
}
