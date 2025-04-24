import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextMessage from "./components/TextMessage";
import ImageMessage from "./components/ImageMessage";

export default function MessagingPage() {
  //this is the state for the messages that are sent and received in the chat
  const [messages, setMessages] = useState([
    { type: "text", isUser: false, content: "Hello, how are you?" },
    { type: "text", isUser: true, content: "poggers bro" },
    { type: "text", isUser: false, content: "look at this cool picture" },
    { type: "image", isUser: false, content: "post-images/01.jpg" },
    { type: "text", isUser: true, content: "wow that's awesome!" },
  ]);

  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    if (inputText.trim() === "") return;

    setMessages([...messages, { type: "text", isUser: true, context: inputText}]);

    setInputText("");
  };

  return (
    <div>
      {/* Navbar for mobile messaging */}
      <div className="navbar bg-light-black">
        <nav className="container flex flex-row justify-between align-center py-24">
          {/* Back button to navigate to the inbox page */}
          <Link to="/inbox">
            <div className="position-relative">
              <img
                className="width-32 svg-white"
                src="./backarrow.svg"
                alt="Back"
              />
            </div>
          </Link>

          {/* User profile and profile picture */}
          <div className = "flex flex-row align-center">
            <img className="profile-picture" src="profile-picture-01.jpg" alt="Profile" />
            <p className="text-small weight-700">User</p>
          </div>

          {/* plus to send a specific post to a user */}
          <img
            className="width-32 svg-white"
            src="./plusnobox.svg"
            alt="Send Post"
          />
        </nav>
      </div>

      {/* Main messaging area */}
      <div className="message-grid py-16">
        <div classname="container flex flex-col gap-32">
          {/* Message container (where the conversation actually is)
          determines if if message is a TextMessage or an ImageMessage */}
            {messages.map((message, index) =>
            message.type === "text" ? (
              <TextMessage
                key={index}
                isUser={message.isUser}
                message={message.content}
              />
            ) : (
              <ImageMessage
                key={index}
                isUser={message.isUser}
                imageSrc={message.content}
              />
            )
          )}
        </div>
      </div>

      {/* Bottom messaging area */}
      <div className="bottom-message-area bg-light-black">
        <div className="container flex flex-row align-center gap-16 py-16">
          {/* Text input for sending messages */}
          <input
            type="text"
            className="message-input"
            placeholder="Message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

          {/* Send button */}
          <img
            className="width-32 svg-white"
            src="./message.svg"
            alt="Send Message"
            onClick={sendMessage}
          />
        </div>
      </div>
    </div>
  );
}
