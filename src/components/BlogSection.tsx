"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  author: string;
  description: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "An Overview of Crypto Sportsbook",

    author: "Iris W.",
    description:
      "There’s a lot of fun you’ll get from watching sports with your friends or family and rooting for your favorite teams. But do you realize you don’t have to watch these games for the fun alone? You can now turn your passion into earnings with the creation of sportsbooks.",
    image: "/images/blog1.png",
  },
  {
    id: 2,
    title: "How to Spot Crypto Betting Addiction",
    author: "Iris W.",
    description:
      "Crypto betting can be thrilling, but it’s easy to lose control and overspend. This article highlights the warning signs of crypto betting addiction and offers practical steps to prevent or manage it effectively.",
    image: "/images/blog2.png",
  },
  {
    id: 3,
    title: "10 Reasons Why Gambling with Crypto Will Pay Off",
    author: "Iris W.",
    description:
      "Crypto betting is rapidly gaining traction as players discover its speed, security, and flexibility. This article explores the top reasons why gambling with crypto outshines traditional payment methods and how it’s transforming online casinos.",
    image: "/images/blog3.jpg",
  },
  {
    id: 4,
    title: "Do the Best Crypto Casinos Accept Bitcoin?",
    author: "Iris W.",
    description:
      "As the pioneer of cryptocurrency, Bitcoin is widely accepted across various platforms—but what about crypto casinos? This article breaks down which casinos support Bitcoin, how it works for gaming, and why it remains a top choice for crypto gamblers.",
    image: "/images/blog4.jpg",
  },
];

export default function BlogSection() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleSeeMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, blogPosts.length));
  };

  return (
    <section
      id="blog"
      className="relative bg-[#0A0A0A] text-white py-20 px-6 md:px-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#5909441a] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-l from-[#590944] to-[#382871] bg-clip-text text-transparent">
          Latest Insights & Articles
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Exploring the intersection of AI, writing, and the iGaming industry —
          crafted with strategy and style.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogPosts.slice(0, visibleCount).map((post, i) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-[#111111] rounded-2xl overflow-hidden border border-[#1f1f1f] hover:border-[#59094466] shadow-lg hover:shadow-[0_0_20px_rgba(88,9,68,0.3)] transition-all"
          >
            <div className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col justify-between h-[280px]">
              <h3 className="text-lg font-semibold mb-2 text-white">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {post.description}
              </p>
              <Link
                href={`/blog/blog${post.id}`} // <-- dynamic route
                className="text-[#b075ff] font-medium hover:text-[#e0b2ff] transition-all"
              >
                Read more →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* See More */}
      {visibleCount < blogPosts.length && (
        <div className="relative z-10 flex justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSeeMore}
            className="bg-gradient-to-l from-[#590944] to-[#382871] text-white px-8 py-3 rounded-full font-semibold tracking-wide shadow-[0_0_20px_rgba(88,9,68,0.4)] hover:shadow-[0_0_30px_rgba(88,9,68,0.6)] transition-all"
          >
            See More
          </motion.button>
        </div>
      )}
    </section>
  );
}
