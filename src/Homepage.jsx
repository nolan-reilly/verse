import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Post from "./Post";

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

          <div className="suggested-content gap-8">
            <p className="weight-600 text-small">Suggested for you</p>

            <div className="flex flex-row p-8 border-radius gap-16 bg-dark-gray">
              <div className="large-circle-icon width-24"></div>
              <div className="flex flex-col">
                <p className="text-medium">Username</p>
                <p className="text-small">Lorem ipsum dolor sit.</p>
              </div>
            </div>

            <div className="flex flex-row p-8 border-radius gap-16 bg-dark-gray">
              <div className="large-circle-icon width-24"></div>
              <div className="flex flex-col">
                <p className="text-medium">Username</p>
                <p className="text-small">Lorem ipsum dolor sit.</p>
              </div>
            </div>

            <div className="flex flex-row p-8 border-radius gap-16 bg-dark-gray">
              <div className="large-circle-icon width-24"></div>
              <div className="flex flex-col">
                <p className="text-medium">Username</p>
                <p className="text-small">Lorem ipsum dolor sit.</p>
              </div>
            </div>

            <div className="flex flex-row p-8 border-radius gap-16 bg-dark-gray">
              <div className="large-circle-icon width-24"></div>
              <div className="flex flex-col">
                <p className="text-medium">Username</p>
                <p className="text-small">Lorem ipsum dolor sit.</p>
              </div>
            </div>

            <div className="flex flex-row p-8 border-radius gap-16 bg-dark-gray">
              <div className="large-circle-icon width-24"></div>
              <div className="flex flex-col">
                <p className="text-medium">Username</p>
                <p className="text-small">Lorem ipsum dolor sit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
