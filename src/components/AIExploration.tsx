import { useEffect, useRef, useState } from "react";

type Section = {
  id: string;
  label: string;
};

const sections: Section[] = [
  { id: "ai", label: "AI Exploration" },
  { id: "igaming-writing", label: "iGaming Writing" },
  { id: "igaming-tutorials", label: "iGaming Tutorials" },
];

export default function ScrollTabs() {
  const [activeTab, setActiveTab] = useState<string>(sections[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries.reduce((max, entry) =>
          entry.intersectionRatio > max.intersectionRatio ? entry : max
        );
        if (mostVisible && mostVisible.isIntersecting) {
          setActiveTab(mostVisible.target.id);
        }
      },
      { threshold: [0, 0.5, 1] }
    );

    sections.forEach((s) => {
      const el = sectionRefs.current[s.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-black text-white rounded-3xl shadow-xl overflow-hidden max-w-6xl mx-auto my-10 border border-purple-500/20">
      {/* Mobile Tabs */}
      <div className="md:hidden sticky top-0 z-20 bg-black/80 backdrop-blur border-b border-purple-500/20 flex justify-between px-2 py-2">
        {sections.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleScrollTo(tab.id)}
            className={`flex-1 px-2 py-2 text-xs font-medium rounded transition-all duration-300
              ${
                activeTab === tab.id
                  ? "text-purple-400 font-bold bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border-b-2 border-purple-500"
                  : "text-gray-400 hover:text-purple-300"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex">
        {/* Desktop Sidebar Tabs */}
        <div className="hidden md:flex flex-col w-1/4 bg-gradient-to-b from-purple-950/40 to-black sticky top-10 h-fit p-3 rounded-xl border-r border-purple-500/20">
          {sections.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleScrollTo(tab.id)}
              className={`p-4 text-left text-sm font-medium rounded-md transition-all duration-300 mb-2
                ${
                  activeTab === tab.id
                    ? "text-purple-300 bg-gradient-to-r from-purple-800/40 to-indigo-800/40 border-l-4 border-purple-500 shadow"
                    : "text-gray-400 hover:bg-purple-900/10"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Scroll Sections */}
        <div
          className="w-full md:w-3/4 overflow-y-auto max-h-[90vh] scroll-smooth space-y-10 p-4 md:p-10 
  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {/* --- AI EXPLORATION --- */}
          <section
            id="ai"
            ref={(el: HTMLElement | null) => {
              sectionRefs.current["ai"] = el;
            }}
            className=" flex flex-col justify-center"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              AI Exploration
            </h2>
            <p className="text-gray-400 mb-5 max-w-xl">
              Exploring how AI reshapes content creation ,from prompt
              engineering and automation to storytelling enhanced by smart
              tools. Where creativity meets innovation.
            </p>
            <ul className="space-y-3 text-purple-300">
              <li>🤖 Prompt Engineering Insights</li>
              <li>⚙️ Automation for Writers</li>
              <li>💡 Exploring AI Tools & Use Cases</li>
            </ul>
          </section>

          {/* --- IGAMING WRITING --- */}
          <section
            id="igaming-writing"
            ref={(el: HTMLElement | null) => {
              sectionRefs.current["igaming-writing"] = el;
            }}
            className="min-h-[100vh] flex flex-col justify-center"
          >
            <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              iGaming Writing
            </h2>
            <p className="text-gray-400 mb-6">
              Turning complex casino and sportsbook topics into clear, engaging,
              SEO-optimized content that drives traffic and builds trust.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <ArticleCard
                title="Top 10 Slot Games of 2025"
                desc="Trends shaping the next wave of online slot mechanics and player engagement."
              />
              <ArticleCard
                title="Understanding RTP in Online Casinos"
                desc="A beginner-friendly breakdown of Return to Player (RTP) percentages and why they matter."
              />
              <ArticleCard
                title="Responsible Gambling Content Guide"
                desc="Creating awareness-driven, ethical gaming content that informs and protects players."
              />
            </div>
          </section>

          {/* --- IGAMING TUTORIALS --- */}
          <section
            id="igaming-tutorials"
            ref={(el: HTMLElement | null) => {
              sectionRefs.current["igaming-tutorials"] = el;
            }}
            className="min-h-[100vh] flex flex-col justify-center"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              iGaming Tutorials
            </h2>
            <p className="text-gray-400 mb-6">
              Simplifying complex iGaming concepts through short, insightful
              videos that make learning engaging and practical.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["htVBi7mVTOc", "Ked_qwdKMxk", "tZ3TEQFuE8Y"].map((id, i) => (
                <iframe
                  key={i}
                  className="rounded-xl w-full aspect-video border border-purple-500/20"
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`Tutorial ${i + 1}`}
                  allowFullScreen
                ></iframe>
              ))}
            </div>

            <a
              href="https://www.youtube.com/@jastellgaming"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:scale-105 transition-transform text-center"
            >
              Watch More Tutorials on YouTube
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}

// Reusable card
interface ArticleCardProps {
  title: string;
  desc: string;
}

function ArticleCard({ title, desc }: ArticleCardProps) {
  return (
    <div className="p-5 bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-md border border-purple-500/20 hover:border-purple-400/40 transition-all">
      <h3 className="font-semibold text-purple-300 mb-1">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
      <button className="mt-3 text-sm text-purple-400 font-medium hover:underline">
        Read More
      </button>
    </div>
  );
}
