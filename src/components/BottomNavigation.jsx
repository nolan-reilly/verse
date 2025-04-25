import { useState } from "react";
import { Link } from "react-router-dom";

export default function BottomNavigation() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bottom-navigation">
      <div className="container">
        <div className="flex flex-row justify-around align-center py-8">
          <div
            className={`nav-item flex flex-col align-center gap-4 cursor-pointer ${
              activeTab === "home" ? "active" : ""
            }`}
            onClick={() => handleTabClick("home")}
          >
            <Link to="/home">
              <img className="width-24 svg-white" src="./home.svg" alt="Home" />
            </Link>
          </div>

          <div
            className={`nav-item flex flex-col align-center gap-4 cursor-pointer ${
              activeTab === "explore" ? "active" : ""
            }`}
            onClick={() => handleTabClick("explore")}
          >
            <Link to="/search">
              <img
                className="width-32 svg-white"
                src="./bold-search.svg"
                alt="Explore"
              />
            </Link>
          </div>

          <div
            className={`nav-item flex flex-col align-center gap-4 cursor-pointer ${
              activeTab === "create" ? "active" : ""
            }`}
            onClick={() => handleTabClick("create")}
          >
            <div className="flex justify-center align-center">
              <Link to="#">
                <img
                  className="width-24 svg-white"
                  src="./create.svg"
                  alt="Create"
                />
              </Link>
            </div>
          </div>

          <div
            className={`nav-item flex flex-col align-center gap-4 cursor-pointer ${
              activeTab === "profile" ? "active" : ""
            }`}
            onClick={() => handleTabClick("profile")}
          >
            <div className="flex justify-center align-center">
              <Link to="/profile">
                <img
                  className="width-24 svg-white"
                  src="./profile.svg"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
