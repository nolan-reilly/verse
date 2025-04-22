import Navbar from "./components/Navbar";
import ImagePost from "./components/ImagePost";
import TextPost from "./components/TextPost";
import AudioPost from "./components/AudioPost";
import BottomNavigation from "./components/BottomNavigation";

export default function Homepage() {
  return (
    <div>
      {/* Navbar for mobile */}
      <Navbar />

      <div className="content-grid py-16">
        <div className="container flex flex-col gap-32">
          {/* Posts scrolling area */}
          <ImagePost />
          <ImagePost />
          <TextPost />
          <ImagePost />
          <AudioPost />
          <ImagePost />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}
