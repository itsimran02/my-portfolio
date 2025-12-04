"use client";

import { useGSAP } from "@/lib/gsap";
import { gsap } from "@/lib/gsap";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "YumLabs",
    category: "Modern Business Website",
    description: "A comprehensive food delivery application featuring real-time tracking, restaurant management, and seamless payments.",
    color: "from-orange-600 to-red-600",
    year: "2024",
    link: "https://yumlabs.vercel.app/",
    image: "/assets/yumlabs.png"
  },
  {
    title: "MERN E-Commerce",
    category: "Full Stack Shop",
    description: "A scalable e-commerce solution built with the MERN stack, featuring user authentication, cart management, and admin dashboard.",
    color: "from-blue-600 to-cyan-600",
    year: "2024",
    link: "https://mern-ecom-38x1.vercel.app/shop/home",
    image: "/assets/ecom.png"
  },
  {
    title: "Renovation Business",
    category: "Business Website",
    description: "A modern, high-converting website for a renovation business, featuring portfolio showcases and service details.",
    color: "from-emerald-600 to-teal-600",
    year: "2024",
    link: "#",
    image: "/assets/renovation.png"
  },
  {
    title: "Sleek Landing Page",
    category: "Creative Web Design",
    description: "A visually stunning landing page with advanced animations, smooth scrolling, and interactive elements.",
    color: "from-purple-600 to-pink-600",
    year: "2024",
    link: "#",
    image: "/assets/modern-landing-page.png"
  },
];

export default function Projects() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".project-card");
    
    cards.forEach((card) => {
      gsap.from(card as HTMLElement, {
        scrollTrigger: {
          trigger: card as HTMLElement,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
        scale: 0.9,
        opacity: 0.5,
      });
    });
  }, { scope: containerRef });

  return (
    <section id="projects" ref={containerRef} className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 flex items-end justify-between">
          <h2 className="text-4xl md:text-5xl font-bold">Selected Work</h2>
          <span className="text-sm font-mono text-gray-500 hidden md:block">2022 - 2024</span>
        </div>

        <div className="flex flex-col gap-20">
          {projects.map((project, index) => (
            <div key={index} className="project-card group grid md:grid-cols-2 gap-12 items-center sticky top-32 bg-black/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
              {/* Image Placeholder */}
              <div className={`aspect-video w-full rounded-2xl bg-gradient-to-br ${project.color} relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}>
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-medium text-gray-300">
                    {project.category}
                  </span>
                  <span className="font-mono text-sm text-gray-500">{project.year}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <Link href={project.link} target="_blank" className="inline-flex items-center gap-2 text-white font-medium hover:gap-4 transition-all group/link">
                  View Project <ArrowUpRight size={20} className="group-hover/link:text-zinc-200 transition-colors" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
