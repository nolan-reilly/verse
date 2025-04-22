export default function TextPost() {
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
        <div className="flex flex-col justify-center py-12">
          <p className="text-extra-small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            quasi eos molestiae aspernatur et exercitationem eius voluptatem
            dolorum veritatis ut quisquam, voluptas, soluta harum facilis
            assumenda, voluptate reprehenderit. Fuga qui rerum aliquid
            consequuntur architecto assumenda nobis quasi? Accusamus, similique
            sapiente sint quis possimus suscipit veritatis voluptas. Ipsam
            voluptatibus autem accusamus magni distinctio!
          </p>
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
      </div>
    </div>
  );
}
