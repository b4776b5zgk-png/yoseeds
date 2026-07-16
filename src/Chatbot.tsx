import { useState } from "react";
import "./ChatBot.css";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! 👋 I am YoSeeds AI 🌱 Ask me about seeds, bundles, or plant care."
    }
  ]);

  function getReply(text: string) {
    const msg = text.toLowerCase();

    if (msg.includes("price") || msg.includes("bundle")) {
      return "🌱 YoSeeds bundles: 10 JD (1 indoor + 1 outdoor), 20 JD (2 indoor + 2 outdoor), and 50 JD (4 indoor + 2 outdoor).";
    }

    if (msg.includes("water")) {
      return "💧 Most plants need regular watering, but avoid overwatering. Check the soil before adding water.";
    }

    if (msg.includes("sun") || msg.includes("light")) {
      return "☀ Plants need the right amount of sunlight. Indoor plants usually prefer bright indirect light.";
    }

    if (msg.includes("seed") || msg.includes("plant")) {
      return "🌿 YoSeeds provides easy-to-grow seed bundles to help you start a greener lifestyle.";
    }

    return "🌱 Thanks for asking! I can help with YoSeeds products, planting tips, watering, and sunlight advice.";
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
            🌱 YoSeeds AI
          </div>


          <div className="chat-body">
            {messages.map((msg, index) => (
              <p key={index}>
                <b>
                  {msg.sender === "ai" ? "YoSeeds AI:" : "You:"}
                </b>{" "}
                {msg.text}
              </p>
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


