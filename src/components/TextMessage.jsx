//isUser: boolean determines if message is sent from the user or the other person
//message: string the message content
export default function TextMessage({ isUser, message }) {
    return (
        <div className={`flex items-start gap-8 ${isUser ? "justify-end" : "justify-start"} w-full`}>
            {/* Profile Picture */}
            {!isUser && (
                <img
                    className="profile-picture rounded-full"
                    src="profile-picture-02.jpg"
                    alt="Profile"
                />
            )}

            {/* Message Bubble */}
            <div className={`bg-dark-gray text-extra-small py-8 px-12 rounded-lg max-w-xs ${isUser ? "bg-primary text-white ml-auto" : "bg-light-gray text-black"}`}>
                {message}
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