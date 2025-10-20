"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useLayoutEffect, useState, useEffect } from "react";
import { PenTool, Users, FileText, Rocket } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const steps = [
  {
    step: "01",
    title: "Understanding Your Brand",
    desc: "Before writing a single word, I dive deep into your iGaming brand ,understanding your tone, audience, and goals to craft content that truly resonates.",
    icon: <PenTool className="w-10 h-10 text-purple-400" />,
  },
  {
    step: "02",
    title: "Research & Strategy",
    desc: "Every article, review, or campaign starts with in-depth keyword and competitor research to make sure your content ranks and performs.",
    icon: <Users className="w-10 h-10 text-purple-400" />,
  },
  {
    step: "03",
    title: "Writing & Optimization",
    desc: "With SEO and storytelling in mind, I create content that converts ,engaging readers while boosting visibility across search engines.",
    icon: <FileText className="w-10 h-10 text-purple-400" />,
  },
  {
    step: "04",
    title: "Review & Delivery",
    desc: "Before sending your final content, I refine, edit, and polish to ensure accuracy, consistency, and professional quality that aligns with your brand voice.",
    icon: <Rocket className="w-10 h-10 text-purple-400" />,
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (cardRef.current) setCardWidth(cardRef.current.offsetWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Calculate total scroll distance
  const totalScroll = !isMobile
    ? (steps.length - 1) * cardWidth - 200
    : (steps.length - 1) * cardWidth + (steps.length - 1) * 40;
  // Calculate required section height
  const sectionHeight = `calc(100vh + ${totalScroll}px)`;
  const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${totalScroll}px`]);

  return (
    <section className="relative bg-[#0b0b0b] text-white w-full">
      {/* Tall container for scroll */}
      <div className="w-full flex justify-center align-center mb-20">
        <Navbar />
      </div>
      <div
        ref={sectionRef}
        style={{ height: sectionHeight }}
        className="relative"
      >
        {/* Sticky horizontal scroll area */}
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden mb-20">
          {/* Header */}
          <div className="absolute top-12 left-0 w-full text-center pointer-events-none">
            <h2 className="text-5xl font-extrabold bg-gradient-to-l from-[#b05197] to-[#5f4ba6] bg-clip-text text-transparent mb-4">
              My Process
            </h2>
            <p className="text-gray-400 max-w-2xl text-lg mx-auto">
              My workflow is designed to make content creation simple,
              strategic, and stress-free. From concept to delivery, every step
              ensures your iGaming brand shines with quality and consistency.
            </p>
          </div>
          {/* Horizontal Scroll */}
          <motion.div
            style={{ x }}
            className="flex mt-10 gap-10 px-4 md:px-24 h-auto items-stretch absolute left-0 top-1/2 -translate-y-1/4 py-10 mr-[500px]"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                ref={i === 0 ? cardRef : undefined}
                className="w-[90vw] md:w-[500px] h-full bg-[#181818] border border-[#2c2c2c] rounded-2xl p-6 md:p-10 flex flex-col justify-between hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] transition-all duration-500"
              >
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-sm text-purple-300 font-semibold mb-2">
                  {step.step}
                </h3>
                <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                <p className="text-gray-400 text-base leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* Footer outside the sticky scroll area */}
      <Footer />
    </section>
  );
}
