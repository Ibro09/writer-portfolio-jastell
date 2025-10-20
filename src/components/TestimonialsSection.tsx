"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Stella-Jessica delivers content that truly understands the iGaming audience , informative, engaging, and SEO-smart. A pleasure to work with!",
    name: "Abdullahi.",
  },
  {
    text: "Her articles consistently hit the mark. From casino reviews to sportsbook guides, everything is detailed and perfectly optimized.",
    name: "Khalid alao",
  },
  {
    text: "Reliable, creative, and fast! Stella makes complex topics easy to read and brings real value to every piece of gaming content.",
    name: "Abdulwarith",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#0e0e0e] text-white py-28 px-6 md:px-16 relative overflow-hidden">
      {/* Soft glow */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Customer{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#b05197] to-[#5f4ba6]">
            Testimonials
          </span>
        </h2>
        <p className="text-gray-400 mb-16 text-lg">
          What our customers are saying about us. Be the next to experience
          premium iGaming content!
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: false }}
              className="bg-black  rounded-2xl p-8 shadow-lg hover:shadow-[0_0_25px_rgba(149,76,233,0.3)] transition-all duration-300"
            >
              <div className="flex justify-center mb-4 text-[#9b5de5]">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    fill="#9b5de5"
                    strokeWidth={0}
                    className="w-6 h-6"
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-6">{t.text}</p>
              <p className="text-sm text-gray-500 font-medium">-{t.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
