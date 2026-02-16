"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingAnimation() {
  const text = "Yash Bhamre's Portfolio";
  const [displayedText, setDisplayedText] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let index = 0;

    // Start typing after SVG animation completes (3s delay)
    const startTyping = setTimeout(() => {
      const typingInterval = setInterval(() => {
        setDisplayedText(text.substring(0, index + 1));
        index++;

        if (index === text.length) {
          clearInterval(typingInterval);

          // Wait 2.5 seconds after full typing
          setTimeout(() => {
            setIsVisible(false);
          }, 2500);
        }
      }, 100); // typing speed
    }, 3000); // delay before typing starts

    return () => clearTimeout(startTyping);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* SVG Drawing Animation */}
      <svg width="500" height="220" viewBox="0 0 500 200">
        <motion.path
          d="
            M0 150 L60 150 L60 120 L80 100 L110 100 L110 150
            L140 150 L140 90 L170 70 L200 70 L200 150
            L230 150 L230 110 L250 95 L280 95 L280 150
            L310 150 L310 60 L340 40 L370 40 L370 150
            L400 150 L400 100 L420 85 L450 85 L450 150
            L500 150
          "
          fill="none"
          stroke="#111"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3 }}
        />
      </svg>

      {/* Typewriter Text */}
      <div className="mt-8 text-2xl md:text-3xl font-bold tracking-wide">
        {displayedText}
        <span className="animate-pulse">|</span>
      </div>
    </motion.div>
  );
}
