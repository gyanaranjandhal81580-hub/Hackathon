import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import WeatherPage from "./pages/WeatherPage";
import MandiPage from "./pages/MandiPage";
import SchemesPage from "./pages/SchemesPage";
import CropPage from "./pages/CropPage";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/Home" element={<HomePage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/weather" element={<WeatherPage />} />
      <Route path="/mandi" element={<MandiPage />} />
      <Route path="/schemes" element={<SchemesPage />} />
      <Route path="/crop" element={<CropPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
