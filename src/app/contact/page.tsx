"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#1a1a1a] w-full max-w-[100vw] overflow-hidden">
    <Navbar/>
   <ContactSection/>
   <Footer/>
   </div>
  );
}
