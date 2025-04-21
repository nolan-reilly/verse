import { useState, useEffect } from "react";

export default function Navbar() {
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
      {/* Overlay that appears behind the sidebar when it's open */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      )}

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header flex flex-row justify-between align-center py-24">
          <div className="flex flex-row align-center">
            <img className="width-24 svg-white" src="./star.svg" alt="Star" />
            <p className="text-medium weight-700">Verse</p>
          </div>
          <img
            className="width-18 svg-white cursor-pointer"
            src="./cross.svg"
            alt="Close"
            onClick={closeSidebar}
          />
        </div>

        <div className="sidebar-content py-24">
          <p className="text-small weight-500">Homepage View</p>

          <div className="sidebar-item flex flex-row align-center gap-16 py-16">
            <img className="width-24 svg-white" src="./home.svg" alt="Home" />
            <p className="text-small weight-500"></p>
          </div>
          <div className="sidebar-item flex flex-row align-center gap-16 py-16">
            <img
              className="width-24 svg-white"
              src="./explore.svg"
              alt="Explore"
            />
            <p className="text-small weight-500">Explore</p>
          </div>
          <div className="sidebar-item flex flex-row align-center gap-16 py-16">
            <img
              className="width-24 svg-white"
              src="./profile.svg"
              alt="Profile"
            />
            <p className="text-small weight-500">Profile</p>
          </div>
          <div className="sidebar-item flex flex-row align-center gap-16 py-16">
            <img
              className="width-24 svg-white"
              src="./settings.svg"
              alt="Settings"
            />
            <p className="text-small weight-500">Settings</p>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar bg-light-black">
        <nav className="container flex flex-row justify-between align-center py-24">
          <img
            className="width-32 svg-white cursor-pointer"
            src="./menu.svg"
            alt="Menu"
            onClick={toggleSidebar}
          />

          <div className="flex flex-row align-center">
            <img className="width-24 svg-white" src="./star.svg" alt="Star" />
            <p className="text-medium weight-700">Verse</p>
          </div>

          <img
            className="width-32 svg-white"
            src="./message.svg"
            alt="Message"
          />
        </nav>
      </div>
    </>
  );
}
