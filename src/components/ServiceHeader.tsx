"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ServiceHeader() {
  return (
    <section className="relative w-full  overflow-hidden flex items-center justify-center bg-black py-20 md:py-32 lg:py-40">
      {/* Animated gradient overlay */}
      <motion.div
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0  opacity-90"
      />

      {/* Optional hero background image (blurred for depth) */}
      <div className="absolute inset-0">
        <Image
          src="/images/service-hero-bg.jpg"
          alt="Casino & AI abstract background"
          fill
          className="object-cover opacity-20 mix-blend-overlay"
          priority
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_0_20px_rgba(183,109,255,0.4)]"
        >
          Where Creativity Meets iGaming & AI Content
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          From in-depth casino reviews to AI insights , expertly crafted to
          engage, inform, and convert.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-l from-[#b05197] to-[#5f4ba6] text-white px-6 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-base font-semibold tracking-wide shadow-[0_0_20px_rgba(88,9,68,0.4)] hover:shadow-[0_0_30px_rgba(88,9,68,0.6)] transition-all"
          >
            LET'S HAVE A DATE
          </motion.a>
        </motion.div>
      </div>

      {/* Soft glowing orbs for depth */}
      <div className="absolute w-[500px] h-[500px] bg-[#b76dff] rounded-full blur-[150px] opacity-25 top-[100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-400 rounded-full blur-[130px] opacity-15 bottom-[-100px] right-[-100px]" />
    </section>
  );
}
