import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar({
  selectedCommunities,
  availableCommunities,
  currentCommunity,
  onAddCommunity,
  onSelectCommunity,
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Effect to control body scrolling when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }

    // Cleanup function to ensure we remove the class when component unmounts
    return () => {
      document.body.classList.remove("sidebar-open");
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      )}

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="flex flex-row justify-end mt-28">
          <img
            className="width-18 svg-white cursor-pointer"
            src="./cross.svg"
            alt="Close"
            onClick={closeSidebar}
          />
        </div>

        <div className="sidebar-content flex flex-col gap-44 py-8">
          {/* Homepage View Section */}
          <div className="mb-32">
            <div>
              <p className="text-small weight-500 mb-16">Homepage View</p>
              <hr />
            </div>
            <div className="flex flex-col gap-12 py-8">
              {/* Permanent Following entry */}
              <div
                className={`text-size-14 flex flex-row align-center justify-between py-8 px-8 ${
                  currentCommunity.name === "Following"
                    ? "active-community"
                    : ""
                }`}
                onClick={() => onSelectCommunity({ name: "Following" })}
              >
                <div className="flex flex-row align-center gap-8">
                  <img className="svg-white width-24" src="./following.svg" />
                  <p>Following</p>
                </div>
              </div>

              {/* Communities */}
              {selectedCommunities.map((community) => (
                <div
                  key={community.name}
                  className={`text-size-14 flex flex-row align-center justify-between py-8 px-8 ${
                    community.name === currentCommunity.name
                      ? "active-community"
                      : ""
                  }`}
                  onClick={() => onSelectCommunity(community)}
                >
                  <div className="flex flex-row align-center gap-8">
                    {community.image && (
                      <img
                        src={community.image}
                        className="width-24 height-24 rounded-full"
                        alt={community.name}
                      />
                    )}
                    <p>{community.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Suggested Communities */}
          <div className="flex flex-col gap-12">
            <div>
              <p className="text-small weight-500 mb-16">
                Suggested Communities
              </p>
              <hr />
            </div>
            {availableCommunities.map((community) => (
              <div
                key={community.name}
                className="text-size-14 flex flex-row align-center justify-between gap-16 py-8 px-8"
              >
                <div className="flex flex-row align-center gap-8">
                  {community.image && (
                    <img
                      src={community.image}
                      className="width-24 height-24 rounded-full"
                      alt={community.name}
                    />
                  )}
                  <p>{community.name}</p>
                </div>
                <button
                  onClick={() => onAddCommunity(community)}
                  className="add-btn text-primary"
                >
                  <img className="svg-white width-18" src="./add.svg" alt="" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar bg-light-black">
        <nav className="container flex flex-row justify-between align-center py-24">
          <img
            className="width-32 svg-white cursor-pointer"
            src="./community.svg"
            alt="Menu"
            onClick={toggleSidebar}
          />

          <div className="flex flex-row align-center">
            <img className="width-24 svg-white" src="./star.svg" alt="Star" />
            <p className="text-medium weight-700">Verse</p>
          </div>

          {/* Messages add notifications */}
          <Link to="/inbox">
            <div className="position-relative">
              <img
                className="width-32 svg-white"
                src="./message-square.svg"
                alt="Message"
              />

              <div className="notification">
                <span className="weight-700 text-sm">4</span>
              </div>
            </div>
          </Link>
        </nav>
      </div>
    </>
  );
}
