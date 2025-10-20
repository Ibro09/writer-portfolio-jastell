"use client";

import { PenTool, Gamepad2, Sparkles, Clock, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
const values = [
  {
    icon: <PenTool className="w-10 h-10 text-purple-300 mb-4" />,
    title: "Strategic Storytelling",
    desc: "I don’t just write , I tell stories that drive clicks, build trust, and turn casual readers into loyal players.",
  },
  {
    icon: <Gamepad2 className="w-10 h-10 text-purple-300 mb-4" />,
    title: "Industry Insight",
    desc: "From casino trends to sportsbook updates, I understand the rhythm of iGaming and what keeps audiences engaged.",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-purple-300 mb-4" />,
    title: "Creative Precision",
    desc: "Every line balances flair and focus , creative enough to stand out, precise enough to perform.",
  },
  {
    icon: <Clock className="w-10 h-10 text-purple-300 mb-4" />,
    title: "Reliability & Consistency",
    desc: "Deadlines aren’t negotiable. I deliver on time, with quality that never drops below exceptional.",
  },
  {
    icon: <Heart className="w-10 h-10 text-purple-300 mb-4" />,
    title: "Human Connection",
    desc: "I write to connect, not just to rank , bringing authenticity and emotion to every piece of content.",
  },
];


export default function AboutMe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const stats = [
    { label: "Projects Completed", value: 120 },
    { label: "iGaming Clients", value: 30 },
    { label: "Years Experience", value: 5 },
  ];

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <section
        ref={ref}
        className="bg-[#0b0b0b] text-white py-16 px-4 md:px-16 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start w-full">
          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-full w-full"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              <span className="bg-gradient-to-l from-[#b05197] to-[#5f4ba6] bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-full">
            I am Stella-Jessica, and I am a creative.

I am an iGaming writer who is passionate about what she does and works towards turning complex casino and sports betting topics into content that actually works. I know that the gaming industry moves fast, and regulations change constantly. To that end, I work closely with SEO teams and developers to make sure our content strategy fits the bigger picture and drives real business results. 
Coupled with my content creation abilities, I bring the world of gaming and casinos into the limelight with short, engaging videos while exploring many other creative endeavors in the most exciting ways.

Welcome to my page!

            </p>

            <button className="mt-4 bg-gradient-to-l from-[#b05197] to-[#5f4ba6] text-white px-5 py-3 rounded-full font-semibold shadow-lg hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all w-full md:w-auto">
              Let’s Work Together
            </button>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-center md:text-left w-full">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.2 },
                    },
                  }}
                  className=" rounded-xl py-4 px-2"
                >
                  <AnimatedNumber value={stat.value} inView={inView} />
                  <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center self-start w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_35px_rgba(139,92,246,0.3)] border border-[#1f1f1f] w-[90vw] max-w-[350px] md:max-w-[500px]">
              <Image
                src="/face.jpg"
                alt="iGaming content writer at work"
                width={500}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>
      <section className="bg-[#0b0b0b] text-white py-24 px-6 md:px-16 min-h-screen">
        <div className="max-w-6xl mx-auto text-center">
          {/* Mission / Purpose */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-30 bg-[#1a1a1a] w-full p-8 rounded-2xl border border-[#292929] "
          >
            <h3 className="text-2xl tracking-widest bg-gradient-to-l from-[#b05197] to-[#5f4ba6] bg-clip-text text-transparent uppercase mb-3">
              My Purpose
            </h3>
            <p className="text-2xl md:text-3xl font-semibold leading-snug max-w-4xl mx-auto text-gray-100">
              To empower iGaming brands through impactful content , blending
              creativity, authenticity, and strategy to help you attract,
              educate, and retain your audience with every word.
            </p>
          </motion.div>

          {/* Values / Principles */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl tracking-widest  uppercase mb-3 bg-gradient-to-l from-[#b05197] to-[#5f4ba6] bg-clip-text text-transparent">
              My Approach
            </h3>
            <h2 className="text-2xl font-bold mb-12">
              These are the principles that guide how I write and collaborate.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#292929] hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]"
                >
                  {value.icon}
                  <h4 className="text-lg font-semibold mb-2 text-white">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <CTASection/>
      <Footer/>
    </div>
  );
}
/* Animated Counter Component */
function AnimatedNumber({ value, inView }: { value: number; inView: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) {
      setDisplay(0);
      return;
    }
    let start = 0;
    const duration = 1500; // ms
    const increment = value / (duration / 16); // ~60fps
    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value, inView]);

  return <span className="text-3xl font-bold text-[#c084fc]">{display}+</span>;
}
