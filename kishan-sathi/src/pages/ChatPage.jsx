import React, { useState, useEffect, useRef } from "react";

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support speech recognition. Please use Chrome or Edge.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    // Set language: Odia, fallback Hindi if not working
    recognition.lang = "or-IN";

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setMessage(transcript);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;
  }, []);

  const startListening = () => {
    if (!recognitionRef.current) return;
    try {
      recognitionRef.current.start();
      setListening(true);
    } catch (err) {
      console.error(err);
    }
  };

  const sendMessage = async () => {
    if (!message.trim()) return;

    // Add user message to chat history
    const userMessage = { text: message, sender: "user" };
    setChatHistory([...chatHistory, userMessage]);
    setMessage("");

    // TODO: Integrate ChatGPT API here to get AI reply
    // For now, we mock an AI response
    const aiReply = { text: `AI Response in Odia for: "${message}"`, sender: "ai" };
    setChatHistory((prev) => [...prev, userMessage, aiReply]);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-red-700">ଓଡ଼ିଆ AI Chat</h1>

      {/* Chat History */}
      <div className="border rounded p-4 h-96 overflow-y-auto bg-gray-50 mb-4">
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`mb-2 flex ${chat.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`inline-block p-2 rounded ${
                chat.sender === "user" ? "bg-red-200" : "bg-blue-800"
              }`}
            >
              {chat.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="flex gap-2 text-amber-50">
        <input
          type="text"
          className="flex-1 border p-2 rounded"
          placeholder="Type or speak here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={startListening}
          className={`px-4 py-2 rounded ${listening ? "bg-red-500" : "bg-green-500"} text-red`}
        >
          {listening ? "🎙️ Listening..." : "🎤 Speak"}
        </button>
        <button
          onClick={sendMessage}
          className="px-4 py-2 rounded bg-blue-500 text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
