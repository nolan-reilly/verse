//isUser: boolean determines if message is sent from the user or the other person
//message: string the message content
export default function TextMessage({ isUser, message }) {
  return (
    <div
      className={`flex flex-row gap-8 ${
        isUser ? "justify-end" : "justify-start"
      } width-full`}
    >
      {/* Profile Picture */}
      {!isUser && (
        <img
          className="profile-picture rounded-full"
          src="profile-pictures/messenger-profile-picture.jpg"
          alt="Profile"
        />
      )}

      <div className="flex flex-row align-center gap-12">
        {/* Message Bubble */}
        <div
          className={`text-extra-small py-8 px-12 rounded ${
            isUser ? "bg-blue text-white ml-auto" : "bg-light-black text-black"
          }`}
        >
          {message}
        </div>

        {/* Empty space for alignment */}
        {isUser && (
          <img
            className="profile-picture rounded-full"
            src="profile-pictures/user-profile-picture.jpg"
            alt="Profile"
          />
        )}
      </div>
    </div>
  );
}
