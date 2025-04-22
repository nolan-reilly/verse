import { useState } from "react";
import Navbar from "./components/Navbar";
import ImagePost from "./components/ImagePost";
import TextPost from "./components/TextPost";
import AudioPost from "./components/AudioPost";
import BottomNavigation from "./components/BottomNavigation";

export default function Homepage() {
  // Initialize with Following as permanent community (without image)
  const [selectedCommunities, setSelectedCommunities] = useState([
    {
      name: "Computer Science",
      image: "./community-images/computer-science.jpg",
    },
    {
      name: "Cats",
      image: "./community-images/cats.jpg",
    },
  ]);

  const [availableCommunities, setAvailableCommunities] = useState([
    {
      name: "Dogs",
      image: "./community-images/dogs.jpg",
    },
    {
      name: "Exercise",
      image: "./community-images/gym.jpg",
    },
  ]);

  // Following has no image
  const [currentCommunity, setCurrentCommunity] = useState({
    name: "Following",
  });

  const handleAddCommunity = (community) => {
    setSelectedCommunities([...selectedCommunities, community]);
    setAvailableCommunities(
      availableCommunities.filter((c) => c !== community)
    );
  };

  // Render different posts based on current community
  const renderCommunityContent = () => {
    switch (currentCommunity) {
      case "Following":
        return (
          <>
            <ImagePost />
            <ImagePost />
            <TextPost />
            <ImagePost />
            <AudioPost />
            <ImagePost />
          </>
        );
      case "Computer Science":
        return (
          <>
            <TextPost />
            <TextPost />
            <ImagePost />
          </>
        );
      case "Cats":
        return (
          <>
            <ImagePost />
            <ImagePost />
            <AudioPost />
          </>
        );
      default:
        return <TextPost>Select a community to view content</TextPost>;
    }
  };

  return (
    <div>
      <Navbar
        selectedCommunities={selectedCommunities}
        availableCommunities={availableCommunities}
        currentCommunity={currentCommunity}
        onAddCommunity={handleAddCommunity}
        onSelectCommunity={setCurrentCommunity}
      />

      <div className="content-grid py-16">
        <div className="container flex flex-col gap-32">
          {renderCommunityContent()}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
