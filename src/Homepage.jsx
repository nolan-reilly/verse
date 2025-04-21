import Navbar from "./components/Navbar";
import Post from "./components/Post";
import BottomNavigation from "./components/BottomNavigation";

export default function Homepage() {
  return (
    <div>
      {/* Navbar for mobile */}
      <Navbar />

      <div className="content-grid py-16">
        <div className="container flex flex-col gap-16">
          {/* Posts scrolling area */}
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}
