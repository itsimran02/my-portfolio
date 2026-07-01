"use client";

import { useGSAP } from "@/lib/gsap";
import { gsap } from "@/lib/gsap";
import { useRef, useState, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Sahara Turf",
    category: "Full Stack Platform",
    description:
      "A high-performance online booking platform for sports turfs, featuring real-time availability slots, automated hold expirations, and secure payment integrations.",
    year: "2026",
    link: "https://saharaturf.com",
    image: "/assets/turf-img.png",
    tech: ["Next.js", "Supabase", "Razorpay"],
    accent: "emerald",
  },
  {
    title: "Hoppa Sweden",
    category: "Shopify Store",
    description:
      "A premium Shopify storefront for Hoppa Sweden's lightweight, breathable clogs. Clean product catalog, seamless checkout, and mobile-first design built for conversions.",
    year: "2026",
    link: "https://hoppa.co.in/",
    image: "/assets/hopppa.png",
    tech: ["Shopify", "Liquid", "Custom Theme"],
    accent: "blue",
  },
  {
    title: "Nirmalaya",
    category: "Shopify Store",
    description:
      "An elegant Shopify store for Nirmalaya's eco-friendly fragrance and incense products made from recycled flowers. Sustainable, charcoal-free, and crafted for a premium brand experience.",
    year: "2026",
    link: "https://nirmalaya.com/",
    image: "/assets/nirmalaya.png",
    tech: ["Shopify", "Liquid", "Custom Theme"],
    accent: "amber",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const accentColors: Record<string, string> = {
    emerald: "rgba(16, 185, 129, 0.15)",
    blue: "rgba(59, 130, 246, 0.15)",
    amber: "rgba(245, 158, 11, 0.15)",
  };

  return (
    <Link href={project.link} target="_blank" className="project-card group block">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative rounded-3xl overflow-hidden bg-white/[0.03] border border-white/[0.06] transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.12]"
      >
        {/* Cursor-following spotlight glow */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-500"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, ${accentColors[project.accent]}, transparent 40%)`,
          }}
        />

        <div className="relative">
          {/* Top bar — number + category + year */}
          <div className="flex items-center justify-between px-8 pt-7 pb-4 relative z-10">
            <div className="flex items-center gap-4">
              <span className="text-5xl md:text-6xl font-bold text-white/[0.06] leading-none select-none">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col">
                <span className="text-xs font-medium tracking-wider uppercase text-gray-500">
                  {project.category}
                </span>
              </div>
            </div>
            <span className="text-xs font-mono text-gray-600">
              {project.year}
            </span>
          </div>

          {/* Image */}
          <div className="relative mx-5 md:mx-8 rounded-2xl overflow-hidden aspect-[16/8] md:aspect-[16/7]">
            <div className="project-img absolute inset-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
            {/* Soft vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
          </div>

          {/* Bottom content */}
          <div className="px-8 pt-6 pb-7 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-500 group-hover:border-white/30 group-hover:bg-white group-hover:text-black transition-all duration-300 flex-shrink-0">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
                <p className="text-gray-500 leading-relaxed text-sm md:text-[15px] max-w-2xl">
                  {project.description}
                </p>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 md:flex-shrink-0 md:pb-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] font-medium text-gray-400 uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Projects() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Set initial state
      gsap.set(".project-card", { y: 60, opacity: 0 });

      const cards = gsap.utils.toArray<HTMLElement>(".project-card");

      cards.forEach((card) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        });

        // Parallax on the image
        const img = card.querySelector(".project-img") as HTMLElement;
        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -5 },
            {
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
              yPercent: 5,
            }
          );
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="projects" ref={containerRef} className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-20 flex items-end justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Selected Work
            </h2>
            <p className="text-gray-500 text-lg max-w-lg">
              Recent projects across full stack platforms and Shopify storefronts.
            </p>
          </div>
          <span className="text-sm font-mono text-gray-600 hidden md:block">
            2024 — 2026
          </span>
        </div>

        {/* Separator */}
        <div className="h-px w-full bg-white/[0.06] mb-12" />

        {/* Project Cards */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
