import React, { useState, useEffect, useRef } from "react";

const assets = [
  {
    type: "video",
    url: "https://res.cloudinary.com/drj1fsjao/video/upload/8533110-uhd_3840_2160_25fps_lzn3qm.mp4",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2070&auto=format&fit=crop",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2070&auto=format&fit=crop",
  },
];

const NikeHero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Function to handle the 7-second transition and restart the clock
  const resetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, 7000); // 7 seconds
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);

  const handleNext = () => setIndex((prev) => (prev + 1) % assets.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + assets.length) % assets.length);

  const currentAsset = assets[index];

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center group">
      {/* 1. Dynamic Media Display */}
      {currentAsset.type === "video" ? (
        <video
          key={currentAsset.url}
          src={currentAsset.url}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
      ) : (
        <img
          key={currentAsset.url}
          src={currentAsset.url}
          className="absolute inset-0 w-full h-full object-cover animate-fade-in"
          alt="Nike Product"
        />
      )}

      {/* 2. User Controls (Visible on Hover) */}
      <div className="absolute inset-0 flex items-center justify-between px-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={handlePrev}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/30 flex items-center justify-center transition"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/30 flex items-center justify-center transition"
        >
          →
        </button>
      </div>

      {/* 3. Branding Content */}
      <div className="relative z-10 text-center text-white pointer-events-none">
        <h1 className="text-8xl md:text-9xl font-black italic uppercase tracking-tighter drop-shadow-2xl">
          Just Do It
        </h1>
        <div className="mt-8 flex justify-center pointer-events-auto">
          <button className="bg-white text-black font-bold py-3 px-10 rounded-full hover:scale-105 transition active:scale-95">
            Shop Now
          </button>
        </div>
      </div>

      {/* 4. Clickable Progress Bars */}
      <div className="absolute bottom-12 flex space-x-3 z-30">
        {assets.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 w-16 transition-all duration-700 ${
              i === index ? "bg-white" : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default NikeHero;
