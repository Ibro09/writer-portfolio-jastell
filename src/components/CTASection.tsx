"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#0e0e0e] to-[#1a0f1d] text-white py-20 px-6 md:px-16 text-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0  " aria-hidden="true" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
      >
        <p className="text-sm md:text-base tracking-[0.25em] uppercase text-[#b388eb] mb-3">
          Call on a Perfect Writer
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight bg-gradient-to-l from-[#b05197] to-[#5f4ba6] bg-clip-text text-transparent mb-6">
          Get a perfect piece today!
        </h2>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-gradient-to-l from-[#b05197] to-[#5f4ba6] text-white px-6 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-base font-semibold tracking-wide shadow-[0_0_20px_rgba(88,9,68,0.4)] hover:shadow-[0_0_30px_rgba(88,9,68,0.6)] transition-all"
        >
          LET&apos;S HAVE A DATE
        </motion.a>
      </motion.div>
    </section>
  );
}
