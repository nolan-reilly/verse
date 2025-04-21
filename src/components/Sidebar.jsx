export default function Sidebar() {
  return (
    <div className="sidebar py-24 bg-light-black">
      <div className="flex flex-col gap-44">
        {/* Logo */}
        <div className="flex flex-row align-center">
          <img className="width-48" src="./star.svg" alt="Star" />
          <p className="text-large weight-700">Verse</p>
        </div>

        {/* Sidebar Navigation Items */}
        <div className="flex flex-col gap-16">
          <div className="flex flex-row align-center gap-8">
            <div>
              <img className="width-28" src="./home.svg" alt="Home Icon" />
            </div>
            <p className="text-medium">Home</p>
          </div>

          <div className="flex flex-row align-center gap-8">
            <div>
              <img className="width-28" src="./search.svg" alt="Search Icon" />
            </div>
            <p className="text-medium">Search</p>
          </div>

          <div className="flex flex-row align-center gap-8">
            <div>
              <img className="width-28" src="./heart.svg" alt="Heart Icon" />
            </div>
            <p className="text-medium">Notifications</p>
          </div>

          <div className="flex flex-row align-center gap-8">
            <div>
              <img
                className="width-28"
                src="./message.svg"
                alt="Message Icon"
              />
            </div>

            <p className="text-medium">Messages</p>
          </div>

          <div className="flex flex-row align-center gap-8">
            <div>
              <img className="width-28" src="./plus.svg" alt="Post Icon" />
            </div>

            <p className="text-medium">Post</p>
          </div>

          <div className="flex flex-row align-center gap-8">
            <div className="circle-icon width-24"></div>
            <p className="text-medium">Profile</p>
          </div>
        </div>

        {/* Community Filter Items */}
        <div className="flex flex-col gap-24">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-medium">Homepage View</p>
              <hr />
            </div>

            <div className="flex flex-row align-center gap-8 bg-dark-gray p-4 border-radius">
              <div className="sm-circle-icon width-24"></div>
              <p>Following</p>
            </div>

            <div className="flex flex-row align-center gap-8 bg-dark-gray p-4 border-radius">
              <div className="sm-circle-icon width-24"></div>
              <p>Computer Science</p>
            </div>

            <div className="flex flex-row align-center gap-8 bg-dark-gray p-4 border-radius">
              <div className="sm-circle-icon width-24"></div>
              <p>UI/UX</p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <p className="text-medium">Join Community</p>
              <hr />
            </div>

            <div className="flex flex-row align-center gap-8 bg-dark-gray p-4 border-radius">
              <div className="sm-circle-icon width-24"></div>
              <p>Art</p>
            </div>

            <div className="flex flex-row align-center gap-8 bg-dark-gray p-4 border-radius">
              <div className="sm-circle-icon width-24"></div>
              <p>Gaming</p>
            </div>

            <div className="flex flex-row align-center gap-8 bg-dark-gray p-4 border-radius">
              <div className="sm-circle-icon width-24"></div>
              <p>Exercise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
