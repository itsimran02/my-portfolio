"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO, TechStart",
    quote: "Working with imran was a game-changer. Our new site is faster, looks amazing, and our conversion rate has doubled.",
  },
  {
    name: "Michael Chen",
    role: "Founder, Studio 54",
    quote: "Professional, reliable, and incredibly talented. He understood our vision perfectly and executed it better than we imagined.",
  },
  {
    name: "Jessica Lee",
    role: "Marketing Director, GrowthCo",
    quote: "The attention to detail is unmatched. Every animation and interaction feels polished. Highly recommend!",
  },
  {
    name: "David Ross",
    role: "Product Manager, Apex",
    quote: "Delivered on time and exceeded expectations. The code quality is top-notch and easy to maintain.",
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
            Don&apos;t just take my word for it. Here&apos;s what people are saying.
          </p>
      </div>
        
      <div className="relative w-full overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

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
