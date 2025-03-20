import Navbar from "./Navbar";
import Post from "./Post";

export default function Homepage() {
  return (
    <div class="grid">
      {/* Sidebar */}
      <div className="sidebar bg-light-gray">
        {/* Sidebar Navigation Items */}
        <div>
          <div className="flex flex-row align-center">
            <div>
              <img className="width-24" src="./home.svg" alt="Home Icon" />
            </div>
            <p>Home</p>
          </div>

          <div className="flex flex-row align-center">
            <div>
              <img className="width-24" src="./search.svg" alt="Search Icon" />
            </div>
            <p>Search</p>
          </div>

          <div className="flex flex-row align-center">
            <div>
              <img className="width-24" src="./heart.svg" alt="Heart Icon" />
            </div>
            <p>Notifications</p>
          </div>

          <div className="flex flex-row align-center">
            <div>
              <img
                className="width-24"
                src="./message.svg"
                alt="Message Icon"
              />
            </div>

            <p>Messages</p>
          </div>

          <div className="flex flex-row align-center">
            <div>
              <img className="width-24" src="./plus.svg" alt="Post Icon" />
            </div>

            <p>Post</p>
          </div>

          <div className="flex flex-row align-center">
            <div className="sm-circle-icon width-24"></div>
            <p>Profile</p>
          </div>
        </div>

        {/* Community Filter Items */}
        <div>
          <div>
            <p>Homepage View</p>
          </div>

          <div>
            <p>Join Community</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div>
        {/* Navbar for mobile */}
        <Navbar />

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
    </div>
  );
}
