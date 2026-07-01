"use client";

import { useGSAP } from "@/lib/gsap";
import { gsap } from "@/lib/gsap";
import { useRef } from "react";
import { Cpu, Activity, GitBranch } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

export default function About() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".bento-item", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            More than just code. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">We build digital assets.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Bio Card - Spans 2 columns */}
          <SpotlightCard 
            className="md:col-span-2 p-8 transition-all duration-300 hover:-translate-y-1"
            spotlightColor="rgba(255, 255, 255, 0.08)"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">The Team</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We&apos;re a two-person team with a passion for building beautiful, functional, and scalable web applications &amp; e-commerce stores. 
              From full stack platforms to Shopify storefronts — we cover the entire digital spectrum.
            </p>
          </SpotlightCard>

          {/* Stats Card */}
          <SpotlightCard 
            className="p-8 flex flex-col justify-center items-center text-center group transition-all duration-300 hover:-translate-y-1"
            spotlightColor="rgba(255, 255, 255, 0.08)"
          >
            <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">3+</div>
            <p className="text-gray-400 font-medium">Years Experience</p>
          </SpotlightCard>

          {/* Tech Stack Card */}
          <SpotlightCard 
            className="p-8 group transition-all duration-300 hover:-translate-y-1"
            spotlightColor="rgba(59, 130, 246, 0.15)"
          >
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-500/20 group-hover:rotate-6 transition-all duration-300">
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Tech Stack</h3>
            <p className="text-gray-400">Next.js, WordPress & Shopify</p>
          </SpotlightCard>

          {/* Performance Card */}
          <SpotlightCard 
            className="p-8 group transition-all duration-300 hover:-translate-y-1"
            spotlightColor="rgba(168, 85, 247, 0.15)"
          >
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 text-purple-400 group-hover:text-purple-300 group-hover:bg-purple-500/20 group-hover:scale-105 transition-all duration-300">
              <Activity size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Performance</h3>
            <p className="text-gray-400">Fast, Mobile-First, SEO Friendly</p>
          </SpotlightCard>

          {/* Strategy Card */}
          <SpotlightCard 
            className="p-8 group transition-all duration-300 hover:-translate-y-1"
            spotlightColor="rgba(16, 185, 129, 0.15)"
          >
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 text-emerald-400 group-hover:text-emerald-300 group-hover:bg-emerald-500/20 group-hover:translate-x-1 transition-all duration-300">
              <GitBranch size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Strategy</h3>
            <p className="text-gray-400">Conversion-Focused Design</p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
