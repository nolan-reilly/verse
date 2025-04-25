import Navbar from "./components/Navbar";
import BottomNavigation from "./components/BottomNavigation";
import ImagePost from "./components/ImagePost";
import TextPost from "./components/TextPost";
import AudioPost from "./components/AudioPost";

export default function ProfilePage() {
  return (
    <div>
      
      {/* Navbar for mobile */}
      <Navbar />

      <div className="profile-grid py-16">
        <div className="container flex flex-col gap-32">
          {/* Posts scrolling area */}
          <div className="max-width-512 mx-auto">
            <div className="bg-dark">
              <div className="flex flex-row align-left gap-8">
                <img
                  className="profile-picture"
                  src="profile-picture-01.jpg"
                  alt="Profile"
                />
                <p className="text-small">This is my sample post! This is a text only post that the user can quickly post about their status in the day. </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="audio-sliver py-16">
        <div className="container flex flex-col gap-32">
          <div className="max-width-512 mx-auto">
            <div className="bg-dark">
              <div className="flex flex-row align-center gap-8">
                <img
                  className="profile-picture"
                  src="profile-picture-01.jpg"
                  alt="Profile"
                />
                <AudioPost/>
                This is my clip!
                <img
                  className="profile-picture"
                  src="post-images/04.jpg"
                  alt="Profile"
                />
                <img
                  className="profile-picture"
                  src="post-images/05.jpg"
                  alt="Profile"
                />
                <img
                  className="profile-picture"
                  src="post-images/01.jpg"
                  alt="Profile"
                />
                <img
                  className="profile-picture"
                  src="post-images/02.jpg"
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="image-sliver py-16">
        <div className="container flex flex-col gap-32">
          <div className=" mx-auto">
            <div className="bg-dark">
              <div className="flex flex-col align-center gap-8">
                <img
                  src="profile-picture-03.jpg"
                  alt="Profile"
                />
                Look at my cute dog!
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="image-sliver-with-comments py-16">
        <div className="container flex flex-col gap-32">
          <div className=" mx-auto">
            <div className="bg-dark">
              <div className="flex flex-row align-center gap-8">
                <img
                  src="profile-picture-02.jpg"
                  alt="Profile"
                />
                Look at my friends cute dog!
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="audio-sliver py-16">
        <div className="container flex flex-col gap-32">
          <div className="max-width-512 mx-auto">
            <div className="bg-dark">
              <div className="flex flex-row align-center gap-8">
                <img
                  className="profile-picture"
                  src="profile-picture-01.jpg"
                  alt="Profile"
                />
                <AudioPost/>
                This is my clip!
                <img
                  className="profile-picture"
                  src="post-images/04.jpg"
                  alt="Profile"
                />
                <img
                  className="profile-picture"
                  src="post-images/05.jpg"
                  alt="Profile"
                />
                <img
                  className="profile-picture"
                  src="post-images/01.jpg"
                  alt="Profile"
                />
                <img
                  className="profile-picture"
                  src="post-images/02.jpg"
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}
