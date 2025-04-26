import { Link } from "react-router-dom";
import { useState } from "react";
import SearchCommunity from "./components/SearchCommunity.jsx";
import SearchUser from "./components/SearchUser.jsx";
import BottomNavigation from "./components/BottomNavigation.jsx";

export default function SearchPage() {
  const [showCommunities, setShowCommunities] = useState(true);
  const [showUsers, setShowUsers] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const allResults = [
    {
      type: "user",
      userName: "GoldDRetriever",
      userPic: "profile-pictures/04.jpg",
    },
    {
      type: "community",
      comName: "Guitarists",
      comDesc: "Strum along with us!",
      comPic: "profile-pictures/guitarplayer.jpg",
    },
    {
      type: "community",
      comName: "Pear Fans",
      comDesc: "The best fruit!",
      comPic: "profile-pictures/pear.jpg",
    },
    {
      type: "user",
      userName: "NahImaDoMyOwnThing",
      userPic: "profile-pictures/dog-profile-02.jpg",
    },
    {
      type: "user",
      userName: "LMAOQueen",
      userPic: "profile-pictures/cs-03.jpg",
    },
    {
      type: "community",
      comName: "Lifting Gang",
      comDesc: "It's Zyzz bruh",
      comPic: "profile-pictures/exercise-profile-03.jpg",
    },
    {
      type: "user",
      userName: "LuffyD",
      userPic: "profile-pictures/user-profile-picture.jpg",
    },
    {
      type: "user",
      userName: "LinuxG",
      userPic: "profile-pictures/cs-02.jpg",
    },
    {
      type: "community",
      comName: "Ahh Hell Nah",
      comDesc: "Ah Hell Nah Memes",
      comPic: "profile-pictures/exercise-profile-01.jpg",
    },
  ];

  const filterOnlyCommunities = () => setShowUsers((prev) => !prev);
  const filterOnlyUsers = () => setShowCommunities((prev) => !prev);

  // Filter and search logic
  const filteredResults = allResults.filter((item) => {
    const matchesType =
      (item.type === "community" && showCommunities) ||
      (item.type === "user" && showUsers);

    const matchesSearch =
      item.type === "community"
        ? item.comName.toLowerCase().includes(searchQuery.toLowerCase())
        : item.userName.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesType && matchesSearch;
  });

  return (
    <div className="flex flex-col gap-8">
      <div className="navbar bg-light-black">
        <nav className="container flex flex-row justify-between align-center py-24">
          <Link to="/home">
            <div className="position-relative">
              <img
                className="width-18 svg-white"
                src="./backarrow.svg"
                alt="Back"
              />
            </div>
          </Link>

          <div className="flex flex-row align-center gap-8">
            <p className="text-medium weight-700">Explore</p>
          </div>

          {/* Empty div to maintain the flex layout */}
          <div></div>
        </nav>
      </div>

      <div className="large-container flex flex-col gap-8">
        <input
          className="inbox-text-input full-width"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Community/User filters */}
        <div className="bg-light-gray flex flex-row align-center gap-8 padding-8 relative ">
          <button
            className={`search-filter-btn ${!showUsers ? "active-button" : ""}`}
            onClick={filterOnlyCommunities}
          >
            Communities
          </button>
          <button
            className={`search-filter-btn ${
              !showCommunities ? "active-button" : ""
            }`}
            onClick={filterOnlyUsers}
          >
            Users
          </button>
        </div>

        {/* Search results */}
        <div>
          <ul className="flex flex-col align-center gap-8">
            {filteredResults.map((item, index) => {
              if (item.type === "community") {
                return (
                  <SearchCommunity
                    key={`com-${index}`}
                    comName={item.comName}
                    comDesc={item.comDesc}
                    comPic={item.comPic}
                  />
                );
              }
              return (
                <SearchUser
                  key={`user-${index}`}
                  userName={item.userName}
                  userPic={item.userPic}
                />
              );
            })}
          </ul>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
