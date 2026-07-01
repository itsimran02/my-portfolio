"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@/lib/gsap";
import { gsap } from "@/lib/gsap";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Timelines vary by project scope. A simple landing page might take 1-2 weeks, while a full-stack web application could take 4-8 weeks. We provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer: "Yes, we specialize in helping startups go from zero to one. We can assist with MVP development, technical architecture, and scaling strategies to get your product to market quickly.",
  },
  {
    question: "What are your payment terms?",
    answer: "Typically, we work with a 50% deposit to start the project and the remaining 50% upon completion and launch. For larger, long-term projects, we can discuss milestone-based payments.",
  },
  {
    question: "Can you audit my existing codebase?",
    answer: "Absolutely. We can perform a comprehensive audit of your current codebase to identify performance bottlenecks, security vulnerabilities, and areas for refactoring or modernization.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer post-launch support packages to ensure your website remains secure, up-to-date, and performing optimally. We can discuss a plan that fits your needs.",
  },
  {
    question: "What is your design process like?",
    answer: "We start with a discovery phase to understand your brand and goals. Then, we move to wireframing and high-fidelity design. Once approved, we build the site using modern best practices.",
  },
  {
    question: "Can you help with SEO?",
    answer: "Absolutely. We build all websites with SEO best practices in mind, including semantic HTML, fast load times, and mobile responsiveness. We can also help with metadata and content strategy.",
  },
];

export default function FAQ() {
  const containerRef = useRef(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useGSAP(() => {
    // Set initial hidden state immediately to prevent flash
    gsap.set(".faq-item", { y: 20, opacity: 0 });

    gsap.to(".faq-item", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <section id="faq" ref={containerRef} className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Common Questions</h2>
          <p className="text-gray-400 max-w-xl text-xl">
            Everything you need to know about the process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item glass-card rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-8 py-6 text-left cursor-pointer select-none"
              >
                <span className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${openIndex === index ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
                  {faq.question}
                </span>
                <div className={`relative flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 transition-all duration-500 ${openIndex === index ? "rotate-45 bg-white text-black" : "group-hover:rotate-90"}`}>
                  <Plus size={18} className={`transition-colors duration-300 ${openIndex === index ? "text-black" : "text-gray-400"}`} />
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  openIndex === index ? "max-h-[300px] opacity-100 px-8 pb-6" : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-gray-400 leading-relaxed text-base max-w-3xl border-t border-white/5 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
