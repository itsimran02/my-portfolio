"use client";

import { useRef, ReactNode } from "react";
import { gsap } from "@/lib/gsap";

interface MagneticProps {
  children: ReactNode;
  className?: string;
}

export default function Magnetic({ children, className = "" }: MagneticProps) {
  const magnetic = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = magnetic.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    gsap.to(magnetic.current, {
      x: x * 0.3, // Magnetic strength
      y: y * 0.3,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(magnetic.current, {
      x: 0,
      y: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <div
      ref={magnetic}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`magnetic-target ${className}`}
    >
      {children}
    </div>
  );
}
