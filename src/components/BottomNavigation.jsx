import { useState } from "react";

export default function BottomNavigation() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bottom-navigation">
      <div className="container">
        <div className="nav-items flex flex-row justify-around align-center py-12">
          <div
            className={`nav-item flex flex-col align-center gap-4 cursor-pointer ${
              activeTab === "home" ? "active" : ""
            }`}
            onClick={() => handleTabClick("home")}
          >
            <img className="width-24 svg-white" src="./home.svg" alt="Home" />
            <p className="text-extra-small weight-500">Home</p>
          </div>

          <div
            className={`nav-item flex flex-col align-center gap-4 cursor-pointer ${
              activeTab === "explore" ? "active" : ""
            }`}
            onClick={() => handleTabClick("explore")}
          >
            <img
              className="width-24 svg-white"
              src="./explore.svg"
              alt="Explore"
            />
            <p className="text-extra-small weight-500">Explore</p>
          </div>

          <div
            className={`nav-item flex flex-col align-center gap-4 cursor-pointer ${
              activeTab === "create" ? "active" : ""
            }`}
            onClick={() => handleTabClick("create")}
          >
            <div className="circle-icon flex justify-center align-center">
              <img
                className="width-24 svg-white"
                src="./plus.svg"
                alt="Create"
              />
            </div>
            <p className="text-extra-small weight-500">Create</p>
          </div>

          <div
            className={`nav-item flex flex-col align-center gap-4 cursor-pointer ${
              activeTab === "notifications" ? "active" : ""
            }`}
            onClick={() => handleTabClick("notifications")}
          >
            <img
              className="width-24 svg-white"
              src="./bell.svg"
              alt="Notifications"
            />
            <p className="text-extra-small weight-500">Notifications</p>
          </div>

          <div
            className={`nav-item flex flex-col align-center gap-4 cursor-pointer ${
              activeTab === "profile" ? "active" : ""
            }`}
            onClick={() => handleTabClick("profile")}
          >
            <img
              className="width-24 svg-white"
              src="./profile.svg"
              alt="Profile"
            />
            <p className="text-extra-small weight-500">Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}
