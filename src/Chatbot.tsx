import { useState } from "react";
import "./ChatBot.css";

export default function ChatBot() {

  const [open, setOpen] = useState(false);

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
            <p>Hello! 👋</p>
            <p>
              I am the YoSeeds AI assistant.
            </p>
            <p>
              Ask me about seeds, plants, and bundles 🌿
            </p>
          </div>


          <div className="chat-footer">

            <input
              placeholder="Type your message..."
            />

            <button>
              Send
            </button>

          </div>

        </div>
      )}

    </>
  );
}
