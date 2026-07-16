import { useState } from "react";
import "./ChatBot.css";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! 👋 I am YoSeeds AI. Ask me about seeds, plants, or our bundles 🌱"
    }
  ]);

  function sendMessage() {
    if (!message.trim()) return;

    setMessages([
      ...messages,
      {
        sender: "user",
        text: message
      },
      {
        sender: "ai",
        text: "Thanks for your message! 🌿 I am still learning, but I can help you with YoSeeds products and plant questions."
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
                  {msg.sender === "ai"
                    ? "YoSeeds AI:"
                    : "You:"}
                </b>{" "}
                {msg.text}
              </p>
            ))}

          </div>


          <div className="chat-footer">

            <input
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
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


