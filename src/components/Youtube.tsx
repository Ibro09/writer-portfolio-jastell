
import React from "react";

const YouTubeSection: React.FC = () => {
  const videos = ["htVBi7mVTOc", "Ked_qwdKMxk", "tZ3TEQFuE8Y", "R1db9Bgmlwk"];

  return (
    <div className="min-h-screen w-full bg-[#0b0b10] text-white flex flex-col items-center justify-center py-16 px-6 md:px-12">
      {/* --- Heading --- */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
        Vlog 
      </h2>

      <p className="text-gray-400 max-w-2xl text-center mb-12">
        Simplifying complex iGaming topics through short, engaging videos , from casino guides to betting insights and content strategy tips.
      </p>

      {/* --- Video Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {videos.map((id, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden border border-purple-500/20 shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300"
          >
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${id}`}
              title={`Tutorial ${i + 1}`}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      {/* --- YouTube Link --- */}
      <div className="mt-16">
        <a
          href="https://www.youtube.com/@jastellgaming"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:scale-105 transition-transform shadow-lg"
        >
          Watch More on YouTube
        </a>
      </div>
    </div>
  );
};

export default YouTubeSection;
