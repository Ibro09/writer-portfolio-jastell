"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface Section {
  title: string;
  content: string; // text containing '\n' for new lines
}

interface BlogPost {
  _id: string;
  title: string;
  author?: string;
  content?: string;
  sections?: Section[];
  image?: string;
  createdAt?: string;
}

export default function BlogPostPage() {
  const params = useParams() as { id?: string };
  const id = params?.id;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/posts/${id}`);
        if (!res.ok) throw new Error("Failed to fetch post");
        const data: BlogPost = await res.json();
        setPost(data);
      } catch (err) {
        console.error("Error fetching post:", err);
        setError("Could not load the article. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center flex-col">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-purple-500 mx-auto mb-4" />
          <p>Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            {error || "Article not found"}
          </h1>
          <Link
            href="/blog"
            className="text-[#b075ff] hover:text-[#e0b2ff] transition-all"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const date = post.createdAt
    ? new Date(post.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown date";

  const imageSrc = post.image
    ? post.image.startsWith("/api")
      ? post.image
      : `/api/images/${post._id}`
    : undefined;

  const renderTextWithNewlines = (text?: string) =>
    (text ?? "").split("/n").map((line, idx) => (
      <p key={idx} className="text-base md:text-lg whitespace-pre-wrap">
        {line}
      </p>
    ));

  return (
    <>
      <main className="min-h-screen bg-[#0A0A0A] text-gray-200 px-6 md:px-16 min-w-full">
        <div className="w-full flex justify-center">
          <Navbar />
        </div>

        <section className="max-w-4xl mx-auto mb-16 text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-l from-[#590944] to-[#382871] bg-clip-text text-transparent"
          >
            {post.title}
          </motion.h1>
          <p className="text-gray-400">
            By {post.author ?? "jastell"} • {date}
          </p>
        </section>

        {imageSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-5xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(88,9,68,0.3)]"
          >
            <img
              src={imageSrc}
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        )}

        <article className="max-w-4xl mx-auto space-y-6 leading-relaxed text-gray-300 mb-20">
          {renderTextWithNewlines(post.content)}
        </article>

        {/* Sections (if provided) */}
        {post.sections?.map((section, sidx) => (
          <article
            key={sidx}
            className="max-w-4xl mx-auto space-y-6 leading-relaxed text-gray-300 mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              {section.title}
            </h2>
            {renderTextWithNewlines(section.content)}
          </article>
        ))}

        <div className="max-w-4xl mx-auto mt-16 flex justify-center mb-20">
          <motion.a
            href="/blog"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-l from-[#590944] to-[#382871] text-white px-8 py-3 rounded-full font-semibold tracking-wide shadow-[0_0_20px_rgba(88,9,68,0.4)] hover:shadow-[0_0_30px_rgba(88,9,68,0.6)] transition-all"
          >
            ← Back to Blog
          </motion.a>
        </div>
      </main>
      <Footer />
    </>
  );
}
