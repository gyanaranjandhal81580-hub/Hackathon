import React, { useState, useEffect } from "react";

// Import images from src folder
import b from "../assets/b.jpg";
import c from "../assets/c.jpg";
import d from "../assets/d.jpg";
import e from "../assets/e.jpg";
import f from "../assets/f.jpg";

const HomePage = () => {
  const images = [b, c, d, e, f];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-screen w-full bg-cover bg-center relative flex items-center justify-center transition-all duration-1000 "
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6 flex flex-col items-center">
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-8 max-w-xl w-full mb-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            କୃଷକ ସାଥୀ v2
          </h1>
          <p className="text-lg md:text-xl mb-6">
            ଓଡ଼ିଆ ସ୍ମାର୍ଟ କୃଷକ ସହାୟକ - Live Mandi, Weather, Govt Schemes & AI Guidance
          </p>
          <a
            href="/chat"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold"
          >
            ଆମ ସହ କଥା ହେବାକୁ ଆରମ୍ଭ କରନ୍ତୁ
          </a>
        </div>

        <div className="border rounded p-4 h-64 overflow-y-auto bg-white bg-opacity-10 w-full max-w-xl">
          <p className="text-white text-center mt-24">Voice & chat ready!</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
