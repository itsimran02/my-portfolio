"use client";

import { useGSAP } from "@/lib/gsap";
import { gsap } from "@/lib/gsap";
import { useRef } from "react";
import { 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Settings, 
  Terminal, 
  Globe, 
  Cpu, 
  Layers 
} from "lucide-react";

const skills = [
  { name: "React", category: "Frontend", icon: <Code2 size={20} /> },
  { name: "Next.js", category: "Frontend", icon: <Globe size={20} /> },
  { name: "TypeScript", category: "Language", icon: <Terminal size={20} /> },
  { name: "Tailwind CSS", category: "Frontend", icon: <Layout size={20} /> },
  { name: "Node.js", category: "Backend", icon: <Server size={20} /> },
  { name: "Express", category: "Backend", icon: <Settings size={20} /> },
  { name: "MongoDB", category: "Database", icon: <Database size={20} /> },
  { name: "Redux", category: "State", icon: <Layers size={20} /> },
  { name: "Zod", category: "Validation", icon: <Cpu size={20} /> },
  { name: "Docker", category: "DevOps", icon: <Settings size={20} /> },
  { name: "Git & GitHub", category: "Version Control", icon: <Terminal size={20} /> },
  { name: "Vite", category: "Build Tool", icon: <Settings size={20} /> },
  { name: "Postman", category: "Testing", icon: <Terminal size={20} /> },
];

export default function Skills() {
  const containerRef = useRef(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Initial fade in
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    // Marquee Animation
    const marquee = marqueeRef.current;
    if (marquee) {
      const content = marquee.querySelector(".marquee-content");
      if (content) {
        // Clone content for seamless loop
        const clone = content.cloneNode(true);
        marquee.appendChild(clone);

        gsap.to(marquee.children, {
          xPercent: -100,
          repeat: -1,
          duration: 30,
          ease: "linear",
        });
      }
    }
  }, { scope: containerRef });

  return (
    <section id="skills" ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 mb-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Tech Stack</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A curated set of powerful technologies I use to build scalable applications.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden py-8 bg-white/5 border-y border-white/10">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
        
        <div ref={marqueeRef} className="flex gap-8 w-max">
          <div className="marquee-content flex gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-black/40 border border-white/10 hover:border-white/30 transition-colors duration-300 min-w-[180px] justify-center"
              >
                <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  {skill.icon}
                </div>
                <span className="text-lg font-medium text-gray-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
