import { useState } from "react";
import Navbar from "./components/Navbar";
import ImagePost from "./components/ImagePost";
import TextPost from "./components/TextPost";
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
    // Check the name property of the currentCommunity
    switch (currentCommunity.name) {
      case "Following":
        return (
          <>
            <ImagePost
              imageUrl="post-images/01.jpg"
              username="JaneDoe"
              description="Just visited this amazing place! What do you think?"
            />
            <ImagePost
              imageUrl="post-images/02.jpg"
              username="JohnSmith"
              description="My latest project. Took me three weeks to complete!"
            />
            <TextPost />
            <ImagePost
              imageUrl="post-images/03.jpg"
              username="TechEnthusiast"
              description="Check out this new gadget I got yesterday."
            />
            <ImagePost
              imageUrl="post-images/04.jpg"
              username="TravelBug"
              description="Sunset views from my recent trip to the coast."
            />
          </>
        );

      // TODO: Add post sections for each community
      case "Computer Science":
        return (
          <>
            <TextPost />
            <TextPost />
            <ImagePost
              imageUrl="post-images/coding.jpg"
              username="CodeMaster"
              description="My workspace for the new project. Clean code is happy code!"
            />
          </>
        );
      case "Cats":
        return (
          <>
            <ImagePost
              imageURL="post-images/01.jpg"
              userImageURL="profile-picture-01.jpg"
              username="SushiTheCat"
              description="Boom-cat activated! One spark of chaos, endless meow-nitions"
            />

            <ImagePost
              imageURL="post-images/02.jpg"
              userImageURL="profile-picture-02.jpg"
              username="OracleOfPurrs"
              description="Wizard cat conjures treats, disappears before"
            />

            <TextPost
              userImageURL="profile-picture-02.jpg"
              text="A cat’s love is earned, not given—making every head bump, slow blink, and lap snuggle a treasure. They’re part roommate, part therapist, and 100% adorable dictator. Life’s just better with whiskers in your face. 😻"
              username="SirKnocksALot"
            />

            <ImagePost
              imageURL="post-images/03.jpg"
              userImageURL="profile-picture-03.jpg"
              username="WhiskerWonder"
              description="Waterproof kitty struts confidently through"
            />

            <TextPost
              userImageURL="profile-picture-02.jpg"
              text="Dual-colored cats are nature's perfect artwork—each patch tells a story! Their split faces, mismatched paws, and unique patterns make every one a living masterpiece. Two colors, double the purr-sonality! 🎨🐾"
              username="FurryFriends"
            />

            <ImagePost
              imageURL="post-images/05.jpg"
              userImageURL="profile-picture-04.jpg"
              username="InkAndWhiskers"
              description="Disclaimer: This sophisticated gentleman"
            />
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
        <div className="container flex flex-col gap-44">
          {renderCommunityContent()}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
