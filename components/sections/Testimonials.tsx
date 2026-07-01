"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Feroz Bhai",
    role: "Owner, Sahara Turf",
    quote: "The booking platform they built for Sahara Turf is incredible. Real-time slot booking, automated locks, and payment features saved our daily management hassle completely.",
  },
  {
    name: "Amit Sharma",
    role: "Founder, Hoppa Sweden",
    quote: "Superb execution on our custom Shopify storefront. The site is incredibly fast, conversions have surged, and the mobile experience is extremely smooth.",
  },
  {
    name: "Priya Sen",
    role: "Co-Founder, Nirmalaya",
    quote: "They brought Nirmalaya's eco-friendly brand vision to life with a stunning Shopify design. Every animation and interaction feels highly polished.",
  },
  {
    name: "Rajesh Patel",
    role: "CTO, Digiverse India",
    quote: "Their full-stack Next.js and custom theme skills are top-notch. Clean architecture, lightning-fast performance, and a highly reliable team.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Client Stories</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it. Here&apos;s what people are saying.
          </p>
      </div>
        
      <div className="relative w-full overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

        <div className="flex gap-8 w-max animate-marquee">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div key={index} className="w-[400px] glass-card p-8 rounded-3xl border border-white/10 relative group hover:bg-white/5 transition-colors duration-300 shrink-0">
              <Quote className="text-white/20 w-10 h-10 absolute top-6 right-6 group-hover:text-white/40 transition-colors" />
              <p className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                &quot;{item.quote}&quot;
              </p>
              <div>
                <h4 className="font-bold text-white text-lg">{item.name}</h4>
                <p className="text-sm text-zinc-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
