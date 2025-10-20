"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GoalsSection from "@/components/GoalsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DynamicHeadline from "@/components/DynamicHeadline";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Navbar from "@/components/Navbar";
import YouTubeSection from "@/components/Youtube";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSectionBg />
      <HeroSection />
      <ServicesSection />
      <GoalsSection />
      <DynamicHeadline />
      <TestimonialsSection />
      <YouTubeSection />
      <CTASection />
      <Footer />
    </div>
  );
}

// ✅ Hero Section (Blended Style)
const HeroSectionBg = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center w-full overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video.mov" // <-- replace with your actual video path
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* 🔹 Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🔹 Navbar on top */}
      <div className="absolute top-0 left-0 w-full z-20 flex align-center justify-center">
        <Navbar />
      </div>

      {/* 🔹 Foreground Content */}
      <div className="relative z-10 max-w-3xl px-4">
        {/* Name Animation */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 leading-tight flex justify-center items-center space-x-3">
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

        {/* Subtitle Animation */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="uppercase tracking-widest text-sm md:text-base text-gray-300 mb-8 font-semibold"
        >
          Leading SEO & iGaming Content Strategist
        </motion.p>

        {/* Button Animation */}
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
