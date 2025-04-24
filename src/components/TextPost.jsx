export default function TextPost({
  userImageURL,
  text,
  username,
  onCommentClick,
}) {
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

      <div className="bg-dark-gray flex flex-col gap-16">
        <div className="flex flex-row justify-between align-center">
          <div className="flex flex-row gap-24">
            <img
              className="width-24 svg-white"
              src="./comment.svg"
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
              className="width-24 svg-white"
              src="./bookmark.svg"
              alt="Message"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
