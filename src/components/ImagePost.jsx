export default function ImagePost() {
  return (
    <div className="max-width-512 mx-auto">
      <div className="bg-dark">
        <div className="flex flex-row align-center gap-8">
          <img
            className="profile-picture"
            src="profile-picture-01.jpg"
            alt="Profile"
          />
          <p className="text-small">Username</p>
        </div>
      </div>

      <div>
        <div className="flex justify-center py-12">
          <img
            className="full-width border-radius"
            src="post-images/01.jpg"
            alt="image icon"
          />
        </div>
      </div>

      <div className="bg-dark-gray flex flex-col gap-16">
        <div className="flex flex-row justify-between align-center">
          <div className="flex flex-row gap-24">
            <img
              className="width-24 svg-white"
              src="./comment.svg"
              alt="Message"
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

        <div>
          <p className="text-extra-small">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi,
            quam. Atque minus accusantium magnam rerum, veniam laborum eius!
          </p>
        </div>
      </div>
    </div>
  );
}
