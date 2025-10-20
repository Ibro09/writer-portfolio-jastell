"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function OverlapScrollSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Define overlap offsets for each card
  const y1 = useTransform(scrollYProgress, [0, 0.5], ["0%", "-40%"]);
  const y2 = useTransform(scrollYProgress, [0, 0.5], ["0%", "-80%"]);
  const y3 = useTransform(scrollYProgress, [0, 0.5], ["0%", "-120%"]);
  const y4 = useTransform(scrollYProgress, [0, 0.5], ["0%", "-160%"]);

  return (
    <section
      ref={ref}
      className="relative h-[300vh] bg-[#c6a6ff] flex justify-center items-start px-12 py-24 w-full"
    >
      {/* LEFT SIDE - Fixed heading */}
      <div className="sticky top-1/4 h-fit w-1/2">
        <h2 className="text-5xl font-extrabold text-white leading-tight">
          What Can You <br /> Expect From Our <br /> Experts?
        </h2>
      </div>

      {/* RIGHT SIDE - Overlapping motion cards */}
      <div className="relative w-1/2 h-[150vh] flex flex-col justify-start">
        <motion.div
          style={{}}
          className="absolute top-0 right-0 w-[90%] bg-gradient-to-l from-[#b05197] to-[#5f4ba6] p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Proven Track Record
          </h3>
          <p className="text-white/90">
            We work with established iGaming and SEO experts who adapt to your
            brand voice and deliver measurable results.
          </p>
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          className="absolute top-48 right-0 w-[90%] bg-gradient-to-l from-[#b05197] to-[#5f4ba6] p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Top-Tier Quality
          </h3>
          <p className="text-white/90">
            Content that performs ,optimized for engagement, SEO, and
            storytelling.
          </p>
        </motion.div>

        <motion.div
          style={{ y: y3 }}
          className="absolute top-96 right-0 w-[90%] bg-gradient-to-l from-[#b05197] to-[#5f4ba6] p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Updated Knowledge
          </h3>
          <p className="text-white/90">
            Staying ahead of trends in casino, gaming, and digital marketing to
            keep your brand relevant.
          </p>
        </motion.div>

        <motion.div
          style={{ y: y1 }}
          className="absolute top-[28rem] right-0 w-[90%] bg-gradient-to-l from-[#b05197] to-[#5f4ba6] p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Precise Deadlines
          </h3>
          <p className="text-white/90">
            Fast, reliable turnaround times so your iGaming content always hits
            the mark.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
