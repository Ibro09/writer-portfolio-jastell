// app/components/Footer.tsx
"use client";

import {
  Youtube,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  PhoneCall,
  
} from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center">
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 text-sm md:text-base mb-6 text-gray-200 tracking-wide">
          <Link href="/" className="hover:text-[#b388eb] transition-colors">HOME</Link>
          <Link href="/about" className="hover:text-[#b388eb] transition-colors">ABOUT</Link>
          <Link href="/process" className="hover:text-[#b388eb] transition-colors">PROCESS</Link>
          <Link href="/service" className="hover:text-[#b388eb] transition-colors">SERVICE</Link>
          <Link href="/contact" className="hover:text-[#b388eb] transition-colors">CONTACT</Link>
        </nav>

        {/* Divider line */}
        <div className="w-full border-t border-gray-600 my-6"></div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          {[
            { icon: Youtube, href: "https://www.youtube.com/@jastellgaming" },
            { icon: PhoneCall, href: "tel:+2348165710589" },
            { icon: Instagram, href: "https://instagram.com/jastellgaming" },
            { icon: FaWhatsapp, href: "https://wa.me/+2348165710589" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/okpala-stella-jessica" },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-400 hover:border-[#b388eb] hover:text-[#b388eb] transition-all duration-300 hover:scale-105"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#0e0e0e] text-center py-3 text-sm text-gray-200">
        ©2025. A Perfect Writer. All Rights Reserved.
      </div>
    </footer>
  );
}
