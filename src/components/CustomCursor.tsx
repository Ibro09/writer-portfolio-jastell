"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [texting, setTexting] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const hoverTargets = document.querySelectorAll("a, button, [data-hover]");
    const handleEnter = () => setHovering(true);
    const handleLeave = () => setHovering(false);

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    const textTargets = document.querySelectorAll(
      "input, textarea, [contenteditable=true]"
    );
    const handleTextEnter = () => setTexting(true);
    const handleTextLeave = () => setTexting(false);

    textTargets.forEach((el) => {
      el.addEventListener("mouseenter", handleTextEnter);
      el.addEventListener("mouseleave", handleTextLeave);
      el.addEventListener("focus", handleTextEnter);
      el.addEventListener("blur", handleTextLeave);
    });

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
      textTargets.forEach((el) => {
        el.removeEventListener("mouseenter", handleTextEnter);
        el.removeEventListener("mouseleave", handleTextLeave);
        el.removeEventListener("focus", handleTextEnter);
        el.removeEventListener("blur", handleTextLeave);
      });
    };
  }, []);

  return (
    // ✅ hidden on small screens, visible on md+
    <div className="hidden md:block">
      {/* Hide native cursor only on md+ */}
      <style jsx global>{`
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          x: position.x - (texting ? 1 : 12),
          y: position.y - (texting ? 12 : 12),
          scale: hovering ? 2.2 : 1,
          backgroundColor: hovering
            ? "rgba(179,136,235,0.2)"
            : "rgba(179,136,235,0.08)",
          rotate: texting ? 90 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        style={{
          width: texting ? 2 : 24,
          height: texting ? 24 : 24,
          borderRadius: texting ? 1 : "50%",
          border: "1px solid rgba(179,136,235,0.7)",
          background: texting ? "rgba(179,136,235,0.5)" : "transparent",
        }}
      />
    </div>
  );
}
