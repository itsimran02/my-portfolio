"use client";

import { useGSAP } from "@/lib/gsap";
import { gsap } from "@/lib/gsap";
import { useRef } from "react";
import { ArrowUpRight, Layers, Globe, Terminal, ShoppingBag } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

const services = [
  {
    id: "01",
    title: "MERN Stack Development",
    description: "Scalable full-stack applications using MongoDB, Express, React, and Node.js.",
    icon: Layers,
    color: "rgba(59, 130, 246, 0.15)", // Blue glow
  },
  {
    id: "02",
    title: "WordPress Solutions",
    description: "Custom themes and plugins tailored to your specific business needs.",
    icon: Globe,
    color: "rgba(16, 185, 129, 0.15)", // Emerald/Green glow
  },
  {
    id: "03",
    title: "Next.js Web Apps",
    description: "High-performance, SEO-friendly web applications with modern architecture.",
    icon: Terminal,
    color: "rgba(139, 92, 246, 0.15)", // Purple glow
  },
  {
    id: "04",
    title: "Shopify Development",
    description: "Custom Shopify themes, headless storefronts, and e-commerce solutions that convert visitors into customers.",
    icon: ShoppingBag,
    color: "rgba(236, 72, 153, 0.15)", // Pink glow
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <section id="services" ref={containerRef} className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Services</h2>
          <div className="h-px w-full bg-white/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <SpotlightCard
              key={service.id}
              className="service-card p-8 md:p-10 group"
              spotlightColor={service.color}
            >
              <div className="flex flex-col h-full justify-between gap-8">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                    <service.icon size={24} />
                  </div>
                  <span className="text-sm font-mono text-gray-500">/{service.id}</span>
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-white/95 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-end mt-4">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:border-white/30 group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
