"use client";

import { useGSAP } from "@/lib/gsap";
import { gsap } from "@/lib/gsap";
import { useRef } from "react";
import { Code2, ShoppingBag } from "lucide-react";

const duo = [
  {
    name: "Imran",
    role: "Full Stack Developer",
    image: "/assets/profile.png",
    bio: "MERN Stack, Next.js & WordPress specialist. Bridges design and engineering to build scalable platforms powered by AI.",
    tags: ["React / Next.js", "Node.js", "WordPress"],
    gradient: "from-blue-500 to-cyan-400",
    icon: Code2,
  },
  {
    name: "Manish",
    role: "Senior Shopify Developer",
    image: "/assets/partner.png",
    bio: "3+ years of deep Shopify expertise. From custom Liquid themes to headless storefronts — builds stores that convert.",
    tags: ["Shopify", "Liquid", "Custom Themes"],
    gradient: "from-emerald-500 to-teal-400",
    icon: ShoppingBag,
  },
];

export default function Profile() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Section heading
      gsap.set(".duo-heading", { y: 40, opacity: 0 });
      gsap.to(".duo-heading", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      });

      // Cards stagger in
      gsap.set(".duo-card", { y: 60, opacity: 0 });
      gsap.to(".duo-card", {
        scrollTrigger: {
          trigger: ".duo-grid",
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Bottom text
      gsap.set(".duo-footer", { y: 30, opacity: 0 });
      gsap.to(".duo-footer", {
        scrollTrigger: {
          trigger: ".duo-footer",
          start: "top 90%",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      });

      // 3D Tilt on images
      const images = document.querySelectorAll(
        ".duo-img"
      ) as NodeListOf<HTMLElement>;

      images.forEach((img) => {
        img.addEventListener("mousemove", (e) => {
          const { left, top, width, height } = img.getBoundingClientRect();
          const x = (e.clientX - left) / width - 0.5;
          const y = (e.clientY - top) / height - 0.5;

          gsap.to(img, {
            rotationY: x * 15,
            rotationX: -y * 15,
            transformPerspective: 1000,
            ease: "power2.out",
            duration: 0.4,
          });
        });

        img.addEventListener("mouseleave", () => {
          gsap.to(img, {
            rotationY: 0,
            rotationX: 0,
            ease: "power2.out",
            duration: 0.4,
          });
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="profile" ref={containerRef} className="py-32 relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="duo-heading text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-medium tracking-wider uppercase text-gray-400">
              The Duo
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Who&apos;s Behind <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              the Code
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            Two developers. One mission. We combine full stack engineering with
            Shopify expertise to deliver the complete package.
          </p>
        </div>

        {/* Duo Cards */}
        <div className="duo-grid grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {duo.map((person, i) => (
            <div key={person.name} className="duo-card">
              <div className="relative rounded-3xl overflow-hidden bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 h-full">
                {/* Image */}
                <div className="duo-img relative aspect-[4/3] overflow-hidden group cursor-none">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110"
                    style={{ backgroundImage: `url("${person.image}")` }}
                    role="img"
                    aria-label={`${person.name} — ${person.role}`}
                  />
                  {/* Bottom fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />

                  {/* Role badge */}
                  <div className="absolute top-5 left-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                      <person.icon size={13} className="text-white/70" />
                      <span className="text-[11px] font-medium text-white/70 tracking-wider uppercase">
                        {person.role}
                      </span>
                    </div>
                  </div>

                  {/* Glare */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
                </div>

                {/* Content */}
                <div className="p-7 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {person.name}
                  </h3>
                  <p
                    className={`text-transparent bg-clip-text bg-gradient-to-r ${person.gradient} font-semibold text-xs tracking-wider uppercase mb-5`}
                  >
                    {person.role}
                  </p>

                  <p className="text-gray-400 leading-relaxed text-[15px] mb-6">
                    {person.bio}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {person.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] font-medium text-gray-400 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="duo-footer mt-14 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.06]">
            <Code2 size={16} className="text-blue-400" />
            <span className="text-sm text-gray-500">
              Full Stack Engineering
            </span>
            <span className="text-gray-600">×</span>
            <span className="text-sm text-gray-500">
              Shopify Expertise
            </span>
            <ShoppingBag size={16} className="text-emerald-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
