"use client";

import { useGSAP } from "@/lib/gsap";
import { gsap } from "@/lib/gsap";
import { useRef } from "react";

export default function Team() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      tl.from(".partner-content", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }).from(
        ".partner-image-container",
        {
          scale: 0.9,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      );

      // 3D Tilt Effect
      const imageContainer = document.querySelector(
        ".partner-image-container"
      ) as HTMLElement;

      if (imageContainer) {
        imageContainer.addEventListener("mousemove", (e) => {
          const { left, top, width, height } =
            imageContainer.getBoundingClientRect();
          const x = (e.clientX - left) / width - 0.5;
          const y = (e.clientY - top) / height - 0.5;

          gsap.to(imageContainer, {
            rotationY: x * 20,
            rotationX: -y * 20,
            transformPerspective: 1000,
            ease: "power2.out",
            duration: 0.5,
          });
        });

        imageContainer.addEventListener("mouseleave", () => {
          gsap.to(imageContainer, {
            rotationY: 0,
            rotationX: 0,
            ease: "power2.out",
            duration: 0.5,
          });
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section id="team" ref={containerRef} className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="partner-image-container relative aspect-[4/5] md:aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden group cursor-none">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110"
                style={{ backgroundImage: 'url("/assets/partner.png")' }}
                role="img"
                aria-label="Manish Profile Photo"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Glare Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
            </div>

            {/* Content Column */}
            <div className="partner-content">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Meet My Partner, <span className="text-zinc-200">Manish.</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                A Senior Shopify Developer with 3+ years of deep e-commerce expertise.
                From custom Liquid themes to headless storefronts — he builds stores
                that convert.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Together, we cover full stack development and e-commerce end to end —
                so clients get the complete package without juggling multiple
                freelancers.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                  Shopify Expert
                </div>
                <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                  E-Commerce Strategist
                </div>
                <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                  Liquid & Custom Themes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
