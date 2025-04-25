export default function ImageMessage({ isUser, imgmsg }) {
  return (
    <div className={`flex items-start gap-8 w-full ${isUser ? "justify-end" : "justify-start"}`}>
      {/* Profile picture */}
      {!isUser && (
        <img
          className="profile-picture rounded-full"
          src="profile-picture-02.jpg"
          alt="Profile"
        />
      )}

      {/* Image message container */}
      <div className={`py-8 px-12 rounded-lg ${isUser ? "bg-primary" : "bg-light-gray"}`}>
        <img
          className="rounded-lg max-w-full"
          src={imgmsg}
          alt="Image message"
        />
      </div>

      {/* Empty space for alignment */}
      {isUser && (
        <img
          className="profile-picture rounded-full"
          src="profile-picture-01.jpg"
          alt="Profile"
        />
      )}
    </div>
  );
}