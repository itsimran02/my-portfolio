"use client";

import { useGSAP } from "@/lib/gsap";
import { gsap } from "@/lib/gsap";
import { useRef } from "react";

export default function Profile() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
    });

    tl.from(".profile-content", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
    .from(".profile-image-container", {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.5");

    // 3D Tilt Effect
    const imageContainer = document.querySelector(".profile-image-container") as HTMLElement;
    
    if (imageContainer) {
      imageContainer.addEventListener("mousemove", (e) => {
        const { left, top, width, height } = imageContainer.getBoundingClientRect();
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

  }, { scope: containerRef });

  return (
    <section id="profile" ref={containerRef} className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="profile-image-container relative aspect-[4/5] md:aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden group cursor-none">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110"
                style={{ backgroundImage: 'url("/assets/profile.png")' }}
                role="img"
                aria-label="Imran Profile Photo"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Glare Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
            </div>

            {/* Content Column */}
            <div className="profile-content">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Hi, I&apos;m <span className="text-zinc-200">Imran.</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                I&apos;m a digital craftsman based in the cloud. With a background in both design and engineering, 
                I bridge the gap between aesthetics and functionality.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                My philosophy is simple: **Make it beautiful, make it fast, make it work.** 
                I leverage **AI agents and LLMs** to multiply my output, allowing me to deliver 
                enterprise-grade solutions at a fraction of the traditional time and cost.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                  AI-Native Developer
                </div>
                <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                  Creative Technologist
                </div>
                <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                  Full Stack Developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
