// app/components/Footer.tsx
"use client";

import {
  Youtube,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center">
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 text-sm md:text-base mb-6 text-gray-200 tracking-wide">
          <a href="/" className="hover:text-[#b388eb] transition-colors">HOME</a>
          <a href="/about" className="hover:text-[#b388eb] transition-colors">ABOUT</a>
          <a href="/process" className="hover:text-[#b388eb] transition-colors">PROCESS</a>
          <a href="/service" className="hover:text-[#b388eb] transition-colors">SERVICE</a>
          <a href="/contact" className="hover:text-[#b388eb] transition-colors">CONTACT</a>
        </nav>

        {/* Divider line */}
        <div className="w-full border-t border-gray-600 my-6"></div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          {[
            { icon: Youtube, href: "#" },
            { icon: Twitter, href: "#" },
            { icon: Instagram, href: "#" },
            { icon: Facebook, href: "#" },
            { icon: Linkedin, href: "#" },
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
