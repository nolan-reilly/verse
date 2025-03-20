export default function Post() {
  return (
    <div className="max-width-512 mx-auto">
      <div className="bg-dark-gray">
        <div className="container flex flex-row align-center py-8 gap-8">
          <div className="circle-icon"></div>
          <p className="text-medium">Username</p>
        </div>
      </div>

      <div className="bg-light-gray">
        <div className="flex justify-center py-32">
          <img className="width-128" src="./image.svg" alt="image icon" />
        </div>
      </div>

      <div className="bg-dark-gray flex flex-col gap-16 py-24">
        <div className="container flex flex-row justify-between align-center">
          <div className="flex flex-row gap-24">
            <img className="width-28" src="./comment.svg" alt="Message" />
            <img className="width-28" src="./message.svg" alt="Message" />
          </div>

          <div>
            <img className="width-28" src="./bookmark.svg" alt="Message" />
          </div>
        </div>

        <div className="container">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi,
            quam. Atque minus accusantium magnam rerum, veniam laborum eius!
          </p>
        </div>
      </div>

      <hr className="my-24 color-light-gray" />
    </div>
  );
}
