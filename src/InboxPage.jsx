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
      {/* Navbar for mobile messaging */}
      {/*I just copied what Sean had here*/}
      <div className="navbar bg-light-black">
        <nav className="container flex flex-row justify-between align-center py-24">
          <Link to="/inbox">
            <div className="position-relative">
              <img
                className="width-32 svg-white"
                src="./backarrow.svg"
                alt="Back"
              />
            </div>

          </Link>
          <div className="flex flex-row align-center gap-8">
            <p className="text-small weight-700">User</p>
          </div>

          <img
            className="width-32 svg-white"
            src="./plusnobox.svg"
            alt="Send Post"
            onClick={togglePopup}
          />
        </nav>
      </div>

      <div className="bg-light-gray flex flex-col align-center gap-16 padding-16">
        <p>Search bar here</p>
      </div>

      <div className="bg-dark-black flex flex-col align-center margin-8 gap-8 padding-48">
        <InboxUser lastmsg="wow that's awesome!"/>
        <InboxUser lastmsg="wow that's awesome!"/>
        <InboxUser lastmsg="wow that's awesome!"/>
        <InboxUser lastmsg="wow that's awesome!"/>
        <InboxUser lastmsg="wow that's awesome!"/>
        <InboxUser lastmsg="wow that's awesome!"/>
        <InboxUser lastmsg="wow that's awesome!"/>
      </div>

      {/* Popup for choosing a person to message*/}
      {showPopup && (
        <div className="popup-overlay flex flex-row" onClick={togglePopup}>
          <div className="popup-menu">
            <p className="text-medium weight-700">Choose a person to message</p>
            <ul className="flex flex-row gap-128 margin-8 padding-16 align-center justify-center" style={{listStyle: 'none'}}>
              {/*These could (and should) be turned into components I just didn't*/}
                <li>
                  <Link to="/messaging" className="text-no-underline">
                  <img
                    className="width-64 rounded-full margin-16 large-circle-icon" 
                    src="public/profile-picture-01.jpg"/>
                    <p className="text-small weight-700">User</p>
                  </Link>
                </li>
                <li>
                  <Link to="/messaging" className="text-no-underline">
                  <img
                      className="width-64 rounded-full margin-16 large-circle-icon" 
                      src="public/profile-picture-04.jpg"/>
                      <p className="text-small weight-700">User</p>
                  </Link>
                </li>
                <li>
                  <Link to="/messaging" className="text-no-underline">
                  <img
                      className="width-64 rounded-full margin-16 large-circle-icon" 
                      src="public/profile-picture-02.jpg"/>
                      <p className="text-small weight-700">User</p>
                  </Link>
                </li>
                <li>
                  <Link to="/messaging" className="text-no-underline">
                  <img
                      className="width-64 rounded-full margin-16 large-circle-icon" 
                      src="public/profile-picture-03.jpg"/>
                      <p className="text-small weight-700">User</p>
                  </Link>
                </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
