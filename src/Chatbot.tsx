import { useState } from "react";
import "./ChatBot.css";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! 👋 Welcome to YoSeeds AI 🌱 I can help you with seeds, bundles, and plant care."
    }
  ]);

  function getReply(text: string) {
    const msg = text.toLowerCase();

    if (msg.includes("price") || msg.includes("bundle") || msg.includes("cost")) {
      return "🌱 YoSeeds bundles: 10 JD (1 indoor + 1 outdoor), 20 JD (2 indoor + 2 outdoor), and 50 JD (4 indoor + 2 outdoor).";
    }

    if (msg.includes("about") || msg.includes("yoseeds")) {
      return "🌿 YoSeeds is an eco-focused brand helping people grow greener lifestyles with easy-to-grow indoor and outdoor seed bundles.";
    }

    if (msg.includes("water")) {
      return "💧 Water plants when the soil starts becoming dry. Avoid adding too much water.";
    }

    if (msg.includes("sun") || msg.includes("light")) {
      return "☀ Most plants need good sunlight. Indoor plants usually prefer bright indirect light.";
    }

    if (msg.includes("seed") || msg.includes("plant")) {
      return "🌱 Our seed bundles make planting simple, affordable, and accessible for everyone.";
    }

    return "🌿 I can help you with YoSeeds products, bundles, planting tips, watering, and sunlight advice.";
  }

  function sendMessage() {
    if (!message.trim()) return;

    const reply = getReply(message);

    setMessages([
      ...messages,
      {
        sender: "user",
        text: message
      },
      {
        sender: "ai",
        text: reply
      }
    ]);

    setMessage("");
  }

  return (
    <>
      <div
        className="chatbot-button"
        onClick={() => setOpen(!open)}
      >
        🌱
      </div>

      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <span className="welcome-icon">🌱</span>
            <strong>YoSeeds AI</strong>
            <small>Here to help you grow 🌿</small>
          </div>

          <div className="chat-body">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.sender === "ai"
                    ? "ai-message"
                    : "user-message"
                }
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-footer">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Ask YoSeeds AI..."
            />

            <button onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
