"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@/lib/gsap";
import { gsap } from "@/lib/gsap";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Timelines vary by project scope. A simple landing page might take 1-2 weeks, while a full-stack web application could take 4-8 weeks. I provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer: "Yes, I specialize in helping startups go from zero to one. I can assist with MVP development, technical architecture, and scaling strategies to get your product to market quickly.",
  },
  {
    question: "What are your payment terms?",
    answer: "Typically, I work with a 50% deposit to start the project and the remaining 50% upon completion and launch. For larger, long-term projects, we can discuss milestone-based payments.",
  },
  {
    question: "Can you audit my existing codebase?",
    answer: "Absolutely. I can perform a comprehensive audit of your current codebase to identify performance bottlenecks, security vulnerabilities, and areas for refactoring or modernization.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, I offer post-launch support packages to ensure your website remains secure, up-to-date, and performing optimally. We can discuss a plan that fits your needs.",
  },
  {
    question: "What is your design process like?",
    answer: "I start with a discovery phase to understand your brand and goals. Then, I move to wireframing and high-fidelity design. Once approved, I build the site using modern best practices.",
  },
  {
    question: "Can you help with SEO?",
    answer: "Absolutely. I build all websites with SEO best practices in mind, including semantic HTML, fast load times, and mobile responsiveness. I can also help with metadata and content strategy.",
  },
];

export default function FAQ() {
  const containerRef = useRef(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useGSAP(() => {
    gsap.from(".faq-item", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <section id="faq" ref={containerRef} className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Common Questions</h2>
          <p className="text-gray-400 max-w-xl text-xl">
            Everything you need to know about the process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item border-b border-white/10 group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-8 text-left cursor-pointer"
              >
                <span className={`text-xl md:text-2xl font-medium transition-colors duration-300 ${openIndex === index ? "text-white" : "text-zinc-400 group-hover:text-white"}`}>
                  {faq.question}
                </span>
                <div className={`relative flex items-center justify-center w-8 h-8 transition-transform duration-500 ${openIndex === index ? "rotate-45" : "group-hover:rotate-90"}`}>
                  <Plus size={24} className={`transition-colors duration-300 ${openIndex === index ? "text-white" : "text-zinc-500 group-hover:text-white"}`} />
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  openIndex === index ? "max-h-[300px] opacity-100 mb-8" : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-gray-400 leading-relaxed text-lg max-w-2xl">
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
