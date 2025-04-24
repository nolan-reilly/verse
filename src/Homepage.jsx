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
              imageURL="post-images/cs-01.jpg"
              userImageURL="profile-pictures/cs-01.jpg"
              username="pypg12"
              description="Code runs silently through digital veins 💻"
            />

            <ImagePost
              imageURL="post-images/01.jpg"
              userImageURL="profile-pictures/01.jpg"
              username="SushiTheCat"
              description="Boom-cat activated! One spark of chaos, endless meow-nitions"
            />

            <TextPost
              userImageURL="profile-pictures/02.jpg"
              text="Dual-colored cats are nature's perfect artwork—each patch tells a story! Their split faces, mismatched paws, and unique patterns make every one a living masterpiece. Two colors, double the purr-sonality! 🎨🐾"
              username="FurryFriends"
            />

            <ImagePost
              imageURL="post-images/cs-02.jpg"
              userImageURL="profile-pictures/cs-02.jpg"
              username="PC"
              description="Keyboard clicks echo in empty"
            />

            <ImagePost
              imageURL="post-images/cs-03.jpg"
              userImageURL="profile-pictures/cs-03.jpg"
              username="AverageLinuxUser"
              description="RAM never forgets until power dies 🔌"
            />

            <ImagePost
              imageURL="post-images/dog-01.jpg"
              userImageURL="profile-pictures/dog-profile-01.jpg"
              username="TechDog"
              description="agging tails tell stories that words could never express 🐕"
            />

            <ImagePost
              imageURL="post-images/dog-02.jpg"
              userImageURL="profile-pictures/dog-profile-02.jpg"
              username="DogLover11"
              description="Loyal companions who know your heart"
            />

            <TextPost
              userImageURL="profile-pictures/dog-profile-01.jpg"
              text="Digital pioneer with a canine spirit, techdog navigates cyberspace with playful curiosity and unwavering loyalty, sniffing out solutions where others see only obstacles. 🐕‍🦺💻"
              username="TechDog"
            />

            <TextPost
              userImageURL="profile-pictures/02.jpg"
              text="A community-driven powerhouse, this Linux distribution balances bleeding-edge innovation with rock-solid stability. Its package management system works like magic 🪄, while the terminal becomes a playground for tech enthusiasts and system administrators alike. 🐧 Freedom and customization reign supreme in this open-source kingdom. 💻"
              username="AverageLinuxUser"
            />

            <ImagePost
              imageURL="post-images/cs-02.jpg"
              userImageURL="profile-pictures/cs-02.jpg"
              username="PC"
              description="Keyboard clicks echo in empty"
            />
          </>
        );

      // TODO: Add post sections for each community
      case "Computer Science":
        return (
          <>
            <ImagePost
              imageURL="post-images/cs-01.jpg"
              userImageURL="profile-pictures/cs-01.jpg"
              username="pypg12"
              description="Code runs silently through digital veins 💻"
            />

            <TextPost
              userImageURL="profile-pictures/02.jpg"
              text="A community-driven powerhouse, this Linux distribution balances bleeding-edge innovation with rock-solid stability. Its package management system works like magic 🪄, while the terminal becomes a playground for tech enthusiasts and system administrators alike. 🐧 Freedom and customization reign supreme in this open-source kingdom. 💻"
              username="AverageLinuxUser"
            />

            <ImagePost
              imageURL="post-images/cs-02.jpg"
              userImageURL="profile-pictures/cs-02.jpg"
              username="PC"
              description="Keyboard clicks echo in empty"
            />

            <ImagePost
              imageURL="post-images/cs-03.jpg"
              userImageURL="profile-pictures/cs-03.jpg"
              username="AverageLinuxUser"
              description="RAM never forgets until power dies 🔌"
            />

            <ImagePost
              imageURL="post-images/cs-04.jpg"
              userImageURL="profile-pictures/cs-02.jpg"
              username="PC"
              description="Silicon dreams beneath blinking indicator lights"
            />

            <TextPost
              userImageURL="profile-pictures/cs-01.jpg"
              text="Python and PostgreSQL form a powerful alliance in modern development. Python's elegant syntax and versatile libraries harmonize perfectly with PostgreSQL's robust relational database capabilities. Together, they enable everything from data analysis to web applications, offering reliability, scalability, and performance. This dynamic duo empowers developers to build sophisticated systems with clean code and structured data storage."
              username="pypg12"
            />

            <ImagePost
              imageURL="post-images/dog-04.jpg"
              userImageURL="profile-pictures/dog-profile-01.jpg"
              username="TechDog"
              description="Nose to the ground🦮, adventure in every"
            />
          </>
        );
      case "Cats":
        return (
          <>
            <ImagePost
              imageURL="post-images/01.jpg"
              userImageURL="profile-pictures/01.jpg"
              username="SushiTheCat"
              description="Boom-cat activated! One spark of chaos, endless meow-nitions"
            />

            <ImagePost
              imageURL="post-images/02.jpg"
              userImageURL="profile-pictures/02.jpg"
              username="OracleOfPurrs"
              description="Wizard cat conjures treats, disappears before"
            />

            <TextPost
              userImageURL="profile-pictures/02.jpg"
              text="A cat’s love is earned, not given—making every head bump, slow blink, and lap snuggle a treasure. They’re part roommate, part therapist, and 100% adorable dictator. Life’s just better with whiskers in your face. 😻"
              username="SirKnocksALot"
            />

            <ImagePost
              imageURL="post-images/03.jpg"
              userImageURL="profile-pictures/03.jpg"
              username="WhiskerWonder"
              description="Waterproof kitty struts confidently through"
            />

            <TextPost
              userImageURL="profile-pictures/02.jpg"
              text="Dual-colored cats are nature's perfect artwork—each patch tells a story! Their split faces, mismatched paws, and unique patterns make every one a living masterpiece. Two colors, double the purr-sonality! 🎨🐾"
              username="FurryFriends"
            />

            <ImagePost
              imageURL="post-images/05.jpg"
              userImageURL="profile-pictures/04.jpg"
              username="InkAndWhiskers"
              description="Disclaimer: This sophisticated gentleman"
            />
          </>
        );
      case "Dogs":
        return (
          <>
            <ImagePost
              imageURL="post-images/dog-01.jpg"
              userImageURL="profile-pictures/dog-profile-01.jpg"
              username="TechDog"
              description="agging tails tell stories that words could never express 🐕"
            />

            <ImagePost
              imageURL="post-images/dog-02.jpg"
              userImageURL="profile-pictures/dog-profile-02.jpg"
              username="DogLover11"
              description="Loyal companions who know your heart"
            />

            <TextPost
              userImageURL="profile-pictures/dog-profile-01.jpg"
              text="Digital pioneer with a canine spirit, techdog navigates cyberspace with playful curiosity and unwavering loyalty, sniffing out solutions where others see only obstacles. 🐕‍🦺💻"
              username="TechDog"
            />

            <ImagePost
              imageURL="post-images/dog-03.jpg"
              userImageURL="profile-pictures/dog-profile-03.jpg"
              username="TerrierJoe33"
              description="Ancient partnership forged through millennia of"
            />

            <ImagePost
              imageURL="post-images/dog-04.jpg"
              userImageURL="profile-pictures/dog-profile-01.jpg"
              username="TechDog"
              description="Nose to the ground🦮, adventure in every"
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
