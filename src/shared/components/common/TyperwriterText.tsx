"use client";
import { useEffect, useState } from "react";

interface TypewriterProps {
    children: string;
    speed?: number;
    className?: string;
  }

export default function Typewriter({ children, speed = 80, className = "" }:TypewriterProps) {
  const [display, setDisplay] = useState(children);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const startTimer = setTimeout(() => {
      let i = 0;
      setDisplay("");
      const typeTimer = setInterval(() => {
        if (i < children.length) {
          setDisplay(children.slice(0, ++i));
        } else clearInterval(typeTimer);
      }, speed);
    }, 100);
    return () => clearTimeout(startTimer);
  }, [children, speed]);

  if (!mounted) return <h2 className={className}>{children}</h2>;
  return <h2 className={className}>{display}</h2>;
}