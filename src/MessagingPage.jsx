import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextMessage from "./components/TextMessage";
import ImageMessage from "./components/ImageMessage";

export default function MessagingPage() {
  const sendMessage = () => {
    //TODO: Implement send message functionality
  }

  return (
    <div>
      {/* Navbar for mobile messaging */}
      <div className="navbar bg-light-black">
        <nav className="container flex flex-row justify-between align-center py-24">
          {/* Back button to navigate to the inbox page  (ask nolan ab where to get the svg)*/}
          <Link to="/inbox">
            <div className="position-relative">
              <img
                className="width-32 svg-white"
                src="./back-arrow.svg"
                alt="Back"
              />
            </div>
          </Link>

          {/* User profile and profile picture */}
          <div className = "flex flex-row align-center">
            <img className="profile-picture" src="profile-picture-01.jpg" alt="Profile" />
            <p className="text-small weight-700">User</p>
          </div>

          {/* plus to send a specific post to a user (ask nolan ab where to get the svg)*/}
          <img
            className="width-32 svg-white"
            src="./plus.svg"
            alt="Send Post"
          />
        </nav>
      </div>

      {/* Main messaging area */}
      <div className="message-grid py-16">
        <div classname="container flex flex-col gap-32">
          {/* Message container (where the conversation actually is) */}
            <TextMessage isUser={false} message="Hello, how are you?" />
            <TextMessage isUser={true} message="poggers bro" />
            <TextMessage isUser={false} message="look at this cool picture" />
            <ImageMessage isUser={false} imgmsg="post-images/01.jpg" />
            <TextMessage isUser={true} message="wow that's awesome!" />
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
          />

          {/* Send button */}
          <img
            className="width-32 svg-white"
            src="./send.svg"
            alt="Send Message"
            onClick={sendMessage}
          />
        </div>
      </div>
    </div>
  );
}
