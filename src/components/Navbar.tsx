"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        isScrolled
          ? "fixed top-3 left-1/2 -translate-x-1/2 shadow-lg bg-black/90 border border-gray-700"
          : "bg-black border border-gray-800"
      } z-50 w-[90%] rounded-[40px] transition-all duration-300 mt-4`}
    >
      <div className="container mx-auto flex items-center justify-between  px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-white  h-[60px] flex  py-3 w-auto">
          <Image
            src={"/logo.png"}
            alt="iGaming content writer at work"
            width={100}
            height={100}
            className="border"
          />
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-white">
            {["Home", "About", "Process", "Service"].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:text-gray-400"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button (Desktop only) */}
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="hidden lg:inline-block bg-gradient-to-l from-[#b05197] to-[#5f4ba6] text-white px-6 md:px-10 py-3 rounded-full text-sm md:text-base font-semibold tracking-wide shadow-[0_0_20px_rgba(88,9,68,0.4)] hover:shadow-[0_0_30px_rgba(88,9,68,0.6)] transition-all"
        >
          Contact
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none z-[100]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} className="text-[#b05197]" />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* ✅ Full-Screen Mobile Menu with "dot expanding" animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.6,
            }}
            className="fixed inset-0 bg-black flex flex-col items-center justify-center space-y-8  text-xl z-40"
          >
            {["home", "about", "process", "service", "contact"].map(
              (item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item == "home" ? "/" : `/${item.toLowerCase()}`}
                    className="hover:text-[#b05197] uppercase"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
