import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Post from "./Post";
import SuggestedContent from "./SuggestContent";

export default function Homepage() {
  return (
    <div class="grid">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div>
        {/* Navbar for mobile */}
        <Navbar />

        <div className="content-grid py-16">
          <div>
            {/* large scrolling area */}
            <div>
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
          </div>

          <SuggestedContent />
        </div>
      </div>
    </div>
  );
}
