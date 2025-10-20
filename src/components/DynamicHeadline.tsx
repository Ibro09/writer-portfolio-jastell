"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "rank higher on Google",
  "grow your gaming audience",
  "boost casino traffic",
  "elevate sportsbook content",
  "turn players into fans",
  "stand out in iGaming",
];

export default function DynamicHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % phrases.length),
      2500
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="w-full bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center w-full">
        <div className="flex flex-wrap items-center justify-center gap-0 md:gap-3 text-center w-full">
          {/* Fixed text */}
          <h2 className="text-xl md:text-4xl font-extrabold leading-tight">
            We can help you
          </h2>

          <span className="relative overflow-hidden h-10 md:h-14 w-full sm:w-[420px] md:w-[700px] mt-3 sm:mt-0 flex items-center justify-center lg:justify-start">
            <AnimatePresence mode="wait">
              <motion.span
                key={phrases[index]}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
                className="block text-transparent bg-clip-text bg-gradient-to-l from-[#b05197] to-[#5f4ba6] font-extrabold whitespace-nowrap text-[20px] md:text-4xl text-center lg:text-left"
              >
                {phrases[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </div>
      </div>
    </section>
  );
}
