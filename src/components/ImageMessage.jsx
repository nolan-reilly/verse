export default function ImageMessage({ isUser, imgmsg }) {
  return (
    <div
      className={`flex items-start gap-8 full-width ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div className="flex flex-row gap-8">
        {/* Profile picture */}
        {!isUser && (
          <img
            className="profile-picture"
            src="profile-pictures/messenger-profile-picture.jpg"
            alt="Profile"
          />
        )}

        {/* Image message container */}
        <img
          className="max-width-512 width-60-percent rounded"
          src={imgmsg}
          alt="Image message"
        />
      </div>
    </div>
  );
}
