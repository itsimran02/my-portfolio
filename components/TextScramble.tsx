"use client";

import { useEffect, useState } from "react";

interface TextScrambleProps {
  children: string;
  className?: string;
  duration?: number;
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

export default function TextScramble({ children, className = "", duration = 1000 }: TextScrambleProps) {
  const [text, setText] = useState(children);
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    let counter = 0;

    const animate = () => {
      interval = setInterval(() => {
        setText((_prev) => {
          const result = children
            .split("")
            .map((letter, index) => {
              if (index < counter) {
                return children[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");
            
          return result;
        });

        counter++;
        if (counter > children.length) {
          clearInterval(interval);
        }
      }, 50);
    };

    animate();

  }, [children, duration]);

  return <span className={className}>{text}</span>;
}
