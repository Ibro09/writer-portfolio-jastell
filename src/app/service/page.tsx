"use client";

import AIExploration from "@/components/AIExploration";
import FAQSection from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServiceHeader from "@/components/ServiceHeader";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Service() {
  return (
   <div className="relative w-full flex flex-col items-center justify-start overflow-hidden ">  
   <Navbar/>
   <ServiceHeader/>
   <WhyWorkWithMe/>
   <AIExploration/>
   <FAQSection/>
   <Footer />
    </div>
  );
}
