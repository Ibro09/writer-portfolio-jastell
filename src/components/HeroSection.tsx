"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-black text-white overflow-hidden">
      {/* Left Side - Headline */}
      <motion.div
        className="md:w-1/2 mb-10 md:mb-0"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.3 }} // 👈 plays every time it's in view
      >
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Where Creativity Meets iGaming - <br />
          Crafting Stories, Strategies, <br /> and Results that Win!
        </h1>

        {/* Decorative gradient line */}
        <motion.div
          className="h-1 w-24 mt-4 bg-gradient-to-l from-[#b05197] to-[#5f4ba6] rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ amount: 0.3 }}
        />
      </motion.div>

      {/* Right Side - Bio */}
      <motion.div
        className="md:w-1/2 text-gray-300 text-lg leading-relaxed text-[16px]"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ amount: 0.3 }} // 👈 triggers each time it's visible
      >
        <p>
          I am Stella-Jessica, and I am a creative. I am an iGaming writer who
          is passionate about what she does and works towards turning complex
          casino and sports betting topics into content that actually works. I
          know that the gaming industry moves fast, and regulations change
          constantly. To that end, I work closely with SEO teams and developers
          to make sure our content strategy fits the bigger picture and drives
          real business results. Coupled with my content creation abilities, I
          bring the world of gaming and casinos into the limelight with short,
          engaging videos while exploring many other creative endeavors in the
          most exciting ways.
        </p>

        {/* Gradient Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          whileInView={{ opacity: [0, 1], y: [30, 0] }} // 👈 fade + rise on scroll
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.4 }}
          className="mt-8 px-6 py-4 font-semibold text-white rounded-xl text-[16px]
          bg-gradient-to-l from-[#b05197] to-[#5f4ba6] 
          transition-all duration-500 hover:shadow-[0_0_25px_rgba(88,9,68,0.8)]"
        >
          LET&apos;S have a date
        </motion.button>
      </motion.div>
    </section>
  );
}
