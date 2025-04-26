import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import TextMessage from "./components/TextMessage";
import ImageMessage from "./components/ImageMessage";

export default function MessagingPage() {
  // Initial default messages
  const defaultMessages = [
    { type: "text", isUser: false, content: "Hello, how are you?" },
    { type: "text", isUser: true, content: "poggers bro" },
    { type: "text", isUser: false, content: "look at this cool picture" },
    { type: "image", isUser: false, content: "post-images/01.jpg" },
    { type: "text", isUser: true, content: "wow that's awesome!" },
  ];

  // Load messages from localStorage or use default messages
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    return savedMessages ? JSON.parse(savedMessages) : defaultMessages;
  });

  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = () => {
    if (inputText.trim() === "") return;

    setMessages([
      ...messages,
      { type: "text", isUser: true, content: inputText },
    ]);

    setInputText("");
  };

  return (
    <div className="vh-100 flex flex-col">
      {/* Navbar for mobile messaging */}
      <div className="navbar bg-light-black">
        <nav className="container flex flex-row justify-between align-center py-24">
          <Link to="/inbox">
            <div className="position-relative">
              <img
                className="width-18 svg-white"
                src="./backarrow.svg"
                alt="Back"
              />
            </div>
          </Link>

          <div className="flex flex-row align-center gap-8">
            <img
              className="profile-picture"
              src="profile-pictures/messenger-profile-picture.jpg"
              alt="Profile"
            />
            <p className="text-small weight-700">Player</p>
          </div>

          {/* Empty div to maintain the flex layout */}
          <div></div>
        </nav>
      </div>

      <div className="py-16 flex-1" style={{ overflowY: "auto" }}>
        <div className="container flex flex-col gap-16">
          {messages.map((message, index) =>
            message.type === "text" ? (
              <TextMessage
                key={index}
                isUser={message.isUser}
                message={message.content}
              />
            ) : (
              <div key={index} className="full-width">
                <ImageMessage
                  isUser={message.isUser}
                  imgmsg={message.content}
                />
              </div>
            )
          )}
          {/* Invisible element to scroll to */}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Bottom messaging area */}
      <div className="bg-light-black">
        <div className="container flex flex-row align-center gap-16 py-16">
          <input
            type="text"
            className="message-text-input rounded full-width"
            placeholder="Message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <img
            className="width-24 svg-white cursor-pointer"
            src="./message.svg"
            alt="Send Message"
            onClick={sendMessage}
          />
        </div>
      </div>
    </div>
  );
}
