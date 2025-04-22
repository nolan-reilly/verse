//isUser: boolean determines if message is sent from the user or the other person
//message: string the message content
export default function TextMessage({ isUser, message }) {
    return (
        <div className={`flex items-start gap-8 max-width-512 mx-auto ${isUser ? "flex-row-reverse" : "flex-row"}`}>
            {/* Profile Picture */}
            <img
                className="profile-picture rounded-full"
                src="profile-picture-01.jpg"
                alt="Profile"
            />

            {/* Message Bubble */}
            <div className={`bg-dark-gray text-extra-small py-8 px-12 rounded-lg ${isUser ? "bg-primary text-white" : "bg-light-gray text-black"}`}>
                {message}
            </div>
        </div>
    );
}