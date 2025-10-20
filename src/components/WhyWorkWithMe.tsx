"use client";

import { motion } from "framer-motion";
import { Search, Brain, Gamepad2, PenTool } from "lucide-react";

const qualities = [
  {
    icon: <Search size={36} className="text-purple-400" />,
    title: "SEO-Optimized Writing",
    desc: "I create iGaming content that ranks ,blending keyword precision with human storytelling.",
  },
  {
    icon: <Brain size={36} className="text-purple-400" />,
    title: "AI-Savvy Researcher",
    desc: "I use AI tools smartly ,for faster insights, deeper accuracy, and trend-based content.",
  },
  {
    icon: <Gamepad2 size={36} className="text-purple-400" />,
    title: "iGaming Industry Expert",
    desc: "From casino reviews to slot breakdowns, I know what engages and converts players.",
  },
  {
    icon: <PenTool size={36} className="text-purple-400" />,
    title: "Engaging, Reader-Centric Copy",
    desc: "Every line I write is tailored to attract attention and inspire action.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="relative bg-[#050505] py-24 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{}}
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-l from-[#b05197] to-[#5f4ba6] bg-clip-text text-transparent"
        >
          Why Work With Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mb-16 text-lg"
        >
          Every word I write is backed by strategy, research, and industry
          expertise.
        </motion.p>

        {/* Qualities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{}}
              className="group relative bg-[#0e0e0e] rounded-2xl border border-[#1f1f1f] hover:border-[#b76dff]/60 p-8 shadow-[0_0_0_#0000] hover:shadow-[0_0_35px_#b76dff20] transition-all duration-500"
            >
              <div className="text-[#d4ff6f] mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Soft gradient hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-l from-[#b05197] to-[#5f4ba6] blur-2xl transition-all duration-700 rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
