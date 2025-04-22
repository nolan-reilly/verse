export default function ImageMessage({ isUser, imgmsg}) {
  return (
    <div className={`flex items-start gap-8 max-width-512 mx-auto ${isUser ? "flex-row-reverse" : "flex-row"}`}>
        {/* Profile picture */}
        <img
            className="profile-picture rounded-full"
            src="profile-picture-01.jpg"
            alt="Profile"
        />
        {/* Image message container */}
        <div className={`py-8 px-12 rounded-lg ${isUser ? "bg-primary" : "bg-light-gray"}`}>
          <img
            className="rounded-lg max-w-full"
            src={imgmsg}
            alt="Image message"
          />
        </div>
    </div>
  );
}