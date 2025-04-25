import { useState } from "react";

export default function TextPost({
  userImageURL,
  text,
  username,
  onCommentClick,
}) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="max-width-512 flex flex-col gap-12 full-width mx-auto">
      <div className="bg-dark">
        <div className="flex flex-row align-center gap-8">
          <img className="profile-picture" src={userImageURL} alt="Profile" />
          <p className="text-small">{username}</p>
        </div>
      </div>

      <div>
        <div className="flex flex-col justify-center py-12">
          <p className="text-extra-small">{text}</p>
        </div>
      </div>

      <div className="flex flex-col gap-16">
        <div className="flex flex-row justify-between align-center">
          <div className="flex flex-row gap-24">
            <img
              className="width-28 svg-white"
              src="./comment-filled.svg"
              alt="Message"
              onClick={onCommentClick}
            />
            <img
              className="width-24 svg-white"
              src="./message.svg"
              alt="Message"
            />
          </div>

          <div>
            <img
              className={`width-24 svg-white cursor-pointer no-select ${
                isBookmarked ? "bookmark-animation" : ""
              }`}
              src={
                isBookmarked
                  ? "./bookmark-filled.svg"
                  : "./bookmark-outline.svg"
              }
              alt="Bookmark"
              onClick={handleBookmarkClick}
              style={{
                transition: "transform 0.2s ease-in-out",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
