import { useState } from "react";
import { Link } from "react-router-dom";
import InboxUser from "./components/InboxUser.jsx";

export default function InboxPage() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

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

      <div className="large-container flex flex-col gap-8">
        {/* Search Input */}
        <input
          className="inbox-text-input full-width"
          placeholder="Search"
        ></input>

        <div className="bg-dark-black flex flex-col align-center margin-8 gap-8 padding-48">
          <InboxUser
            profileURL="profile-pictures/01.jpg"
            username="Ricardo"
            lastmsg="love your aura"
          />

          <InboxUser
            profileURL="profile-pictures/exercise-profile-01.jpg"
            username="Kenji"
            lastmsg="mood 💭"
          />

          <InboxUser
            profileURL="profile-pictures/exercise-profile-02.jpg"
            username="ExerciseMonster"
            lastmsg="slay queen 👑"
          />

          <InboxUser
            profileURL="profile-pictures/03.jpg"
            username="Dogooooo"
            lastmsg="go on king"
          />

          <InboxUser
            profileURL="profile-pictures/dog-profile-01.jpg"
            username="Manogod"
            lastmsg="preach..."
          />

          <InboxUser
            profileURL="profile-pictures/04.jpg"
            username="young17"
            lastmsg="don't say that"
          />

          <InboxUser
            profileURL="profile-pictures/cs-01.jpg"
            username="LinuxGod"
            lastmsg="give me the os"
          />

          <InboxUser
            profileURL="profile-pictures/cs-02.jpg"
            username="Pepe"
            lastmsg="just wow"
          />

          <InboxUser
            profileURL="profile-pictures/02.jpg"
            username="Crazy"
            lastmsg="cringe"
          />

          <InboxUser
            profileURL="profile-pictures/cs-03.jpg"
            username="TechJunkie"
            lastmsg="seen better..."
          />
        </div>

        {/* TODO: Integrate popup to actually work */}

        {/* Popup for choosing a person to message*/}
        {showPopup && (
          <div className="popup-overlay flex flex-row" onClick={togglePopup}>
            <div className="popup-menu">
              <p className="text-medium weight-700">
                Choose a person to message
              </p>
              <ul
                className="flex flex-row gap-128 margin-8 padding-16 align-center justify-center"
                style={{ listStyle: "none" }}
              >
                {/*These could (and should) be turned into components I just didn't*/}
                <li>
                  <Link to="/messaging" className="text-no-underline">
                    <img
                      className="width-64 rounded-full margin-16 large-circle-icon"
                      src="public/profile-picture-01.jpg"
                    />
                    <p className="text-small weight-700">User</p>
                  </Link>
                </li>
                <li>
                  <Link to="/messaging" className="text-no-underline">
                    <img
                      className="width-64 rounded-full margin-16 large-circle-icon"
                      src="public/profile-picture-04.jpg"
                    />
                    <p className="text-small weight-700">User</p>
                  </Link>
                </li>
                <li>
                  <Link to="/messaging" className="text-no-underline">
                    <img
                      className="width-64 rounded-full margin-16 large-circle-icon"
                      src="public/profile-picture-02.jpg"
                    />
                    <p className="text-small weight-700">User</p>
                  </Link>
                </li>
                <li>
                  <Link to="/messaging" className="text-no-underline">
                    <img
                      className="width-64 rounded-full margin-16 large-circle-icon"
                      src="public/profile-picture-03.jpg"
                    />
                    <p className="text-small weight-700">User</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
