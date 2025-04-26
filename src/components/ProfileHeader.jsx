import { useState } from "react";
import { Link } from "react-router-dom";
import DraggableImageCanvas from "./DraggableImageCanvas";

export default function ProfileHeader({ profileURL, description }) {
  const defaultImages = [
    {
      id: 1,
      url: "drag-images/drag-01.png",
      x: 50,
      y: 50,
      zIndex: 1,
      scale: 3,
    },
    {
      id: 2,
      url: "drag-images/drag-02.png",
      x: 150,
      y: 100,
      zIndex: 1,
      scale: 3,
    },
    {
      id: 3,
      url: "drag-images/drag-03.png",
      x: 250,
      y: 30,
      zIndex: 1,
      scale: 4,
    },
    {
      id: 4,
      url: "drag-images/drag-04.png",
      x: 250,
      y: 30,
      zIndex: 1,
      scale: 3,
    },
    {
      id: 5,
      url: "drag-images/drag-05.png",
      x: 250,
      y: 30,
      zIndex: 1,
      scale: 2,
    },
  ];

  const [images, setImages] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("profileHeaderImages");
        if (stored) return JSON.parse(stored);
      } catch (err) {
        console.warn("Corrupted layout in localStorage – using defaults.", err);
      }
    }
    return defaultImages;
  });

  const [isFollowing, setIsFollowing] = useState(false);
  const toggleFollow = () => setIsFollowing((f) => !f);

  const saveLayout = () => {
    try {
      localStorage.setItem("profileHeaderImages", JSON.stringify(images));
    } catch (e) {
      console.error("Failed to save layout", e);
    }
  };

  return (
    <div className="flex flex-col gap-24">
      {/* profile picture & buttons */}
      <div className="flex flex-row justify-between">
        <img className="profile-page-picture" src={profileURL} />
        <div className="flex flex-row gap-16 align-center">
          <button
            onClick={toggleFollow}
            className={`profile-follow-btn ${isFollowing ? "following" : ""}`}
          >
            {isFollowing ? "Following" : "Follow"}
          </button>
          <Link className="profile-message-btn" to="/messaging">
            Message
          </Link>

          <button className="edit-profile-btn">Edit Profile</button>
        </div>
      </div>

      <p className="text-extra-small">{description}</p>

      <div className="flex flex-row align-center gap-16">
        <img className="svg-white width-18" src="play.svg" alt="" />
        <div className="profile-page-play-timeline"></div>
        <p className="text-extra-small font-bold">0:00/4:12</p>
      </div>

      <div className="flex flex-col gap-16">
        <DraggableImageCanvas images={images} setImages={setImages} />
        <button onClick={saveLayout} className="draggable-save-btn">
          Save Layout
        </button>
      </div>

      <div className="flex flex-col gap-8">
        <p className="text-small font-bold">Top Communities</p>

        <div className="flex flex-row gap-4">
          <img
            className="profile-page-community-picture"
            src="community-images/cats.jpg"
          />
          <img
            className="profile-page-community-picture"
            src="community-images/computer-science.jpg"
          />
          <img
            className="profile-page-community-picture"
            src="community-images/dogs.jpg"
          />
          <img
            className="profile-page-community-picture"
            src="community-images/gym.jpg"
          />
        </div>
      </div>
    </div>
  );
}
