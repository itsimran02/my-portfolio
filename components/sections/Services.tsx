"use client";

import { useGSAP } from "@/lib/gsap";
import { gsap } from "@/lib/gsap";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "AI-Enhanced Development",
    description: "Using AI code assistants to build robust applications 50% faster than traditional methods.",
  },
  {
    id: "02",
    title: "Next.js Web Apps",
    description: "Scalable, high-performance web applications built with modern, AI-optimized workflows.",
  },
  {
    id: "03",
    title: "Automated Systems",
    description: "Integrating AI agents to automate your business processes and customer interactions.",
  },
  {
    id: "04",
    title: "Rapid Prototyping",
    description: "From concept to functional MVP in days, not months, using generative design tools.",
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".service-item", {
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
    <section id="services" ref={containerRef} className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Services</h2>
          <div className="h-px w-full bg-white/10" />
        </div>

        <div className="flex flex-col">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-item group relative border-b border-white/10 py-12 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-4">
                <div className="flex items-baseline gap-8">
                  <span className="text-sm font-mono text-gray-500">/{service.id}</span>
                  <h3 className="text-3xl md:text-5xl font-bold text-gray-400 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-10 group-hover:translate-x-0">
                  <p className="text-sm text-gray-400 max-w-xs hidden md:block">
                    {service.description}
                  </p>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
