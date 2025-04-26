import { useState } from "react";
import { Link } from "react-router-dom";
import InboxUser from "./components/InboxUser.jsx";

export default function InboxPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Message data array
  const messages = [
    {
      username: "Ricardo",
      lastmsg: "love your aura",
      profileURL: "profile-pictures/01.jpg",
    },
    {
      username: "Kenji",
      lastmsg: "mood 💭",
      profileURL: "profile-pictures/exercise-profile-01.jpg",
    },
    {
      username: "ExerciseMonster",
      lastmsg: "slay queen 👑",
      profileURL: "profile-pictures/exercise-profile-02.jpg",
    },
    {
      username: "Dogooooo",
      lastmsg: "go on king",
      profileURL: "profile-pictures/03.jpg",
    },
    {
      username: "Manogod",
      lastmsg: "preach...",
      profileURL: "profile-pictures/dog-profile-01.jpg",
    },
    {
      username: "young17",
      lastmsg: "don't say that",
      profileURL: "profile-pictures/04.jpg",
    },
    {
      username: "LinuxGod",
      lastmsg: "give me the os",
      profileURL: "profile-pictures/cs-01.jpg",
    },
    {
      username: "Pepe",
      lastmsg: "just wow",
      profileURL: "profile-pictures/cs-02.jpg",
    },
    {
      username: "Crazy",
      lastmsg: "cringe",
      profileURL: "profile-pictures/02.jpg",
    },
    {
      username: "TechJunkie",
      lastmsg: "seen better...",
      profileURL: "profile-pictures/cs-03.jpg",
    },
  ];

  // Filter messages based on search query
  const filteredMessages = messages.filter(
    (message) =>
      message.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.lastmsg.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="navbar bg-light-black">
        <nav className="container flex flex-row justify-between align-center py-24">
          <Link to="/home">
            <div className="position-relative">
              <img
                className="width-18 svg-white"
                src="./backarrow.svg"
                alt="Back"
              />
            </div>
          </Link>

          <div className="flex flex-row align-center gap-8">
            <p className="text-medium weight-700">Messages</p>
          </div>

          {/* Empty div to maintain the flex layout */}
          <div></div>
        </nav>
      </div>

      <div className="large-container flex flex-col gap-8 mt-8">
        {/* Search Input */}
        <input
          className="inbox-text-input full-width"
          placeholder="Search messages"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="bg-dark-black flex flex-col align-center margin-8 gap-8 padding-48">
          {filteredMessages.map((message, index) => (
            <InboxUser
              key={index}
              profileURL={message.profileURL}
              username={message.username}
              lastmsg={message.lastmsg}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
