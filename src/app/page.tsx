"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GoalsSection from "@/components/GoalsSection";
import DynamicHeadline from "@/components/DynamicHeadline";
import TestimonialsSection from "@/components/TestimonialsSection";
import YouTubeSection from "@/components/Youtube";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a short loading duration (2 seconds)
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSectionBg />
      <HeroSection />
      <ServicesSection />
      <GoalsSection />
      <DynamicHeadline />
      <TestimonialsSection />
      <YouTubeSection />
      <BlogSection/>
      <CTASection />
      <Footer />
    </div>
  );
}

/* ------------------ 🔹 Enhanced Loading Screen ------------------ */


const LoadingScreen = () => {
  const [text, setText] = useState("");
  const name = "Stella";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(name.slice(0, index + 1));
      index++;
      if (index === name.length) clearInterval(interval);
    }, 300); // typing speed (ms)
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Glowing circular pulse */}
      <motion.div
        className="w-16 h-16 border-4 border-t-transparent border-purple-500 rounded-full animate-spin mb-8 shadow-[0_0_20px_#9b5de5]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Typing animation for name */}
      <motion.h1
        className="text-5xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {text}
        <motion.span
          className="inline-block w-1 h-8 bg-purple-200 ml-2"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        />
      </motion.h1>

      {/* Subtext fades in */}
      <motion.p
        className="mt-6 text-gray-400 text-sm tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        Crafting brilliance...
      </motion.p>
    </motion.div>
  );
};


/* ------------------ 🔹 Hero Section ------------------ */
const HeroSectionBg = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video.mov"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20 flex align-center justify-center">
        <Navbar />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-4 leading-tight flex justify-center items-center space-x-3">
          <motion.span
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          > 
            Okpala
          </motion.span>
          <motion.span
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="bg-gradient-to-l from-[#b05197] to-[#5f4ba6] bg-clip-text text-transparent"
          >
            Stella
          </motion.span>
        </h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="uppercase tracking-widest text-sm md:text-base text-gray-300 mb-8 font-semibold"
        >
          Leading SEO & iGaming Content Strategist
        </motion.p>

        <motion.a
          href="/contact"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          className="bg-gradient-to-l from-[#b05197] to-[#5f4ba6] hover:opacity-90 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition"
        >
          Get a Quote
        </motion.a>
      </div>
    </section>
  );
};
