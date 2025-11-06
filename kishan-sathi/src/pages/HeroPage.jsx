import React from "react";


const HeroPage = () => {
  return (
    <div
      className="h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url("ox.jpg")` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">କୃଷକ ସାଥୀ v2</h1>
        <p className="text-lg md:text-2xl mb-6">
          ଓଡ଼ିଆ ସ୍ମାର୍ଟ କୃଷକ ସହାୟକ - Live Mandi, Weather, Govt Schemes & AI Guidance
        </p>
        <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded text-white font-semibold transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroPage;
