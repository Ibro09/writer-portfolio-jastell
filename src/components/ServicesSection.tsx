"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Monitor,
  Link,
  Type,
  Languages,
  PenTool,
  Globe,
  FileSearch,
  BarChart3,
  ArrowRight,
  Gamepad2,
  Video,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";

const services = [
  {
    title: "iGaming & Sportsbook Content",
    icon: <Gamepad2 className="w-10 h-10 text-purple-400" />,
    desc: "From casino guides to sports betting insights ,we create content that informs, engages, and converts.",
  },
  {
    title: "SEO Strategy & Writing",
    icon: <Type className="w-10 h-10 text-purple-400" />,
    desc: "We blend creativity with data-driven SEO to help your brand rank higher and attract real players.",
  },
  {
    title: "Content Editing & Optimization",
    icon: <PenTool className="w-10 h-10 text-purple-400" />,
    desc: "Every sentence fine-tuned for clarity, authority, and impact ,because precision matters in gaming.",
  },
  {
    title: "Video Content Creation",
    icon: <Video className="w-10 h-10 text-purple-400" />,
    desc: "Bringing iGaming to life through short, engaging videos that drive awareness and build community.",
  },
  {
    title: "Localization & Global Reach",
    icon: <Globe className="w-10 h-10 text-purple-400" />,
    desc: "Adapting casino and sportsbook content for global audiences ,culturally accurate and SEO-optimized.",
  },
  {
    title: "Content Auditing",
    icon: <FileSearch className="w-10 h-10 text-purple-400" />,
    desc: "We review existing content to uncover gaps, update outdated insights, and enhance visibility.",
  },
  {
    title: "Analytics & Growth Insights",
    icon: <BarChart3 className="w-10 h-10 text-purple-400" />,
    desc: "Turning performance data into strategy ,refining what works to maximize engagement and ROI.",
  },
];

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // <-- Add this
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect mobile screen
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Reset auto-scroll interval when visibility changes
  useEffect(() => {
    if (!isVisible) return;

    // Clear previous interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    intervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        // Scroll by one card width
        const cardWidth = container.firstChild
          ? (container.firstChild as HTMLElement).offsetWidth + 24 // 24px for gap
          : 320;
        // If near the end, scroll back to start
        if (container.scrollLeft + cardWidth >= maxScrollLeft - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isMobile && scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild
        ? (scrollRef.current.firstChild as HTMLElement).offsetWidth + 24
        : 320;
      scrollRef.current.scrollTo({
        left: current * cardWidth,
        behavior: "smooth",
      });
    }
  }, [current, isMobile]);

  useEffect(() => {
    if (isVisible) {
      setCurrent(0);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0e0e0e] text-white py-20 px-6 md:px-16 overflow-hidden max-w-full"
    >
      <div className="max-w-7xl mx-auto h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-l from-[#b05197] to-[#5f4ba6] bg-clip-text text-transparent">
            My Services
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            I’ll take care of the grind , you just focus on what you do best.
          </p>
        </motion.div>

        {/* Scrollable Services Row */}
        <div className="relative h-auto">
          <div
            ref={scrollRef}
            className="flex space-x-6 pt-6 overflow-x-auto overflow-y-hidden pb-6 px-2 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="min-w-[280px] max-w-[300px] md:min-w-[320px] md:max-w-[400px] bg-[#181818] border border-[#2c2c2c] rounded-2xl p-8 text-center flex-shrink-0 hover:shadow-[0_0_25px_rgba(88,9,68,0.4)] transition-all duration-500"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ amount: 0.3, once: false }}
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-base">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.a
            href="/service"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            className="bg-gradient-to-l from-[#b05197] to-[#5f4ba6]  hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition flex items-center w-max mx-auto mt-8"
          >
            See More{" "}
            <ArrowRight className="w-6 h-6 pl-3 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
