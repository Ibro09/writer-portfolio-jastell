"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";

interface StaticBlogPost {
  id: number;
  title: string;
  author: string;
  description: string;
  image: string;
}

interface FetchPost {
  _id: string;
  title: string;
  content: string;
  image?: string;
}

const blogPosts: StaticBlogPost[] = [
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

export default function BlogSection(): JSX.Element {
  const [posts, setPosts] = useState<FetchPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching
      try {
        const res = await fetch("/api/posts");
        if (!res.ok) {
          throw new Error("Failed to fetch posts: " + res.statusText);
        }
        const data: FetchPost[] = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError("Could not load posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-[#0A0A0A] bg-gradient-to-b from-[#5909441a] to-transparent">
      <Navbar />
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
            Exploring the intersection of AI, writing, and the iGaming industry
            — crafted with strategy and style.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center text-gray-400">
            <p>Loading posts...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center text-red-500">
            <p>{error}</p>
          </div>
        )}

        {/* Blog Grid */}
        <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, i) => (
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
          {posts.map((post: FetchPost) => (
            <motion.div
              key={post._id}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-[#111111] rounded-2xl overflow-hidden border border-[#1f1f1f] hover:border-[#59094466] shadow-lg hover:shadow-[0_0_20px_rgba(88,9,68,0.3)] transition-all"
            >
              <div className="overflow-hidden">
                <img
                  src={`/api/images/${post._id}`}
                  alt={post.title}
                  className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col justify-between h-[280px]">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.content}
                </p>
                <Link
                  href={`/blog/${post._id}`}
                  className="text-[#b075ff] font-medium hover:text-[#e0b2ff] transition-all"
                >
                  Read more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
