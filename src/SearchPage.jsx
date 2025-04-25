import { Link } from "react-router-dom";  
import { useState } from "react";
import BottomNavigation from "./components/BottomNavigation.jsx";
import SearchCommunity from "./components/SearchCommunity.jsx";
import SearchUser from "./components/SearchUser.jsx";

export default function SearchPage() {
  const [showCommunities, setShowCommunities] = useState(true);
  const [showUsers, setShowUsers] = useState(true);


  const filterOnlyCommunities = () => {
    setShowUsers((prev) => !prev);
  };

  const filterOnlyUsers = () => {
    setShowCommunities((prev) => !prev);
  };

  return (
    <div className="bg-dark-black flex flex-col margin-8 gap-8 padding-48">
      {/* Search bar */}
      <div>
        <div className="bg-light-gray flex flex-row align-center gap-16 padding-16 relative text-input">
            <img
              className="width-16 svg-gray"
              src="./search.svg"
              alt="Search"
              style={{position: 'absolute', left: '18px', width: '24px'}}
            />
            <input 
              className="full-width"
              style={{paddingLeft: '28px', color: 'gray'}}
              placeholder="Search...">
            </input>
        </div>
      </div>

      {/* Community/User filters */}
      <div className="bg-light-gray flex flex-row align-center gap-8 padding-8 relative " >
        {/* These should cause all the opposite ones to be hidden when activated */}
        <button
          className={`bg-light-black border-radius ${
            !showUsers ? "active-button" : ""
          }`}
          style={{ width: "10%", overflow: "hidden" }}
          onClick={filterOnlyCommunities}
        >Communities</button>
        <button
          className={`bg-light-black border-radius ${
            !showCommunities ? "active-button" : ""
          }`}
          style={{ width: "10%", overflow: "hidden" }}
          onClick={filterOnlyUsers}
        >
          Users
        </button>
      </div>

      {/* Search results */}
      <div>
        <ul className="flex flex-col align-center margin-8 gap-8 padding-48">
          {showCommunities && (
            <>
            <SearchCommunity
              comName="Guitarists"
              comDesc="Strum along with us!"
              comPic="/public/guitarplayer.jpg"/>
            <SearchCommunity
              comName="Pear Fans"
              comDesc="The best fruit!"
              comPic="pear.jpg"/>
            </>
          )} 
          {showUsers && (
            <>
            <SearchUser
              userName="GoldDRetriever" 
              userPic="/public/profile-picture-04.jpg"/>
            </>
          )}  
        </ul>
        
      </div>

      <BottomNavigation />
    </div>
  );
}
