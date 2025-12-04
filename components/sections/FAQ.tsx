"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@/lib/gsap";
import { gsap } from "@/lib/gsap";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Does using AI mean my website will look generic?",
    answer: "Absolutely not. I use AI as a power tool for coding and logic, but the creative direction, design system, and user experience are custom-crafted for your brand. You get bespoke design with the speed of AI execution.",
  },
  {
    question: "Is my data and intellectual property safe?",
    answer: "Yes. I use enterprise-grade, private AI instances where your data is not used for training. You retain 100% ownership of all code, assets, and intellectual property delivered.",
  },
  {
    question: "How much faster is your process compared to agencies?",
    answer: "By automating repetitive coding tasks and leveraging AI for rapid prototyping, I typically deliver projects 50-70% faster than traditional agencies, saving you weeks or even months of development time.",
  },
  {
    question: "What if I need complex custom features?",
    answer: "AI excels at complex logic. Whether it's a custom booking system, a SaaS dashboard, or an intricate animation, I can implement sophisticated features faster and with fewer bugs than manual coding.",
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
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <section id="faq" ref={containerRef} className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Common Questions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Understanding how AI-native development benefits your business.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item glass-card border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg md:text-xl font-medium text-white pr-8">
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full bg-white/5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed">
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
