"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CryptoAddictionPage() {
  return (
    <>
      <main className="min-h-screen bg-[#0A0A0A] text-gray-200 px-6 md:px-16 min-w-full mb-10">
        {/* Header */}
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
            How to Spot Crypto Betting Addiction
          </motion.h1>
          <p className="text-gray-400">By Jastell • july 2024</p>
        </section>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(88,9,68,0.3)]"
        >
          <Image
            src="/images/blog2.png"
            alt="Crypto Betting Addiction Awareness"
            className="w-full h-[400px] object-cover"
          />
        </motion.div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto space-y-10 leading-relaxed text-gray-300">
          <p>
            Betting is fun and sometimes, you can get lost in all the fun of it
            and lose track of your funds. This is one thing you should avoid no
            matter how interesting crypto betting might be to you. You shouldn&apos;t
            be so attached to crypto gaming to the extent of taking dangerous
            leaps when playing.
          </p>

          <p>
            That said, it&apos;s about time you look at ways to stop or prevent a
            crypto gaming addiction. This post will give you all the heads-up
            concerning a betting addiction and how to keep it in check. If
            you&apos;re having problems controlling your love for betting, here&apos;s
            your ultimate guide.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-white mt-10">
            What Is a Crypto Betting Addiction?
          </h2>
          <p>
            Crypto betting addiction occurs from regular, problematic, or
            insistent crypto betting. This behavior affects the gambler, their
            loved ones, and even society at large. It affects both adults and
            teenagers — many try to stop, but often continue despite
            consequences.
          </p>

          <p>
            If done within reasonable bounds, crypto betting is generally
            accepted by society. However, compulsive crypto betting is a
            different story — one that leads to emotional and financial strain.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            How to Know if You Have a Crypto Betting Addiction
          </h2>
          <ul className="list-disc list-inside space-y-4">
            <li>
              Feeling the urge to gamble constantly or being unable to stop,
              even after losses.
            </li>
            <li>
              Thinking about betting all the time or needing to increase the
              stakes to feel the same excitement.
            </li>
            <li>
              Hiding or lying about your gambling habits to friends or family.
            </li>
            <li>
              Borrowing money or putting relationships, work, or education at
              risk due to crypto betting.
            </li>
            <li>
              Experiencing brief “remission” periods before relapsing again.
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            How to Avoid Betting Addiction on Crypto Betting Sites
          </h2>
          <p>
            There is no guaranteed way to prevent addiction, but you can lower
            your risk significantly with awareness and discipline. Here&apos;s how:
          </p>

          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Check Your Mental Well-being:</strong> Be honest about
              your emotional state and betting habits. Seek help early if
              gambling becomes a coping mechanism.
            </li>
            <li>
              <strong>Limit Betting Frequency:</strong> Set strict time slots —
              once or twice weekly — and avoid &quot;just one quick look&quot; moments.
            </li>
            <li>
              <strong>Set Spending Caps:</strong> Decide how much you can lose
              without harm. Many platforms allow deposit limits; use them.
            </li>
            <li>
              <strong>Don&apos;t View Betting as Income:</strong> Remember, it&apos;s
              chance-based — not a career path. Never gamble with rent or
              savings.
            </li>
            <li>
              <strong>Replace the Habit:</strong> Reconnect with friends, pick
              up old hobbies, or explore new interests that don&apos;t involve
              betting.
            </li>
          </ol>

          <p>
            If self-help methods fail, consider professional therapy or
            addiction counseling. Relapse can happen, but with guidance and
            community, recovery is absolutely possible.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Conclusion
          </h2>
          <p>
            You should never let crypto betting addiction add to your list of
            problems. With awareness, limits, and support, it&apos;s possible to
            enjoy the thrill of crypto gaming responsibly — without losing
            control.
          </p>
        </article>

        {/* Back / CTA */}
        <div className="max-w-4xl mx-auto mt-16 flex justify-center">
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-l from-[#590944] to-[#382871] text-white px-8 py-3 rounded-full font-semibold tracking-wide shadow-[0_0_20px_rgba(88,9,68,0.4)] hover:shadow-[0_0_30px_rgba(88,9,68,0.6)] transition-all"
          >
            ← Back Home
          </motion.a>
        </div>
      </main>
      <Footer />
    </>
  );
}
