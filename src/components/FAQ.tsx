import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What makes your iGaming content different?",
    answer:
      "I combine industry knowledge, SEO precision, and storytelling to create engaging articles that appeal to players and perform well on search engines.",
  },
  {
    question: "Do you use AI tools in your writing process?",
    answer:
      "Yes, I use AI for research, idea generation, and optimization, but every piece is reviewed and refined manually to ensure authenticity and tone.",
  },
  {
    question: "Can you handle bulk or recurring content projects?",
    answer:
      "Absolutely. I specialize in consistent large-scale content delivery for casinos, affiliates, and betting platforms with quick turnaround times.",
  },
  {
    question: "How do you ensure SEO without keyword stuffing?",
    answer:
      "I focus on intent-first writing where keywords are integrated naturally into meaningful, well-structured content that keeps readers engaged.",
  },
  {
    question: "Do you write for both casinos and sportsbooks?",
    answer:
      "Yes, I create tailored content for casino, sportsbook, esports, and crypto gaming platforms, each crafted to match its audience and tone.",
  },
  {
    question: "Can you help optimize existing content?",
    answer:
      "Definitely. I perform detailed content audits to improve keyword use, structure, and readability while maintaining your brand’s voice.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center w-full">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-5xl font-bold bg-gradient-to-l from-[#b05197] to-[#5f4ba6] bg-clip-text text-transparent">
          FAQs
        </h2>
      </div>

      <div className="max-w-3xl w-full space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-xl border-purple-500/40 transition-all duration-300 hover:border-purple-400 ${
              openIndex === index
                ? "bg-gradient-to-br from-purple-900/30 to-indigo-900/30"
                : ""
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center px-6 py-6 text-left"
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              {openIndex === index ? (
                <Minus className="text-purple-400" />
              ) : (
                <Plus className="text-purple-400" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-6 pb-6 text-gray-300 border-t border-purple-500/20">
                <p className="pt-4">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
