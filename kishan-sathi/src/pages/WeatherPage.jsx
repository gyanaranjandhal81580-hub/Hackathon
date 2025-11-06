import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherPage = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          "https://api.open-meteo.com/v1/forecast?latitude=20.2961&longitude=85.8245&current_weather=true"
        );
        setWeather(res.data.current_weather);
      } catch {
        console.error("Weather fetch failed");
      }
    };
    fetchWeather();
  }, []);

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        ☁️ ଆବହାଓା ସୂଚନା
      </h2>
      {weather ? (
        <div className="bg-white shadow rounded p-6 inline-block">
          <p>🌡 ତାପମାତ୍ରା: {weather.temperature}°C</p>
          <p>💨 ପବନ ଗତି: {weather.windspeed} km/h</p>
          <p>🕓 ସମୟ: {new Date(weather.time).toLocaleString()}</p>
        </div>
      ) : (
        <p>⏳ ତଥ୍ୟ ଆଣୁଛି...</p>
      )}
    </div>
  );
};

export default WeatherPage;
