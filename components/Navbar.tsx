"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, User, Briefcase, Folder, Mail } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Services", href: "#services", icon: Briefcase },
  { name: "Work", href: "#projects", icon: Folder },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 p-2 rounded-full bg-black/50 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`relative px-4 py-3 rounded-full transition-all duration-300 flex items-center gap-2 group ${
                isActive ? "bg-white text-black" : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <item.icon size={20} className={`transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`} />
              <span className={`text-sm font-medium overflow-hidden transition-all duration-300 ${isActive ? "w-auto opacity-100 ml-1" : "w-0 opacity-0"}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
