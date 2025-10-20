"use client";

import { motion } from "framer-motion";

export default function GoalsSection() {
  return (
    <section className="bg-[#0d0d1b] text-white py-18 px-6 md:px-16 relative overflow-hidden w-full">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-l from-[#b05197] to-[#5f4ba6] opacity-20 blur-3xl rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
          How I help you achieve{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#b05197] to-[#5f4ba6]">
            Your Goals {""}
          </span>
          ?
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          Your objectives and deadlines will always be met with excellence.
        </p>

        <motion.a
          href="/process"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-10 py-4 rounded-xl text-[16px] font-semibold text-white bg-gradient-to-l from-[#b05197] to-[#5f4ba6] hover:shadow-[0_0_25px_rgba(181,23,158,0.6)] transition-all duration-300"
        >
          MY PROCESS
        </motion.a>
      </motion.div>
    </section>
  );
}
