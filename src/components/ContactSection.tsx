"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.success) {
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("❌ Failed to send message. Try again.");
    }
    setLoading(false);
  };

  return (
    <section className="w-full bg-black text-white">
      {/* HEADER SECTION */}
      <div className="relative w-full h-[45vh] flex flex-col justify-center items-center text-center bg-[#1a1a1a]">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-widest bg-gradient-to-l from-[#b05197] to-[#5f4ba6] bg-clip-text text-transparent text-sm mb-2"
        >
          Get in Touch
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-l from-[#b05197] to-[#5f4ba6] bg-clip-text text-transparent"
        >
          Let’s Discuss Your Writing Goals
        </motion.h2>
      </div>

      {/* CONTACT FORM SECTION */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 flex flex-col md:flex-row items-start gap-16 bg-black">
        {/* LEFT SIDE CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 space-y-6"
        >
          <h3 className="text-3xl font-extrabold leading-tight bg-gradient-to-l from-[#b05197] to-[#5f4ba6] bg-clip-text text-transparent">
            We’d Love to Hear From You
          </h3>
          <p className="text-gray-300 max-w-md">
            Whether it’s collaboration, content strategy, or iGaming projects,
            let’s build something world-class together.
          </p>

          <div className="space-y-4 mt-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-gradient-to-l from-[#b05197] to-[#5f4ba6]">
                <Mail className="text-[#0a0014]" size={20} />
              </div>
              <span>jastell312@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-gradient-to-l from-[#b05197] to-[#5f4ba6]">
                <Phone className="text-[#0a0014]" size={20} />
              </div>
              <span>+2348165710589</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-gradient-to-l from-[#b05197] to-[#5f4ba6]">
                <MapPin className="text-[#0a0014]" size={20} />
              </div>
              <span>Lagos, Abuja</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 bg-[#1a1a1a] border border-[#b76dff]/40 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_30px_#b76dff30] w-full"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 bg-gradient-to-r from-[#e879f9] to-[#8b5cf6] bg-clip-text text-transparent">
                Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-[#b76dff] focus:outline-none"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 bg-gradient-to-r from-[#e879f9] to-[#8b5cf6] bg-clip-text text-transparent">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-[#b76dff] focus:outline-none"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 bg-gradient-to-r from-[#e879f9] to-[#8b5cf6] bg-clip-text text-transparent">
                Message
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-[#b76dff] focus:outline-none"
                placeholder="Tell us about your project..."
                required
              />
            </div>
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={loading}
                className="w-full py-3 font-semibold rounded-md bg-gradient-to-l from-[#b05197] to-[#5f4ba6] text-white"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </div>
            {status && <p className="text-sm mt-3 text-center">{status}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
